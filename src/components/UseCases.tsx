import { TELEGRAM_URL } from '../constants'
import { useTranslation } from '../i18n/LanguageProvider'
import { AnimatedSection } from './AnimatedSection'
import { Button } from './Button'
import { Card } from './Card'
import { SectionHeading } from './SectionHeading'

export function UseCases() {
  const { t } = useTranslation()

  return (
    <AnimatedSection id="use-cases" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={t.useCases.title} />

        <div className="layout-centered mt-14 grid grid-cols-1 gap-8 lg:max-w-none lg:w-full lg:grid-cols-3">
          {t.useCases.items.map((uc, i) => (
            <Card key={uc.title} className="flex w-full flex-col p-6 lg:p-8">
              <span className="text-sm font-bold text-violet">
                {t.common.scenario} {i + 1}
              </span>
              <h3 className="mt-2 font-display text-xl font-extrabold text-ink md:text-2xl">
                {uc.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
                {uc.audience}
              </p>
              <p className="mt-4 text-sm font-semibold text-ink">
                {t.common.whatFlumeeDoes}
              </p>
              <ul className="mt-2 flex-1 space-y-2">
                {uc.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-2 text-sm text-ink-secondary"
                  >
                    <span className="text-mint">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
              <Button href={TELEGRAM_URL} className="mt-6 w-full">
                {uc.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
