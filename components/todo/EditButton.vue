<template>
  <ABtn icon="i-carbon-edit" icon-only variant="text" @click="editTodo" />
</template>

<script lang="ts" setup>
import type { Todo } from '~/types/todo'

const userStore = useUserStore()
const props = defineProps({
  itemId: {
    type: Number,
    required: true
  }
})
const emits = defineEmits<{
  editModal: [data: Todo]
}>()

function editTodo() {
  const getTodo = userStore.todos.find(x => x.id === props.itemId)
  if (getTodo) {
    const emitData: Todo = {
      id: getTodo.id,
      title: getTodo.title,
    }
    emits('editModal', emitData)
  }
}
</script>

<style>
</style>

