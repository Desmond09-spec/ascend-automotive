const services = [
  {
    number: 'i',
    title: 'Window Tinting',
    description:
      'Block heat, add privacy, and give your ride that sleek, clean look.',
    image:
      'https://images.pexels.com/photos/31154212/pexels-photo-31154212.jpeg?auto=compress&cs=tinysrgb&w=800&h=1100&fit=crop',
    alt: 'Technician applying window tint film',
    span: 'md:col-span-7',
    imgClass: 'aspect-[3/4]',
  },
  {
    number: 'ii',
    title: 'Paint Protection Film',
    description:
      'Defend your paint from rock chips, scratches, and everyday wear with invisible armor.',
    image:
      'https://images.pexels.com/photos/20051468/pexels-photo-20051468.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
    alt: 'Applying protective film to a car hood',
    span: 'md:col-span-5',
    imgClass: 'aspect-[4/5]',
  },
  {
    number: 'iii',
    title: 'Headlight Restoration',
    description:
      "Don't replace them — restore them. Clear up cloudy headlights and improve nighttime visibility.",
    image:
      'https://images.pexels.com/photos/9380973/pexels-photo-9380973.jpeg?auto=compress&cs=tinysrgb&w=800&h=900&fit=crop',
    alt: 'Close-up of a car headlight detail',
    span: 'md:col-span-4',
    imgClass: 'aspect-[4/5]',
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-cream-50 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 max-w-3xl">
          <p className="mb-3 font-serif text-sm italic text-ink-500">02 — What We Do</p>
          <h2 className="font-serif text-4xl font-light leading-tight text-ink-950 md:text-5xl">
            Three things, done well enough that we don't need a fourth.
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-12">
          {services.map((service) => (
            <div key={service.title} className={service.span}>
              <img
                src={service.image}
                alt={service.alt}
                className={`${service.imgClass} w-full object-cover`}
              />
              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-serif text-sm italic text-ember-600">{service.number}</span>
                <h3 className="font-serif text-2xl font-light text-ink-950">
                  {service.title}
                </h3>
              </div>
              <p className="mt-3 max-w-md text-base leading-relaxed text-ink-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
