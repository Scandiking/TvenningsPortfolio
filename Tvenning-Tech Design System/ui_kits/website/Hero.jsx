// Hero.jsx — Tvenning-Tech hero section

const Hero = ({ onNavigate }) => {
  return (
    <section style={{
      background: '#3366cc',
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '120px 32px 80px',
    }}>
      {/* Background arch echo — subtle geometry from logo */}
      <div style={{
        position: 'absolute', bottom: -200, left: '50%',
        transform: 'translateX(-50%)',
        width: 900, height: 900,
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.08)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -320, left: '50%',
        transform: 'translateX(-50%)',
        width: 1200, height: 1200,
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.05)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 800, textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Eyebrow */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(255,255,255,0.12)', borderRadius: 999,
          padding: '5px 14px', marginBottom: 32,
        }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#f5c872' }} />
          <span style={{
            fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: 13,
            color: 'rgba(255,255,255,0.85)', letterSpacing: '.04em',
          }}>Meløy, Nordland · Available for projects</span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700,
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          color: '#fff', lineHeight: 1.08,
          letterSpacing: '-0.03em',
          marginBottom: 24,
          textWrap: 'pretty',
        }}>
          Websites and apps,<br />built properly.
        </h1>

        {/* Sub */}
        <p style={{
          fontFamily: 'DM Sans, sans-serif', fontWeight: 400,
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: 'rgba(255,255,255,0.72)', lineHeight: 1.65,
          maxWidth: 520, margin: '0 auto 40px',
        }}>
          I'm a one-person studio making clean, fast, and maintainable digital products. No bloat, no buzzwords.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => onNavigate('work')} style={{
            background: '#fff', color: '#3366cc',
            border: 'none', cursor: 'pointer',
            padding: '14px 28px', borderRadius: 'var(--radius-md)',
            fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: 15,
            transition: 'all 150ms ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.98)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
          >View my work</button>
          <button onClick={() => onNavigate('contact')} style={{
            background: 'rgba(255,255,255,0.12)', color: '#fff',
            border: '1.5px solid rgba(255,255,255,0.3)', cursor: 'pointer',
            padding: '14px 28px', borderRadius: 'var(--radius-md)',
            fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: 15,
            transition: 'all 150ms ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
          >Get in touch</button>
        </div>
      </div>

      {/* Selbu strip bottom */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 40,
        backgroundImage: `url(../../assets/selbu-strip.svg)`,
        backgroundSize: 'auto 40px', backgroundRepeat: 'repeat-x',
        opacity: 0.25,
      }} />
    </section>
  );
};

Object.assign(window, { Hero });
