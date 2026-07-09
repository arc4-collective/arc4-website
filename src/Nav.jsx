/* global React */
const { useEffect, useState } = React;

function Nav({ onEnquire, activeId }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'experiences', label: 'Experiences' },
    { id: 'corporate',   label: 'Corporate' },
    { id: 'territory',   label: 'Territory' },
  ];

  const linkStyle = (active) => ({
    fontFamily: "'Barlow', Arial, sans-serif",
    fontSize: 13, fontWeight: 700, letterSpacing: 1.17,
    textTransform: 'uppercase',
    color: active ? '#fff' : 'rgba(240,240,250,0.85)',
    textDecoration: 'none',
    transition: 'color 180ms cubic-bezier(0.16,1,0.3,1)',
  });

  return (
    <>
      <style>{`
        .arc4-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 22px 40px;
          background: transparent;
          transition: background 180ms cubic-bezier(0.16,1,0.3,1);
          width: 100%;
        }
        .arc4-nav[data-scrolled="true"] {
          background: rgba(0,0,0,0.55);
        }
        .arc4-nav__left {
          display: flex; align-items: center;
        }
        .arc4-nav__hairline {
          display: inline-block;
          width: 1px; height: 26px;
          background: rgba(240,240,250,0.28);
          margin: 0 22px;
        }
        .arc4-nav__tagline {
          font-family: 'Barlow', Arial, sans-serif;
          font-size: 11.5px;
          letter-spacing: 2.4px;
          color: rgba(240,240,250,0.6);
          text-transform: uppercase;
          white-space: nowrap;
        }
        .arc4-nav__links {
          display: flex; align-items: center; gap: 36px;
        }
        .arc4-nav__cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: #FA4616;
          color: #fff;
          border: none;
          border-radius: 32px;
          padding: 14px 30px;
          font-family: 'Barlow', Arial, sans-serif;
          font-size: 13px; font-weight: 700; letter-spacing: 1.17px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 180ms cubic-bezier(0.16,1,0.3,1);
        }
        .arc4-nav__cta:hover { background: #ff5a2e; }
        @media (max-width: 900px) {
          .arc4-nav { padding: 18px 20px; }
          .arc4-nav__hairline,
          .arc4-nav__tagline,
          .arc4-nav__links { display: none; }
          .arc4-nav__cta { padding: 12px 20px; font-size: 12px; }
        }
      `}</style>

      <header className="arc4-nav" data-scrolled={scrolled}>
        <div className="arc4-nav__left">
          <a href="#hero" aria-label="ARC4 Collective" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <img src="assets/arc4-wordmark.svg" alt="ARC4 Collective" style={{ height: 30, display: 'block' }} />
          </a>
          <span className="arc4-nav__hairline" aria-hidden />
          <span className="arc4-nav__tagline">Operators of the Arctic North</span>
        </div>

        <nav className="arc4-nav__links">
          {links.map(l => (
            <a
              key={l.id}
              href={'#' + l.id}
              style={linkStyle(activeId === l.id)}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.color = activeId === l.id ? '#fff' : 'rgba(240,240,250,0.85)'; }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="arc4-nav__cta"
          onClick={onEnquire}
        >
          Begin a brief
        </button>
      </header>
    </>
  );
}

window.Nav = Nav;
