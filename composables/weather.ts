import type { WeatherData } from '~/types/weather'

export function useGetWeatherLink(lat: number, lng: number): string {
  return `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`
}

export async function useGetWeather(link: string): Promise<WeatherData> {
  return await $fetch(link)
}
