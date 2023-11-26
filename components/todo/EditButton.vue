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
// const userStore = useUserStore()
const store = useStore()
async function editTodo() {
  // const getTodo = userStore.todos.find(x => x.id === props.itemId)
  const getTodo: Todo = await store.dispatch('getTodoById', props.itemId)
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
