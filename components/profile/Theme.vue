<script lang="ts" setup>
const { t } = useI18n()
const themes = [
  t('dark'),
  t('light'),
]

const modelValue = defineModel()
</script>

<template>
  <ASelect
    v-model="modelValue"
    :label="$t('theme')"
    :options="themes"
  />
</template>

<style>

</style>
