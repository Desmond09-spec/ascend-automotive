export function ComeSee() {
  return (
    <section id="come-see" className="bg-cream-100 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <div className="md:sticky md:top-28">
              <img
                src="https://images.pexels.com/photos/36021355/pexels-photo-36021355.jpeg?auto=compress&cs=tinysrgb&w=700&h=900&fit=crop"
                alt="Technician installing paint protection film on a car door"
                className="aspect-[3/4] w-full object-cover"
              />
              <div className="mt-6">
                <img
                  src="https://images.pexels.com/photos/20036216/pexels-photo-20036216.jpeg?auto=compress&cs=tinysrgb&w=700&h=400&fit=crop"
                  alt="Black car with tinted windows"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <p className="mb-3 font-serif text-sm italic text-ink-500">04 — Come See the Difference</p>
            <h2 className="font-serif text-4xl font-light leading-tight text-ink-950 md:text-5xl">
              We're not just in the business of tint.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-ink-700">
              We're not just in the business of tint — we're in the business
              of trust. Come experience what it's like to work with a team
              that treats you like family.
            </p>

            <div className="mt-12 space-y-px border-t border-cream-200">
              {[
                { label: 'Visit', value: 'Contact us for our shop address' },
                { label: 'Call', value: '(555) 000-0000' },
                { label: 'Email', value: 'hello@ascendauto.com' },
                { label: 'Hours', value: 'Mon–Fri · 9–6  ·  Sat · 10–4' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-1 border-b border-cream-200 py-5 sm:flex-row sm:items-baseline sm:gap-8"
                >
                  <span className="font-serif text-sm italic text-ember-600 sm:w-20 sm:flex-shrink-0">
                    {item.label}
                  </span>
                  <span className="text-base text-ink-700">{item.value}</span>
                </div>
              ))}
            </div>

            <a
              href="mailto:hello@ascendauto.com"
              className="mt-10 inline-block text-sm font-medium text-ink-900 border-b border-ink-900 pb-0.5 transition-colors hover:border-ember-500 hover:text-ember-600"
            >
              Get a quote →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
