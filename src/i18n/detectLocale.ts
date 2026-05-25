import type { Locale } from './types'

const RU_COUNTRY_CODES = new Set([
  'RU',
  'BY',
  'KZ',
  'UA',
  'AM',
  'AZ',
  'GE',
  'KG',
  'MD',
  'TJ',
  'TM',
  'UZ',
])

export function localeFromBrowser(): Locale {
  const lang = navigator.language.toLowerCase()
  return lang.startsWith('ru') ? 'ru' : 'en'
}

export async function detectLocaleFromIP(): Promise<Locale> {
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 4000)

    const res = await fetch('https://ipapi.co/country_code/', {
      signal: controller.signal,
    })
    clearTimeout(timeout)

    if (!res.ok) throw new Error('geo failed')

    const code = (await res.text()).trim().toUpperCase()
    return RU_COUNTRY_CODES.has(code) ? 'ru' : 'en'
  } catch {
    return localeFromBrowser()
  }
}
