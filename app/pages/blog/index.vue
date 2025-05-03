<script setup lang="ts">
const description = `Discover daily insights and lessons from my journey as a frontend developer, covering JavaScript, TypeScript, Vue.js, Nuxt.js, and more.`
useSeoMeta({
  title: 'Today I learned',
  ogTitle: 'Clement Cornet - Frontend Developer',
  description,
})
</script>

<template>
  <UContainer
    as="main"
    class="flex flex-1 flex-col mt-12"
  >
    <div class="mx-auto w-full max-w-xl px-0">
      <h1 class="mb-2 text-2xl font-semibold">
        Today I learned
      </h1>
      <p class="ml-1 text-sm text-neutral-500 dark:text-neutral-400">
        Discover daily insights and lessons from my journey as a frontend developer, covering JavaScript, TypeScript, Vue.js, Nuxt.js, and more. 🎢
      </p>
      <ul class="mt-12">
        <li>Incoming ...</li>
      </ul>
    </div>
  </UContainer>
</template>
