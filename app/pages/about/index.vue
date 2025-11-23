<script setup lang="ts">
useSeoMeta({
  title: 'About',
  ogTitle: 'Clement Cornet - Frontend Developer',
  description: 'I\'m Clément, a frontend developer based in Paris, mainly focused on JavaScript, TypeScript, Vue.js, and Nuxt.js.',
})
</script>

<template>
  <main class="flex flex-col gap-8 my-8">
    <section>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-4">
            <NuxtImg
              alt="Clement Cornet Avatar"
              class="rounded-full"
              height="60"
              src="https://github.com/clemcornet.png"
              width="60"
            />

            <h1 class="text-4xl text-primary font-serif mb-1 tracking-tight">
              Let's talk
            </h1>
          </div>

          <p class="text-light text-sm">
            Discover daily insights and lessons from my journey as a frontend developer, covering JavaScript, TypeScript, Vue.js, Nuxt.js, and more. 🎢
          </p>
        </div>

        <AboutChatMessages />
      </div>
    </section>
  </main>
</template>
