<script lang="ts" setup>
import { useStore } from 'vuex'
import type { Todo } from '~/types/todo'

// const userStore = useUserStore()
const todoTitle = ref<string>('')
provide('model', todoTitle)

const store = useStore()
function addTodo() {
  const item: Todo = {
    id: 0,
    title: todoTitle.value,
  }
  store.commit('addTodo', item)
  // userStore.addTodo(item)
}
</script>

<template>
  <TodoAddInput @add-todo="addTodo" />
</template>

<style>

</style>
