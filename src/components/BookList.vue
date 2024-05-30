<template>
  <div
    v-if="books"
    pb-2
    px-2
    grid
    xs="grid-cols-2"
    sm="grid-cols-3"
    gap-2
  >
    <div
      v-for="(group, index) in groups"
      :key="index"
    >
      <router-link
        v-for="book of group"
        :to="`/books/${book.id}`"
        :key="book.id"
        block
        decoration-none
        mt-2
        bg-sur-c
        rd-lg
        of-hidden
      >
        <img
          :src="book.images[0].imageUrl"
          w-full
        >
        <div p-1>
          <div>{{ book.name }}</div>
          <div>￥{{ book.price }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { Screen } from 'quasar'
import { computed } from 'vue'

const props = defineProps({
  books: {
    type: Array,
    required: true
  }
})
const groups = computed(() => {
  const columns = Screen.xs ? 2 : 3
  const result = Array.from({ length: columns }, () => [])
  props.books.forEach((book, index) => {
    result[index % columns].push(book)
  })
  return result
})
</script>
