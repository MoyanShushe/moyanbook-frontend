import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  async function verify(email) {
    await api.post('/user/verify', { email })
  }
  async function register(name, email, password, captcha) {
    await api.post('/user/register', { name, email, password, captcha })
    await login(email, password)
  }
  async function login(name, password) {
  }
  return {
    user,
    verify,
    register,
    login
  }
})
