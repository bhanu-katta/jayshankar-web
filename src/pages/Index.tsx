import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BusinessSectors from '../components/BusinessSectors';
import About from '../components/About';
import ImageCarousel from '../components/ImageCarousel';
import Leadership from '../components/Leadership';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <div className="h-12" />
      <BusinessSectors />
      <div className="h-12" />
      <About />
      <div className="h-12" />
      <ImageCarousel />
      <div className="h-12" />
      <Leadership />
      <Footer />
    </div>
  );
};

export default Index;
