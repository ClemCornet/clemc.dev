<script setup lang="ts">
withDefaults(defineProps<{
  class?: string | null
  code?: string
  filename?: string | null
  highlights?: number[]
  language?: string | null
  meta?: string | null
}>(), {
  class: null,
  code: '',
  filename: null,
  highlights: () => [],
  language: null,
  meta: null,
})

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <div
    v-if="$props.filename"
    class="
    rounded-t-md
    border
    border-slate-400/20
    bg-gray-200/80
    px-3
    py-2
    font-mono
    text-sm
    dark:border-slate-200/20
    dark:bg-gray-900/20
    dark:text-gray-200"
  >
    {{ $props.filename }}
  </div>
  <pre
    :class="[
      `block
      rounded-b-md
      border
      border-slate-400/20
      bg-gray-100/80
      px-4
      text-sm
      dark:border-slate-200/20
      dark:bg-gray-800/40`, {
      [$props.class as string]: true,
      'mt-0 rounded-t-none': $props.filename,
    }]"
  >
    <slot />
</pre>
</template>

<style>
pre code .line {
  @apply block;
}
</style>
