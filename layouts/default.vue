<script setup lang="ts">
const menu = ref(false)

const route = useRoute();
watch(()=>route.path,()=>{
  menu.value = false
})
</script>

<template>
  <div>
    <AppNavbar v-model="menu"/>

    <AppAside v-model="menu"/>

    <div class="min-h-screen bg-white p-4 pt-32 sm:ml-64 dark:bg-zinc-800">
      <slot />
    </div>
  </div>
</template>
