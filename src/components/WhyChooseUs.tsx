const stats = [
  { value: '2024', label: 'Founded as Tint Buddies' },
  { value: '100%', label: 'Family-owned & operated' },
  { value: '3', label: 'Trades we specialize in' },
  { value: '0', label: 'Shortcuts. Ever.' },
];

const reasons = [
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
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-carbon-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-px border border-carbon-700 bg-carbon-700 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-carbon-950 p-8 md:p-10">
              <p className="font-display text-5xl tracking-wider text-chrome-100 md:text-6xl">
                {stat.value}
              </p>
              <p className="mt-3 text-xs uppercase tracking-widest text-chrome-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Full-width image */}
        <div className="mt-12 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/27968215/pexels-photo-27968215.jpeg?auto=compress&cs=tinysrgb&w=1600&h=600&fit=crop"
            alt="Dark moody capture of a sleek black sports car"
            className="aspect-[21/9] w-full object-cover grayscale"
          />
        </div>

        {/* Reason list — 2x2 grid */}
        <div className="mt-12 grid gap-px border border-carbon-700 bg-carbon-700 md:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.title} className="bg-carbon-950 p-8 md:p-10">
              <h3 className="font-display text-2xl tracking-wider text-chrome-100">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-chrome-400">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
