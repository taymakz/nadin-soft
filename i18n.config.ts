export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'fa',
  messages: {
    en: {
      // theme
      theme: 'Select Theme',
      dark: 'Dark',
      light: 'Light',

      // Side bar
      dashboard: 'Dashboard',
      todos: 'Todos',
      weather: 'Weather',
      profile: 'Profile',

      // inputs
      name: 'Name',
      name_placeholder: 'Taymaz Akbari',

      save: 'Save',

    },
    fa: {
      // theme
      theme: 'انتخاب تم',

      dark: 'تاریک',
      light: 'روشن',
      
      // Side bar
      dashboard: 'داشبورد',
      todos: 'کار ها',
      weather: 'وضعیت آب و هوا',
      profile: 'پروفایل',

      // inputs
      name: 'نام',
      name_placeholder: 'تایماز اکبری',

      save: 'ذخیره',

    },
  },
}))
