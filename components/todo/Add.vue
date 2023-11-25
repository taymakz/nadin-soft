<script lang="ts" setup>
import type { Todo } from '~/types/todo'

const userStore = useUserStore()
const todoTitle = ref()
provide('model', todoTitle)

function addTodo() {
  const item: Todo = {
    id: 0,
    title: todoTitle.value,
  }
  userStore.addTodo(item)
}
</script>

<template>
  <TodoAddInput @add-todo="addTodo" />
</template>

<style>

</style>
