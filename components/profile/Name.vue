<script lang="ts" setup>
const modelValue = defineModel()

</script>

<template>

    <AInput
      :label="$t('name')"
      type="text"
     v-model="modelValue"
    />

</template>

<style>

</style>
