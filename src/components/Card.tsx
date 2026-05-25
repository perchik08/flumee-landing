import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`glass-card shadow-card ${hover ? 'card-hover-lift' : ''} ${className}`}
      data-cursor-hover
    >
      {children}
    </div>
  )
}
