import { defineStore } from 'pinia'
import type { Ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user: Ref<string | null> = ref(null)
  const isLogin = computed(() => user.value != null)
  const setName = (name: string) => {
    user.value = name

  
    localStorage.setItem('username',name)
  }
  const init = async () => {
    const username = await localStorage.getItem('username')
    if (username !== null)
      user.value = username.toString()
    else
      await navigateTo('/')
  }

  return { user, setName, init,isLogin }
})
