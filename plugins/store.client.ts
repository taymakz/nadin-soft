import { createStore } from 'vuex'
import type { EditTodoPayload } from './../types/todo'
import type { Todo } from '~/types/todo'

const store = createStore({
  state() {
    return {
      todos: [] as Todo[],
      user: null as string | null,
    }
  },
  mutations: {

    logoutUser(state) {
      localStorage.removeItem('username')
      state.user = null
      return navigateTo('/')
    },
    loginUser(state, name: string) {
      state.user = name
      localStorage.setItem('username', JSON.stringify(name))
      return navigateTo('/dashboard')
    },
    setName(state, name: string) {
      state.user = name
      localStorage.setItem('username', JSON.stringify(name))
    },
    init(state) {
      const username = localStorage.getItem('username')
      const todoList = localStorage.getItem('todos')
      if (username)
        state.user = JSON.parse(username)
      if (todoList)
        state.todos = JSON.parse(todoList)
    },
    syncTodosStorage(state) {
      localStorage.removeItem('todos')
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    addTodo(state, item: Todo) {
      item.id = state.todos.length + 1
      state.todos.push(item)
      store.commit('syncTodosStorage')
    },
    removeTodo(state, id: number) {
      const index = state.todos.findIndex(x => x.id === id)
      if (index !== -1) {
        state.todos.splice(index, 1)
        // Sort id of Todos after Delete
        state.todos.forEach((item, index) => {
          item.id = index + 1
        })
        store.commit('syncTodosStorage')
      }
    },
    editTodo(state, payload: EditTodoPayload) {
      const index = state.todos.findIndex(item => item.id === payload.todoId)

      if (index !== -1) {
        state.todos[index].title = payload.newTitle
        store.commit('syncTodosStorage')
      }
    },
  },
  getters: {
    isLogin: state => state.user !== null,
    user: state => state.user as string,
    getTodos: state => state.todos as Todo[],

  },
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store)
  // Install the store instance as a plugin
})
