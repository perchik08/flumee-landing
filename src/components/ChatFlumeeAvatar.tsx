import { FLUMEE_CHARACTER_SRC } from '../constants'

interface ChatFlumeeAvatarProps {
  size?: 'sm' | 'md'
}

const sizes = {
  sm: 'h-7 w-7',
  md: 'h-9 w-9',
}

/** Аватар Flumee в шапке Telegram-чата */
export function ChatFlumeeAvatar({ size = 'md' }: ChatFlumeeAvatarProps) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-cyan/30 to-telegram/25 ring-2 ring-white/80 ${sizes[size]}`}
    >
      <img
        src={FLUMEE_CHARACTER_SRC}
        alt=""
        role="presentation"
        className="h-[115%] w-[115%] object-contain mix-blend-screen"
        width={36}
        height={36}
      />
    </span>
  )
}
