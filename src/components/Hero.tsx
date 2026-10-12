import { ArrowDownRight, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-grid" />
      <div className="hero-orbit" />
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-dot" /> THE DETAILING SHOP FOR PEOPLE WHO NOTICE</div>
        <h1>Make your<br /><em>mark.</em></h1>
        <p className="hero-intro">Window tint, paint protection film, and restoration work with a sharper point of view. Built for drivers who care how every line lands.</p>
        <div className="hero-actions">
          <a className="button button-red" href="#come-see">Book your vehicle <ArrowRight size={17} /></a>
          <a className="text-link" href="#what-we-do">Explore the work <ArrowDownRight size={17} /></a>
        </div>
      </div>
      <div className="hero-emblem" aria-hidden="true">
        <span className="emblem-a">A</span>
        <span className="emblem-rule" />
        <span className="emblem-label">ASCEND / AUTOMOTIVE</span>
      </div>
      <div className="hero-meta"><span>01 — 04</span><span>MOVE WITH INTENT</span></div>
      <div className="hero-bottom"><span>SCROLL TO DISCOVER</span><ArrowDownRight size={16} /></div>
    </section>
  );
}
