import { useTranslation } from '../i18n/LanguageProvider'
import { FlumeeCharacter } from './FlumeeCharacter'

/** Позиции 7 чипов вокруг персонажа — без пересечений на ru/en */
const chipPositions = [
  { className: 'left-[4%] top-[6%] z-[11] max-w-[44%]', delay: '0s' },
  { className: 'right-[4%] top-[8%] z-[12] max-w-[44%]', delay: '0.4s' },
  { className: 'left-[0%] top-[36%] z-[10] max-w-[46%]', delay: '0.8s' },
  { className: 'right-[0%] top-[38%] z-[11] max-w-[48%]', delay: '1.2s' },
  { className: 'left-[2%] bottom-[30%] z-[10] max-w-[50%]', delay: '1.6s' },
  { className: 'right-[2%] bottom-[28%] z-[11] max-w-[52%]', delay: '2s' },
  {
    className:
      'bottom-[4%] left-1/2 z-[12] max-w-[92%] -translate-x-1/2 text-center',
    delay: '2.4s',
  },
]

export function HeroFlumee() {
  const { t } = useTranslation()

  return (
    <section
      className="relative overflow-hidden border-t border-[rgba(40,80,120,0.06)] bg-gradient-to-b from-[#EEF6FF]/60 via-white/30 to-transparent px-4 pb-14 pt-10 md:px-6 md:pb-20 md:pt-12"
      aria-label="Flumee character"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-center font-display text-lg font-extrabold text-ink md:text-xl">
          {t.heroFlumee.title}
        </p>
        <p className="mx-auto mt-2 max-w-md text-center text-sm text-ink-secondary md:text-base">
          {t.heroFlumee.subtitle}
        </p>

        <div className="relative mx-auto mt-10 h-[340px] w-full max-w-[520px] sm:h-[400px] sm:max-w-[580px] md:mt-12 md:h-[440px] md:max-w-[620px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <FlumeeCharacter variant="hero" priority />
          </div>

          {t.marquee.map((text, i) => (
            <span
              key={text}
              className={`float-chip absolute inline-flex rounded-full border border-white/80 bg-white/95 px-3 py-1.5 text-xs font-semibold leading-snug text-ink shadow-md sm:text-sm ${chipPositions[i]?.className ?? ''}`}
              style={{ animationDelay: chipPositions[i]?.delay ?? '0s' }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
