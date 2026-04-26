/* global React */
const { useEffect, useRef, useState } = React;

// ----- IntersectionObserver reveal hook ----------------------
function useReveal(threshold = 0.18) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, shown];
}

// ----- Photographic scene ------------------------------------
function Scene({ id, image, label, children, align = 'left', minHeight = '100vh', overlay, noOverlay }) {
  return (
    <section id={id} data-screen-label={label} style={{
      position: 'relative', minHeight, width: '100%', overflow: 'hidden',
    }}>
      {image && (
        <div aria-hidden style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'slowZoom 2400ms cubic-bezier(0.16,1,0.3,1) both',
        }} />
      )}
      {!noOverlay && (
        <div aria-hidden style={{
          position: 'absolute', inset: 0,
          background: overlay || 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.80) 100%)',
        }} />
      )}
      <div style={{
        position: 'relative', zIndex: 2,
        width: '100%', minHeight,
        padding: '120px 48px 72px',
        display: 'flex', flexDirection: 'column',
        justifyContent: align === 'bottom' ? 'flex-end' : 'center',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align === 'center' ? 'center' : 'left',
      }}>
        {children}
      </div>
    </section>
  );
}

// ----- Labels, titles, body ----------------------------------
function Eyebrow({ children, style }) {
  return <div style={{
    fontFamily: "'Barlow', Arial, sans-serif",
    fontSize: 11, fontWeight: 400, letterSpacing: 1.6,
    textTransform: 'uppercase', color: 'rgba(240,240,250,0.65)',
    lineHeight: 1, marginBottom: 20,
    display: 'inline-flex', alignItems: 'center', gap: 14,
    ...style,
  }}>{children}</div>;
}

function EyebrowDot({ children }) {
  return (
    <Eyebrow>
      <span style={{
        width: 6, height: 6, borderRadius: 999,
        background: '#7dd3b8', boxShadow: '0 0 14px rgba(125,211,184,0.6)',
      }} />
      {children}
    </Eyebrow>
  );
}

function Title({ children, size = 'display', max = 920, color, tag: Tag = 'h2', style }) {
  const sizes = {
    display: { fs: 'clamp(44px, 6.2vw, 88px)', ls: 1.2 },
    h1:      { fs: 'clamp(36px, 4.4vw, 60px)', ls: 1.0 },
    h2:      { fs: 'clamp(28px, 2.8vw, 40px)', ls: 0.8 },
    h3:      { fs: 22, ls: 0.5 },
  }[size] || { fs: 48, ls: 0.96 };
  return (
    <Tag style={{
      fontFamily: "'Barlow', Arial, sans-serif",
      fontSize: sizes.fs, fontWeight: 700, lineHeight: 0.98,
      letterSpacing: sizes.ls + 'px',
      textTransform: 'uppercase',
      color: color || '#f0f0fa',
      margin: 0, maxWidth: max, textWrap: 'balance',
      ...style,
    }}>{children}</Tag>
  );
}

function Body({ children, max = 540, dim = 0.82, style }) {
  return <p style={{
    fontFamily: "'Barlow', Arial, sans-serif",
    fontSize: 16, fontWeight: 400, lineHeight: 1.65,
    color: `rgba(240,240,250,${dim})`,
    margin: '24px 0 0', maxWidth: max,
    textWrap: 'pretty',
    ...style,
  }}>{children}</p>;
}

// ----- Ghost button ------------------------------------------
function GhostButton({ children, onClick, href, variant = 'default', style, ariaLabel }) {
  const v = {
    default: { bg: 'rgba(240,240,250,0.10)', border: 'rgba(240,240,250,0.35)', bgHi: 'rgba(240,240,250,0.20)' },
    solid:   { bg: '#f0f0fa', border: '#f0f0fa', bgHi: '#fff', fg: '#000' },
    faint:   { bg: 'transparent', border: 'rgba(240,240,250,0.25)', bgHi: 'rgba(240,240,250,0.12)' },
  }[variant];
  const [hover, setHover] = useState(false);
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 14,
    padding: '18px 30px',
    background: hover ? v.bgHi : v.bg,
    border: '1px solid ' + v.border,
    borderRadius: 32,
    color: v.fg || (hover ? '#fff' : '#f0f0fa'),
    fontFamily: "'Barlow', Arial, sans-serif",
    fontSize: 13, fontWeight: 700, letterSpacing: 1.17,
    textTransform: 'uppercase', cursor: 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background 220ms cubic-bezier(0.16,1,0.3,1), color 220ms cubic-bezier(0.16,1,0.3,1), border-color 220ms',
    ...style,
  };
  const common = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: base,
    'aria-label': ariaLabel,
  };
  if (href) return <a href={href} {...common}>{children}</a>;
  return <button onClick={onClick} {...common}>{children}</button>;
}

function ArrowR({ size = 14 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
}
function ArrowD({ size = 14 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m5 12 7 7 7-7"/></svg>;
}
function Plus({ size = 14 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>;
}

// ----- Hairline rule -----------------------------------------
function Hairline({ style }) {
  return <div aria-hidden style={{
    height: 1, width: '100%', background: 'rgba(240,240,250,0.15)', ...style,
  }} />;
}

// ----- Metadata row (key/value pairs) ------------------------
function MetaRow({ items, style }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`,
      gap: 32,
      borderTop: '1px solid rgba(240,240,250,0.15)',
      paddingTop: 20,
      ...style,
    }}>
      {items.map((it, i) => (
        <div key={i}>
          <div style={{
            fontSize: 10, letterSpacing: 1.6, color: 'rgba(240,240,250,0.45)',
            textTransform: 'uppercase', marginBottom: 8,
          }}>{it.label}</div>
          <div style={{
            fontSize: 13, fontWeight: 700, letterSpacing: 1.17,
            textTransform: 'uppercase', color: '#f0f0fa',
          }}>{it.value}</div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, {
  useReveal, Scene, Eyebrow, EyebrowDot, Title, Body,
  GhostButton, ArrowR, ArrowD, Plus, Hairline, MetaRow,
});
