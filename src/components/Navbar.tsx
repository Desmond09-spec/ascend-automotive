import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-cream-50/95 backdrop-blur-sm border-b border-cream-200' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-serif text-lg font-medium text-ink-900">
          Ascend Automotive
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-600 transition-colors hover:text-ink-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#come-see"
            className="border-b border-ink-900 pb-0.5 text-sm font-medium text-ink-900 transition-colors hover:border-ember-500 hover:text-ember-600"
          >
            Get a Quote
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-ink-900 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-cream-200 bg-cream-50 md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-ink-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#come-see"
              onClick={() => setMobileOpen(false)}
              className="border-b border-ink-900 pb-0.5 text-sm font-medium text-ink-900 w-fit"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
