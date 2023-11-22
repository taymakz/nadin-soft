<template>
  <ADialog v-model="modelValue">
    <div class="p-4 space-y-6">
      <AInput v-model="newTodoTitle" :label="$t('todoTitle')" type="text" @keypress.enter="submitEditTodo" />
      <div class="w-full flex justify-end lg:w-auto">
        <ABtn color="success" @click="submitEditTodo">
          {{ $t('save') }}
        </ABtn>
      </div>
    </div>
  </ADialog>
</template>

<script lang="ts" setup>
import type { Todo } from '~/types/todo';
const userStore = useUserStore()

const modelValue = defineModel()
const props = defineProps<{
  todo:Todo | null
}>()
const newTodoId = ref()
const newTodoTitle = ref()

onMounted(()=>{
  newTodoId.value = props.todo?.id
  newTodoTitle.value = props.todo?.title
})

function submitEditTodo() {
  userStore.editTodo(newTodoId.value,newTodoTitle.value)
  modelValue.value = false
  // Reset formData for the next edit
  newTodoId.value = null
  newTodoTitle.value = null
}
</script>

<style>
</style>

