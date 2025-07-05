import React from 'react';
import { Building2, Factory, Zap, Ship, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const companies = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "JAYASHANKAR MULTI PRODUCT INDUSTRIAL PARK & SEZ PVT LTD",
    short: "Ultra-modern pharma infrastructure and SEZs in Chhattisgarh & Odisha.",
    link: "/industrial-park",
    image: "https://images.unsplash.com/photo-1474674556023-efef886fa147?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: "JAYASHANKAR PULP & PAPER MILLS PVT LIMITED",
    short: "Sustainable paper and pulp manufacturing with global standards.",
    link: "/pulp-paper",
    image: "https://images.unsplash.com/photo-1595798896730-9fdf2e709649?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "JAYASHANKAR POWER AND INFRASTRUCTURE PRIVATE LIMITED",
    short: "Power, infrastructure, and BOOT model projects across India.",
    link: "/power-infrastructure",
    image: "https://plus.unsplash.com/premium_photo-1695559212636-422fcdb4bf3c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    icon: <Ship className="w-8 h-8" />,
    title: "ODALAREVU RLNG IMPORTS PVT LTD",
    short: "RLNG, Fertilizer, and Captive Port projects in Andhra Pradesh.",
    link: "/odalarevu-rlng",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const BusinessSectors = () => {
  return (
    <section id="companies" className="py-20 bg-gray-50 animate-fade-in" style={{ animationDelay: '0.05s', animationDuration: '1.2s', animationFillMode: 'both' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Our Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jaya Shankar Group operates through four strategic companies, each focused on driving innovation and sustainable growth in their respective sectors.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={company.image}
                  alt={company.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 text-gold-600 group-hover:scale-110 transition-transform duration-300 bg-white/80 rounded-full p-2 shadow-md">
                  {company.icon}
                </div>
              </div>
              <div className="flex-1 flex flex-col p-8">
                <h3 className="text-lg font-bold text-navy-900 mb-2 leading-tight">
                  {company.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm min-h-[48px]">
                  {company.short}
                </p>
                <div className="mt-auto">
                  <Link
                    to={company.link}
                    className="inline-flex items-center text-gold-600 hover:text-gold-700 font-semibold transition-colors duration-300 group"
                  >
                    View More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSectors;
