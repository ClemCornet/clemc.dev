import type { H3Event } from 'h3'
import type { UIMessage } from 'ai'
import { streamText, convertToModelMessages, tool, stepCountIs, APICallError } from 'ai'
import { createOpenAI } from '@ai-sdk/openai'
import { z } from 'zod'

export default defineLazyEventHandler(async () => {
  const apiKey = useRuntimeConfig().openaiApiKey
  console.log('[Chat API] Initializing - API Key present:', !!apiKey)
  if (!apiKey) throw new Error('Missing OpenAI API key')
  const openai = createOpenAI({
    apiKey: apiKey,
  })

  return defineEventHandler(async (event: H3Event) => {
    try {
      const { messages }: { messages: UIMessage[] } = await readBody(event)
      console.log('[Chat API] Received messages:', messages.length)

      const result = streamText({
        model: openai('gpt-4o'),
        system: `You are an assistant presenting Clément Cornet's resume.

STRICT RULES:
- You MUST ALWAYS use the available tools to answer questions
- NEVER respond directly without using a tool
- If information is not available via the tools, state it clearly
- Stay professional, concise and factual
- Present information in a structured and pleasant way
- You must speak in first person singular (I/me)
- Use markdown to format your answers (lists, bold, etc.)

AVAILABLE TOOLS:
- getAbout: General presentation and contact information
- getExperiences: Complete list of professional experiences
- getExperienceDetails: Details of a specific experience (by company name)
- getSkills: Technical skills by category
- getProjects: Personal or professional projects
- getEducation: Academic background

When the user asks a question, choose the appropriate tool(s) to answer it.`,
        messages: convertToModelMessages(messages),
        stopWhen: stepCountIs(5),
        tools: {
          getAbout: tool({
            description: 'Get general information: name, title, bio, location and contacts',
            inputSchema: z.object({}),
            execute: async () => {
              return await $fetch('/api/cv/about')
            },
          }),
          getExperiences: tool({
            description: 'Get the complete list of professional experiences with a summary of each',
            inputSchema: z.object({}),
            execute: async () => {
              const experiences = await $fetch<Array<{
                company: string
                role: string
                period: string
                location: string
                description: string
                achievements: string[]
                technologies: string[]
                website?: string
              }>>('/api/cv/experiences')
              return experiences.map(exp => ({
                company: exp.company,
                role: exp.role,
                period: exp.period,
                location: exp.location,
              }))
            },
          }),
          getExperienceDetails: tool({
            description: 'Get complete details of a specific professional experience (description, achievements, technologies)',
            inputSchema: z.object({
              company: z.string().describe('The company name (e.g., "Patrowl.io", "Le Collectionist", "Meero")'),
            }),
            execute: async ({ company }) => {
              const experiences = await $fetch<Array<{
                company: string
                role: string
                period: string
                location: string
                description: string
                achievements: string[]
                technologies: string[]
                website?: string
              }>>('/api/cv/experiences')
              const experience = experiences.find(
                exp => exp.company.toLowerCase() === company.toLowerCase(),
              )
              if (!experience) {
                return { error: `No experience found for company "${company}"` }
              }
              return experience
            },
          }),
          getSkills: tool({
            description: 'Get technical skills, optionally filtered by category',
            inputSchema: z.object({
              category: z.string().optional().describe('Skills category (e.g., "Frontend", "Backend", "DevOps")'),
            }),
            execute: async ({ category }) => {
              const skills = await $fetch<Array<{
                category: string
                skills: string[]
              }>>('/api/cv/skills')
              if (category) {
                const skillCategory = skills.find(
                  s => s.category.toLowerCase() === category.toLowerCase(),
                )
                return skillCategory || { error: `No category "${category}" found` }
              }
              return skills
            },
          }),
          getProjects: tool({
            description: 'Get the list of personal or professional projects',
            inputSchema: z.object({}),
            execute: async () => {
              return await $fetch('/api/cv/projects')
            },
          }),
          getEducation: tool({
            description: 'Get academic background and education',
            inputSchema: z.object({}),
            execute: async () => {
              return await $fetch('/api/cv/education')
            },
          }),
        },
      })

      return result.toUIMessageStreamResponse()
    }
    catch (error) {
      console.error('[Chat API] Error occurred:', error)

      if (APICallError.isInstance(error)) {
        console.error('[Chat API] API Call Error Details:', {
          message: error.message,
          cause: error.cause,
          url: error.url,
          statusCode: error.statusCode,
          responseHeaders: error.responseHeaders,
          responseBody: error.responseBody,
          isRetryable: error.isRetryable,
        })
      }

      throw error
    }
  })
})
