import { FileSpreadsheet, MessageCircle, Smartphone } from 'lucide-react'
import { useTranslation } from '../i18n/LanguageProvider'
import { AnimatedSection } from './AnimatedSection'
import { Card } from './Card'
import { SectionHeading } from './SectionHeading'

const icons = [FileSpreadsheet, Smartphone, MessageCircle]

export function Problem() {
  const { t } = useTranslation()

  return (
    <AnimatedSection className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title={
            <>
              {t.problem.titleLine1}
              <br />
              {t.problem.titleLine2}
              <br />
              {t.problem.titleLine3}
            </>
          }
          subtitle={t.problem.subtitle}
        />

        <div className="layout-centered mt-14 grid grid-cols-1 gap-6 lg:max-w-none lg:w-full lg:grid-cols-3">
          {t.problem.cards.map((card, i) => {
            const Icon = icons[i]
            const highlight = i === 2
            return (
              <Card
                key={card.title}
                className={`w-full p-6 lg:p-8 ${highlight ? 'ring-2 ring-cyan/20' : ''}`}
              >
                <Icon
                  className={`mb-4 h-8 w-8 ${highlight ? 'text-telegram' : 'text-ink-muted'}`}
                />
                <h3 className="font-display text-xl font-extrabold text-ink">
                  {card.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {card.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-sm text-ink-secondary"
                    >
                      <span className="h-1 w-1 rounded-full bg-cyan" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
