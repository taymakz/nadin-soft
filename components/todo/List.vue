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
      <li v-for="item in userStore.todos" :key="item.id"
        class="flex flex-col items-center justify-between gap-x-6 border border-gray-200 rounded-xl px-4 py-3 md:flex-row dark:border-white/10">
        <div class="flex-grow">
          {{ item.title }}
        </div>
        <div class="flex items-center gap-x-2">
          <TodoEditButton @open-edit-modal="openEditModal" :item-id="item.id" />

          <TodoRemoveButton :item-id="item.id" />
        </div>
      </li>
    </ul>
    <TodoEditModal v-if="editModal" :todo="currentEditingTodo" v-model="editModal" />

  </div>
</template>

<style>
</style>
