import { Menu, Send, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useMemo, useState } from 'react'
import { NAV_HREFS, TELEGRAM_URL } from '../constants'
import { useTranslation } from '../i18n/LanguageProvider'
import { Button } from './Button'
import { FlumeeCharacter } from './FlumeeCharacter'
import { LanguageToggle } from './LanguageToggle'

export function Header() {
  const [open, setOpen] = useState(false)
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
    <header className="sticky top-0 z-50 border-b border-[rgba(40,80,120,0.06)] bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-4">
        <a href="#" className="flex items-center gap-2.5" data-cursor-hover>
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

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-secondary transition-colors hover:text-ink"
              data-cursor-hover
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 lg:gap-3">
          <LanguageToggle />
          <div className="hidden lg:block">
            <Button href={TELEGRAM_URL} className="!px-5 !py-2.5 !text-sm">
              <Send className="h-4 w-4" />
              {t.common.startTelegram}
            </Button>
          </div>
          <button
            type="button"
            className="rounded-xl border border-[rgba(40,80,120,0.1)] bg-white/80 p-2 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? t.common.closeMenu : t.common.openMenu}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[rgba(40,80,120,0.06)] bg-white/95 lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-ink-secondary hover:bg-page-alt hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button href={TELEGRAM_URL} className="mt-3 w-full">
                <Send className="h-4 w-4" />
                {t.common.startTelegram}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
