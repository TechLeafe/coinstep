import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

import { Footer } from "../components/Footer";
import { CryptoStairs } from "../components/CryptoStairs";

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
   ANIMATED COINSTEP BRAND
   Only replaces the top COINSTEP wordmark.
============================================================ */

const BRAND_CRYPTO_SYMBOLS = [
  "bitcoin",
  "ethereum",
  "bnb",
  "solana",
  "polygon",
] as const;


type BrandCryptoSymbol =
  (typeof BRAND_CRYPTO_SYMBOLS)[number];


function BrandCryptoIcon({
  symbol,
}: {
  symbol: BrandCryptoSymbol;
}) {

  if (symbol === "bitcoin") {
    return (
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <circle
          cx="50"
          cy="50"
          r="34"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="5"
        />

        <text
          x="50"
          y="62"
          textAnchor="middle"
          fontSize="46"
          fontWeight="800"
          fill="var(--color-accent)"
          fontFamily="Arial, sans-serif"
        >
          ₿
        </text>
      </svg>
    );
  }


  if (symbol === "ethereum") {
    return (
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <g
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="5"
          strokeLinejoin="round"
        >
          <path
            d="M50 16 68 50 50 60 32 50Z"
            fill="var(--about-accent-12)"
          />

          <path
            d="M50 64 68 54 50 84 32 54Z"
            fill="var(--about-accent-8)"
          />
        </g>
      </svg>
    );
  }


  if (symbol === "bnb") {
    return (
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <g
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="5"
          strokeLinejoin="round"
        >
          <path d="M50 21 63 34 50 47 37 34Z" />
          <path d="M23 50 35 38 47 50 35 62Z" />
          <path d="M77 50 65 38 53 50 65 62Z" />
          <path d="M50 53 63 66 50 79 37 66Z" />

          <path
            d="M50 42 58 50 50 58 42 50Z"
            fill="var(--about-accent-18)"
          />
        </g>
      </svg>
    );
  }


  if (symbol === "solana") {
    return (
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <g
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="7"
          strokeLinecap="round"
        >
          <path d="M28 31H72" />
          <path d="M24 50H68" />
          <path d="M28 69H72" />
        </g>
      </svg>
    );
  }


  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <path d="M34 58 24 52V40L34 34 44 40V52Z" />
        <path d="M66 66 56 60V48L66 42L76 48V60Z" />
        <path d="M44 46H56" />
      </g>
    </svg>
  );
}



/* ============================================================
   FINAL COINSTEP LOGO
   Exact thin logo from the supplied reference screenshot.
   Color: #025B82

   IMPORTANT:
   Only this artwork changed.
   Existing rotation / drop / float timing stays unchanged.
============================================================ */

const COINSTEP_END_LOGO =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABOCAYAAABR5FoCAAAFk0lEQVR4nO2cX4hVRRzHP9e8W1vXB3dXW+0fRVtGtRVEVOJDVEJF/4wisH/Wgy9SIphUUChRWfaHIsKXrIwwon9I9lL2ELUGhbWr6G5BkKWl5RJrmd5qe/id5c49e/7MOZ6ZOSfmA8udM2fuzPjdOTO/P2etTVm4Ck+xTHE9gf8jXlQDeFEN4EU1gBfVAF5UA3hRDeBFNYAX1QBeVAN4UQ3gRTWAF9UAXlQDeFEN4EU1gBfVAFUXdTrQCMqN4No5VRZ1DbAfGAPqwed+4DqXk4JqizpDKU9Vyl22JxKmyqKWliqLepRSPlYpd9qeSJip6U1KRR3oBi4AFir1u5Tyo8ApwAjwJTAMHLI1QaiOqA1gJbAs5r66OruAFRFtuoDRgucVSdkf/0uBfcjJHieoLnOPfDp6lHWldgO/FtyntQVUtpVaB+4mWdAzgJrGz7lGZ5pAmVZqHTgcc+9lYAlwMEN/2454Rjkpi6jTEW8ozC3AWwWNYc3UKsPj3020oHPJLmg/sB0YD35UNgBXIb/ATuTgW5qxfy1cr9ROovfPWsZ++oFvNNptCj4/BeYF5bVk21ZScb1Sn4yoyyroOqIFfQGxTWvALOAV5d48pax6ZoXgUtTLkcNHJaugtwN3RdSfD9xLy9j/GVgEdGTsPxcuRf0odN2fo4/XYupHYuqbwJwc42TClajnhK6vBoYy9lHPOfZwzu9p40LUBi0BJ1zHTTFt0/qJ486U725Qys0cYyfiQtSLlPJnQF9QDptAaRxIuPcScELC/YkD8l8MRLBciLo6dP0tLZdynHbRk0hbYT8C9xO9TWxFDsXCT36wL2oDuDCifgg4G7gS+AL9BN6bKfdXAz9k6K8QbIt6dMK97che+AziYa3T6G+RRpveoL9xJh+QRrAtalpS7jbE9uxD7M+lKe0PIranrkc0hLinRleubVF1/jEzkH32WuBZ0g+wJpKjWqM5h6eRlXuxZvvM2Bb1xAxtN9Ja2TqWwXLk8LlCs/8BDAlrW9QsZtOtwDU5xvgY+WV8r9F2AANbgW1Rk2xLlVnAYmA9cBPxMYFeouOko8BpQA9iTagspj1fdbPmnLSxLeqelPtPIKtzD3AZIso7MW2fD9r9mdDfb8gj/p5StxZJJt6jXBeKbVH3JdzrRdzHD5CIfw0RJY5pGca9EXhAuR5BnoIJ8sYRIrEtalwOqg8Jz30N3IBexF8NsHdrtF8fuh5GUuCbKdj/tx35D++p1wN/ICbUbuB08kXhB0n29WHyNnEq8DlwfI7xErG9UptI8BjE338fiasuQUTJm9aYDZyZ0mZmTH3WQE4qLgIqrwefavz0xQL63UmyG7wzou4xkvf5XLgQdZT2fBEUZyv+hWwxdyAmVT/wHNGr8XHgoYLGbcNVNnUZ7bmlbaTviWF+Dz4fAY6hdbofB7ya8L1hxLoYzDieNq7SKaO056hmI2/1ZWE5csisAh6klTV9KqLtVmA+EiOYg0FBAWoO/wulBvI2n8o09L2u0uIym3qAyY/8GOJJVRrXL1PsBhaE6jaTnNQrPa5FBXgXuCRUNwa87WAuhVAGUQG2ILl/lQWIKWT85YeiKYuoAB8ip3eYHYi4K8n+OmShgRJdyiQqSFClB8nbh3kY8d/HgfuQfTcsWh1xR98I2h1GAjRWcWlSpTET+KWgvnYBJxfUVyplW6kqe5FM6XlMDttl5SQs5v7LLCpIVGsQ8eW7kLhrluDLIcSy6MHS31BB+UVVGQW+Q8KEHbSnWeYr5RWIZ9aBxAS2kJxBKBzXr6fnpUl70HlAKe/FsatbpZWaxD+uJ6BSZVHV9/z/Vso/2Z5ImKo+/iCv+XyCiNgEzkJCeztcTgqqLSrAV0o5Kl3ihCo//qXFi2oAL6oBvKgG8KIawItqAC+qAf4DDKHZsn1qUakAAAAASUVORK5CYII=";


function CoinstepEndLogo() {
  return (
    <img
      className="about-intro__end-logo-svg"
      src={COINSTEP_END_LOGO}
      alt=""
      aria-hidden="true"
      draggable={false}
      style={{
        transform: "scale(1.75)",
        transformOrigin: "center",
      }}
    />
  );
}


/* ============================================================
   COINSTEP BRAND ANIMATION
============================================================ */

function CoinstepAnimatedBrand() {

  const coinRef =
    useRef<HTMLSpanElement>(null);

  const [
    symbolIndex,
    setSymbolIndex,
  ] = useState(0);


  useEffect(() => {

    const coin =
      coinRef.current;

    if (!coin) {
      return;
    }


    /*
      Full rotation = 360 degrees.

      Full rotation duration = 12 seconds.

      Symbols:

      Bitcoin
      Ethereum
      BNB
      Solana
      Polygon

      The symbol changes ONLY when the coin
      reaches its thin edge.

      First edge:
      -90 degrees

      Second edge:
      -270 degrees

      This prevents the user from seeing
      the same symbol on two visible faces.
    */

    const FULL_ROTATION =
      12000;


    let frameId =
      0;


    const startTime =
      performance.now();


    let lastSymbolIndex =
      0;


    const tick = (
      now: number,
    ) => {

      const elapsed =
        now - startTime;


      const cycle =
        Math.floor(
          elapsed /
          FULL_ROTATION,
        );


      const cycleElapsed =
        elapsed %
        FULL_ROTATION;


      const progress =
        cycleElapsed /
        FULL_ROTATION;


      const angle =
        -(progress * 360);


      coin.style.transform =
        `perspective(900px) rotateY(${angle}deg)`;


      /*
        0% - 25%
        First visible face.

        25%
        Exact -90° edge.
        Change symbol once.

        25% - 75%
        Second visible face.

        75%
        Exact -270° edge.
        Change symbol once.

        75% - 100%
        Next face comes back.

        No other symbol change happens.
      */

      const changesInsideCycle =
        progress >= 0.75
          ? 2
          : progress >= 0.25
            ? 1
            : 0;


      const totalChanges =
        cycle * 2 +
        changesInsideCycle;


      const nextSymbolIndex =
        totalChanges %
        BRAND_CRYPTO_SYMBOLS.length;


      if (
        nextSymbolIndex !==
        lastSymbolIndex
      ) {

        lastSymbolIndex =
          nextSymbolIndex;


        setSymbolIndex(
          nextSymbolIndex,
        );
      }


      frameId =
        window.requestAnimationFrame(
          tick,
        );
    };


    frameId =
      window.requestAnimationFrame(
        tick,
      );


    return () => {

      window.cancelAnimationFrame(
        frameId,
      );
    };

  }, []);


  return (
    <div className="about-intro__brand">

      <h1
        className="about-intro__wordmark"
        aria-label="Coinstep"
      >

        <span
          className="
            about-intro__brand-letter
            about-intro__brand-letter--1
          "
        >
          C
        </span>


        <span
          className="about-intro__crypto-slot"
          aria-hidden="true"
        >

          <span
            ref={coinRef}
            className="about-intro__crypto-coin"
          >

            <span className="about-intro__crypto-symbol">

              <BrandCryptoIcon
                symbol={
                  BRAND_CRYPTO_SYMBOLS[
                    symbolIndex
                  ]
                }
              />

            </span>

          </span>

        </span>


        <span
          className="
            about-intro__brand-letter
            about-intro__brand-letter--3
          "
        >
          I
        </span>


        <span
          className="
            about-intro__brand-letter
            about-intro__brand-letter--4
          "
        >
          N
        </span>


        <span
          className="
            about-intro__brand-letter
            about-intro__brand-letter--5
          "
        >
          S
        </span>


        <span
          className="
            about-intro__brand-letter
            about-intro__brand-letter--6
          "
        >
          T
        </span>


        <span
          className="
            about-intro__brand-letter
            about-intro__brand-letter--7
          "
        >
          E
        </span>


        <span
          className="
            about-intro__brand-letter
            about-intro__brand-letter--8
          "
        >
          P
        </span>


        {/* Two growing steps connect directly to P */}

        <span
          className="about-intro__brand-end-steps"
          aria-hidden="true"
        >

          <svg
            className="about-intro__brand-end-steps-svg"
            viewBox="-18 0 168 70"
            preserveAspectRatio="none"
          >

            <path
              className="about-intro__brand-end-steps-line"
              pathLength="1"
              d="
                M-18 64
                H54
                V42
                H104
                V20
                H148
              "
            />

          </svg>


          {/* Appears only after the brand + step animation completes */}

          <span className="about-intro__end-logo-wrap">

            <span className="about-intro__end-logo-spin">

              <CoinstepEndLogo />

            </span>

          </span>

        </span>

      </h1>

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


    const container =
      event.currentTarget;


    const rect =
      container.getBoundingClientRect();


    const relativeX =
      event.clientX -
      rect.left;


    const relativeY =
      event.clientY -
      rect.top;


    const centerX =
      rect.width / 2;


    const centerY =
      rect.height / 2;


    const normalizedX =
      (
        relativeX -
        centerX
      ) /
      centerX;


    const normalizedY =
      (
        relativeY -
        centerY
      ) /
      centerY;


    const moveX =
      normalizedX *
      22;


    const moveY =
      normalizedY *
      18;


    const rotateY =
      normalizedX *
      3;


    const rotateX =
      normalizedY *
      -3;


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
        in
        window
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
          threshold:
            0.12,
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

            <CoinstepAnimatedBrand />


            <div className="about-intro__hero-grid">


              {/* LEFT SIDE ANIMATION */}

              <div
                className="about-intro__animation"
                aria-hidden="true"
              >

                <CryptoStairs />

              </div>


              {/* RIGHT SIDE CONTENT */}

              <div className="about-intro__content">

                <h2>
                  A simpler, safer way to experience Web3
                </h2>

                <p>
                  CoinStep is a modern Web3 wallet designed to make
                  managing digital assets, exploring decentralized
                  applications (dApps), and navigating multi-chain
                  experiences simpler, clearer, and more accessible.
                </p>

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


            {/* =================================================
                TRUST THROUGH CLARITY
            ================================================== */}

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
              Our Values
            </h2>


            <div className="values-grid">

              {
                VALUES.map(
                  (value) => (

                    <article
                      className="value-card"
                      key={
                        value.title
                      }
                    >

                      <h3>
                        {
                          value.title
                        }
                      </h3>

                      <p>
                        {
                          value.body
                        }
                      </p>

                    </article>

                  ),
                )
              }

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


          {/* =====================================================
              FINAL CTA
          ====================================================== */}

          {/*
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
          */}


        </div>

      </main>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />


    </>
  );
}