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
  [
    {
      icon: 'i-iconoir-x',
      to: 'https://x.com/clemcornet',
      target: '_blank',
    },
    {
      icon: 'i-iconoir-github',
      to: 'https://github.com/clemcornet',
      target: '_blank',
    },
    {
      icon: 'i-iconoir-linkedin',
      to: 'https://linkedin.com/in/clem-cornet',
      target: '_blank',
    },
  ],
])

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <UContainer
    as="footer"
    class="flex justify-between py-4 px-0 lg:px-0 border-t border-neutral-600/20 dark:border-neutral-200/30"
  >
    <div class="flex flex-1 flex-col">
      <UNavigationMenu
        class="w-full"
        color="neutral"
        :items="items"
        variant="link"
      />

      <div class="flex justify-between items-center text-sm text-neutral-400 dark:text-neutral-500 px-2">
        <p class="flex gap-1 items-center">
          <UIcon
            class="mr-0.5 size-4"
            name="i-iconoir-map-pin"
          />
          Chillin in Paris
        </p>
        <p>
          © {{ currentYear }} Clément Cornet.
        </p>
      </div>
    </div>
  </UContainer>
</template>
