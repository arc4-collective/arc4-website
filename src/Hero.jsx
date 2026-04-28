/* global React, Scene, ArrowR, ArrowD */

function Hero({ onEnquire }) {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== 'undefined' && window.innerWidth < 768
  );

  React.useEffect(() => {
    function update() {
      setIsMobile(window.innerWidth < 768);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // ===== MOBILE LAYOUT (max-width 767px) =====
  if (isMobile) {
    return (
      <Scene
        id="hero"
        label="01 Hero"
        image="assets/photos/hero.webp"
        overlay="linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.80) 100%)"
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '120px 24px 60px',
        }}>
          {/* Eyebrow with aurora dot */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px',
            fontSize: '10px',
            letterSpacing: '0.8px',
            textTransform: 'uppercase',
            color: 'rgba(240,240,250,0.65)',
            whiteSpace: 'nowrap',
            fontFamily: "'Barlow', Arial, sans-serif",
            fontWeight: 400,
          }}>
            <span style={{
              display: 'inline-block',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#7dd3b8',
              flexShrink: 0,
            }} />
            ARC4 COLLECTIVE · ARCTIC LAPLAND · EST. INARI
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Barlow', Arial, sans-serif",
            fontSize: 'clamp(38px, 10vw, 60px)',
            fontWeight: 700,
            lineHeight: 0.95,
            textTransform: 'uppercase',
            color: '#f0f0fa',
            margin: '0 0 16px 0',
            letterSpacing: '-0.02em',
          }}>
            Arctic Experience Designers.
          </h1>

          {/* Body copy */}
          <p style={{
            fontFamily: "'Barlow', Arial, sans-serif",
            fontSize: '15px',
            lineHeight: 1.6,
            color: 'rgba(240,240,250,0.85)',
            margin: '16px 0 0 0',
            maxWidth: '540px',
          }}>
            Bespoke offsites, expeditions and programmes for corporate groups and private clients. Designed and produced across the Finnish Lapland to the wider Scandinavian Arctic.
          </p>

          {/* Buttons - stacked */}
          <button onClick={onEnquire} style={{
            marginTop: '24px',
            width: 'auto',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            padding: '14px 24px',
            background: 'rgba(240,240,250,0.10)',
            border: '1px solid rgba(240,240,250,0.35)',
            borderRadius: '32px',
            color: '#f0f0fa',
            fontFamily: "'Barlow', Arial, sans-serif",
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '1.17px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'background 220ms cubic-bezier(0.16,1,0.3,1)',
          }}>
            Enquire <ArrowR size={13} />
          </button>

          <a href="#experiences" style={{
            marginTop: '12px',
            width: 'auto',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            padding: '14px 24px',
            background: 'transparent',
            border: '1px solid rgba(240,240,250,0.25)',
            borderRadius: '32px',
            color: '#f0f0fa',
            fontFamily: "'Barlow', Arial, sans-serif",
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '1.17px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'background 220ms cubic-bezier(0.16,1,0.3,1)',
          }}>
            Experiences <ArrowD size={13} />
          </a>
        </div>
      </Scene>
    );
  }

  // ===== DESKTOP LAYOUT (min-width 768px) =====
  return (
    <Scene
      id="hero"
      label="01 Hero"
      image="assets/photos/hero.webp"
      overlay="linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.80) 100%)"
    >
      {/* Main hero content - lower left */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        padding: '120px 48px 72px',
        maxWidth: '640px',
      }}>
        {/* Eyebrow with aurora dot */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '20px',
          fontSize: '11px',
          letterSpacing: '1.6px',
          textTransform: 'uppercase',
          color: 'rgba(240,240,250,0.65)',
          fontFamily: "'Barlow', Arial, sans-serif",
          fontWeight: 400,
        }}>
          <span style={{
            display: 'inline-block',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#7dd3b8',
            flexShrink: 0,
          }} />
          ARC4 COLLECTIVE · ARCTIC LAPLAND · EST. INARI
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'Barlow', Arial, sans-serif",
          fontSize: 'clamp(44px, 6.2vw, 88px)',
          fontWeight: 700,
          lineHeight: 0.95,
          textTransform: 'uppercase',
          color: '#f0f0fa',
          margin: '0 0 28px 0',
          letterSpacing: '-0.02em',
          maxWidth: '800px',
        }}>
          Arctic Experience Designers.
        </h1>

        {/* Body copy */}
        <p style={{
          fontFamily: "'Barlow', Arial, sans-serif",
          fontSize: '16px',
          lineHeight: 1.6,
          color: 'rgba(240,240,250,0.85)',
          margin: 0,
          maxWidth: '540px',
        }}>
          Bespoke offsites, expeditions and programmes for corporate groups and private clients. Designed and produced across the Finnish Lapland to the wider Scandinavian Arctic.
        </p>

        {/* Buttons row */}
        <div style={{
          marginTop: '32px',
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
        }}>
          <button onClick={onEnquire} style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            padding: '14px 24px',
            background: 'rgba(240,240,250,0.10)',
            border: '1px solid rgba(240,240,250,0.35)',
            borderRadius: '32px',
            color: '#f0f0fa',
            fontFamily: "'Barlow', Arial, sans-serif",
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '1.17px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'background 220ms cubic-bezier(0.16,1,0.3,1)',
          }}>
            Enquire <ArrowR size={13} />
          </button>

          <a href="#experiences" style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            padding: '14px 24px',
            background: 'transparent',
            border: '1px solid rgba(240,240,250,0.25)',
            borderRadius: '32px',
            color: '#f0f0fa',
            fontFamily: "'Barlow', Arial, sans-serif",
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '1.17px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'background 220ms cubic-bezier(0.16,1,0.3,1)',
          }}>
            Experiences <ArrowD size={13} />
          </a>
        </div>
      </div>

      {/* Coordinates block - absolute top right */}
      <div style={{
        position: 'absolute',
        top: '80px',
        right: '48px',
        textAlign: 'right',
        fontFamily: "'Barlow', Arial, sans-serif",
        fontSize: '11px',
        letterSpacing: '1.6px',
        textTransform: 'uppercase',
        color: 'rgba(240,240,250,0.65)',
        lineHeight: 1.6,
      }}>
        <div style={{ color: '#f0f0fa' }}>68°54′ N · 27°01′ E</div>
        <div>SAARISELKÄ · INARI</div>
      </div>

      {/* Winter season indicator */}
      <div style={{
        position: 'absolute',
        top: '120px',
        right: '48px',
        fontFamily: "'Barlow', Arial, sans-serif",
        fontSize: '11px',
        letterSpacing: '0.8px',
        textTransform: 'uppercase',
        color: '#7dd3b8',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <span style={{
          display: 'inline-block',
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          background: '#7dd3b8',
        }} />
        WINTER SEASON 2027 · OPEN FOR BRIEFS
      </div>

      {/* Metadata bar - absolute bottom right */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        right: '48px',
        display: 'flex',
        gap: '48px',
        alignItems: 'flex-end',
      }}>
        {/* Item 1 */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: "'Barlow', Arial, sans-serif",
            fontSize: '20px',
            fontWeight: 700,
            color: '#f0f0fa',
            marginBottom: '8px',
            lineHeight: 1,
          }}>
            4—60+
          </div>
          <div style={{
            fontFamily: "'Barlow', Arial, sans-serif",
            fontSize: '10px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: 'rgba(240,240,250,0.55)',
            lineHeight: 1,
          }}>
            Guest Scale
          </div>
        </div>

        {/* Item 2 */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: "'Barlow', Arial, sans-serif",
            fontSize: '20px',
            fontWeight: 700,
            color: '#f0f0fa',
            marginBottom: '8px',
            lineHeight: 1,
          }}>
            14H
          </div>
          <div style={{
            fontFamily: "'Barlow', Arial, sans-serif",
            fontSize: '10px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: 'rgba(240,240,250,0.55)',
            lineHeight: 1,
          }}>
            Polar Night
          </div>
        </div>

        {/* Item 3 */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: "'Barlow', Arial, sans-serif",
            fontSize: '20px',
            fontWeight: 700,
            color: '#f0f0fa',
            marginBottom: '8px',
            lineHeight: 1,
          }}>
            -32°C
          </div>
          <div style={{
            fontFamily: "'Barlow', Arial, sans-serif",
            fontSize: '10px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: 'rgba(240,240,250,0.55)',
            lineHeight: 1,
          }}>
            Mean Jan Low
          </div>
        </div>
      </div>

      {/* SCROLL indicator - bottom left */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '48px',
        fontFamily: "'Barlow', Arial, sans-serif",
        fontSize: '10px',
        letterSpacing: '1.2px',
        textTransform: 'uppercase',
        color: 'rgba(240,240,250,0.55)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
      }}>
        <span>SCROLL</span>
        <span style={{ fontSize: '12px' }}>↓</span>
      </div>
    </Scene>
  );
}

window.Hero = Hero;
