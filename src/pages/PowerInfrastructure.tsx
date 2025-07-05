import React from 'react';
import { ArrowLeft, Zap, Building2, MapPin, Users, Award, CheckCircle, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const PowerInfrastructure = () => {
  const services = [
    {
      title: "Captive Power Plants (CPPs)",
      description: "Establishing two 200 MW thermal power plants as captive facilities specifically for the energy needs of associated industrial units.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Roads and Underground Tunnels",
      description: "Constructing and maintaining essential transportation infrastructure, including roads and tunnels, to support industrial and regional connectivity.",
      icon: <MapPin className="w-8 h-8" />
    },
    {
      title: "BOOT Model Operations",
      description: "Build-Own-Operate-Transfer model ensuring efficient project delivery and long-term operational success.",
      icon: <Settings className="w-8 h-8" />
    }
  ];

  const bootModel = [
    "Build: Engineering, procurement, and construction (EPC) of the power plants and infrastructure",
    "Own: Retaining ownership during the operational period",
    "Operate: Overseeing daily operations and maintenance to ensure efficiency and reliability",
    "Transfer: Transferring ownership of assets to client entities or authorities after the concession period (typically 15-30 years)"
  ];

  const specifications = [
    "Thermal plants designed to use fossil fuels such as coal or natural gas",
    "State-of-the-art technology for efficiency and environmental compliance",
    "Flue gas treatment systems for environmental compliance",
    "Safety protocols and monitoring systems",
    "Revenue streams via power purchase agreements (PPAs)",
    "Cost recovery and operational responsibilities"
  ];

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
              JAYASHANKAR POWER AND INFRASTRUCTURE PRIVATE LIMITED
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              An entity incorporated under the Indian Companies Act, 2013, with the primary objective of developing, 
              operating, and maintaining large-scale thermal and solar power facilities, roads, underground tunnels, 
              and other infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Company Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Power and Infrastructure Company acts as a strategic facilitator for industrial expansion 
                by providing dedicated, reliable power generation and infrastructure development. It leverages 
                legal and technical frameworks to ensure successful project implementation and long-term operational success.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The company is positioned as a key player in regional infrastructure development and energy security, 
                contributing significantly to the industrial ecosystem.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 text-navy-900">
                <h3 className="text-2xl font-bold mb-4">Strategic Importance</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Zap className="w-6 h-6 text-blue-600 mr-3" />
                    <span>400 MW Total Capacity</span>
                  </div>
                  <div className="flex items-center">
                    <Building2 className="w-6 h-6 text-blue-600 mr-3" />
                    <span>Industrial Infrastructure</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                    <span>Transportation Networks</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-6 h-6 text-blue-600 mr-3" />
                    <span>Regional Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive power and infrastructure solutions to support industrial growth 
              and regional development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-blue-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOT Model */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">BOOT Model Operations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our facilities operate under a Build-Own-Operate-Transfer (BOOT) model to ensure 
              efficient project delivery and long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bootModel.map((step, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-6 text-white">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold mb-3">{step.split(':')[0]}</h3>
                  <p className="text-sm text-blue-100">{step.split(':')[1]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We employ cutting-edge technology and best practices to ensure efficiency, 
              environmental compliance, and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Power Generation</h3>
              <div className="space-y-4">
                {specifications.slice(0, 3).map((spec, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                    <span className="text-gray-700">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Operations & Management</h3>
              <div className="space-y-4">
                {specifications.slice(3).map((spec, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                    <span className="text-gray-700">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Framework */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Financial and Legal Framework</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We operate within the framework of Indian corporate law, ensuring statutory compliance 
              and transparent financial management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-navy-900 to-navy-700 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Legal Compliance</h3>
              <ul className="space-y-3">
                <li>• Companies Act, 2013 compliance</li>
                <li>• Statutory compliance requirements</li>
                <li>• Regulatory framework adherence</li>
                <li>• Environmental compliance standards</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Financial Structure</h3>
              <ul className="space-y-3">
                <li>• Power Purchase Agreements (PPAs)</li>
                <li>• Cost recovery mechanisms</li>
                <li>• Operational revenue streams</li>
                <li>• Investment and financing models</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PowerInfrastructure; 