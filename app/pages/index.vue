<script setup lang="ts">
const description = `I'm Clément, a frontend developer based in Paris, mainly focused on JavaScript, TypeScript, Vue.js, and Nuxt.js.`

useSeoMeta({
  title: '',
  ogTitle: 'Clement Cornet - Frontend Developer',
  description,
})
</script>

<template>
  <UContainer
    as="main"
    class="flex flex-col md:flex-row gap-x-16"
  >
    <div class="flex my-8 md:my-0 items-center justify-center">
      <HomeImage />
    </div>
    <div class="flex flex-1 md:flex-none items-center justify-center">
      <HomeSelfPresentation />
    </div>
  </UContainer>
</template>
