<script setup lang="ts">
const description = `I'm Clément, a frontend developer based in Paris, mainly focused on JavaScript, TypeScript, Vue.js, and Nuxt.js.`

useSeoMeta({
  title: 'About',
  ogTitle: 'Clement Cornet - Frontend Developer',
  description,
})

const TIMELINE = [
  {
    date: 'dec 2024 to present',
    title: 'Frontend Developer',
    company: 'Patrowl.io',
    urlCompany: 'https://patrowl.io',
    present: true,
  },
  {
    date: 'janv 2022 to sep 2024',
    title: 'Mobile Developer',
    company: 'Le Collectionist',
    urlCompany: 'https://lecollectionist.com',
  },
  {
    date: 'janv 2021 to sep 2024',
    title: 'Frontend Developer',
    company: 'Le Collectionist',
    urlCompany: 'https://lecollectionist.com',
  },
  {
    date: 'janv 2019 to dec 2020',
    title: 'Frontend Developer',
    company: 'Meero',
    urlCompany: 'https://meero.com',
  },
]
</script>

<template>
  <UContainer
    as="main"
    class="flex flex-1 flex-col sm:mt-6 mt-12"
  >
    <div class="flex flex-col gap-8 mx-auto w-full max-w-xl px-0">
      <section class="flex flex-col gap-4">
        <div class="flex items-center gap-4">
          <img
            alt="Clement Cornet Avatar"
            class="w-14"
            src="/avatar.png"
          >
          <h1 class="text-4xl text-primary font-serif mb-1">
            About me
          </h1>
        </div>
        <p>With a strong foundation in front-end development, I bring a technical expertise to building scalable and maintainable interfaces.</p>

        <p>
          I'm always curious about what's new in the front-end world, especially when it comes to
          <UButton
            color="primary"
            target="_blank"
            to="https://vuejs.org"
            variant="link"
          >
            Vue.js
          </UButton> and
          <UButton
            color="primary"
            target="_blank"
            to="https://nuxt.com"
            variant="link"
          >
            Nuxt
          </UButton>.
        </p>

        <p>I enjoy exploring modern tools and techniques that help me build fast, clean, and future-proof web applications.</p>
      </section>

      <section class="flex flex-col gap-4">
        <h2 class="mb-2 text-2xl font-semibold">
          Current role
        </h2>
        <p>
          As a front-end developer at
          <UButton
            color="primary"
            target="_blank"
            to="https://patrowl.io"
            variant="link"
          >
            Patrowl.io
          </UButton>, I contribute to building a cybersecurity SaaS platform that helps organizations identify, monitor, and remediate web-exposed vulnerabilities through a streamlined and intuitive user interface.
        </p>
      </section>

      <section>
        <h2 class="mb-8 text-2xl font-semibold">
          Experience
        </h2>
        <ol class="list-none border-s border-neutral-200">
          <li
            v-for="(item, index) in TIMELINE"
            :key="index"
            :class="[
              'relative flex flex-col gap-y-1.5 !mb-10 ms-4 p-2 rounded-lg border-[0.5px]',
              { 'bg-primary-50 border-primary-500': item.present },
              { 'bg-neutral-50 border-neutral-400': !item.present },
            ]"
          >
            <div
              :class="[
                'absolute -left-[23px] top-1/2 -translate-y-1/2 size-3 rounded-full ring-4 ring-white',
                { 'bg-primary-500': item.present },
                { 'bg-neutral-300': !item.present },
              ]"
            />
            <p class="text-sm">
              {{ item.date }}
            </p>
            <p class="font-semibold">
              {{ item.title }}
            </p>
            <UButton
              class="group"
              color="primary"
              target="_blank"
              :to="item.urlCompany"
              variant="link"
            >
              {{ item.company }}
              <UIcon
                class="opacity-0 group-hover:opacity-100 transition-opacity -ml-1"
                name="i-iconoir-arrow-up-right"
              />
            </UButton>
          </li>
        </ol>
      </section>
    </div>
  </UContainer>
</template>
