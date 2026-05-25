import { useState } from 'react'
import { useTranslation } from '../i18n/LanguageProvider'
import { AnimatedSection } from './AnimatedSection'
import { SectionHeading } from './SectionHeading'

function QuestionCard({
  question,
  answer,
  isActive,
  onActivate,
  onDeactivate,
  flumeeLabel,
  hoverHint,
}: {
  question: string
  answer: string
  isActive: boolean
  onActivate: () => void
  onDeactivate: () => void
  flumeeLabel: string
  hoverHint: string
}) {
  return (
    <button
      type="button"
      className={`glass-card group relative w-full max-w-md p-5 text-left shadow-card transition-[border-color,box-shadow,background-color] duration-500 ease-out lg:max-w-none lg:p-6 ${
        isActive
          ? 'border-cyan/25 bg-white/95 shadow-card-hover'
          : 'hover:border-cyan/15 hover:shadow-card-hover'
      }`}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={onDeactivate}
      data-cursor-hover
    >
      <p className="font-display text-base font-bold text-ink md:text-lg">
        {question}
      </p>
      <p
        className={`mt-3 block text-xs text-ink-muted transition-opacity duration-500 ease-out ${
          isActive ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        {hoverHint}
      </p>
      <div
        className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ gridTemplateRows: isActive ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p
            className={`pt-3 text-sm leading-relaxed text-ink-secondary transition-opacity duration-500 ease-out ${
              isActive ? 'opacity-100 delay-75' : 'opacity-0'
            }`}
          >
            <span className="font-semibold text-violet">{flumeeLabel}</span>
            {answer}
          </p>
        </div>
      </div>
    </button>
  )
}

export function Questions() {
  const [active, setActive] = useState<number | null>(null)
  const { t } = useTranslation()

  return (
    <AnimatedSection className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={t.questions.title} />

        <div className="layout-centered mt-14 grid grid-cols-1 gap-4 lg:max-w-none lg:w-full lg:grid-cols-3">
          {t.questions.items.map((q, i) => (
            <QuestionCard
              key={q.question}
              question={q.question}
              answer={q.answer}
              isActive={active === i}
              onActivate={() => setActive(i)}
              onDeactivate={() => setActive(null)}
              flumeeLabel="Flumee: "
              hoverHint={t.common.hoverForAnswer}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
