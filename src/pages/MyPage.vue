<template>
  <q-header bg-sur-c>
    <q-toolbar text-on-sur>
      <q-toolbar-title>
        我的
      </q-toolbar-title>
    </q-toolbar>
  </q-header>

  <q-page-container>
    <q-page
      max-w-screen-md
      m-auto
    >
      <q-list pt-2>
        <user-item />
        <q-separator spaced />
        <q-item
          clickable
          v-ripple
          to="/my-books"
        >
          <q-item-section avatar>
            <q-icon name="sym_o_sell" />
          </q-item-section>

          <q-item-section>
            我发布的
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          to="/purchase"
        >
          <q-item-section avatar>
            <q-icon name="sym_o_shopping_cart" />
          </q-item-section>

          <q-item-section>
            我购买的
          </q-item-section>
        </q-item>
        <q-separator spaced />
        <q-item
          clickable
          v-ripple
          to="/settings"
        >
          <q-item-section avatar>
            <q-icon name="sym_o_settings" />
          </q-item-section>

          <q-item-section>
            设置
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          to="/about"
        >
          <q-item-section avatar>
            <q-icon name="sym_o_info" />
          </q-item-section>

          <q-item-section>
            关于
          </q-item-section>
        </q-item>
      </q-list>
    </q-page>
  </q-page-container>
</template>

<script setup>
import UserItem from 'src/components/UserItem.vue'
</script>

<style lang="scss" scoped>
.q-item {
  --at-apply: rd-md;
}
</style>
