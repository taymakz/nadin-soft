<script lang="ts" setup>
import type { Todo } from '~/types/todo'

const userStore = useUserStore()

const editModal = ref(false)
const currentEditingTodo: Ref<Todo | null> = ref(null)

function openEditModal(todoData: Todo) {
  currentEditingTodo.value = todoData
  editModal.value = true
}
</script>

<template>
  <div>
    <ul class="space-y-4">
      <TodoCard v-for="item in userStore.todos" :key="item.id" :todo="item" @open-edit-modal="openEditModal" />
    </ul>
    <TodoEditModal v-if="editModal" v-model="editModal" :todo="currentEditingTodo" />
  </div>
</template>

<style>
</style>
