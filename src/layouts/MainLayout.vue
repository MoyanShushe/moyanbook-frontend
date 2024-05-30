<template>
  <q-layout
    view="lHh Lpr lFf"
  >
    <router-view />
    <q-footer bg-sur-c>
      <q-tabs
        text-on-sur
        active-color="on-sec-c"
        active-bg-color="sec-c"
      >
        <q-route-tab
          to="/official"
          icon="sym_o_store"
          label="官方上架"
        />
        <q-route-tab
          to="/"
          icon="sym_o_sell"
          label="市场"
        />
        <q-route-tab
          to="/my"
          icon="sym_o_person"
          label="我的"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup>
</script>
<style lang="scss" scoped>
.q-tab :is(.q-router-link--exact-active .q-icon) {
  font-variation-settings: 'FILL' 1;
}
</style>
