import React from 'react';
import { ArrowLeft, Factory, Leaf, Zap, Users, Award, CheckCircle, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const PulpPaper = () => {
  const features = [
    "State-of-the-art facility for sustainable packaging",
    "Circular economy principles",
    "700,000 tons per year production capacity",
    "Zero Liquid Discharge system",
    "Advanced water treatment technologies",
    "Co-generation plant with circulating fluidized bed boiler",
    "Atmospheric Peroxide Refiner Mechanical Pulping (PRC-APMP)",
    "Carton board and container board production"
  ];

  const partners = [
    { name: "TATA Consulting Engineers Limited", type: "Technical Expertise" },
    { name: "RAMKY Group", type: "Technical Expertise" },
    { name: "Blu Oak Capital", type: "Financial Guidance" },
    { name: "JVS Consultants India LLP", type: "Financial Guidance" },
    { name: "Elof Hansson", type: "Market Insights" },
    { name: "Mecoplanet™ Bamboo", type: "Sustainable Solutions" },
    { name: "Terravesta", type: "Energy Efficiency" }
  ];

  const locationDetails = {
    site: "Bayyavaram, hamlet of Tadipudi, Tallapudi Mandal, near Kovvur, West Godavari District, Andhra Pradesh",
    land: "271 acres in physical possession",
    river: "5 km from River Godavari",
    port: "Kakinada Port - 115 km, Visakhapatnam port - alternate",
    power: "132 kV HT power at Saggonda substation (5 km away)",
    coal: "Singareni Coal fields nearby",
    highways: "National & State Highways at close proximity"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center text-gold-400 hover:text-gold-300 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              JAYASHANKAR PULP AND PAPER MILLS PRIVATE LIMITED
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              More than just a paper mill, we envision ourselves as a catalyst for sustainable change, 
              championing a circular economy and prioritizing the well-being of both the planet and its people.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At its core, Jayashankar Pulp & Paper Mills aims to be a pioneer in creating innovative 
                and environmentally responsible packaging solutions. Their vision isn't merely about producing 
                paper; it's about transforming the way packaging is conceived, manufactured, and ultimately, disposed of.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                They understand that the traditional linear model of "take-make-dispose" is unsustainable 
                in the long run. Therefore, they are embracing a circular approach, where materials are 
                continuously cycled back into the system, minimizing waste and maximizing resource efficiency.
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 text-navy-900">
                <h3 className="text-2xl font-bold mb-4">Guiding Principles</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Leaf className="w-6 h-6 text-green-600 mr-3" />
                    <span>For Planet & People</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-6 h-6 text-green-600 mr-3" />
                    <span>Circular Economy</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-6 h-6 text-green-600 mr-3" />
                    <span>Sustainable Solutions</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-6 h-6 text-green-600 mr-3" />
                    <span>Community Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Technological Advancements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest in state-of-the-art technology and innovative manufacturing processes 
              to minimize environmental footprint and maximize resource efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Infrastructure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Strategic Location & Infrastructure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our facility is strategically located with access to key resources and infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-navy-900 mb-3">Site Location</h3>
                <p className="text-gray-700">{locationDetails.site}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-navy-900 mb-3">Land & Infrastructure</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {locationDetails.land}</li>
                  <li>• {locationDetails.river}</li>
                  <li>• {locationDetails.power}</li>
                  <li>• {locationDetails.coal}</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-navy-900 mb-3">Connectivity</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {locationDetails.port}</li>
                  <li>• {locationDetails.highways}</li>
                  <li>• Adequate skilled manpower available</li>
                  <li>• Well-established supporting infrastructure</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-navy-900 mb-3">Economic Impact</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 1,800 direct jobs</li>
                  <li>• 5,000 indirect jobs</li>
                  <li>• Support for local farmers</li>
                  <li>• Environmental stewardship</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Strategic Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with leading organizations across various fields to ensure 
              the highest standards of excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">{partner.name}</h3>
                    <p className="text-sm text-gray-600">{partner.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PulpPaper; 