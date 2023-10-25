<script setup>
import { ref } from 'vue'
import { cities } from '~/utils/persian/ir'

const value = ref('')
const weatherData = ref()
const filteredCities = ref([])

function search(event) {
  // Filter cities based on the input value
  filteredCities.value = cities.filter(city => city.city.toLowerCase().includes(event.query.toLowerCase()))
}

const selectedCity = ref(null)

// Extract city names from filtered cities
const filteredCityNames = computed(() => filteredCities.value.map(city => city.city))

async function getWeatherData() {
  if (selectedCity.value) {
    // Make an API request to get weather data
    const data = await $fetch(`https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.value.lat}&longitude=${selectedCity.value.lng}&current_weather=true`)

    weatherData.value = data
  }
}
function calculateWeatherCondition() {
  if (weatherData.value && 'current_weather' in weatherData.value) {
    const weatherCode = weatherData.value.current_weather.weathercode

    if (weatherCode === 0)
      return 'Sunny'

    else if (weatherCode === 1)
      return 'Partly Cloudy'

    else if (weatherCode === 2)
      return 'Cloudy'

    else
      return 'Unknown' // Add more conditions as needed
  }
  else {
    return 'N/A'
  }
}
// Watch for changes in the 'value' ref
watchEffect(async () => {
  const inputValue = value.value.toLowerCase()
  // Find the selected city based on the input value
  selectedCity.value = cities.find(city => city.city.toLowerCase() === inputValue)
  getWeatherData()
})
</script>

<template>
  <div class="max-w-lg flex flex-col justify-center container space-y-6">
    <div class="flex flex-col gap-y-4">
      <div>
        {{ $t('city') }}
      </div>
      <PrimeAutoComplete v-model="value" :suggestions="filteredCityNames" input-class="py-2 px-4 w-full" @complete="search" />
    </div>
    <div class="shadow-base flex flex-col items-center justify-center gap-y-8 border border-gray-200 rounded-xl p-5 dark:border-white/5">
      <div>
        {{ selectedCity ? selectedCity.city : 'N/A' }}
      </div>
      <div dir="ltr">
        {{ weatherData && 'current_weather' in weatherData ? `${weatherData.current_weather.temperature} °C ` : 'N/A' }}
      </div>
      <div>
        {{ calculateWeatherCondition() }}
      </div>
    </div>
  </div>
</template>
