<script setup lang="ts">
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
  <nav
    class="
  sticky
  top-0
  z-[500]
  flex
  items-center
  justify-between
  p-4
  backdrop-blur
  backdrop-brightness-100
  after:absolute
  after:-z-10
  after:inset-0
  after:border-b
  after:border-neutral-600/20
  dark:after:border-neutral-200/20
  "
  >
    <nuxt-link
      active-class="text-gray-800 dark:text-gray-100"
      class="text-xl font-extrabold"
      to="/"
    >
      Clem C
    </nuxt-link>
    <div class="ml-6 flex gap-2">
      <ColorModeSwitcher @toggle-theme="toggleTheme" />
      <LangSwitcher
        :lang="lang"
        @change-locale="changeLocale"
      />
    </div>
  </nav>
</template>
