<template>
  <common-layout title="登录">
    <q-page
      flex
      items-center
      justify-center
    >
      <div
        w="320px"
        pb="100px"
      >
        <q-input
          v-model="name"
          label="用户名"
          filled
          type="text"
        />
        <q-input
          class="mt-2"
          v-model="password"
          label="密码"
          filled
          type="password"
          @keyup.enter="login(name, password)"
        />
        <div
          mt-2
          flex
        >
          <q-btn
            label="登录"
            color="pri"
            text-color="on-pri"
            @click="login(name, password)"
            size="md"
            unelevated
            grow
          />
          <q-btn
            color="pri-c"
            text-color="on-pri-c"
            ml-2
            label="注册"
            to="/register"
            replace
            unelevated
            grow
          />
        </div>
      </div>
    </q-page>
  </common-layout>
</template>

<script setup>
import { ref } from 'vue'
import CommonLayout from 'src/layouts/CommonLayout.vue'
import { useUserStore } from 'src/stores/user'

const name = ref('')
const password = ref('')

const { login } = useUserStore()
</script>
