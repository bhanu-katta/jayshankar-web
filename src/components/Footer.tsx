import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Building2, Factory, Zap } from 'lucide-react';

const Footer = () => {
  const companies = [
    "JAYASHANKAR MULTI PRODUCT INDUSTRIAL PARK & SEZ PRIVATE LIMITED",
    "JAYASHANKAR PULP AND PAPER MILLS PRIVATE LIMITED", 
    "JAYASHANKAR POWER AND INFRASTRUCTURE PRIVATE LIMITED"
  ];

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              <span className="text-white">JAYA SHANKAR</span>
              <span className="text-gold-400 ml-1">GROUP</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Founded by visionary First Generation Entrepreneur Shri T. Srinivasa Rao, 
              we are committed to advancing innovative projects that drive economic development, 
              social progress, and environmental sustainability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Our Companies', 'Leadership', 'Contact Us', 'Careers'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Companies */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Companies</h4>
            <ul className="space-y-2">
              {companies.map((company) => (
                <li key={company}>
                  <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors text-sm">
                    {company}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-1" />
                <div className="text-gray-300">
                  <p>1209, Aparna Westside</p>
                  <p>Behind DPS school Road</p>
                  <p>khajaguda Hyderabad-500089</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-400" />
                <span className="text-gray-300">+91 9390849709</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-400" />
                <span className="text-gray-300">info@jayashankargroup.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Jaya Shankar Group. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
