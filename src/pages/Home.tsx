import { Button, LinkButton } from '../components/Button'

const STATS = [
  { value: '4.2M', label: 'events processed / day' },
  { value: '99.98%', label: 'uptime over 12 months' },
  { value: '38', label: 'connected integrations' },
]

const FEATURES = [
  { title: 'Live pipelines', body: 'Watch work move through your team in real time, without opening five tabs.' },
  { title: 'Signal routing', body: 'Only the changes that matter reach the people who need to act on them.' },
  { title: 'Version history', body: 'Every state your workspace has ever been in, one click away.' },
  { title: 'Open API', body: 'Everything in the product is available outside it too.' },
]

export function Home() {
  return (
    <div className="page">
      <section className="section split container">
        <div className="stack">
          <span className="eyebrow">Workspace analytics</span>
          <h1>
            See your team's work
            <br />
            before it becomes a problem.
          </h1>
          <p style={{ fontSize: 'var(--text-md)' }}>
            Coinstep turns scattered project activity into one clear picture, so you catch
            slowdowns while there's still time to do something about them.
          </p>
          <div className="row">
            <Button size="lg">Start free</Button>
            <LinkButton href="#platform" variant="secondary" size="lg">
              See how it works
            </LinkButton>
          </div>
        </div>

        <div className="surface" style={{ padding: 'var(--space-lg)' }}>
          <div className="stack">
            <span className="badge badge-new">Live</span>
            <h3 style={{ margin: 0 }}>Weekly velocity</h3>
            <p className="muted">Auto-generated from your connected tools — no manual entry.</p>
            <div className="row-between">
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)' }}>+18%</span>
              <span className="muted" style={{ fontSize: 'var(--text-xs)' }}>vs. last sprint</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="row-between grid-auto" style={{ textAlign: 'center' }}>
          {STATS.map((s) => (
            <div className="stack" key={s.label} style={{ alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)' }}>{s.value}</span>
              <span className="muted" style={{ fontSize: 'var(--text-sm)' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section container" id="platform">
        <div className="stack center" style={{ alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
          <span className="eyebrow">Why teams switch</span>
          <h2 style={{ maxWidth: '20ch' }}>Built for the moment before things go sideways</h2>
        </div>
        <div className="grid-auto-lg">
          {FEATURES.map((f) => (
            <div className="surface stack" style={{ padding: 'var(--space-md)' }} key={f.title}>
              <h4>{f.title}</h4>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <div
          className="surface row-between"
          style={{ padding: 'var(--space-lg)', background: 'var(--color-accent-soft)', border: 'none' }}
        >
          <div className="stack" style={{ gap: 'var(--space-2xs)' }}>
            <h3 style={{ margin: 0 }}>Bring your team's work into focus this week</h3>
            <p className="muted">No credit card. Cancel any time.</p>
          </div>
          <Button size="lg" id="download">
            Get Coinstep
          </Button>
        </div>
      </section>
    </div>
  )
}
