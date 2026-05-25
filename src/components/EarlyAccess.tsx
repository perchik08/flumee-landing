import { Check, Sparkles } from 'lucide-react'
import { TELEGRAM_URL } from '../constants'
import { useTranslation } from '../i18n/LanguageProvider'
import { AnimatedSection } from './AnimatedSection'
import { Button } from './Button'
import { Card } from './Card'
import { SectionHeading } from './SectionHeading'

export function EarlyAccess() {
  const { t } = useTranslation()

  return (
    <AnimatedSection id="early-access" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title={t.earlyAccess.title}
          subtitle={t.earlyAccess.subtitle}
        />

        <div className="layout-centered mt-14 grid grid-cols-1 gap-8 lg:max-w-none lg:w-full lg:grid-cols-2">
          <Card className="relative w-full overflow-hidden border-2 border-cyan/25 p-6 ring-4 ring-cyan/10 lg:p-8">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-flumee-character-gradient opacity-20 blur-2xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-1 rounded-full bg-flumee-character-gradient px-3 py-1 text-xs font-bold text-white">
                <Sparkles className="h-3 w-3" />
                {t.earlyAccess.recommended}
              </span>
              <h3 className="mt-4 font-display text-2xl font-extrabold text-ink">
                {t.earlyAccess.earlyTitle}
              </h3>
              <p className="mt-1 text-3xl font-extrabold text-gradient-flumee">
                {t.earlyAccess.earlyPrice}
              </p>
              <p className="mt-6 text-sm font-semibold text-ink">
                {t.earlyAccess.availableNow}
              </p>
              <ul className="mt-3 space-y-2">
                {t.earlyAccess.earlyFeatures.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-ink-secondary"
                  >
                    <Check className="h-4 w-4 shrink-0 text-mint" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button href={TELEGRAM_URL} className="mt-8 w-full sm:w-auto">
                {t.earlyAccess.earlyCta}
              </Button>
            </div>
          </Card>

          <Card className="w-full p-6 opacity-95 lg:p-8">
            <h3 className="font-display text-2xl font-extrabold text-ink-muted">
              {t.earlyAccess.premiumTitle}
            </h3>
            <p className="mt-1 text-xl font-bold text-ink-secondary">
              {t.earlyAccess.premiumPrice}
            </p>
            <p className="mt-6 text-sm font-semibold text-ink-secondary">
              {t.earlyAccess.comingSoon}
            </p>
            <ul className="mt-3 space-y-2">
              {t.earlyAccess.premiumFeatures.map((item) => (
                <li
                  key={item}
                  className="text-sm text-ink-muted before:mr-2 before:content-['·']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  )
}
