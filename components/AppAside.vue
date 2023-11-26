<script lang="ts" setup>
const localePath = useLocalePath()
const modelValue = defineModel()
</script>

<template>
  <aside
    :class="{ '-translate-x-full': !modelValue }"
    class="fixed left-0 top-0 z-40 h-screen w-64 border-r border-gray-200 bg-white pt-20 transition-transform sm:translate-x-0 dark:border-white/5 dark:bg-zinc-900"
  >
    <div class="h-full overflow-y-auto bg-white px-3 pb-4 dark:bg-zinc-900">
      <ul class="font-medium space-y-2">
        <li>
          <NuxtLink :to="localePath('/dashboard')" class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
            <i class="i-carbon-apps h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span class="mr-3">{{ $t('dashboard') }}</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/todos')" class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
            <i class="i-carbon-ibm-watson-knowledge-catalog h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span class="mr-3">{{ $t('todos') }}</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/weather')" class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
            <i class="i-carbon-radar-weather h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span class="mr-3">{{ $t('weather') }}</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/profile')" class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
            <i class="i-carbon-customer-service h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span class="mr-3">{{ $t('profile') }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style>

</style>
