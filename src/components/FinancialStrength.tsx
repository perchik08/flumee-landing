import { useTranslation } from '../i18n/LanguageProvider'
import { AnimatedSection } from './AnimatedSection'
import { Card } from './Card'
import { SectionHeading } from './SectionHeading'

export function FinancialStrength() {
  const { t } = useTranslation()
  const progress = 68

  const rows = [
    { label: t.financialStrength.income, value: t.financialStrength.incomeValue },
    {
      label: t.financialStrength.expenses,
      value: t.financialStrength.expensesValue,
    },
    {
      label: t.financialStrength.mandatory,
      value: t.financialStrength.mandatoryValue,
    },
    {
      label: t.financialStrength.freeBalance,
      value: t.financialStrength.freeBalanceValue,
      highlight: true,
    },
  ]

  return (
    <AnimatedSection className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={t.financialStrength.title} />

        <div className="layout-centered mt-14 grid grid-cols-1 gap-8 lg:max-w-none lg:w-full lg:grid-cols-2 lg:items-center">
          <Card className="w-full p-6 lg:p-8" hover={false}>
            <dl className="space-y-4">
              {rows.map((r) => (
                <div
                  key={r.label}
                  className="flex items-center justify-between border-b border-[rgba(40,80,120,0.06)] pb-3 last:border-0"
                >
                  <dt className="text-sm text-ink-secondary">{r.label}</dt>
                  <dd
                    className={`font-bold ${r.highlight ? 'text-lg text-gradient-flumee' : 'text-ink'}`}
                  >
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-semibold text-ink">
                  {t.financialStrength.strengthLabel}
                </span>
                <span className="text-ink-muted">{progress}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-page-alt">
                <div
                  className="h-full rounded-full bg-flumee-character-gradient transition-all duration-700"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <p className="mt-6 rounded-2xl bg-[#F5F1FF] px-4 py-3 text-sm text-ink-secondary">
              {t.financialStrength.purchaseHint}
            </p>
          </Card>

          <p className="text-center text-base leading-relaxed text-ink-secondary lg:text-left lg:text-lg">
            {t.financialStrength.body}
          </p>
        </div>
      </div>
    </AnimatedSection>
  )
}
