import React from 'react';
import { ArrowLeft, Building2, MapPin, Target, Users, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const IndustrialPark = () => {
  const goals = [
    "Development of Special Investment Regions (SIRs)",
    "Focus Industries and Priority Sectors", 
    "Power & Water Infrastructure",
    "Infrastructure & Facilities",
    "Industrial Clusters & Ecosystem Development",
    "Lifestyle & Community Amenities",
    "Environmental Sustainability",
    "Incentive Guidance & Industry Support",
    "Industry Participation & Interest"
  ];

  const interestedCompanies = [
    "TGV SRAAC Limited",
    "Aurobindo Pharma",
    "Dr. Reddy's Labs", 
    "Lupin Laboratories",
    "Divis Laboratories",
    "Torrent Pharmaceuticals",
    "Hetero Drugs",
    "Bharat Biotech",
    "Mylan Pharmaceuticals",
    "Shantha Biotechnics",
    "Silpa Medicare",
    "Laurus Labs",
    "Neuland Laboratories",
    "Cadila Healthcare"
  ];

  const advisors = {
    technical: ["Tata Consultancy Services", "Ramky Group"],
    financial: ["Blu Oak Capital", "JVS Consultants India LLP"]
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
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1474674556023-efef886fa147?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Industrial Park Development"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              JAYASHANKAR MULTI PRODUCT INDUSTRIAL PARK & SEZ PRIVATE LIMITED
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A Private Limited Company incorporated under the Companies Act, 1956, promoted by the Jaya Shankar Group. 
              The company's primary objective is to establish industrial parks across India, with focus on pharmaceutical 
              infrastructure and modern manufacturing facilities.
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
                Initially, the company plans to develop a Pharma City on approximately 2000 acres of land in the state of Odisha. 
                The main goal is to create a modern pharmaceutical infrastructure that allows pharmaceutical companies to commence 
                manufacturing seamlessly by leveraging benefits available under the Special Economic Zones (SEZ) scheme.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By partnering with us, organizations can leverage numerous benefits—including attractive tax incentives, 
                simplified regulatory procedures, and prioritized access to international markets. Our comprehensive approach 
                creates an integrated environment that fosters growth, collaboration, and sustainability for tenant companies.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://plus.unsplash.com/premium_photo-1664299773838-46177e77e1b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Industrial Development Overview"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Our Infrastructure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art facilities designed for modern manufacturing and sustainable development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1597057435443-8a51eeb5538f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Modern Manufacturing"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold">Modern Manufacturing</h3>
                  <p className="text-sm text-gray-200">Advanced production facilities</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Pharmaceutical Infrastructure"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold">Pharmaceutical Infrastructure</h3>
                  <p className="text-sm text-gray-200">Specialized pharma facilities</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1627052428109-576e839d100a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Sustainable Development"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold">Sustainable Development</h3>
                  <p className="text-sm text-gray-200">Environmentally conscious design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals and Objectives */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Goals and Objectives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach focuses on creating world-class industrial infrastructure 
              that supports sustainable growth and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {goals.map((goal, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold-600 mt-1" />
                  <h3 className="font-semibold text-navy-900">{goal}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interested Companies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Industry Collaborations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Several prominent organizations have expressed interest in establishing their 
              manufacturing facilities within our SEZ.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {interestedCompanies.map((company, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                <h3 className="font-semibold text-navy-900 text-sm">{company}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Advisory Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with leading advisory firms to ensure the highest standards of 
              technical excellence and financial guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Technical Advisors</h3>
              <div className="space-y-4">
                {advisors.technical.map((advisor, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-gold-600" />
                    <span className="font-semibold text-navy-900">{advisor}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Financial Advisors</h3>
              <div className="space-y-4">
                {advisors.financial.map((advisor, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-gold-600" />
                    <span className="font-semibold text-navy-900">{advisor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustrialPark; 