import type { Dictionary } from '../types'

export const en: Dictionary = {
  meta: {
    title: 'Flumee — AI money assistant in Telegram',
    description:
      'Flumee helps you track spending, count your money, set limits, and understand where your money goes — right in Telegram.',
    ogLocale: 'en_US',
    imageAlt: 'Flumee — AI money assistant in Telegram',
  },
  nav: {
    howItWorks: 'How it works',
    features: 'Features',
    useCases: 'Use cases',
    earlyAccess: 'Early access',
    faq: 'FAQ',
  },
  common: {
    startTelegram: 'Start in Telegram',
    seeHowItWorks: 'See how it works',
    tryExample: 'Try an example',
    navigation: 'Navigation',
    rights: 'All rights reserved.',
    allRights: 'All rights reserved.',
    online: 'online',
    messagePlaceholder: 'Message...',
    hoverForAnswer: 'Hover to see the answer',
    scenario: 'Scenario',
    whatFlumeeDoes: 'What Flumee does:',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    badge: 'Personal assistant for spending and income — right in Telegram',
    titlePrefix: 'Wait,',
    titleAmount: '$600',
    titleSuffix: 'this month.',
    titleLine2: 'Where is my money going?',
    subtitle:
      'Flumee tracks spending, sorts expenses into categories, totals everything up, and shows where money slips away quietly. No Excel, manual analysis, or complex apps.',
    micro: 'Early access is free. Just tell Flumee about your first expense.',
    chatUser: 'Flumee, I spent $4 on coffee',
    chatBot1: 'Logged:',
    chatBot1Category: ', category “Coffee & dining”.',
    chatBot2: 'This week you have already spent',
    chatAdvice: 'Want me to show what that could look like for a month?',
    weekExpenses: 'Weekly spending',
    weekCoffee: 'Coffee & snacks — $26',
    weekDelivery: 'Delivery — $57',
    weekTaxi: 'Taxi — $41',
    monthForecast: 'Monthly forecast:',
  },
  heroFlumee: {
    title: 'Your Flumee — always there in chat',
    subtitle:
      'Helps you log expenses, see totals, and answer money questions',
  },
  marquee: [
    'coffee $4',
    'taxi $8',
    'delivery $10',
    'salary $1,000',
    'cafe limit $70',
    'can I buy sneakers?',
    'where did my money go?',
  ],
  problem: {
    titleLine1: 'No Excel',
    titleLine2: 'No separate app',
    titleLine3: 'Just a message / voice note / screenshot in Telegram',
    subtitle: 'You do not have to remember every purchase. Money still leaves.',
    cards: [
      {
        title: 'Excel',
        points: ['manual entry', 'easy to forget', 'you analyze yourself'],
      },
      {
        title: 'Finance apps',
        points: [
          'open another app',
          'fill in forms',
          'then study charts',
        ],
      },
      {
        title: 'Flumee',
        points: [
          'send a message',
          'Flumee understands',
          'Flumee explains what is going on',
        ],
      },
    ],
  },
  mainIdea: {
    titleLine1: 'Type / speak / send expenses like you text a friend.',
    titleLine2: 'Flumee does the math.',
    subtitle:
      'No need to open an app, pick a category, fill a form, and reconcile spending. You write naturally — Flumee turns it into a clear money picture.',
    stepInput: '“Flumee, coffee $4”',
    stepSum: 'Amount',
    stepCategory: 'Category',
    stepDate: 'Date',
    stepToday: 'Today',
    stepAdvice: 'Tip: $26 on coffee this week already',
    chips: [
      'Flumee, coffee $4',
      'Taxi $8 today',
      'Got paid $1,000',
      'Spent $25 on groceries',
      'Planning sneakers $90 tomorrow',
      'Set delivery limit $80/month',
    ],
  },
  howItWorks: {
    title: 'Not tracking for tracking’s sake. A chat with your assistant.',
    steps: [
      {
        title: 'Write like you talk',
        body: 'Simply:',
        example: 'Flumee, I spent $4 on coffee.',
      },
      {
        title: 'Flumee parses the expense',
        rows: [
          ['Type', 'Expense'],
          ['Amount', '$4'],
          ['Category', 'Coffee & snacks'],
          ['Date', 'Today'],
        ],
      },
      {
        title: 'You get a clear picture',
        text: 'This week most went to delivery, taxi, and coffee. Cutting two delivery orders per week could save about $50–70 per month.',
      },
    ],
  },
  features: {
    title: 'Flumee handles the boring part of money control.',
    items: [
      {
        key: 'expenses',
        title: 'Logs expenses for you',
        description:
          'You write a normal sentence — Flumee saves it and sorts it into categories.',
      },
      {
        key: 'totals',
        title: 'Calculates totals',
        description:
          'Day, week, month, categories, recurring spend, income and expenses — ask in chat.',
      },
      {
        key: 'tips',
        title: 'Gives gentle tips',
        description:
          'Flumee shows where spending grows, where you overpay, and what you can trim without stress.',
      },
      {
        key: 'income',
        title: 'Tracks income',
        description:
          'Salary, transfers, side income — all part of the full picture.',
      },
      {
        key: 'limits',
        title: 'Watches limits',
        description:
          'Set a category limit and Flumee helps you stay within it.',
      },
      {
        key: 'strength',
        title: 'Checks financial comfort',
        description:
          'Flumee weighs income, regular bills, and whether you can afford a purchase now.',
      },
    ],
  },
  useCases: {
    title: 'Start with the level of control you need right now.',
    items: [
      {
        title: 'See where money goes',
        audience:
          'For anyone who reaches month-end and thinks: “I did not buy anything big. Why is so much gone?”',
        points: [
          'logs expenses via Telegram',
          'sorts spending automatically',
          'shows category totals',
          'surfaces small recurring spends',
        ],
        cta: 'Review my spending',
      },
      {
        title: 'Understand and save gently',
        audience:
          'For those who want to reduce excess without harsh restrictions.',
        points: [
          'shows categories where spending grows',
          'suggests soft cuts',
          'helps set limits',
          'warns when a category drifts',
        ],
        cta: 'Find where to save',
      },
      {
        title: 'Plan ahead',
        audience:
          'For anyone deciding if they can afford a purchase, trip, or big expense.',
        points: [
          'tracks income',
          'helps plan day and week spending',
          'checks financial comfort',
          'answers “should I buy this now?”',
        ],
        cta: 'Check a purchase',
      },
    ],
  },
  questions: {
    title: 'Ask Flumee like a real assistant.',
    items: [
      {
        question: 'Where did my money go this week?',
        answer:
          'Most this week went to delivery ($57), taxi ($41), and coffee ($26).',
      },
      {
        question: 'How much did I spend on coffee?',
        answer:
          'Coffee & snacks this week — $26. A month could be around $110.',
      },
      {
        question: 'Can I buy headphones?',
        answer:
          'You could, but free cash until payday would drop noticeably. Better around $70.',
      },
      {
        question: 'How much can I spend tomorrow?',
        answer:
          'With limits and bills in mind — about up to $28 without stressing.',
      },
      {
        question: 'Where do I spend the most?',
        answer:
          'Delivery, taxi, and coffee lead — that is where recurring spend grows.',
      },
      {
        question: 'How to cut delivery without being harsh?',
        answer:
          'Two fewer orders per week could save about $50–70 per month, calmly.',
      },
    ],
  },
  limits: {
    title: 'Limits without feeling punished.',
    subtitle:
      'Flumee does not ban everything — it shows safe boundaries. Set a limit on delivery, coffee, taxi, or fun — Flumee gently shows how close you are.',
    cta: 'Set your first limit',
    chatUser: 'Flumee, set a delivery limit of $100 per month.',
    chatBot:
      'Done. Delivery is at $68 of $100. Nine days left in the month. To stay on track, aim for about $3.50 per day.',
  },
  planning: {
    titleLine1: 'Before you buy, ask:',
    titleLine2: '“Is it okay for me to get this now?”',
    subtitle:
      'Flumee looks at income, current spending, limits, and regular bills. It does not decide for you — it shows what a purchase would mean.',
    cta: 'Check a purchase',
    chatUser: 'Flumee, I want headphones for $120. Worth it?',
    chatBot:
      'Possible, but free cash until payday would drop to $84. If bills are ahead, postpone or pick an option under $70.',
  },
  financialStrength: {
    title: 'See how calmly you can spend.',
    income: 'Income',
    incomeValue: '$1,000',
    expenses: 'Spending',
    expensesValue: '$570',
    mandatory: 'Fixed bills',
    mandatoryValue: '$210',
    freeBalance: 'Free balance',
    freeBalanceValue: '$220',
    strengthLabel: 'Financial comfort: normal',
    purchaseHint: 'A $120 purchase: think twice',
    body: 'Financial comfort answers a simple question: “If I spend now, will I be okay until the next income?”',
  },
  whyTelegram: {
    title: 'Track money where you already chat.',
    subtitle:
      'Most finance apps need another login, UI, and habit. Flumee lives in Telegram and turns tracking into a short conversation.',
    colApp: 'App',
    colFlumee: 'Flumee',
    rows: [
      { app: 'open an app', flumee: 'open Telegram' },
      { app: 'fill a form', flumee: 'write a sentence' },
      { app: 'pick a category', flumee: 'Flumee detects it' },
      { app: 'study charts later', flumee: 'ask in chat' },
      { app: 'analyze yourself', flumee: 'get a nudge' },
    ],
  },
  earlyAccess: {
    title: 'Start free while early access is open.',
    subtitle:
      'We are onboarding first users to shape the best flows together: limits, tips, planning, family spending, and personal reports.',
    recommended: 'Recommended',
    earlyTitle: 'Early access',
    earlyPrice: '$0 now',
    availableNow: 'Available now:',
    earlyFeatures: [
      'expenses in Telegram',
      'auto categories',
      'income tracking',
      'quick totals',
      'simple tips',
      'limits',
    ],
    earlyCta: 'Get early access',
    premiumTitle: 'Premium later',
    premiumPrice: 'from $3–5/mo',
    comingSoon: 'Coming soon:',
    premiumFeatures: [
      'AI recommendations',
      'weekly planning',
      'family scenarios',
      'extended reports',
      'personal savings flows',
      'subscription reports',
    ],
  },
  faq: {
    title: 'FAQ',
    items: [
      {
        question: 'Do I need to install an app?',
        answer: 'No. Flumee works in Telegram.',
      },
      {
        question: 'Do I need a spreadsheet?',
        answer: 'No. Just message Flumee in plain language.',
      },
      {
        question: 'Do I pick categories myself?',
        answer:
          'Not required. Flumee can detect categories or use yours.',
      },
      {
        question: 'Can I track income?',
        answer: 'Yes. Salary, transfers, and other inflows work too.',
      },
      {
        question: 'Can I set limits?',
        answer:
          'Yes. Limits for delivery, coffee, taxi, fun, groceries, and more.',
      },
      {
        question: 'Can Flumee advise on purchases?',
        answer:
          'Yes. It weighs income, spending, limits, and your current situation.',
      },
      {
        question: 'Does it replace a financial advisor?',
        answer:
          'No. Flumee is a daily helper for clear money control, not a personal advisor.',
      },
    ],
  },
  finalCta: {
    titleLine1: 'Do not wait until month-end to ask again:',
    titleLine2: '“Where did my money go?”',
    subtitle:
      'Message Flumee your first expense in Telegram. It will log it, categorize it, and start building a clear picture of your money.',
    micro: 'First step — one line: “Flumee, I spent $4 on coffee.”',
  },
  footer: {
    tagline: 'Personal AI money assistant in Telegram.',
  },
}
