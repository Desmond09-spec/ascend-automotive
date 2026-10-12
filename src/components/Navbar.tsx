import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#what-we-do' },
  { label: 'The Standard', href: '#why-choose-us' },
  { label: 'Our Story', href: '#about' },
  { label: 'Contact', href: '#come-see' },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      A
    </span>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}>
      <div className="top-line">
        <span>PRECISION VEHICLE FINISHING</span>
        <span>EST. 2024 / OKLAHOMA</span>
      </div>
      <nav className="nav-shell">
        <a href="#top" className="brand-lockup" aria-label="Ascend Automotive home">
          <BrandMark />
          <span>
            <strong>ASCEND</strong>
            <small>AUTOMOTIVE</small>
          </span>
        </a>

        <div className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href="#come-see">Start a project <span>↗</span></a>
        </div>

        <button className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {mobileOpen && (
        <div className="mobile-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>{link.label}</a>
          ))}
          <a className="nav-cta" href="#come-see" onClick={() => setMobileOpen(false)}>Start a project <span>↗</span></a>
        </div>
      )}
    </header>
  );
}
