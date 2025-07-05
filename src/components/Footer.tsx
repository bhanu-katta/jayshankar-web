import React from 'react';
import { Linkedin, Twitter, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const companies = [
  'Industrial Park',
  'Pulp & Paper',
  'Power & Infrastructure',
];

const Footer = () => (
  <footer className="bg-navy-900 text-gray-200 pt-16 pb-8 mt-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-extrabold tracking-tight">
            <span className="text-white">JAYA SHANKAR</span>
            <span className="text-gold-400 ml-1">GROUP</span>
          </h3>
          <p className="text-gray-300 leading-relaxed max-w-xs">
            Founded by visionary First Generation Entrepreneur Shri T. Srinivasa Rao, we are committed to advancing innovative projects that drive economic development, social progress, and environmental sustainability.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors" aria-label="LinkedIn"><Linkedin size={22} /></a>
            <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors" aria-label="Twitter"><Twitter size={22} /></a>
            <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors" aria-label="Facebook"><Facebook size={22} /></a>
          </div>
        </div>
        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gold-400">Quick Links</h4>
          <ul className="space-y-2">
            {['About Us', 'Our Companies', 'Leadership', 'Contact Us', 'Careers'].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors text-base font-medium">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Our Companies */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gold-400">Our Companies</h4>
          <ul className="space-y-2">
            {companies.map((company) => (
              <li key={company}>
                <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors text-base font-medium">{company}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gold-400">Contact Us</h4>
          <div className="space-y-3 text-base">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-gold-400 mt-1" />
              <div className="text-gray-300">
                <p>1209, Aparna Westside</p>
                <p>Behind DPS school Road</p>
                <p>Khajaguda Hyderabad-500089</p>
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
      <div className="border-t border-navy-700 mt-12 pt-8 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Jaya Shankar Group. All rights reserved. | <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a></p>
      </div>
    </div>
  </footer>
);

export default Footer;
