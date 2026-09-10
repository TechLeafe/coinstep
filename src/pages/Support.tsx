import { Button } from '../components/Button'

const FAQS = [
  { q: 'How long does setup take?', a: 'Most teams connect their first tool and see live data in under ten minutes.' },
  { q: 'Can I self-host?', a: 'Yes — a self-hosted deployment is available on the Business plan.' },
  { q: 'Do you offer SSO?', a: 'SAML SSO and SCIM provisioning are included on Team plans and above.' },
]

export function Support() {
  return (
    <div className="page container">
      <section className="section stack" style={{ maxWidth: '48rem' }}>
        <span className="eyebrow">Support</span>
        <h1>Answers, and a person if you need one</h1>
      </section>

      <section className="section stack" style={{ maxWidth: '40rem' }}>
        {FAQS.map((f) => (
          <details className="surface" style={{ padding: 'var(--space-sm) var(--space-md)' }} key={f.q}>
            <summary style={{ cursor: 'pointer', fontWeight: 'var(--weight-medium)' }}>{f.q}</summary>
            <p style={{ marginTop: 'var(--space-xs)' }}>{f.a}</p>
          </details>
        ))}
      </section>

      <section className="section surface row-between" style={{ padding: 'var(--space-lg)' }}>
        <div className="stack" style={{ gap: 'var(--space-2xs)' }}>
          <h4 style={{ margin: 0 }}>Still stuck?</h4>
          <p className="muted">Our team replies within one business day.</p>
        </div>
        <Button>Contact support</Button>
      </section>
    </div>
  )
}
