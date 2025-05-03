<script setup lang="ts">
const links = [{
  name: 'index',
  text: 'Home',
},
{
  name: 'blog',
  text: 'Blog',
},
{
  name: 'about',
  text: 'About',
}]

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
    <nav>
      <ul class="my-4 flex flex-col">
        <li
          v-for="link in links"
          :key="link.name"
        >
          <ULink
            active-class="font-semibold text-neutral-800 dark:text-neutral-100"
            :to="{ name: link.name }"
          >
            {{ link.text }}
          </ULink>
        </li>
      </ul>
    </nav>
    <ul class="my-4 flex flex-col">
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
    <p class="mb-1 text-sm text-neutral-400 dark:text-neutral-500">
      Chillin in Paris
    </p>
    <p class="text-sm text-neutral-500">
      © {{ currentYear }} Clément Cornet.
    </p>
  </UContainer>
</template>
