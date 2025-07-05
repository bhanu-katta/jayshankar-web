import React from 'react';
import { Building2, Factory, Zap, MapPin, Users, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BusinessSectors = () => {
  const companies = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "JAYASHANKAR MULTI PRODUCT INDUSTRIAL PARK & SEZ PRIVATE LIMITED",
      description: "Developing world-class industrial parks and SEZs across India, with focus on pharmaceutical infrastructure and modern manufacturing facilities.",
      location: "Odisha & Chhattisgarh",
      capacity: "2000+ Acres",
      focus: "Pharma City & IT Industrial Park",
      link: "/industrial-park"
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "JAYASHANKAR PULP AND PAPER MILLS PRIVATE LIMITED",
      description: "Pioneering sustainable packaging solutions with state-of-the-art paper mill facilities, championing circular economy principles.",
      location: "West Godavari District, Andhra Pradesh",
      capacity: "700,000 Tons/Year",
      focus: "Sustainable Packaging",
      link: "/pulp-paper"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "JAYASHANKAR POWER AND INFRASTRUCTURE PRIVATE LIMITED",
      description: "Developing and operating large-scale thermal and solar power facilities, roads, and infrastructure projects under BOOT model.",
      location: "Multiple Locations",
      capacity: "400 MW",
      focus: "Power & Infrastructure",
      link: "/power-infrastructure"
    }
  ];

  return (
    <section id="companies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Our Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jaya Shankar Group operates through three strategic companies, each focused on 
            driving innovation and sustainable growth in their respective sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-gold-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {company.icon}
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-4 leading-tight">
                {company.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                {company.description}
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 text-gold-600" />
                  <span>{company.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Target className="w-4 h-4 mr-2 text-gold-600" />
                  <span>{company.capacity}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2 text-gold-600" />
                  <span>{company.focus}</span>
                </div>
              </div>
              <Link 
                to={company.link}
                className="inline-flex items-center text-gold-600 hover:text-gold-700 font-semibold transition-colors duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSectors;
