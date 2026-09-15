import type { CSSProperties } from "react";
import "./CryptoStairs.css";

type CoinType =
  | "xrp"
  | "cardano"
  | "solana"
  | "bnb"
  | "ethereum"
  | "bitcoin";

function CoinLogo({ type }: { type: CoinType }) {
  if (type === "xrp") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path
          d="M13 18h8l11 11 11-11h8L37 32l14 14h-8L32 35 21 46h-8l14-14L13 18Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "cardano") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <g fill="currentColor">
          <circle cx="32" cy="32" r="3.3" />

          <circle cx="32" cy="21" r="2.1" />
          <circle cx="32" cy="43" r="2.1" />
          <circle cx="21" cy="32" r="2.1" />
          <circle cx="43" cy="32" r="2.1" />

          <circle cx="24" cy="24" r="1.9" />
          <circle cx="40" cy="24" r="1.9" />
          <circle cx="24" cy="40" r="1.9" />
          <circle cx="40" cy="40" r="1.9" />

          <circle cx="32" cy="12" r="1.5" />
          <circle cx="32" cy="52" r="1.5" />
          <circle cx="12" cy="32" r="1.5" />
          <circle cx="52" cy="32" r="1.5" />

          <circle cx="18" cy="18" r="1.35" />
          <circle cx="46" cy="18" r="1.35" />
          <circle cx="18" cy="46" r="1.35" />
          <circle cx="46" cy="46" r="1.35" />
        </g>
      </svg>
    );
  }

  if (type === "solana") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <g fill="currentColor">
          <path d="M16 16h35l-7 8H9l7-8Z" />
          <path d="M13 28h35l7 8H20l-7-8Z" />
          <path d="M16 40h35l-7 8H9l7-8Z" />
        </g>
      </svg>
    );
  }

  if (type === "bnb") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <g fill="currentColor">
          <path d="M32 9 43 20 37 26 32 21 27 26 21 20 32 9Z" />
          <path d="M15 27 21 21 27 27 21 33 15 27Z" />
          <path d="M49 27 43 21 37 27 43 33 49 27Z" />
          <path d="M32 29 39 36 32 43 25 36 32 29Z" />
          <path d="M21 39 27 45l5 5 5-5 6-6 6 6-17 17-17-17 6-6Z" />
        </g>
      </svg>
    );
  }

  if (type === "ethereum") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path
          d="M32 6 19 32l13 8 13-8L32 6Z"
          fill="currentColor"
          opacity=".95"
        />

        <path
          d="M32 6v34l13-8L32 6Z"
          fill="currentColor"
          opacity=".55"
        />

        <path
          d="m19 35 13 22 13-22-13 8-13-8Z"
          fill="currentColor"
          opacity=".86"
        />

        <path
          d="M32 43v14l13-22-13 8Z"
          fill="currentColor"
          opacity=".5"
        />
      </svg>
    );
  }

  return (
    <span className="crypto-stairs__bitcoin">
      ₿
    </span>
  );
}

function Coin({ type }: { type: CoinType }) {
  return (
    <div
      className={`crypto-stairs__coin-wrap crypto-stairs__coin-wrap--${type}`}
    >
      <div className="crypto-stairs__coin">
        <div className="crypto-stairs__coin-face crypto-stairs__coin-front">
          <div className="crypto-stairs__logo">
            <CoinLogo type={type} />
          </div>
        </div>

        <div className="crypto-stairs__coin-edge" />

        <div className="crypto-stairs__coin-face crypto-stairs__coin-back">
          <div className="crypto-stairs__logo">
            <CoinLogo type={type} />
          </div>
        </div>
      </div>

      <div className="crypto-stairs__shadow" />
    </div>
  );
}

const STEPS: CoinType[] = [
  "xrp",
  "cardano",
  "solana",
  "bnb",
  "ethereum",
  "bitcoin",
];

export function CryptoStairs() {
  return (
    <div
      className="crypto-stairs"
      aria-label="Animated cryptocurrency coins on ascending steps"
    >
      <div className="crypto-stairs__glow" />

      <div className="crypto-stairs__scene">
        {STEPS.map((coin, index) => (
          <div
            className="crypto-stairs__step"
            style={
              {
                "--step-index": index,
              } as CSSProperties
            }
            key={coin}
          >
            <Coin type={coin} />
          </div>
        ))}
      </div>
    </div>
  );
}