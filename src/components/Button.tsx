import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
}

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-[transform,filter,background-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] md:text-base'

  const variants = {
    primary:
      'bg-flumee-character-gradient text-white shadow-btn hover:brightness-105',
    secondary:
      'border border-[rgba(40,80,120,0.12)] bg-white/80 text-ink shadow-[0_8px_24px_rgba(23,32,51,0.06)] hover:bg-white',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        data-cursor-hover
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick} data-cursor-hover>
      {children}
    </button>
  )
}
