import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "https://plus.unsplash.com/premium_photo-1661933050836-3f9e3d7eda61?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline: "Building Tomorrow's Infrastructure",
    subheadline: "Founded by visionary First Generation Entrepreneur Shri T. Srinivasa Rao, Jaya Shankar Group is committed to advancing innovative projects that drive economic development, social progress, and environmental sustainability."
  },
  {
    image: "https://images.unsplash.com/photo-1557064262-6acc904bffbd?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline: "Powering Sustainable Growth",
    subheadline: "Delivering reliable power and infrastructure solutions for a brighter, greener future."
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1661836187612-c13f34f228f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline: "Innovating in Manufacturing",
    subheadline: "Pioneering sustainable packaging and advanced manufacturing for the next generation."
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img
            src={slide.image}
            alt={slide.headline}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        </div>
      ))}

      {/* Overlay Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg">
          {slides[current].headline.split('Infrastructure')[0]}
          <span className="text-gold-400 block">Infrastructure</span>
        </h1>
        <p className="text-xl text-gray-200 leading-relaxed mt-6 mb-10 drop-shadow">
          {slides[current].subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg">
            Explore Our Companies
            <ArrowRight className="ml-2" size={20} />
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 shadow-lg">
            <Play className="mr-2" size={20} />
            Our Story
          </button>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === current ? 'bg-gold-400 scale-125' : 'bg-white/60 hover:bg-gold-400'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
