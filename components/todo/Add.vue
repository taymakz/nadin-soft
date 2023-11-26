<script lang="ts" setup>
import { useStore } from 'vuex';
import type { Todo } from '~/types/todo'

// const userStore = useUserStore()
const store = useStore()
const todoTitle = ref<string>('')
provide('model', todoTitle)

function addTodo() {
  const item: Todo = {
    id: 0,
    title: todoTitle.value,
  }
  store.dispatch('addTodoAction',item)
  // userStore.addTodo(item)
}
</script>

<template>
  <TodoAddInput @add-todo="addTodo" />
</template>

<style>

</style>
