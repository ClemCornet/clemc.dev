<script setup lang="ts">
import type { BlogPost } from '~/types'

// const { data: posts } = useAsyncData('home-posts', () =>
//   queryContent<BlogPost>('/blog')
//     .sort({ date: -1 })
//     .limit(2)
//     .find(),
// )
</script>

<template>
  <UContainer
    :ui="{
      base: 'flex items-center flex-1',
      constrained: 'max-w-5xl',
      padding: 'px-4 sm:px-6 lg:px-0',
    }"
  >
    <pre>{{ $config.redisHost }}</pre>
    <main class="mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-20">
      <HomeImage />
      <div class="mt-12 flex flex-1 flex-col justify-center pb-12 md:mt-0 md:pb-0">
        <h1 class="mb-6 text-4xl font-bold">
          Hello there.
        </h1>
        <p class="text-md mb-4 font-light">
          I'm <span class="font-bold">Clement</span>, front-end developer who enjoy creating
          <br v-if="$device.isDesktop">
          <span class="font-bold">user interfaces.</span>
        </p>
        <div class="mb-10 md:mb-16 md:mt-0 lg:flex lg:items-center">
          <p class="text-md mr-1.5 font-light">
            Some of my favorite <span class="font-bold">tools</span> include
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
        <!-- <HomeBlogFeatured
          v-if="posts"
          :posts="posts"
        /> -->
      </div>
    </main>
  </UContainer>
</template>
