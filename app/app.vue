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
