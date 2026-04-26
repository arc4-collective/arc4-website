/* global React, Scene, Eyebrow, Title, Body, Hairline */

function Territory() {
  return (
    <section id="territory" data-screen-label="05 Territory" style={{
      position: 'relative', minHeight: '100vh', overflow: 'hidden',
    }}>
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(assets/photos/territory-aerial.webp)',
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.92) 100%)',
      }} />

      <div style={{ position: 'relative', zIndex: 2, padding: '140px 48px 100px', maxWidth: 1400, margin: '0 auto' }}>
        <Eyebrow>
          <span style={{ width: 20, height: 1, background: 'rgba(125,211,184,0.7)' }} />
          05 · The Territory
        </Eyebrow>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'end' }}>
          <Title size="display" max={900}>
            Lapland.<br/>
            <span style={{ color: 'rgba(240,240,250,0.48)' }}>The last quiet<br/>north in Europe.</span>
          </Title>
          <Body max={460} dim={0.82} style={{ marginTop: 0 }}>
            We operate from Inari — the Sámi heartlands — to the fjords of the Barents Sea.
            From rivers and frozen lakes to open tundra and Arctic fjords. Where private roads
            end, we carry permission to cross. You hear the snow before you see it.
          </Body>
        </div>

        {/* coordinates strip */}
        <div style={{
          marginTop: 120,
          borderTop: '1px solid rgba(240,240,250,0.2)',
          paddingTop: 28,
          display: 'grid',
          gridTemplateColumns: 'repeat(5, minmax(0,1fr))',
          gap: 32,
        }}>
          {[
            ['68°54′N', 'Latitude'],
            ['27°01′E', 'Longitude'],
            ['200 KM', 'Above Arctic Circle'],
            ['2,585 KM²', 'Urho Kekkonen NP'],
            ['−32°C → +4°C', 'Season envelope'],
          ].map(([v, l], i) => (
            <div key={i}>
              <div style={{
                fontFamily: "'Barlow', Arial, sans-serif",
                fontSize: 'clamp(22px, 2vw, 28px)', fontWeight: 700, letterSpacing: 0.6,
                textTransform: 'uppercase', color: '#f0f0fa', lineHeight: 1,
              }}>{v}</div>
              <div style={{
                marginTop: 10, fontSize: 10, letterSpacing: 1.6,
                color: 'rgba(240,240,250,0.55)', textTransform: 'uppercase',
              }}>{l}</div>
            </div>
          ))}
        </div>

        {/* three-up reasons */}
        <div style={{
          marginTop: 72,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
          gap: 48,
        }}>
          {[
            ['Why here', 'The geography hasn\'t been tamed for tourism. The roads we use were built for reindeer herders, not coaches.'],
            ['Why winter', 'The polar night is four hours of blue, ten hours of black, and an aurora window most clients never experience uncrowded.'],
            ['Why us', 'We were born here, we file our taxes here, and we answer to neighbours who know the terrain better than any guidebook.'],
          ].map(([t, b], i) => (
            <div key={i}>
              <div style={{
                fontFamily: "'Barlow', Arial, sans-serif",
                fontSize: 15, fontWeight: 700, letterSpacing: 0.8,
                textTransform: 'uppercase', color: '#f0f0fa', marginBottom: 14,
              }}>{t}</div>
              <div style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(240,240,250,0.68)' }}>{b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Territory = Territory;
