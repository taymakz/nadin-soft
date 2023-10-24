<script lang="ts" setup>
const colorMode = useColorMode()
const { t } = useI18n()

const name = ref()
const theme = ref(colorMode.value === 'dark' ? t('dark') : t('light'))

function getThemeEngValue() {
  if (theme.value === 'روشن' || theme.value === 'Light')
    return 'light'
  if (theme.value === 'تاریک' || theme.value === 'Dark')
    return 'dark'
  return colorMode.value
}

function submit() {
  colorMode.preference = getThemeEngValue()
}
</script>

<template>
  <div class="max-w-520px flex flex-col justify-center gap-y-6 container">
    <ProfileName />
    <ProfileTheme v-model="theme" />
    <ProfileLocale />
    <ABtn color="success" @click="submit">
      {{ $t('save') }}
    </ABtn>
  </div>
</template>

<style>

</style>
