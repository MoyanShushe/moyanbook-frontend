<template>
  <common-layout title="设置">
    <q-page
      max-w-screen-sm
      m-auto
    >
      <q-list>
        <q-item-label header>
          界面
        </q-item-label>
        <q-item>
          <q-item-section avatar>
            <q-icon name="sym_o_dark_mode" />
          </q-item-section>
          <q-item-section>外观</q-item-section>
          <q-item-section side>
            <q-select
              filled
              dense
              :options="darkModeOptions"
              v-model="perfs.darkMode"
              emit-value
              map-options
            />
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          @click="pickThemeHue"
        >
          <q-item-section avatar>
            <q-icon name="sym_o_palette" />
          </q-item-section>
          <q-item-section>主题色</q-item-section>
          <q-item-section side>
            <hct-preview-circle
              m-1
              :hue="perfs.themeHue"
            />
          </q-item-section>
        </q-item>
        <q-separator spaced />
        <q-item
          clickable
          v-ripple
          @click="restoreSettings"
        >
          <q-item-section avatar>
            <q-icon name="sym_o_restore" />
          </q-item-section>
          <q-item-section>恢复默认设置</q-item-section>
          <q-item-section side>
            <q-icon name="sym_o_chevron_right" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-page>
  </common-layout>
</template>

<script setup>
import CommonLayout from 'src/layouts/CommonLayout.vue'
import { useLocalPerfStore } from 'src/stores/local-perf'
import { computed } from 'vue'
import HctPreviewCircle from 'src/components/HctPreviewCircle.vue'
import HueSliderDialog from 'src/components/HueSliderDialog.vue'
import { useQuasar } from 'quasar'

const { perfs, restore } = useLocalPerfStore()
const darkModeOptions = computed(() => [
  { label: '跟随系统', value: 'auto' },
  { label: '浅色', value: false },
  { label: '深色', value: true }
])

const $q = useQuasar()
function pickThemeHue() {
  $q.dialog({
    component: HueSliderDialog,
    componentProps: { value: perfs.themeHue }
  }).onOk(hue => { perfs.themeHue = hue })
}
function restoreSettings() {
  $q.dialog({
    title: '恢复默认设置',
    message: '确定将所有本地设置恢复默认？',
    cancel: true
  }).onOk(() => { restore() })
}
</script>
<style lang="scss" scoped>
.q-item {
  --at-apply: rd-md;
}
</style>
