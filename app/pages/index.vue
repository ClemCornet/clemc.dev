<script setup lang="ts">
const description = `I'm Clément, a frontend developer based in Paris, mainly focused on JavaScript, TypeScript, Vue.js, and Nuxt.js.`

useSeoMeta({
  title: '',
  ogTitle: 'Clement Cornet - Frontend Developer',
  description,
})
</script>

<template>
  <main class="flex flex-col gap-8 my-8">
    <HomeHeader />
    <HomeBlogFeatured />
  </main>
</template>
