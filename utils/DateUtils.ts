import { padTo2Digits } from './NumberUtils'

export function toPersianDate(date: Date, withTime = false, withDashBetweenTimeAndDate = false): string {
  const pDate = new Date(date).toLocaleDateString('fa-IR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

  if (withTime) {
    const time = new Date(date).toLocaleTimeString('fa-IR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
    if (withDashBetweenTimeAndDate)
      return `${pDate} ـ ${time}`

    return `${pDate} ${time}`
  }
  else {
    return pDate
  }
}

export function getPersianDate(date: Date, format: string) {
  const week = [
    'يكشنبه',
    'دوشنبه',
    'سه شنبه',
    'چهارشنبه',
    'پنج شنبه',
    'جمعه',
    'شنبه',
  ]
  const months = [
    'فروردين',
    'ارديبهشت',
    'خرداد',
    'تير',
    'مرداد',
    'شهريور',
    'مهر',
    'آبان',
    'آذر',
    'دي',
    'بهمن',
    'اسفند',
  ]
  const today = new Date(date)
  const d = today.getDay()
  let day = today.getDate()
  let month = today.getMonth() + 1
  let year = today.getFullYear()

  year = window.navigator.userAgent.indexOf('MSIE') > 0 ? year : 1900 + year
  if (year === 0)
    year = 2000

  if (year < 100)
    year += 1900

  let y = 1
  for (let i = 0; i < 3000; i += 4) {
    if (year === i)
      y = 2
  }
  for (let i = 1; i < 3000; i += 4) {
    if (year === i)
      y = 3
  }
  if (y === 1) {
    year -= month < 3 || (month === 3 && day < 21) ? 622 : 621
    switch (month) {
      case 1:
        if (day < 21) {
          month = 10
          day += 10
        }
        else {
          month = 11
          day -= 20
        }
        break
      case 2:
        if (day < 20) {
          month = 11
          day += 11
        }
        else {
          month = 12
          day -= 19
        }
        break
      case 3:
        if (day < 21) {
          month = 12
          day += 9
        }
        else {
          month = 1
          day -= 20
        }
        break
      case 4:
        if (day < 21) {
          month = 1
          day += 11
        }
        else {
          month = 2
          day -= 20
        }
        break
      case 5:
      case 6:
        if (day < 22) {
          month -= 3
          day += 10
        }
        else {
          month -= 2
          day -= 21
        }
        break
      case 7:
      case 8:
      case 9:
        if (day < 23) {
          month -= 3
          day += 9
        }
        else {
          month -= 2
          day -= 22
        }
        break
      case 10:
        if (day < 23) {
          month = 7
          day += 8
        }
        else {
          month = 8
          day -= 22
        }
        break
      case 11:
      case 12:
        if (day < 22) {
          month -= 3
          day += 9
        }
        else {
          month -= 2
          day -= 21
        }
        break
      default:
        break
    }
  }
  if (y === 2) {
    year -= month < 3 || (month === 3 && day < 20) ? 622 : 621
    switch (month) {
      case 1:
        if (day < 21) {
          month = 10
          day += 10
        }
        else {
          month = 11
          day -= 20
        }
        break
      case 2:
        if (day < 20) {
          month = 11
          day += 11
        }
        else {
          month = 12
          day -= 19
        }
        break
      case 3:
        if (day < 20) {
          month = 12
          day += 10
        }
        else {
          month = 1
          day -= 19
        }
        break
      case 4:
        if (day < 20) {
          month = 1
          day += 12
        }
        else {
          month = 2
          day -= 19
        }
        break
      case 5:
        if (day < 21) {
          month = 2
          day += 11
        }
        else {
          month = 3
          day -= 20
        }
        break
      case 6:
        if (day < 21) {
          month = 3
          day += 11
        }
        else {
          month = 4
          day -= 20
        }
        break
      case 7:
        if (day < 22) {
          month = 4
          day += 10
        }
        else {
          month = 5
          day -= 21
        }
        break
      case 8:
        if (day < 22) {
          month = 5
          day += 10
        }
        else {
          month = 6
          day -= 21
        }
        break
      case 9:
        if (day < 22) {
          month = 6
          day += 10
        }
        else {
          month = 7
          day -= 21
        }
        break
      case 10:
        if (day < 22) {
          month = 7
          day += 9
        }
        else {
          month = 8
          day -= 21
        }
        break
      case 11:
        if (day < 21) {
          month = 8
          day += 10
        }
        else {
          month = 9
          day -= 20
        }
        break
      case 12:
        if (day < 21) {
          month = 9
          day += 10
        }
        else {
          month = 10
          day -= 20
        }
        break
      default:
        break
    }
  }
  if (y === 3) {
    year -= month < 3 || (month === 3 && day < 21) ? 622 : 621
    switch (month) {
      case 1:
        if (day < 20) {
          month = 10
          day += 11
        }
        else {
          month = 11
          day -= 19
        }
        break
      case 2:
        if (day < 19) {
          month = 11
          day += 12
        }
        else {
          month = 12
          day -= 18
        }
        break
      case 3:
        if (day < 21) {
          month = 12
          day += 10
        }
        else {
          month = 1
          day -= 20
        }
        break
      case 4:
        if (day < 21) {
          month = 1
          day += 11
        }
        else {
          month = 2
          day -= 20
        }
        break
      case 5:
      case 6:
        if (day < 22) {
          month -= 3
          day += 10
        }
        else {
          month -= 2
          day -= 21
        }
        break
      case 7:
      case 8:
      case 9:
        if (day < 23) {
          month -= 3
          day += 9
        }
        else {
          month -= 2
          day -= 22
        }
        break
      case 10:
        if (day < 23) {
          month = 7
          day += 8
        }
        else {
          month = 8
          day -= 22
        }
        break
      case 11:
      case 12:
        if (day < 22) {
          month -= 3
          day += 9
        }
        else {
          month -= 2
          day -= 21
        }
        break
      default:
        break
    }
  }

  const ye = new Date(date).toLocaleDateString('fa-IR').split('/')[0]
  if (format === null || format === undefined)
    return `${week[d]} ${day} ${months[month - 1]} ${year}`
  if (format === 'y/m/d')
    return `${year}/${month}/${day}`
  if (format === 'd/m/y')
    return `${day}/${month}/${year}`
  if (format === 'M/dd/D')
    return `${week[d]} ${day} ${months[month - 1]}` // چهارشنبه 12 مرداد
  if (format === 'M/dd')
    return `${day} ${months[month - 1]}` // 3 شهريور
  if (format === 'y/M/dd')
    return ` ${padTo2Digits(day)} / ${months[month - 1]} / ${ye}` // 04 / شهريور / ۱۴۰۱
}

export function GetDateTime(date: Date): string {
  let hours = date.getHours().toString()
  hours = (`0${hours}`).slice(-2)
  let min = date.getMinutes().toString()
  min = (`0${min}`).slice(-2)

  return `${hours}:${min}`
}
