
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              <span className="text-white">CORPORATE</span>
              <span className="text-gold-400 ml-1">GROUP</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Building tomorrow's business empire through innovation, 
              excellence, and sustainable growth across diverse industries.
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
              {['About Us', 'Our Businesses', 'Careers', 'News & Media', 'Investor Relations'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Sectors */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Business Sectors</h4>
            <ul className="space-y-2">
              {['Power & Energy', 'Retail & FMCG', 'Real Estate', 'Aviation', 'Automotive'].map((sector) => (
                <li key={sector}>
                  <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                    {sector}
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
                  <p>Corporate Headquarters</p>
                  <p>Mumbai, Maharashtra</p>
                  <p>India - 400001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-400" />
                <span className="text-gray-300">+91 22 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-400" />
                <span className="text-gray-300">info@corporategroup.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Corporate Group. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
