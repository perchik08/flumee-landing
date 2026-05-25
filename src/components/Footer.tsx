import { Send } from 'lucide-react'
import { useMemo } from 'react'
import { NAV_HREFS, TELEGRAM_URL } from '../constants'
import { useTranslation } from '../i18n/LanguageProvider'
import { Button } from './Button'
import { FlumeeCharacter } from './FlumeeCharacter'

export function Footer() {
  const { t } = useTranslation()

  const navLinks = useMemo(
    () => [
      { label: t.nav.howItWorks, href: NAV_HREFS.howItWorks },
      { label: t.nav.features, href: NAV_HREFS.features },
      { label: t.nav.useCases, href: NAV_HREFS.useCases },
      { label: t.nav.earlyAccess, href: NAV_HREFS.earlyAccess },
      { label: t.nav.faq, href: NAV_HREFS.faq },
    ],
    [t],
  )

  return (
    <footer className="border-t border-[rgba(40,80,120,0.08)] bg-white/60 px-4 py-12 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 text-center lg:grid-cols-4 lg:text-left">
          <div className="flex flex-col items-center lg:col-span-2 lg:items-start">
            <a
              href="#"
              className="flex items-center justify-center gap-2.5 lg:justify-start"
              data-cursor-hover
            >
              <FlumeeCharacter
                variant="inline"
                glow={false}
                floating={false}
                className="!h-9 !w-9 [&>div]:!h-9 [&>div]:!w-9"
              />
              <span className="font-display text-xl font-extrabold text-ink">
                Flumee
              </span>
            </a>
            <p className="mt-3 max-w-sm text-sm text-ink-secondary">
              {t.footer.tagline}
            </p>
            <Button href={TELEGRAM_URL} className="mt-5 !text-sm">
              <Send className="h-4 w-4" />
              {t.common.startTelegram}
            </Button>
          </div>

          <nav className="flex flex-col items-center gap-2 lg:items-start">
            <p className="text-sm font-bold text-ink">{t.common.navigation}</p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-secondary hover:text-ink"
                data-cursor-hover
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-sm text-ink-muted">
            <p>© {new Date().getFullYear()} Flumee</p>
            <p className="mt-2">{t.common.allRights}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
