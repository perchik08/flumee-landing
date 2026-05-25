import { motion, AnimatePresence } from 'framer-motion'
import { Send } from 'lucide-react'
import { useEffect, useState } from 'react'
import { TELEGRAM_URL } from '../constants'
import { useTranslation } from '../i18n/LanguageProvider'
import { Button } from './Button'
import { TelegramBubble, TelegramTypingBubble } from './telegram/TelegramBubble'
import { TelegramChatFrame } from './telegram/TelegramChatFrame'

type HeroPhase =
  | 'idle'
  | 'user'
  | 'typing'
  | 'bot1'
  | 'bot2'
  | 'highlight'
  | 'advice'

export function Hero() {
  const { t, locale } = useTranslation()
  const [phase, setPhase] = useState<HeroPhase>('idle')

  useEffect(() => {
    const sequence: { phase: HeroPhase; delay: number }[] = [
      { phase: 'user', delay: 600 },
      { phase: 'typing', delay: 1800 },
      { phase: 'bot1', delay: 2800 },
      { phase: 'bot2', delay: 3600 },
      { phase: 'highlight', delay: 4400 },
      { phase: 'advice', delay: 5200 },
      { phase: 'idle', delay: 9000 },
    ]

    let timeouts: ReturnType<typeof setTimeout>[] = []
    const run = () => {
      timeouts.forEach(clearTimeout)
      timeouts = []
      let time = 0
      sequence.forEach(({ phase: p, delay }) => {
        time += delay
        timeouts.push(
          setTimeout(() => {
            setPhase(p)
            if (p === 'idle') run()
          }, time),
        )
      })
    }
    run()
    return () => timeouts.forEach(clearTimeout)
  }, [])

  const showUser = ['user', 'typing', 'bot1', 'bot2', 'highlight', 'advice'].includes(
    phase,
  )
  const showTyping = phase === 'typing'
  const showBot1 = ['bot1', 'bot2', 'highlight', 'advice'].includes(phase)
  const showBot2 = ['bot2', 'highlight', 'advice'].includes(phase)
  const showAdvice = phase === 'advice'

  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-10 md:px-6 md:pb-14 md:pt-14">
      <div className="mx-auto grid max-w-6xl justify-items-center gap-12 lg:grid-cols-2 lg:items-center lg:justify-items-stretch lg:gap-10">
        <div className="relative z-10 mx-auto max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex max-w-full rounded-full border border-cyan/20 bg-white/80 px-4 py-1.5 text-center text-xs font-semibold leading-snug text-telegram shadow-sm sm:text-sm"
          >
            {t.hero.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.1] text-ink md:text-5xl lg:text-[3.25rem]"
          >
            {t.hero.titlePrefix}{' '}
            <span className="text-gradient-flumee">{t.hero.titleAmount}</span>{' '}
            {t.hero.titleSuffix}
            <br />
            {t.hero.titleLine2}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-ink-secondary md:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap lg:items-start lg:justify-start"
          >
            <Button href={TELEGRAM_URL}>
              <Send className="h-4 w-4" />
              {t.common.startTelegram}
            </Button>
            <Button href={TELEGRAM_URL} variant="secondary">
              {t.common.seeHowItWorks}
            </Button>
          </motion.div>

          <p className="mt-4 text-sm text-ink-muted">{t.hero.micro}</p>
        </div>

        <div className="relative mx-auto w-full max-w-sm space-y-4 lg:max-w-md lg:justify-self-end">
          <TelegramChatFrame float className="w-full">
            <AnimatePresence>
              {showUser && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <TelegramBubble role="user" time="17:31">
                    {t.hero.chatUser}
                  </TelegramBubble>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <TelegramTypingBubble />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showBot1 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <TelegramBubble role="bot" time="17:32">
                    {t.hero.chatBot1}{' '}
                    <span
                      className={
                        phase === 'highlight' || phase === 'advice'
                          ? 'font-semibold text-[#2aabee]'
                          : ''
                      }
                    >
                      {locale === 'ru' ? '340 ₽' : '$4'}
                    </span>
                    {t.hero.chatBot1Category}
                  </TelegramBubble>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showBot2 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <TelegramBubble role="bot" time="17:32">
                    {t.hero.chatBot2}{' '}
                    <span className="font-semibold">
                      {locale === 'ru' ? '2 180 ₽' : '$26'}
                    </span>
                    .
                  </TelegramBubble>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showAdvice && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <TelegramBubble role="bot" time="17:33">
                    {t.hero.chatAdvice}
                  </TelegramBubble>
                </motion.div>
              )}
            </AnimatePresence>
          </TelegramChatFrame>

          <div
            className="glass-card float-panel-alt p-4 shadow-card"
            data-cursor-hover
          >
            <p className="text-sm font-bold text-ink">{t.hero.weekExpenses}</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-secondary">
              <li>{t.hero.weekCoffee}</li>
              <li>{t.hero.weekDelivery}</li>
              <li>{t.hero.weekTaxi}</li>
            </ul>
            <p className="mt-4 text-sm text-ink-secondary">
              {t.hero.monthForecast}{' '}
              <span className="text-lg font-extrabold text-gradient-insight">
                {locale === 'ru' ? '41 360 ₽' : '$410'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
