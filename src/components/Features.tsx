import {
  BarChart3,
  Lightbulb,
  PiggyBank,
  Shield,
  Sparkles,
  Wallet,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useTranslation } from '../i18n/LanguageProvider'
import type { FeatureItem } from '../i18n/types'
import { AnimatedSection } from './AnimatedSection'
import { Card } from './Card'
import { SectionHeading } from './SectionHeading'

const iconMap: Record<FeatureItem['key'], LucideIcon> = {
  expenses: Sparkles,
  totals: BarChart3,
  tips: Lightbulb,
  income: Wallet,
  limits: Shield,
  strength: PiggyBank,
}

export function Features() {
  const { t } = useTranslation()

  return (
    <AnimatedSection id="features" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={t.features.title} />

        <div className="layout-centered mt-14 grid grid-cols-1 gap-6 lg:max-w-none lg:w-full lg:grid-cols-3">
          {t.features.items.map((f) => {
            const Icon = iconMap[f.key]
            return (
              <Card key={f.key} className="w-full p-6 lg:p-7">
                <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-cyan/15 to-violet/15 p-3">
                  <Icon className="h-6 w-6 text-violet" />
                </div>
                <h3 className="font-display text-lg font-extrabold text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                  {f.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
