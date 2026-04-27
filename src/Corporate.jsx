/* global React, Scene, Eyebrow, Title, Body, GhostButton, ArrowR, Hairline */

function Corporate({ onEnquire }) {
  const pillars = [
    {
      n: '01',
      t: 'End-to-end produced',
      b: 'Transfers, lodging, kitchens, permits, interpreters, weather contingency. One producer, one point of contact.',
    },
    {
      n: '02',
      t: 'Scales 4 to 60+',
      b: 'Board offsites to incentive weeks. The crew grows with the brief — the experience does not thin.',
    },
    {
      n: '03',
      t: 'Written from blank',
      b: 'No pre-built itineraries. Every programme is drafted around the client, the calendar, and the terrain that week.',
    },
    {
      n: '04',
      t: 'Lapland exclusivity',
      b: 'Private concessions, dark-sky sites, family-held cabins. Access you will not find on a booking platform.',
    },
  ];
  return (
    <section id="corporate" data-screen-label="04 Corporate" style={{
      position: 'relative', minHeight: '100vh', overflow: 'hidden',
    }}>
      {/* Background photo, right half only on desktop */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1517299321609-52687d1bc55a?q=80&w=2400)',
        backgroundSize: 'cover', backgroundPosition: 'center right',
      }} />
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.82) 40%, rgba(0,0,0,0.35) 100%)',
      }} />
      <div style={{
        position: 'relative', zIndex: 2,
        padding: '140px 48px 120px',
        maxWidth: 1400, margin: '0 auto',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <Eyebrow>
              <span style={{ width: 20, height: 1, background: 'rgba(125,211,184,0.7)' }} />
              04 · Corporate
            </Eyebrow>
            <Title size="h1" max={640}>
              For the client whose<br/>
              calendar already cleared.
            </Title>
            <Body max={520} dim={0.82} style={{ marginTop: 32 }}>
              Corporate groups come to ARC4 when the stakes are high, and the detail cannot be
              delegated downstream. We assemble, produce, and run the entire operation —
              from the first airport pickup in Ivalo to the last fire in the sauna.
              References by request only.
            </Body>
            <div style={{ marginTop: 40, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <GhostButton onClick={onEnquire}>
                Begin a brief <ArrowR />
              </GhostButton>
              <GhostButton href="#enquire" variant="faint">
                See enquiry form
              </GhostButton>
            </div>
          </div>

          <div>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '1px',
              background: 'rgba(240,240,250,0.15)',
              border: '1px solid rgba(240,240,250,0.15)',
            }}>
              {pillars.map((p) => (
                <div key={p.n} style={{ background: '#000', padding: '28px 24px 32px' }}>
                  <div style={{
                    fontSize: 10, letterSpacing: 1.6, color: 'rgba(125,211,184,0.9)',
                    textTransform: 'uppercase', marginBottom: 18,
                  }}>{p.n}</div>
                  <div style={{
                    fontFamily: "'Barlow', Arial, sans-serif",
                    fontSize: 17, fontWeight: 700, letterSpacing: 0.6,
                    textTransform: 'uppercase', color: '#f0f0fa',
                    lineHeight: 1.12, marginBottom: 14,
                  }}>{p.t}</div>
                  <div style={{
                    fontSize: 13, lineHeight: 1.55, color: 'rgba(240,240,250,0.65)',
                  }}>{p.b}</div>
                </div>
              ))}
            </div>

            <Hairline style={{ marginTop: 32 }} />

            {/* Past programmes redacted */}
            <div style={{ marginTop: 20 }}>
              <div style={{ fontSize: 10, letterSpacing: 1.6, color: 'rgba(240,240,250,0.45)', textTransform: 'uppercase', marginBottom: 16 }}>
                Past programmes · redacted on request
              </div>
              <div style={{ display: 'grid', gap: 12 }}>
                {[
                  ['FI-2026 · BOARD WEEK', '12 GUESTS · 4 NIGHTS'],
                  ['EU-2026 · PRIVATE CLIENTS', '7 GROUPS · 42 GUESTS'],
                  ['FI/US-2026 · CORPORATE EVENT', '75 GUESTS · 3 NIGHTS'],
                ].map(([a, b], i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                    paddingBottom: 10, borderBottom: '1px solid rgba(240,240,250,0.1)',
                    fontFamily: "'Barlow', Arial, sans-serif",
                    fontSize: 12, letterSpacing: 1.1,
                    textTransform: 'uppercase',
                  }}>
                    <span style={{ color: '#f0f0fa' }}>{a}</span>
                    <span style={{ color: 'rgba(240,240,250,0.55)' }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Corporate = Corporate;
