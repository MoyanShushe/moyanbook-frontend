<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bg-sur-c>
      <q-toolbar text-on-sur>
        <q-btn
          flat
          dense
          round
          icon="sym_o_arrow_back"
          @click="back"
        />
        <q-toolbar-title v-if="title">
          {{ title }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <slot />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useBack } from 'src/composables/back'

defineProps({
  title: {
    type: String,
    default: null
  }
})

const back = useBack()
</script>
