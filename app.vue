<script setup lang="ts">
import { useStore } from 'vuex'
import { appName } from '~/constants'

// const userStore = useUserStore()
const store = useStore()
// userStore.init()
store.commit('init')

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
