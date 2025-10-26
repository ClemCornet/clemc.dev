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
  <header class="mt-24">
    <UNavigationMenu
      class="w-full"
      color="primary"
      :items="items"
      variant="link"
    >
      <template #components="{ item }">
        <UButton
          active-color="primary"
          color="primary"
          :to="item.to"
          variant="link"
        >
          {{ item.label }}
        </UButton>
      </template>
    </UNavigationMenu>
  </header>
</template>
