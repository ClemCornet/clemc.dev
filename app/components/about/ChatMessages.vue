<script setup lang="ts">
import { Chat } from '@ai-sdk/vue'
import { getTextFromMessage } from '@nuxt/ui/utils/ai'

const input = ref('')
const chat = new Chat({
  messages: [{
    id: 'welcome-message',
    role: 'assistant',
    parts: [
      {
        type: 'text' as const,
        text: 'Hi! I\'m **Clem\'s AI persona**. Ask me anything about him or his work. I\'ll be happy to assist you.',
      },
    ],
  }],
})

const example = [
  {
    id: 'example-1',
    color: 'bg-slate-100 text-slate-600 hover:bg-slate-200',
    text: 'Are you available for hire?',
  },
  {
    id: 'example-2',
    color: 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200',
    text: 'What are your core technologies?',
  },
  {
    id: 'example-3',
    color: 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200',
    text: 'What types of projects have you worked on?',
  },
]

function onSubmit(e: Event) {
  e.preventDefault()
  chat.sendMessage({ text: input.value })
  input.value = ''
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <UChatMessages
      :assistant="{
        variant: 'soft',
        side: 'left',
        ui: {
          content: 'bg-primary-100 text-primary-700',
        },
      }"
      :messages="chat.messages"
      should-auto-scroll
      :status="chat.status"
      :ui="{
        root: 'ring ring-default rounded-lg p-4 h-[400px] max-h-[400px] overflow-y-auto flex-none',
      }"
      :user="{
        variant: 'soft',
        side: 'right',
        ui: {
          content: 'bg-blue-100 text-blue-700',
        },
      }"
    >
      <template #content="{ message }">
        <MDC
          :cache-key="message.id"
          class="*:first:mt-0 *:last:mb-0"
          :value="getTextFromMessage(message)"
        />
      </template>
      <template #indicator>
        <UButton
          class="px-0"
          color="neutral"
          label="Consulting the crystal ball 🔮"
          loading
          loading-icon="i-lucide-loader"
          variant="link"
        />
      </template>
    </UChatMessages>

    <div class="flex justify-between gap-2">
      <div
        v-for="message in example"
        :key="message.id"
        class="flex-1 flex"
      >
        <div
          :class="['text-center min-w-0 px-4 py-2 rounded-lg text-xs w-full flex items-center justify-center transition duration-300 ease-in-out md:hover:scale-95 select-none cursor-pointer', message.color]"
          @click="input = message.text"
        >
          {{ message.text }}
        </div>
      </div>
    </div>

    <UChatPrompt
      v-model="input"
      :error="chat.error"
      @submit="onSubmit"
    >
      <UChatPromptSubmit
        :status="chat.status"
        @reload="chat.regenerate()"
        @stop="chat.stop()"
      />
    </UChatPrompt>
  </div>
</template>
