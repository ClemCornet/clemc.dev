<script setup lang="ts">
const { data } = useLazyFetch('/api/commits/last')

const lastUpdated = computed(() => data.value?.date ? formatDate(data.value?.date, 'MMM d, yyyy') : '')

const currentTime = computed(() => getCurrentTimeInTimeZone('Europe/Paris'))
const dayPeriod = computed(() => getDayPeriod(getDateInTimeZone('Europe/Paris')))
const dayPeriodIcon = computed(() => {
  switch (dayPeriod.value) {
    case 'morning':
      return 'i-iconoir-sea-and-sun'
    case 'afternoon':
      return 'i-iconoir-sun-light'
    case 'night':
      return 'i-iconoir-moon-sat'
    default:
      return ''
  }
})
</script>

<template>
  <footer class="flex flex-col gap-4 text-sm">
    <USeparator
      class="h-px"
      color="neutral"
    />

    <div class="font-light flex justify-between">
      <div class="flex gap-1 items-center">
        <UIcon
          class="size-4 text-neutral-500"
          name="i-iconoir-git-merge"
        />
        <p>Last updated on {{ lastUpdated || '...' }}</p>
      </div>

      <ClientOnly>
        <div class="flex gap-1 items-center">
          <UIcon
            class="size-4 text-neutral-500"
            :name="dayPeriodIcon"
          />
          <p>Paris, {{ currentTime }}</p>
        </div>
      </ClientOnly>
    </div>
  </footer>
</template>
