import type { Store } from 'vuex'

interface State {
  user: string | null
}
export default {
  state: {
    user: null as string | null,
  },
  mutations: {

    setName(state: State, name: string) {
      state.user = name
      localStorage.setItem('username', JSON.stringify(name))
    },
    clearName(state: State) {
      state.user = null
      localStorage.removeItem('username')
    },
  },
  actions: {
    setNameAction(context: Store<State>, name: string) {
      
      if (!name)
        return
      context.commit('setName', name)
    },
    logoutUser(context: Store<State>) {
      context.commit('clearName')
      return navigateTo('/')
    },
    loginUser(context: Store<State>, name: string) {
      context.commit('setName', name)
      return navigateTo('/dashboard')
    },
  },
  getters: {
    isLogin: (state: State) => state.user !== null,
    getUser: (state: State) => state.user as string,

  },
}
