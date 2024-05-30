<template>
  <div class="fullscreen text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 160px">
        404
      </div>

      <div
        class="text-h4"
        style="opacity: 0.4"
      >
        这里什么都没有...
      </div>

      <q-btn
        class="q-mt-xl"
        unelevated
        to="/"
        outline
        label="回到主页"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound'
})
</script>
