import { defineStore } from 'pinia'
import type { Ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user: Ref<string | null> = ref(null)
  const isLogin = computed(() => user.value != null)
  const setName = async (value: string) => {
    user.value = value
    await localStorage.setItem('username', user.value)
  }
  const init = async () => {
    const username = await localStorage.getItem('username')
    if (username !== null)
      user.value = username.toString()
    else
      await navigateTo('/')
  }

  return { user, setName, isLogin, init }
})
