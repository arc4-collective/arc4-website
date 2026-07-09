/* global React, Scene, Title, Body, GhostButton, ArrowR, ArrowD, EyebrowDot */

function Hero({ onEnquire }) {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== 'undefined' && window.innerWidth <= 768
  );

  React.useEffect(() => {
    function update() {
      setIsMobile(window.innerWidth <= 768);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

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
        <div className="hero-season-status hero-season-desktop" style={{ marginTop: 6, color: '#FA4616' }}>
          <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 999, background: '#FA4616', marginRight: 8, verticalAlign: 'middle' }} />
          Winter season 2027 · open for briefs
        </div>
      </div>

      {/* Headline block */}
      <div className="rise-in" style={{ maxWidth: 1100 }}>
        <EyebrowDot style={{ marginBottom: isMobile ? 6 : 20, fontSize: isMobile ? 9 : 11 }}>
          ARC4 Collective · Arctic Lapland · Est. Inari
        </EyebrowDot>
        <Title size="display" max={1100} style={{ fontSize: isMobile ? 'clamp(32px, 8vw, 48px)' : '80px' }}>
          ARCTIC EXPERIENCE DESIGNERS.
        </Title>
        <Body max={560} dim={0.85} style={{ marginTop: 28, fontSize: isMobile ? 13 : 18 }}>
          Corporate expeditions and private programmes, for those who want 
to feel the true Arctic.
        </Body>
        <div style={{ marginTop: 36, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <GhostButton onClick={onEnquire} style={{ fontSize: isMobile ? 12 : 13 }}>
            Enquire <ArrowR />
          </GhostButton>
          <GhostButton href="#experiences" variant="faint" style={{ fontSize: isMobile ? 12 : 13 }}>
            Experiences <ArrowD />
          </GhostButton>
        </div>
      </div>

      <div className="hero-metadata-bar" style={{
        position: 'absolute',
        top: isMobile ? '50%' : undefined,
        bottom: isMobile ? undefined : 24,
        right: 24,
        transform: isMobile ? 'translateY(-50%)' : undefined,
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-end' : undefined,
        justifyContent: isMobile ? undefined : 'flex-end',
        gap: isMobile ? 20 : 24,
        paddingTop: 24,
        paddingRight: 48,
        background: 'transparent',
        backgroundColor: 'transparent',
      }}>
        <div className="hero-metadata-row" style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-end' : 'center',
          gap: isMobile ? 20 : 24,
        }}>
          <div className="hero-metadata-item">
            <div className="hero-metadata-value" style={{ fontSize: isMobile ? 13 : 14, fontWeight: isMobile ? 700 : 400, color: isMobile ? '#f0f0fa' : undefined }}>
              4—60+
            </div>
            <div className="hero-metadata-label" style={{ fontSize: isMobile ? 9 : 11, color: isMobile ? 'rgba(240,240,250,0.55)' : undefined, letterSpacing: isMobile ? 1 : undefined, textTransform: isMobile ? 'uppercase' : undefined }}>
              Guest scale
            </div>
          </div>
          <div className="hero-metadata-item">
            <div className="hero-metadata-value" style={{ fontSize: isMobile ? 13 : 14, fontWeight: isMobile ? 700 : 400, color: isMobile ? '#f0f0fa' : undefined }}>
              14H
            </div>
            <div className="hero-metadata-label" style={{ fontSize: isMobile ? 9 : 11, color: isMobile ? 'rgba(240,240,250,0.55)' : undefined, letterSpacing: isMobile ? 1 : undefined, textTransform: isMobile ? 'uppercase' : undefined }}>
              Polar night
            </div>
          </div>
          <div className="hero-metadata-item">
            <div className="hero-metadata-value" style={{ fontSize: isMobile ? 13 : 14, fontWeight: isMobile ? 700 : 400, color: isMobile ? '#f0f0fa' : undefined }}>
              -32°C
            </div>
            <div className="hero-metadata-label" style={{ fontSize: isMobile ? 9 : 11, color: isMobile ? 'rgba(240,240,250,0.55)' : undefined, letterSpacing: isMobile ? 1 : undefined, textTransform: isMobile ? 'uppercase' : undefined }}>
              Mean Jan low
            </div>
          </div>
        </div>
      </div>
    </Scene>
  );
}

window.Hero = Hero;
