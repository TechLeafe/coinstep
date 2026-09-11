const MODULES = [
  { title: 'Pipelines', body: 'Model how work actually moves through your org, not how the org chart says it should.' },
  { title: 'Alerts', body: 'Threshold-based and anomaly-based rules that page the right owner automatically.' },
  { title: 'Dashboards', body: 'Compose views from any connected source without writing a query.' },
  { title: 'Audit trail', body: 'A complete, exportable record of every change for compliance reviews.' },
]

export function Platform() {
  return (
    <div className="page container">
      <section className="section stack" style={{ maxWidth: '48rem' }}>
        <span className="eyebrow">Platform</span>
        <h1>One workspace, every signal</h1>
        <p style={{ fontSize: 'var(--text-md)' }}>
          Coinstep sits underneath the tools your team already uses and gives you a single,
          consistent layer to watch, alert on, and act on what's happening across all of them.
        </p>
      </section>

      <section className="section grid-auto-lg">
        {MODULES.map((m) => (
          <div className="surface stack" style={{ padding: 'var(--space-md)' }} key={m.title}>
            <h4>{m.title}</h4>
            <p>{m.body}</p>
          </div>
        ))}
      </section>
    </div>
  )
}