<template>
  <q-item
    v-if="user"
    clickable
    v-ripple
    to="/account"
  >
    <q-item-section avatar>
      <q-avatar
        color="ter-c"
        text-color="on-ter-c"
        icon="sym_o_account_circle"
        font-size="24px"
      />
    </q-item-section>

    <q-item-section>
      <q-item-label>
        {{ user.name }}
      </q-item-label>
      <q-item-label caption>
        {{ user.email || user.phone }}
      </q-item-label>
    </q-item-section>
  </q-item>
  <q-item
    v-else
    clickable
    v-ripple
    to="/login"
  >
    <q-item-section avatar>
      <q-avatar
        color="ter-c"
        text-color="on-ter-c"
        icon="sym_o_account_circle"
        font-size="24px"
      />
    </q-item-section>

    <q-item-section>
      登录/注册
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useUserStore } from 'src/stores/user'
import { toRef } from 'vue'

const userStore = useUserStore()
const user = toRef(userStore, 'user')
</script>

<style lang="scss" scoped>

</style>
