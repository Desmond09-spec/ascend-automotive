const marqueeItems = [
  'WINDOW TINTING',
  'PAINT PROTECTION FILM',
  'HEADLIGHT RESTORATION',
  'EST. 2024',
  'FAMILY-OWNED',
  'NO SHORTCUTS',
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen bg-carbon-950 flex flex-col">
      {/* Content */}
      <div className="flex flex-1 flex-col justify-center px-6 pt-32 pb-16 md:px-12 lg:px-16">
        <p className="mb-8 text-xs uppercase tracking-widest text-signal-500">
          Est. 2024 — formerly Tint Buddies
        </p>

        {/* Full-width headline */}
        <h1 className="font-display text-[5rem] leading-[0.85] text-chrome-100 sm:text-8xl lg:text-[11rem] xl:text-[13rem]">
          TINT. FILM. RESTORATION.
          <br />
          <span className="text-signal-500">NO SHORTCUTS.</span>
        </h1>

        {/* Two-column row: description + CTAs */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-12">
          <p className="text-base leading-relaxed text-chrome-400 lg:col-span-5">
            A family shop that treats every car like it's our own. No corporate
            playbook. No upselling. No rush. Just skilled hands and honest work.
          </p>
          <div className="flex flex-wrap items-start gap-4 sm:col-start-2 lg:col-span-4 lg:col-start-9">
            <a
              href="#come-see"
              className="border border-signal-600 bg-signal-600 px-8 py-3 text-xs uppercase tracking-widest font-medium text-chrome-100 transition-colors hover:bg-transparent"
            >
              Book a Service
            </a>
            <a
              href="#what-we-do"
              className="border border-carbon-600 px-8 py-3 text-xs uppercase tracking-widest font-medium text-chrome-300 transition-colors hover:border-chrome-300 hover:text-chrome-100"
            >
              See What We Do
            </a>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative border-y border-carbon-700 bg-carbon-900 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, i) => (
              <span
                key={i}
                className="font-display text-xl tracking-wider text-chrome-500 mx-8"
              >
                {item}
                <span className="text-signal-600 ml-8">/</span>
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
