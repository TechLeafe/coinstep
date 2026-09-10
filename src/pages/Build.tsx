const SNIPPET = `curl https://api.coinstep.dev/v1/events \\
  -H "Authorization: Bearer $COINSTEP_KEY" \\
  -d type=deploy \\
  -d service=checkout`

export function Build() {
  return (
    <div className="page container">
      <section className="section split">
        <div className="stack">
          <span className="eyebrow">Build</span>
          <h1>An API for everything in the product</h1>
          <p style={{ fontSize: 'var(--text-md)' }}>
            Every dashboard, alert and pipeline in Coinstep is backed by the same public API —
            if you can see it in the app, you can script it.
          </p>
        </div>
        <div className="surface" style={{ padding: 'var(--space-md)', background: 'var(--color-ink)' }}>
          <pre
            style={{
              margin: 0,
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-bg)',
              whiteSpace: 'pre-wrap',
              overflowWrap: 'break-word',
            }}
          >
            {SNIPPET}
          </pre>
        </div>
      </section>

      <section className="section grid-auto">
        {['REST & GraphQL', 'Webhooks', 'Official SDKs', 'Sandbox environment'].map((item) => (
          <div className="surface stack" style={{ padding: 'var(--space-md)' }} key={item}>
            <h4 style={{ margin: 0 }}>{item}</h4>
          </div>
        ))}
      </section>
    </div>
  )
}
