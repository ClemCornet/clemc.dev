<script setup lang="ts">
const { isMobile, isDesktop } = useDevice()

const layout = computed(() => {
  if (isMobile) return 'mobile'
  if (isDesktop) return 'desktop'
  return 'mobile'
})
</script>

<template>
  <UApp>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<style lang="postcss">
body {
  @apply bg-gray-100/40 text-gray-800;
}

.dark {
  body {
    @apply bg-slate-800/40 text-gray-100;
  }
}
</style>
