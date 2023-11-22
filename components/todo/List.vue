<script lang="ts" setup>
import type { Todo } from '~/types/todo'

const userStore = useUserStore()
const { t } = useI18n()

const editModal = ref(false)
const newTodoId = ref()
const newTodoTitle = ref()
function editTodo(id: number) {
  const getTodo = userStore.todos.find(x => x.id === id)
  if (getTodo) {
    newTodoId.value = getTodo.id
    newTodoTitle.value = getTodo.title
    editModal.value = true
  }
}
function submitEditTodo() {
  userStore.editTodo(newTodoId.value,newTodoTitle.value)
  editModal.value = false
  // Reset formData for the next edit
  newTodoId.value = null
  newTodoTitle.value = null
}
</script>

<template>
  <div>
    <ul class="space-y-4">
      <li v-for="item in userStore.todos" :key="item.id" class="flex flex-col items-center justify-between gap-x-6 border border-gray-200 rounded-xl px-4 py-3 md:flex-row dark:border-white/10">
        <div class="flex-grow">
          {{ item.title }}
        </div>
        <div class="flex items-center gap-x-2">
          <ABtn
            icon="i-carbon-edit"
            icon-only
            variant="text"
            @click="editTodo(item.id)"
          />
          <TodoRemoveButton :item-id="item.id"/>
        </div>
      </li>
    </ul>

    <ADialog
      v-model="editModal"
    >
      <div class="p-4 space-y-6">
        <AInput
          v-model="newTodoTitle"
          :label="$t('todoTitle')"
          type="text"
          @keypress.enter="submitEditTodo"
        />
        <div class="w-full flex justify-end lg:w-auto">
          <ABtn color="success" @click="submitEditTodo">
            {{ $t('save') }}
          </ABtn>
        </div>
      </div>
    </ADialog>
  </div>
</template>

<style>

</style>
