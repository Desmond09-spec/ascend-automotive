export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-carbon-900 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            <p className="mb-3 text-xs uppercase tracking-widest text-signal-500">03 / Why Us</p>
            <h2 className="font-display text-5xl leading-none text-chrome-100 md:text-7xl">
              THE DIFFERENCE
              <br />
              IS IN THE
              <br />
              <span className="text-signal-500">DETAILS.</span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-chrome-400">
              Whether you're protecting a brand-new car or breathing life back
              into your daily driver, we're here to make sure it looks and
              performs its best.
            </p>

            <div className="mt-10 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/27968215/pexels-photo-27968215.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
                alt="Dark moody capture of a sleek black sports car"
                className="aspect-[16/10] w-full object-cover grayscale"
              />
            </div>
          </div>

          <div className="md:col-span-5 md:col-start-8 md:pt-8">
            <div className="space-y-px">
              {[
                {
                  title: 'FAMILY-OWNED',
                  text: 'A family business built on honest service and genuine care — not corporate quotas.',
                },
                {
                  title: 'QUALITY WORKMANSHIP',
                  text: 'Every install is done with precision and patience. No shortcuts, no rush jobs.',
                },
                {
                  title: 'ATTENTION TO DETAIL',
                  text: "We treat every vehicle like it was our own, because to us, that's the standard.",
                },
                {
                  title: 'BUILT ON TRUST',
                  text: 'Our customers come back because we do it right the first time — every time.',
                },
              ].map((reason) => (
                <div
                  key={reason.title}
                  className="border-t border-carbon-700 py-8 last:border-b last:border-carbon-700"
                >
                  <h3 className="font-display text-xl tracking-wider text-chrome-100">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-chrome-400">
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
