<script setup lang="ts">
const description = `Discover daily insights and lessons from my journey as a frontend developer, covering JavaScript, TypeScript, Vue.js, Nuxt.js, and more.`
useSeoMeta({
  title: 'Articles',
  ogTitle: 'Clement Cornet - Frontend Developer',
  description,
})
</script>

<template>
  <main class="flex flex-col gap-8 my-8">
    <div class="flex flex-col gap-2">
      <h1 class="text-4xl text-primary font-serif">
        Today I learned.
      </h1>
      <p class="text-light text-sm">
        Discover daily insights and lessons from my journey as a frontend developer, covering JavaScript, TypeScript, Vue.js, Nuxt.js, and more. 🎢
      </p>
    </div>
    <HomeBlogFeatured />
  </main>
</template>
