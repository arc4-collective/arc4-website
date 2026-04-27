/* global React, Nav, Hero, Positioning, Experiences, Corporate, Territory, Enquire, Footer */
const { useEffect, useState, useRef } = React;

function App() {
  const [activeId, setActiveId] = useState('hero');
  const enquireRef = useRef(null);

  // scene spy
  useEffect(() => {
    const ids = ['hero', 'positioning', 'experiences', 'corporate', 'territory', 'enquire'];
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.4;
      let active = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) active = id;
      }
      setActiveId(active);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goEnquire = () => {
    const el = document.getElementById('enquire');
    if (!el) return;
    window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
    enquireRef.current?.focus?.();
  };

  return (
    <div style={{ background: '#000', color: '#f0f0fa', minHeight: '100vh', overflowX: 'hidden' }}>
      <Nav onEnquire={goEnquire} activeId={activeId} />
      <main>
        <Hero onEnquire={goEnquire} />
        <Positioning />
        <Experiences />
        <Corporate onEnquire={goEnquire} />
        <Territory />
        <Enquire ref={enquireRef} />
        <Footer />
      </main>
    </div>
  );
}

window.App = App;
