import { useTranslation } from '../i18n/LanguageProvider'
import { AnimatedSection } from './AnimatedSection'
import { Card } from './Card'
import { SectionHeading } from './SectionHeading'

export function HowItWorks() {
  const { t } = useTranslation()

  return (
    <AnimatedSection
      id="how-it-works"
      className="px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={t.howItWorks.title} />

        <div className="layout-centered mt-14 grid grid-cols-1 gap-6 lg:max-w-none lg:w-full lg:grid-cols-3">
          {t.howItWorks.steps.map((s, i) => (
            <Card key={s.title} className="relative w-full p-6 lg:p-8">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-flumee-character-gradient text-sm font-extrabold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-xl font-extrabold text-ink">
                {s.title}
              </h3>
              {s.example && (
                <>
                  <p className="mt-3 text-sm text-ink-muted">{s.body}</p>
                  <p className="mt-2 rounded-2xl bg-telegram/10 px-4 py-3 text-sm font-medium text-telegram">
                    {s.example}
                  </p>
                </>
              )}
              {s.rows && (
                <dl className="mt-4 space-y-2">
                  {s.rows.map(([k, v]) => (
                    <div
                      key={k}
                      className="flex justify-between border-b border-[rgba(40,80,120,0.06)] pb-2 text-sm last:border-0"
                    >
                      <dt className="text-ink-muted">{k}</dt>
                      <dd className="font-semibold text-ink">{v}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {s.text && (
                <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
                  {s.text}
                </p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
