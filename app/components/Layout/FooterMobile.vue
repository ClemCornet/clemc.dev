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
    :ui="{
      base: 'w-full border-t border-neutral-600/20 dark:border-neutral-200/30',
      padding: 'px-4 sm:px-6 lg:px-0',
    }"
  >
    <footer class="flex flex-col py-6">
      <nav>
        <ul class="my-4 flex flex-col">
          <li
            v-for="link in links"
            :key="link.name"
          >
            <ULink
              active-class="text-gray-800 dark:text-gray-100"
              inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              :to="{ name: link.name }"
            >
              {{ link.text }}
            </ULink>
          </li>
        </ul>
      </nav>
      <UDivider />
      <ul class="my-4 flex flex-col">
        <li
          v-for="link in socials"
          :key="link.name"
        >
          <ULink
            active-class="text-gray-800 dark:text-gray-100"
            external
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            target="_blank"
            :to="link.url"
          >
            {{ link.name }}
          </ULink>
        </li>
      </ul>
      <p class="mb-1 text-sm text-gray-400 dark:text-gray-500">
        Currently offline
      </p>
      <p class="text-sm text-neutral-500">
        © {{ currentYear }} Clément Cornet.
      </p>
    </footer>
  </UContainer>
</template>
