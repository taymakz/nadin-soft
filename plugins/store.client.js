import { createStore, useStore } from 'vuex'
import userStore from '~/stores/user'
import todoStore from '~/stores/todo'

const store = createStore({
  actions: {
    init() {
      this.dispatch('setNameAction', JSON.parse(localStorage.getItem('username')))
      this.dispatch('setTodoAction', JSON.parse(localStorage.getItem('todos')))
    },
  },

  modules: {
    userStore,
    todoStore,
  },
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store)
  // Install the store instance as a plugin
})
