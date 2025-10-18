<template>
  <div>
    <h1 class="mb-6 text-4xl font-bold font-serif">
      Hello there.
    </h1>
    <p class="text-md mb-4 font-light">
      I'm <span class="font-bold">Clement</span>, front-end developer who enjoy creating
      <br v-if="$device.isDesktop">
      <span class="font-bold">user interfaces.</span>
    </p>
    <div class="mb-10 md:mb-16 md:mt-0 lg:flex lg:items-center">
      <p class="text-md mr-1.5 font-2xl font-black italic">
        Some of my favorite tools include
      </p>
      <div class="mt-2 flex items-center md:mt-0">
        <UIcon
          class="mr-1.5 size-5"
          name="i-logos-vue"
        />
        <UIcon
          class="mr-1.5 size-5"
          name="i-logos-nuxt-icon"
        />
        <UIcon
          class="mr-1.5 size-5"
          name="i-logos-react"
        />
        <UIcon
          class="mr-1.5 size-5"
          name="i-logos-tailwindcss-icon"
        />
      </div>
    </div>
  </div>
</template>
