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
    <div class="gradient" />
    <div class="flex my-8 md:my-0 items-center justify-center">
      <HomeImage />
    </div>
    <div class="flex flex-1 md:flex-none items-center justify-center">
      <HomeSelfPresentation />
    </div>
  </UContainer>
</template>

<style scoped>
.gradient {
    background: radial-gradient(50% 50% at 50% 50%, var(--color-slate-400) 0, var(--color-slate-950) 100%);
    border-radius: 50%;
    filter: blur(150px);
    height: 30vh;
    left: 0;
    opacity: .5;
    position: absolute;
    right: 0;
    top: 25vh;
    width: 100%;
    z-index: -1;
}

@media (max-width: 640px) {
  .gradient {
    background: radial-gradient(100% 100% at 100% 100%, var(--color-slate-400) 0, var(--color-slate-950) 100%);
    opacity: .8;
    height: 50vh;
    top: 20vh;
  }
}
</style>
