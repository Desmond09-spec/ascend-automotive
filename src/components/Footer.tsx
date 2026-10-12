export function Footer() {
  return (
    <footer className="border-t border-carbon-700 bg-carbon-950 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-lg tracking-wider text-chrome-100">ASCEND</span>
              <span className="font-display text-lg tracking-wider text-signal-500">/</span>
              <span className="font-display text-lg tracking-wider text-chrome-400">AUTOMOTIVE</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-chrome-500">
              Window tinting, paint protection film, and headlight restoration.
              Family-owned. Every vehicle treated like our own.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-signal-500">Services</p>
            <div className="space-y-2.5">
              <a href="#what-we-do" className="block text-sm text-chrome-500 transition-colors hover:text-chrome-100">
                Window Tinting
              </a>
              <a href="#what-we-do" className="block text-sm text-chrome-500 transition-colors hover:text-chrome-100">
                Paint Protection Film
              </a>
              <a href="#what-we-do" className="block text-sm text-chrome-500 transition-colors hover:text-chrome-100">
                Headlight Restoration
              </a>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-signal-500">Navigate</p>
            <div className="space-y-2.5">
              <a href="#about" className="block text-sm text-chrome-500 transition-colors hover:text-chrome-100">
                About
              </a>
              <a href="#why-choose-us" className="block text-sm text-chrome-500 transition-colors hover:text-chrome-100">
                Why Choose Us
              </a>
              <a href="#come-see" className="block text-sm text-chrome-500 transition-colors hover:text-chrome-100">
                Come See the Difference
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-carbon-700 pt-6">
          <p className="text-xs text-chrome-600">
            &copy; {new Date().getFullYear()} Ascend Automotive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
