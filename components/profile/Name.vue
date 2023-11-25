<script lang="ts" setup>
const modelValue = defineModel()
</script>

<template>
  <AInput
    v-model="modelValue"
    :label="$t('name')"
    type="text"
  />
</template>

<style>

</style>
