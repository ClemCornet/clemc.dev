<script setup lang="ts">
const { isMobile } = useDevice()
const imageSrc = computed(() => {
  return isMobile
    ? '/profile_picture_mobile.jpg'
    : '/profile_picture_desktop.jpg'
})

const sizes = computed(() => {
  return isMobile
    ? { w: 2400, h: 1800 }
    : { w: 2100, h: 3150 }
})
</script>

<template>
  <div class="flex-1 md:h-[calc(100vh/1.5)]">
    <ProgressiveImg
      alt="Profile picture"
      :dimensions="{ ...sizes }"
      :placeholder="{ class: 'bg-radial-[at_25%_25%] from-[#6B4E3D] via-[#78716c] to-[#d6d3d1]' }"
      :src="imageSrc"
    />
  </div>
</template>
