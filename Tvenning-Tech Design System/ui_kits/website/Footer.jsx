// Footer.jsx — Tvenning-Tech footer with Selbu border

const Footer = ({ onNavigate }) => {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (email) { setSent(true); setEmail(''); }
  };

  return (
    <>
      {/* Contact CTA band */}
      <section style={{ background: 'var(--color-neutral-900)', padding: '80px 32px', position: 'relative', overflow: 'hidden' }}>
        {/* Selbu rose watermark */}
        <div style={{
          position: 'absolute', right: 80, top: '50%', transform: 'translateY(-50%)',
          opacity: 0.06, width: 200, height: 200,
        }}>
          <img src="../../assets/selbu-rose.svg" style={{ width: '100%', filter: 'brightness(10)' }} />
        </div>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700,
            fontSize: 'clamp(1.75rem,4vw,3rem)', color: '#fff',
            letterSpacing: '-0.03em', marginBottom: 16, lineHeight: 1.1,
          }}>Have a project in mind?</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.6)', marginBottom: 36, lineHeight: 1.6 }}>
            Get in touch and I'll get back to you within a day or two.
          </p>
          {sent ? (
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: 15, color: '#f5c872' }}>Sent. I'll be in touch.</div>
          ) : (
            <form onSubmit={handleSend} style={{ display: 'flex', gap: 8, maxWidth: 420, margin: '0 auto', flexWrap: 'wrap' }}>
              <input
                type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com" required
                style={{
                  flex: 1, minWidth: 200,
                  background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.15)',
                  borderRadius: 6, padding: '11px 14px',
                  fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#fff',
                  outline: 'none',
                }}
              />
              <button type="submit" style={{
                background: '#3366cc', color: '#fff', border: 'none', cursor: 'pointer',
                padding: '11px 20px', borderRadius: 6,
                fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: 14,
                boxShadow: '0 4px 20px rgba(51,102,204,.4)',
                transition: 'all 150ms ease',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#2554b8'}
                onMouseLeave={e => e.currentTarget.style.background = '#3366cc'}
              >Get in touch</button>
            </form>
          )}
        </div>
      </section>

      {/* Selbu strip divider */}
      <div style={{ height: 40, background: '#3366cc', overflow: 'hidden' }}>
        <img src="../../assets/selbu-strip.svg" style={{ width: '100%', height: 40, objectFit: 'cover' }} />
      </div>

      {/* Footer nav */}
      <footer style={{ background: '#3366cc', padding: '32px 32px 40px' }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 7, width: 28, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="../../assets/TvenningLogo-596.png" alt="T" style={{ width: 22, height: 'auto', filter: 'brightness(10)' }} />
            </div>
            <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 14, color: '#fff' }}>Tvenning-Tech</span>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {['Work', 'Services', 'About', 'Contact'].map(l => (
              <button key={l} onClick={() => onNavigate(l.toLowerCase())} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: 13,
                color: 'rgba(255,255,255,0.7)', padding: '6px 12px', borderRadius: 4,
                transition: 'color 150ms ease',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
              >{l}</button>
            ))}
          </div>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>
            © 2026 Tvenning-Tech · Meløy, Nordland
          </span>
        </div>
      </footer>
    </>
  );
};

Object.assign(window, { Footer });
