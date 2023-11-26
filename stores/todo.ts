import type { Store } from 'vuex'
import type { EditTodoPayload } from './../types/todo'
import type { Todo } from '~/types/todo'

interface State {
  todos: Todo[]
}
export default {
  state: {
    todos: [] as Todo[],
  },
  mutations: {
    syncTodosStorage(state: State) {
      localStorage.removeItem('todos')
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    addTodo(state: State, item: Todo) {
      state.todos = state.todos || []

      item.id = state.todos.length + 1
      state.todos.push(item)

      // @ts-expect-error i have not idea how to fix
      this.commit('syncTodosStorage')
    },
    removeTodo(state: State, id: number) {
      const index = state.todos.findIndex(x => x.id === id)
      if (index !== -1) {
        state.todos.splice(index, 1)
        // Sort id of Todos after Delete
        state.todos.forEach((item, index) => {
          item.id = index + 1
        })

        // @ts-expect-error i have not idea how to fix
        this.commit('syncTodosStorage')
      }
    },
    editTodo(state: State, payload: EditTodoPayload) {
      const index = state.todos.findIndex(item => item.id === payload.todoId)

      if (index !== -1) {
        state.todos[index].title = payload.newTitle

        // @ts-expect-error i have not idea how to fix
        this.commit('syncTodosStorage')
      }
    },
    setTodo(state: State, items: Todo[]) {
      state.todos = items
    },

  },
  actions: {
    async getTodoById(context: { state: State }, id: number) {
      return context.state.todos.find(x => x.id === id)
    },

    async setTodoAction(context: Store<State>, item: Todo[]) {
      context.commit('setTodo', item)
    },
    async addTodoAction(context: Store<State>, item: Todo) {
      context.commit('addTodo', item)
    },
    async removeTodoAction(context: Store<State>, id: number) {
      context.commit('removeTodo', id)
    },
    async editTodoAction(context: Store<State>, payload: EditTodoPayload) {
      context.commit('editTodo', payload)
    },
    async syncTodosStorageAction({ state }: { state: State }) {
      localStorage.removeItem('todos')
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },

  },
  getters: {
    getTodos: (state: State) => state.todos as Todo[],

  },
}
