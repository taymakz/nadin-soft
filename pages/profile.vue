<script lang="ts" setup>
import { useStore } from 'vuex'
import { useUserStore } from '~/stores/user'

const colorMode = useColorMode()
const { t, locale, setLocale } = useI18n()
// const userStore = useUserStore()
const store = useStore()
const username = ref()
onMounted(() => {
  // username.value = userStore.user
  username.value = store.getters.user
})
const theme = ref(colorMode.value === 'dark' ? t('dark') : t('light'))
const currentLocale = ref(locale.value === 'en' ? t('english') : t('persian'))

function getThemeEngValue() {
  if (theme.value === 'روشن' || theme.value === 'Light')
    return 'light'
  if (theme.value === 'تاریک' || theme.value === 'Dark')
    return 'dark'
  return colorMode.value
}
function getLocaleEngValue() {
  if (currentLocale.value === 'فارسی' || currentLocale.value === 'Persian')
    return 'fa'
  if (currentLocale.value === 'انگلیسی' || currentLocale.value === 'English')
    return 'en'
  return locale.value
}
function submit() {
  colorMode.preference = getThemeEngValue()
  setLocale(getLocaleEngValue())
  if (username.value)
    store.commit('setName', username.value)
    // userStore.setName(username.value)
}
</script>

<template>
  <div class="max-w-520px flex flex-col justify-center gap-y-6 container">
    <ProfileName v-model="username" />
    <ProfileTheme v-model="theme" />
    <ProfileLocale v-model="currentLocale" />
    <ABtn color="success" @click="submit">
      {{ $t('save') }}
    </ABtn>
  </div>
</template>

<style>

</style>
