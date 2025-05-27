<script setup lang="ts">
const links = [
  {
    name: 'index',
    text: 'Home',
    icon: 'i-iconoir-home',
    hoverClass: 'hover:decoration-solid',
  },
  {
    name: 'articles',
    text: 'Articles',
    icon: 'i-iconoir-edit',
    hoverClass: 'hover:decoration-wavy',
  },
  {
    name: 'about',
    text: 'About',
    icon: 'i-iconoir-user-bag',
    hoverClass: 'hover:decoration-solid',
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
    class="
    flex
    justify-between
    w-full
    pt-8
    px-8
    pb-4
    relative
    after:absolute
    after:w-screen
    after:bottom-0
    after:h-[1px]
    after:left-[calc(50%-50vw)]
    after:bg-neutral-600/20
    dark:after:bg-neutral-200/20
    "
  >
    <nuxt-link
      active-class="text-neutral-800 dark:text-neutral-100"
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
            active-class="text-neutral-800 dark:text-neutral-100"
            :class="['font-semibold mr-4 flex items-center underline-offset-2 hover:underline', link.hoverClass]"
            :to="{ name: link.name }"
          >
            <template #default="{ active }">
              <UIcon
                v-if="active"
                class="mr-1 size-4"
                :name="link.icon"
              />
              <span class="mt-0.5">{{ link.text }}</span>
            </template>
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
