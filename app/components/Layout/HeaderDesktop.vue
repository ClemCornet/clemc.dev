<script setup lang="ts">
const links = [{
  name: 'blog',
  text: 'Blog',
  icon: 'i-iconoir-edit',
},
{
  name: 'resume',
  text: 'Resume',
  icon: 'i-iconoir-user-bag',
}]

const lang = ref<'en' | 'fr'>('en')
const changeLocale = () => {
  lang.value = 'en'
}

const colorMode = useColorMode()
const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

defineShortcuts({
  t: () => toggleTheme(),
  l: () => changeLocale(),
})
</script>

<template>
  <UContainer
    as="header"
    class="flex justify-between w-full py-8"
  >
    <nuxt-link
      active-class="text-gray-800 dark:text-gray-100"
      class="text-xl font-extrabold"
      to="/"
    >
      Clem C
    </nuxt-link>
    <nav class="flex items-center justify-between">
      <ul class="flex justify-between">
        <li
          v-for="link in links"
          :key="link.name"
        >
          <ULink
            active-class="text-gray-800 dark:text-gray-100"
            class="mr-4 flex items-center"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            :to="{ name: link.name }"
          >
            <UIcon
              class="mr-1 size-4"
              :name="link.icon"
            />
            <span>{{ link.text }}</span>
          </ULink>
        </li>
      </ul>
      <div class="ml-6 flex gap-2">
        <ColorModeSwitcher @toggle-theme="toggleTheme" />
        <LangSwitcher
          :lang="lang"
          @change-locale="changeLocale"
        />
      </div>
    </nav>
  </UContainer>
</template>
