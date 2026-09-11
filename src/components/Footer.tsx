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

      <div className="container footer-container">

        {/* =========================
            TOP FOOTER
        ========================== */}

        <div className="footer-grid">

          {/* BRAND */}

          <div className="footer-brand-section">

            <Link
              to="/"
              className="footer-brand"
            >
              Coinstep
            </Link>

            <p className="footer-description">
              A secure and simple Web3 wallet for
              managing digital assets, exploring
              blockchain applications, and staying
              in control of your crypto.
            </p>

          </div>


          {/* COLUMNS */}

          {COLUMNS.map((column) => (
            <div
              className="footer-column"
              key={column.title}
            >

              <span className="footer-column-title">
                {column.title}
              </span>

              <div className="footer-links">

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

            </div>
          ))}

        </div>


        {/* DIVIDER */}

        <div className="footer-divider" />


        {/* =========================
            BOTTOM FOOTER
        ========================== */}

        <div className="footer-bottom">

          <span className="footer-copyright">
            © {new Date().getFullYear()} Coinstep.
            All rights reserved.
          </span>

        </div>

      </div>

    </footer>
  );
}