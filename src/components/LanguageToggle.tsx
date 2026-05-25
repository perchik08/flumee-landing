import { useTranslation } from '../i18n/LanguageProvider'
import type { Locale } from '../i18n/types'

export function LanguageToggle() {
  const { locale, setLocale } = useTranslation()

  return (
    <div
      className="flex shrink-0 items-center rounded-full border border-[rgba(40,80,120,0.12)] bg-white/90 p-0.5 text-xs font-bold shadow-sm"
      role="group"
      aria-label="Language"
    >
      {(
        [
          { code: 'ru' as Locale, label: 'RU' },
          { code: 'en' as Locale, label: 'ENG' },
        ] as const
      ).map(({ code, label }) => {
        const active = locale === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              active
                ? 'bg-flumee-character-gradient text-white shadow-sm'
                : 'text-ink-secondary hover:text-ink'
            }`}
            aria-pressed={active}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
