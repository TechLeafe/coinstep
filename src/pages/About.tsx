const TIMELINE = [
  { year: '2022', text: 'Coinstep started as an internal tool for a 6-person ops team.' },
  { year: '2023', text: 'Opened up to the public after three companies asked to use it.' },
  { year: '2025', text: 'Crossed 4,000 connected workspaces across 40 countries.' },
]

export function About() {
  return (
    <div className="page container">
      <section className="section stack" style={{ maxWidth: '48rem' }}>
        <span className="eyebrow">About</span>
        <h1>We got tired of finding out too late</h1>
        <p style={{ fontSize: 'var(--text-md)' }}>
          Coinstep is built by a small team who spent years watching incidents get discovered
          in a stand-up instead of a dashboard. We're fixing that, one connected tool at a time.
        </p>
      </section>

      <section className="section stack" style={{ maxWidth: '40rem' }}>
        {TIMELINE.map((t) => (
          <div className="row" key={t.year} style={{ alignItems: 'flex-start' }}>
            <span
              className="eyebrow"
              style={{ minWidth: '4rem', color: 'var(--color-accent)' }}
            >
              {t.year}
            </span>
            <p style={{ margin: 0 }}>{t.text}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
