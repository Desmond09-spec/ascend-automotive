export function Footer() {
  return (
    <footer className="border-t border-carbon-700 bg-carbon-950 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-lg tracking-wider text-chrome-100">ASCEND</span>
            <span className="font-display text-lg tracking-wider text-signal-500">/</span>
            <span className="font-display text-lg tracking-wider text-chrome-500">AUTOMOTIVE</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6">
            <a href="#about" className="text-xs uppercase tracking-widest text-chrome-500 transition-colors hover:text-chrome-100">About</a>
            <a href="#what-we-do" className="text-xs uppercase tracking-widest text-chrome-500 transition-colors hover:text-chrome-100">Services</a>
            <a href="#why-choose-us" className="text-xs uppercase tracking-widest text-chrome-500 transition-colors hover:text-chrome-100">Why Us</a>
            <a href="#come-see" className="text-xs uppercase tracking-widest text-chrome-500 transition-colors hover:text-chrome-100">Visit</a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-chrome-600">
            &copy; {new Date().getFullYear()} Ascend Automotive
          </p>
        </div>
      </div>
    </footer>
  );
}
