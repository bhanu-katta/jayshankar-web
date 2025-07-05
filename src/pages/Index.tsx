import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BusinessSectors from '../components/BusinessSectors';
import About from '../components/About';
import Leadership from '../components/Leadership';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BusinessSectors />
      <About />
      <Leadership />
      <Footer />
    </div>
  );
};

export default Index;
