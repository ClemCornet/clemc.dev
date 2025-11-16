import type { H3Event } from 'h3'
import type { UIMessage } from 'ai'
import { streamText, convertToModelMessages, tool, stepCountIs } from 'ai'
import { createOpenAI } from '@ai-sdk/openai'
import { z } from 'zod'

export default defineLazyEventHandler(async () => {
  const apiKey = useRuntimeConfig().openaiApiKey
  if (!apiKey) throw new Error('Missing OpenAI API key')
  const openai = createOpenAI({
    apiKey: apiKey,
  })

  return defineEventHandler(async (event: H3Event) => {
    const { messages }: { messages: UIMessage[] } = await readBody(event)

    const result = streamText({
      model: openai('gpt-4o'),
      system: `Tu es un assistant qui présente le CV de Clément Cornet.

RÈGLES STRICTES :
- Tu DOIS TOUJOURS utiliser les tools disponibles pour répondre aux questions
- Ne réponds JAMAIS directement sans utiliser un tool
- Si une information n'est pas disponible via les tools, dis-le clairement
- Reste professionnel, concis et factuel
- Présente les informations de manière structurée et agréable à lire
- Utilise le markdown pour formater tes réponses (listes, gras, etc.)

TOOLS DISPONIBLES :
- getAbout: Présentation générale et informations de contact
- getExperiences: Liste complète des expériences professionnelles
- getExperienceDetails: Détails d'une expérience spécifique (par nom d'entreprise)
- getSkills: Compétences techniques par catégorie
- getProjects: Projets personnels ou professionnels
- getEducation: Parcours académique

Quand l'utilisateur pose une question, choisis le ou les tools appropriés pour y répondre.`,
      messages: convertToModelMessages(messages),
      stopWhen: stepCountIs(5),
      tools: {
        getAbout: tool({
          description: 'Obtenir les informations générales : nom, titre, bio, localisation et contacts',
          inputSchema: z.object({}),
          execute: async () => {
            return await $fetch('/api/cv/about')
          },
        }),
        getExperiences: tool({
          description: 'Obtenir la liste complète des expériences professionnelles avec un résumé de chacune',
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
          description: 'Obtenir les détails complets d\'une expérience professionnelle spécifique (description, achievements, technologies)',
          inputSchema: z.object({
            company: z.string().describe('Le nom de l\'entreprise (ex: "Patrowl.io", "Le Collectionist", "Meero")'),
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
              return { error: `Aucune expérience trouvée pour l'entreprise "${company}"` }
            }
            return experience
          },
        }),
        getSkills: tool({
          description: 'Obtenir les compétences techniques, optionnellement filtrées par catégorie',
          inputSchema: z.object({
            category: z.string().optional().describe('Catégorie de compétences (ex: "Frontend", "Backend", "DevOps")'),
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
              return skillCategory || { error: `Aucune catégorie "${category}" trouvée` }
            }
            return skills
          },
        }),
        getProjects: tool({
          description: 'Obtenir la liste des projets personnels ou professionnels',
          inputSchema: z.object({}),
          execute: async () => {
            return await $fetch('/api/cv/projects')
          },
        }),
        getEducation: tool({
          description: 'Obtenir le parcours académique et les formations',
          inputSchema: z.object({}),
          execute: async () => {
            return await $fetch('/api/cv/education')
          },
        }),
      },
    })

    return result.toUIMessageStreamResponse()
  })
})
