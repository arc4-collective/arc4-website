/* global React, Hairline */

const HEADER_STYLE = {
  fontFamily: "'Barlow', Arial, sans-serif",
  fontSize: 11, fontWeight: 700, letterSpacing: 2.2,
  color: 'rgba(240,240,250,0.45)',
  textTransform: 'uppercase',
  marginBottom: 24,
};

const LINK_STYLE = {
  fontFamily: "'Barlow', Arial, sans-serif",
  fontSize: 13, letterSpacing: 1.8,
  color: 'rgba(240,240,250,0.85)',
  textTransform: 'uppercase',
  textDecoration: 'none',
  lineHeight: 3,
  transition: 'color 180ms cubic-bezier(0.16,1,0.3,1)',
  display: 'block',
};

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      style={LINK_STYLE}
      onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
      onMouseLeave={e => { e.currentTarget.style.color = 'rgba(240,240,250,0.85)'; }}
    >
      {children}
    </a>
  );
}

function Footer() {
  const columns = [
    {
      title: 'Collective',
      items: [
        { label: 'The Collective', href: '#collective' },
        { label: 'Territory',      href: '#territory' },
      ],
    },
    {
      title: 'Access',
      items: [
        { label: 'Experiences', href: '#experiences' },
        { label: 'Corporate',   href: '#corporate' },
        { label: 'Winter 2027', href: '#enquire' },
      ],
    },
    {
      title: 'Transmit',
      items: [
        { label: 'Begin a brief',                    href: '#enquire' },
        { label: 'collective@arc4collective.com',    href: 'mailto:collective@arc4collective.com' },
        { label: 'Saariselkä · 68°54′N',             plain: true },
      ],
    },
  ];

  return (
    <>
      <style>{`
        .arc4-footer {
          background: #000;
          padding: 64px 48px 56px;
        }
        .arc4-footer__grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 400px) repeat(3, minmax(0, 1fr));
          gap: 48px;
        }
        @media (max-width: 900px) {
          .arc4-footer { padding: 48px 24px 40px; }
          .arc4-footer__grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>

      <footer className="arc4-footer">
        <div className="arc4-footer__grid">
          <div>
            <img
              src="assets/arc4-signature.svg"
              alt="ARC4 Collective — Operators of the Arctic North"
              style={{ height: 56, display: 'block' }}
            />
            <div style={{
              marginTop: 12,
              fontFamily: "'Barlow', Arial, sans-serif",
              fontSize: 11.5, fontWeight: 700, letterSpacing: 3.1,
              color: '#f0f0fa',
              textTransform: 'uppercase',
            }}>
              Operators of the Arctic North
            </div>
            <p style={{
              marginTop: 24,
              fontFamily: "'Barlow', Arial, sans-serif",
              fontSize: 14.5,
              lineHeight: 1.7,
              color: 'rgba(240,240,250,0.65)',
              maxWidth: 340,
            }}>
              A collective of local guides, producers, and communities across
              Arctic Lapland. Corporate and private clients only.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div style={HEADER_STYLE}>{col.title}</div>
              <div>
                {col.items.map((item, i) => (
                  item.plain ? (
                    <div key={i} style={LINK_STYLE}>{item.label}</div>
                  ) : (
                    <FooterLink key={i} href={item.href}>{item.label}</FooterLink>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          maxWidth: 1400, margin: '48px auto 0',
          borderTop: '1px solid rgba(240,240,250,0.1)',
          paddingTop: 24,
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
          fontFamily: "'Barlow', Arial, sans-serif",
          fontSize: 10, letterSpacing: 1.6, textTransform: 'uppercase',
          color: 'rgba(240,240,250,0.45)',
        }}>
          <div>© 2026 ARC4 Oy · All briefs reserved</div>
          <div>68°54′N · 27°01′E · Saariselkä · Inari</div>
        </div>
      </footer>
    </>
  );
}

window.Footer = Footer;
