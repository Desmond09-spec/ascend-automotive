import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'WINDOW TINTING',
    description:
      'Block heat, add privacy, and give your ride that sleek, clean look. Precision-cut film, applied by hand.',
    image:
      'https://images.pexels.com/photos/31154212/pexels-photo-31154212.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    alt: 'Technician applying window tint film',
  },
  {
    number: '02',
    title: 'PAINT PROTECTION FILM',
    description:
      'Defend your paint from rock chips, scratches, and everyday wear with invisible armor.',
    image:
      'https://images.pexels.com/photos/20051468/pexels-photo-20051468.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    alt: 'Applying protective film to a car hood',
  },
  {
    number: '03',
    title: 'HEADLIGHT RESTORATION',
    description:
      "Don't replace them — restore them. Clear up cloudy headlights and improve nighttime visibility.",
    image:
      'https://images.pexels.com/photos/12127014/pexels-photo-12127014.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    alt: 'Close-up of a car headlight detail',
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-carbon-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-signal-500">Services</p>
            <h2 className="font-display text-5xl leading-none text-chrome-100 md:text-7xl">
              THREE THINGS.
              <br />
              DONE RIGHT.
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-chrome-500 md:block">
            We don't need a fourth. These three trades are what we live and breathe.
          </p>
        </div>

        {/* Tracklist */}
        <div className="border-t border-carbon-700">
          {services.map((service) => (
            <div
              key={service.title}
              className="group border-b border-carbon-700 transition-colors hover:bg-carbon-900"
            >
              <div className="grid grid-cols-12 items-center gap-4 py-10 md:gap-8 md:py-14">
                <span className="col-span-2 font-display text-3xl tracking-wider text-signal-500 md:col-span-1 md:text-4xl">
                  {service.number}
                </span>

                <div className="col-span-10 md:col-span-6">
                  <h3 className="font-display text-3xl tracking-wider text-chrome-100 transition-colors group-hover:text-signal-500 md:text-5xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-chrome-400">
                    {service.description}
                  </p>
                </div>

                <div className="col-span-12 flex items-center justify-end gap-6 md:col-span-5">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="hidden h-20 w-32 object-cover grayscale transition-all duration-500 group-hover:grayscale-0 md:block"
                  />
                  <ArrowUpRight className="h-6 w-6 text-chrome-600 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-[-2px] group-hover:text-chrome-100" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
