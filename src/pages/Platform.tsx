import type { ReactNode } from "react";

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import walletPhones from "../assets/images/mobiledark&light.png";
import securityShield from "../assets/images/sheild.png";

import "./Platform.css";


/* =========================================================
   TYPES
========================================================= */

type PlatformVisualType =
  | "wallet"
  | "buy"
  | "swap"
  | "staking"
  | "dapp"
  | "portfolio";


type PlatformFeature = {
  icon: ReactNode;
  visual: PlatformVisualType;
  title: string;
  description: string;
};


/* =========================================================
   PLATFORM FEATURES
========================================================= */

const PLATFORM_FEATURES: PlatformFeature[] = [
  {
    icon: <AccountBalanceWalletOutlinedIcon />,
    visual: "wallet",
    title: "Wallet",
    description:
      "Manage supported digital assets through one clear and organized wallet experience.",
  },

  {
    icon: <PaymentsOutlinedIcon />,
    visual: "buy",
    title: "Buy Crypto",
    description:
      "Access a simple flow designed to make acquiring supported digital assets easier to understand.",
  },

  {
    icon: <SwapHorizOutlinedIcon />,
    visual: "swap",
    title: "Swap",
    description:
      "Exchange supported assets through a focused experience with clear transaction details.",
  },

  {
    icon: <SavingsOutlinedIcon />,
    visual: "staking",
    title: "Staking",
    description:
      "Explore supported staking opportunities and keep reward activity visible in one place.",
  },

  {
    icon: <LanguageOutlinedIcon />,
    visual: "dapp",
    title: "Web3 & dApps",
    description:
      "Connect your wallet to decentralized applications and explore Web3 experiences.",
  },

  {
    icon: <AssessmentOutlinedIcon />,
    visual: "portfolio",
    title: "Portfolio",
    description:
      "View your assets and transaction activity together through a simple portfolio overview.",
  },
];


/* =========================================================
   JOURNEY
========================================================= */

const PLATFORM_JOURNEY = [
  {
    number: "01",
    title: "Create or Import",
    text:
      "Start with a new wallet or bring an existing wallet into CoinStep.",
  },

  {
    number: "02",
    title: "Secure Your Wallet",
    text:
      "Set up the security and recovery options that help protect access.",
  },

  {
    number: "03",
    title: "Manage Your Assets",
    text:
      "Keep supported digital assets organized and accessible from one place.",
  },

  {
    number: "04",
    title: "Move with Clarity",
    text:
      "Send, receive, buy, or swap while reviewing important transaction details.",
  },

  {
    number: "05",
    title: "Explore Web3",
    text:
      "Connect your wallet to decentralized applications and Web3 services.",
  },
];


/* =========================================================
   SECURITY ITEMS
========================================================= */

const SECURITY_ITEMS = [
  "Private-key protection",
  "Clear transaction confirmations",
  "Wallet recovery guidance",
  "App-level security controls",
  "Transparent wallet interactions",
];


/* =========================================================
   CAPABILITY VISUALS
========================================================= */

const PLATFORM_VISUALS: Record<
  PlatformVisualType,
  ReactNode
> = {

  /* WALLET */

  wallet: (
    <div className="platform-wallet-illustration">

      <div className="platform-wallet-back" />

      <div className="platform-wallet-front">

        <div className="platform-wallet-brand">

          <span>
            C
          </span>

          <b>
            COINSTEP
          </b>

        </div>

        <strong>
          $12,458.32
        </strong>

        <small>
          Main Wallet
        </small>

      </div>

      <span className="platform-wallet-dot platform-wallet-dot-one" />

      <span className="platform-wallet-dot platform-wallet-dot-two" />

    </div>
  ),


  /* BUY */

  buy: (
    <div className="platform-buy-illustration">

      <div className="platform-payment-card">

        <div className="platform-payment-chip" />

        <small>
          Add crypto
        </small>

        <strong>
          $250.00
        </strong>

      </div>

      <div className="platform-buy-arrow">

        <ArrowForwardRoundedIcon />

      </div>

      <div className="platform-buy-token">
        ◆
      </div>

    </div>
  ),


  /* SWAP */

  swap: (
    <div className="platform-swap-illustration">

      <div className="platform-swap-token platform-swap-token-one">

        <span>
          Ξ
        </span>

        <small>
          ETH
        </small>

      </div>


      <div className="platform-swap-center">

        <SwapHorizOutlinedIcon />

      </div>


      <div className="platform-swap-token platform-swap-token-two">

        <span>
          S
        </span>

        <small>
          SOL
        </small>

      </div>


      <div className="platform-swap-line platform-swap-line-one" />

      <div className="platform-swap-line platform-swap-line-two" />

    </div>
  ),


  /* STAKING */

  staking: (
    <div className="platform-staking-illustration">

      <div className="platform-staking-orbit" />

      <div className="platform-staking-core">

        <SavingsOutlinedIcon />

        <strong>
          Rewards
        </strong>

        <small>
          Staking
        </small>

      </div>


      <span className="platform-staking-coin platform-staking-coin-one">
        ◆
      </span>

      <span className="platform-staking-coin platform-staking-coin-two">
        ◎
      </span>

      <span className="platform-staking-coin platform-staking-coin-three">
        Ξ
      </span>

    </div>
  ),


  /* DAPP */

  dapp: (
    <div className="platform-dapp-illustration">

      <div className="platform-dapp-window">

        <div className="platform-dapp-window-top">
          <i />
          <i />
          <i />
        </div>

        <div className="platform-dapp-address">
          app.web3
        </div>

        <div className="platform-dapp-connect">

          <LanguageOutlinedIcon />

          <span>
            dApp
          </span>

          <small>
            Connected
          </small>

        </div>

      </div>


      <div className="platform-dapp-node platform-dapp-node-one">
        ◆
      </div>

      <div className="platform-dapp-node platform-dapp-node-two">
        ◎
      </div>

    </div>
  ),


  /* PORTFOLIO */

  portfolio: (
    <div className="platform-portfolio-illustration">

      <div className="platform-portfolio-card">

        <div className="platform-portfolio-top">

          <div>

            <small>
              Portfolio
            </small>

            <strong>
              $12.4K
            </strong>

          </div>

          <span>
            +8.4%
          </span>

        </div>


        <div className="platform-portfolio-bars">

          {[30, 52, 44, 70, 58, 88, 72].map(
            (height, index) => (
              <i
                key={index}
                style={{
                  height: `${height}%`,
                }}
              />
            )
          )}

        </div>

      </div>

    </div>
  ),
};


/* =========================================================
   FEATURE VISUAL
========================================================= */

function PlatformFeatureVisual({
  type,
}: {
  type: PlatformVisualType;
}) {
  return (
    <div
      className={`platform-feature-visual platform-feature-visual-${type}`}
      aria-hidden="true"
    >

      <div className="platform-feature-ring platform-feature-ring-one" />

      <div className="platform-feature-ring platform-feature-ring-two" />

      {PLATFORM_VISUALS[type]}

    </div>
  );
}


/* =========================================================
   HERO VISUAL
========================================================= */
function PlatformHeroVisual() {
  return (
    <div className="platform-hero-visual">

      {/* ORBITS */}
      <div className="platform-hero-orbit platform-hero-orbit-one" />
      <div className="platform-hero-orbit platform-hero-orbit-two" />
      <div className="platform-hero-orbit platform-hero-orbit-three" />

      {/* FLOATING STATUS CARDS */}
      <div className="platform-connected-card">
        <span />

        <div>
          <strong>Wallet Connected</strong>
          <small>Secure session</small>
        </div>
      </div>

      <div className="platform-network-card">
        <HubOutlinedIcon />

        <div>
          <strong>Web3 Ready</strong>
          <small>Multi-chain access</small>
        </div>
      </div>

      <div className="platform-approved-card">
        <VerifiedUserOutlinedIcon />

        <div>
          <strong>Transaction</strong>
          <small>Ready to review</small>
        </div>
      </div>

      {/* PHONE IMAGE ONLY */}
      <div className="platform-device">
        <div className="platform-theme-crop">
          <img
            src={walletPhones}
            alt="CoinStep wallet interface"
            className="platform-theme-img"
          />
        </div>
      </div>

    </div>
  );
}

/* =========================================================
   SECURITY VISUAL
========================================================= */

function PlatformSecurityVisual() {
  return (
    <div
      className="platform-security-visual"
      aria-hidden="true"
    >

      <div className="platform-security-glow" />

      <div className="platform-security-orbit platform-security-orbit-one" />

      <div className="platform-security-orbit platform-security-orbit-two" />


      <div className="platform-security-image-wrapper">

        <img
          src={securityShield}
          alt=""
          className="platform-security-image"
        />

      </div>


      <div className="platform-security-card">

        <div className="platform-security-card-icon">

          <KeyOutlinedIcon />

        </div>

        <div>

          <strong>
            Your wallet
          </strong>

          <small>
            Your control
          </small>

        </div>

      </div>


      <div className="platform-security-lock">

        <LockOutlinedIcon />

      </div>

    </div>
  );
}


/* =========================================================
   CONNECTED WEB3 VISUAL
========================================================= */

function ConnectedWeb3Visual() {
  return (
    <div
      className="platform-network-visual"
      aria-hidden="true"
    >

      <div className="platform-network-ring platform-network-ring-one" />

      <div className="platform-network-ring platform-network-ring-two" />


      <div className="platform-network-core">

        <span>
          C
        </span>

        <strong>
          CoinStep
        </strong>

      </div>


      <div className="platform-network-node platform-node-wallet">

        <AccountBalanceWalletOutlinedIcon />

        <small>
          Wallet
        </small>

      </div>


      <div className="platform-network-node platform-node-assets">

        <AssessmentOutlinedIcon />

        <small>
          Assets
        </small>

      </div>


      <div className="platform-network-node platform-node-dapps">

        <LanguageOutlinedIcon />

        <small>
          dApps
        </small>

      </div>


      <div className="platform-network-node platform-node-chains">

        <HubOutlinedIcon />

        <small>
          Chains
        </small>

      </div>


      <div className="platform-network-line platform-network-line-one" />

      <div className="platform-network-line platform-network-line-two" />

      <div className="platform-network-line platform-network-line-three" />

      <div className="platform-network-line platform-network-line-four" />

    </div>
  );
}


/* =========================================================
   PLATFORM PAGE
========================================================= */

export function Platform() {
  return (
    <div className="platform-page">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="platform-hero container">

        <div className="platform-hero-content">

          <span className="platform-eyebrow">
            COINSTEP PLATFORM
          </span>

          <h1>
            Your Web3 Experience.{" "}
            <span>
              One Secure Platform.
            </span>
          </h1>

          <p className="platform-description">
            Manage your wallet, digital assets,
            transactions, and Web3 connections through
            one simple and connected experience.
          </p>

        </div>

        <PlatformHeroVisual />

      </section>


      {/* =====================================================
          PLATFORM CAPABILITIES
      ====================================================== */}

      <section
        className="platform-capabilities container"
        id="platform-capabilities"
      >

        <div className="platform-section-heading">

          <span className="platform-eyebrow">
            ONE CONNECTED EXPERIENCE
          </span>

          <h2>
            Everything You Need{" "}
            <span>
              in One Place
            </span>
          </h2>

          <p>
            Essential wallet and Web3 tools designed
            to keep your digital experience clear,
            connected, and easy to manage.
          </p>

        </div>


        <div className="platform-feature-grid">

          {PLATFORM_FEATURES.map(
            ({
              icon,
              visual,
              title,
              description,
            }) => (
              <article
                className="platform-feature-card"
                key={title}
              >

                <PlatformFeatureVisual
                  type={visual}
                />


                <div className="platform-feature-content">

                  <div className="platform-feature-heading">

                    <span className="platform-feature-icon">
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


      {/* =====================================================
          JOURNEY
      ====================================================== */}

      <section
        className="platform-journey-section"
        id="how-it-works"
      >

        <div className="container">

          <div className="platform-section-heading">

            <span className="platform-eyebrow">
              HOW COINSTEP WORKS
            </span>

            <h2>
              From Wallet Setup to{" "}
              <span>
                Web3
              </span>
            </h2>

            <p>
              A straightforward journey that keeps
              every important step visible and easy
              to understand.
            </p>

          </div>


          <div className="platform-journey-grid">

            {PLATFORM_JOURNEY.map(
              ({
                number,
                title,
                text,
              }) => (
                <article
                  className="platform-journey-card"
                  key={number}
                >

                  <span className="platform-step-number">
                    {number}
                  </span>

                  <div className="platform-step-line">
                    <i />
                  </div>

                  <h3>
                    {title}
                  </h3>

                  <p>
                    {text}
                  </p>

                </article>
              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          SECURITY
      ====================================================== */}

      <section className="platform-security-section">

        <div className="platform-security-inner container">

          <PlatformSecurityVisual />


          <div className="platform-security-copy">

            <span className="platform-eyebrow">
              SECURITY AT EVERY STEP
            </span>

            <h2>
              Stay in Control of{" "}
              <span>
                Every Interaction
              </span>
            </h2>

            <p className="platform-security-description">
              CoinStep is designed to make important
              wallet actions easier to understand.
              Clear confirmations and security-focused
              flows help you stay aware of what you
              are approving.
            </p>


            <div className="platform-security-list">

              {SECURITY_ITEMS.map(
                (item) => (
                  <div
                    className="platform-security-item"
                    key={item}
                  >

                    <span>
                      <CheckCircleOutlineRoundedIcon />
                    </span>

                    <strong>
                      {item}
                    </strong>

                  </div>
                )
              )}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONNECTED WEB3
      ====================================================== */}

      <section className="platform-connected-section container">

        <div className="platform-connected-copy">

          <span className="platform-eyebrow">
            CONNECTED WEB3
          </span>

          <h2>
            One Wallet.{" "}
            <span>
              More Ways to Connect.
            </span>
          </h2>

          <p>
            Bring your wallet, digital assets,
            transactions, supported blockchain
            networks, and decentralized applications
            together through one connected experience.
          </p>


          <div className="platform-connected-points">

            <div>

              <DevicesOutlinedIcon />

              <span>
                Consistent wallet experience
              </span>

            </div>


            <div>

              <HubOutlinedIcon />

              <span>
                Connected blockchain access
              </span>

            </div>


            <div>

              <VerifiedUserOutlinedIcon />

              <span>
                Clear transaction flows
              </span>

            </div>

          </div>

        </div>


        <ConnectedWeb3Visual />

      </section>

    </div>
  );
}