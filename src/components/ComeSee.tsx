export function ComeSee() {
  return (
    <section id="come-see" className="relative bg-carbon-900 py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/4489770/pexels-photo-4489770.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Silhouette of a mechanic working on a vintage car in a dimly lit garage"
          className="h-full w-full object-cover opacity-15"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6">
        <p className="mb-6 text-xs uppercase tracking-widest text-signal-500">Visit</p>
        <h2 className="font-display text-6xl leading-none text-chrome-100 sm:text-7xl lg:text-9xl">
          READY TO
          <br />
          <span className="text-signal-500">ASCEND?</span>
        </h2>

        <p className="mt-8 max-w-lg text-base leading-relaxed text-chrome-400">
          We're not just in the business of tint — we're in the business of
          trust. Come experience what it's like to work with a team that treats
          you like family.
        </p>

        {/* Contact grid */}
        <div className="mt-16 grid grid-cols-2 gap-px border border-carbon-700 bg-carbon-700 md:grid-cols-4">
          {[
            { label: 'VISIT', value: 'Contact us for our shop address' },
            { label: 'CALL', value: '(555) 000-0000' },
            { label: 'EMAIL', value: 'hello@ascendauto.com' },
            { label: 'HOURS', value: 'Mon–Fri 9–6 Sat 10–4' },
          ].map((item) => (
            <div key={item.label} className="bg-carbon-900 p-6 md:p-8">
              <p className="font-display text-sm tracking-widest text-signal-500">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-chrome-300">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <a
          href="mailto:hello@ascendauto.com"
          className="mt-12 inline-block border border-signal-600 bg-signal-600 px-10 py-4 text-xs uppercase tracking-widest font-medium text-chrome-100 transition-colors hover:bg-transparent"
        >
          Get a Quote →
        </a>
      </div>
    </section>
  );
}
