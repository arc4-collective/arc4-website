/* global React, Eyebrow, Title, Body, Hairline */

const MEMBERS = [
  {
    name: 'Antti Länsman',
    role: 'Producer · Expeditions',
    from: 'Inari · Sámi',
    note: '18 winters guiding. Knows every lake in the region by name.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800',
  },
  {
    name: 'Elina Koskinen',
    role: 'Producer · Programme',
    from: 'Saariselkä',
    note: 'Former film-production manager. Handles the brief, the crew, the weather calls.',
    image: 'https://images.unsplash.com/photo-1546961342-1e9b15b4fc19?q=80&w=800',
  },
  {
    name: 'Niilo Magga',
    role: 'Head · Reindeer & Land',
    from: 'Inari · Sámi',
    note: 'Fifth-generation herder. Our access to the herd and the fells.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800',
  },
  {
    name: 'Maaret Heikkilä',
    role: 'Chef · Wilderness Kitchens',
    from: 'Rovaniemi',
    note: 'Cooks over fire. Built the menu for our first off-grid dinner in 2019.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800',
  },
];

function Collective() {
  return (
    <section id="collective" data-screen-label="06 Collective" style={{
      position: 'relative', background: '#000', padding: '140px 48px 120px',
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div className="grid-2" style={{ gap: 64, alignItems: 'end', marginBottom: 72 }}>
          <div>
            <Eyebrow>
              <span style={{ width: 20, height: 1, background: 'rgba(125,211,184,0.7)' }} />
              06 · Story
            </Eyebrow>
            <Title size="h1" max={520} style={{ marginTop: 8 }}>
              The Collective.
            </Title>
          </div>
          <Body max={620} dim={0.75}>
            ARC4 is not a company with freelancers. It is a collective of people who already
            lived here and already did this work — herders, chefs, mechanics, guides, producers —
            now pointed at the same brief. The names below are the core; the crew grows
            with the operation.
          </Body>
        </div>

        <div className="grid-4" style={{ gap: 2, borderTop: '1px solid rgba(240,240,250,0.15)', borderBottom: '1px solid rgba(240,240,250,0.15)', background: 'rgba(240,240,250,0.08)' }}>
          {MEMBERS.map((m, i) => (
            <div key={i} style={{ background: '#000', padding: '0 0 28px' }}>
              <div style={{
                position: 'relative',
                aspectRatio: '3/4',
                backgroundImage: `url(${m.image})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                filter: 'grayscale(1) contrast(1.05)',
              }}>
                <div aria-hidden style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.6) 100%)',
                }} />
                <div style={{
                  position: 'absolute', top: 16, left: 16,
                  fontSize: 10, letterSpacing: 1.6, color: 'rgba(240,240,250,0.8)',
                  textTransform: 'uppercase',
                }}>{String(i+1).padStart(2,'0')} / 04</div>
              </div>
              <div style={{ padding: '24px 20px 0' }}>
                <div style={{
                  fontFamily: "'Barlow', Arial, sans-serif",
                  fontSize: 18, fontWeight: 700, letterSpacing: 0.5,
                  textTransform: 'uppercase', color: '#f0f0fa',
                }}>{m.name}</div>
                <div style={{
                  marginTop: 6, fontSize: 11, letterSpacing: 1.4,
                  color: 'rgba(125,211,184,0.85)', textTransform: 'uppercase',
                }}>{m.role}</div>
                <div style={{
                  marginTop: 4, fontSize: 10, letterSpacing: 1.4,
                  color: 'rgba(240,240,250,0.5)', textTransform: 'uppercase',
                }}>{m.from}</div>
                <div style={{
                  marginTop: 14, fontSize: 13, lineHeight: 1.55,
                  color: 'rgba(240,240,250,0.68)',
                }}>{m.note}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 32,
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          flexWrap: 'wrap', gap: 16,
          fontFamily: "'Barlow', Arial, sans-serif",
          fontSize: 11, letterSpacing: 1.5, color: 'rgba(240,240,250,0.5)',
          textTransform: 'uppercase',
        }}>
          <div>Crew of 24 on call · expands to 80+ per brief.</div>
          <div>Sámi-led · locally owned · no office outside Inari.</div>
        </div>
      </div>
    </section>
  );
}

window.Collective = Collective;
