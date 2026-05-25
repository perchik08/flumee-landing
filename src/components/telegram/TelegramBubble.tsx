import type { ReactNode } from 'react'
import { CheckCheck } from 'lucide-react'

interface TelegramBubbleProps {
  role: 'user' | 'bot'
  children: ReactNode
  time?: string
  className?: string
}

export function TelegramBubble({
  role,
  children,
  time = '17:31',
  className = '',
}: TelegramBubbleProps) {
  const isUser = role === 'user'

  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} ${className}`}
    >
      <div
        className={`relative max-w-[88%] px-2.5 pb-1.5 pt-2 text-[15px] leading-[1.35] shadow-[0_1px_0.5px_rgba(0,0,0,0.06)] ${
          isUser
            ? 'telegram-bubble-out text-[#0f1419]'
            : 'telegram-bubble-in text-[#0f1419]'
        }`}
      >
        <div className="pr-1">{children}</div>
        <div
          className={`mt-0.5 flex items-center justify-end gap-0.5 ${
            isUser ? 'text-[#5bb563]' : 'text-[#8b98a5]'
          }`}
        >
          <span className="text-[11px] leading-none">{time}</span>
          {isUser && (
            <CheckCheck className="h-3.5 w-3.5 shrink-0 stroke-[2.5]" aria-hidden />
          )}
        </div>
      </div>
    </div>
  )
}

export function TelegramTypingBubble() {
  return (
    <div className="flex justify-start">
      <div className="telegram-bubble-in flex gap-1 px-3 py-3 shadow-[0_1px_0.5px_rgba(0,0,0,0.06)]">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-2 w-2 animate-pulse rounded-full bg-[#8b98a5]"
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>
    </div>
  )
}
