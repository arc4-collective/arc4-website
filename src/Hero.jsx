/* global React, Scene, Title, Body, GhostButton, ArrowR, ArrowD, EyebrowDot */

function Hero({ onEnquire }) {
  return (
    <Scene
      id="hero"
      label="01 Hero"
      image="https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=2400"
      align="bottom"
      overlay="linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.85) 100%)"
    >
      {/* Corner callouts */}
      <div style={{
        position: 'absolute', top: 110, right: 48,
        textAlign: 'right',
        fontFamily: "'Barlow', Arial, sans-serif",
        fontSize: 10, letterSpacing: 1.6,
        textTransform: 'uppercase', color: 'rgba(240,240,250,0.55)',
        lineHeight: 1.8,
      }}>
        <div style={{ color: 'rgba(240,240,250,0.85)' }}>68°54′N · 27°01′E</div>
        <div>Saariselkä · Inari</div>
        <div style={{ marginTop: 6, color: 'rgba(125,211,184,0.9)' }}>
          <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: 999, background: '#7dd3b8', marginRight: 8, verticalAlign: 'middle' }} />
          Winter season 2027 · open for briefs
        </div>
      </div>

      {/* Headline block */}
      <div className="rise-in" style={{ maxWidth: 1100 }}>
        <EyebrowDot>ARC4 Collective · Arctic Lapland · Est. Inari</EyebrowDot>
        <Title size="display" max={1100}>
          Arctic Experience<br/>Designers.
        </Title>
        <Body max={560} dim={0.85} style={{ marginTop: 28 }}>
          Bespoke offsites, expeditions and programmes for corporate groups and private clients.
          Designed and produced across the Finnish Lapland to the wider Scandinavian Arctic.
        </Body>
        <div style={{ marginTop: 36, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <GhostButton onClick={onEnquire}>
            Enquire <ArrowR />
          </GhostButton>
          <GhostButton href="#experiences" variant="faint">
            Experiences <ArrowD />
          </GhostButton>
        </div>
      </div>

      {/* bottom meta row */}
      <div style={{
        position: 'absolute', bottom: 32, left: 48, right: 48,
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
        gap: 32,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{
            fontFamily: "'Barlow', Arial, sans-serif",
            fontSize: 10, letterSpacing: 1.6,
            textTransform: 'uppercase', color: 'rgba(240,240,250,0.55)',
          }}>Scroll</span>
          <div style={{ width: 48, height: 1, background: 'rgba(240,240,250,0.35)' }} />
        </div>
        <div style={{
          display: 'flex', gap: 56,
          fontFamily: "'Barlow', Arial, sans-serif",
          fontSize: 10, letterSpacing: 1.6,
          textTransform: 'uppercase', color: 'rgba(240,240,250,0.55)',
          textAlign: 'right',
        }}>
          <div>
            <div style={{ color: 'rgba(240,240,250,0.85)', fontWeight: 700, fontSize: 13, letterSpacing: 1.17 }}>-32°C</div>
            <div style={{ marginTop: 4 }}>Mean Jan low</div>
          </div>
          <div>
            <div style={{ color: 'rgba(240,240,250,0.85)', fontWeight: 700, fontSize: 13, letterSpacing: 1.17 }}>14H</div>
            <div style={{ marginTop: 4 }}>Polar night</div>
          </div>
          <div>
            <div style={{ color: 'rgba(240,240,250,0.85)', fontWeight: 700, fontSize: 13, letterSpacing: 1.17 }}>4—60+</div>
            <div style={{ marginTop: 4 }}>Guest scale</div>
          </div>
        </div>
      </div>
    </Scene>
  );
}

window.Hero = Hero;
