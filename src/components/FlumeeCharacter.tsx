import { useState } from 'react'
import { FLUMEE_CHARACTER_SRC } from '../constants'

export type FlumeeCharacterVariant = 'hero' | 'companion' | 'cta' | 'inline'

interface FlumeeCharacterProps {
  className?: string
  variant?: FlumeeCharacterVariant
  priority?: boolean
  glow?: boolean
  floating?: boolean
}

const variantStyles: Record<
  FlumeeCharacterVariant,
  { wrapper: string; image: string }
> = {
  hero: {
    wrapper: 'h-44 w-44 sm:h-52 sm:w-52 md:h-60 md:w-60 lg:h-72 lg:w-72',
    image: 'max-h-full max-w-full',
  },
  companion: {
    wrapper: 'h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44',
    image: 'max-h-full max-w-full',
  },
  cta: {
    wrapper: 'h-36 w-36 md:h-48 md:w-48',
    image: 'max-h-full max-w-full',
  },
  inline: {
    wrapper: 'h-20 w-20 md:h-24 md:w-24',
    image: 'max-h-full max-w-full',
  },
}

export function FlumeeCharacter({
  className = '',
  variant = 'hero',
  priority = false,
  glow = true,
  floating = true,
}: FlumeeCharacterProps) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const styles = variantStyles[variant]

  return (
    <figure
      className={`relative inline-flex shrink-0 select-none transition-transform duration-300 hover:scale-105 ${floating ? 'float-character' : ''} ${className}`}
      data-cursor-hover
      aria-label="Flumee — ваш персональный ИИ-помощник для денег"
    >
      {glow && (
        <div
          className="pointer-events-none absolute inset-[-12%] rounded-full bg-gradient-to-b from-cyan/45 via-telegram/30 to-[#2874D9]/25 blur-2xl"
          aria-hidden
        />
      )}

      <div
        className={`relative flex items-center justify-center ${styles.wrapper}`}
      >
        {!error && (
          <img
            src={FLUMEE_CHARACTER_SRC}
            alt=""
            role="presentation"
            width={320}
            height={320}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
            className={`${styles.image} object-contain transition-opacity duration-500 mix-blend-screen drop-shadow-[0_12px_40px_rgba(53,216,255,0.45)] ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
          />
        )}

        {(!loaded || error) && (
          <div
            className={`absolute inset-0 flex items-center justify-center rounded-full bg-flumee-character-gradient font-display text-lg font-extrabold text-white shadow-glow md:text-xl ${
              loaded && !error ? 'pointer-events-none opacity-0' : ''
            }`}
            aria-hidden={loaded && !error}
          >
            Flumee
          </div>
        )}
      </div>

      <figcaption className="sr-only">
        Flumee — персональный ИИ-помощник для денег в Telegram
      </figcaption>
    </figure>
  )
}
