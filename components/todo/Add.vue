<script lang="ts" setup>
import type { Todo } from '~/types/todo'

const userStore = useUserStore()

function addTodo(item: Todo) {
  userStore.addTodo(item)
}
</script>

<template>
  <TodoAddInput @add-todo="addTodo" />
</template>

<style>

</style>
