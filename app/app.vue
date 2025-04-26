<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Clement Cornet` : 'Clement Cornet - Frontend Developer'
  },
})

const { isMobile, isDesktop } = useDevice()
const layout = computed(() => {
  if (isMobile) return 'mobile'
  if (isDesktop) return 'desktop'
  return 'mobile'
})
</script>

<template>
  <UApp :scroll-body="false">
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
