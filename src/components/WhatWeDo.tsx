const services = [
  {
    number: '01',
    title: 'WINDOW TINTING',
    description:
      'Block heat, add privacy, and give your ride that sleek, clean look. Precision-cut film, applied by hand.',
    image:
      'https://images.pexels.com/photos/31154212/pexels-photo-31154212.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
    alt: 'Technician applying window tint film',
    span: 'md:col-span-7',
    imgClass: 'aspect-[3/4]',
  },
  {
    number: '02',
    title: 'PAINT PROTECTION FILM',
    description:
      'Defend your paint from rock chips, scratches, and everyday wear with invisible armor.',
    image:
      'https://images.pexels.com/photos/20051468/pexels-photo-20051468.jpeg?auto=compress&cs=tinysrgb&w=800&h=900&fit=crop',
    alt: 'Applying protective film to a car hood',
    span: 'md:col-span-5',
    imgClass: 'aspect-[4/5]',
  },
  {
    number: '03',
    title: 'HEADLIGHT RESTORATION',
    description:
      "Don't replace them — restore them. Clear up cloudy headlights and improve nighttime visibility.",
    image:
      'https://images.pexels.com/photos/12127014/pexels-photo-12127014.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    alt: 'Close-up of a car headlight detail',
    span: 'md:col-span-12',
    imgClass: 'aspect-[21/9]',
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-carbon-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20">
          <p className="mb-3 text-xs uppercase tracking-widest text-signal-500">02 / Services</p>
          <h2 className="font-display text-5xl leading-none text-chrome-100 md:text-7xl">
            THREE THINGS.
            <br />
            DONE RIGHT.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-12">
          {services.map((service) => (
            <div key={service.title} className={`group ${service.span}`}>
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className={`${service.imgClass} w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="font-display text-3xl tracking-wider text-signal-500">
                    {service.number}
                  </span>
                </div>
              </div>
              <div className="mt-6 border-t border-carbon-700 pt-6">
                <h3 className="font-display text-2xl tracking-wider text-chrome-100">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-chrome-400">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
