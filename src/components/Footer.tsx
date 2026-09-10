import './Footer.css'

const COLUMNS = [
  { title: 'Product', links: ['Platform', 'Features', 'Pricing', 'Changelog'] },
  { title: 'Build', links: ['Docs', 'API reference', 'Status', 'SDKs'] },
  { title: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="stack">
            <span className="nav-brand" style={{ fontSize: 'var(--text-md)' }}>
              Coinstep
            </span>
            <p className="muted" style={{ maxWidth: '32ch' }}>
              Operational clarity for teams who ship without slowing down to look for it.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div className="stack" key={col.title}>
              <span className="eyebrow">{col.title}</span>
              {col.links.map((link) => (
                <a key={link} href="#" className="footer-link">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <hr className="hairline" />

        <div className="row-between">
          <span className="muted" style={{ fontSize: 'var(--text-xs)' }}>
            © {new Date().getFullYear()} Coinstep Labs, Inc.
          </span>
          <span className="muted" style={{ fontSize: 'var(--text-xs)' }}>
            Built with a single design-token system.
          </span>
        </div>
      </div>
    </footer>
  )
}
