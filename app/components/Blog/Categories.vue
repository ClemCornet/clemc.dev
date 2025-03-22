<script setup lang="ts">
import type { BlogCategories, Categories } from '~/types'

type UICategories = Categories | 'all'
const props = defineProps<{
  modelValue: UICategories
  categories: BlogCategories
}>()

defineEmits<{
  'update:modelValue': [value: UICategories]
}>()

const formattedCategories = computed(() => {
  return ['all', ...props.categories.categories.map(category => category)]
})
</script>

<template>
  <div>
    <UButton
      v-for="category in formattedCategories"
      :key="category"
      color="primary"
      :variant="modelValue === category ? 'solid' : 'ghost'"
      @click="$emit('update:modelValue', category as UICategories)"
    >
      {{ category }}
    </UButton>
  </div>
</template>
