import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Features from './components/Features';
import Process from './components/Process';
import Pricing from './components/Pricing';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CTA from './components/CTA';

function App() {
  return (
    <div className="app">
      <div className="grid-bg" />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Process />
        <Pricing />
        <About />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
