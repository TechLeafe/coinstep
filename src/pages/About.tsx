import {
  useEffect,
  type PointerEvent as ReactPointerEvent,
} from "react";

import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

import "./About.css";


/* ============================================================
   VALUES
============================================================ */

const VALUES = [
  {
    title: "User-First",
    body: "We start with the user's needs. We continuously look for ways to make Web3 experiences simpler, clearer, and safer.",
  },
  {
    title: "Ownership & Accountability",
    body: "We take responsibility for our decisions and outcomes. We work with determination, care, and consistency to build products users can trust.",
  },
  {
    title: "Open & Collaborative",
    body: "We believe better products come from sharing knowledge, communicating openly, and working together. We collaborate across product, design, engineering, and blockchain to create better Web3 experiences.",
  },
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
   HERO WEB3 ORBIT ICON
============================================================ */

function Web3OrbitIcon() {
  return (
    <div
      className="about-intro__orbit-badge"
      aria-hidden="true"
    >
      <svg
        className="about-intro__orbit-icon"
        viewBox="0 0 88 88"
      >
        <circle
          className="about-intro__orbit-track"
          cx="44"
          cy="44"
          r="30"
        />

        <g className="about-intro__orbit-spinner">
          <circle
            cx="44"
            cy="14"
            r="5"
            fill="var(--color-accent)"
          />
          <circle
            cx="69"
            cy="58"
            r="4.5"
            fill="var(--color-signal)"
          />
          <circle
            cx="19"
            cy="59"
            r="4"
            fill="var(--color-warn)"
          />
        </g>

        <g className="about-intro__orbit-core">
          <circle
            cx="37"
            cy="44"
            r="11"
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth="5"
          />
          <circle
            cx="51"
            cy="44"
            r="11"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="5"
          />
        </g>
      </svg>
    </div>
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
    const rect = container.getBoundingClientRect();

    const relativeX = event.clientX - rect.left;
    const relativeY = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const normalizedX = (relativeX - centerX) / centerX;
    const normalizedY = (relativeY - centerY) / centerY;

    const moveX = normalizedX * 22;
    const moveY = normalizedY * 18;

    const rotateY = normalizedX * 3;
    const rotateX = normalizedY * -3;

    container.style.setProperty("--art-x", `${moveX}px`);
    container.style.setProperty("--art-y", `${moveY}px`);
    container.style.setProperty("--art-rotate-x", `${rotateX}deg`);
    container.style.setProperty("--art-rotate-y", `${rotateY}deg`);
  };


  /* =========================================================
     RESET ONLY CURRENT ILLUSTRATION
  ========================================================= */

  const handleArtPointerLeave = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {

    const container = event.currentTarget;

    container.style.setProperty("--art-x", "0px");
    container.style.setProperty("--art-y", "0px");
    container.style.setProperty("--art-rotate-x", "0deg");
    container.style.setProperty("--art-rotate-y", "0deg");
  };


  /* =========================================================
     SCROLL REVEAL
  ========================================================= */

  useEffect(() => {

    const elements =
      document.querySelectorAll<HTMLElement>(
        ".about-reveal",
      );

    if (!("IntersectionObserver" in window)) {

      elements.forEach((element) => {
        element.classList.add("is-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "is-visible",
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      },
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };

  }, []);


  /* =========================================================
     PAGE
  ========================================================= */

  return (
    <>
      <main className="about-page">
        <div className="about-shell">

          {/* =====================================================
              HERO
          ====================================================== */}

          <section className="about-intro">

            <div className="about-intro__brand">
              <h1
                className="about-intro__wordmark"
                data-text="COINSTEP"
              >
                COINSTEP
              </h1>

            </div>

            <div className="about-intro__content">

              <h2>
                A simpler, safer way to experience Web3
              </h2>

              <p>
                Coinstep is a modern Web3 wallet designed to make managing digital assets,
                exploring decentralized applications (dApps), and navigating multi-chain
                experiences simpler, clearer, and more accessible.
              </p>

             

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
              Our Purpose
            </p>

            <div className="about-panel__content">

              <div className="about-panel__copy">

                <h1>
                  Building the foundations for digital ownership
                </h1>

                <p>
                  We believe everyone should have greater control over how they manage their digital assets.Coinstep is building an intuitive,security-focused
                  Web3 wallet that helps people take control of their assets while making
                  blockchain technology easier to understand and use.
                </p>

              </div>

              <div
                className="
                  about-panel__art
                  cursor-animation
                "
                onPointerMove={handleArtPointerMove}
                onPointerLeave={handleArtPointerLeave}
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
              Our Vision
            </p>

            <div className="about-panel__content">

              <div
                className="
                  about-panel__art
                  cursor-animation
                "
                onPointerMove={handleArtPointerMove}
                onPointerLeave={handleArtPointerLeave}
              >
                <div className="cursor-animation__object">
                  <TelescopeArt />
                </div>
              </div>

              <div className="about-panel__copy">

                <h2>
                  Give people the freedom to own their digital assets
                </h2>

                <p>
                  We want to help people confidently participate in the digital economy by
                  providing a simple and security focused way to manage digital assets, connect with
                  Web3 applications, and explore new opportunities across blockchain networks.
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
              Our Mission
            </p>

            <div className="about-panel__content">

              <div
                className="
                  about-panel__art
                  cursor-animation
                "
                onPointerMove={handleArtPointerMove}
                onPointerLeave={handleArtPointerLeave}
              >
                <div className="cursor-animation__object">
                  <CrystalArt />
                </div>
              </div>

              <div className="about-panel__copy">

                <h2>
                  Become your personal Web3 companion
                </h2>

                <p>
                  Our mission is to make everyday Web3 interactions easier through a wallet
                  experience built around simplicity, security, and clarity.
                </p>

                <p>
                  From managing digital assets and sending transactions to connecting with
                  dApps and exploring multi-chain ecosystems, Coinstep is designed to help
                  users navigate Web3 with confidence.
                </p>

              </div>
            </div>
          </section>


          {/* =====================================================
              EMPOWERING PEOPLE THROUGH WEB3
          ====================================================== */}

          <section
            className="
              journey-card
              about-reveal
            "
          >

            <h2>
              Empowering people through Web3
            </h2>


            {/* =================================================
                BUILT WITH A CLEAR PURPOSE
            ================================================== */}

            <div className="journey-row">

              <div className="journey-copy">

                <h3>
                  Built with a clear purpose
                </h3>

                <p>
                  Coinstep was created with one goal: to make crypto and Web3 interactions
                  easier to understand, easier to use, with clearer and more security-conscious interactions for everyday users.
                </p>

                <p>
                  We combine thoughtful product design, intuitive experiences, and
                  security-focused technology to reduce the complexity of interacting with
                  blockchain networks and digital assets.
                </p>

              </div>

              <div
                className="
                  journey-art-wrap
                  cursor-animation
                "
                onPointerMove={handleArtPointerMove}
                onPointerLeave={handleArtPointerLeave}
              >
                <div className="cursor-animation__object">
                  <ShieldArt />
                </div>
              </div>

            </div>


            {/* =================================================
                TRUST THROUGH CLARITY
            ================================================== */}

            <div className="journey-row">

              <div
                className="
                  journey-art-wrap
                  cursor-animation
                "
                onPointerMove={handleArtPointerMove}
                onPointerLeave={handleArtPointerLeave}
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
                  Security and transparency are at the heart of the Coinstep experience.
                </p>

                <p>
                  We help users make informed decisions through clear information, deliberate
                  transaction confirmation flows, and security-first product design. Our goal
                  is to make every interaction easier to understand before users take action.
                </p>

              </div>

            </div>


            {/* =================================================
                BUILDING FOR THE FUTURE
            ================================================== */}

            <div className="journey-row">

              <div className="journey-copy">

                <h3>
                  Building for the future of Web3
                </h3>

                <p>
                  Web3 is constantly evolving, and so are the ways people interact with
                  digital assets.
                </p>

                <p>
                  Coinstep is building a flexible wallet experience across blockchain
                  networks, digital assets, decentralized applications, mobile, and web.
                  We are focused on creating a flexible foundation that can grow with the
                  Web3 ecosystem and its users.
                </p>

              </div>

              <div
                className="
                  journey-art-wrap
                  cursor-animation
                "
                onPointerMove={handleArtPointerMove}
                onPointerLeave={handleArtPointerLeave}
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
              Our Values
            </h2>

            <div className="values-grid">

              {VALUES.map((value) => (
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
              ))}

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
                We're a team of Web3 builders and creators
              </h2>

              <p>
                We bring together product thinking, frontend development, blockchain
                engineering, security awareness, and creative problem-solving to make
                complex Web3 interactions feel simple.
              </p>

              <p>
                Together, we are building Coinstep to help more people confidently discover,
                understand, and participate in the decentralized web.
              </p>

            </div>

            <div
              className="
                team-art-wrap
                cursor-animation
              "
              onPointerMove={handleArtPointerMove}
              onPointerLeave={handleArtPointerLeave}
            >
              <div className="cursor-animation__object">
                <TeamArt />
              </div>
            </div>

          </section>


          {/* =====================================================
              FINAL CTA
          ====================================================== */}

          <section
            className="
              about-panel
              about-panel--final
              about-reveal
            "
          >
            <div className="about-panel__content">

              <div className="about-panel__copy">

                <h2>
                  Building a simpler future for Web3
                </h2>

                <p>
                  Coinstep is focused on making digital asset ownership more accessible
                  through an intuitive, security-focused, and user-friendly Web3 wallet.
                </p>

                <Link
                  to="/build"
                  className="
                    btn
                    btn-primary
                    about-final-cta
                    about-compact-cta
                  "
                >
                  <span>
                    Explore Coinstep
                  </span>

                  <span
                    className="about-intro__arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>

              </div>
            </div>
          </section>

        </div>
      </main>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />

    </>
  );
}
