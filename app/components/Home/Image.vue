<!-- <script setup lang="ts">
import { useMouseInElement } from '@vueuse/core'

const { isMobile } = useDevice()

const image = computed(() => {
  const src = isMobile ? '/assets/profile_picture_mobile.jpg' : '/assets/profile_picture_desktop.jpg'
  const size = isMobile ? { h: 250, w: 350 } : { h: 920, w: '100%' }

  return { src, size }
})

const target = ref(null)
const { x: elementX, y: elementY } = useMouseInElement(target)
</script> -->

<template>
  <USkeleton class="h-auto" />
  <!-- <div
    ref="target"
    class="
    background-gradient
    group
    relative
    isolate
    mx-auto
    mt-4
    w-fit
    rounded-lg
    shadow
    ring-1
    ring-slate-400
    before:absolute
    before:inset-[-2px]
    before:z-[-1]
    before:hidden
    before:size-[calc(100%+4px)]
    before:rounded-[13px]
    lg:mt-0
    before:lg:block dark:ring-slate-800"
    :style="{
      '--x': `${elementX}px`,
      '--y': `${elementY}px`,
    }"
  > -->
  <!-- <NuxtImg
    class="overflow-hidden rounded-lg"
    densities="x1 x2"
    fit="cover"
    :placeholder="[50, 25]"
  /> -->
  <!-- </div> -->
</template>

<style scoped>
.background-gradient::before {
  background: radial-gradient(450px circle at var(--x) var(--y),
      rgb(var(--color-primary-DEFAULT)) 0%,
      transparent 100%);
  will-change: background;
}
</style>
