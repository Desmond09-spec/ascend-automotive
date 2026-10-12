export function About() {
  return (
    <section id="about" className="bg-carbon-900 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Image */}
          <div className="md:col-span-4">
            <img
              src="https://images.pexels.com/photos/8478201/pexels-photo-8478201.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
              alt="Close-up of hands working on a car with precision"
              className="aspect-[3/4] w-full object-cover grayscale"
            />
          </div>

          {/* Pull quote + story */}
          <div className="flex flex-col justify-center md:col-span-7 md:col-start-6">
            <p className="mb-6 text-xs uppercase tracking-widest text-signal-500">About</p>
            <blockquote className="font-display text-4xl leading-[1.1] text-chrome-100 sm:text-5xl lg:text-6xl">
              "We're more than just a shop
              <span className="text-signal-500"> — </span>
              we're a family."
            </blockquote>

            <div className="mt-10 space-y-5 text-base leading-relaxed text-chrome-400">
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
            </div>

            <div className="mt-10 flex items-center gap-8">
              <div>
                <p className="font-display text-3xl tracking-wider text-chrome-100">2024</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-chrome-500">Founded</p>
              </div>
              <div className="h-12 w-px bg-carbon-600" />
              <div>
                <p className="font-display text-3xl tracking-wider text-chrome-100">2026</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-chrome-500">Reborn</p>
              </div>
              <div className="h-12 w-px bg-carbon-600" />
              <div>
                <p className="font-display text-3xl tracking-wider text-signal-500">∞</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-chrome-500">Same team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
