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
    <section id="top" className="relative min-h-screen bg-carbon-950">
      {/* Split layout */}
      <div className="flex min-h-screen flex-col md:flex-row">
        {/* Left — content */}
        <div className="flex flex-col justify-center px-6 pt-32 pb-16 md:w-[55%] md:px-12 md:pt-24 lg:px-16">
          <p className="mb-8 text-xs uppercase tracking-widest text-signal-500">
            Est. 2024 — formerly Tint Buddies
          </p>
          <h1 className="font-display text-7xl leading-[0.85] text-chrome-100 sm:text-8xl lg:text-[9rem]">
            TINT. FILM.
            <br />
            RESTORATION.
            <br />
            <span className="text-signal-500">NO SHORTCUTS.</span>
          </h1>
          <p className="mt-10 max-w-md text-base leading-relaxed text-chrome-400">
            A family shop that treats every car like it's our own. No corporate
            playbook. No upselling. No rush. Just skilled hands and honest work.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
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

        {/* Right — full-height image */}
        <div className="relative min-h-[40vh] md:w-[45%] md:min-h-screen">
          <img
            src="https://images.pexels.com/photos/4488642/pexels-photo-4488642.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Moody garage interior with a classic car"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-transparent to-transparent md:bg-gradient-to-r md:from-carbon-950/40 md:to-transparent" />
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
