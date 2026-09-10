import { useMemo, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { Button } from '../components/Button'
import './Faq.css'

// ------------------------------------------------------------------
// Content
// ------------------------------------------------------------------

interface Category {
  id: string
  label: string
  icon: ReactNode
}

interface FaqItem {
  category: string
  q: string
  a: string
}

const CATEGORIES: Category[] = [
  { id: 'general', label: 'General Questions', icon: <IconBulb /> },
  { id: 'payment', label: 'Payment & Billing', icon: <IconCard /> },
  { id: 'security', label: 'Safety & Security', icon: <IconShieldLock /> },
  { id: 'account', label: 'Account & Updates', icon: <IconRocket /> },
]

const FAQS: FaqItem[] = [
  {
    category: 'general',
    q: 'How do I create an account?',
    a: 'Tap Create Account, follow the on-screen setup, and confirm your email or phone number. You can be up and running in under five minutes.',
  },
  {
    category: 'general',
    q: 'Is there a fee to sign up?',
    a: 'No — creating an account is free. You only pay standard network or service fees when you make a transaction.',
  },
  {
    category: 'payment',
    q: 'How do I sell crypto?',
    a: 'Open the Sell flow from your balance page, choose an asset and amount, review the quote, and confirm. Funds are typically available within a few minutes to a few hours depending on your payout method.',
  },
  {
    category: 'payment',
    q: 'Why did my sell order fail?',
    a: 'This is usually caused by a price change during confirmation, insufficient balance for network fees, or a temporary network issue. Wait a few minutes and try again; if it keeps failing, contact support with the order reference.',
  },
  {
    category: 'security',
    q: 'I lost my recovery phrase — can you restore it?',
    a: "We never have access to your recovery phrase or private keys, so we can't restore, reset, or recover them on your behalf. If you still have access to your account elsewhere, back up a new phrase immediately.",
  },
  {
    category: 'security',
    q: 'How do I report a scam?',
    a: 'Use the Report Scam & Fraud topic to submit transaction details as soon as possible. Acting quickly gives the best chance of flagging the destination address before funds move further.',
  },
  {
    category: 'account',
    q: 'I sent funds to the wrong network — what now?',
    a: "Recovery depends on the networks involved and isn't always possible. Don't send any more funds to that address, and contact support with the transaction hash so we can check what options exist.",
  },
  {
    category: 'account',
    q: 'My balance looks wrong — how do I find missing funds?',
    a: "Check the transaction history for the specific asset and network first; most 'missing' funds are simply on a different network than expected. Reach out with the transaction details if it's still unclear.",
  },
]

// ------------------------------------------------------------------
// Page
// ------------------------------------------------------------------

export function Faq() {
  const [activeCategory, setActiveCategory] = useState<string>('security')
  const [openQuestion, setOpenQuestion] = useState<string | null>(FAQS[4].q)
  const [submitted, setSubmitted] = useState(false)

  const visibleFaqs = useMemo(
    () => FAQS.filter((item) => item.category === activeCategory),
    [activeCategory],
  )

  function handleCategoryClick(id: string) {
    setActiveCategory(id)
    const firstInCategory = FAQS.find((item) => item.category === id)
    setOpenQuestion(firstInCategory ? firstInCategory.q : null)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="faq-page">
      {/* Hero */}
      <section className="faq-hero">
        <div className="container faq-hero-inner">
          <div className="faq-hero-text">
            <span className="eyebrow faq-hero-eyebrow">Support center</span>
            <h1 className="faq-hero-title">Frequently Asked Question</h1>
            <p className="faq-hero-copy">
              Browse answers by topic below, or open a question directly. Can't find what you need?
              Send us a message and we'll get back to you.
            </p>
          </div>
          <span className="faq-hero-mark" aria-hidden="true">
            <span className="faq-hero-mark-glyph">?</span>
          </span>
        </div>
      </section>

      <div className="container">
        {/* Category cards, below the hero content — no overlap */}
        <div className="faq-categories" role="tablist" aria-label="FAQ categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={
                'faq-category-card' + (activeCategory === cat.id ? ' faq-category-card-active' : '')
              }
              onClick={() => handleCategoryClick(cat.id)}
            >
              <span className="faq-category-icon">{cat.icon}</span>
              <span className="faq-category-label">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Accordion */}
        <section className="section faq-accordion-section">
          <div className="stack faq-accordion-list">
            {visibleFaqs.map((item) => {
              const isOpen = openQuestion === item.q
              return (
                <div className={'faq-pill' + (isOpen ? ' faq-pill-open' : '')} key={item.q}>
                  <button
                    type="button"
                    className="faq-pill-summary"
                    aria-expanded={isOpen}
                    onClick={() => setOpenQuestion(isOpen ? null : item.q)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-toggle" aria-hidden="true">
                      <IconChevron />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-pill-answer">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        
      </div>
    </div>
  )
}

// ------------------------------------------------------------------
// Icons — small inline SVGs styled via currentColor so they follow
// the theme automatically.
// ------------------------------------------------------------------

function iconWrap(children: ReactNode, size = 24) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      {children}
    </svg>
  )
}

function IconChevron() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <path
        d="M7 10l5 5 5-5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconBulb() {
  return iconWrap(
    <>
      <path d="M9 18h6M10 21h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M12 3a6 6 0 0 0-3.5 10.9c.6.4.9 1 .9 1.7V16h5.2v-.4c0-.7.3-1.3.9-1.7A6 6 0 0 0 12 3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </>,
  )
}

function IconCard() {
  return iconWrap(
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
      <path d="M7 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>,
  )
}

function IconShieldLock() {
  return iconWrap(
    <>
      <path
        d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect x="9.5" y="11" width="5" height="4" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.3 11V9.7a1.7 1.7 0 0 1 3.4 0V11" stroke="currentColor" strokeWidth="1.6" />
    </>,
  )
}

function IconRocket() {
  return iconWrap(
    <>
      <path
        d="M12 2c3 1 5 4 5 8 0 2-1 4-2 5l-3 3-3-3c-1-1-2-3-2-5 0-4 2-7 5-8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="1.6" fill="currentColor" />
      <path d="M9 16l-2 4M15 16l2 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>,
  )
}
