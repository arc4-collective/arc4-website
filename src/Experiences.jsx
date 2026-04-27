/* global React, useReveal, Eyebrow, Title, Body, Plus, Hairline */
const { useState } = React;

const EXPERIENCES = [
  {
    id: 'corporate',
    title: 'Executive Forums & Corporate Offsites',
    meta: ['End-to-end', '4—60+ guests', 'Bespoke'],
    blurb: 'Off-sites, board weeks, client incentives, brand events. We take the brief, handle the logistics, and disappear on location.',
    image: 'assets/photos/corporate.webp',
    tag: 'S—01',
  },
  {
    id: 'snowmobile',
    title: 'Snowmobile Expeditions',
    meta: ['Range 40—400 KM', 'Group 6—24', 'Winter only'],
    blurb: 'Multi-day routes across frozen lakes and fell country. Fleet-led, mechanic-supported, film-crew tested.',
    image: 'assets/photos/snowmobile.webp',
    tag: 'S—02',
  },
  {
    id: 'dinners',
    title: 'Wilderness Dinners & Cuisine',
    meta: ['Off-grid', 'Chef-led', '8—40 covers'],
    blurb: 'A full kitchen raised in a forest we own the access to. Wood-fire service, Sámi provenance, zero signage.',
    image: 'assets/photos/dinners.webp?v=2',
    tag: 'S—03',
  },
  {
    id: 'freeride',
    title: 'Arctic Freeride',
    meta: ['Backcountry', 'Heli & cat-access', 'Feb—Apr'],
    blurb: 'Split-boarding, ski-touring and fat-bike lines across fell tops and untracked timber. Guided by locals who ride these slopes year in, year out.',
    image: 'assets/photos/freeride.webp',
    tag: 'S—04',
  },
  {
    id: 'aurora',
    title: 'Northern Lights Programs',
    meta: ['Kp-reactive', 'Private sites', 'Oct—Mar'],
    blurb: 'Remote observatories on private concessions. Aurora forecasted nightly; a driver and a photographer on standby.',
    image: 'assets/photos/aurora.webp?v=2',
    tag: 'S—05',
  },
  {
    id: 'wildlife',
    title: 'Wildlife Encounters',
    meta: ['Reindeer', 'Husky', 'Moose', 'King Crab'],
    blurb: 'Time with the kennels, herds and wild fauna that live here year-round. No staging, no crowds — the real working day.',
    image: 'assets/photos/wildlife.webp',
    tag: 'S—06',
  },
];

function ExperienceCard({ exp, index }) {
  const [hover, setHover] = useState(false);
  const [ref, shown] = useReveal(0.12);
  return (
    <a
      href="#enquire"
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        display: 'block',
        aspectRatio: '4/5',
        overflow: 'hidden',
        cursor: 'pointer',
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 800ms cubic-bezier(0.16,1,0.3,1) ${index * 60}ms, transform 800ms cubic-bezier(0.16,1,0.3,1) ${index * 60}ms`,
        textDecoration: 'none', color: 'inherit',
      }}
    >
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${exp.image})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        transform: hover
          ? `scale(${(exp.imageScale || 1) * 1.07})`
          : `scale(${(exp.imageScale || 1) * 1.02})`,
        filter: hover
          ? 'brightness(1.12) contrast(1.08) saturate(1.15)'
          : 'brightness(1.05) contrast(1.06) saturate(1.1)',
        transition: 'transform 900ms cubic-bezier(0.16,1,0.3,1), filter 600ms ease',
      }} />
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: hover
          ? 'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.08) 40%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.92) 100%)'
          : 'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.08) 40%, rgba(0,0,0,0.48) 75%, rgba(0,0,0,0.88) 100%)',
        transition: 'background 420ms cubic-bezier(0.16,1,0.3,1)',
      }} />
      {/* Top row */}
      <div style={{
        position: 'absolute', top: 20, left: 22, right: 22, zIndex: 2,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: "'Barlow', Arial, sans-serif",
        fontSize: 10, letterSpacing: 1.6, color: 'rgba(240,240,250,0.7)',
        textTransform: 'uppercase',
      }}>
        <span>{exp.tag}</span>
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 28, height: 28, borderRadius: 999,
          border: '1px solid rgba(240,240,250,0.35)',
          color: '#f0f0fa',
          transform: hover ? 'rotate(45deg)' : 'rotate(0deg)',
          transition: 'transform 420ms cubic-bezier(0.16,1,0.3,1), background 220ms',
          background: hover ? 'rgba(240,240,250,0.15)' : 'transparent',
        }}><Plus size={12} /></span>
      </div>
      {/* Bottom content */}
      <div style={{
        position: 'absolute', left: 22, right: 22, bottom: 22, zIndex: 2,
      }}>
        <div style={{
          fontFamily: "'Barlow', Arial, sans-serif",
          fontSize: 22, fontWeight: 700,
          letterSpacing: 0.6, lineHeight: 1.04,
          textTransform: 'uppercase', color: '#f0f0fa', margin: 0,
          textShadow: '0 2px 18px rgba(0,0,0,0.55)',
        }}>{exp.title}</div>
        <div style={{
          maxHeight: hover ? 120 : 0, overflow: 'hidden',
          transition: 'max-height 520ms cubic-bezier(0.16,1,0.3,1), opacity 420ms',
          opacity: hover ? 1 : 0,
        }}>
          <p style={{
            fontSize: 13, lineHeight: 1.55, color: 'rgba(240,240,250,0.82)',
            margin: '12px 0 0', maxWidth: 360,
          }}>{exp.blurb}</p>
        </div>
        <div style={{
          marginTop: 14,
          borderTop: '1px solid rgba(240,240,250,0.25)',
          paddingTop: 10,
          display: 'flex', gap: 18, flexWrap: 'wrap',
          fontFamily: "'Barlow', Arial, sans-serif",
          fontSize: 10, letterSpacing: 1.4, color: 'rgba(240,240,250,0.6)',
          textTransform: 'uppercase',
        }}>
          {exp.meta.map((m, i) => <span key={i}>{m}</span>)}
        </div>
      </div>
    </a>
  );
}

function Experiences() {
  return (
    <section id="experiences" data-screen-label="03 Experiences" className="section-padding" style={{
      position: 'relative', background: '#000',
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div className="grid-2" style={{
          alignItems: 'end', marginBottom: 72,
        }}>
          <div>
            <Eyebrow>
              <span style={{ width: 20, height: 1, background: 'rgba(125,211,184,0.7)' }} />
              03 · Catalogue
            </Eyebrow>
            <Title size="h1" max={500} style={{ marginTop: 8 }}>
              Six surfaces we<br/>work from.
            </Title>
          </div>
          <div>
            <Body max={560} dim={0.7} style={{ marginTop: 0 }}>
              A catalogue, not a menu. Every brief we receive is written from these six starting
              points, then produced to specification. Select one to begin a conversation — the
              programme is drawn after.
            </Body>
          </div>
        </div>

        <div className="grid-3">
          {EXPERIENCES.map((e, i) => <ExperienceCard key={e.id} exp={e} index={i} />)}
        </div>

        <Hairline style={{ marginTop: 64 }} />
        <div style={{
          marginTop: 24,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontFamily: "'Barlow', Arial, sans-serif",
          fontSize: 10, letterSpacing: 1.6, color: 'rgba(240,240,250,0.45)',
          textTransform: 'uppercase',
        }}>
          <div>Programmes hybridise. Expect overlap.</div>
          <div>Season · Oct — Apr · 2026</div>
        </div>
      </div>
    </section>
  );
}

window.Experiences = Experiences;
