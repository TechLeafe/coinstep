const GROUPS = [
  {
    title: 'Visibility',
    items: ['Real-time activity feed', 'Cross-tool timelines', 'Custom dashboards', 'Saved views'],
  },
  {
    title: 'Response',
    items: ['Rule-based alerting', 'On-call routing', 'Escalation policies', 'Incident timelines'],
  },
  {
    title: 'Governance',
    items: ['Full audit log', 'Role-based access', 'Data retention controls', 'SSO / SCIM'],
  },
]

export function Features() {
  return (
    <div className="page container">
      <section className="section stack" style={{ maxWidth: '48rem' }}>
        <span className="eyebrow">Features</span>
        <h1>Everything the job actually needs</h1>
        <p style={{ fontSize: 'var(--text-md)' }}>
          No feature here exists to pad a comparison table — each one shipped because a team
          using Coinstep asked for it twice.
        </p>
      </section>

      <section className="section grid-auto-lg">
        {GROUPS.map((g) => (
          <div className="stack" key={g.title}>
            <h4 style={{ marginBottom: 'var(--space-2xs)' }}>{g.title}</h4>
            <ul className="stack" style={{ margin: 0, padding: 0, listStyle: 'none', gap: 'var(--space-2xs)' }}>
              {g.items.map((item) => (
                <li key={item} className="row" style={{ gap: 'var(--space-2xs)', color: 'var(--color-ink-soft)' }}>
                  <span aria-hidden="true" style={{ color: 'var(--color-signal)' }}>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  )
}
