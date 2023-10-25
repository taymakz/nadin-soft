<script lang="ts" setup>
const userStore = useUserStore()
const { t } = useI18n()

const errorMessage = ref()
const todoTitle = ref()
function submitTodo() {
  if (!todoTitle.value) {
    errorMessage.value = t('required_input')
    return
  }
  const item = {
    id: 0,
    title: todoTitle.value,
  }
  userStore.addTodo(item)
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
