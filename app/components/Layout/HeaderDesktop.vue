<script setup lang="ts">
const links = [{
  name: 'blog',
  text: 'Blog',
  icon: 'i-iconoir-edit',
  hoverClass: 'underline-offset-6 hover:underline hover:decoration-wavy',
},
{
  name: 'resume',
  text: 'Resume',
  icon: 'i-iconoir-user-bag',
  hoverClass: 'underline-offset-6 hover:underline hover:decoration-solid',
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
      <ul class="flex justify-between gap-2">
        <li
          v-for="link in links"
          :key="link.name"
        >
          <ULink
            active-class="font-semibold text-gray-800 dark:text-gray-100"
            :class="['mr-4 flex items-center hover:font-medium', link.hoverClass]"
            :to="{ name: link.name }"
          >
            <UIcon
              :class="'mr-1 size-5'"
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
