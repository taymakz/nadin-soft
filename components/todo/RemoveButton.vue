<script lang="ts" setup>
const props = defineProps({
  itemId: {
    type: Number,
    required: true,
  },
})
const userStore = useUserStore()
function removeTodo() {
  userStore.removeTodo(props.itemId)
}
</script>

<template>
  <ABtn icon="i-carbon-trash-can" icon-only variant="text" @click="removeTodo" />
</template>
