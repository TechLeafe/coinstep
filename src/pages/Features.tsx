import { useEffect, useRef, useState } from 'react'
import './Features.css'
import trioPeople from './web3-wallet-people.png'
import walletAppPhone from './wallet-app-phone.png'

const ASSETS = [
  { symbol: 'BTC', name: 'Bitcoin', network: 'Bitcoin', amount: '0.842 BTC', value: '$54,212.10', color: '#F7931A' },
  { symbol: 'ETH', name: 'Ethereum', network: 'Ethereum', amount: '4.15 ETH', value: '$11,932.44', color: '#627EEA' },
  { symbol: 'USDC', name: 'USD Coin', network: 'Base', amount: '2,400 USDC', value: '$2,400.00', color: '#2775CA' },
  { symbol: 'SOL', name: 'Solana', network: 'Solana', amount: '18.6 SOL', value: '$1,891.32', color: '#14B8A6' },
  { symbol: 'MATIC', name: 'Polygon', network: 'Polygon', amount: '640 MATIC', value: '$412.80', color: '#8247E5' },
]

/** Small badges that float around the phone mockup — same coin marks as
 *  the wallet list, just drifting up and down on staggered loops. */
const SEND_PHONE_COINS = [
  { symbol: 'BTC', color: '#F7931A', top: '2%', left: '-10%', size: 46, delay: 0 },
  { symbol: 'USDC', color: '#2775CA', top: '14%', left: '90%', size: 38, delay: 1.4 },
  { symbol: 'SOL', color: '#14B8A6', top: '62%', left: '-12%', size: 40, delay: 2.6 },
  { symbol: 'MATIC', color: '#8247E5', top: '82%', left: '86%', size: 34, delay: 0.7 },
]

/** Reveals a block's children (marked via CSS) once it scrolls into view. */
function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, inView] as const
}

/** Tracks how far an element has scrolled through the viewport (0 → 1) and
 *  writes it to a CSS custom property, so the transform math lives in CSS
 *  and only a single property update happens per scroll frame. */
function useScrollParallax<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let ticking = false
    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const progress = Math.min(1, Math.max(0, 1 - rect.top / vh))
      el.style.setProperty('--scroll', progress.toFixed(3))
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return ref
}

/** Coin badges that float gently around the hero illustration —
 *  same visual language as the floating badges on the phone mockup
 *  in the Send section, just arranged around the trio photo instead. */
const INTRO_FLOAT_COINS = [
  { symbol: 'BTC', color: '#F7931A', top: '4%', left: '-4%', size: 46, delay: 0 },
  { symbol: 'ETH', color: '#627EEA', top: '2%', left: '80%', size: 40, delay: 1.2 },
  { symbol: 'USDC', color: '#2775CA', top: '86%', left: '90%', size: 38, delay: 2.4 },
  { symbol: 'SOL', color: '#14B8A6', top: '40%', left: '-8%', size: 36, delay: 3.1 },
  { symbol: 'MATIC', color: '#8247E5', top: '92%', left: '6%', size: 34, delay: 0.8 },
]

function ShieldMiniIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
      <path
        d="M12 3 L19 6 V11 C19 16 16 19.5 12 21 C8 19.5 5 16 5 11 V6 Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ZapMiniIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
      <path
        d="M13 2 L4 14 H11 L10 22 L20 9 H13 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ChainMiniIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
      <path d="M9.5 14.5 L14.5 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M11 6.5 L13 4.5 A4 4 0 0 1 18.5 10 L16.5 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M13 17.5 L11 19.5 A4 4 0 0 1 5.5 14 L7.5 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function PhoneMiniIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
      <rect x="7" y="2.5" width="10" height="19" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11 18.5 H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function QrMiniIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14.5" y="3.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3.5" y="14.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14.5 14.5 H17 V17 H14.5 Z" fill="currentColor" />
      <path d="M18.5 14.5 H20.5 V16.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14.5 18.5 H16.5 M18.5 18.5 H20.5 V20.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function ClockMiniIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.5 V12 L15.2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const INTRO_HIGHLIGHTS = [
  { label: 'Secure & Private', icon: <ShieldMiniIcon /> },
  { label: 'Multiple Blockchains', icon: <ZapMiniIcon /> },
  { label: 'dApps & DeFi', icon: <ChainMiniIcon /> },
  { label: 'Mobile & Web', icon: <PhoneMiniIcon /> },
]

function IntroHero() {
  const [revealRef, inView] = useInView<HTMLDivElement>()
  const parallaxRef = useScrollParallax<HTMLDivElement>()
  const setSectionRef = (node: HTMLDivElement | null) => {
    revealRef.current = node
    parallaxRef.current = node
  }

  return (
    <section ref={setSectionRef} className={`intro-hero${inView ? ' in-view' : ''}`}>
      <div className="intro-parallax-copy">
        <div className="intro-copy stack enter-from-left">
          <h1 className="intro-heading">
            One wallet. Your entire <span className="text-gradient">Web3</span> world.
          </h1>

          <p className="intro-sub">
            Manage your crypto, connect to dApps, send and receive assets, and stay in control of
            your keys — all from one secure wallet.
          </p>

          <ul className="highlight-row">
            {INTRO_HIGHLIGHTS.map((item) => (
              <li key={item.label} className="highlight-item">
                <span className="highlight-item-icon" aria-hidden="true">
                  {item.icon}
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="intro-parallax-image">
        <div className="intro-trio enter-from-right">
          <img
            className="intro-trio-image"
            src={trioPeople}
            alt="Three people managing crypto from their phones and a laptop"
          />
          <div className="intro-float-coins" aria-hidden="true">
            {INTRO_FLOAT_COINS.map((coin) => (
              <span
                key={coin.symbol}
                className="coin-chip intro-float-coin"
                style={
                  {
                    background: coin.color,
                    top: coin.top,
                    left: coin.left,
                    width: coin.size,
                    height: coin.size,
                    animationDelay: `${coin.delay}s`,
                  } as React.CSSProperties
                }
              >
                <CoinIcon symbol={coin.symbol} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/** Per-asset coin mark, drawn as a small original glyph/shape rather than
 *  just the first letter of the symbol — a currency sign for BTC, the
 *  classic four-facet diamond for ETH, a dollar mark in a ring for the
 *  USDC stablecoin, three slanted bars for SOL, and a hex outline for
 *  MATIC/Polygon. Sized in CSS (`.coin-chip-icon`) so it scales with
 *  whichever chip size it's dropped into. */
function CoinIcon({ symbol }: { symbol: string }) {
  switch (symbol) {
    case 'BTC':
      return (
        <svg viewBox="0 0 24 24" className="coin-chip-icon" aria-hidden="true">
          <text x="12" y="17" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="15" fontWeight="700" fill="#fff">
            ₿
          </text>
        </svg>
      )
    case 'ETH':
      return (
        <svg viewBox="0 0 24 24" className="coin-chip-icon" aria-hidden="true">
          <path d="M12 2 L12 14.5 L19 11 Z" fill="#fff" opacity="0.85" />
          <path d="M12 2 L5 11 L12 14.5 Z" fill="#fff" />
          <path d="M12 16 L12 22 L19 12.8 Z" fill="#fff" opacity="0.85" />
          <path d="M12 22 L12 16 L5 12.8 Z" fill="#fff" />
        </svg>
      )
    case 'USDC':
      return (
        <svg viewBox="0 0 24 24" className="coin-chip-icon" aria-hidden="true">
          <circle cx="12" cy="12" r="9.4" fill="none" stroke="#fff" strokeWidth="1.6" />
          <text x="12" y="16.5" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fontWeight="700" fill="#fff">
            $
          </text>
        </svg>
      )
    case 'SOL':
      return (
        <svg viewBox="0 0 24 24" className="coin-chip-icon" aria-hidden="true">
          <rect x="3.5" y="5.2" width="17" height="3" rx="1.5" fill="#fff" transform="skewX(-16)" />
          <rect x="3.5" y="10.5" width="17" height="3" rx="1.5" fill="#fff" opacity="0.8" transform="skewX(-16)" />
          <rect x="3.5" y="15.8" width="17" height="3" rx="1.5" fill="#fff" transform="skewX(-16)" />
        </svg>
      )
    case 'MATIC':
      return (
        <svg viewBox="0 0 24 24" className="coin-chip-icon" aria-hidden="true">
          <path
            d="M12 3 L19 7.2 V16.8 L12 21 L5 16.8 V7.2 Z"
            fill="none"
            stroke="#fff"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )
    default:
      return <span>{symbol.slice(0, 1)}</span>
  }
}

function AssetsBlock() {
  const [revealRef, inView] = useInView<HTMLDivElement>()
  const parallaxRef = useScrollParallax<HTMLDivElement>()
  const setSectionRef = (node: HTMLDivElement | null) => {
    revealRef.current = node
    parallaxRef.current = node
  }
  const marqueeCoins = [...ASSETS, ...ASSETS]

  return (
    <section ref={setSectionRef} className={`feature-block reverse${inView ? ' in-view' : ''}`}>
      <div className="assets-parallax-copy">
        <div className="feature-copy stack enter-from-right">
          <h2>
            All your assets, <span className="text-gradient">in one place</span>
          </h2>
          <p>
            Keep track of your tokens and balances across supported blockchain networks from a
            single wallet.
          </p>
          <div className="coin-marquee">
            <div className="coin-track">
              {marqueeCoins.map((coin, i) => (
                <span
                  key={`${coin.symbol}-${i}`}
                  className="coin-chip coin-chip-sm"
                  style={{ background: coin.color }}
                  aria-hidden="true"
                >
                  <CoinIcon symbol={coin.symbol} />
                </span>
              ))}
            </div>
          </div>

          <ul className="highlight-row">
            {INTRO_HIGHLIGHTS.map((item) => (
              <li key={item.label} className="highlight-item">
                <span className="highlight-item-icon" aria-hidden="true">
                  {item.icon}
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="assets-parallax-card">
        <span className="card-glow" aria-hidden="true" />
        <div className="surface wallet-card enter-from-left">
          <div className="wallet-card-head">
            <span className="eyebrow">Total balance</span>
            <span className="wallet-total">$70,848.66</span>
          </div>
          <ul className="wallet-list">
            {ASSETS.map((asset, i) => (
              <li key={asset.symbol} className="wallet-row" style={{ '--i': i } as React.CSSProperties}>
                <span className="coin-chip" style={{ background: asset.color }} aria-hidden="true">
                  <CoinIcon symbol={asset.symbol} />
                </span>
                <div className="wallet-row-info">
                  <span className="wallet-row-name">{asset.name}</span>
                  <span className="wallet-row-network muted">{asset.network}</span>
                </div>
                <div className="wallet-row-amounts">
                  <span className="wallet-row-amount">{asset.amount}</span>
                  <span className="wallet-row-value muted">{asset.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function SendBlock() {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <section ref={ref} className={`feature-block${inView ? ' in-view' : ''}`}>
      <div className="feature-copy stack enter-from-left">
        <h2>
          Send crypto with <span className="text-gradient">confidence.</span>
        </h2>
        <p>
          Send and receive digital assets using wallet addresses or QR codes, with every
          transaction clearly presented before you confirm.
        </p>
        <div className="feature-tags">
          <span className="badge">
            <QrMiniIcon />
            Address &amp; QR support
          </span>
          <span className="badge badge-new">
            <ClockMiniIcon />
            Fees shown upfront
          </span>
        </div>
      </div>

      <div className="send-phone-wrap enter-from-right">
        <div className="send-phone-coins" aria-hidden="true">
          {SEND_PHONE_COINS.map((coin) => (
            <span
              key={coin.symbol}
              className="coin-chip send-phone-coin"
              style={
                {
                  background: coin.color,
                  top: coin.top,
                  left: coin.left,
                  width: coin.size,
                  height: coin.size,
                  animationDelay: `${coin.delay}s`,
                } as React.CSSProperties
              }
            >
              <CoinIcon symbol={coin.symbol} />
            </span>
          ))}
        </div>
        <img
          className="send-phone-image"
          src={walletAppPhone}
          alt="CoinStep wallet app home screen showing total balance, quick actions, and a list of assets"
        />
      </div>
    </section>
  )
}

/* ---- Feature: Transaction history ---- */

function SwapIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path d="M4 9 H16 M16 9 L12.5 5.5 M16 9 L12.5 12.5" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 15 H8 M8 15 L11.5 11.5 M8 15 L11.5 18.5" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DocIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path d="M7 3.5 H14.5 L18 7 V20.5 H7 Z" stroke="var(--color-accent)" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9.5 12 h5 M9.5 15.5 h5 M9.5 8.5 h2.5" stroke="var(--color-accent)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M12 3 L19 6 V11 C19 16 16 19.5 12 21 C8 19.5 5 16 5 11 V6 Z"
        stroke="var(--color-accent)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M8.5 12 L11 14.5 L15.5 9.5" stroke="var(--color-accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function TxArrowIcon({ direction }: { direction: 'sent' | 'received' }) {
  return direction === 'sent' ? (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M7 17 L17 7 M9 7 H17 V15" stroke="var(--color-ink)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M17 7 L7 17 M15 17 H7 V9" stroke="var(--color-signal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function StatusIcon({ status }: { status: 'confirmed' | 'pending' }) {
  return status === 'confirmed' ? (
    <svg viewBox="0 0 24 24" className="history-status-icon" fill="none" aria-hidden="true">
      <path d="M5 12.5 L10 17 L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" className="history-status-icon" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7.5 V12 L15.2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

type Transaction = {
  id: number
  direction: 'sent' | 'received'
  asset: string
  address: string
  amount: string
  status: 'confirmed' | 'pending'
}

const TRANSACTIONS: Transaction[] = [
  { id: 1, direction: 'sent', asset: 'ETH', address: '0x7a...3f9B', amount: '-0.2500 ETH', status: 'confirmed' },
  { id: 2, direction: 'received', asset: 'ETH', address: '0x91...c2Ae', amount: '+0.0820 ETH', status: 'confirmed' },
  { id: 3, direction: 'sent', asset: 'ETH', address: '0x4d...8B11', amount: '-0.5000 ETH', status: 'pending' },
  { id: 4, direction: 'received', asset: 'USDC', address: '0x2e...7C04', amount: '+350.00 USDC', status: 'confirmed' },
]

const HISTORY_STEPS = [
  {
    title: 'You send or receive',
    desc: 'Every transfer in or out of your wallet is captured the moment it hits the network.',
    icon: <SwapIcon />,
  },
  {
    title: 'It lands in your history',
    desc: 'Direction, asset, amount and counterparty address are recorded as a clear, readable entry.',
    icon: <DocIcon />,
  },
  {
    title: 'Confirmed on-chain',
    desc: 'Pending entries update to Confirmed once the network verifies the block — no guesswork.',
    icon: <ShieldCheckIcon />,
  },
]

function TransactionHistoryBlock() {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <section ref={ref} className={`feature-block${inView ? ' in-view' : ''}`}>
      <div className="feature-copy stack enter-from-left">
        <h2>Every transaction, accounted for</h2>
        <p>
          Your history reads like a ledger — sent, received, pending and confirmed — so you
          always know exactly where your assets stand.
        </p>

        <ul className="history-steps">
          {HISTORY_STEPS.map((step) => (
            <li key={step.title} className="history-step">
              <span className="history-step-icon">{step.icon}</span>
              <div>
                <p className="history-step-title">{step.title}</p>
                <p className="history-step-desc">{step.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="surface history-card enter-from-right">
        <div className="history-card-head">
          <span className="history-card-title">Transaction history</span>
          <span className="history-live">
            <span className="history-live-dot" aria-hidden="true" />
            Live
          </span>
        </div>

        <ul className="history-list">
          {TRANSACTIONS.map((tx, i) => (
            <li key={tx.id} className="history-row" style={{ '--i': i } as React.CSSProperties}>
              <span
                className={`history-row-icon${tx.direction === 'received' ? ' is-received' : ''}`}
                aria-hidden="true"
              >
                <TxArrowIcon direction={tx.direction} />
              </span>
              <div className="history-row-info">
                <span className="history-row-name">
                  {tx.direction === 'sent' ? 'Sent' : 'Received'} {tx.asset}
                </span>
                <span className="history-row-address muted">
                  {tx.direction === 'sent' ? 'To' : 'From'} {tx.address}
                </span>
              </div>
              <div className="history-row-amounts">
                <span className={`history-row-amount${tx.direction === 'received' ? ' is-positive' : ''}`}>
                  {tx.amount}
                </span>
                <span className={`history-status${tx.status === 'pending' ? ' is-pending' : ''}`}>
                  <StatusIcon status={tx.status} />
                  {tx.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Features() {
  return (
    <div className="page container">
      <IntroHero />

      <AssetsBlock />
      <SendBlock />

      <TransactionHistoryBlock />
    </div>
  )
}