<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Home',
      meta: { icon: 'i-iconoir-home' },
      to: '/',
      slot: 'components' as const,
    },
    {
      label: 'About',
      meta: { icon: 'i-iconoir-user' },
      to: '/about',
      slot: 'components' as const,
    },
    {
      label: 'Blog',
      meta: { icon: 'i-iconoir-edit' },
      to: '/articles',
      slot: 'components' as const,
    },
  ],
])

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
  <UContainer
    as="header"
    class="
    flex
    gap-6
    items-center
    justify-between
    pt-8
    px-8
    pb-4
    relative
    after:absolute
    after:w-screen
    after:bottom-0
    after:h-[1px]
    after:left-[calc(50%-50vw)]
    after:bg-neutral-600/20
    dark:after:bg-neutral-200/20
    "
  >
    <ULink
      class="text-xl font-bold dark:text-neutral-100 text-neutral-700"
      to="/"
    >
      Clem C
    </ULink>
    <div class="flex items-center gap-6">
      <UNavigationMenu
        class="w-full"
        color="neutral"
        :items="items"
      >
        <template #components-leading="{ active, item }: { active?: boolean; item: NavigationMenuItem }">
          <UIcon
            v-if="active"
            class="size-4"
            :name="item.meta.icon"
          />
        </template>
      </UNavigationMenu>

      <div class="flex gap-2">
        <ColorModeSwitcher @toggle-theme="toggleTheme" />
        <LangSwitcher
          :lang="lang"
          @change-locale="changeLocale"
        />
      </div>
    </div>
  </UContainer>
</template>
