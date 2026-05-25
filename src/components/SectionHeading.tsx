import type { ReactNode } from 'react'

interface SectionHeadingProps {
  label?: string
  title: ReactNode
  subtitle?: string
  className?: string
  titleClassName?: string
  align?: 'center' | 'left'
}

export function SectionHeading({
  label,
  title,
  subtitle,
  className = '',
  titleClassName = '',
  align = 'center',
}: SectionHeadingProps) {
  const alignClass =
    align === 'center'
      ? 'mx-auto text-center'
      : 'mx-auto max-w-md text-center lg:mx-0 lg:max-w-3xl lg:text-left'

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {label && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-telegram">
          {label}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-extrabold leading-snug text-ink lg:text-4xl lg:leading-snug xl:text-[2.75rem] ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-ink-secondary lg:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
