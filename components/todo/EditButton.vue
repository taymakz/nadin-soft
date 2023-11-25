<script lang="ts" setup>
import type { Todo } from '~/types/todo'

const props = defineProps({
  itemId: {
    type: Number,
    required: true,
  },
})
const emits = defineEmits<{
  editModal: [data: Todo]
}>()
const userStore = useUserStore()
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

<template>
  <ABtn icon="i-carbon-edit" icon-only variant="text" @click="editTodo" />
</template>

<style>
</style>
