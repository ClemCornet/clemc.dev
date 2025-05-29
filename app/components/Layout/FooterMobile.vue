<script setup lang="ts">
const socials = [
  {
    name: 'X',
    url: 'https://x.com/clemcornet',
  },
  {
    name: 'Github',
    url: 'https://github.com/clemcornet',
  },
  {
    name: 'Linkedin',
    url: 'https://linkedin.com/in/clem-cornet',
  }]

const currentYear = new Date().getFullYear()
</script>

<template>
  <UContainer
    as="footer"
    class="w-full border-t border-neutral-600/20 dark:border-neutral-200/30"
  >
    <ul class="flex flex-col gap-1 my-4">
      <li
        v-for="link in socials"
        :key="link.name"
      >
        <ULink
          external
          target="_blank"
          :to="link.url"
        >
          {{ link.name }}
        </ULink>
      </li>
    </ul>
    <div class="text-neutral-400 dark:text-neutral-500 flex flex-col gap-1">
      <p>
        <UIcon
          class="size-4"
          name="i-iconoir-map-pin"
        />
        Chillin in Paris
      </p>
      <p class="text-sm">
        © {{ currentYear }} Clément Cornet.
      </p>
    </div>
  </UContainer>
</template>
