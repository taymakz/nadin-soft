<script lang="ts" setup>
const { t } = useI18n()
const locales = [
  t('persian'),
  t('english'),
]

const modelValue = defineModel()
</script>

<template>
  <ASelect
    v-model="modelValue"
    :label="$t('locale')"
    :options="locales"
  />
</template>

<style>

</style>
