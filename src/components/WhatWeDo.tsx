import { ArrowUpRight } from 'lucide-react';

const services = [
  { number: '01', title: 'Window tint', tag: 'CONTROL / COMFORT', text: 'A cleaner silhouette, cooler cabin, and privacy that feels considered—not added on.', image: 'https://images.pexels.com/photos/32725712/pexels-photo-32725712.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { number: '02', title: 'Paint protection film', tag: 'DEFENSE / FINISH', text: 'Invisible coverage for the places that take the most abuse. Protection without changing the character of the paint.', image: 'https://images.pexels.com/photos/27968212/pexels-photo-27968212.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { number: '03', title: 'Headlight restoration', tag: 'CLARITY / SAFETY', text: 'Bring back the light, depth, and presence your front end had on day one.', image: 'https://images.pexels.com/photos/4157182/pexels-photo-4157182.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="section section-dark">
      <div className="section-heading">
        <div><p className="kicker">What we do</p><h2>Form follows<br /><span>function.</span></h2></div>
        <p className="section-note">Three disciplines.<br />One uncompromising standard.</p>
      </div>
      <div className="service-list">
        {services.map((service) => (
          <article className="service-row" key={service.number}>
            <span className="service-number">{service.number}</span>
            <div className="service-info"><p className="service-tag">{service.tag}</p><h3>{service.title}</h3><p>{service.text}</p></div>
            <img src={service.image} alt="Automotive finish detail" />
            <ArrowUpRight className="service-arrow" size={27} />
          </article>
        ))}
      </div>
    </section>
  );
}
