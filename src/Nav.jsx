/* global React, Eyebrow, GhostButton, ArrowR */
const { useEffect, useState } = React;

function Nav({ onEnquire, activeId }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'experiences', label: 'Experiences' },
    { id: 'corporate',   label: 'Corporate' },
    { id: 'territory',   label: 'Territory' },
  ];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      padding: scrolled ? (isMobile ? '18px 16px' : '18px 24px') : (isMobile ? '24px 16px' : '28px 24px'),
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'linear-gradient(180deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0) 100%)' : 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 100%)',
      transition: 'padding 320ms cubic-bezier(0.16,1,0.3,1), background 320ms',
      overflow: 'hidden',
      width: '100%',
      maxWidth: '100vw',
    }}>
      {/* Wordmark */}
      <a href="#hero" aria-label="ARC4 Collective" style={{ display: 'inline-flex', alignItems: 'center' }}>
        <img src="assets/arc4-wordmark.svg" alt="ARC4 Collective" style={{ height: 28, display: 'block' }} />
      </a>

      {!isMobile && (
        <nav style={{
          display: 'flex', alignItems: 'center', gap: 36,
        }}>
          {links.map(l => (
            <a key={l.id} href={'#' + l.id} style={{
              fontFamily: "'Barlow', Arial, sans-serif",
              fontSize: 12, fontWeight: 400, letterSpacing: 1.17,
              textTransform: 'uppercase',
              color: activeId === l.id ? '#fff' : 'rgba(240,240,250,0.72)',
              paddingBottom: 4,
              borderBottom: '1px solid ' + (activeId === l.id ? 'rgba(125,211,184,0.9)' : 'transparent'),
              transition: 'color 180ms, border-color 180ms',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.color = activeId === l.id ? '#fff' : 'rgba(240,240,250,0.72)'; }}
            >{l.label}</a>
          ))}
        </nav>
      )}

      {/* Enquire CTA */}
      <GhostButton onClick={onEnquire} style={{ padding: isMobile ? '12px 16px' : '14px 24px' }}>
        Enquire <ArrowR size={13} />
      </GhostButton>
    </header>
  );
}

window.Nav = Nav;
