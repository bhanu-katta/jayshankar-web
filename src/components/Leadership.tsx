import React from 'react';
import { Award, Users, Globe, Star, Building2, Heart, Phone, Mail, MapPin } from 'lucide-react';

const Leadership = () => {
  const leaders = [
    {
      name: "Shri T. Srinivasa Rao",
      role: "Founder & Chairman",
      description: "Visionary First Generation Entrepreneur with 25 years of comprehensive corporate expertise. Certified Corporate Director from the Institute of Directors (IOD), India. Proven track record in successfully executing complex infrastructure and power projects across India.",
      achievements: [
        "25 years of corporate expertise",
        "Certified Corporate Director (IOD)",
        "Complex infrastructure projects",
        "Strategic vision & leadership"
      ]
    },
    {
      name: "Smt. T. L. S. Geetha Kameswari",
      role: "Public Relations Director",
      description: "Distinguished Public Relations expert with 20 years of experience in cultivating international partnerships. Her leadership in facilitating overseas collaborations has opened new avenues for growth and investment.",
      achievements: [
        "20 years of PR experience",
        "International partnerships",
        "Singapore delegations",
        "Gateway to India initiative"
      ]
    }
  ];

  const contactInfo = {
    address: "1209, Aparna Westside, Behind DPS school Road, khajaguda Hyderabad-500089",
    phone: "+91 9390849709",
    email: "info@jayashankargroup.com",
    contactPerson: "Mr. Dontharaju Kalyan Srinivas",
    contactEmail: "Srikalyan@jayashankargroup.com"
  };

  return (
    <section id="leadership" className="py-20 bg-white animate-fade-in" style={{ animationDelay: '0.2s', animationDuration: '1.2s', animationFillMode: 'both' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Under Shri Rao's guidance, the organization has developed a robust team with over 200 man-years 
            of combined expertise spanning project management, engineering, finance, and compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-gold-600 font-semibold mb-3">
                    {leader.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {leader.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-navy-900 mb-3">Key Achievements:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {leader.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-gold-600" />
                      <span className="text-sm text-gray-600">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
            Contact Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-navy-900">Office Address</h4>
                  <p className="text-gray-600">{contactInfo.address}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-600" />
                <div>
                  <h4 className="font-semibold text-navy-900">Phone</h4>
                  <p className="text-gray-600">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-600" />
                <div>
                  <h4 className="font-semibold text-navy-900">Email</h4>
                  <p className="text-gray-600">{contactInfo.email}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-navy-900 to-navy-700 rounded-lg p-6 text-white">
                <h4 className="font-semibold mb-3">Contact Person</h4>
                <p className="text-lg mb-2">{contactInfo.contactPerson}</p>
                <p className="text-sm text-gray-300">{contactInfo.contactEmail}</p>
              </div>
              <div className="text-center">
                <button className="bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership; 