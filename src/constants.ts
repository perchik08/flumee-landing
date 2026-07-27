export const TELEGRAM_URL = 'https://t.me/flumeebot'

export const FLUMEE_CHARACTER_SRC = '/images/flumee-character.png'

/** Open Graph / Twitter preview image (place file at public/images/seo.jpeg) */
export const SEO_IMAGE_PATH = '/images/seo.jpeg'

export const SITE_NAME = 'Flumee'

export const NAV_HREFS = {
  howItWorks: '#how-it-works',
  features: '#features',
  useCases: '#use-cases',
  earlyAccess: '#early-access',
  faq: '#faq',
} as const

export const LEGAL_LINKS = [
  { label: 'Политика персональных данных', href: '/privacy' },
  {
    label: 'Согласие на обработку персональных данных',
    href: '/personal-data-consent',
  },
  { label: 'Пользовательское соглашение', href: '/terms' },
  { label: 'Публичная оферта', href: '/offer' },
  { label: 'Оплата и возвраты', href: '/payment-and-refund' },
  { label: 'Контакты', href: '/contacts' },
] as const

export const VAR1_PRICES = {
  free: '0 ₽',
  plus: '390 ₽ в месяц',
  pro: '990 ₽ в месяц',
} as const
