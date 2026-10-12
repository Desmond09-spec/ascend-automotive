export function About() {
  return (
    <section id="about" className="bg-cream-100 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <p className="mb-3 font-serif text-sm italic text-ink-500">01 — About Us</p>
            <h2 className="font-serif text-4xl font-light leading-tight text-ink-950 md:text-5xl">
              Welcome to Ascend Auto
            </h2>
            <div className="mt-8">
              <img
                src="https://images.pexels.com/photos/14908957/pexels-photo-14908957.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="A man polishing a car with precision in an automotive workshop"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7 md:pt-16">
            <p className="text-xl leading-relaxed text-ink-700">
              Welcome to Ascend Auto – your local experts in window tinting,
              paint protection film, and headlight restoration. We're more
              than just a shop — we're a family.
            </p>

            <div className="mt-12">
              <h3 className="font-serif text-2xl font-light text-ink-950">
                Family-Owned &amp; Driven By Passion
              </h3>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-600">
                <p>
                  Founded in 2024 as Tint Buddies, our family-owned business was
                  built around honest service, quality workmanship, and treating
                  every vehicle like it was our own.
                </p>
                <p>
                  In 2026, we're transitioning from Tint Buddies to Ascend
                  Automotive as our services continue to grow beyond window
                  tinting. While the name is changing, everything else remains
                  the same — the same team, the same quality, the same attention
                  to detail, and the same commitment to our customers.
                </p>
                <p>
                  This is simply the next chapter of the business we've already
                  built, now under a name that better represents everything we
                  do.
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/20522462/pexels-photo-20522462.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop"
                alt="Applying window tint with precision"
                className="aspect-[3/2] w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/10126666/pexels-photo-10126666.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop"
                alt="Applying vinyl wrap using a heat gun"
                className="mt-12 aspect-[3/2] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
