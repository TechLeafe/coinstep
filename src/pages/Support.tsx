import React from 'react';

const SvgIcon = ({ path, className, children }: { path?: string; className?: string; children?: React.ReactNode }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00d1ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {path ? <path d={path} /> : children}
  </svg>
);

const TOPICS = [
  { title: 'Getting Started with Coinstep', desc: 'Learn the basics of setup', cls: 'topic-float', fill1: '#1D4ED8', fill2: '#60A5FA' },
  { title: 'Buying and Cashing Out Crypto', desc: 'Manage fiat and token exchange', fill1: '#1E293B', isCrypto: true },
  { title: 'Generating Rewards', desc: 'Earn passive yield on assets', cls: 'topic-pulse', fill1: '#C084FC', text: '%' },
  { title: 'Connecting to DeFi and dApps', desc: 'Explore decentralized Web3 applications', fill1: '#2563EB', isDeFi: true },
  { title: 'Security', desc: 'Protect and safeguard your account', cls: 'topic-breathe', fill1: '#34D399' },
  { title: 'How-to Guides', desc: 'Step by step user tutorials', isGuide: true },
];

const SEC_ITEMS = [
  { title: 'Protect your recovery phrase', sub: 'Keep it private and never share it.', icon: <SvgIcon><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 8 9 9"/></SvgIcon> },
  { title: 'Avoid scams and phishing', sub: 'Learn to spot and avoid common threats.', icon: <SvgIcon><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></SvgIcon> },
  { title: 'Secure your wallet', sub: 'Use strong security practices.', icon: <SvgIcon><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></SvgIcon> },
  { title: 'Report suspicious activity', sub: 'Help us keep the community safe.', icon: <SvgIcon><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></SvgIcon> },
];

const CATS = [
  { title: 'Wallet', desc: 'Set up, manage and back up your wallet.', cls: 'c-wallet', path: 'M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4 M4 6v12a2 2 0 0 0 2 2h14v-4 M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z' },
  { title: 'Transactions', desc: 'Send, receive and track transactions.', cls: 'c-tx', icon: <SvgIcon className="c-tx"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></SvgIcon> },
  { title: 'Buy Crypto', desc: 'Buy crypto with local payment methods.', cls: 'c-card', icon: <SvgIcon className="c-card"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></SvgIcon> },
  { title: 'Swap', desc: 'Swap tokens across networks.', cls: 'c-swap', path: 'M7 16V4M7 4L3 8M7 4L11 8M17 8V20M17 20L21 16M17 20L13 16' },
  { title: 'Staking', desc: 'Stake tokens and earn rewards.', cls: 'c-staking', icon: <SvgIcon className="c-staking"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6 M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/></SvgIcon> },
  { title: 'Web3 / dApps', desc: 'Connect to dApps and explore Web3.', cls: 'c-cube', icon: <SvgIcon className="c-cube"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></SvgIcon> },
  { title: 'Security', desc: 'Keep your wallet and assets safe.', cls: 'c-shield', path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
  { title: 'Troubleshooting', desc: 'Fix common issues and errors.', cls: 'c-wrench', path: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z' },
];

export function Support() {
  return (
    <div 
      className="page container stack" 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '2.5rem', 
        paddingTop: '1.5rem', 
        paddingBottom: '3rem',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        boxSizing: 'border-box' 
      }}
    >
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        @keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.08)} }
        @keyframes spin { 100%{transform:rotate(360deg)} }
        @keyframes glow { 50%{filter:drop-shadow(0 0 6px #38bdf8)} }
        @keyframes slide { 50%{transform:translateX(-4px)} }
        @keyframes breathe { 50%{transform:scale(1.06);filter:drop-shadow(0 0 8px #34d399)} }
        @keyframes wrench { 25%{transform:rotate(-12deg)} 75%{transform:rotate(12deg)} }

        .topic-float { animation: float 3s ease-in-out infinite; transform-origin: center; }
        .topic-pulse { animation: pulse 2.8s ease-in-out infinite; transform-origin: center; }
        .topic-breathe { animation: breathe 3.2s ease-in-out infinite; transform-origin: center; }
        .sh-grp { animation: float 3.5s ease-in-out infinite; transform-origin: center; }
        .sh-glow { animation: pulse 2.5s ease-in-out infinite; }

        .c-wallet { animation: float 3s ease-in-out infinite; transform-origin: center; }
        .c-tx { animation: slide 2.5s ease-in-out infinite; }
        .c-card { animation: glow 3s ease-in-out infinite; }
        .c-swap { animation: float 2.5s ease-in-out infinite; }
        .c-staking { animation: float 2.8s ease-in-out infinite; }
        .c-cube { animation: spin 12s linear infinite; transform-origin: center; }
        .c-shield { animation: pulse 3s ease-in-out infinite; transform-origin: center; }
        .c-wrench { animation: wrench 3.2s ease-in-out infinite; transform-origin: center; }

        .section-heading { color: #0f172a; }
        .section-subtitle { color: #64748b; }

        @media (prefers-color-scheme: dark) {
          .section-heading { color: #ffffff !important; }
          .section-subtitle { color: #94a3b8 !important; }
        }
        
        [data-theme='dark'] .section-heading,
        .dark .section-heading { color: #ffffff !important; }

        [data-theme='dark'] .section-subtitle,
        .dark .section-subtitle { color: #94a3b8 !important; }

        /* Card Base Transition & Subtle Default Shadow */
        .interactive-card {
          transition: all 0.25s ease-in-out;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        }

        /* Reduced Soft Hover Glow */
        .interactive-card:hover {
          transform: translateY(-3px);
          border-color: rgba(0, 209, 255, 0.3) !important;
          box-shadow: 0 4px 12px rgba(0, 209, 255, 0.12);
        }

        /* Reduced Icon Box Hover Shadow */
        .interactive-card:hover > div:first-child {
          border-color: rgba(0, 209, 255, 0.35) !important;
          box-shadow: 0 0 6px rgba(0, 209, 255, 0.15);
        }

        /* Responsive Grids (Exactly 3 cards per row) */
        .topics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        @media (max-width: 992px) {
          .topics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .topics-grid, .categories-grid {
            grid-template-columns: 1fr;
          }
        }

        .security-banner {
          background: linear-gradient(135deg, rgba(5,15,35,0.95) 0%, rgba(10,30,65,0.98) 100%);
          border: 1px solid rgba(0,209,255,0.2);
          border-radius: 1.25rem;
          padding: 2.5rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          align-items: center;
          gap: 2rem;
        }
      `}</style>

      {/* Hero Header */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h1 className="section-heading" style={{ fontSize: '2.5rem', fontWeight: 700, margin: 0 }}>How can we help you</h1>
        <p className="section-subtitle" style={{ margin: 0, fontSize: '1.05rem' }}>Get help with your wallet, transactions, Web3, and security.</p>
      </section>

      {/* Support Topics */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h2 className="section-heading" style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>Support topics</h2>
        <div className="topics-grid">
          {TOPICS.map((t) => (
            <div 
              key={t.title} 
              className="interactive-card"
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                textAlign: 'center', 
                padding: '1.75rem 1.25rem', 
                borderRadius: '1rem', 
                cursor: 'pointer', 
                minHeight: '170px', 
                background: '#0b0f19', 
                border: '1px solid rgba(255, 255, 255, 0.08)' 
              }}
            >
              <div style={{ marginBottom: '0.75rem', transition: 'all 0.3s ease' }}>
                <svg width="64" height="64" viewBox="0 0 100 100" fill="none" className={t.cls || ''}>
                  {t.text && <><circle cx="50" cy="50" r="35" fill={t.fill1} /><text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#FFF" fontSize="28" fontWeight="bold">%</text></>}
                  {t.fill2 && <><path d="M50 10L15 25V55C15 75 30 90 50 95C70 90 85 75 85 55V25L50 10Z" fill={t.fill1} /><path d="M50 20L25 32V53C25 68 36 80 50 84C64 80 75 68 75 53V32L50 20Z" fill={t.fill2} /></>}
                  {t.isCrypto && <><rect x="35" y="15" width="40" height="70" rx="8" fill="#1E293B" /><rect x="40" y="25" width="30" height="50" rx="4" fill="#38BDF8" style={{ animation: 'glow 2.5s infinite' }} /><path d="M15 40L35 30V65L15 55Z" fill="#818CF8" style={{ animation: 'slide 2s infinite' }} /></>}
                  {t.isDeFi && <><circle cx="50" cy="50" r="32" fill="#2563EB" /><ellipse cx="50" cy="50" rx="36" ry="14" stroke="#60A5FA" strokeWidth="3" fill="none" style={{ animation: 'spin 12s linear infinite', transformOrigin: 'center' }} /></>}
                  {t.isGuide && <><rect x="22" y="18" width="56" height="64" rx="8" fill="#EC4899" /><rect x="22" y="18" width="10" height="64" rx="4" fill="#BE185D" /><rect x="36" y="28" width="34" height="6" rx="3" fill="#FCE7F3" opacity="0.9" /><rect x="36" y="40" width="26" height="6" rx="3" fill="#FCE7F3" opacity="0.7" /><rect x="36" y="52" width="30" height="6" rx="3" fill="#FCE7F3" opacity="0.7" /><path d="M60 18V38L66 33L72 38V18H60Z" fill="#F472B6" className="topic-pulse" /></>}
                  {t.cls === 'topic-breathe' && <path d="M50 15L80 30V50C80 68 67 83 50 90C33 83 20 68 20 50V30L50 15Z" fill={t.fill1} />}
                </svg>
              </div>
              <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: '#ffffff' }}>{t.title}</h3>
              <p style={{ margin: '0.4rem 0 0 0', fontSize: '0.8rem', color: '#94a3b8' }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Security Banner */}
      <section className="security-banner">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <span style={{ color: '#60a5fa', fontSize: '0.75rem', letterSpacing: '2px', fontWeight: 700 }}>STAY SAFE</span>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, margin: 0, color: '#fff' }}>Security Center</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>Your security is our priority. Learn how to keep your wallet safe in Web3.</p>
          <button style={{ background: 'linear-gradient(90deg, #00d1ff 0%, #00bcff 100%)', color: '#030712', fontWeight: 700, border: 'none', borderRadius: '9999px', padding: '0.65rem 1.25rem', cursor: 'pointer', width: 'fit-content', marginTop: '0.25rem' }}>Security Center →</button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <svg width="140" height="140" viewBox="0 0 100 100" fill="none">
            <ellipse cx="50" cy="83" rx="35" ry="9" fill="#00d1ff" opacity="0.3" />
            <g className="sh-grp">
              <path d="M50 15L75 28V50C75 66 64 79 50 85C36 79 25 66 25 50V28L50 15Z" fill="#1d4ed8" stroke="#00d1ff" strokeWidth="2" />
              <g className="sh-glow"><rect x="42" y="48" width="16" height="12" rx="2" fill="#fff" /><path d="M45 48V43C45 40.2 47.2 38 50 38C52.8 38 55 40.2 55 43V48" stroke="#fff" strokeWidth="2.5" fill="none" /></g>
            </g>
          </svg>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {SEC_ITEMS.map((i) => (
            <div key={i.title} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ background: 'rgba(0,209,255,0.1)', border: '1px solid rgba(0,209,255,0.2)', borderRadius: '0.5rem', padding: '0.5rem', display: 'flex' }}>{i.icon}</div>
              <div><h4 style={{ margin: 0, fontSize: '0.9rem', color: '#fff' }}>{i.title}</h4><p style={{ margin: 0, fontSize: '0.78rem', color: '#94a3b8' }}>{i.sub}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* Support Categories */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div>
          <h2 className="section-heading" style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>Support Categories</h2>
          <p className="section-subtitle" style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem' }}>Find answers by topic. Choose a category to browse help articles.</p>
        </div>
        <div className="categories-grid">
          {CATS.map((c) => (
            <div 
              key={c.title} 
              className="interactive-card"
              style={{ 
                background: '#0b0f19', 
                border: '1px solid rgba(255,255,255,0.08)', 
                borderRadius: '0.875rem', 
                padding: '1.25rem 1rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.85rem', 
                cursor: 'pointer' 
              }}
            >
              <div style={{ width: '44px', height: '44px', borderRadius: '0.6rem', background: 'rgba(0,209,255,0.08)', border: '1px solid rgba(0,209,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.3s ease' }}>
                {c.icon || <SvgIcon path={c.path} className={c.cls} />}
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600, color: '#ffffff' }}>{c.title}</h4>
                <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.75rem', color: '#94a3b8' }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}