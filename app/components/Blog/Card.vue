<script setup lang="ts">
import type { BlogPost } from '~/types'

defineProps<{
  blogPost: BlogPost
}>()
</script>

<template>
  <article class="mb-4">
    <ULink
      :to="blogPost._path"
    >
      <h3 class="mb-1 text-lg font-semibold underline underline-offset-4">
        {{ blogPost.title }}
      </h3>
      <p class="mb-1 text-gray-600 dark:text-gray-200">
        {{ blogPost.description }}
      </p>
      <div class="flex gap-x-2 text-sm font-light text-gray-500 dark:text-gray-400">
        <div class="flex items-center">
          <UIcon
            class="mr-0.5 size-4"
            name="i-iconoir-clock"
          />
          <p>{{ formatDate(blogPost.date) }}</p>
        </div>
        <div class="flex items-center">
          <UIcon
            class="mr-0.5 size-5"
            name="i-iconoir-eye-empty"
          />
          <span>{{ blogPost.views }}</span>
        </div>
      </div>
    </Ulink>
  </article>
</template>
