<template>
  <q-header bg-sur-c>
    <q-toolbar text-on-sur>
      <q-toolbar-title>
        市场
      </q-toolbar-title>
      <q-btn
        flat
        dense
        round
        icon="sym_o_search"
        to="/search"
      />
    </q-toolbar>
  </q-header>

  <q-page-container>
    <q-page
      max-w-screen-md
      m-auto
    >
      <book-list :books="books" />
    </q-page>
    <publish-btn />
  </q-page-container>
</template>

<script setup>
import { useLoadBooks } from 'src/composables/load-book'
import BookList from 'src/components/BookList.vue'
import PublishBtn from 'src/components/PublishBtn.vue'

const { books } = useLoadBooks()
</script>

<style lang="scss" scoped>

</style>
