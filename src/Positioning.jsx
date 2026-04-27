/* global React, useReveal, Eyebrow, Title, Body, Hairline */

function Positioning() {
  const [ref, shown] = useReveal(0.35);
  return (
    <section id="positioning" data-screen-label="02 Positioning" style={{
      position: 'relative',
      minHeight: '90vh',
      background: '#000',
      display: 'flex', alignItems: 'center',
      padding: '140px 48px',
      overflow: 'hidden',
    }}>
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(assets/photos/positioning-track.webp)',
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      {/* Center-bright vignette so the horizon reads, edges blend to black */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 90% 80% at 50% 55%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.62) 55%, rgba(0,0,0,0.92) 100%)',
      }} />
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.55) 100%)',
      }} />
      <div ref={ref} style={{
        position: 'relative', zIndex: 2,
        maxWidth: 1280, margin: '0 auto', width: '100%',
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 900ms cubic-bezier(0.16,1,0.3,1), transform 900ms cubic-bezier(0.16,1,0.3,1)',
      }}>
        <div className="grid-2" style={{ gap: 64, alignItems: 'start' }}>
          <div>
            <Eyebrow>
              <span style={{ width: 20, height: 1, background: 'rgba(125,211,184,0.7)' }} />
              02 · Position
            </Eyebrow>
            <div style={{
              fontFamily: "'Barlow', Arial, sans-serif",
              fontSize: 11, letterSpacing: 1.6, color: 'rgba(240,240,250,0.45)',
              textTransform: 'uppercase', marginTop: 48, lineHeight: 1.9,
            }}>
              <div>ARC4 Oy</div>
              <div>Inari · Finland</div>
              <div>Founded 68°N</div>
            </div>
          </div>
          <div>
            <Title size="h1" max={900} style={{ lineHeight: 1.02 }}>
              We don't book tours.<br/>
              <span style={{ color: 'rgba(240,240,250,0.45)' }}>We build experiences.</span>
            </Title>
            <Body max={680} dim={0.82} style={{ marginTop: 36, lineHeight: 1.6 }}>
              ARC4 is a collective of Arctic guides, producers and communities assembled
              around a single brief — yours. Every programme is written from a blank page,
              produced to aerospace tolerances, executed in terrain that rewards precision.
            </Body>
            <Hairline style={{ marginTop: 72 }} />
            <div className="grid-3" style={{ gap: 48, marginTop: 32 }}>
              {[
                ['Not an operator', 'Experience architects'],
                ['Not an itinerary', 'A produced operation'],
                ['Not a brochure', 'A written brief'],
              ].map(([a, b], i) => (
                <div key={i}>
                  <div style={{ fontSize: 10, letterSpacing: 1.6, color: 'rgba(240,240,250,0.45)', textTransform: 'uppercase', marginBottom: 10 }}>{a}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: 0.8, textTransform: 'uppercase', color: '#f0f0fa' }}>{b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Positioning = Positioning;
