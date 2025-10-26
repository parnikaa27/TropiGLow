import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const productCategories = [
    'Decorative Paints',
    'Wood Coatings',
    'Textured Finishes',
    'Primer & Putty',
    'Protective Coatings',
    'Marine Coatings'
  ];

  return (
    <footer className="bg-white text-slate-700 border-t border-slate-200">
      <div className="w-full px-4 sm:px-6 lg:px-32 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.jpg"
                alt="TropiGlow Company Logo"
                className="h-12 w-12 object-contain rounded-lg shadow-md"
              />
              <span className="text-3xl font-bold text-slate-800">TropiGlow</span>
            </div>
            <p className="text-slate-600 text-base leading-relaxed">
              Premium-grade decorative, protective, industrial, and marine coatings—engineered for unmatched durability and aesthetics.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-blue-600 hover:text-blue-900 transition duration-200" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-blue-600 hover:text-blue-900 transition duration-200" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-blue-600 hover:text-blue-900 transition duration-200" />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-blue-600 hover:text-blue-900transition duration-200" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-slate-800 text-center">Products</h3>
            <ul className="space-y-3 text-base text-center">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-600 hover:text-blue-600 transition duration-200">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">Contact</h3>
            <div className="space-y-4 text-base">
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 min-w-[17px] text-blue-500" />
                  <a
                    href="mailto:sales.cenpro@opromaldives.com"
                    className="hover:text-blue-600 text-base"
                  >
                    sales.cenpro@opromaldives.com
                  </a>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <span>+960 9310373</span>
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href="https://wa.me/9609310373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-600"
                >
                  <FaWhatsapp className="h-6 w-6" />
                </a>
                <span className="text-slate-600">Chat on WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">Address</h3>
            <address className="not-italic text-base text-slate-600 space-y-1 leading-relaxed">
              <p>O'Shop – Ground Floor</p>
              <p>H.Gasdhoshuge, Abadhaffehi Magu</p>
              <p>Malé, Maldives - 20084</p>
            </address>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-200 mt-12 pt-6 text-center text-sm text-slate-500">
          © 2025 <span className="font-medium">TropiGlow</span>. All rights reserved. &nbsp;|&nbsp;
          <a href="#" className="hover:text-blue-600 transition">Privacy Policy</a> &nbsp;|&nbsp;
          <a href="#" className="hover:text-blue-600 transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
