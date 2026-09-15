import type { ReactNode } from "react";
import "./Support.css";

type IconProps = {
  children: ReactNode;
  className?: string;
};

const Icon = ({ children, className = "" }: IconProps) => {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
};

/* ============================================================
   SUPPORT TOPICS
============================================================ */

const topics = [
  {
    title: "Getting Started with Coinstep",
    description:
      "Learn how to set up your Web3 wallet, understand your wallet address, and get started with Coinstep.",
  },

  {
    title: "Managing Crypto Transactions",
    description:
      "Learn how to send and receive digital assets, understand network fees, and check transaction status.",
  },

  {
    title: "Buying and Managing Crypto",
    description:
      "Learn about available options for acquiring or converting supported digital assets and understand related requirements.",
      // "Learn about available options for acquiring and managing supported digital assets and understand related requirements.",
    icon: (
      <Icon className="support-topic-icon-svg">
        <circle cx="12" cy="12" r="8" />
        <path d="M9 15l6-6" />
        <circle cx="9" cy="9" r="1" />
        <circle cx="15" cy="15" r="1" />
      </Icon>
    ),
  },

  {
    title: "Connecting to DeFi and dApps",
    description:
      "Connect your Web3 wallet with supported decentralized applications and explore the growing Web3 ecosystem.",
  },

  {
    title: "Crypto Wallet Security",
    description:
      "Learn essential security practices to protect your wallet, recovery phrase, private information, and digital assets.",
      // "Learn essential security practices to protect your wallet access, recovery information, and digital assets.",
    icon: (
      <Icon className="support-topic-icon-svg">
        <path d="M12 3l7 3v5c0 4.8-2.9 8.2-7 10-4.1-1.8-7-5.2-7-10V6l7-3z" />
        <rect x="9" y="10.5" width="6" height="5" rx="1" />
        <path d="M10.5 10.5V9a1.5 1.5 0 013 0v1.5" />
      </Icon>
    ),
  },

  {
    title: "How-To Guides",
    description:
      "Follow simple step-by-step guides for common Coinstep wallet, transaction, Web3, and security tasks.",
  },
];

/* ============================================================
   SECURITY ITEMS
============================================================ */

const securityItems = [
  {
    title: "Protect Your Recovery Phrase",
    description:
      "Your recovery phrase can be used to restore access to your wallet. Store it securely and never share it with anyone.",
    icon: (
      <Icon>
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v5h5" />
        <path d="M10 13h5" />
        <path d="M10 17h5" />
      </Icon>
    ),
  },

  {
    title: "Avoid Scams and Phishing",
    description:
      "Be cautious of suspicious websites, messages, links, and requests for wallet or recovery information.",
    icon: (
      <Icon>
        <path d="M12 3l7 3v5c0 4.8-2.9 8.2-7 10-4.1-1.8-7-5.2-7-10V6l7-3z" />
        <circle cx="12" cy="11" r="2.5" />
      </Icon>
    ),
  },

  {
    title: "Secure Your Wallet",
    description:
      "Use a secure device, keep your wallet software updated, and follow recommended crypto security practices.",
    icon: (
      <Icon>
        <rect
          x="5"
          y="10"
          width="14"
          height="10"
          rx="2"
        />
        <path d="M8 10V7a4 4 0 018 0v3" />
      </Icon>
    ),
  },

  {
    title: "Verify Every Transaction",
    description:
      "Check the wallet address, network, amount, fees, and transaction details before approving a blockchain transaction.",
    icon: (
      <Icon>
        <path d="M6 21V4" />
        <path d="M6 5c3-2 6 2 12 0v9c-6 2-9-2-12 0" />
      </Icon>
    ),
  },
];

/* ============================================================
   PAGE
============================================================ */

export function Support() {
  return (
    <main className="support-page">

      <div className="support-container">

        {/* ====================================================
            HERO
        ==================================================== */}

        <section className="support-hero">

          {/* LEFT */}

          <div className="support-hero-content">

            <span className="support-eyebrow">
              COINSTEP SUPPORT
            </span>

            <h1>
              Web3 Wallet Support, When You Need It
            </h1>

            <p>
              Get help with your Coinstep Web3 wallet, digital assets,
              crypto transactions, decentralized applications, and
              wallet security.
            </p>

          </div>


          {/* RIGHT */}

          <div className="support-hero-visual">

            <div className="support-visual-glow" />

            <div
              className="
                support-headset-orbit
                support-headset-orbit-one
              "
            />

            <div
              className="
                support-headset-orbit
                support-headset-orbit-two
              "
            />

            <svg
              className="support-headset"
              viewBox="0 0 180 180"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="90"
                cy="90"
                r="69"
                fill="currentColor"
                fillOpacity="0.08"
              />

              <path
                d="M48 95V78C48 51 67 30 90 30C113 30 132 51 132 78V95"
                stroke="currentColor"
                strokeWidth="9"
                strokeLinecap="round"
              />

              <rect
                x="37"
                y="84"
                width="23"
                height="45"
                rx="11.5"
                fill="currentColor"
              />

              <rect
                x="120"
                y="84"
                width="23"
                height="45"
                rx="11.5"
                fill="currentColor"
              />

              <path
                d="M131 127C123 141 109 147 93 147"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
              />

              <circle
                cx="89"
                cy="147"
                r="7"
                fill="currentColor"
              />
            </svg>

          </div>

        </section>


        {/* ====================================================
            SUPPORT TOPICS
        ==================================================== */}

        <section className="support-section">

          <div className="support-section-heading">

            <span>
              HELP CENTER
            </span>

            <h2>
              How Can We Help?
            </h2>

            <p>
              Find guides and answers for your Coinstep Web3 wallet,
              digital assets, crypto transactions, dApps, DeFi,
              and wallet security.
            </p>

          </div>


          <div className="support-topics-grid">

            {topics.map((topic, index) => (
              <article
                key={topic.title}
                className={`support-topic-card support-topic-card-${
                  (index % 3) + 1
                }`}
              >

                <div className="support-topic-content">

                  <h3>
                    {topic.title}
                  </h3>

                  <p>
                    {topic.description}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </section>


        {/* ====================================================
            SECURITY CENTER
        ==================================================== */}

        <section className="support-security">

          <div
            className="
              support-security-glow
              support-security-glow-one
            "
          />

          <div
            className="
              support-security-glow
              support-security-glow-two
            "
          />


          <div className="support-security-content">

            <span className="support-security-label">
              STAY SAFE
            </span>

            <h2>
              Security Center
            </h2>

            <p>
              Protecting your wallet and digital assets starts with
              good security practices. Learn how to protect your
              recovery phrase, recognize phishing attempts, secure
              your wallet, and verify transactions before approving them.
            </p>

          </div>


          {/* SHIELD */}

          <div className="support-shield-area">

            <div
              className="
                support-orbit
                support-orbit-one
              "
            />

            <div
              className="
                support-orbit
                support-orbit-two
              "
            />


            <div className="support-shield">

              <svg
                viewBox="0 0 120 140"
                fill="none"
                aria-hidden="true"
              >

                <path
                  d="
                    M60 10
                    L105 29
                    V65
                    C105 95 87 119 60 131
                    C33 119 15 95 15 65
                    V29
                    L60 10Z
                  "
                  fill="currentColor"
                />

                <path
                  d="
                    M60 23
                    L93 37
                    V65
                    C93 87 80 105 60 115
                    C40 105 27 87 27 65
                    V37
                    L60 23Z
                  "
                  fill="white"
                  fillOpacity="0.13"
                />

                <rect
                  x="44"
                  y="62"
                  width="32"
                  height="25"
                  rx="5"
                  fill="white"
                />

                <path
                  d="
                    M50 62
                    V53
                    C50 47.5 54.5 43 60 43
                    C65.5 43 70 47.5 70 53
                    V62
                  "
                  stroke="white"
                  strokeWidth="6"
                  strokeLinecap="round"
                />

              </svg>

            </div>

          </div>


          {/* SECURITY ITEMS */}

          <div className="support-security-list">

            {securityItems.map((item) => (
              <div
                className="support-security-item"
                key={item.title}
              >

                <div className="support-security-item-icon">
                  {item.icon}
                </div>

                <div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </section>


        {/* ====================================================
            CONTACT
        ==================================================== */}

        <section className="support-contact">

          <div>

            <span>
              NEED MORE HELP?
            </span>

            <h2>
              Still Need Support?
            </h2>

            <p>
              Our support resources can help you understand Coinstep, Web3 wallets, crypto transactions, dApps, security, and common wallet questions.
            </p>

          </div>

        </section>

      </div>

    </main>
  );
}

export default Support;