
import React from 'react';
import { Building2, Zap, ShoppingCart, Plane, Car, Factory } from 'lucide-react';

const BusinessSectors = () => {
  const sectors = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Power & Energy",
      description: "Leading renewable energy solutions and power generation across the nation.",
      stats: "5000+ MW Capacity"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Retail & FMCG",
      description: "Consumer goods and retail chains serving millions of customers daily.",
      stats: "500+ Stores"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Real Estate",
      description: "Premium residential and commercial developments in prime locations.",
      stats: "50+ Projects"
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Aviation",
      description: "Comprehensive aviation services including airlines and maintenance.",
      stats: "25+ Aircraft"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Automotive",
      description: "Manufacturing and distribution of automobiles and components.",
      stats: "200+ Dealerships"
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Manufacturing",
      description: "Diverse manufacturing operations from textiles to heavy machinery.",
      stats: "15+ Facilities"
    }
  ];

  return (
    <section id="businesses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Our Business Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A diversified conglomerate with strategic presence across key industries, 
            driving growth and innovation in every sector we operate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-gold-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {sector.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                {sector.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {sector.description}
              </p>
              <div className="text-sm font-semibold text-gold-600 border-t border-gray-200 pt-4">
                {sector.stats}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSectors;
