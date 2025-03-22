<script setup lang="ts">
import type { BlogPost } from '~/types'

defineProps<{
  posts: Array<BlogPost>
}>()
</script>

<template>
  <div>
    <h3 class="mb-4 text-sm uppercase tracking-wide text-gray-400">
      Featured posts
    </h3>
    <!-- <ul>
      <li
        v-for="post in posts"
        :key="post._id"
      >
        <BlogCard
          :blog-post="post"
        />
      </li>
    </ul> -->
  </div>
</template>
