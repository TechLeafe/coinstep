import {
  useEffect,
  type PointerEvent as ReactPointerEvent,
} from "react";

import { Link } from "react-router-dom";
import "./About.css";


/* ============================================================
   VALUES
============================================================ */

const VALUES = [
  {
    title: "User Obsessed",
    body: "We're focused on users' problems and constantly look for simpler, safer solutions.",
  },
  {
    title: "Ownership and accountability",
    body: "We take responsibility for outcomes and move with determination, care, and consistency.",
  },
  {
    title: "Open & Collaborative",
    body: "We share context, work together, and create clearer Web3 experiences as one team.",
  },
  // {
  //   title: "Humble and growth mindset",
  //   body: "We're curious, adaptable, and always ready to learn, improve, and rethink our approach.",
  // },
  // {
  //   title: "Integrity",
  //   body: "We build with good intent, transparent decisions, and high standards for every experience.",
  // },
  // {
  //   title: "Execution-oriented",
  //   body: "We turn ideas into useful products, learn quickly from feedback, and keep improving.",
  // },
];


/* ============================================================
   LOCK / KEY ART
============================================================ */

function KeyArt() {
  return (
    <svg
      className="about-hero-art"
      viewBox="0 0 430 330"
      role="img"
      aria-label="Lock and keys illustration"
    >
      {/* Lock top */}
      <path
        d="M166 92V70c0-37 27-64 64-64s64 27 64 64v24"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="22"
        strokeLinecap="round"
      />

      {/* Lock body */}
      <path
        d="M165 81h131c19 0 35 16 35 35v79c0 19-16 35-35 35H165c-19 0-35-16-35-35v-79c0-19 16-35 35-35Z"
        fill="var(--color-bg-raised)"
      />

      {/* Key hole */}
      <circle
        cx="230"
        cy="143"
        r="17"
        fill="var(--color-accent)"
      />

      <rect
        x="222"
        y="155"
        width="16"
        height="31"
        rx="8"
        fill="var(--color-accent)"
      />

      {/* Left key */}
      <path
        d="M130 173 65 234l20 21 31-29 17 16 25-24-17-16 14-13Z"
        fill="var(--color-ink)"
      />

      <circle
        cx="72"
        cy="237"
        r="13"
        fill="none"
        stroke="var(--color-bg-raised)"
        strokeWidth="7"
      />

      {/* Right key */}
      <path
        d="m278 167 119 104-35 41-119-104Z"
        fill="var(--color-signal)"
      />

      <path
        d="m250 204 28-37 22 19-31 36Z"
        fill="var(--color-ink)"
      />

      <path
        d="m385 258 38 33-29 34-38-33Z"
        fill="var(--color-warn)"
      />
    </svg>
  );
}


/* ============================================================
   TELESCOPE ART
============================================================ */

function TelescopeArt({
  small = false,
}: {
  small?: boolean;
}) {
  return (
    <svg
      className={
        small
          ? "about-telescope-art about-telescope-art--small"
          : "about-telescope-art"
      }
      viewBox="0 0 360 330"
      role="img"
      aria-label="Telescope illustration"
    >
      <path
        d="m48 116 179-73 42 78-182 74Z"
        fill="var(--color-signal)"
      />

      <ellipse
        cx="247"
        cy="82"
        rx="44"
        ry="63"
        transform="rotate(-24 247 82)"
        fill="var(--color-accent)"
      />

      <ellipse
        cx="247"
        cy="82"
        rx="30"
        ry="48"
        transform="rotate(-24 247 82)"
        fill="var(--color-ink)"
      />

      <ellipse
        cx="247"
        cy="82"
        rx="20"
        ry="34"
        transform="rotate(-24 247 82)"
        fill="var(--color-bg-raised)"
        opacity="0.3"
      />

      <path
        d="m82 181 51 18-16 32-51-19Z"
        fill="var(--color-accent)"
      />

      <circle
        cx="103"
        cy="206"
        r="13"
        fill="var(--color-ink)"
      />

      <path
        d="M103 217 58 319M120 220l23 99M110 220l-5 99"
        stroke="var(--color-accent)"
        strokeWidth="15"
        strokeLinecap="round"
      />

      <path
        d="M103 217 58 319M120 220l23 99M110 220l-5 99"
        stroke="var(--color-signal)"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}


/* ============================================================
   CRYSTAL ART
============================================================ */

function CrystalArt() {
  return (
    <svg
      className="about-crystal-art"
      viewBox="0 0 360 330"
      role="img"
      aria-label="Crystal illustration"
    >
      <path
        d="m177 24 88 83-39 163-49 36-55-39-37-156Z"
        fill="var(--color-bg-raised)"
        stroke="var(--color-ink)"
        strokeWidth="4"
      />

      <path
        d="m177 24 49 246-49 36-24-192Z"
        fill="var(--color-ink)"
      />

      <path
        d="m177 24 88 83-88 7Z"
        fill="var(--color-accent)"
      />

      <path
        d="m177 114 88-7-39 163Z"
        fill="var(--color-signal-soft)"
      />

      <path
        d="m85 111 92 3-55 153Z"
        fill="var(--color-accent)"
        opacity="0.86"
      />

      <circle
        cx="54"
        cy="91"
        r="7"
        fill="var(--color-ink)"
      />

      <circle
        cx="304"
        cy="108"
        r="8"
        fill="var(--color-ink)"
      />

      <circle
        cx="67"
        cy="257"
        r="6"
        fill="var(--color-ink)"
      />

      <circle
        cx="291"
        cy="249"
        r="6"
        fill="var(--color-ink)"
      />
    </svg>
  );
}


/* ============================================================
   SHIELD ART
============================================================ */

function ShieldArt() {
  return (
    <svg
      className="journey-illustration"
      viewBox="0 0 320 250"
      role="img"
      aria-label="Security shield illustration"
    >
      <path
        d="M160 15 259 50v70c0 65-38 108-99 130-61-22-99-65-99-130V50Z"
        fill="var(--color-signal)"
        stroke="var(--color-ink)"
        strokeWidth="4"
      />

      <path
        d="M160 15v235c61-22 99-65 99-130V50Z"
        fill="var(--color-accent)"
        opacity="0.9"
      />

      <path
        d="m111 124 31 31 68-75"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


/* ============================================================
   GLOBE ART
============================================================ */

function GlobeArt() {
  return (
    <svg
      className="journey-illustration"
      viewBox="0 0 360 260"
      role="img"
      aria-label="Connected globe illustration"
    >
      <circle
        cx="174"
        cy="130"
        r="91"
        fill="var(--color-accent)"
        stroke="var(--color-ink)"
        strokeWidth="4"
      />

      <ellipse
        cx="174"
        cy="130"
        rx="44"
        ry="91"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="3"
        opacity="0.7"
      />

      <path
        d="M83 130h182M99 86h150M99 174h150"
        stroke="var(--color-ink)"
        strokeWidth="3"
        opacity="0.5"
      />

      <ellipse
        cx="174"
        cy="130"
        rx="126"
        ry="53"
        fill="none"
        stroke="var(--color-signal)"
        strokeWidth="8"
        transform="rotate(-14 174 130)"
      />

      <circle
        cx="51"
        cy="132"
        r="11"
        fill="var(--color-ink)"
      />

      <circle
        cx="289"
        cy="98"
        r="11"
        fill="var(--color-signal)"
      />
    </svg>
  );
}


/* ============================================================
   TEAM ART
============================================================ */

function TeamArt() {
  return (
    <svg
      className="team-art"
      viewBox="0 0 560 410"
      role="img"
      aria-label="Web3 builders illustration"
    >
      <rect
        x="169"
        y="48"
        width="218"
        height="314"
        rx="28"
        fill="var(--color-ink)"
        transform="rotate(8 169 48)"
      />

      <rect
        x="90"
        y="130"
        width="224"
        height="239"
        rx="25"
        fill="var(--color-bg-raised)"
        stroke="var(--color-border-strong)"
        strokeWidth="4"
        transform="rotate(-11 90 130)"
      />

      <rect
        x="336"
        y="210"
        width="146"
        height="133"
        rx="24"
        fill="var(--color-signal)"
        transform="rotate(16 336 210)"
      />

      <circle
        cx="436"
        cy="102"
        r="53"
        fill="var(--color-accent)"
      />

      <path
        d="M390 102h92M436 56v92"
        stroke="var(--color-ink)"
        strokeWidth="14"
        strokeLinecap="round"
      />

      <rect
        x="132"
        y="165"
        width="126"
        height="15"
        rx="7"
        fill="var(--color-accent)"
      />

      <rect
        x="132"
        y="197"
        width="93"
        height="10"
        rx="5"
        fill="var(--color-border-strong)"
      />

      <rect
        x="132"
        y="223"
        width="126"
        height="10"
        rx="5"
        fill="var(--color-border-strong)"
      />

      <rect
        x="132"
        y="265"
        width="135"
        height="64"
        rx="16"
        fill="var(--color-signal-soft)"
      />
    </svg>
  );
}


/* ============================================================
   ABOUT PAGE
============================================================ */

export function About() {

  /* =========================================================
     MOVE ONLY CURRENT ILLUSTRATION
  ========================================================= */

  const handleArtPointerMove = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    if (event.pointerType !== "mouse") {
      return;
    }

    const container = event.currentTarget;

    const rect =
      container.getBoundingClientRect();

    const relativeX =
      event.clientX - rect.left;

    const relativeY =
      event.clientY - rect.top;

    const centerX =
      rect.width / 2;

    const centerY =
      rect.height / 2;

    const normalizedX =
      (relativeX - centerX) /
      centerX;

    const normalizedY =
      (relativeY - centerY) /
      centerY;

    const moveX =
      normalizedX * 22;

    const moveY =
      normalizedY * 18;

    const rotateY =
      normalizedX * 3;

    const rotateX =
      normalizedY * -3;

    container.style.setProperty(
      "--art-x",
      `${moveX}px`,
    );

    container.style.setProperty(
      "--art-y",
      `${moveY}px`,
    );

    container.style.setProperty(
      "--art-rotate-x",
      `${rotateX}deg`,
    );

    container.style.setProperty(
      "--art-rotate-y",
      `${rotateY}deg`,
    );
  };


  /* =========================================================
     RESET ONLY CURRENT ILLUSTRATION
  ========================================================= */

  const handleArtPointerLeave = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    const container =
      event.currentTarget;

    container.style.setProperty(
      "--art-x",
      "0px",
    );

    container.style.setProperty(
      "--art-y",
      "0px",
    );

    container.style.setProperty(
      "--art-rotate-x",
      "0deg",
    );

    container.style.setProperty(
      "--art-rotate-y",
      "0deg",
    );
  };


  /* =========================================================
     SCROLL REVEAL
  ========================================================= */

  useEffect(() => {
    const elements =
      document.querySelectorAll<HTMLElement>(
        ".about-reveal",
      );

    if (
      !(
        "IntersectionObserver"
        in window
      )
    ) {
      elements.forEach(
        (element) => {
          element.classList.add(
            "is-visible",
          );
        },
      );

      return;
    }

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              if (
                entry.isIntersecting
              ) {
                entry.target.classList.add(
                  "is-visible",
                );

                observer.unobserve(
                  entry.target,
                );
              }
            },
          );
        },
        {
          threshold: 0.12,
        },
      );

    elements.forEach(
      (element) => {
        observer.observe(
          element,
        );
      },
    );

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <main className="about-page">

      <div className="about-shell">


        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="about-intro">

          <h1 className="about-intro__wordmark">
            COINSTEP
          </h1>

          <div className="about-intro__content">

            <h2>
              We make Web3 simpler,
              safer, and easier to access
            </h2>

            <p>
              Coinstep is building a modern
              platform that makes interacting
              with Web3 and digital assets
              simpler, clearer, and more
              accessible.
            </p>

            <a
              href="/#download"
              className="
                btn
                btn-primary
                btn-lg
                about-intro__cta
              "
            >
              <span>
                Get Coinstep
              </span>

              <span
                className="about-intro__arrow"
                aria-hidden="true"
              >
                →
              </span>
            </a>

          </div>

        </section>


        {/* =====================================================
            PURPOSE
        ====================================================== */}

        <section
          className="
            about-panel
            about-panel--purpose
            about-reveal
          "
        >

          <p className="about-label">
            Our purpose
          </p>


          <div className="about-panel__content">

            <div className="about-panel__copy">

              <h1>
                Freedom Foundations
              </h1>

              <p>
                We want to give everyone
                the freedom to truly own
                and confidently use digital
                assets by building clear
                foundations for the future
                of Web3.
              </p>

            </div>


            <div
              className="
                about-panel__art
                cursor-animation
              "
              onPointerMove={
                handleArtPointerMove
              }
              onPointerLeave={
                handleArtPointerLeave
              }
            >

              <div className="cursor-animation__object">
                <KeyArt />
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            VISION
        ====================================================== */}

        <section
          className="
            about-panel
            about-panel--vision
            about-reveal
          "
        >

          <p className="about-label">
            Our vision
          </p>


          <div className="about-panel__content">

            <div
              className="
                about-panel__art
                cursor-animation
              "
              onPointerMove={
                handleArtPointerMove
              }
              onPointerLeave={
                handleArtPointerLeave
              }
            >

              <div className="cursor-animation__object">
                <TelescopeArt />
              </div>

            </div>


            <div className="about-panel__copy">

              <h2>
                To give people the
                freedom to own their assets
              </h2>

              <p>
                Help people confidently
                participate in the future
                economy and access
                opportunities that are
                simple to understand and
                secure to use.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            MISSION
        ====================================================== */}

        <section
          className="
            about-panel
            about-panel--mission
            about-reveal
          "
        >

          <p className="about-label">
            Our mission
          </p>


          <div className="about-panel__content">

            <div
              className="
                about-panel__art
                cursor-animation
              "
              onPointerMove={
                handleArtPointerMove
              }
              onPointerLeave={
                handleArtPointerLeave
              }
            >

              <div className="cursor-animation__object">
                <CrystalArt />
              </div>

            </div>


            <div className="about-panel__copy">

              <h2>
                To become a personal
                Web3 companion
              </h2>

              <p>
                Supporting users as they
                navigate wallets,
                transactions, dApps,
                multi-chain experiences,
                and the growing on-chain
                economy.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            JOURNEY
        ====================================================== */}

        <section
          className="
            journey-card
            about-reveal
          "
        >

          <h2>
            Join us as we empower
            people through Web3
          </h2>


          {/* SHIELD */}

          <div className="journey-row">

            <div className="journey-copy">

              <h3>
                Built with a clear goal
              </h3>

              <p>
                CoinStep started with one
                purpose: make crypto
                interactions easier to
                understand, easier to use,
                and safer for everyday
                users.
              </p>

            </div>


            <div
              className="
                journey-art-wrap
                cursor-animation
              "
              onPointerMove={
                handleArtPointerMove
              }
              onPointerLeave={
                handleArtPointerLeave
              }
            >

              <div className="cursor-animation__object">
                <ShieldArt />
              </div>

            </div>

          </div>


          {/* GLOBE */}

          <div className="journey-row">

            <div
              className="
                journey-art-wrap
                cursor-animation
              "
              onPointerMove={
                handleArtPointerMove
              }
              onPointerLeave={
                handleArtPointerLeave
              }
            >

              <div className="cursor-animation__object">
                <GlobeArt />
              </div>

            </div>


            <div className="journey-copy">

              <h3>
                Trust through clarity
              </h3>

              <p>
                We build confidence with
                clear information,
                deliberate confirmation
                flows, and security-first
                product decisions.
              </p>

            </div>

          </div>


          {/* TELESCOPE */}

          <div className="journey-row">

            <div className="journey-copy">

              <h3>
                We're not stopping there
              </h3>

              <p>
                We're building a flexible
                wallet experience across
                networks, assets, dApps,
                mobile, and web so more
                people can move on-chain
                with confidence.
              </p>

            </div>


            <div
              className="
                journey-art-wrap
                cursor-animation
              "
              onPointerMove={
                handleArtPointerMove
              }
              onPointerLeave={
                handleArtPointerLeave
              }
            >

              <div className="cursor-animation__object">
                <TelescopeArt small />
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            VALUES
        ====================================================== */}

        <section
          className="
            values-section
            about-reveal
          "
        >

          <h2>
            Our values
          </h2>


          <div className="values-grid">

            {VALUES.map(
              (value) => (
                <article
                  className="value-card"
                  key={value.title}
                >

                  <h3>
                    {value.title}
                  </h3>

                  <p>
                    {value.body}
                  </p>

                </article>
              ),
            )}

          </div>

        </section>


        {/* =====================================================
            TEAM
        ====================================================== */}

        <section
          className="
            team-section
            about-reveal
          "
        >

          <div className="team-copy">

            <h2>
              We're a passionate team
              of Web3 builders &amp;
              creators
            </h2>

            <p>
              We combine product thinking,
              frontend craft, security
              awareness, and blockchain
              engineering to make complex
              Web3 actions feel simple.
            </p>

            <Link
              to="/build"
              className="
                btn
                btn-primary
                btn-lg
                team-cta
              "
            >
              Explore CoinStep
            </Link>

          </div>


          <div
            className="
              team-art-wrap
              cursor-animation
            "
            onPointerMove={
              handleArtPointerMove
            }
            onPointerLeave={
              handleArtPointerLeave
            }
          >

            <div className="cursor-animation__object">
              <TeamArt />
            </div>

          </div>

        </section>

      </div>

    </main>
  );
}