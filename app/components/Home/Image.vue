<script setup lang="ts">
const { isMobile } = useDevice()
const imageSrc = computed(() => {
  return isMobile
    ? '/profile_picture_mobile.jpg'
    : '/profile_picture_desktop.jpg'
})
</script>

<template>
  <ProgressiveImg
    alt="Profile picture"
    :dimensions="{ w: 2100, h: 3150 }"
    :placeholder="{ backgroundClass: 'bg-radial-[at_25%_25%] from-[#6B4E3D] via-[#78716c] to-[#d6d3d1]' }"
    :src="imageSrc"
  />
</template>
