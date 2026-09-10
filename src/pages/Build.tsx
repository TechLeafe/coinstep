import type { ReactNode } from "react";
import { LinkButton } from "../components/Button";


const BUILD_FEATURES = [
  ["↗", "wallet", "Wallet Integration",
    "Connect your dApp with CoinStep and let users interact with their blockchain assets."],
  ["</>", "developer", "Developer APIs",
    "Build blockchain-powered applications using simple and reliable APIs."],
  ["◎", "network", "Multi-Chain Support",
    "Build applications that work across supported blockchain networks."],
  ["✓", "security", "Secure Transactions",
    "Give users clear transaction details and confirmation flows."],
  ["▣", "mobile", "Mobile & Web",
    "Create Web3 experiences for both mobile and web applications."],
  ["✚", "dapp", "dApp Integration",
    "Connect CoinStep with decentralized applications and Web3 services."],
] as const;

// [icon, title, text]
const TRUST_ITEMS = [
  ["♧", "Trusted by", "developers worldwide"],
  ["</>", "Reliable &", "scalable infrastructure"],
  ["ϟ", "Build the next", "generation of Web3"],
] as const;

// [icon, name, symbol, amount]
const ASSETS = [
  ["Ξ", "Ethereum", "ETH", "2.45"],
  ["₿", "Bitcoin", "BTC", "0.18"],
  ["S", "Solana", "SOL", "12.54"],
] as const;

const SDK_ITEMS = ["REST API", "Webhooks", "Developer Docs"];

// [className, right, top]
const BLOCKS = [
  ["block-one", 275, 65],
  ["block-two", 205, 155],
  ["block-three", 275, 250],
  ["block-four", 175, 330],
] as const;

// [name, rotation]
const NET_LINES = [
  ["top", -90],
  ["left", 180],
  ["right", 0],
  ["bottom", 90],
] as const;

const BARS = [25, 45, 35, 70, 90];
const ORBITS = ["one", "two", "three"];
const CONNECTIONS = ["one", "two", "three", "four"];
const ACCENT = "var(--color-accent)";

const CHART_D =
  "M0 60 C20 58 22 48 40 52 S62 35 78 42 S98 22 115 32 S135 12 150 23 S174 8 200 12";

const dots = (n: number) => Array.from({ length: n }, (_, i) => <i key={i} />);
const ring = (deg: number) => ({ transform: `translate(-45px, -22px) rotate(${deg}deg)` });

/* -------------------------------------------------------
   FEATURE CARD VISUALS — lookup map replaces 6 branches
------------------------------------------------------- */

const VISUALS: Record<string, ReactNode> = {
  wallet: (
    <div className="wallet-illustration">
      <div className="wallet-back" />
      <div className="wallet-front">
        <span>◆</span>
        <b>COINSTEP</b>
      </div>
      <div className="wallet-chip" />
    </div>
  ),

  developer: (
    <div className="developer-illustration">
      <div className="dev-window">
        <div className="dev-dots">{dots(3)}</div>
        <div className="code-line line-one">
          <span>&lt;</span>Code
        </div>
        <div className="code-line line-two">
          Build<span>/&gt;</span>
        </div>
        <div className="code-line line-three">
          <span>API</span> Connected
        </div>
      </div>
    </div>
  ),

  network: (
    <div className="network-illustration">
      <span className="network-node node-center">◆</span>
      <span className="network-node node-top">Ξ</span>
      <span className="network-node node-left">₿</span>
      <span className="network-node node-right">S</span>
      <span className="network-node node-bottom">◎</span>

      {NET_LINES.map(([name, deg]) => (
        <i
          className={`network-line line-${name}`}
          style={{ transform: `rotate(${deg}deg)` }}
          key={name}
        />
      ))}
    </div>
  ),

  security: (
    <div className="security-illustration">
      <div className="security-shield">
        <span>✓</span>
      </div>

      {[25, -25].map((deg) => (
        <div
          className="security-orbit"
          style={{ transform: `rotate(${deg}deg)` }}
          key={deg}
        />
      ))}
    </div>
  ),

  mobile: (
    <div className="mobile-illustration">
      <div className="mobile-device">
        <div className="mobile-notch" />

        <div className="mobile-screen">
          <span className="screen-balance">$12,458</span>

          <div className="screen-chart">
            {BARS.map((h) => (
              <i style={{ height: `${h}%` }} key={h} />
            ))}
          </div>

          <div className="screen-button">↗</div>
        </div>
      </div>

      <div className="mobile-floating-card">
        <span>✓</span>
        Connected
      </div>
    </div>
  ),

  dapp: (
    <div className="dapp-illustration">
      <div className="dapp-core">
        <span>◆</span>
      </div>

      {[0, 60, -60].map((deg) => (
        <div className="dapp-circle" style={ring(deg)} key={deg} />
      ))}

      <span className="dapp-symbol symbol-one">&lt;/&gt;</span>
      <span className="dapp-symbol symbol-two">◎</span>
      <span className="dapp-symbol symbol-three">↗</span>
    </div>
  ),
};

function FeatureVisual({ type }: { type: string }) {
  return (
    <div className={`feature-visual feature-visual-${type}`}>
      <div className="visual-ring ring-one" />
      <div className="visual-ring ring-two" />
      {VISUALS[type]}
    </div>
  );
}

/* -------------------------------------------------------
   BLOCKCHAIN HERO VISUAL
------------------------------------------------------- */

function BlockchainVisual() {
  return (
    <div className="build-visual">
      <div className="visual-glow glow-one" />
      <div className="visual-glow glow-two" />

      {ORBITS.map((name) => (
        <div className={`orbit orbit-${name}`} key={name} />
      ))}

      {CONNECTIONS.map((name) => (
        <div className={`connection connection-${name}`} key={name}>
          <i />
        </div>
      ))}

      {BLOCKS.map(([className, right, top]) => (
        <div className={`block ${className}`} style={{ right, top }} key={className}>
          ◆
        </div>
      ))}

      {Array.from({ length: 8 }, (_, i) => (
        <span className={`data-particle particle-${i + 1}`} key={i} />
      ))}

      <div className="code-card floating-card">
        <div className="code-icon">&lt;/&gt;</div>
        <strong>Build</strong>
        <span>Integrate</span>
        <span>Scale</span>
        <small>● API Connected</small>
      </div>

      <div className="phone-wrapper">
        <div className="phone-shadow" />

        <div className="phone">
          <div className="phone-reflection" />
          <div className="phone-notch" />

          <div className="phone-header">
            <b>
              <span>C</span>
              CoinStep
            </b>
            <small>● LIVE</small>
          </div>

          <div className="phone-balance">
            <small>TOTAL BALANCE</small>
            <strong>$12,458.32</strong>
            <em>↑ 8.42%</em>
          </div>

          <div className="phone-chart">
            <div className="chart-title">
              <span>Portfolio</span>
              <span>24H</span>
            </div>

            <svg viewBox="0 0 200 70">
              <defs>
                <linearGradient id="chartLine">
                  <stop offset="0%" style={{ stopColor: ACCENT }} />
                  <stop offset="100%" style={{ stopColor: ACCENT }} />
                </linearGradient>

                <linearGradient id="chartArea" x2="0" y2="1">
                  <stop offset="0%" style={{ stopColor: ACCENT, stopOpacity: 0.28 }} />
                  <stop offset="100%" style={{ stopColor: ACCENT, stopOpacity: 0 }} />
                </linearGradient>
              </defs>

              <path
                className="chart-area"
                fill="url(#chartArea)"
                d={`${CHART_D} L200 70 L0 70Z`}
              />

              <path className="chart-path" stroke="url(#chartLine)" d={CHART_D} />

              <circle cx="200" cy="12" r="3" />
            </svg>
          </div>

          <div className="phone-assets">
            {ASSETS.map(([icon, name, symbol, amount]) => (
              <div className="asset-row" key={name}>
                <span className="asset-icon">{icon}</span>

                <div>
                  <strong>{name}</strong>
                  <small>{symbol}</small>
                </div>

                <b>{amount}</b>
              </div>
            ))}
          </div>

          <div className="phone-nav">
            <span className="active">⌂</span>
            <span>◉</span>
            <span>↗</span>
            <span>⚙</span>
          </div>
        </div>
      </div>

      <div className="sdk-card floating-card">
        <div className="sdk-title">
          <span>◆</span>
          <strong>Wallet SDK</strong>
          <small>LIVE</small>
        </div>

        {SDK_ITEMS.map((item) => (
          <div className="sdk-item" key={item}>
            <span>{item}</span>
            <i />
          </div>
        ))}
      </div>

      <div className="transaction-card floating-card">
        <span>↗</span>

        <div>
          <strong>Transaction</strong>
          <small>Confirmed</small>
        </div>

        <b>+0.42 ETH</b>
      </div>

      <div className="visual-caption">
        <span>POWERED BY</span>
        <strong>COINSTEP WEB3</strong>
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   BUILD PAGE
------------------------------------------------------- */

export function Build() {
  return (
    <main className="build-page">
      {/* HERO */}
      <section className="build-hero container">
        <div className="build-hero-content">
          <span className="build-eyebrow">BUILD A MORE OPEN WEB</span>

          <h1>
            Build with <span>CoinStep</span>
          </h1>

          <p className="build-description">
            Create powerful blockchain experiences with CoinStep&apos;s wallet and
            Web3 infrastructure.
          </p>

          <div className="build-actions">
            <LinkButton href="#developer-tools" size="lg">
              Start Building →
            </LinkButton>

            <LinkButton href="#developer-tools" variant="secondary" size="lg">
              ▣ View Documentation
            </LinkButton>
          </div>

          <div className="trust-row">
            {TRUST_ITEMS.map(([icon, title, text]) => (
              <div className="trust-item" key={title}>
                <span className="trust-icon">{icon}</span>

                <div>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </div>
              </div>
            ))}
          </div>
        </div>

        <BlockchainVisual />
      </section>

      {/* FEATURES */}
      <section className="developer-section container" id="developer-tools">
        <div className="developer-heading">
          <span className="build-eyebrow">DEVELOPER TOOLS FOR A BRIGHTER WEB3</span>

          <h2>Everything You Need to Build</h2>

          <p>
            Powerful tools, flexible integrations, and secure infrastructure to help
            you bring your ideas to life.
          </p>
        </div>

        <div className="build-feature-grid">
          {BUILD_FEATURES.map(([icon, visual, title, description]) => (
            <article className="build-feature-card" key={title}>
              <FeatureVisual type={visual} />

              <div className="feature-content">
                <div className="feature-heading">
                  <span className="feature-icon">{icon}</span>
                  <h3>{title}</h3>
                </div>

                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style>{`
        /* =====================================================
           BASE + REUSABLE COLOR TOKENS
           Every repeated color-mix() is declared once here.
        ===================================================== */

        .build-page {
          position: relative;
          overflow: hidden;
          --a9:  color-mix(in srgb, var(--color-accent) 9%, transparent);
          --a12: color-mix(in srgb, var(--color-accent) 12%, transparent);
          --a14s:color-mix(in srgb, var(--color-accent) 14%, var(--color-surface));
          --a15: color-mix(in srgb, var(--color-accent) 15%, transparent);
          --a16: color-mix(in srgb, var(--color-accent) 16%, transparent);
          --a18: color-mix(in srgb, var(--color-accent) 18%, transparent);
          --a20: color-mix(in srgb, var(--color-accent) 20%, transparent);
          --a25: color-mix(in srgb, var(--color-accent) 25%, transparent);
          --a28: color-mix(in srgb, var(--color-accent) 28%, transparent);
          --a32: color-mix(in srgb, var(--color-accent) 32%, transparent);
          --a55: color-mix(in srgb, var(--color-accent) 55%, transparent);
          --a70: color-mix(in srgb, var(--color-accent) 70%, transparent);
          --i7:  color-mix(in srgb, var(--color-ink) 7%, transparent);
          --i12: color-mix(in srgb, var(--color-ink) 12%, transparent);
          --i15: color-mix(in srgb, var(--color-ink) 15%, transparent);
          --i18: color-mix(in srgb, var(--color-ink) 18%, transparent);
          --s90: color-mix(in srgb, var(--color-surface) 90%, transparent);
        }

        .build-hero {
          min-height: 650px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 2rem;
          padding-block: 3.5rem;
        }

        .build-hero-content { position: relative; z-index: 20; }

        .build-eyebrow {
          display: inline-block;
          margin-bottom: .8rem;
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          letter-spacing: .18em;
          color: var(--color-accent);
        }

        .build-hero h1 {
          max-width: 600px;
          margin: 0 0 1rem;
          font-size: clamp(2.5rem, 4.5vw, 4rem);
          line-height: 1;
          letter-spacing: -.045em;
        }

        .build-hero h1 span { color: var(--color-accent); }

        .build-description {
          max-width: 560px;
          margin-bottom: 1.8rem;
          font-size: clamp(1rem, 1.3vw, 1.2rem);
          line-height: 1.6;
          color: var(--color-ink-soft);
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .build-actions {
          display: flex;
          align-items: center;
          gap: .7rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .build-actions > * { flex-shrink: 0; }

        .build-actions .btn { font-size: .8rem; padding: .6rem .9rem; }

        /* =====================================================
           TRUST
        ===================================================== */

        .trust-row { display: flex; flex-wrap: wrap; gap: 1.5rem; }

        .trust-item { display: flex; align-items: center; gap: .65rem; }

        .trust-icon,
        .feature-icon {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          background: var(--color-accent-soft);
          color: var(--color-accent);
          font-family: var(--font-mono);
        }

        .trust-icon {
          width: 38px;
          height: 38px;
          border: 1px solid var(--color-border);
          border-radius: 11px;
        }

        .trust-item strong,
        .trust-item small { display: block; }

        .trust-item strong { font-size: .90rem; }

        .trust-item small { color: var(--color-ink-faint); font-size: .80rem; }

        /* =====================================================
           HERO VISUAL
        ===================================================== */

        .build-visual {
          position: relative;
          width: 100%;
          height: 570px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
        }

        .visual-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(65px);
          pointer-events: none;
          background: var(--color-accent);
        }

        .glow-one {
          width: 360px;
          height: 360px;
          right: 30px;
          top: 70px;
          opacity: .16;
          animation: glow 5s ease-in-out infinite;
        }

        .glow-two {
          width: 220px;
          height: 220px;
          left: 30px;
          bottom: 70px;
          opacity: .1;
          animation: glow 6s ease-in-out infinite reverse;
        }

        @keyframes glow {
          50% { transform: scale(1.2); opacity: .28; }
        }

        /* =====================================================
           ORBITS
        ===================================================== */

        .orbit {
          position: absolute;
          left: 50%;
          border: 1px solid var(--a32);
          border-radius: 50%;
          pointer-events: none;
        }

        .orbit-one {
          width: 440px;
          height: 215px;
          top: 150px;
          margin-left: -220px;
          transform: rotate(-18deg);
          animation: orbitOne 12s linear infinite;
        }

        .orbit-two {
          width: 360px;
          height: 170px;
          top: 175px;
          margin-left: -180px;
          transform: rotate(30deg);
          animation: orbitTwo 9s linear infinite reverse;
        }

        .orbit-three {
          width: 520px;
          height: 250px;
          top: 130px;
          margin-left: -260px;
          border-style: dashed;
          animation: orbitThree 20s linear infinite;
        }

        @keyframes orbitOne   { to { rotate: 342deg; } }
        @keyframes orbitTwo   { to { rotate: 390deg; } }
        @keyframes orbitThree { to { rotate: 360deg; } }

        /* =====================================================
           CONNECTIONS
        ===================================================== */

        .connection {
          position: absolute;
          width: 190px;
          height: 1px;
          left: 50%;
          margin-left: -95px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--color-accent),
            transparent
          );
          transform-origin: left;
          opacity: .65;
        }

        .connection i {
          position: absolute;
          width: 6px;
          height: 6px;
          left: 0;
          top: -2px;
          border-radius: 50%;
          background: var(--color-accent);
          box-shadow: 0 0 14px var(--color-accent);
          animation: connectionParticle 2.5s linear infinite;
        }

        .connection-one   { top: 120px; rotate: 35deg; }
        .connection-two   { top: 210px; rotate: 145deg; }
        .connection-three { top: 300px; rotate: -30deg; }
        .connection-four  { top: 270px; rotate: 90deg; }

        .connection-two i   { animation-delay: .4s; }
        .connection-three i { animation-delay: .8s; }
        .connection-four i  { animation-delay: 1.2s; }

        @keyframes connectionParticle {
          from      { left: 0; opacity: 0; }
          20%, 80%  { opacity: 1; }
          to        { left: 100%; opacity: 0; }
        }

        /* =====================================================
           BLOCKS
        ===================================================== */

        .block {
          position: absolute;
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          background: linear-gradient(
            135deg,
            var(--color-accent),
            var(--color-signal)
          );
          color: var(--color-accent-ink);
          box-shadow: 0 0 25px var(--a55);
          rotate: 30deg;
          z-index: 6;
          animation:
            blockFloat 3.5s ease-in-out infinite,
            blockPulse 3s ease-in-out infinite;
        }

        .block-two   { animation-delay: .6s; }
        .block-three { animation-delay: 1.2s; }
        .block-four  { animation-delay: 1.8s; }

        @keyframes blockFloat {
          50% { translate: 0 -14px; }
        }

        @keyframes blockPulse {
          50% { box-shadow: 0 0 35px var(--a70); }
        }

        /* =====================================================
           PARTICLES
        ===================================================== */

        .data-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--color-accent);
          box-shadow: 0 0 10px var(--color-accent);
          animation: dataFloat 4s ease-in-out infinite;
        }

        .particle-1 { left: 15%; top: 20%; }
        .particle-2 { left: 78%; top: 10%; animation-delay: .5s; }
        .particle-3 { left: 10%; top: 55%; animation-delay: 1s; }
        .particle-4 { left: 88%; top: 50%; animation-delay: 1.5s; }
        .particle-5 { left: 25%; top: 75%; animation-delay: 2s; }
        .particle-6 { left: 72%; top: 80%; animation-delay: 2.5s; }
        .particle-7 { left: 48%; top: 12%; animation-delay: 1.2s; }
        .particle-8 { left: 90%; top: 75%; animation-delay: 2.8s; }

        @keyframes dataFloat {
          50% { translate: 0 -15px; opacity: .35; scale: 1.5; }
        }

        /* =====================================================
           FLOATING CARDS
        ===================================================== */

        .floating-card {
          position: absolute;
          padding: 1rem;
          border: 1px solid var(--color-border);
          border-radius: 14px;
          background: var(--s90);
          backdrop-filter: blur(16px);
          box-shadow: var(--shadow-md);
          z-index: 8;
        }

        .code-card {
          left: 2%;
          top: 155px;
          width: 105px;
          display: flex;
          flex-direction: column;
          animation: cardFloat 4s ease-in-out infinite;
        }

        .code-icon {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          margin-bottom: .5rem;
          border-radius: 9px;
          color: var(--color-accent);
          background: var(--a14s);
        }

        .code-card strong { font-size: .72rem; }

        .code-card span { color: var(--color-ink-faint); font-size: .55rem; margin-top: 3px; }

        .code-card small { margin-top: .6rem; color: var(--color-accent); font-size: .45rem; }

        @keyframes cardFloat {
          50% { translate: 0 -10px; }
        }

        /* =====================================================
           PHONE
        ===================================================== */

        .phone-wrapper {
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 10;
          width: 210px;
          height: 420px;
          transform: translate(-50%, -50%);
          animation: phoneFloat 5s ease-in-out infinite;
        }

        .phone {
          position: relative;
          width: 210px;
          height: 420px;
          padding: 7px;
          overflow: hidden;
          border: 2px solid var(--color-border);
          border-radius: 32px;
          background: linear-gradient(
            145deg,
            var(--color-surface),
            var(--color-bg-raised)
          );
          box-shadow:
            0 30px 65px var(--i18),
            0 0 45px var(--a28);
          rotate: 6deg;
          animation: phoneTilt 6s ease-in-out infinite;
        }

        @keyframes phoneFloat {
          0%, 100% { transform: translate(-50%, -50%); }
          50%      { transform: translate(-50%, calc(-50% - 14px)); }
        }

        @keyframes phoneTilt {
          0%, 100% { rotate: 6deg; }
          50%      { rotate: 9deg; }
        }

        .phone-reflection {
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, var(--i7), transparent 28%);
          pointer-events: none;
          z-index: 5;
        }

        .phone-notch {
          position: absolute;
          width: 75px;
          height: 18px;
          left: 50%;
          top: 8px;
          translate: -50% 0;
          border-radius: 20px;
          background: var(--color-ink);
          z-index: 6;
        }

        .phone-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 25px 5px 20px;
          color: var(--color-ink);
          font-size: .55rem;
        }

        .phone-header b { display: flex; align-items: center; gap: 4px; }

        .phone-header b span {
          display: grid;
          place-items: center;
          width: 17px;
          height: 17px;
          border-radius: 50%;
          background: var(--color-accent);
          color: var(--color-accent-ink);
        }

        .phone-header small { color: var(--color-signal); font-size: .42rem; }

        .phone-balance small { display: block; color: var(--color-ink-faint); font-size: .45rem; }

        .phone-balance strong {
          display: block;
          margin: 4px 0;
          color: var(--color-ink);
          font-size: 1.3rem;
        }

        .phone-balance em { color: var(--color-signal); font-size: .5rem; font-style: normal; }

        .phone-chart { margin: 10px 0; }

        .chart-title {
          display: flex;
          justify-content: space-between;
          color: var(--color-ink-faint);
          font-size: .45rem;
        }

        .phone-chart svg { width: 100%; height: 85px; }

        .chart-path {
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-dasharray: 300;
          animation: chart 3s linear infinite;
        }

        .chart-area { opacity: .65; }

        .phone-chart circle { fill: var(--color-accent); filter: drop-shadow(0 0 5px var(--color-accent)); animation: chartDot 1.5s ease-in-out infinite; }

        @keyframes chart {
          from { stroke-dashoffset: 300; }
          to   { stroke-dashoffset: 0; }
        }

        @keyframes chartDot {
          50% { scale: 1.5; }
        }

        .asset-row {
          display: grid;
          grid-template-columns: 25px 1fr auto;
          align-items: center;
          gap: 7px;
          padding: 7px 0;
          border-top: 1px solid var(--color-border);
          color: var(--color-ink);
        }

        .asset-icon {
          width: 22px;
          height: 22px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: var(--color-accent-soft);
          color: var(--color-accent);
          font-size: .65rem;
        }

        .asset-row strong,
        .asset-row small { display: block; }

        .asset-row strong { font-size: .48rem; }

        .asset-row small { color: var(--color-ink-faint); font-size: .4rem; }

        .asset-row > b { color: var(--color-ink); font-size: .45rem; }

        .phone-nav {
          display: flex;
          justify-content: space-around;
          margin-top: 5px;
          padding-top: 8px;
          border-top: 1px solid var(--color-border);
          color: var(--color-ink-faint);
          font-size: .65rem;
        }

        .phone-nav .active { color: var(--color-accent); }

        .phone-shadow {
          position: absolute;
          width: 270px;
          height: 35px;
          left: 50%;
          bottom: -25px;
          translate: -50% 0;
          border-radius: 50%;
          background: var(--a25);
          filter: blur(12px);
          animation: shadowPulse 4s ease-in-out infinite;
        }

        @keyframes shadowPulse {
          50% { scale: 1.1; opacity: .65; }
        }

        /* =====================================================
           SDK
        ===================================================== */

        .sdk-card {
          right: 2%;
          top: 125px;
          width: 130px;
          animation: cardFloat 4s 1s ease-in-out infinite;
        }

        .sdk-title {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 10px;
        }

        .sdk-title span { color: var(--color-accent); }

        .sdk-title strong { font-size: .55rem; }

        .sdk-title small { margin-left: auto; color: var(--color-accent); font-size: .4rem; }

        .sdk-item {
          display: flex;
          justify-content: space-between;
          padding: 5px 0;
          border-top: 1px solid var(--color-border);
          color: var(--color-ink-soft);
          font-size: .48rem;
        }

        .sdk-item i {
          width: 5px;
          height: 5px;
          margin-top: 3px;
          border-radius: 50%;
          background: var(--color-accent);
          box-shadow: 0 0 7px var(--color-accent);
          animation: sdkDot 1.5s ease-in-out infinite;
        }

        @keyframes sdkDot {
          50% { scale: 1.7; opacity: .5; }
        }

        /* =====================================================
           TRANSACTION
        ===================================================== */

        .transaction-card {
          left: 8%;
          bottom: 55px;
          display: flex;
          align-items: center;
          gap: 8px;
          animation: cardFloat 4s 1.5s ease-in-out infinite;
        }

        .transaction-card > span {
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;
          border-radius: 9px;
          background: var(--a14s);
          color: var(--color-accent);
        }

        .transaction-card strong,
        .transaction-card small { display: block; }

        .transaction-card strong { font-size: .55rem; }

        .transaction-card small { color: var(--color-signal); font-size: .45rem; }

        .transaction-card > b { margin-left: 10px; color: var(--color-accent); font-size: .5rem; }

        .visual-caption {
          position: absolute;
          right: 15px;
          bottom: 0;
          display: flex;
          flex-direction: column;
          text-align: right;
          rotate: -6deg;
        }

        .visual-caption span,
        .visual-caption strong { font-family: var(--font-mono); }

        .visual-caption span { color: var(--color-ink-faint); font-size: .4rem; }

        .visual-caption strong { color: var(--color-accent); font-size: .5rem; }

        /* =====================================================
           DEVELOPER SECTION
        ===================================================== */

        .developer-section { padding-block: 5rem 8rem; }

        .developer-heading { max-width: 700px; margin: 0 auto 3rem; text-align: center; }

        .developer-heading h2 { margin: 0 0 .8rem; font-size: clamp(2rem, 4vw, 3rem); }

        .developer-heading p {
          max-width: 620px;
          margin: auto;
          color: var(--color-ink-soft);
          line-height: 1.6;
        }

        /* =====================================================
           IMAGE STYLE FEATURE CARDS
           No hard-coded background color — theme owns surface.
        ===================================================== */

        .build-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }

        .build-feature-card {
          position: relative;
          min-height: 420px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid var(--color-border);
          border-radius: 28px;
          background: var(--color-surface);
          box-shadow: var(--shadow-sm);
          transition:
            transform .35s ease,
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .build-feature-card:hover { transform: translateY(-8px); border-color: var(--color-accent); box-shadow: var(--shadow-md); }

        /* =====================================================
           FEATURE ILLUSTRATION AREA
           No background-color — works in light and dark mode.
        ===================================================== */

        .feature-visual {
          position: relative;
          height: 235px;
          display: grid;
          place-items: center;
          overflow: hidden;
          border-bottom: 1px solid var(--color-border);
        }

        .feature-visual::after {
          content: "";
          position: absolute;
          width: 170px;
          height: 170px;
          border-radius: 50%;
          border: 1px solid var(--a15);
          pointer-events: none;
        }

        .visual-ring {
          position: absolute;
          border: 1px solid var(--a18);
          border-radius: 50%;
          transform: rotate(var(--tilt));
          animation: ringSpin var(--spin) linear infinite;
          will-change: transform;
        }

        /* Orbit rings keep their original tilt as the animation start angle,
           then rotate a full turn — opposite directions, different speeds. */
        .ring-one {
          width: 230px;
          height: 100px;
          --tilt: -20deg;
          --spin: 24s;
        }

        .ring-two {
          width: 170px;
          height: 75px;
          --tilt: 30deg;
          --spin: 18s;
          animation-direction: reverse;
        }

        @keyframes ringSpin {
          from { transform: rotate(var(--tilt)); }
          to   { transform: rotate(calc(var(--tilt) + 360deg)); }
        }

        /* The card's outer circle breathes so the orbit feels alive. */
        .feature-visual::after {
          animation: ringPulse 6s ease-in-out infinite;
        }

        @keyframes ringPulse {
          50% { scale: 1.06; opacity: .6; }
        }

        .build-feature-card:hover .ring-one,
        .build-feature-card:hover .ring-two {
          animation-duration: 8s;
        }

        /* =====================================================
           WALLET
        ===================================================== */

        .wallet-illustration {
          position: relative;
          width: 145px;
          height: 100px;
          transform: rotate(-8deg);
        }

        .wallet-back,
        .wallet-front {
          position: absolute;
          width: 130px;
          height: 78px;
          border: 2px solid var(--color-accent);
          border-radius: 17px;
          box-shadow: 0 15px 30px var(--a18);
        }

        .wallet-back { left: 7px; top: 5px; transform: rotate(8deg); }

        .wallet-front {
          left: 0;
          top: 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          background: var(--a9);
        }

        .wallet-front span { color: var(--color-accent); font-size: 1.5rem; }

        .wallet-front b { font-size: .55rem; letter-spacing: .12em; }

        .wallet-chip {
          position: absolute;
          width: 25px;
          height: 18px;
          right: 18px;
          bottom: 22px;
          border: 1px solid var(--color-accent);
          border-radius: 6px;
        }

        /* =====================================================
           DEVELOPER
        ===================================================== */

        .developer-illustration { position: relative; width: 155px; }

        .dev-window {
          padding: 14px;
          border: 1px solid var(--color-border);
          border-radius: 16px;
          box-shadow: 0 20px 35px var(--i12);
        }

        .dev-dots { display: flex; gap: 5px; margin-bottom: 14px; }

        .dev-dots i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-accent);
        }

        .code-line {
          margin: 8px 0;
          font-family: var(--font-mono);
          font-size: .58rem;
          color: var(--color-ink-soft);
        }

        .code-line span { color: var(--color-accent); }

        .line-two   { padding-left: 15px; }
        .line-three { padding-left: 28px; }

        /* =====================================================
           NETWORK
        ===================================================== */

        .network-illustration { position: relative; width: 180px; height: 150px; }

        .network-node {
          position: absolute;
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border: 1px solid var(--color-accent);
          border-radius: 50%;
          color: var(--color-accent);
          font-size: .75rem;
          z-index: 2;
          box-shadow: 0 8px 25px var(--a16);
        }

        .node-center { left: 71px; top: 55px; background: var(--a12); }

        .node-top    { left: 71px; top: 0; }
        .node-left   { left: 5px; top: 55px; }
        .node-right  { right: 5px; top: 55px; }
        .node-bottom { left: 71px; bottom: 0; }

        .network-line {
          position: absolute;
          width: 65px;
          height: 1px;
          left: 58px;
          top: 73px;
          transform-origin: left;
          background: var(--color-accent);
          opacity: .45;
        }

        /* =====================================================
           SECURITY
        ===================================================== */

        .security-illustration {
          position: relative;
          width: 150px;
          height: 160px;
          display: grid;
          place-items: center;
        }

        .security-shield {
          position: relative;
          width: 95px;
          height: 110px;
          display: grid;
          place-items: center;
          clip-path: polygon(
            50% 0%,
            90% 15%,
            84% 68%,
            50% 100%,
            16% 68%,
            10% 15%
          );
          border: 2px solid var(--color-accent);
          color: var(--color-accent);
          font-size: 2rem;
          filter: drop-shadow(0 15px 25px var(--a20));
        }

        .security-orbit {
          position: absolute;
          width: 140px;
          height: 45px;
          border: 1px solid var(--color-accent);
          border-radius: 50%;
          opacity: .35;
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        .mobile-illustration { position: relative; width: 150px; height: 170px; }

        .mobile-device {
          position: absolute;
          left: 32px;
          width: 85px;
          height: 155px;
          padding: 6px;
          border: 2px solid var(--color-border);
          border-radius: 20px;
          transform: rotate(-7deg);
          box-shadow: 0 20px 35px var(--i15);
        }

        .mobile-notch {
          width: 35px;
          height: 7px;
          margin: 2px auto 8px;
          border-radius: 10px;
          background: var(--color-ink);
        }

        .mobile-screen { padding: 8px; }

        .screen-balance {
          display: block;
          margin-bottom: 10px;
          font-size: .55rem;
          font-weight: 700;
        }

        .screen-chart {
          height: 50px;
          display: flex;
          align-items: flex-end;
          gap: 5px;
        }

        .screen-chart i { width: 8px; border-radius: 5px 5px 0 0; background: var(--color-accent); }

        .screen-button {
          margin-top: 12px;
          padding: 6px;
          text-align: center;
          border: 1px solid var(--color-accent);
          border-radius: 8px;
          color: var(--color-accent);
          font-size: .55rem;
        }

        .mobile-floating-card {
          position: absolute;
          right: 0;
          bottom: 22px;
          padding: 7px 9px;
          border: 1px solid var(--color-border);
          border-radius: 10px;
          font-size: .48rem;
          backdrop-filter: blur(8px);
        }

        .mobile-floating-card span { margin-right: 4px; color: var(--color-accent); }

        /* =====================================================
           DAPP
        ===================================================== */

        .dapp-illustration { position: relative; width: 170px; height: 160px; }

        .dapp-core {
          position: absolute;
          left: 61px;
          top: 51px;
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border: 1px solid var(--color-accent);
          border-radius: 14px;
          color: var(--color-accent);
          z-index: 3;
        }

        .dapp-circle {
          position: absolute;
          left: 85px;
          top: 75px;
          width: 90px;
          height: 45px;
          border: 1px solid var(--color-accent);
          border-radius: 50%;
          transform-origin: center;
          opacity: .35;
        }

        .dapp-symbol {
          position: absolute;
          color: var(--color-accent);
          font-family: var(--font-mono);
          font-size: .65rem;
          z-index: 4;
        }

        .symbol-one   { left: 10px; top: 65px; }
        .symbol-two   { right: 10px; top: 65px; }
        .symbol-three { left: 78px; bottom: 5px; }

        /* =====================================================
           CARD CONTENT
        ===================================================== */

        .feature-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 1.35rem 1.4rem 1.5rem;
        }

        .feature-heading { display: flex; align-items: center; gap: .7rem; }

        .feature-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          font-size: .75rem;
        }

        .build-feature-card h3 {
          margin: 0;
          font-size: 1rem;
          line-height: 1.2;
          letter-spacing: -.02em;
        }

        .build-feature-card p {
          margin: .8rem 0 0;
          color: var(--color-ink-soft);
          font-size: .78rem;
          line-height: 1.65;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1100px) {
          .build-visual      { transform: scale(.9); }
          .code-card         { left: 0; }
          .sdk-card          { right: 0; }
          .transaction-card  { left: 3%; }
          .build-feature-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 900px) {
          .build-hero { grid-template-columns: 1fr; text-align: center; }

          .build-description { margin-inline: auto; }

          .build-actions,
          .trust-row { justify-content: center; }

          .build-visual {
            width: 100%;
            max-width: 680px;
            margin: auto;
            transform: none;
          }
        }

        @media (max-width: 650px) {
          .build-hero { padding-block: 2.5rem; }

          .build-hero h1 { font-size: clamp(2.3rem, 10vw, 3.2rem); }

          .build-actions { justify-content: center; }

          .trust-row {
            flex-direction: column;
            align-items: flex-start;
            width: max-content;
            margin: auto;
          }

          .build-visual {
            height: 500px;
            transform: scale(.78);
            transform-origin: top center;
            margin-bottom: -70px;
          }

          .code-card { left: 0; }
          .sdk-card  { right: 0; }

          .transaction-card { left: 2%; bottom: 50px; }

          .visual-caption { display: none; }

          .build-feature-grid { grid-template-columns: 1fr; }

          .build-feature-card { min-height: 390px; border-radius: 24px; }

          .feature-visual { height: 215px; }
        }

        @media (max-width: 420px) {
          .build-visual { transform: scale(.68); margin-bottom: -120px; }

          .build-feature-card { min-height: 370px; }
        }

        /* =====================================================
           ACCESSIBILITY
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .build-page *,
          .build-page *::before,
          .build-page *::after { animation: none !important; transition: none !important; }
        }
      `}</style>
    </main>
  );
}
