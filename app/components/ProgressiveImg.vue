<script lang="ts" setup>
defineProps<{
  src: string
  alt: string
  dimensions: {
    w: number
    h: number
  }
  placeholder?: {
    class?: string
  }
}>()

const loaded = ref(false)
const onLoad = () => {
  loaded.value = true
}
</script>

<template>
  <ClientOnly>
    <div
      class="relative w-full h-full overflow-hidden rounded-lg"
      :style="{ aspectRatio: `${dimensions.w} / ${dimensions.h}` }"
    >
      <div
        alt="placeholder"
        class="absolute inset-0 w-full h-full filter blur-md scale-105"
        :class="[placeholder?.class ?? '']"
      />

      <img
        :alt="alt"
        class="absolute inset-0 w-full h-full object-cover border-[0.5px] border-neutral-900 dark:border-neutral-500 rounded-lg transition-all duration-1500"
        :class="loaded ? 'opacity-100' : 'opacity-0'"
        :src="src"
        @load="onLoad"
      >
    </div>
  </ClientOnly>
</template>
