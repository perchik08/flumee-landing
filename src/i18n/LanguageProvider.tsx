import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { updatePageMeta } from '../lib/pageMeta'
import { detectLocaleFromIP } from './detectLocale'
import { translations } from './translations'
import type { Dictionary, Locale } from './types'

const STORAGE_KEY = 'flumee-locale'

interface LanguageContextValue {
  locale: Locale
  t: Dictionary
  setLocale: (locale: Locale) => void
  ready: boolean
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readStoredLocale(): Locale | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'ru' || value === 'en' ? value : null
  } catch {
    return null
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(
    () => readStoredLocale() ?? 'ru',
  )
  const [ready, setReady] = useState(() => readStoredLocale() !== null)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    if (readStoredLocale()) return

    let cancelled = false
    detectLocaleFromIP().then((detected) => {
      if (!cancelled) {
        setLocaleState(detected)
        setReady(true)
      }
    })

    return () => {
      cancelled = true
    }
  }, [])

  const t = translations[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    updatePageMeta(t)
  }, [locale, t])

  const value = useMemo(
    () => ({ locale, t, setLocale, ready }),
    [locale, t, setLocale, ready],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

export function useTranslation() {
  const { locale, t, setLocale, ready } = useLanguage()
  return { locale, t, setLocale, ready }
}
