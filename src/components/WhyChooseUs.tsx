import { ShieldCheck, Sparkles, Gauge, HeartHandshake } from 'lucide-react';

const reasons = [
  { icon: ShieldCheck, title: 'Protection that disappears', text: 'Premium materials, installed with patience and precision.' },
  { icon: Sparkles, title: 'A finish worth noticing', text: 'The difference is in the edges, the alignment, and the final inspection.' },
  { icon: Gauge, title: 'Advice without the pitch', text: 'We recommend what your vehicle needs, not what fills a package.' },
  { icon: HeartHandshake, title: 'People over volume', text: 'Every car gets our full attention. That is the business model.' },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section standard-section">
      <div className="standard-intro"><p className="kicker">Why Ascend</p><h2>Details are<br /><span>the difference.</span></h2><p>Good work is quiet. You notice it when the light moves across the panel, when the cabin stays comfortable, when the car still looks right months later.</p></div>
      <div className="reason-grid">{reasons.map(({ icon: Icon, title, text }) => <div className="reason-card" key={title}><Icon size={24} strokeWidth={1.5} /><h3>{title}</h3><p>{text}</p></div>)}</div>
      <div className="stat-strip"><div><strong>100%</strong><span>family owned</span></div><div><strong>03</strong><span>specialties</span></div><div><strong>01</strong><span>standard</span></div><div><strong>0</strong><span>shortcuts</span></div></div>
    </section>
  );
}
