export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome',
      dashboard: 'Dashboard',
      todos: 'Todos',
      weather: 'Weather',
      profile: 'Profile',
    },
    fa: {
      welcome: 'خوش آمدید',
      dashboard: 'داشبورد',
      todos: 'کار ها',
      weather: 'وضعیت آب و هوا',
      profile: 'پروفایل',
    },
  },
}))
