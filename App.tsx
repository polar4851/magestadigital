import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import PlexusBackground from './components/PlexusBackground';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-950 relative selection:bg-brand-cyan selection:text-slate-950">
      <PlexusBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Features />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;