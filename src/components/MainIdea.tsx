import { ArrowDown } from 'lucide-react'
import { useTranslation } from '../i18n/LanguageProvider'
import { AnimatedSection } from './AnimatedSection'
import { FlumeeCharacter } from './FlumeeCharacter'
import { SectionHeading } from './SectionHeading'

export function MainIdea() {
  const { t, locale } = useTranslation()

  return (
    <AnimatedSection className="px-4 py-20 md:px-6 md:py-28" id="main-idea">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-10 xl:gap-14">
          <SectionHeading
            className="max-w-4xl lg:max-w-3xl"
            titleClassName="leading-[1.4]"
            title={
              <span className="flex flex-col gap-4 md:gap-5">
                <span className="block">{t.mainIdea.titleLine1}</span>
                <span className="block">{t.mainIdea.titleLine2}</span>
              </span>
            }
            subtitle={t.mainIdea.subtitle}
          />
          <FlumeeCharacter
            variant="companion"
            floating={false}
            className="pointer-events-none hidden shrink-0 opacity-90 lg:block"
          />
        </div>

        <div className="layout-centered mt-14 flex flex-col items-center gap-4 lg:max-w-none lg:flex-row lg:justify-center lg:gap-6">
          <CardStep title={t.mainIdea.stepInput} variant="input" />
          <ArrowDown className="h-6 w-6 shrink-0 text-violet lg:-rotate-90" />
          <CardStep
            rows={[
              [t.mainIdea.stepSum, locale === 'ru' ? '340 ₽' : '$4'],
              [t.mainIdea.stepCategory, locale === 'ru' ? 'Кафе' : 'Coffee'],
              [t.mainIdea.stepDate, t.mainIdea.stepToday],
            ]}
            variant="parsed"
          />
          <ArrowDown className="h-6 w-6 shrink-0 text-violet lg:-rotate-90" />
          <CardStep title={t.mainIdea.stepAdvice} variant="advice" />
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {t.mainIdea.chips.map((chip, i) => (
            <span
              key={chip}
              className="float-chip rounded-full border border-[rgba(40,80,120,0.08)] bg-white/80 px-4 py-2 text-xs font-medium text-ink-secondary shadow-sm md:text-sm"
              style={{ animationDelay: `${i * 0.35}s` }}
              data-cursor-hover
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

function CardStep({
  title,
  rows,
  variant,
}: {
  title?: string
  rows?: [string, string][]
  variant: 'input' | 'parsed' | 'advice'
}) {
  const styles = {
    input: 'bg-telegram/10 border-telegram/20',
    parsed: 'bg-white/90',
    advice: 'bg-[#F0FFF9] border-mint/30',
  }

  return (
    <div
      className={`glass-card card-hover-lift w-full max-w-sm p-5 shadow-card lg:min-w-[200px] lg:max-w-xs lg:flex-1 ${styles[variant]}`}
      data-cursor-hover
    >
      {title && (
        <p
          className={`text-sm font-semibold ${variant === 'input' ? 'text-telegram' : variant === 'advice' ? 'text-ink' : ''}`}
        >
          {title}
        </p>
      )}
      {rows && (
        <dl className="space-y-2">
          {rows.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 text-sm">
              <dt className="text-ink-muted">{k}</dt>
              <dd className="font-bold text-ink">{v}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  )
}
