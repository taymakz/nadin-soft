<script lang="ts" setup>
const name = ref('taymaz')
</script>

<template>

    <AInput
      :label="$t('name')"
      type="text"
     v-model="name"
    />

</template>

<style>

</style>
