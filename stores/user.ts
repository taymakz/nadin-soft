import { defineStore } from 'pinia'

import type { Ref } from 'vue'
import type { Todo } from '~/types/todo'

export const useUserStore = defineStore('user', () => {
  const todos: Ref<Todo[]> = ref([])
  const user: Ref<string | null> = ref(null)
  const isLogin = computed(() => user.value != null)
  const setName = (name: string) => {
    user.value = name

    localStorage.setItem('username', JSON.stringify(name))
  }
  const init = async () => {
    const username = localStorage.getItem('username')
    const todo_list = localStorage.getItem('todos')
    if (username)
      user.value = JSON.parse(username) as string
    if (todo_list)
      todos.value = JSON.parse(todo_list) as Todo[]
  }

  // Todos
  const syncTodosStorage = () => {
    localStorage.removeItem('todos')
    localStorage.setItem('todos', JSON.stringify(todos.value))
  }
  const addTodo = (item: Todo) => {
    item.id = todos.value.length + 1
    todos.value.push(item)
    syncTodosStorage()
  }
  const removeTodo = (id: number) => {
    const item = todos.value.find(x => x.id === id)
    if (!item)
      return
    todos.value = todos.value.filter(x => x.id !== item.id)
    // Sort id of Todos after Delete
    for (const [index, item] of todos.value.entries())
      item.id = index + 1

    syncTodosStorage()
  }
  const editTodo = (todoId: number, newTitle: string) => {
    const index = todos.value.findIndex(item => item.id === todoId)
    if (index !== -1)
      todos.value[index].title = newTitle
    syncTodosStorage()
  }

  return { user, setName, init, isLogin, todos, addTodo, removeTodo, editTodo }
})
