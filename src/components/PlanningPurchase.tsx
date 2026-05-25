import { TELEGRAM_URL } from '../constants'
import { useTranslation } from '../i18n/LanguageProvider'
import { AnimatedSection } from './AnimatedSection'
import { Button } from './Button'
import { ChatMockup } from './ChatMockup'
import { SectionHeading } from './SectionHeading'

export function PlanningPurchase() {
  const { t } = useTranslation()

  const messages = [
    { role: 'user' as const, text: t.planning.chatUser, time: '19:42' },
    { role: 'bot' as const, text: t.planning.chatBot, time: '19:42' },
  ]

  return (
    <AnimatedSection className="bg-page-mint/30 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:grid lg:grid-cols-2 lg:items-center">
        <div className="layout-centered relative order-2 w-full lg:order-1">
          <ChatMockup messages={messages} className="relative z-0 w-full" />
        </div>
        <div className="layout-centered order-1 flex flex-col items-center lg:order-2 lg:items-start">
          <SectionHeading
            align="left"
            title={
              <>
                {t.planning.titleLine1}
                <br />
                {t.planning.titleLine2}
              </>
            }
            subtitle={t.planning.subtitle}
          />
          <Button href={TELEGRAM_URL} className="mt-8 w-full sm:w-auto">
            {t.planning.cta}
          </Button>
        </div>
      </div>
    </AnimatedSection>
  )
}
