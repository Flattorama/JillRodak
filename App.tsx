import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProofBar } from './components/ProofBar';
import { WhoItsFor } from './components/WhoItsFor';
import { Packages } from './components/Packages';
import { Method } from './components/Method';
import { Testimonials } from './components/Testimonials';
import { LeadMagnet } from './components/LeadMagnet';
import { About } from './components/About';
import { BookCall } from './components/BookCall';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ProofBar />
        <WhoItsFor />
        <Packages />
        <Method />
        <Testimonials />
        <LeadMagnet />
        <About />
        <BookCall />
        <FAQ />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

export default App;