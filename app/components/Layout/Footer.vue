<script setup lang="ts">
const currentTime = computed(() => getCurrentTimeInTimeZone('Europe/Paris'))
</script>

<template>
  <footer class="flex flex-col gap-4">
    <USeparator
      class="h-px"
      color="neutral"
    />

    <div class="font-light text-sm flex justify-between">
      <p>Last updated on Sept 5, 2025</p>
      <p>Paris, {{ currentTime }}</p>
    </div>
  </footer>
</template>
