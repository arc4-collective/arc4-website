/* global React, Eyebrow, Title, Body, GhostButton, ArrowR, Hairline */
const { useState, forwardRef, useImperativeHandle, useRef, useCallback } = React;

const Enquire = forwardRef(function Enquire(props, ref) {
  const [form, setForm] = useState({
    name: '', email: '', company: '', size: '6—12', dates: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const nameRef = useRef(null);

  const change = useCallback((k) => (e) => setForm(prev => ({ ...prev, [k]: e.target.value })), []);
  const handleSizeChange = useCallback((s) => setForm(prev => ({ ...prev, size: s })), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('https://formspree.io/f/mojyoaeg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('submit failed');
      setSubmitted(true);
    } catch (err) {
      setError('Something broke on our end. Email collective@arc4collective.com directly and we’ll pick it up.');
      setSubmitting(false);
    }
  };

  useImperativeHandle(ref, () => ({
    focus: () => {
      document.getElementById('enquire')?.scrollIntoView
        ? null
        : null;
      // safer: no scrollIntoView per guidelines; just focus
      setTimeout(() => nameRef.current?.focus(), 400);
    },
  }));

  const inputBase = {
    background: 'transparent',
    border: 0,
    borderBottom: '1px solid rgba(240,240,250,0.2)',
    color: '#f0f0fa',
    fontFamily: "'Barlow', Arial, sans-serif",
    fontSize: 18, fontWeight: 400, letterSpacing: 0.5,
    padding: '18px 0 14px',
    width: '100%',
    textTransform: 'none',
    transition: 'border-color 220ms cubic-bezier(0.16,1,0.3,1)',
  };

  const labelStyle = {
    display: 'block',
    fontFamily: "'Barlow', Arial, sans-serif",
    fontSize: 10, letterSpacing: 1.6, color: 'rgba(240,240,250,0.55)',
    textTransform: 'uppercase',
  };

  function Field({ id, label, children }) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor={id} style={labelStyle}>{label}</label>
        {children}
      </div>
    );
  }

  const sizes = ['1—6', '6—12', '12—24', '24—40', '40—60', '60+'];

  // Hidden mirror input so Netlify receives the currently-selected group size
  const HiddenSize = () => <input type="hidden" name="size" value={form.size} />;

  return (
    <section id="enquire" data-screen-label="07 Enquire" style={{
      position: 'relative', minHeight: '100vh', overflow: 'hidden',
    }}>
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1418985991508-e47386d96a71?q=80&w=2400)',
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.45) 100%)',
      }} />

      <div className="grid-2" style={{
        position: 'relative', zIndex: 2, maxWidth: 1400, margin: '0 auto',
        padding: '140px 48px 100px',
        alignItems: 'start',
      }}>
        <div>
          <Eyebrow>
            <span style={{ width: 20, height: 1, background: 'rgba(125,211,184,0.7)' }} />
            07 · Enquire
          </Eyebrow>
          <Title size="h1" max={540}>
            Begin a brief.<br/>
            <span style={{ color: 'rgba(240,240,250,0.5)' }}>We write back within 48 hours.</span>
          </Title>
          <Body max={440} dim={0.78} style={{ marginTop: 32 }}>
            Tell us roughly what you have in mind. The shape of the group, the window,
            and one line on intent is usually enough to start. Pricing, logistics, and
            specifics follow in a produced proposal.
          </Body>
          <Hairline style={{ marginTop: 56 }} />
          <div className="grid-2" style={{ marginTop: 24, gap: 24 }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: 1.6, color: 'rgba(240,240,250,0.45)', textTransform: 'uppercase', marginBottom: 8 }}>Direct</div>
              <a href="mailto:collective@arc4collective.com" style={{
                fontFamily: "'Barlow', Arial, sans-serif",
                fontSize: 15, letterSpacing: 0.4, color: '#f0f0fa',
                textDecoration: 'none', borderBottom: '1px solid rgba(125,211,184,0.5)',
                paddingBottom: 2,
              }}>collective@arc4collective.com</a>
            </div>
            <div>
              <div style={{ fontSize: 10, letterSpacing: 1.6, color: 'rgba(240,240,250,0.45)', textTransform: 'uppercase', marginBottom: 8 }}>Studio</div>
              <div style={{ fontSize: 13, letterSpacing: 1.1, color: 'rgba(240,240,250,0.82)', textTransform: 'uppercase', lineHeight: 1.6 }}>
                ARC4 Oy<br/>Inari · Finnish Lapland<br/>FI · 99870
              </div>
            </div>
          </div>
        </div>

        {/* Form panel */}
        <div style={{
          background: 'rgba(0,0,0,0.35)',
          border: '1px solid rgba(240,240,250,0.15)',
          padding: '40px 40px 36px',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
        }}>
          {submitted ? (
            <div style={{ minHeight: 480, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: 10, letterSpacing: 1.6, color: 'rgba(125,211,184,0.9)', textTransform: 'uppercase', marginBottom: 20 }}>
                <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: 999, background: '#7dd3b8', marginRight: 10, verticalAlign: 'middle' }} />
                Brief received
              </div>
              <Title size="h2" max={520}>
                Thank you, {form.name?.split(' ')[0] || 'friend'}.<br/>
                A producer will write back within 48 hours.
              </Title>
              <Body max={440} dim={0.72} style={{ marginTop: 24 }}>
                You'll hear from collective@arc4collective.com. No newsletters, no follow-ups.
                One reply, one producer, one thread.
              </Body>
            </div>
          ) : (
            <form
              name="enquire"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="grid-2" style={{ gap: 28 }}
            >
              <input type="hidden" name="form-name" value="enquire" />
              <p hidden><label>Don’t fill this out: <input name="bot-field" onChange={() => {}} /></label></p>
              <div style={{ gridColumn: '1 / -1', marginBottom: 4 }}>
                <div style={{ fontSize: 10, letterSpacing: 1.6, color: 'rgba(240,240,250,0.45)', textTransform: 'uppercase' }}>
                  Brief · 5 fields · no account required
                </div>
              </div>

              <Field id="f-name" label="Name">
                <input id="f-name" name="name" ref={nameRef} value={form.name} onChange={change('name')}
                  placeholder="Your full name" required
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(125,211,184,0.8)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(240,240,250,0.2)'}
                  style={inputBase} />
              </Field>

              <Field id="f-email" label="Email">
                <input id="f-email" name="email" type="email" value={form.email} onChange={change('email')}
                  placeholder="you@example.com" required
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(125,211,184,0.8)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(240,240,250,0.2)'}
                  style={inputBase} />
              </Field>

              <Field id="f-company" label="Company">
                <input id="f-company" name="company" value={form.company} onChange={change('company')}
                  placeholder="Organisation or private"
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(125,211,184,0.8)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(240,240,250,0.2)'}
                  style={inputBase} />
              </Field>

              <Field id="f-size" label="Group Size">
                <HiddenSize />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 14 }}>
                  {sizes.map(s => {
                    const active = form.size === s;
                    return (
                      <button type="button" key={s}
                        onClick={() => handleSizeChange(s)}
                        style={{
                          padding: '10px 14px',
                          background: active ? 'rgba(240,240,250,0.18)' : 'transparent',
                          border: '1px solid ' + (active ? 'rgba(240,240,250,0.6)' : 'rgba(240,240,250,0.22)'),
                          borderRadius: 32,
                          color: active ? '#fff' : 'rgba(240,240,250,0.75)',
                          fontFamily: "'Barlow', Arial, sans-serif",
                          fontSize: 11, fontWeight: 700, letterSpacing: 1.17,
                          textTransform: 'uppercase', cursor: 'pointer',
                          transition: 'all 180ms cubic-bezier(0.16,1,0.3,1)',
                        }}>{s}</button>
                    );
                  })}
                </div>
              </Field>

              <Field id="f-dates" label="Dates">
                <input id="f-dates" name="dates" value={form.dates} onChange={change('dates')}
                  placeholder="e.g. Feb 12 — 16, 2026"
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(125,211,184,0.8)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(240,240,250,0.2)'}
                  style={inputBase} />
              </Field>

              <div style={{ gridColumn: '1 / -1' }}>
                <Field id="f-msg" label="Message">
                  <textarea id="f-msg" name="message" rows={4} value={form.message} onChange={change('message')}
                    placeholder="One or two lines on intent. Terrain, tone, moments you want. The fewer adjectives, the better."
                    onFocus={e => e.currentTarget.style.borderColor = 'rgba(125,211,184,0.8)'}
                    onBlur={e => e.currentTarget.style.borderColor = 'rgba(240,240,250,0.2)'}
                    style={{ ...inputBase, resize: 'vertical', minHeight: 96, lineHeight: 1.55, fontSize: 16 }} />
                </Field>
              </div>

              {error && (
                <div style={{ gridColumn: '1 / -1', fontSize: 12, letterSpacing: 0.5, color: '#ff9a80', lineHeight: 1.5 }}>
                  {error}
                </div>
              )}

              <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 16, gap: 20, flexWrap: 'wrap' }}>
                <div style={{ fontSize: 10, letterSpacing: 1.6, color: 'rgba(240,240,250,0.45)', textTransform: 'uppercase', maxWidth: 360 }}>
                  Your brief lands with one producer. We don't share, syndicate, or follow up.
                </div>
                <button type="submit" disabled={submitting} className="ghost-link" style={{
                  padding: '18px 32px', cursor: submitting ? 'wait' : 'pointer',
                  opacity: submitting ? 0.6 : 1,
                }}>
                  {submitting ? 'Sending…' : <>Send brief <ArrowR /></>}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
});

window.Enquire = Enquire;
