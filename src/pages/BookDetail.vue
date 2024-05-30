<template>
  <common-layout>
    <q-page
      v-if="book"
      max-w-screen-md
      m-auto
    >
      <q-item>
        <q-item-section avatar>
          <q-avatar
            color="ter-c"
            text-color="on-ter-c"
            icon="sym_o_account_circle"
            font-size="24px"
          />
        </q-item-section>

        <q-item-section>
          <q-item-label fw-bold>
            {{ book.user.name }}
          </q-item-label>
        </q-item-section>
      </q-item>
      <div
        px-3
        mb-3
      >
        <div
          text="pri lg"
          fw-extrabold
          mt-1
        >
          ￥{{ book.price }}
        </div>
        <div
          fw-bold
          mt-1
        >
          {{ book.name }}
        </div>
        <div>{{ book.description }}</div>
        <div
          flex
          flex-wrap
          mt-2
        >
          <img
            v-for="image of book.images"
            :src="image.imageUrl"
            :key="image.id"
            xs="w-full"
            sm="w-1/2"
            mt-1
            object-contain
          >
        </div>
      </div>
    </q-page>
  </common-layout>
</template>

<script setup>
import { toRef } from 'vue'
import CommonLayout from 'src/layouts/CommonLayout.vue'
import { useLoadBook } from 'src/composables/load-book'

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const { book } = useLoadBook(toRef(props, 'id'))
</script>
