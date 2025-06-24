import React from 'react';
import { Paintbrush, Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const productCategories = [
    'Decorative Paints',
    'Wood Coatings',
    'Textured Finishes',
    'Primer & Putty',
    'Protective Coatings',
    'Marine Coatings'
  ];

  const quickLinks = [
    'About Us',
    'Project Gallery',
    'Technical Support',
    'Quality Assurance',
    'Careers',
    'News & Updates'
  ];

  return (
    <footer className="bg-[#ffdda5] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-amber-700 to-yellow-800 p-2 rounded-lg shadow-lg">
                <img
                src="public/Images/logo.jpg" 
                alt="TropiGlow Logo"
                className="h-8 w-8 object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-amber-900">
                TropiGlow
              </span>
            </div>

            <p className="text-amber-800 leading-relaxed">
              Leading provider of premium decorative, industrial, marine, and protective coatings engineered for excellence and performance.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-amber-800 hover:text-white cursor-pointer transition-colors duration-200" />
              <Twitter className="h-6 w-6 text-amber-800 hover:text-white cursor-pointer transition-colors duration-200" />
              <Linkedin className="h-6 w-6 text-amber-800 hover:text-white cursor-pointer transition-colors duration-200" />
              <Instagram className="h-6 w-6 text-amber-800 hover:text-white cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-amber-900">Products</h3>
            <ul className="space-y-3">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <a href="#" className="text-amber-800 hover:text-white transition-colors duration-200">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-amber-900">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-amber-800 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-amber-900">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-600" />
                <span className="text-amber-800">sales.cenpro@opromaldives.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-600" />
                <span className="text-amber-800">+960 9310373</span>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold mb-2 text-amber-600">Business Hours</h4>
                <p className="text-amber-800 text-sm">
                  Mon - Sat: 9:00 AM – 6:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-amber-700 mt-8 pt-8 text-center">
          <p className="text-amber-600">
            © 2025 TropiGlow. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;