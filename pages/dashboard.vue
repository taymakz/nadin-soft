<script lang="ts" setup>
const userStore = useUserStore()
const currentTime = ref(getCurrentTime())
const { t } = useI18n()
function getCurrentTime() {
  const now = new Date()
  const hours = now.getHours().toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}

onMounted(() => {
  // Update the time every second
  setInterval(() => {
    currentTime.value = getCurrentTime()
  }, 1000)
})
const getMessage = computed(() => {
  const now = new Date()
  const hours = Number(now.getHours().toString().padStart(2, '0'))

  if (hours >= 6 && hours <= 11)
    return t('goodMorning')
  else if (hours > 11 && hours <= 16)
    return t('goodNoon')
  else 
    return t('goodNight')
})
</script>

<template>
  <div class="flex flex-col justify-center gap-y-6 text-center container">
    <h1 class="text-xl">
      {{ currentTime }}
    </h1>
    <div class="text-xl text-zinc-700 dark:text-zinc-400">
      {{getMessage}} , {{ userStore.user }}
    </div>
  </div>
</template>

<style>

</style>
