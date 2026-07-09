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
      <div className="hero-coords" aria-hidden>
        <div className="hero-coords__primary">68°54′N · 27°01′E</div>
        <div>Saariselkä · Inari</div>
        <div className="hero-status hero-status--desktop">
          <span className="hero-status__dot" />
          Winter season 2027 · open for briefs
        </div>
      </div>

      <div className="hero-content rise-in">
        <EyebrowDot className="hero-eyebrow" style={{ marginBottom: 20 }}>
          ARC4 Collective · Arctic Lapland · Est. Inari
        </EyebrowDot>
        <Title size="display" max={1100} className="hero-title" style={{ fontSize: 80 }}>
          ARCTIC EXPERIENCE DESIGNERS.
        </Title>
        <Body max={560} dim={0.85} style={{ marginTop: 28, fontSize: 18 }}>
          Corporate expeditions and private programmes, for those who want to feel the true Arctic.
        </Body>
        <div className="hero-buttons">
          <GhostButton onClick={onEnquire}>
            Begin a brief <ArrowR />
          </GhostButton>
          <GhostButton href="#experiences" variant="faint">
            Experiences <ArrowD />
          </GhostButton>
        </div>
        <div className="hero-meta">
          <div className="hero-meta__item">
            <div className="hero-meta__value">4—60+</div>
            <div className="hero-meta__label">Guest scale</div>
          </div>
          <div className="hero-meta__item">
            <div className="hero-meta__value">14H</div>
            <div className="hero-meta__label">Polar night</div>
          </div>
          <div className="hero-meta__item">
            <div className="hero-meta__value">-32°C</div>
            <div className="hero-meta__label">Mean Jan low</div>
          </div>
        </div>
      </div>
    </Scene>
  );
}

window.Hero = Hero;
