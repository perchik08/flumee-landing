import { TelegramBubble } from './telegram/TelegramBubble'
import { TelegramChatFrame } from './telegram/TelegramChatFrame'

export interface ChatMessage {
  role: 'user' | 'bot'
  text: string
  highlight?: string
  time?: string
}

interface ChatMockupProps {
  messages: ChatMessage[]
  className?: string
  float?: boolean
}

function BotMessageContent({ text, highlight }: { text: string; highlight?: string }) {
  if (highlight) {
    const parts = text.split(highlight)
    return (
      <span>
        {parts[0]}
        <span className="font-semibold text-[#2aabee]">{highlight}</span>
        {parts[1]}
      </span>
    )
  }
  return <span>{text}</span>
}

export function ChatMockup({
  messages,
  className = '',
  float = false,
}: ChatMockupProps) {
  return (
    <TelegramChatFrame className={className} float={float}>
      {messages.map((msg, i) => (
        <TelegramBubble
          key={i}
          role={msg.role}
          time={msg.time ?? (msg.role === 'user' ? '17:31' : '17:32')}
        >
          <BotMessageContent text={msg.text} highlight={msg.highlight} />
        </TelegramBubble>
      ))}
    </TelegramChatFrame>
  )
}
