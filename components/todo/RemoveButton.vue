<script lang="ts" setup>
import { useStore } from 'vuex';

const props = defineProps({
  itemId: {
    type: Number,
    required: true,
  },
})
// const userStore = useUserStore()
const store = useStore()
function removeTodo() {
  store.dispatch('removeTodoAction',props.itemId)
  // userStore.removeTodo(props.itemId)
}
</script>

<template>
  <ABtn icon="i-carbon-trash-can" icon-only variant="text" @click="removeTodo" />
</template>
