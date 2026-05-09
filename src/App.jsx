// App.js
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Technologies from './components/Technologies';
import Industries from './components/Industries';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <Technologies />
          {/* <Industries /> */}
          <WhyChooseUs />
          <Testimonials />
          {/* <CTA /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;