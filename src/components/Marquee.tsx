import { useTranslation } from '../i18n/LanguageProvider'

export function Marquee() {
  const { t } = useTranslation()
  const track = [...t.marquee, ...t.marquee]

  return (
    <section className="overflow-hidden border-y border-[rgba(40,80,120,0.06)] bg-white/50 py-5">
      <div className="flex w-max animate-marquee">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-6 inline-flex shrink-0 items-center gap-3 whitespace-nowrap text-sm font-semibold text-ink-secondary md:text-base"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-flumee-character-gradient" />
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
