// Services.jsx — Tvenning-Tech services + work sections

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Web development',
    desc: 'Fast, accessible websites built with modern tooling. From landing pages to complex web apps.',
    tag: 'Core service',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title: 'App development',
    desc: 'Cross-platform mobile and desktop apps. Clean architecture, no unnecessary dependencies.',
    tag: 'Core service',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    title: 'Technical consultation',
    desc: 'Not sure where to start? I can review your stack, roadmap, or codebase and give honest advice.',
    tag: 'On request',
  },
];

const projects = [
  { year: '2025', title: 'E-commerce site', desc: 'Product catalogue + checkout for a local Nordland retailer.', tags: ['React', 'Next.js'] },
  { year: '2025', title: 'Booking app', desc: 'Mobile-first booking system with calendar and notifications.', tags: ['React Native'] },
  { year: '2024', title: 'Portfolio site', desc: 'Fast static site for a Norwegian photographer.', tags: ['Astro', 'CSS'] },
];

const ServiceCard = ({ icon, title, desc, tag }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        border: '1px solid var(--color-neutral-100)',
        borderRadius: 10,
        padding: 28,
        flex: 1, minWidth: 220,
        boxShadow: hovered ? '0 8px 32px rgba(13,21,38,.12)' : '0 2px 6px rgba(13,21,38,.08)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'all 200ms cubic-bezier(0.22,1,0.36,1)',
        display: 'flex', flexDirection: 'column', gap: 12,
      }}
    >
      <div style={{ color: '#3366cc', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-brand-50)', borderRadius: 8 }}>
        {icon}
      </div>
      <div>
        <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 18, color: 'var(--color-fg)', marginBottom: 6 }}>{title}</div>
        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: 'var(--color-fg-muted)', lineHeight: 1.6 }}>{desc}</div>
      </div>
      <div style={{ marginTop: 'auto' }}>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: 11, background: 'var(--color-brand-50)', color: '#3366cc', padding: '2px 8px', borderRadius: 3 }}>{tag}</span>
      </div>
    </div>
  );
};

const Services = ({ onNavigate }) => {
  return (
    <>
      {/* Services section */}
      <section style={{ background: 'var(--color-neutral-50)', padding: '96px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--color-fg-muted)', marginBottom: 10 }}>Services</div>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem,3vw,2.25rem)', color: 'var(--color-fg)', letterSpacing: '-0.02em', margin: 0 }}>What I do</h2>
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {services.map(s => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      {/* Work section */}
      <section style={{ background: '#fff', padding: '96px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--color-fg-muted)', marginBottom: 10 }}>Selected work</div>
              <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem,3vw,2.25rem)', color: 'var(--color-fg)', letterSpacing: '-0.02em', margin: 0 }}>Recent projects</h2>
            </div>
            <button onClick={() => onNavigate('work')} style={{
              background: 'none', border: '1.5px solid var(--color-border)', borderRadius: 6,
              padding: '9px 18px', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: 13, color: 'var(--color-fg-muted)',
              transition: 'all 150ms ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#3366cc'; e.currentTarget.style.color = '#3366cc'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-fg-muted)'; }}
            >View all work</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {projects.map((p, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 24, padding: '24px 0',
                borderTop: i === 0 ? '1px solid var(--color-neutral-100)' : 'none',
                borderBottom: '1px solid var(--color-neutral-100)',
              }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--color-fg-subtle)', minWidth: 40 }}>{p.year}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 16, color: 'var(--color-fg)', marginBottom: 2 }}>{p.title}</div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'var(--color-fg-muted)' }}>{p.desc}</div>
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 500, background: 'var(--color-neutral-100)', color: 'var(--color-fg-muted)', padding: '2px 8px', borderRadius: 3 }}>{t}</span>
                  ))}
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-fg-subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

Object.assign(window, { Services });
