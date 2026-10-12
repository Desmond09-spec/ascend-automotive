export function Hero() {
  return (
    <section id="top" className="relative min-h-screen bg-cream-50">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-16 md:pt-40">
        <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            <h1 className="font-serif text-[2.75rem] font-light leading-[1.05] text-ink-950 sm:text-6xl lg:text-[5rem]">
              Tint, film, and
              <br />
              restoration,
              <br />
              <em className="font-normal not-italic text-ember-600">done by hand.</em>
            </h1>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="text-lg leading-relaxed text-ink-600">
              A family shop in the business of keeping cars looking like they
              just left the lot. No corporate playbook, no upselling, no rush.
              Just skilled hands and honest work.
            </p>
            <div className="mt-8 flex gap-6">
              <a
                href="#come-see"
                className="text-sm font-medium text-ink-900 border-b border-ink-900 pb-0.5 transition-colors hover:border-ember-500 hover:text-ember-600"
              >
                Book a service
              </a>
              <a
                href="#what-we-do"
                className="text-sm font-medium text-ink-500 border-b border-ink-400 pb-0.5 transition-colors hover:border-ink-900 hover:text-ink-900"
              >
                See what we do
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-12">
        <img
          src="https://images.pexels.com/photos/20051463/pexels-photo-20051463.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Two technicians applying protective film to a car in a garage"
          className="aspect-[16/9] w-full object-cover md:aspect-[21/9]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 border-t border-cream-200 pt-8 md:grid-cols-3">
          <p className="text-sm text-ink-500">
            <span className="font-serif text-2xl font-light text-ink-900 block">Est. 2024</span>
            Founded as Tint Buddies. Reborn as Ascend Automotive in 2026.
          </p>
          <p className="text-sm text-ink-500">
            <span className="font-serif text-2xl font-light text-ink-900 block">Family-run</span>
            Not a franchise. Not a chain. A family that happens to be very good with cars.
          </p>
          <p className="text-sm text-ink-500">
            <span className="font-serif text-2xl font-light text-ink-900 block">Three trades</span>
            Window tint. Paint protection film. Headlight restoration.
          </p>
        </div>
      </div>
    </section>
  );
}
