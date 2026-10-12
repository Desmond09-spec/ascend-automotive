export function ComeSee() {
  return (
    <section id="come-see" className="bg-carbon-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20">
          <p className="mb-3 text-xs uppercase tracking-widest text-signal-500">04 / Visit</p>
          <h2 className="font-display text-5xl leading-none text-chrome-100 md:text-7xl">
            COME SEE
            <br />
            THE DIFFERENCE.
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <div className="md:sticky md:top-28">
              <img
                src="https://images.pexels.com/photos/4489770/pexels-photo-4489770.jpeg?auto=compress&cs=tinysrgb&w=700&h=900&fit=crop"
                alt="Silhouette of a mechanic working on a vintage car in a dimly lit garage"
                className="aspect-[3/4] w-full object-cover grayscale"
              />
              <div className="mt-6">
                <img
                  src="https://images.pexels.com/photos/261985/pexels-photo-261985.jpeg?auto=compress&cs=tinysrgb&w=700&h=400&fit=crop"
                  alt="Black luxury car with chrome accents in studio"
                  className="aspect-[16/9] w-full object-cover grayscale"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7 md:pt-4">
            <p className="text-base leading-relaxed text-chrome-300">
              We're not just in the business of tint — we're in the business of
              trust. Come experience what it's like to work with a team that
              treats you like family.
            </p>

            <div className="mt-12 space-y-px border-t border-carbon-700">
              {[
                { label: 'VISIT', value: 'Contact us for our shop address' },
                { label: 'CALL', value: '(555) 000-0000' },
                { label: 'EMAIL', value: 'hello@ascendauto.com' },
                { label: 'HOURS', value: 'Mon–Fri · 9–6  ·  Sat · 10–4' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-1 border-b border-carbon-700 py-5 sm:flex-row sm:items-baseline sm:gap-12"
                >
                  <span className="font-display text-sm tracking-widest text-signal-500 sm:w-24 sm:flex-shrink-0">
                    {item.label}
                  </span>
                  <span className="text-base text-chrome-300">{item.value}</span>
                </div>
              ))}
            </div>

            <a
              href="mailto:hello@ascendauto.com"
              className="mt-10 inline-block border border-signal-600 bg-signal-600 px-8 py-3 text-xs uppercase tracking-widest font-medium text-chrome-100 transition-colors hover:bg-transparent"
            >
              Get a Quote →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
