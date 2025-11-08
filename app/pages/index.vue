<script setup lang="ts">
const description = `I'm Clément, a frontend developer based in Paris, mainly focused on JavaScript, TypeScript, Vue.js, and Nuxt.js.`

useSeoMeta({
  title: '',
  ogTitle: 'Clement Cornet - Frontend Developer',
  description,
})
</script>

<template>
  <main>
    <HomeHeader />
    <HomeBlogFeatured />
  </main>
</template>
