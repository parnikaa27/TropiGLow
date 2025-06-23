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
    <footer className="bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-amber-700 to-yellow-800 p-2 rounded-lg shadow-lg">
                <Paintbrush className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                TropiGlow
              </span>
            </div>
            <p className="text-amber-100 leading-relaxed">
              Leading provider of premium decorative, industrial, marine, and protective coatings engineered for excellence and performance.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-amber-200 hover:text-white cursor-pointer transition-colors duration-200" />
              <Twitter className="h-6 w-6 text-amber-200 hover:text-white cursor-pointer transition-colors duration-200" />
              <Linkedin className="h-6 w-6 text-amber-200 hover:text-white cursor-pointer transition-colors duration-200" />
              <Instagram className="h-6 w-6 text-amber-200 hover:text-white cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Products</h3>
            <ul className="space-y-3">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <a href="#" className="text-amber-200 hover:text-white transition-colors duration-200">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-amber-200 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-300" />
                <span className="text-amber-200">sales.cenpro@opromaldives.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-300" />
                <span className="text-amber-200">+960 9310373</span>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold mb-2 text-amber-300">Business Hours</h4>
                <p className="text-amber-200 text-sm">
                  Mon - Sat: 9:00 AM – 6:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-amber-700 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-bold mb-4 text-white">Stay Updated</h3>
            <p className="text-amber-200 mb-6">Subscribe to our newsletter for latest products and industry insights.</p>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-amber-800 text-white border-2 border-amber-700 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent placeholder-amber-300"
              />
              <button className="bg-gradient-to-r from-amber-600 to-yellow-700 hover:from-amber-700 hover:to-yellow-800 px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-amber-700 mt-8 pt-8 text-center">
          <p className="text-amber-300">
            © 2025 TropiGlow. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;