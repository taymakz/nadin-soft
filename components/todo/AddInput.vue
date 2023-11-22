<script lang="ts" setup>
import type { Todo } from '~/types/todo';


const { t } = useI18n()


const emits = defineEmits<{
  addTodo: [data: Todo]
}>()
const errorMessage = ref()
const todoTitle = ref()
function submitTodo() {
  if (!todoTitle.value) {
    errorMessage.value = t('required_input')
    return
  }
  const item:Todo = {
    id: 0,
    title: todoTitle.value,
  }
  emits('addTodo',item)

  todoTitle.value = ''
  errorMessage.value = ''
}
</script>

<template>
  <AInput
    v-model="todoTitle"
    :label="$t('todoTitle')"
    :error="errorMessage"
    append-inner-icon="i-carbon-add-alt"
    type="text"
    @keypress.enter="submitTodo"
  />
</template>

<style>

</style>
