export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative bg-ink-950 py-24 text-cream-50 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-6">
            <p className="mb-3 font-serif text-sm italic text-ember-400">03 — Why Choose Us?</p>
            <h2 className="font-serif text-4xl font-light leading-tight text-cream-50 md:text-5xl">
              The difference is in the details.
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-cream-200">
              Whether you're protecting a brand-new car or breathing life back
              into your daily driver, we're here to make sure it looks and
              performs its best.
            </p>

            <div className="mt-12 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/10126665/pexels-photo-10126665.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
                alt="Applying vinyl wrap to a car hood"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-5 md:col-start-8 md:pt-20">
            <div className="space-y-px">
              {[
                {
                  title: 'Family-owned',
                  text: 'A family business built on honest service and genuine care — not corporate quotas.',
                },
                {
                  title: 'Quality workmanship',
                  text: 'Every install is done with precision and patience. No shortcuts, no rush jobs.',
                },
                {
                  title: 'Attention to detail',
                  text: "We treat every vehicle like it was our own, because to us, that's the standard.",
                },
                {
                  title: 'Built on trust',
                  text: 'Our customers come back because we do it right the first time — every time.',
                },
              ].map((reason, i) => (
                <div
                  key={reason.title}
                  className="border-t border-ink-700 py-8 last:border-b"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-sm text-ink-500">{`0${i + 1}`}</span>
                    <div>
                      <h3 className="font-serif text-xl font-light text-cream-50">
                        {reason.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-cream-200">
                        {reason.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
