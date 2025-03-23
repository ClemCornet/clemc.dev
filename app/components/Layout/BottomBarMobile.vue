<script setup lang="ts">
const links = [
  {
    name: 'index',
    text: 'Home',
    icon: 'i-iconoir-home',
  },

  {
    name: 'blog',
    text: 'Blog',
    icon: 'i-iconoir-edit',
  },
  {
    name: 'about',
    text: 'About',
    icon: 'i-iconoir-user-bag',
  }]
</script>

<template>
  <nav
    class="
  sticky
  bottom-0
  z-[500]
  flex
  items-center
  justify-between
  p-4
  backdrop-blur
  backdrop-brightness-100
  after:absolute
  after:-z-10
  after:inset-0
  after:border-t
  after:border-neutral-600/20
  dark:after:border-neutral-200/20
  "
  >
    <ul class="flex flex-1 items-center justify-around">
      <li
        v-for="link in links"
        :key="link.name"
      >
        <ULink
          active-class="text-gray-800 dark:text-gray-100"
          class="mr-4 flex flex-col items-center justify-center text-xs"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          :to="{ name: link.name }"
        >
          <UIcon
            class="mb-1 size-5"
            :name="link.icon"
          />
          {{ link.text }}
        </ULink>
      </li>
    </ul>
  </nav>
</template>
