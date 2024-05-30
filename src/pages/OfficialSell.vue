<template>
  <q-header bg-sur-c>
    <q-toolbar text-on-sur>
      <q-toolbar-title>
        官方上架
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
    />
    <publish-btn />
  </q-page-container>
</template>

<script setup>
import PublishBtn from 'src/components/PublishBtn.vue'
</script>

<style lang="scss" scoped>

</style>
