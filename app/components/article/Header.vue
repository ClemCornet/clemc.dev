<script setup lang="ts">
import type { BlogPost } from '~/types'

defineProps<{
  post: BlogPost
  viewsCount: number | null
}>()
</script>

<template>
  <header>
    <ul class="mb-4 flex gap-x-2">
      <li
        v-for="label in post?.label"
        :key="label"
      >
        <UBadge
          color="primary"
          variant="subtle"
        >
          {{ label }}
        </UBadge>
      </li>
    </ul>
    <div>
      <h1 class="mb-2 text-5xl font-bold">
        {{ post.title }}
      </h1>
      <p class="text-gray-700 dark:text-gray-200">
        {{ post.description }}
      </p>
    </div>
    <USeparator class="my-2" />
    <div class="flex gap-x-2 text-sm font-light text-gray-400 dark:text-gray-400">
      <div class="flex items-center">
        <UIcon
          class="mr-0.5 size-4"
          name="i-iconoir-clock"
        />
        <p>{{ formatDate(post.date, 'do MMMM, yyyy') }}</p>
      </div>
      <div
        v-if="viewsCount"
        class="flex items-center"
      >
        <UIcon
          class="mr-0.5 size-5"
          name="i-iconoir-eye-empty"
        />
        <span>{{ viewsCount }}</span>
      </div>
    </div>
  </header>
</template>
