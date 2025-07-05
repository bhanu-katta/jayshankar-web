import React from 'react';
import { ArrowRight, Play, Building2, Users, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=600&fit=crop" 
          alt="Jaya Shankar Group - Industrial Excellence"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Building Tomorrow's
                <span className="text-gold-400 block">Infrastructure</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Founded by visionary First Generation Entrepreneur Shri T. Srinivasa Rao, 
                Jaya Shankar Group is committed to advancing innovative projects that drive 
                economic development, social progress, and environmental sustainability.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 hover:scale-105">
                Explore Our Companies
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300">
                <Play className="mr-2" size={20} />
                Our Story
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-gold-400 to-gold-600 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-xl p-6 text-navy-900">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">25+</div>
                    <div className="text-sm text-gray-600">Years of Excellence</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">3</div>
                      <div className="text-xs text-gray-600">Companies</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">200+</div>
                      <div className="text-xs text-gray-600">Man-Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
