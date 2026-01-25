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

          <div class="flex gap-1">
            <p class="text-light text-sm">
              Chat with my AI and find out more about me!
            </p>
            <UIcon
              class="text-light"
              name="i-iconoir-sparks"
              :size="16"
            />
          </div>
        </div>

        <AboutChatMessages />
      </div>
    </section>
  </main>
</template>
