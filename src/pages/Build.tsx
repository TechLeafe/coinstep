import type { ReactNode } from "react";

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";

import "./Build.css";


/* =========================================================
   TYPES
========================================================= */

type VisualType =
  | "wallet"
  | "developer"
  | "network"
  | "security"
  | "mobile"
  | "dapp";

type Feature = {
  icon: ReactNode;
  visual: VisualType;
  title: string;
  description: string;
};


/* =========================================================
   FEATURE CONTENT
========================================================= */

const BUILD_FEATURES: Feature[] = [
  {
    icon: <AccountBalanceWalletOutlinedIcon />,
    visual: "wallet",
    title: "Wallet Integration",
    description:
      "Integrate Coinstep into your dApp and give users seamless access to  their digital assets.",
  },

  {
    icon: <CodeOutlinedIcon />,
    visual: "developer",
    title: "Developer APIs",
    description:
      "Build blockchain-powered applications faster with simple, reliable APIs designed for modern Web3 products.",
  },

  {
    icon: <HubOutlinedIcon />,
    visual: "network",
    title: "Multi-Chain Support",
    description:
      "Connect your applications across supported blockchain networks through one unified experience.",
  },

  {
    icon: <VerifiedUserOutlinedIcon />,
    visual: "security",
    title: "Secure Transactions",
    description:
      "Give users clear transaction details, confirmations, and secure signing flows for every action.",
  },

  {
    icon: <DevicesOutlinedIcon />,
    visual: "mobile",
    title: "Mobile & Web",
    description:
      "Deliver consistent Web3 experiences across mobile, desktop, and web applications.",
  },

  {
    icon: <ExtensionOutlinedIcon />,
    visual: "dapp",
    title: "dApp Integration",
    description:
      "Connect CoinStep with decentralized applications and Web3 services through flexible integration tools.",
  },
];


/* =========================================================
   TRUST ITEMS
========================================================= */

const TRUST_ITEMS = [
  {
    icon: <GroupsOutlinedIcon />,
    title: "Designed for",
    text: "Web3 developers",
  },

  {
    icon: <CloudQueueOutlinedIcon />,
    title: "Reliable & scalable",
    text: "infrastructure",
  },

  {
    icon: <BoltOutlinedIcon />,
    title: "Secure by design",
    text: "for every transaction",
  },
];


/* =========================================================
   HERO DATA
========================================================= */

const ASSETS = [
  ["Ξ", "Ethereum", "ETH", "2.45"],
  ["₿", "Bitcoin", "BTC", "0.18"],
  ["S", "Solana", "SOL", "12.54"],
] as const;


const SDK_ITEMS = [
  "REST API",
  "Webhooks",
  "Developer Docs",
];


const BLOCKS = [
  ["block-one", 275, 65],
  ["block-two", 205, 155],
  ["block-three", 275, 250],
  ["block-four", 175, 330],
] as const;


const NET_LINES = [
  ["top", -90],
  ["left", 180],
  ["right", 0],
  ["bottom", 90],
] as const;


const BARS = [25, 45, 35, 70, 90];

const ORBITS = [
  "one",
  "two",
  "three",
];

const CONNECTIONS = [
  "one",
  "two",
  "three",
  "four",
];


const ACCENT = "var(--color-accent)";


const CHART_D =
  "M0 60 C20 58 22 48 40 52 S62 35 78 42 S98 22 115 32 S135 12 150 23 S174 8 200 12";


const dots = (count: number) =>
  Array.from(
    { length: count },
    (_, index) => <i key={index} />
  );


const ring = (deg: number) => ({
  transform: `translate(-45px, -22px) rotate(${deg}deg)`,
});


/* =========================================================
   FEATURE VISUALS
========================================================= */

const VISUALS: Record<VisualType, ReactNode> = {

  /* WALLET */

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


  /* DEVELOPER */

  developer: (
    <div className="developer-illustration">

      <div className="dev-window">

        <div className="dev-dots">
          {dots(3)}
        </div>

        <div className="code-line line-one">
          <span>&lt;</span>
          Code
        </div>

        <div className="code-line line-two">
          Build
          <span>/&gt;</span>
        </div>

        <div className="code-line line-three">
          <span>API</span> Connected
        </div>

      </div>

    </div>
  ),


  /* NETWORK */

  network: (
    <div className="network-illustration">

      <span className="network-node node-center">
        ◆
      </span>

      <span className="network-node node-top">
        Ξ
      </span>

      <span className="network-node node-left">
        ₿
      </span>

      <span className="network-node node-right">
        S
      </span>

      <span className="network-node node-bottom">
        ◎
      </span>

      {NET_LINES.map(([name, deg]) => (
        <i
          key={name}
          className={`network-line line-${name}`}
          style={{
            transform: `rotate(${deg}deg)`,
          }}
        />
      ))}

    </div>
  ),


  /* SECURITY */

  security: (
    <div className="security-illustration">

      <div className="security-shield">
        <VerifiedUserOutlinedIcon />
      </div>

      {[25, -25].map((deg) => (
        <div
          key={deg}
          className="security-orbit"
          style={{
            transform: `rotate(${deg}deg)`,
          }}
        />
      ))}

    </div>
  ),


  /* MOBILE + WEB */

  mobile: (
    <div className="devices-illustration">

      <div className="desktop-device">

        <div className="desktop-top">
          <span />
          <span />
          <span />
        </div>

        <div className="desktop-content">

          <CodeOutlinedIcon />

          <strong>
            Coinstep Web3
          </strong>

          <small>
            Connected
          </small>

        </div>

      </div>


      <div className="mobile-device">

        <div className="mobile-notch" />

        <div className="mobile-screen">

          <span className="screen-balance">
            $12,458
          </span>

          <div className="screen-chart">

            {BARS.map((height, index) => (
              <i
                key={index}
                style={{
                  height: `${height}%`,
                }}
              />
            ))}

          </div>

          <div className="screen-button">
            Connected
          </div>

        </div>

      </div>


      <div className="device-connected">
        <span>✓</span>
        Synced
      </div>

    </div>
  ),


  /* DAPP */

  dapp: (
    <div className="dapp-illustration">

      <div className="dapp-core">
        <ExtensionOutlinedIcon />
      </div>

      {[0, 60, -60].map((deg) => (
        <div
          key={deg}
          className="dapp-circle"
          style={ring(deg)}
        />
      ))}

      <span className="dapp-symbol symbol-one">
        &lt;/&gt;
      </span>

      <span className="dapp-symbol symbol-two">
        ◎
      </span>

      <span className="dapp-symbol symbol-three">
        ◆
      </span>

    </div>
  ),
};


/* =========================================================
   FEATURE VISUAL COMPONENT
========================================================= */

function FeatureVisual({
  type,
}: {
  type: VisualType;
}) {
  return (
    <div
      className={`feature-visual feature-visual-${type}`}
      aria-hidden="true"
    >

      <div className="visual-ring ring-one" />

      <div className="visual-ring ring-two" />

      {VISUALS[type]}

    </div>
  );
}


/* =========================================================
   HERO BLOCKCHAIN VISUAL
========================================================= */

function BlockchainVisual() {
  return (
    <div
      className="build-visual"
      aria-hidden="true"
    >

      {/* GLOW */}

      <div className="visual-glow glow-one" />

      <div className="visual-glow glow-two" />


      {/* ORBITS */}

      {ORBITS.map((name) => (
        <div
          className={`orbit orbit-${name}`}
          key={name}
        />
      ))}


      {/* CONNECTIONS */}

      {CONNECTIONS.map((name) => (
        <div
          className={`connection connection-${name}`}
          key={name}
        >
          <i />
        </div>
      ))}


      {/* BLOCKS */}

      {BLOCKS.map(
        ([className, right, top]) => (
          <div
            key={className}
            className={`block ${className}`}
            style={{
              right,
              top,
            }}
          >
            ◆
          </div>
        )
      )}


      {/* PARTICLES */}

      {Array.from(
        { length: 8 },
        (_, index) => (
          <span
            key={index}
            className={`data-particle particle-${index + 1}`}
          />
        )
      )}


      {/* CODE CARD */}

      <div className="code-card floating-card">

        <div className="code-icon">
          <CodeOutlinedIcon />
        </div>

        <strong>
          Build
        </strong>

        <span>
          Integrate
        </span>

        <span>
          Scale
        </span>

        <small>
          ● API Connected
        </small>

      </div>


      {/* PHONE */}

      <div className="phone-wrapper">

        <div className="phone-shadow" />

        <div className="phone">

          <div className="phone-reflection" />

          <div className="phone-notch" />


          <div className="phone-header">

            <b>
              <span>C</span>
              Coinstep
            </b>

            <small>
              ● LIVE
            </small>

          </div>


          <div className="phone-balance">

            <small>
              TOTAL BALANCE
            </small>

            <strong>
              $12,458.32
            </strong>

            <em>
              ↑ 8.42%
            </em>

          </div>


          <div className="phone-chart">

            <div className="chart-title">

              <span>
                Portfolio
              </span>

              <span>
                24H
              </span>

            </div>


            <svg
              viewBox="0 0 200 70"
              role="presentation"
            >

              <defs>

                <linearGradient id="chartLine">

                  <stop
                    offset="0%"
                    style={{
                      stopColor: ACCENT,
                    }}
                  />

                  <stop
                    offset="100%"
                    style={{
                      stopColor: ACCENT,
                    }}
                  />

                </linearGradient>


                <linearGradient
                  id="chartArea"
                  x2="0"
                  y2="1"
                >

                  <stop
                    offset="0%"
                    style={{
                      stopColor: ACCENT,
                      stopOpacity: 0.28,
                    }}
                  />

                  <stop
                    offset="100%"
                    style={{
                      stopColor: ACCENT,
                      stopOpacity: 0,
                    }}
                  />

                </linearGradient>

              </defs>


              <path
                className="chart-area"
                fill="url(#chartArea)"
                d={`${CHART_D} L200 70 L0 70Z`}
              />


              <path
                className="chart-path"
                stroke="url(#chartLine)"
                d={CHART_D}
              />


              <circle
                cx="200"
                cy="12"
                r="3"
              />

            </svg>

          </div>


          <div className="phone-assets">

            {ASSETS.map(
              ([icon, name, symbol, amount]) => (
                <div
                  className="asset-row"
                  key={name}
                >

                  <span className="asset-icon">
                    {icon}
                  </span>

                  <div>

                    <strong>
                      {name}
                    </strong>

                    <small>
                      {symbol}
                    </small>

                  </div>

                  <b>
                    {amount}
                  </b>

                </div>
              )
            )}

          </div>


          <div className="phone-nav">

            <span className="active">
              ⌂
            </span>

            <span>
              ◉
            </span>

            <span>
              ↗
            </span>

            <span>
              ⚙
            </span>

          </div>

        </div>

      </div>


      {/* SDK CARD */}

      <div className="sdk-card floating-card">

        <div className="sdk-title">

          <HubOutlinedIcon />

          <strong>
            Wallet SDK
          </strong>

          <small>
            LIVE
          </small>

        </div>

        {SDK_ITEMS.map((item) => (
          <div
            className="sdk-item"
            key={item}
          >

            <span>
              {item}
            </span>

            <i />

          </div>
        ))}

      </div>


      {/* TRANSACTION */}

      <div className="transaction-card floating-card">

        <span>
          <VerifiedUserOutlinedIcon />
        </span>

        <div>

          <strong>
            Transaction
          </strong>

          <small>
            Confirmed
          </small>

        </div>

        <b>
          +0.42 ETH
        </b>

      </div>


      {/* CAPTION */}

      <div className="visual-caption">

        <span>
          POWERED BY
        </span>

        <strong>
          COINSTEP WEB3
        </strong>

      </div>

    </div>
  );
}


/* =========================================================
   BUILD PAGE
========================================================= */

export function Build() {
  return (
    <div className="build-page">

      {/* =========================
          HERO
      ========================== */}

      <section className="build-hero container">

        <div className="build-hero-content">

          <h1>
            Build with{" "}
            <span>
              Coinstep
            </span>
          </h1>


          <p className="build-description">
            Build secure, scalable Web3 experiences with
            Coinstep&apos;s wallet infrastructure, developer
            APIs, and multi-chain tools.
          </p>


          <div className="trust-row">

            {TRUST_ITEMS.map(
              ({ icon, title, text }) => (
                <div
                  className="trust-item"
                  key={title}
                >

                  <span className="trust-icon">
                    {icon}
                  </span>

                  <div>

                    <strong>
                      {title}
                    </strong>

                    <small>
                      {text}
                    </small>

                  </div>

                </div>
              )
            )}

          </div>

        </div>


        <BlockchainVisual />

      </section>


      {/* =========================
          DEVELOPER TOOLS
      ========================== */}

      <section
        className="developer-section container"
        id="developer-tools"
      >

        <div className="developer-heading">

          <span className="build-eyebrow">
            DEVELOPER TOOLS FOR A MODERN WEB3
          </span>


          <h2>
            Everything You Need to Build
          </h2>


          <p>
            Powerful tools, flexible integrations, and secure
            infrastructure designed to help you build reliable
            Web3 experiences.
          </p>

        </div>


        <div className="build-feature-grid">

          {BUILD_FEATURES.map(
            ({
              icon,
              visual,
              title,
              description,
            }) => (
              <article
                className="build-feature-card"
                key={title}
              >

                <FeatureVisual
                  type={visual}
                />


                <div className="feature-content">

                  <div className="feature-heading">

                    <span className="feature-icon">
                      {icon}
                    </span>

                    <h3>
                      {title}
                    </h3>

                  </div>


                  <p>
                    {description}
                  </p>

                </div>

              </article>
            )
          )}

        </div>

      </section>

    </div>
  );
}