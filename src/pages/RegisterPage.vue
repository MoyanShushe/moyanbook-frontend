<template>
  <common-layout title="注册">
    <q-page
      flex
      items-center
      justify-center
    >
      <div
        w="320px"
        pb="100px"
      >
        <q-form @submit="register">
          <q-input
            class="pb-6"
            v-model="name"
            label="用户名"
            filled
            type="text"
            :rules="nameRules"
          />
          <q-input
            class="pb-6"
            v-model="email"
            label="电子邮箱"
            filled
            type="email"
          />
          <div
            flex
            pb-6
          >
            <q-input
              v-model="captcha"
              label="验证码"
              filled
              type="number"
              class="grow"
              autofocus
            />
            <q-btn
              color="pri"
              text-color="on-pri"
              ml-2
              unelevated
              :label="verifyState.waitTime ? verifyState.waitTime + 's' : '获取验证码'"
              :disable="!!verifyState.waitTime"
              :loading="verifyState.loading"
              @click="verify"
            />
          </div>
          <q-input
            class="pb-6"
            v-model="password"
            label="密码"
            filled
            type="password"
            :rules="passwordRules"
          />

          <div
            mt-2
            flex
          >
            <q-btn
              color="pri"
              text-color="on-pri"
              label="注册"
              unelevated
              grow
              type="submit"
            />
          </div>
        </q-form>
      </div>
    </q-page>
  </common-layout>
</template>

<script setup>
import { reactive, ref } from 'vue'
import CommonLayout from 'src/layouts/CommonLayout.vue'
import { useUserStore } from 'src/stores/user'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const captcha = ref('')

const userStore = useUserStore()
const $q = useQuasar()

const verifyState = reactive({
  loading: false,
  waitTime: 0
})
function verify() {
  if (!/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(email.value)) {
    $q.notify({
      type: 'negative',
      message: '请输入正确的邮箱地址'
    })
    return
  }
  verifyState.loading = true
  userStore.verify(email.value).then(() => {
    $q.notify({
      message: '已发送验证码'
    })
    verifyState.waitTime = 30
    const timer = setInterval(() => {
      verifyState.waitTime--
      if (verifyState.waitTime <= 0) {
        clearInterval(timer)
      }
    }, 1000)
  }).catch(() => {
    $q.notify({
      type: 'negative',
      message: '验证码发送失败'
    })
  }).finally(() => {
    verifyState.loading = false
  })
}
const registering = ref(false)
const router = useRouter()
function register() {
  registering.value = true
  userStore.register(name.value, email.value, password.value, captcha.value).then(() => {
    router.replace('/my')
  }).catch(() => {
    $q.notify({
      type: 'negative',
      message: '注册失败'
    })
  }).finally(() => {
    registering.value = false
  })
}

const nameRules = [
  v => (v.length >= 4 && v.length <= 20) || '用户名长度应在4-20位之间',
  v => /^[\w\- ]+$/.test(v) || '用户名只能包含字母、数字、空格和连字符'
]
const passwordRules = [
  v => (v.length >= 8 && v.length <= 20) || '密码长度应在8-20位之间',
  v => (/[a-zA-Z]/.test(v) && /\d/.test(v)) || '密码要包含字母和数字'
]
</script>
