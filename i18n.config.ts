export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'fa',
  messages: {
    en: {
         // locale
         english : 'English',
         persian : 'Persian',

      // theme
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
      theme: 'Select Theme',

      locale: 'Select Locale',

      save: 'Save',

    },
    fa: {

      // locale
      english : 'انگلیسی',
      persian : 'فارسی',

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
      theme: 'انتخاب تم',

      locale: 'انتخاب زبان',
      save: 'ذخیره',

    },
  },
}))
