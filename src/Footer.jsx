/* global React, Hairline */

function Footer() {
  const cols = [
    {
      t: 'Experiences',
      links: [
        ['Executive Forums & Corporate Offsites', '#corporate'],
        ['Snowmobile Expeditions', '#experiences'],
        ['Wilderness Dinners', '#experiences'],
        ['Arctic Freeride', '#experiences'],
        ['Northern Lights', '#experiences'],
        ['Wildlife Encounters', '#experiences'],
      ],
    },
    {
      t: 'Contact',
      links: [
        ['collective@arc4collective.com', 'mailto:collective@arc4collective.com'],
        ['Inari · Finland', '#territory'],
        ['FI · 99870', '#territory'],
      ],
    },
  ];
  return (
    <footer style={{
      background: '#000',
      padding: '96px 48px 40px',
      borderTop: '1px solid rgba(240,240,250,0.1)',
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div className="grid-3" style={{ gap: 48 }}>
          <div>
            <img src="assets/arc4-wordmark.svg" alt="ARC4 Collective" style={{ height: 32, display: 'block' }} />
            <div style={{
              marginTop: 28, fontSize: 12, letterSpacing: 0.6, lineHeight: 1.7,
              color: 'rgba(240,240,250,0.55)', maxWidth: 340,
            }}>
              ARC4 Oy — Arctic Experience Designers. Finnish Lapland.
              Corporate and private clients only. No standard itineraries.
            </div>
            <div style={{
              marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '8px 14px', border: '1px solid rgba(125,211,184,0.35)',
              borderRadius: 32,
              fontSize: 10, letterSpacing: 1.6, textTransform: 'uppercase',
              color: 'rgba(125,211,184,0.9)',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: '#7dd3b8' }} />
              Winter 2027 · Open for briefs
            </div>
          </div>
          {cols.map((c, i) => (
            <div key={i}>
              <div style={{
                fontFamily: "'Barlow', Arial, sans-serif",
                fontSize: 10, letterSpacing: 1.6, color: 'rgba(240,240,250,0.45)',
                textTransform: 'uppercase', marginBottom: 22,
              }}>{c.t}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
                {c.links.map(([label, href], j) => (
                  <li key={j}>
                    <a href={href} style={{
                      fontFamily: "'Barlow', Arial, sans-serif",
                      fontSize: 12, letterSpacing: 1.1,
                      textTransform: 'uppercase', color: 'rgba(240,240,250,0.78)',
                      textDecoration: 'none', transition: 'color 180ms',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(240,240,250,0.78)'; }}
                    >{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Hairline style={{ marginTop: 72 }} />

        <div style={{
          marginTop: 24, display: 'flex', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 16,
          fontFamily: "'Barlow', Arial, sans-serif",
          fontSize: 10, letterSpacing: 1.6, textTransform: 'uppercase',
          color: 'rgba(240,240,250,0.45)',
        }}>
          <div>© ARC4 Oy · 2026 · All briefs reserved</div>
          <div style={{ display: 'flex', gap: 28 }}>
            <span>68°54′N · 27°01′E</span>
            <span>No standard itineraries</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
