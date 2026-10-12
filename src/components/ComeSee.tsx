import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';

export function ComeSee() {
  return (
    <section id="come-see" className="contact-section">
      <div className="contact-backdrop" />
      <div className="contact-content"><p className="kicker">Ready when you are</p><h2>Bring us<br /><span>your best.</span></h2><p>Tell us what you drive and what you want to change. We will take it from there.</p><a className="button button-chrome" href="mailto:hello@ascendauto.com">Start a conversation <ArrowUpRight size={17} /></a></div>
      <div className="contact-details"><div><MapPin size={18} /><span>Oklahoma<br />By appointment</span></div><div><Phone size={18} /><span>(555) 000-0000<br />Mon–Fri 9–6</span></div><div><Mail size={18} /><span>hello@ascendauto.com<br />We reply within 1 business day</span></div></div>
    </section>
  );
}
