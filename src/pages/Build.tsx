import { LinkButton } from '../components/Button'

const BUILD_FEATURES = [
  ['↗', 'Wallet Integration', 'Connect your dApp with CoinStep and let users interact with their blockchain assets.'],
  ['</>', 'Developer APIs', 'Build blockchain-powered applications using simple and reliable APIs.'],
  ['◎', 'Multi-Chain Support', 'Build applications that work across supported blockchain networks.'],
  ['✓', 'Secure Transactions', 'Give users clear transaction details and confirmation flows.'],
  ['▣', 'Mobile & Web', 'Create Web3 experiences for both mobile and web applications.'],
  ['✚', 'dApp Integration', 'Connect CoinStep with decentralized applications and Web3 services.'],
]

const TRUST_ITEMS = [
  ['♧', 'Trusted by', 'developers worldwide'],
  ['</>', 'Reliable &', 'scalable infrastructure'],
  ['ϟ', 'Build the next', 'generation of Web3'],
]

const ASSETS = [
  ['Ξ', 'Ethereum', 'ETH', '2.45'],
  ['₿', 'Bitcoin', 'BTC', '0.18'],
  ['S', 'Solana', 'SOL', '12.54'],
]

const SDK_ITEMS = ['REST API', 'Webhooks', 'Developer Docs']

const BLOCKS = [
  ['block-one', 275, 65],
  ['block-two', 205, 155],
  ['block-three', 275, 250],
  ['block-four', 175, 330],
]

function BlockchainVisual() {
  return (
    <div className="build-visual">

      {/* Background animation */}
      <div className="visual-glow glow-one" />
      <div className="visual-glow glow-two" />

      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />

      {/* Animated connections */}
      {[
        'connection-one',
        'connection-two',
        'connection-three',
        'connection-four',
      ].map((item) => (
        <div className={`connection ${item}`} key={item}>
          <i />
        </div>
      ))}

      {/* Blockchain blocks */}
      {BLOCKS.map(([className, right, top]) => (
        <div
          className={`block ${className}`}
          style={{ right, top }}
          key={className}
        >
          ◆
        </div>
      ))}

      {/* Floating particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          className={`data-particle particle-${i + 1}`}
          key={i}
        />
      ))}

      {/* Build card */}
      <div className="code-card floating-card">

        <div className="code-icon">
          &lt;/&gt;
        </div>

        <strong>Build</strong>
        <span>Integrate</span>
        <span>Scale</span>

        <small>● API Connected</small>

      </div>

      {/* Phone */}
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

          {/* Chart */}
          <div className="phone-chart">

            <div className="chart-title">
              <span>Portfolio</span>
              <span>24H</span>
            </div>

            <svg viewBox="0 0 200 70">

              <defs>

                <linearGradient id="chartLine">
                  <stop
                    offset="0%"
                    className="chart-start"
                  />
                  <stop
                    offset="100%"
                    className="chart-end"
                  />
                </linearGradient>

                <linearGradient
                  id="chartArea"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    className="area-start"
                  />
                  <stop
                    offset="100%"
                    className="area-end"
                  />
                </linearGradient>

              </defs>

              <path
                className="chart-area"
                fill="url(#chartArea)"
                d="M0 60 C20 58 22 48 40 52 S62 35 78 42 S98 22 115 32 S135 12 150 23 S174 8 200 12 L200 70 L0 70Z"
              />

              <path
                className="chart-path"
                stroke="url(#chartLine)"
                d="M0 60 C20 58 22 48 40 52 S62 35 78 42 S98 22 115 32 S135 12 150 23 S174 8 200 12"
              />

              <circle
                cx="200"
                cy="12"
                r="3"
              />

            </svg>

          </div>

          {/* Assets */}
          <div className="phone-assets">

            {ASSETS.map(
              ([icon, name, symbol, amount], i) => (
                <div
                  className="asset-row"
                  key={name}
                >

                  <span
                    className={`asset-icon asset-${i}`}
                  >
                    {icon}
                  </span>

                  <div>
                    <strong>{name}</strong>
                    <small>{symbol}</small>
                  </div>

                  <b>{amount}</b>

                </div>
              )
            )}

          </div>

          {/* Phone navigation */}
          <div className="phone-nav">
            <span className="active">⌂</span>
            <span>◉</span>
            <span>↗</span>
            <span>⚙</span>
          </div>

        </div>
      </div>

      {/* SDK card */}
      <div className="sdk-card floating-card">

        <div className="sdk-title">

          <span>◆</span>

          <strong>Wallet SDK</strong>

          <small>LIVE</small>

        </div>

        {SDK_ITEMS.map((item) => (
          <div
            className="sdk-item"
            key={item}
          >
            <span>{item}</span>
            <i />
          </div>
        ))}

      </div>

      {/* Transaction card */}
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
  )
}

export function Build() {
  return (
    <>
      <main className="build-page">

        {/* HERO */}
        <section className="build-hero container">

          <div className="build-hero-content">

            <span className="build-eyebrow">
              BUILD A MORE OPEN WEB
            </span>

            <h1>
              Build with <span>CoinStep</span>
            </h1>

            <p className="build-description">
              Create powerful blockchain experiences with
              CoinStep&apos;s wallet and Web3 infrastructure.
            </p>

            <div className="build-actions">

              <LinkButton
                href="#developer-tools"
                size="lg"
              >
                Start Building →
              </LinkButton>

              <LinkButton
                href="#developer-tools"
                variant="secondary"
                size="lg"
              >
                ▣ View Documentation
              </LinkButton>

            </div>

            <div className="trust-row">

              {TRUST_ITEMS.map(
                ([icon, title, text]) => (
                  <div
                    className="trust-item"
                    key={title}
                  >

                    <span className="trust-icon">
                      {icon}
                    </span>

                    <div>
                      <strong>{title}</strong>
                      <small>{text}</small>
                    </div>

                  </div>
                )
              )}

            </div>

          </div>

          <BlockchainVisual />

        </section>

        {/* DEVELOPER TOOLS */}
        <section
          className="developer-section container"
          id="developer-tools"
        >

          <div className="developer-heading">

            <span className="build-eyebrow">
              DEVELOPER TOOLS FOR A BRIGHTER WEB3
            </span>

            <h2>
              Everything You Need to Build
            </h2>

            <p>
              Powerful tools, flexible integrations,
              and secure infrastructure to help you
              bring your ideas to life.
            </p>

          </div>

          <div className="build-feature-grid">

            {BUILD_FEATURES.map(
              ([icon, title, body]) => (
                <article
                  className="build-feature-card"
                  key={title}
                >

                  <span className="feature-icon">
                    {icon}
                  </span>

                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>

                </article>
              )
            )}

          </div>

        </section>

      </main>

      <style>{`

        /* =========================
           PAGE
        ========================= */

        .build-page {
          overflow: hidden;
        }

        .build-hero {
          min-height: 650px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 2rem;
          padding-block: 3.5rem;
        }

        .build-hero-content {
          position: relative;
          z-index: 20;
        }

        .build-eyebrow {
          display: inline-block;
          margin-bottom: .8rem;
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          letter-spacing: .18em;
          color: var(--color-accent);
        }

        /* Smaller heading */

        .build-hero h1 {
          max-width: 600px;
          margin: 0 0 1rem;
          font-size: clamp(2.7rem, 4.8vw, 4.2rem);
          line-height: 1;
          letter-spacing: -.045em;
        }

        .build-hero h1 span {
          color: var(--color-accent);
        }

        .build-description {
          max-width: 560px;
          margin-bottom: 1.8rem;
          font-size: clamp(1rem, 1.3vw, 1.2rem);
          line-height: 1.6;
          color: var(--color-ink-soft);
        }

        /* =========================
           BUTTONS
        ========================= */

       .build-actions {
            display: flex;
            gap: .7rem;
            margin-bottom: 2rem;
            flex-wrap: nowrap;
          }

          .build-actions > * {
           flex-shrink: 0;
           transform: scale(.85);
           transform-origin: left center;
          }         

        /* =========================
           TRUST
        ========================= */

        .trust-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: .65rem;
        }

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
        .trust-item small {
          display: block;
        }

        .trust-item strong {
          font-size: .7rem;
        }

        .trust-item small {
          color: var(--color-ink-faint);
          font-size: .65rem;
        }

        /* =========================
           VISUAL
        ========================= */

        .build-visual {
            position: relative;
            width: 100%;
            height: 570px;
            perspective: 1200px;
            display: flex;
            justify-content: center;
            align-items: center;
          }         

        /* Soft yellow glow */

        .visual-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(65px);
          pointer-events: none;
        }

        .glow-one {
          width: 360px;
          height: 360px;
          right: 30px;
          top: 70px;
          background: var(--color-accent);
          opacity: .16;
          animation: glow 5s ease-in-out infinite;
        }

        .glow-two {
          width: 220px;
          height: 220px;
          left: 30px;
          bottom: 70px;
          background: var(--color-accent);
          opacity: .1;
          animation: glow 6s ease-in-out infinite reverse;
        }

        @keyframes glow {
          50% {
            transform: scale(1.2);
            opacity: .28;
          }
        }

        /* =========================
           ORBITS
        ========================= */

        .orbit {
          position: absolute;
          border: 1px solid color-mix(
            in srgb,
            var(--color-accent) 32%,
            transparent
          );
          border-radius: 50%;
          pointer-events: none;
        }

        .orbit-one {
          width: 440px;
          height: 215px;
          right: 15px;
          top: 150px;
          transform: rotate(-18deg);
          animation: orbit 12s linear infinite;
        }

        .orbit-two {
          width: 360px;
          height: 170px;
          right: 50px;
          top: 175px;
          transform: rotate(30deg);
          animation: orbit 9s linear infinite reverse;
        }

        .orbit-three {
          width: 520px;
          height: 250px;
          right: -20px;
          top: 130px;
          border-style: dashed;
          animation: orbit 20s linear infinite;
        }

        @keyframes orbit {
          to {
            rotate: 360deg;
          }
        }

        /* =========================
           CONNECTION LINES
        ========================= */

        .connection {
          position: absolute;
          width: 190px;
          height: 1px;
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
          animation: connectionParticle 2s linear infinite;
        }

        .connection-one {
          right: 220px;
          top: 120px;
          rotate: 35deg;
        }

        .connection-two {
          right: 205px;
          top: 210px;
          rotate: 145deg;
          animation-delay: .4s;
        }

        .connection-three {
          right: 235px;
          top: 300px;
          rotate: -30deg;
          animation-delay: .8s;
        }

        .connection-four {
          right: 100px;
          top: 270px;
          rotate: 90deg;
          animation-delay: 1.2s;
        }

        @keyframes connectionParticle {
          from {
            left: 0;
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          to {
            left: 100%;
            opacity: 0;
          }
        }

        /* =========================
           BLOCKCHAIN CUBES
        ========================= */

        .block {
          position: absolute;
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          color: white;

          background: linear-gradient(
            135deg,
            var(--color-accent),
            #e9df00
          );

          box-shadow:
            0 0 18px
              color-mix(
                in srgb,
                var(--color-accent) 55%,
                transparent
              ),
            0 10px 25px rgba(0, 0, 0, .12);

          rotate: 30deg;
          z-index: 4;

          animation:
            blockFloat 3.5s ease-in-out infinite,
            blockPulse 3s ease-in-out infinite;
        }

        .block-two {
          animation-delay: .6s;
        }

        .block-three {
          animation-delay: 1.2s;
        }

        .block-four {
          animation-delay: 1.8s;
        }

        @keyframes blockFloat {
          50% {
            translate: 0 -14px;
          }
        }

        @keyframes blockPulse {
          50% {
            box-shadow:
              0 0 35px
                color-mix(
                  in srgb,
                  var(--color-accent) 70%,
                  transparent
                ),
              0 15px 30px rgba(0, 0, 0, .12);
          }
        }

        /* =========================
           PARTICLES
        ========================= */

        .data-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--color-accent);
          box-shadow: 0 0 10px var(--color-accent);
          animation: dataFloat 4s ease-in-out infinite;
        }

        .particle-1 {
          left: 20%;
          top: 20%;
        }

        .particle-2 {
          left: 75%;
          top: 10%;
          animation-delay: .5s;
        }

        .particle-3 {
          left: 10%;
          top: 55%;
          animation-delay: 1s;
        }

        .particle-4 {
          left: 85%;
          top: 50%;
          animation-delay: 1.5s;
        }

        .particle-5 {
          left: 35%;
          top: 75%;
          animation-delay: 2s;
        }

        .particle-6 {
          left: 65%;
          top: 80%;
          animation-delay: 2.5s;
        }

        .particle-7 {
          left: 48%;
          top: 12%;
          animation-delay: 1.2s;
        }

        .particle-8 {
          left: 90%;
          top: 75%;
          animation-delay: 2.8s;
        }

        @keyframes dataFloat {
          50% {
            translate: 0 -15px;
            opacity: .35;
            scale: 1.5;
          }
        }

        /* =========================
           FLOATING CARDS
        ========================= */

        .floating-card {
          position: absolute;
          padding: 1rem;
          border: 1px solid var(--color-border);
          border-radius: 14px;

          background: color-mix(
            in srgb,
            var(--color-surface) 90%,
            transparent
          );

          backdrop-filter: blur(16px);
          box-shadow: var(--shadow-md);
          z-index: 8;
        }

        /* =========================
           BUILD CARD
        ========================= */

        .code-card {
          left: 0;
          top: 180px;
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

          background: color-mix(
            in srgb,
            var(--color-accent) 14%,
            var(--color-surface)
          );
        }

        .code-card strong {
          font-size: .72rem;
        }

        .code-card span {
          color: var(--color-ink-faint);
          font-size: .55rem;
          margin-top: 3px;
        }

        .code-card small {
          margin-top: .6rem;
          color: var(--color-accent);
          font-size: .45rem;
        }

        @keyframes cardFloat {
          50% {
            translate: 0 -10px;
          }
        }

        /* =========================
           WHITE PHONE
        ========================= */

       .phone-wrapper {
              position: absolute;
              left: 50%;
              top: 50%;
              z-index: 10;
              transform: translate(-50%, -50%);
              animation: phoneFloat 5s ease-in-out infinite;
            }

        .phone {
          position: relative;
          width: 210px;
          height: 420px;
          padding: 7px;
          overflow: hidden;

          border: 2px solid rgba(0, 0, 0, .1);
          border-radius: 32px;

          background: linear-gradient(
            145deg,
            #ffffff,
            #f8f8f5 55%,
            #efefe9
          );

          box-shadow:
            0 35px 70px rgba(0, 0, 0, .18),
            0 0 45px
              color-mix(
                in srgb,
                var(--color-accent) 25%,
                transparent
              );

          rotate: 7deg;

          animation: phoneTilt 6s ease-in-out infinite;
        }

        @keyframes phoneFloat {
          50% {
            translate: 0 -15px;
          }
        }

        @keyframes phoneTilt {
          50% {
            rotate: 9deg;
          }
        }

        /* Phone shine */

        .phone-reflection {
          position: absolute;
          inset: 0;

          background: linear-gradient(
            120deg,
            rgba(255,255,255,.8),
            transparent 25%
          );

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
          background: #111;
          z-index: 6;
        }

        /* Phone header */

        .phone-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 25px 5px 20px;
          color: #171717;
          font-size: .55rem;
        }

        .phone-header b {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .phone-header b span {
          display: grid;
          place-items: center;
          width: 17px;
          height: 17px;
          border-radius: 50%;

          background: var(--color-accent);
          color: white;
        }

        .phone-header small {
          color: #6f8500;
          font-size: .42rem;
        }

        /* Balance */

        .phone-balance small {
          display: block;
          color: #888;
          font-size: .45rem;
        }

        .phone-balance strong {
          display: block;
          margin: 4px 0;
          color: #151515;
          font-size: 1.3rem;
        }

        .phone-balance em {
          color: #6e8500;
          font-size: .5rem;
          font-style: normal;
        }

        /* =========================
           CHART
        ========================= */

        .phone-chart {
          margin: 10px 0;
        }

        .chart-title {
          display: flex;
          justify-content: space-between;
          color: #888;
          font-size: .45rem;
        }

        .phone-chart svg {
          width: 100%;
          height: 85px;
        }

        .chart-start {
          stop-color: var(--color-accent);
        }

        .chart-end {
          stop-color: #e7dc00;
        }

        .area-start {
          stop-color: var(--color-accent);
          stop-opacity: .28;
        }

        .area-end {
          stop-color: var(--color-accent);
          stop-opacity: 0;
        }

        .chart-path {
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-dasharray: 300;
          animation: chart 3s linear infinite;
        }

        .chart-area {
          opacity: .65;
        }

        .phone-chart circle {
          fill: var(--color-accent);

          filter:
            drop-shadow(
              0 0 5px
              var(--color-accent)
            );

          animation: chartDot 1.5s ease-in-out infinite;
        }

        @keyframes chart {
          from {
            stroke-dashoffset: 300;
          }

          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes chartDot {
          50% {
            scale: 1.5;
          }
        }

        /* =========================
           ASSETS
        ========================= */

        .asset-row {
          display: grid;
          grid-template-columns: 25px 1fr auto;
          align-items: center;
          gap: 7px;
          padding: 7px 0;

          border-top:
            1px solid
            rgba(0, 0, 0, .08);

          color: #171717;
        }

        .asset-icon {
          width: 22px;
          height: 22px;
          display: grid;
          place-items: center;
          border-radius: 50%;

          background: rgba(0, 0, 0, .04);

          font-size: .65rem;
        }

        .asset-0 {
          color: #7773c9;
        }

        .asset-1 {
          color: #c77a12;
        }

        .asset-2 {
          color: #8060c7;
        }

        .asset-row strong,
        .asset-row small {
          display: block;
        }

        .asset-row strong {
          font-size: .48rem;
        }

        .asset-row small {
          color: #999;
          font-size: .4rem;
        }

        .asset-row > b {
          font-size: .45rem;
        }

        /* =========================
           PHONE NAV
        ========================= */

        .phone-nav {
          display: flex;
          justify-content: space-around;
          margin-top: 5px;
          padding-top: 8px;

          border-top:
            1px solid
            rgba(0, 0, 0, .08);

          color: #999;
          font-size: .65rem;
        }

        .phone-nav .active {
          color: var(--color-accent);
        }

        /* Phone shadow */

        .phone-shadow {
          position: absolute;
          width: 270px;
          height: 35px;
          right: -30px;
          bottom: -15px;
          border-radius: 50%;

          background:
            color-mix(
              in srgb,
              var(--color-accent) 25%,
              transparent
            );

          filter: blur(12px);

          animation: shadowPulse 4s ease-in-out infinite;
        }

        @keyframes shadowPulse {
          50% {
            scale: 1.1;
            opacity: .65;
          }
        }

        /* =========================
           SDK CARD
        ========================= */

        .sdk-card {
          right: 0;
          top: 140px;
          width: 130px;
          animation:
            cardFloat 4s 1s ease-in-out infinite;
        }

        .sdk-title {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 10px;
        }

        .sdk-title span {
          color: var(--color-accent);
        }

        .sdk-title strong {
          font-size: .55rem;
        }

        .sdk-title small {
          margin-left: auto;
          color: var(--color-accent);
          font-size: .4rem;
        }

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

          box-shadow:
            0 0 7px
            var(--color-accent);

          animation: sdkDot 1.5s ease-in-out infinite;
        }

        @keyframes sdkDot {
          50% {
            scale: 1.7;
            opacity: .5;
          }
        }

        /* =========================
           TRANSACTION
        ========================= */

        .transaction-card {
          left: 55px;
          bottom: 70px;

          display: flex;
          align-items: center;
          gap: 8px;

          animation:
            cardFloat 4s 1.5s ease-in-out infinite;
        }

        .transaction-card > span {
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;
          border-radius: 9px;

          background:
            color-mix(
              in srgb,
              var(--color-accent) 14%,
              var(--color-surface)
            );

          color: var(--color-accent);
        }

        .transaction-card strong,
        .transaction-card small {
          display: block;
        }

        .transaction-card strong {
          font-size: .55rem;
        }

        .transaction-card small {
          color: var(--color-accent);
          font-size: .45rem;
        }

        .transaction-card > b {
          margin-left: 10px;
          color: var(--color-accent);
          font-size: .5rem;
        }

        /* =========================
           CAPTION
        ========================= */

        .visual-caption {
          position: absolute;
          right: 15px;
          bottom: 0;

          display: flex;
          flex-direction: column;
          text-align: right;

          rotate: -6deg;
        }

        .visual-caption span {
          color: var(--color-ink-faint);
          font-family: var(--font-mono);
          font-size: .4rem;
        }

        .visual-caption strong {
          color: var(--color-accent);
          font-family: var(--font-mono);
          font-size: .5rem;
        }

        /* =========================
           FEATURES
        ========================= */

        .developer-section {
          padding-block: 5rem 8rem;
        }

        .developer-heading {
          max-width: 700px;
          margin: 0 auto 2.5rem;
          text-align: center;
        }

        .developer-heading h2 {
          margin: 0 0 .8rem;
          font-size: clamp(2rem, 4vw, 3rem);
        }

        .developer-heading p {
          margin: auto;
          color: var(--color-ink-soft);
        }

        .build-feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .build-feature-card {
          min-height: 145px;

          display: flex;
          gap: 1rem;

          padding: 1.2rem;

          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);

          background: var(--color-surface);

          box-shadow: var(--shadow-sm);

          transition:
            transform .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;
        }

        .build-feature-card:hover {
          translate: 0 -5px;
          border-color: var(--color-accent);
          box-shadow: var(--shadow-md);
        }

        .feature-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
        }

        .build-feature-card h3 {
          margin: 0 0 .35rem;
          font-size: .9rem;
        }

        .build-feature-card p {
          margin: 0;
          color: var(--color-ink-soft);
          font-size: .75rem;
          line-height: 1.5;
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 900px) {

          .build-hero {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .build-description {
            margin-inline: auto;
          }

          .build-actions,
          .trust-row {
            justify-content: center;
          }

          .build-visual {
            max-width: 680px;
            margin: auto;
          }

          .build-feature-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {

          .build-hero {
            padding-block: 2.5rem;
          }

          .build-hero h1 {
            font-size: clamp(2.5rem, 11vw, 3.5rem);
          }

          .build-actions {
            flex-wrap: wrap;
          }

          .trust-row {
            flex-direction: column;
            align-items: flex-start;
            width: max-content;
            margin: auto;
          }

          .build-visual {
            height: 470px;
            transform: scale(.72);
            transform-origin: top center;
            margin-bottom: -100px;
          }

          .build-feature-grid {
            grid-template-columns: 1fr;
          }

          .visual-caption {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {

          .build-visual *,
          .build-visual *::before,
          .build-visual *::after {
            animation: none !important;
          }

        }

      `}</style>
    </>
  )
}