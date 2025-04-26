<script setup lang="ts">
const description = `I'm Clément, a frontend developer based in Paris, mainly focused on JavaScript, TypeScript, Vue.js, and Nuxt.js.`

useSeoMeta({
  title: 'About',
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
        About me
      </h1>
      <ul class="mt-12">
        <li>Incoming ...</li>
      </ul>
    </div>
  </UContainer>
</template>
