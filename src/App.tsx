import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services';
import Features from './components/Features';
import CompetitorAdvantage from './components/CompetitorAdvantage';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <CompetitorAdvantage />
      <Portfolio />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;