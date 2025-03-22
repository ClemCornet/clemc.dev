<script lang="ts" setup>
defineProps<{
  lang: string
}>()
defineEmits<{
  changeLocale: []
}>()
</script>

<template>
  <UTooltip
    color="gray"
    :shortcuts="['l']"
    text="Toggle lang"
  >
    <UButton
      class="hover:cursor-pointer"
      color="primary"
      size="sm"
      square
      variant="outline"
      @click="$emit('changeLocale')"
    >
      {{ lang.toUpperCase() }}
    </UButton>
  </UTooltip>
</template>
