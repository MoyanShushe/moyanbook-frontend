import { defineStore } from 'pinia'
import { Dark, LocalStorage } from 'quasar'
import { reactive, watch, watchEffect } from 'vue'

const key = 'local-perf'

export const useLocalPerfStore = defineStore('local-perf', () => {
  const defaultPerfs = {
    darkMode: 'auto',
    themeHue: 75
  }
  const perfs = reactive({
    ...defaultPerfs,
    ...LocalStorage.has(key) ? LocalStorage.getItem(key) : {}
  })
  watch(perfs, () => {
    LocalStorage.set(key, perfs)
  })
  watchEffect(() => {
    Dark.set(perfs.darkMode)
  })
  function restore() {
    Object.assign(perfs, defaultPerfs)
  }
  return { perfs, restore }
})
