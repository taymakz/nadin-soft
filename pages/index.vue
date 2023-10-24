<script setup lang="ts">
import { useField } from 'vee-validate'

const { t, locale, setLocale } = useI18n()
const userStore = useUserStore()

definePageMeta({
  layout: false,
})

const isRequired = (val: string) => (val.trim() ? true : t('required_input'))

const { errorMessage: usernameError, value: name } = useField('username', isRequired)

async function submit() {
  if (!name.value)
    return
  await userStore.setName(name.value)
  await navigateTo('/dashboard')
}
function toggleLocale() {
  setLocale(locale.value === 'en' ? 'fa' : 'en')
}

onMounted(async() => {
  const userStore = await useUserStore()
  await userStore.init()
  if (userStore.isLogin)
    navigateTo('/dashboard')
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-900">
    <div class="flex flex-col gap-y-4">
      <AInput
        v-model="name"
        :error="usernameError"
        :label="$t('name')"
        type="text"
      />

      <ABtn color="success" @click="submit">
        {{ $t('save') }}
      </ABtn>

      <ABtn color="success" @click="toggleLocale">
        <span v-if="locale === 'en'">Language : {{ $t('persian') }} </span>
        <span v-else>
          زبان : {{ $t('english') }}
        </span>
      </ABtn>
    </div>
  </div>
</template>
