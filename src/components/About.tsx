export function About() {
  return (
    <section id="about" className="bg-carbon-900 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-signal-500">01 / About</p>
            <h2 className="font-display text-5xl leading-none text-chrome-100 md:text-7xl">
              WHO WE ARE
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-chrome-400">
            Welcome to Ascend Automotive — your local experts in window tinting,
            paint protection film, and headlight restoration. We're more than
            just a shop. We're a family.
          </p>
        </div>

        {/* Image + content grid */}
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <img
              src="https://images.pexels.com/photos/8478201/pexels-photo-8478201.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
              alt="Close-up of hands working on a car with precision"
              className="aspect-[4/5] w-full object-cover grayscale"
            />
          </div>

          <div className="md:col-span-6 md:col-start-7 md:pt-8">
            <div className="space-y-6 text-base leading-relaxed text-chrome-300">
              <div className="border-l-2 border-signal-600 pl-6">
                <p>
                  Founded in 2024 as Tint Buddies, our family-owned business was
                  built around honest service, quality workmanship, and treating
                  every vehicle like it was our own.
                </p>
              </div>
              <p>
                In 2026, we're transitioning from Tint Buddies to Ascend
                Automotive as our services continue to grow beyond window
                tinting. While the name is changing, everything else remains the
                same — the same team, the same quality, the same attention to
                detail, and the same commitment to our customers.
              </p>
              <p>
                This is simply the next chapter of the business we've already
                built, now under a name that better represents everything we do.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/31154212/pexels-photo-31154212.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop"
                alt="Applying window tint with precision"
                className="aspect-[3/2] w-full object-cover grayscale"
              />
              <img
                src="https://images.pexels.com/photos/14999240/pexels-photo-14999240.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop"
                alt="Applying vinyl wrap using a heat gun"
                className="mt-8 aspect-[3/2] w-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
