<template>
  <ABtn icon="i-carbon-trash-can" icon-only variant="text" @click="removeTodo" />
</template>

<script lang="ts" setup>
const userStore = useUserStore()
const props = defineProps({
  itemId: {
    type: Number,
    required: true
  }
})
const removeTodo=()=>{
  userStore.removeTodo(props.itemId)
}
</script>
