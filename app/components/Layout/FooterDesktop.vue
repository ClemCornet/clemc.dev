<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Home',
      meta: { icon: 'i-iconoir-home' },
      to: '/',
    },
    {
      label: 'About',
      meta: { icon: 'i-iconoir-user' },
      to: '/about',
    },
    {
      label: 'Blog',
      meta: { icon: 'i-iconoir-edit' },
      to: '/articles',
    },
  ],
])

const socials = [
  {
    name: 'X',
    url: 'https://x.com/clemcornet',
  },
  {
    name: 'Github',
    url: 'https://github.com/clemcornet',
  },
  {
    name: 'Linkedin',
    url: 'https://linkedin.com/in/clem-cornet',
  },
]

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <UContainer
    as="footer"
    class="
    flex
    justify-between
    py-4 px-0 lg:px-0
    border-t border-neutral-600/20 dark:border-neutral-200/30
    "
  >
    <div class="flex flex-1 flex-col">
      <UNavigationMenu
        class="w-full"
        color="neutral"
        :items="items"
        variant="link"
      />
      <div class="text-neutral-400 dark:text-neutral-500 flex items-center gap-1">
        <UIcon
          class="size-4"
          name="i-iconoir-map-pin"
        />
        <p class="text-sm">
          Chillin in Paris
        </p>
      </div>
    </div>
    <div class="flex flex-1 flex-col items-end">
      <nav class="mb-2 w-1/3">
        <ol class="flex gap-4 justify-end">
          <ULink
            v-for="link in socials"
            :key="link.name"
            active-class="text-neutral-800 dark:text-neutral-100"
            class="text-sm"
            external
            inactive-class="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
            target="_blank"
            :to="link.url"
          >
            {{ link.name }}
          </ULink>
        </ol>
      </nav>
      <p class="text-sm text-neutral-500">
        © {{ currentYear }} Clément Cornet.
      </p>
    </div>
  </UContainer>
</template>
