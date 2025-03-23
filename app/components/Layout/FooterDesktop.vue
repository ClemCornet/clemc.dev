<script setup lang="ts">
const links = [{
  name: 'index',
  text: 'Home',
  hoverClass: 'underline-offset-6 hover:underline hover:decoration-solid',
},
{
  name: 'blog',
  text: 'Blog',
  hoverClass: 'underline-offset-6 hover:underline hover:decoration-wavy',
},
{
  name: 'about',
  text: 'About',
  hoverClass: 'underline-offset-6 hover:underline hover:decoration-solid',
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
  },
]

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <UContainer
    as="footer"
    class="
    flex
    w-full
    justify-between
    py-4
    relative
    after:absolute
    after:w-full
    after:top-0
    after:h-[1px]
    after:bg-neutral-600/20
    dark:after:bg-neutral-200/20
    "
  >
    <div class="flex flex-1 flex-col">
      <nav class="mb-2 w-1/3">
        <ul class="flex justify-between">
          <li
            v-for="link in links"
            :key="link.name"
          >
            <ULink
              active-class="font-semibold text-gray-800 dark:text-gray-100"
              :class="['mr-4 flex items-center hover:font-medium', link.hoverClass]"
              :to="{ name: link.name }"
            >
              {{ link.text }}
            </ULink>
          </li>
        </ul>
      </nav>
      <p class="text-sm text-gray-400 dark:text-gray-500">
        Currently offline
      </p>
    </div>
    <div class="flex flex-1 flex-col items-end">
      <nav class="mb-2 w-1/3">
        <ol class="flex gap-4 justify-end">
          <ULink
            v-for="link in socials"
            :key="link.name"
            active-class="text-gray-800 dark:text-gray-100"
            external
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            target="_blank"
            :to="link.url"
          >
            {{ link.name }}
          </ULink>
        </ol>
      </nav>
      <p class="text-sm text-neutral-500">
        © {{ currentYear }} Clément Cornet.
      </p>
    </div>
  </UContainer>
</template>
