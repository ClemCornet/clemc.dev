<script setup lang="ts">
// import type { BlogPost } from '~/types'

// const params = useParams<{ slug: string }>()
// const { data: post, status: postStatus } = await useAsyncData(() =>
//   queryContent<BlogPost>(`/blog/${params.value.slug}`)
//     .findOne(),
// )
// const { data: viewsCount } = await useFetch(`/api/viewsCount/${params.value.slug}`)

// const isArticleLoading = computed(() => {
//   return postStatus.value === 'pending'
// })
</script>

<template>
  <UContainer
    :ui="{
      base: 'w-full flex-1',
      constrained: 'max-w-2xl',
      padding: 'py-12 px-4 sm:px-6 lg:px-0',
    }"
  >
    <div>
      ...loading
    </div>
  </UContainer>
</template>
