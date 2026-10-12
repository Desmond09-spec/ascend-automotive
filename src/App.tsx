import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { WhatWeDo } from '@/components/WhatWeDo';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { ComeSee } from '@/components/ComeSee';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-carbon-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <WhyChooseUs />
        <ComeSee />
      </main>
      <Footer />
    </div>
  );
}

export default App;
