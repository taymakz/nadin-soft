<script lang="ts" setup>
import type { Todo } from '~/types/todo'

const userStore = useUserStore()
const { t } = useI18n()

const editModal = ref(false)
const currentEditingTodo: Ref<Todo | null> = ref(null)

const openEditModal = (todoData: Todo) => {
  currentEditingTodo.value = todoData
  editModal.value = true
}
</script>

<template>
  <div>
    <ul class="space-y-4">
      <TodoCard v-for="item in userStore.todos" :key="item.id" :todo="item" @open-edit-modal="openEditModal" />
    </ul>
    <TodoEditModal v-if="editModal" :todo="currentEditingTodo" v-model="editModal" />

  </div>
</template>

<style>
</style>
