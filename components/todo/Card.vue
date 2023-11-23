<template>
  <li
    class="flex flex-col items-center justify-between gap-x-6 border border-gray-200 rounded-xl px-4 py-3 md:flex-row dark:border-white/10">
    <div class="flex-grow">
      {{ todo.title }}
    </div>
    <div class="flex items-center gap-x-2">
      <TodoEditButton @edit-modal="(todo:Todo)=>$emit('openEditModal',todo)" :item-id="todo.id" />

      <TodoRemoveButton :item-id="todo.id" />
    </div>
    </li>
</template>

<script lang="ts" setup>
import type { Todo } from '~/types/todo';

defineProps<{
  todo: Todo
}>()
</script>

<style>
</style>

