<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  title: appName,
  htmlAttrs:{
    dir:'rtl',
    lang:'fa'
  }
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
