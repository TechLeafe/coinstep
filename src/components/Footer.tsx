import { Link } from "react-router-dom";
import "./Footer.css";

const COLUMNS = [
  {
    title: "Product",
    links: [
      {
        label: "Platform",
        path: "/platform",
      },
      {
        label: "Features",
        path: "/features",
      },
      {
        label: "Build",
        path: "/build",
      },
    ],
  },

  {
    title: "Resources",
    links: [
      {
        label: "Support",
        path: "/support",
      },
      {
        label: "FAQ",
        path: "/faq",
      },
    ],
  },

  {
    title: "Company",
    links: [
      {
        label: "About",
        path: "/about",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        {/* =========================
            TOP FOOTER
        ========================== */}

        <div className="footer-grid">

          {/* BRAND SECTION */}
          <div className="stack footer-brand-section">

            <Link
              to="/"
              className="nav-brand footer-brand"
            >
              Coinstep
            </Link>

            <p
              className="muted footer-description"
            >
              A secure and simple Web3 wallet for managing
              digital assets, exploring blockchain applications,
              and staying in control of your crypto.
            </p>

          </div>

          {/* FOOTER COLUMNS */}
          {COLUMNS.map((column) => (
            <div
              className="stack"
              key={column.title}
            >
              <span className="eyebrow">
                {column.title}
              </span>

              {column.links.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="footer-link"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}

        </div>

        {/* DIVIDER */}
        <hr className="hairline" />

      {/* =========================
    BOTTOM FOOTER
========================== */}

<div className="row-between footer-bottom">

  {/* COPYRIGHT */}
  <span className="muted footer-copyright">
    © {new Date().getFullYear()} Coinstep.
    All rights reserved.
  </span>

  {/*
  <div className="footer-legal">

    <a
      href="#"
      className="footer-link footer-legal-link"
    >
      Privacy Policy
    </a>

    <a
      href="#"
      className="footer-link footer-legal-link"
    >
      Terms of Service
    </a>

  </div>
  */}

</div>
</div>
</footer>
);
}