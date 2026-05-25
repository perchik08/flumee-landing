import { TELEGRAM_URL } from '../constants'
import { useTranslation } from '../i18n/LanguageProvider'
import { AnimatedSection } from './AnimatedSection'
import { Button } from './Button'
import { ChatMockup } from './ChatMockup'
import { FlumeeCharacter } from './FlumeeCharacter'
import { SectionHeading } from './SectionHeading'

export function Limits() {
  const { t } = useTranslation()

  const messages = [
    { role: 'user' as const, text: t.limits.chatUser, time: '14:08' },
    { role: 'bot' as const, text: t.limits.chatBot, time: '14:08' },
  ]

  return (
    <AnimatedSection className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:grid lg:grid-cols-2 lg:items-center">
        <div className="layout-centered relative flex flex-col items-center lg:items-start">
          <FlumeeCharacter
            variant="companion"
            className="pointer-events-none absolute -right-4 -top-8 z-10 hidden lg:block lg:-right-12"
          />
          <SectionHeading
            align="left"
            title={t.limits.title}
            subtitle={t.limits.subtitle}
          />
          <Button href={TELEGRAM_URL} className="mt-8 w-full sm:w-auto">
            {t.limits.cta}
          </Button>
        </div>
        <div className="layout-centered relative w-full">
          <ChatMockup messages={messages} className="relative z-0 w-full" />
        </div>
      </div>
    </AnimatedSection>
  )
}
