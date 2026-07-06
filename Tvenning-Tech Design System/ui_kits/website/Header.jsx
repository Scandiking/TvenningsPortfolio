// Header.jsx — Tvenning-Tech sticky nav header
// Requires: colors_and_type.css loaded in parent

const Header = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = ['Work', 'Services', 'About', 'Contact'];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      transition: 'all 200ms cubic-bezier(0.22,1,0.36,1)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '0 32px',
        height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo lockup */}
        <button onClick={() => onNavigate('home')} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 10, padding: 0,
        }}>
          <div style={{
            background: '#3366cc', borderRadius: 8,
            width: 32, height: 28,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <img src="../../assets/TvenningLogo-596.png" alt="T" style={{ width: 26, height: 'auto' }} />
          </div>
          <span style={{
            fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 16,
            color: 'var(--color-fg)', letterSpacing: '-0.01em',
          }}>
            Tvenning<span style={{ color: '#3366cc' }}>-Tech</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {navLinks.map(link => (
            <button key={link} onClick={() => onNavigate(link.toLowerCase())} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '8px 14px', borderRadius: 'var(--radius-md)',
              fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: 14,
              color: currentPage === link.toLowerCase() ? '#3366cc' : 'var(--color-fg-muted)',
              transition: 'all 150ms ease',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--color-bg-muted)'}
              onMouseLeave={e => e.currentTarget.style.background = 'none'}
            >{link}</button>
          ))}
          <button onClick={() => onNavigate('contact')} style={{
            marginLeft: 8,
            background: '#3366cc', color: '#fff',
            border: 'none', cursor: 'pointer',
            padding: '9px 18px', borderRadius: 'var(--radius-md)',
            fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: 14,
            boxShadow: '0 4px 20px rgba(51,102,204,.25)',
            transition: 'all 150ms ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#2554b8'; e.currentTarget.style.transform = 'scale(0.98)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#3366cc'; e.currentTarget.style.transform = 'scale(1)'; }}
          >Get in touch</button>
        </nav>
      </div>
    </header>
  );
};

Object.assign(window, { Header });
