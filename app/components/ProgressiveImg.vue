<script lang="ts" setup>
const props = defineProps<{
  src: string
  alt: string
  dimensions: {
    w: number
    h: number
  }
  placeholder?: {
    backgroundClass: string
  }
}>()

const loaded = ref(false)
function onLoad() {
  loaded.value = true
}

const aspectRatio = computed(() => {
  return `${(props.dimensions.h / props.dimensions.w) * 100}%`
})
</script>

<template>
  <ClientOnly>
    <div
      class="relative w-full overflow-hidden bg-gray-100 rounded-lg"
      :style="{ paddingTop: aspectRatio }"
    >
      <img
        alt="placeholder"
        :class="['absolute inset-0 w-full h-full object-cover filter blur-md scale-105 transition-opacity duration-500', placeholder?.backgroundClass]"
      >

      <img
        :alt="alt"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 border border-teal-200 rounded-lg"
        :class="{
          'opacity-0': !loaded,
          'opacity-100': loaded,
        }"
        :src="src"
        @load="onLoad"
      >
    </div>
  </ClientOnly>
</template>
