<template>
  <div class="flex flex-col py-8 gap-4">
    <h1 class="text-4xl text-primary font-serif mb-1">
      Clement Cornet
    </h1>

    <div class="flex gap-2">
      <div
        v-for="(subtitle, index) in ['Frontend Developer', 'UI/UX Enthusiast', 'JavaScript Lover']"
        :key="subtitle"
        class="flex gap-2 items-center"
      >
        <h2 class="text-md font-bold">
          {{ subtitle }}
        </h2>
        <div
          v-if="index < 2"
          class="bg-neutral-700 h-1 w-1 rounded"
        />
      </div>
    </div>

    <div>
      <p class="text-light text-sm">
        I'm Clement, front-end developer who enjoy creating user interfaces and continuously testing new technologies and techniques.
        Some of my favorite tools include Vue, Nuxt, React, and Tailwind.
      </p>
    </div>

    <SocialNetworks />
  </div>
</template>
