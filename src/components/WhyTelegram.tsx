import { useTranslation } from '../i18n/LanguageProvider'
import { AnimatedSection } from './AnimatedSection'
import { Card } from './Card'
import { SectionHeading } from './SectionHeading'

export function WhyTelegram() {
  const { t } = useTranslation()

  return (
    <AnimatedSection className="bg-page-violet/40 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title={t.whyTelegram.title}
          subtitle={t.whyTelegram.subtitle}
        />

        <div className="mt-14 hidden overflow-hidden rounded-card border border-[rgba(40,80,120,0.08)] bg-white/80 shadow-card lg:block">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[rgba(40,80,120,0.08)] bg-page-alt/50">
                <th className="px-6 py-4 font-semibold text-ink-muted">
                  {t.whyTelegram.colApp}
                </th>
                <th className="px-6 py-4 font-display font-extrabold text-ink">
                  {t.whyTelegram.colFlumee}
                </th>
              </tr>
            </thead>
            <tbody>
              {t.whyTelegram.rows.map((row) => (
                <tr
                  key={row.app}
                  className="border-b border-[rgba(40,80,120,0.06)] last:border-0"
                >
                  <td className="px-6 py-4 text-ink-secondary">{row.app}</td>
                  <td className="px-6 py-4 font-medium text-ink">
                    {row.flumee}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="layout-centered mt-8 space-y-4 lg:hidden">
          {t.whyTelegram.rows.map((row) => (
            <Card key={row.app} className="w-full p-4" hover={false}>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-xs font-semibold uppercase text-ink-muted">
                    {t.whyTelegram.colApp}
                  </p>
                  <p className="mt-1 text-ink-secondary">{row.app}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-violet">
                    {t.whyTelegram.colFlumee}
                  </p>
                  <p className="mt-1 font-medium text-ink">{row.flumee}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
