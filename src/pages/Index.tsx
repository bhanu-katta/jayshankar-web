
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BusinessSectors from '../components/BusinessSectors';
import About from '../components/About';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BusinessSectors />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
