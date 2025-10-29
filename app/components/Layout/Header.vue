<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = [
  [
    {
      label: 'Home',
      to: '/',
      class: 'px-0',
      slot: 'components' as const,
    },
  ],
  [
    {
      label: 'About',
      to: '/about',
      slot: 'components' as const,
    },
    {
      label: 'Blog',
      to: '/articles',
      slot: 'components' as const,
    },
  ],
] satisfies NavigationMenuItem[][]

const route = useRoute()
const isActive = (to: string) => {
  return route.path === to
}

const lang = ref<'en' | 'fr'>('en')
const changeLocale = () => {
  lang.value = 'en'
}

const colorMode = useColorMode()
const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

defineShortcuts({
  t: () => toggleTheme(),
  l: () => changeLocale(),
})
</script>

<template>
  <header class="mt-0 md:mt-24">
    <UNavigationMenu
      class="w-full"
      color="primary"
      :items="items"
      variant="link"
    >
      <template #components="{ item }">
        <div v-if="item.to === '/'">
          <div
            v-if="isActive(item.to)"
            class="size-4 bg-primary rounded-full transition-all duration-300 ease-linear shadow-[inset_2px_2px_6px_rgba(255,255,255,0.8),inset_-2px_-2px_4px_rgba(0,0,0,0.2)] hover:rotate-180"
          />

          <UButton
            v-else
            :active="isActive(item.to)"
            color="primary"
            le
            leading-icon="i-iconoir-arrow-left"
            variant="link"
          >
            {{ item.label }}
          </UButton>
        </div>

        <UButton
          v-else
          :active="isActive(item.to)"
          color="primary"
          variant="link"
        >
          {{ item.label }}
        </UButton>
      </template>
    </UNavigationMenu>
  </header>
</template>
