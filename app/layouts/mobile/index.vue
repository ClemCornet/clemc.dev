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
  <div class="flex h-screen min-h-screen flex-col overflow-auto">
    <LayoutHeaderMobile />
    <slot />
    <LayoutFooterMobile />
    <LayoutBottomBarMobile />
  </div>
</template>
