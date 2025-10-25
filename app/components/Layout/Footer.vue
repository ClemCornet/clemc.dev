<script setup lang="ts">
const { data, pending } = useLazyFetch('/api/commits/last')
const currentTime = computed(() => getCurrentTimeInTimeZone('Europe/Paris'))
const lastUpdated = computed(() => data.value?.date ? formatDate(data.value?.date, 'MMMM d, yyyy') : '')
</script>

<template>
  <footer class="flex flex-col gap-4">
    <USeparator
      class="h-px"
      color="neutral"
    />

    <div class="font-light text-sm flex justify-between">
      <p>
        Last updated on
        <UIcon
          v-if="pending"
          name="i-svg-spinners:180-ring-with-bg"
        />
        <template v-else-if="lastUpdated">
          {{ lastUpdated }}
        </template>
      </p>

      <p>Paris, {{ currentTime }}</p>
    </div>
  </footer>
</template>
