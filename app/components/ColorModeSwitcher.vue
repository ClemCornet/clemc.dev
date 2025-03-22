<script lang="ts" setup>
defineEmits<{
  toggleTheme: []
}>()
</script>

<template>
  <ClientOnly>
    <UTooltip
      color="gray"
      :shortcuts="['t']"
      text="Toggle color mode"
    >
      <UButton
        class="hover:cursor-pointer"
        color="primary"
        :icon="$colorMode.value === 'light'
          ? `iconoir:sun-light` : `iconoir:half-moon`"
        size="sm"
        square
        variant="outline"
        @click="$emit('toggleTheme')"
      />
    </UTooltip>
  </ClientOnly>
</template>
