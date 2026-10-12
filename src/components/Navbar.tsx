import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#what-we-do' },
  { label: 'Why Us', href: '#why-choose-us' },
  { label: 'Visit', href: '#come-see' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-carbon-950/95 backdrop-blur-sm border-b border-carbon-700'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-xl tracking-wider text-chrome-100">
            ASCEND
          </span>
          <span className="font-display text-xl tracking-wider text-signal-500">
            /
          </span>
          <span className="font-display text-xl tracking-wider text-chrome-300">
            AUTOMOTIVE
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-widest text-chrome-400 transition-colors hover:text-chrome-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#come-see"
            className="border border-signal-600 px-5 py-2 text-xs uppercase tracking-widest font-medium text-chrome-100 transition-colors hover:bg-signal-600"
          >
            Get a Quote
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-chrome-100 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-carbon-700 bg-carbon-950 md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-xs uppercase tracking-widest text-chrome-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#come-see"
              onClick={() => setMobileOpen(false)}
              className="border border-signal-600 px-5 py-2 text-xs uppercase tracking-widest font-medium text-chrome-100 w-fit"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
