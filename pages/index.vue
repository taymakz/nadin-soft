<script setup lang="ts">
const { locale } = useI18n()
function toggleLocate() {
  locale.value = locale.value === 'en' ? 'fa' : 'en'
}
</script>

<template>
  <div>
    <!-- data-aos="fade-up" -->
    <div class="container">
      <div class="flex flex-col justify-center gap-y-4">
        <p>{{ $t('welcome') }}</p>
        <button class="btn" @click="toggleLocate">
          Change Language
        </button>
      </div>
    </div>
  </div>
</template>
