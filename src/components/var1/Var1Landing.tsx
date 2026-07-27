import {
  ArrowRight,
  BrainCircuit,
  ChartPie,
  Check,
  ChevronDown,
  Database,
  Gauge,
  Keyboard,
  ListChecks,
  Mic,
  Receipt,
  Send,
  ShieldCheck,
  Sparkles,
  Tags,
  Zap,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState, type ReactNode } from 'react'
import { LEGAL_LINKS, TELEGRAM_URL, VAR1_PRICES } from '../../constants'
import { Var1Mascot } from './Var1Mascot'
import './var1.css'

const navLinks = [
  { label: 'Как работает', href: '#var1-how' },
  { label: 'Возможности', href: '#var1-benefits' },
  { label: 'Тарифы', href: '#var1-pricing' },
  { label: 'Безопасность', href: '#var1-security' },
  { label: 'FAQ', href: '#var1-faq' },
]

const benefits = [
  {
    icon: Zap,
    title: 'Быстрые записи',
    text: 'Расходы и доходы обычным человеческим языком.',
  },
  {
    icon: Tags,
    title: 'Понятные категории',
    text: 'Flumee использует существующие категории и запоминает исправления.',
  },
  {
    icon: ChartPie,
    title: 'Отчёты по вашим данным',
    text: 'Смотрите расходы за период, основные категории и крупнейшие операции.',
  },
  {
    icon: Gauge,
    title: 'Лимиты без давления',
    text: 'Понимайте, сколько уже потрачено и сколько осталось.',
  },
]

const inputFormats = [
  {
    icon: Keyboard,
    title: 'Текст',
    text: 'Одна или несколько операций в сообщении.',
  },
  {
    icon: Mic,
    title: 'Голос',
    text: 'Flumee расшифрует сообщение и подготовит записи.',
  },
  {
    icon: Receipt,
    title: 'Фото чека',
    text: 'Распознает магазин, дату, сумму и позиции.',
  },
]

const faqItems = [
  {
    question: 'Нужно ли подключать банковскую карту?',
    answer:
      'Нет. Для учёта Flumee не подключается к банковскому счёту: вы сами отправляете операции в Telegram. Оплата тарифа, если она понадобится, проходит на стороне ЮKassa.',
  },
  {
    question: 'Какие данные хранит Flumee?',
    answer:
      'Flumee хранит данные, нужные для учёта: сохранённые операции, категории, ваши правила и настройки. Отчёты строятся только по сохранённым операциям.',
  },
  {
    question: 'Можно ли удалить данные?',
    answer:
      'Да. Вы можете удалить свои данные и перестать пользоваться сервисом.',
  },
  {
    question: 'Что делать, если Flumee ошибся с категорией?',
    answer:
      'Исправьте категорию обычной фразой. Flumee перенесёт операцию и учтёт ваше правило в дальнейшем.',
  },
  {
    question: 'Можно ли записать несколько расходов одним сообщением?',
    answer:
      'Да. Например: «Вчера 450 кофе, 1200 такси и 3400 продукты». Flumee подготовит отдельные операции.',
  },
  {
    question: 'Чем отличаются Free, Plus и Pro?',
    answer:
      'Free подходит для знакомства и базового учёта, Plus — для регулярного использования, Pro — для максимальных возможностей и расширенной аналитики. Актуальный состав тарифов Flumee покажет в Telegram до оплаты.',
  },
  {
    question: 'Является ли Flumee финансовым советником?',
    answer:
      'Нет. Flumee помогает вести учёт и понимать сохранённые данные, но не является инвестиционным или финансовым советником.',
  },
]

function Container({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`var1-container ${className}`.trim()}>{children}</div>
  )
}

function Reveal({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0.72, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-48px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function TelegramCta({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <a
      className={`var1-button var1-button-primary ${className}`.trim()}
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Send aria-hidden="true" />
      {children}
    </a>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="var1-section-heading">
      <p className="var1-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="var1-section-description">{description}</p>}
    </div>
  )
}

function Chat({
  user,
  bot,
  accent = false,
}: {
  user: string
  bot: string
  accent?: boolean
}) {
  return (
    <div className={`var1-chat ${accent ? 'var1-chat-accent' : ''}`}>
      <div className="var1-chat-top">
        <span className="var1-avatar">
          <Var1Mascot state="logo" />
        </span>
        <span>
          <strong>Flumee</strong>
          <small>в сети</small>
        </span>
      </div>
      <div className="var1-chat-body">
        <p className="var1-bubble var1-bubble-user">{user}</p>
        <p className="var1-bubble var1-bubble-bot">{bot}</p>
      </div>
    </div>
  )
}

function Var1Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="var1-faq-list">
      {faqItems.map((item, index) => {
        const isOpen = index === openIndex
        const buttonId = `var1-faq-button-${index}`
        const panelId = `var1-faq-panel-${index}`

        return (
          <div className="var1-faq-item" key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={isOpen ? 'var1-chevron-open' : ''}
                />
              </button>
            </h3>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="var1-faq-answer"
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export function Var1Landing() {
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const previousTitle = document.title
    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    const previousDescription = description?.content
    let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]')
    const robotsWasCreated = !robots
    const previousRobots = robots?.content

    if (!description) {
      const meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    if (!robots) {
      robots = document.createElement('meta')
      robots.name = 'robots'
      document.head.appendChild(robots)
    }

    document.title =
      'Flumee — учёт расходов обычными сообщениями в Telegram'
    document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )!.content =
      'Записывайте расходы обычным языком в Telegram. Flumee определит сумму, дату и категорию, сохранит операции и поможет понять, куда уходят деньги.'
    robots.content = 'noindex, nofollow'
    document.documentElement.lang = 'ru'
    document.body.classList.add('var1-body')

    return () => {
      document.title = previousTitle
      if (previousDescription !== undefined) {
        document.querySelector<HTMLMetaElement>(
          'meta[name="description"]',
        )!.content = previousDescription
      }
      if (robotsWasCreated) {
        robots?.remove()
      } else if (previousRobots !== undefined && robots) {
        robots.content = previousRobots
      }
      document.body.classList.remove('var1-body')
    }
  }, [])

  return (
    <div className="var1">
      <header className="var1-header">
        <Container className="var1-header-inner">
          <a className="var1-logo" href="/var1" aria-label="Flumee — наверх">
            <Var1Mascot state="logo" className="var1-logo-mascot" />
            <span>Flumee</span>
          </a>
          <nav className="var1-nav" aria-label="Навигация по странице">
            {navLinks.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <TelegramCta className="var1-header-cta">
            Начать бесплатно
          </TelegramCta>
        </Container>
      </header>

      <main>
        <section className="var1-hero" aria-labelledby="var1-title">
          <Container className="var1-hero-grid">
            <div className="var1-hero-copy">
              <p className="var1-eyebrow">
                AI-помощник по личным финансам в Telegram
              </p>
              <h1 id="var1-title">
                Записывайте траты так, как пишете другу
              </h1>
              <p className="var1-hero-description">
                Напишите «Кофе 340» — Flumee определит сумму, дату и категорию,
                сохранит расход и поможет понять, куда уходят деньги.
              </p>
              <div className="var1-hero-result var1-hero-result-mobile">
                <span>Кофе 340</span>
                <ArrowRight aria-hidden="true" />
                <strong>Кафе · Сегодня · записано</strong>
              </div>
              <div className="var1-hero-actions">
                <TelegramCta>Начать бесплатно в Telegram</TelegramCta>
                <a
                  className="var1-button var1-button-secondary"
                  href="#var1-how"
                >
                  Посмотреть, как работает
                  <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="var1-hero-mascot-scene">
              <div className="var1-orbit var1-orbit-one" aria-hidden="true" />
              <div className="var1-orbit var1-orbit-two" aria-hidden="true" />
              <svg
                className="var1-hero-lines"
                viewBox="0 0 520 500"
                aria-hidden="true"
              >
                <path d="M34 280C110 110 340 62 486 206" />
                <path d="M58 360C176 476 408 432 470 294" />
              </svg>
              <span className="var1-particle var1-particle-one" aria-hidden="true" />
              <span className="var1-particle var1-particle-two" aria-hidden="true" />
              <span className="var1-particle var1-particle-three" aria-hidden="true" />
              <Var1Mascot
                state="hero"
                priority
                alt="Дружелюбный маскот Flumee"
                className="var1-hero-mascot"
              />
              <span className="var1-hero-chip var1-hero-chip-one">
                Без таблиц
              </span>
              <span className="var1-hero-chip var1-hero-chip-two">
                Без стыда
              </span>
              <span className="var1-hero-chip var1-hero-chip-three">
                За 5 секунд
              </span>
              <div className="var1-hero-result var1-hero-result-desktop">
                <span>Кофе 340</span>
                <ArrowRight aria-hidden="true" />
                <strong>Кафе · Сегодня · записано</strong>
              </div>
            </div>
            <ul className="var1-trust" aria-label="Преимущества старта">
              {['0 ₽ на старте', 'Без банковского подключения', 'Данные можно удалить'].map(
                (item) => (
                  <li key={item}>
                    <Check aria-hidden="true" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </Container>
        </section>

        <section className="var1-section" id="var1-how">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Один расход — одно сообщение"
                title="От сообщения до понятной финансовой картины"
              />
              <ol className="var1-steps">
                <li className="var1-step-card">
                  <div className="var1-step-heading">
                    <span className="var1-step-number">1</span>
                    <h3>Напишите как обычно</h3>
                  </div>
                  <p className="var1-example">
                    «Вчера 450 кофе, 1200 такси и 3400 продукты».
                  </p>
                  <div className="var1-step-visual var1-step-input">
                    <div className="var1-mini-message">
                      <Send aria-hidden="true" />
                      <span>Вчера 450 кофе, 1200 такси и 3400 продукты</span>
                    </div>
                    <div className="var1-operation-chips" aria-hidden="true">
                      <span>Кофе · 450 ₽</span>
                      <span>Такси · 1 200 ₽</span>
                      <span>Продукты · 3 400 ₽</span>
                    </div>
                    <Var1Mascot
                      state="confused"
                      alt="Заинтересованный маскот Flumee"
                      className="var1-step-mascot var1-step-mascot-confused"
                    />
                  </div>
                </li>
                <li className="var1-flow-arrow" aria-hidden="true">
                  <ArrowRight />
                </li>
                <li className="var1-step-card">
                  <div className="var1-step-heading">
                    <span className="var1-step-number">2</span>
                    <h3>Flumee разберёт сообщение</h3>
                  </div>
                  <p>Выделит отдельные операции, суммы, даты и категории.</p>
                  <div className="var1-step-visual var1-step-analysis">
                    <span className="var1-analysis-field var1-field-sum">
                      Сумма
                      <strong>450 ₽</strong>
                    </span>
                    <span className="var1-analysis-field var1-field-category">
                      Категория
                      <strong>Кафе</strong>
                    </span>
                    <span className="var1-analysis-field var1-field-date">
                      Дата
                      <strong>Вчера</strong>
                    </span>
                    <span className="var1-analysis-ring" aria-hidden="true" />
                    <Var1Mascot
                      state="thinking"
                      alt="Маскот Flumee анализирует сообщение"
                      className="var1-step-mascot var1-step-mascot-thinking"
                    />
                  </div>
                </li>
                <li className="var1-flow-arrow" aria-hidden="true">
                  <ArrowRight />
                </li>
                <li className="var1-step-card">
                  <div className="var1-step-heading">
                    <span className="var1-step-number">3</span>
                    <h3>Получите понятный результат</h3>
                  </div>
                  <p>Увидите, что сохранено, и сможете сразу исправить ошибку.</p>
                  <div className="var1-step-visual var1-step-report">
                    <div className="var1-report-card">
                      <span>Расходы за вчера</span>
                      <strong>5 050 ₽</strong>
                      <div className="var1-report-bars" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                      </div>
                      <small>Продукты · Такси · Кафе</small>
                    </div>
                    <div className="var1-limit-preview">
                      <span>Лимит на кафе</span>
                      <strong>осталось 4 550 ₽</strong>
                    </div>
                    <Var1Mascot
                      state="happy"
                      alt="Довольный маскот Flumee показывает результат"
                      className="var1-step-mascot var1-step-mascot-happy"
                    />
                  </div>
                </li>
              </ol>
              <div className="var1-centered-cta">
                <TelegramCta>Попробовать с первой записью</TelegramCta>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="var1-section var1-section-tint" id="var1-benefits">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Не учёт ради учёта"
                title="Понимайте деньги без таблиц и сложных приложений"
              />
              <div className="var1-card-grid var1-benefit-grid">
                {benefits.map(({ icon: Icon, title, text }, index) => (
                  <motion.article
                    className="var1-card"
                    key={title}
                    initial={
                      reduceMotion ? false : { opacity: 0.82, y: 12 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                  >
                    <span className="var1-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </motion.article>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="var1-section var1-category">
          <Container>
            <Reveal className="var1-category-grid">
              <div>
                <SectionHeading
                  eyebrow="Порядок вместо сотни похожих категорий"
                  title="Flumee учится на ваших исправлениях"
                />
                <p className="var1-rule">
                  <ShieldCheck aria-hidden="true" />
                  Ваши правила важнее предположения AI.
                </p>
              </div>
              <div className="var1-category-scene">
                <Var1Mascot
                  state="happy"
                  alt="Маскот Flumee запомнил новое правило"
                  className="var1-category-mascot"
                />
                <Chat
                  accent
                  user="Зубную пасту относить в гигиену"
                  bot="Перенёс текущую покупку в «Гигиена» и запомнил правило."
                />
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="var1-section">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Удобно в любой ситуации"
                title="Пишите, говорите или отправляйте чек"
              />
              <div className="var1-card-grid var1-format-grid">
                {inputFormats.map(({ icon: Icon, title, text }) => (
                  <article className="var1-card var1-format-card" key={title}>
                    <span className="var1-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <section
          className="var1-section var1-security"
          id="var1-security"
        >
          <Container>
            <Reveal className="var1-security-grid">
              <div>
                <SectionHeading
                  eyebrow="AI помогает понимать, но не придумывает цифры"
                  title="Ваши финансы остаются под вашим контролем"
                />
                <ul className="var1-check-list">
                  {[
                    'Отчёты рассчитываются по сохранённым операциям.',
                    'Flumee не требует подключения к банковскому счёту.',
                    'Ошибочную категорию можно исправить.',
                    'Данные можно удалить.',
                    'Flumee не является инвестиционным или финансовым советником.',
                  ].map((item) => (
                    <li key={item}>
                      <Check aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="var1-pipeline" aria-label="Как обрабатываются данные">
                {[
                  ['Сообщение', Send],
                  ['Распознавание', BrainCircuit],
                  ['Проверка', ListChecks],
                  ['Сохранение', Database],
                  ['Отчёт', ChartPie],
                ].map(([label, Icon], index) => {
                  const PipelineIcon = Icon
                  return (
                    <div className="var1-pipeline-step" key={label as string}>
                      <span>
                        <PipelineIcon aria-hidden="true" />
                      </span>
                      <strong>{label as string}</strong>
                      {index < 4 && <ArrowRight aria-hidden="true" />}
                    </div>
                  )
                })}
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="var1-section" id="var1-pricing">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Начните бесплатно"
                title="Выберите возможности под свои задачи"
              />
              <div className="var1-pricing-grid">
                {[
                  {
                    name: 'Free',
                    price: VAR1_PRICES.free,
                    text: 'Для знакомства и базового учёта.',
                    badge: 'Для старта',
                    cta: 'Начать бесплатно',
                    mascot: 'free' as const,
                  },
                  {
                    name: 'Plus',
                    price: VAR1_PRICES.plus,
                    text: 'Основной тариф для регулярного использования.',
                    badge: 'Основной',
                    cta: 'Выбрать Plus',
                    mascot: 'happy' as const,
                    featured: true,
                  },
                  {
                    name: 'Pro',
                    price: VAR1_PRICES.pro,
                    text: 'Максимальные возможности и расширенная аналитика.',
                    badge: 'Максимум',
                    cta: 'Выбрать Pro',
                    mascot: 'pro' as const,
                  },
                ].map((plan, index) => (
                  <motion.article
                    className={`var1-price-card ${plan.featured ? 'var1-price-featured' : ''}`}
                    key={plan.name}
                    initial={
                      reduceMotion ? false : { opacity: 0.78, y: 20 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={reduceMotion ? undefined : { y: -7 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <div className="var1-price-glow" aria-hidden="true" />
                    <span className="var1-price-badge">
                      {plan.featured && <Sparkles aria-hidden="true" />}
                      {plan.badge}
                    </span>
                    <Var1Mascot
                      state={plan.mascot}
                      alt={`Маскот Flumee для тарифа ${plan.name}`}
                      className="var1-price-mascot"
                    />
                    <h3>{plan.name}</h3>
                    <p className="var1-price">{plan.price}</p>
                    <p className="var1-price-text">{plan.text}</p>
                    <div className="var1-price-preview" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                      <small>Возможности под ваши задачи</small>
                    </div>
                    <TelegramCta>{plan.cta}</TelegramCta>
                  </motion.article>
                ))}
              </div>
              <a
                className="var1-pricing-link"
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Сравнить тарифы в Telegram
                <ArrowRight aria-hidden="true" />
              </a>
            </Reveal>
          </Container>
        </section>

        <section className="var1-section var1-section-tint" id="var1-faq">
          <Container className="var1-faq-container">
            <SectionHeading eyebrow="FAQ" title="Частые вопросы" />
            <Var1Faq />
          </Container>
        </section>

        <section className="var1-final">
          <Container>
            <div className="var1-final-card">
              <p className="var1-eyebrow">Начните с одной простой записи</p>
              <h2>Напишите Flumee свой первый расход</h2>
              <p>
                Никаких таблиц и долгой настройки. Откройте Telegram и напишите,
                на что сегодня потратили деньги.
              </p>
              <TelegramCta>Начать бесплатно в Telegram</TelegramCta>
              <small>
                Работает в Telegram · 0 ₽ на старте · данные можно удалить
              </small>
            </div>
          </Container>
        </section>
      </main>

      <footer className="var1-footer">
        <Container>
          <div className="var1-footer-top">
            <a className="var1-logo" href="/var1" aria-label="Flumee — наверх">
              <Var1Mascot state="logo" className="var1-logo-mascot" />
              <span>Flumee</span>
            </a>
            <p>Персональный AI-помощник по личным финансам в Telegram.</p>
          </div>
          <nav className="var1-legal" aria-label="Юридическая информация">
            {LEGAL_LINKS.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <p className="var1-copyright">
            © 2026 Flumee. Все права защищены.
          </p>
        </Container>
      </footer>
    </div>
  )
}
