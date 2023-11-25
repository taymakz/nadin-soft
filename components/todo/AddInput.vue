<script lang="ts" setup>
import type { Todo } from '~/types/todo'

const emits = defineEmits(['addTodo'])

const { t } = useI18n()

const errorMessage = ref()
type TodoTitleType = Ref<string>
const todoTitle = ref(inject<TodoTitleType>('model'))
function submitForm() {
  if (!todoTitle.value) {
    errorMessage.value = t('required_input')
    return
  }
  emits('addTodo')
  todoTitle.value = ''
  errorMessage.value = ''
}
</script>

<template>
  <div>
    <AInput
      v-model="todoTitle"
      :label="$t('todoTitle')"
      :error="errorMessage"
      append-inner-icon="i-carbon-add-alt"
      type="text"
      @keypress.enter="submitForm"
    />
  </div>
</template>

<style>

</style>
