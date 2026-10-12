export function Footer() {
  return (
    <footer className="bg-ink-950 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-lg font-medium text-cream-50">Ascend Automotive</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500">
              Window tinting, paint protection film, and headlight restoration.
              Family-owned. Every vehicle treated like our own.
            </p>
          </div>
          <div>
            <p className="mb-4 font-serif text-sm italic text-ember-400">Services</p>
            <div className="space-y-2.5">
              <a href="#what-we-do" className="block text-sm text-ink-500 transition-colors hover:text-cream-50">
                Window Tinting
              </a>
              <a href="#what-we-do" className="block text-sm text-ink-500 transition-colors hover:text-cream-50">
                Paint Protection Film
              </a>
              <a href="#what-we-do" className="block text-sm text-ink-500 transition-colors hover:text-cream-50">
                Headlight Restoration
              </a>
            </div>
          </div>
          <div>
            <p className="mb-4 font-serif text-sm italic text-ember-400">Navigate</p>
            <div className="space-y-2.5">
              <a href="#about" className="block text-sm text-ink-500 transition-colors hover:text-cream-50">
                About
              </a>
              <a href="#why-choose-us" className="block text-sm text-ink-500 transition-colors hover:text-cream-50">
                Why Choose Us
              </a>
              <a href="#come-see" className="block text-sm text-ink-500 transition-colors hover:text-cream-50">
                Come See the Difference
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-ink-800 pt-6">
          <p className="text-xs text-ink-600">
            &copy; {new Date().getFullYear()} Ascend Automotive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
