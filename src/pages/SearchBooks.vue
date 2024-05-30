<template>
  <q-layout
    view="lHh Lpr lFf"
  >
    <q-header bg-sur-c>
      <q-toolbar text-on-sur>
        <q-btn
          flat
          dense
          round
          icon="sym_o_arrow_back"
          @click="back"
          @keyup.enter="search"
        />
        <q-input
          v-model="q"
          filled
          class="grow ml-2"
        />
        <q-btn
          @click="search"
          :loading="state === ListState.Loading"
          label="搜索"
          flat
          ml-2
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page>
        <book-list :books="books" />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import BookList from 'src/components/BookList.vue'
import { useBack } from 'src/composables/back'
import { useLoadBooks } from 'src/composables/load-book'
import { ListState } from 'src/utils/enums'

const back = useBack()

const q = ref('')
const query = ref(null)
const { books, state } = useLoadBooks(query)
function search() {
  query.value = { name: q.value }
}
</script>
