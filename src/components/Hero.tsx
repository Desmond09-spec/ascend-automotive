export function Hero() {
  return (
    <section id="top" className="relative min-h-screen bg-carbon-950 overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/4488642/pexels-photo-4488642.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Moody garage interior with a classic car"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/60 to-carbon-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon-950/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24 pb-32">
        <p className="mb-6 text-xs uppercase tracking-widest text-signal-500">
          Est. 2024 — formerly Tint Buddies
        </p>
        <h1 className="font-display text-[4.5rem] leading-[0.88] text-chrome-100 sm:text-8xl lg:text-[10rem]">
          TINT. FILM.
          <br />
          RESTORATION.
          <br />
          <span className="text-signal-500">NO SHORTCUTS.</span>
        </h1>

        <p className="mt-10 max-w-xl text-base leading-relaxed text-chrome-300">
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

      {/* Bottom strip */}
      <div className="relative border-t border-carbon-700">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-px md:grid-cols-3">
            {[
              { stat: 'EST. 2024', text: 'Founded as Tint Buddies. Reborn as Ascend Automotive.' },
              { stat: 'FAMILY-RUN', text: 'Not a franchise. Not a chain. A family that happens to be good with cars.' },
              { stat: '3 TRADES', text: 'Window tint. Paint protection film. Headlight restoration.' },
            ].map((item) => (
              <div key={item.stat} className="border-r border-carbon-700 px-6 py-8 last:border-r-0">
                <p className="font-display text-2xl tracking-wider text-chrome-100">{item.stat}</p>
                <p className="mt-2 text-sm leading-relaxed text-chrome-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
