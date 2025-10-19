<script setup lang="ts">
const items = [
  {
    label: 'github',
    icon: 'i-iconoir-github',
    to: 'https://github.com/clemcornet',
  },
  {
    label: 'linkedin',
    icon: 'i-iconoir-linkedin',
    to: 'https://www.linkedin.com/in/clem-cornet',
  },
  {
    label: 'twitter',
    icon: 'i-iconoir-x',
    to: 'https://twitter.com/clemcornet',
  },
]
</script>

<template>
  <div>
    <ul class="flex gap-2">
      <li
        v-for="item in items"
        :key="item.label"
      >
        <UButton
          class="group"
          color="primary"
          :icon="item.icon"
          target="_blank"
          :to="item.to"
          :ui="{
            leadingIcon: 'size-4',
          }"
          variant="link"
        >
          {{ item.label }}
          <UIcon
            class="opacity-0 group-hover:opacity-100 transition-opacity -ml-1"
            name="i-iconoir-arrow-up-right"
          />
        </UButton>
      </li>
    </ul>
  </div>
</template>
