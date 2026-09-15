import {
  useMemo,
  useState,
  type ReactNode,
} from "react";

import "./Faq.css";


/* ============================================================
   TYPES
============================================================ */

interface Category {
  id: string;
  label: string;
  icon: ReactNode;
}

interface FaqItem {
  category: string;
  q: string;
  a: string;
}


/* ============================================================
   CATEGORY DATA
============================================================ */

const CATEGORIES: Category[] = [
  {
    id: "general",
    label: "General Questions",
    icon: <IconBulb />,
  },
  {
    id: "payment",
    label: "Payment & Billing",
    icon: <IconCard />,
  },
  {
    id: "security",
    label: "Safety & Security",
    icon: <IconShieldLock />,
  },
  {
    id: "account",
    label: "Account & Updates",
    icon: <IconRocket />,
  },
];


/* ============================================================
   FAQ DATA
============================================================ */

const FAQS: FaqItem[] = [

  /* =========================
     GENERAL QUESTIONS
  ========================= */

  {
    category: "general",

    q: "What is a Web3 wallet?",

    a: "A Web3 wallet allows you to manage digital assets and interact with blockchain networks and decentralized applications.",
  },


  /* =========================
     PAYMENT & BILLING
  ========================= */

  {
    category: "payment",

    q: "Are blockchain transactions reversible?",

    a: "Many blockchain transactions cannot be reversed after confirmation. Always verify the recipient address, network, amount, and transaction details before approving a transaction.",
  },


  /* =========================
     SAFETY & SECURITY
  ========================= */

  {
    category: "security",

    q: "What is a recovery phrase?",

    a: "A recovery phrase is a sequence of words that can be used to restore access to a crypto wallet. Always keep it private and secure.",
  },

  {
    category: "security",

    q: "Can Coinstep support recover my recovery phrase?",

    a: "No. Never share your recovery phrase with anyone. Anyone requesting your recovery phrase should be treated as a potential security risk.",
  },

  {
    category: "security",

    q: "How can I protect my crypto wallet?",

    a: "Protect your recovery phrase, use a secure device, avoid suspicious links, verify wallet addresses, and carefully review transactions before approving them.",
  },


  /* =========================
     ACCOUNT & UPDATES
  ========================= */

  {
    category: "account",

    q: "How do I connect Coinstep to a dApp?",

    a: "Open a supported decentralized application, select its wallet connection option, and choose Coinstep when available. Always verify the website before connecting your wallet.",
  },
];


/* ============================================================
   FAQ PAGE
============================================================ */

export function Faq() {

  /*
    Default category shown when FAQ page loads.
  */

  const [activeCategory, setActiveCategory] =
    useState<string>("security");


  /*
    null = no FAQ answer is open.

    This is important because when the page loads
    all FAQ answers will be closed.
  */

  const [openQuestion, setOpenQuestion] =
    useState<string | null>(null);


  /* ============================================================
     FILTER QUESTIONS BY CATEGORY
  ============================================================ */

  const visibleFaqs = useMemo(
    () =>
      FAQS.filter(
        (item) =>
          item.category === activeCategory,
      ),
    [activeCategory],
  );


  /* ============================================================
     CATEGORY CLICK
  ============================================================ */

  function handleCategoryClick(id: string) {

    /*
      Change selected category.
    */

    setActiveCategory(id);


    /*
      Close any FAQ answer that is currently open
      when another category is selected.
    */

    setOpenQuestion(null);
  }


  /* ============================================================
     QUESTION CLICK
  ============================================================ */

  function handleQuestionClick(question: string) {

    setOpenQuestion((currentQuestion) => {

      /*
        If clicked question is already open,
        close it.
      */

      if (currentQuestion === question) {
        return null;
      }


      /*
        Otherwise open clicked question.

        Because we only store one question here,
        only one FAQ can be open at one time.
      */

      return question;

    });
  }


  return (

    <main className="faq-page">


      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="faq-hero">

        <div className="container faq-hero-inner">


          {/* ==============================
              HERO TEXT
          ============================== */}

          <div className="faq-hero-text">

            <span className="eyebrow faq-hero-eyebrow">

              Support Center

            </span>


            <h1 className="faq-hero-title">

              Frequently Asked Questions

            </h1>


            <p className="faq-hero-copy">

              Browse answers by topic below,
              or open a question directly.
              Can&apos;t find what you need?
              Send us a message and we&apos;ll
              get back to you.

            </p>

          </div>


          {/* =================================================
              3D QUESTION MARK + ORBITING ICONS
          ================================================== */}

          <div
            className="faq-hero-visual"
            aria-hidden="true"
          >

            <div className="faq-hero-mark-shell">


              {/* ==============================
                  ORBIT
              ============================== */}

              <div className="faq-hero-orbit">


                {/* TOP */}

                <span
                  className="
                    faq-hero-orbit-item
                    faq-hero-orbit-item--top
                  "
                >

                  <span className="faq-hero-orbit-badge">

                    <IconBulb />

                  </span>

                </span>


                {/* RIGHT */}

                <span
                  className="
                    faq-hero-orbit-item
                    faq-hero-orbit-item--right
                  "
                >

                  <span className="faq-hero-orbit-badge">

                    <IconCard />

                  </span>

                </span>


                {/* BOTTOM */}

                <span
                  className="
                    faq-hero-orbit-item
                    faq-hero-orbit-item--bottom
                  "
                >

                  <span className="faq-hero-orbit-badge">

                    <IconShieldLock />

                  </span>

                </span>


                {/* LEFT */}

                <span
                  className="
                    faq-hero-orbit-item
                    faq-hero-orbit-item--left
                  "
                >

                  <span className="faq-hero-orbit-badge">

                    <IconRocket />

                  </span>

                </span>

              </div>


              {/* ==============================
                  CENTER QUESTION MARK
              ============================== */}

              <span className="faq-hero-mark">

                <span className="faq-hero-mark-glyph">

                  ?

                </span>

              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="container">


        {/* ===================================================
            FAQ CATEGORY CARDS
        ==================================================== */}

        <div
          className="faq-categories"
          role="tablist"
          aria-label="FAQ categories"
        >

          {CATEGORIES.map((cat) => {

            const isActive =
              activeCategory === cat.id;


            return (

              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={
                  "faq-category-card" +
                  (
                    isActive
                      ? " faq-category-card-active"
                      : ""
                  )
                }
                onClick={() =>
                  handleCategoryClick(cat.id)
                }
              >


                {/* =========================
                    CATEGORY ICON
                ========================= */}

                <span className="faq-category-icon">

                  <span className="faq-category-icon-spin">

                    {cat.icon}

                  </span>

                </span>


                {/* =========================
                    CATEGORY NAME
                ========================= */}

                <span className="faq-category-label">

                  {cat.label}

                </span>

              </button>

            );

          })}

        </div>


        {/* ===================================================
            FAQ ACCORDION
        ==================================================== */}

        <section className="section faq-accordion-section">

          <div className="stack faq-accordion-list">


            {visibleFaqs.map((item) => {


              /*
                Check whether current question
                is opened.
              */

              const isOpen =
                openQuestion === item.q;


              return (

                <div
                  key={item.q}
                  className={
                    "faq-pill" +
                    (
                      isOpen
                        ? " faq-pill-open"
                        : ""
                    )
                  }
                >


                  {/* =======================================
                      FAQ QUESTION
                  ======================================= */}

                  <button
                    type="button"
                    className="faq-pill-summary"
                    aria-expanded={isOpen}
                    onClick={() =>
                      handleQuestionClick(item.q)
                    }
                  >

                    <span>

                      {item.q}

                    </span>


                    {/* =========================
                        ARROW BUTTON
                    ========================= */}

                    <span
                      className="faq-toggle"
                      aria-hidden="true"
                    >

                      <IconChevron />

                    </span>

                  </button>


                  {/* =======================================
                      FAQ ANSWER

                      It appears only when isOpen = true.
                  ======================================= */}

                  {isOpen && (

                    <div className="faq-pill-answer">

                      <p>

                        {item.a}

                      </p>

                    </div>

                  )}

                </div>

              );

            })}

          </div>

        </section>

      </div>

    </main>

  );
}


/* ============================================================
   ICON WRAPPER
============================================================ */

function iconWrap(
  children: ReactNode,
  size = 24,
) {

  return (

    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
    >

      {children}

    </svg>

  );
}


/* ============================================================
   CHEVRON / ARROW ICON
============================================================ */

function IconChevron() {

  return (

    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      aria-hidden="true"
    >

      <path
        d="M7 10l5 5 5-5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

    </svg>

  );
}


/* ============================================================
   BULB ICON
============================================================ */

function IconBulb() {

  return iconWrap(

    <>

      <path
        d="M9 18h6M10 21h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="
          M12 3
          a6 6 0 0 0-3.5 10.9
          c.6.4.9 1 .9 1.7
          V16
          h5.2
          v-.4
          c0-.7.3-1.3.9-1.7
          A6 6 0 0 0 12 3z
        "
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

    </>,

  );
}


/* ============================================================
   PAYMENT CARD ICON
============================================================ */

function IconCard() {

  return iconWrap(

    <>

      <rect
        x="3"
        y="6"
        width="18"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M3 10h18"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M7 15h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

    </>,

  );
}


/* ============================================================
   SECURITY SHIELD ICON
============================================================ */

function IconShieldLock() {

  return iconWrap(

    <>

      <path
        d="
          M12 3
          l7 3
          v5
          c0 4.5-3 8-7 10
          c-4-2-7-5.5-7-10
          V6
          l7-3z
        "
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />


      <rect
        x="9.5"
        y="11"
        width="5"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.6"
      />


      <path
        d="
          M10.3 11
          V9.7
          a1.7 1.7 0 0 1 3.4 0
          V11
        "
        stroke="currentColor"
        strokeWidth="1.6"
      />

    </>,

  );
}


/* ============================================================
   ROCKET ICON
============================================================ */

function IconRocket() {

  return iconWrap(

    <>

      <path
        d="
          M12 2
          c3 1 5 4 5 8
          c0 2-1 4-2 5
          l-3 3
          l-3-3
          c-1-1-2-3-2-5
          c0-4 2-7 5-8z
        "
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />


      <circle
        cx="12"
        cy="9"
        r="1.6"
        fill="currentColor"
      />


      <path
        d="M9 16l-2 4M15 16l2 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

    </>,

  );
}