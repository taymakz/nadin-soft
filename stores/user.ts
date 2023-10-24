import { defineStore } from 'pinia'
import type { Ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user: Ref<string | null> = ref(null)
  const isLogin = computed(() => user.value != null)
  const setName = async (value: string) => {
    const storage = useStorage()
    user.value = value
    await storage.setItem('username', user.value)
  }
  const init = async () => {
    const storage = useStorage()
    const username = await storage.getItem('username')
    if (username)
      user.value = username.toString()
    else
      navigateTo('/')
  }

  return { user, setName, isLogin, init }
})
