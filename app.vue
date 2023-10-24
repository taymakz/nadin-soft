<script setup lang="ts">
import { appName } from '~/constants'

const userStore = useUserStore()
onMounted(async () => {
  await userStore.init()
})
useHead({
  title: appName,
  htmlAttrs: {
    dir: 'rtl',
    lang: 'fa',
  },
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>

</style>
