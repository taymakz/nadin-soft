<script lang="ts" setup>
import { useStore } from 'vuex'
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
const store = useStore()

// const userStore = useUserStore()
function editTodo() {
  const todos = store.getters.getTodos
  const getTodo: Todo = todos.find((x: Todo) => x.id === props.itemId)
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
