export type Locale = 'ru' | 'en'

export interface NavLink {
  label: string
  href: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface FeatureItem {
  key: 'expenses' | 'totals' | 'tips' | 'income' | 'limits' | 'strength'
  title: string
  description: string
}

export interface UseCaseItem {
  title: string
  audience: string
  points: string[]
  cta: string
}

export interface QuestionItem {
  question: string
  answer: string
}

export interface Dictionary {
  meta: {
    title: string
    description: string
    ogLocale: string
    imageAlt: string
  }
  nav: {
    howItWorks: string
    features: string
    useCases: string
    earlyAccess: string
    faq: string
  }
  common: {
    startTelegram: string
    seeHowItWorks: string
    tryExample: string
    navigation: string
    rights: string
    allRights: string
    online: string
    messagePlaceholder: string
    hoverForAnswer: string
    scenario: string
    whatFlumeeDoes: string
    openMenu: string
    closeMenu: string
  }
  hero: {
    badge: string
    titlePrefix: string
    titleAmount: string
    titleSuffix: string
    titleLine2: string
    subtitle: string
    micro: string
    chatUser: string
    chatBot1: string
    chatBot1Category: string
    chatBot2: string
    chatAdvice: string
    weekExpenses: string
    weekCoffee: string
    weekDelivery: string
    weekTaxi: string
    monthForecast: string
  }
  heroFlumee: {
    title: string
    subtitle: string
  }
  marquee: string[]
  problem: {
    titleLine1: string
    titleLine2: string
    titleLine3: string
    subtitle: string
    cards: { title: string; points: string[] }[]
  }
  mainIdea: {
    titleLine1: string
    titleLine2: string
    subtitle: string
    stepInput: string
    stepSum: string
    stepCategory: string
    stepDate: string
    stepToday: string
    stepAdvice: string
    chips: string[]
  }
  howItWorks: {
    title: string
    steps: { title: string; body?: string; example?: string; rows?: [string, string][]; text?: string }[]
  }
  features: { title: string; items: FeatureItem[] }
  useCases: { title: string; items: UseCaseItem[] }
  questions: { title: string; items: QuestionItem[] }
  limits: {
    title: string
    subtitle: string
    cta: string
    chatUser: string
    chatBot: string
  }
  planning: {
    titleLine1: string
    titleLine2: string
    subtitle: string
    cta: string
    chatUser: string
    chatBot: string
  }
  financialStrength: {
    title: string
    income: string
    incomeValue: string
    expenses: string
    expensesValue: string
    mandatory: string
    mandatoryValue: string
    freeBalance: string
    freeBalanceValue: string
    strengthLabel: string
    purchaseHint: string
    body: string
  }
  whyTelegram: {
    title: string
    subtitle: string
    colApp: string
    colFlumee: string
    rows: { app: string; flumee: string }[]
  }
  earlyAccess: {
    title: string
    subtitle: string
    recommended: string
    earlyTitle: string
    earlyPrice: string
    availableNow: string
    earlyFeatures: string[]
    earlyCta: string
    premiumTitle: string
    premiumPrice: string
    comingSoon: string
    premiumFeatures: string[]
  }
  faq: { title: string; items: FaqItem[] }
  finalCta: {
    titleLine1: string
    titleLine2: string
    subtitle: string
    micro: string
  }
  footer: { tagline: string }
}
