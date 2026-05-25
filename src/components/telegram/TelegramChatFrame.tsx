import { Mic, MoreVertical, Paperclip, Phone, Search, Smile } from 'lucide-react'
import type { ReactNode } from 'react'
import { useTranslation } from '../../i18n/LanguageProvider'
import { ChatFlumeeAvatar } from '../ChatFlumeeAvatar'

interface TelegramChatFrameProps {
  children: ReactNode
  className?: string
  float?: boolean
  showInput?: boolean
}

export function TelegramChatFrame({
  children,
  className = '',
  float = false,
  showInput = true,
}: TelegramChatFrameProps) {
  const { t } = useTranslation()

  return (
    <div
      className={`telegram-chat-frame overflow-hidden rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] ${float ? 'float-panel' : ''} ${className}`}
      data-cursor-hover
    >
      <header className="flex items-center gap-3 border-b border-[#d9e2e9] bg-white px-3 py-2.5">
        <ChatFlumeeAvatar size="md" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-[15px] font-semibold text-[#0f1419]">
            Flumee
          </p>
          <p className="text-[13px] font-medium text-[#2aabee]">
            {t.common.online}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3 text-[#8b98a5]">
          <Search className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
          <Phone className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
          <MoreVertical className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
        </div>
      </header>

      <div className="telegram-chat-wallpaper min-h-[200px] space-y-1.5 px-2 py-3">
        {children}
      </div>

      {showInput && (
        <footer className="flex items-center gap-2 border-t border-[#d9e2e9] bg-white px-2 py-2">
          <Paperclip
            className="h-6 w-6 shrink-0 text-[#8b98a5]"
            strokeWidth={1.75}
            aria-hidden
          />
          <div className="min-h-[36px] flex-1 rounded-full bg-[#f0f2f5] px-4 py-2">
            <span className="text-[15px] text-[#8b98a5]">
              {t.common.messagePlaceholder}
            </span>
          </div>
          <Smile
            className="h-6 w-6 shrink-0 text-[#8b98a5]"
            strokeWidth={1.75}
            aria-hidden
          />
          <Mic
            className="h-6 w-6 shrink-0 text-[#8b98a5]"
            strokeWidth={1.75}
            aria-hidden
          />
        </footer>
      )}
    </div>
  )
}
