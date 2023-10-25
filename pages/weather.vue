<script setup lang="ts">
import { ref } from 'vue'
import type { WeatherData } from '~/types/weather'
import { cities } from '~/utils/persian/ir'
import type { CityData } from '~/types/city'

const { t } = useI18n()
const value = ref('')
const weatherData: Ref<WeatherData | null> = ref(null)
const filteredCities: Ref<CityData[]> = ref([])

function search(event: any) {
  // Filter cities based on the input value
  filteredCities.value = cities.filter(city => city.city.toLowerCase().includes(event.query.toLowerCase()))
}

const selectedCity: Ref<CityData | null> = ref(null)

// Extract city names from filtered cities
const filteredCityNames = computed(() => filteredCities.value.map(city => city.city))

async function getWeatherData() {
  if (selectedCity.value) {
    // Make an API request to get weather data
    weatherData.value = await $fetch(`https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.value.lat}&longitude=${selectedCity.value.lng}&current_weather=true`)
  }
}

function calculateWeatherCondition() {
  if (weatherData.value && 'current_weather' in weatherData.value) {
    const weatherCode = weatherData.value.current_weather.weathercode

    if (weatherCode === 0)
      return t('sunny')

    else if (weatherCode === 1)
      return t('partlyCloudy')

    else if (weatherCode === 2)
      return t('cloudy')

    else
      return t('unknown')
  }
  else {
    return t('notAvailable')
  }
}

// Watch for changes in the 'value' ref
watchEffect(async () => {
  const inputValue = value.value.toLowerCase()
  // Find the selected city based on the input value
  const foundCity = cities.find(city => city.city.toLowerCase() === inputValue)
  selectedCity.value = foundCity || null // Ensure it's either a valid city or null
  getWeatherData()
})
</script>

<template>
  <div class="max-w-lg flex flex-col justify-center container space-y-6">
    <div class="flex flex-col gap-y-4">
      <div>
        {{ $t('city') }}
      </div>
      <PrimeAutoComplete
        v-model="value" :suggestions="filteredCityNames" input-class="py-2 px-4 w-full"
        @complete="search"
      />
    </div>
    <div
      class="shadow-base flex flex-col items-center justify-center gap-y-8 border border-gray-200 rounded-xl p-5 dark:border-white/5"
    >
      <div>
        {{ selectedCity ? selectedCity.city : $t('notAvailable') }}
      </div>
      <div dir="ltr">
        {{ weatherData && 'current_weather' in weatherData ? `${weatherData.current_weather.temperature} °C ` : $t('notAvailable') }}
      </div>
      <div>
        {{ calculateWeatherCondition() }}
      </div>
    </div>
  </div>
</template>
