<template>
  <router-view />
</template>

<script setup>
import { useSetTheme } from './composables/set-theme'

useSetTheme()
</script>
