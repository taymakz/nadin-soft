<script lang="ts" setup>
import { useField } from 'vee-validate'

const userStore = useUserStore()
const { t } = useI18n()

const isRequired = (val: string | undefined) => (val && val.trim() ? true : t('required_input'))

const { errorMessage: titleError, value: todoTitle } = useField('username', isRequired)
function submitTodo() {
  if (!todoTitle.value)
    return
  const item = {
    id: 0,
    title: todoTitle.value,
  }
  userStore.addTodo(item)
  todoTitle.value = ''
}
</script>

<template>
  <AInput
    v-model="todoTitle"
    :label="$t('todoTitle')"
    :error="titleError"
    append-inner-icon="i-carbon-add-alt"
    type="text"
    @keypress.enter="submitTodo"
  />

</template>

<style>

</style>
