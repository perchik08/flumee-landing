import { Send } from 'lucide-react'
import { TELEGRAM_URL } from '../constants'
import { useTranslation } from '../i18n/LanguageProvider'
import { AnimatedSection } from './AnimatedSection'
import { Button } from './Button'
import { FlumeeCharacter } from './FlumeeCharacter'

export function FinalCTA() {
  const { t } = useTranslation()

  return (
    <AnimatedSection className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="glass-card relative overflow-hidden p-8 shadow-card md:p-12 lg:p-16">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-cyan/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-violet/20 blur-3xl" />

          <div className="relative flex flex-col items-center gap-10 text-center lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <h2 className="font-display text-3xl font-extrabold leading-tight text-ink lg:text-4xl">
                {t.finalCta.titleLine1}
                <br />
                {t.finalCta.titleLine2}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-secondary lg:text-lg">
                {t.finalCta.subtitle}
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
                <Button href={TELEGRAM_URL}>
                  <Send className="h-4 w-4" />
                  {t.common.startTelegram}
                </Button>
                <Button href={TELEGRAM_URL} variant="secondary">
                  {t.common.tryExample}
                </Button>
              </div>
              <p className="mt-4 text-sm text-ink-muted">{t.finalCta.micro}</p>
            </div>
            <FlumeeCharacter variant="cta" className="mx-auto lg:mx-0" />
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
