import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, Paintbrush } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

interface DropdownItem {
  name: string;
  id: string;
  subcategories?: DropdownSubcategory[];
}

interface DropdownSubcategory {
  name: string;
  id: string;
  items?: string[];
}

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const productCategories: DropdownItem[] = [
    {
      name: 'Decorative Paints',
      id: 'decorative-paints',
      subcategories: [
        {
          name: 'Interior',
          id: 'interior',
          items: [
            'MAPLE INTERIOR',
            'MAPLE LUXURY INTERIOR', 
            'MAPLE ANTI FUNGAL INTERIOR'
          ]
        },
        {
          name: 'Exterior',
          id: 'exterior',
          items: [
            'ALLURA EXTERIOR',
            'ALLURA LUXURY EXTERIOR',
            'ALLURA ANTI FUNGAL EXTERIOR'
          ]
        },
        {
          name: 'Enamel',
          id: 'enamel',
          items: [
            'Premium Enamel Paints',
            'High Gloss Enamel',
            'Synthetic Enamel'
          ]
        }
      ]
    },
    {
      name: 'Wood Coatings',
      id: 'wood-coatings',
      subcategories: [
        {
          name: 'Wood Stains',
          id: 'wood-stains',
          items: ['WOODVIBE 2K PU Wood Stains - Matte-Glossy']
        },
        {
          name: 'Clear Coats',
          id: 'clear-coats',
          items: ['WOODVIBE 2K PU Clear Coats/Varnishes']
        }
      ]
    },
    {
      name: 'Textured Finishes',
      id: 'textured-finishes',
      subcategories: [
        {
          name: 'Interior Textures',
          id: 'interior-textures',
          items: ['Interior Textured Finishes']
        },
        {
          name: 'Exterior Textures',
          id: 'exterior-textures',
          items: ['Exterior Textured Finishes', 'Stucco Paint']
        }
      ]
    },
    {
      name: 'Primer & Putty',
      id: 'primer-putty',
      subcategories: [
        {
          name: 'Primers',
          id: 'primers',
          items: [
            'Grippa Interior Primer',
            'Grippa Exterior Primer',
            'Grippa Barrier Coating',
            'Grippa Dampproof Primer'
          ]
        },
        {
          name: 'Putty & Fillers',
          id: 'putty-fillers',
          items: [
            'Sliko ACRYLIC INT/EXT PUTTY',
            'Sliko CRACKFILL'
          ]
        }
      ]
    },
    {
      name: 'Protective Coatings',
      id: 'protective-coatings',
      subcategories: [
        {
          name: 'Epoxy Systems',
          id: 'epoxy-systems',
          items: [
            'ZBOND High Build Epoxy Primer',
            'ZBOND Epoxy Mastic Coatings'
          ]
        },
        {
          name: 'PU Coatings',
          id: 'pu-coatings',
          items: [
            'BONDX PU Topcoat',
            'BONDX PU Clear Coat'
          ]
        },
        {
          name: 'High-Temperature Coatings',
          id: 'high-temperature-coatings',
          items: [
            'WBOND HR 500°C',
            'WBOND HR CLEAR 250°C'
          ]
        }
      ]
    },
    {
      name: 'Marine Coatings',
      id: 'marine-coatings',
      subcategories: [
        {
          name: 'Marine Protection',
          id: 'marine-protection',
          items: [
            'HAWKY Antifouling',
            'HAWKY Anti-Corrosive Paint',
            'HAWKY Primers & Topcoats'
          ]
        }
      ]
    },
    {
      name: 'Floor Coatings',
      id: 'floor-coatings',
      subcategories: [
        {
          name: 'Floor Systems',
          id: 'floor-systems',
          items: ['STEPIN Floor Coating System']
        }
      ]
    }
  ];

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }, 150);
  };

  const handleSubMouseEnter = (subDropdown: string) => {
    setActiveSubDropdown(subDropdown);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64;
      const elementPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleProductClick = (productId: string) => {
    scrollToSection('products');
    
    setTimeout(() => {
      const event = new CustomEvent('navigateToProduct', {
        detail: { productId }
      });
      window.dispatchEvent(event);
    }, 500);
    
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const navItems = [
    { name: 'HOME', id: 'home' },
    { name: 'PRODUCTS', id: 'products' },
    { name: 'PROJECT GALLERY', id: 'gallery' },
    { name: 'OUR SERVICES', id: 'services' },
    { name: 'CONTACT US', id: 'contact' }
  ];

  return (
    <nav className="bg-gradient-to-r from-amber-900 via-yellow-900 to-amber-800 shadow-2xl sticky top-0 z-50 border-b-2 border-amber-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="bg-gradient-to-br from-amber-700 to-yellow-800 p-2 rounded-lg shadow-lg">
              <Paintbrush className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">TropiGlow</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.name === 'PRODUCTS' && handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-1 text-white hover:text-amber-500 font-semibold transition-colors duration-200 text-sm tracking-wide"
                >
                  <span>{item.name}</span>
                  {item.name === 'PRODUCTS' && <ChevronDown className="h-4 w-4" />}
                </button>

                {/* Products Dropdown */}
                {item.name === 'PRODUCTS' && activeDropdown === 'products' && (
                  <div className="absolute top-full left-0 mt-1 w-80 bg-gradient-to-br from-amber-900 to-yellow-900 rounded-xl shadow-2xl border-2 border-amber-800 py-3 z-50">
                    {productCategories.map((category, index) => (
                      <div key={index} className="group relative">
                        <div
                          className="px-5 py-3 text-white hover:bg-gradient-to-r hover:from-amber-800 hover:to-yellow-800 cursor-pointer flex items-center justify-between transition-all duration-200"
                          onClick={() => handleProductClick(category.id)}
                          onMouseEnter={() => handleSubMouseEnter(category.id)}
                        >
                          <span className="font-semibold">{category.name}</span>
                          <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                        </div>

                        {/* Subcategory Dropdown */}
                        {activeSubDropdown === category.id && (
                          <div className="absolute left-full top-0 ml-2 w-80 bg-gradient-to-br from-amber-900 to-yellow-900 rounded-xl shadow-2xl border-2 border-amber-800 py-3 z-50">
                            {category.subcategories?.map((sub, subIndex) => (
                              <div key={subIndex} className="group/sub relative">
                                <div
                                  className="px-5 py-2 text-white hover:bg-gradient-to-r hover:from-amber-800 hover:to-yellow-800 cursor-pointer font-medium border-b border-amber-700 last:border-b-0"
                                  onClick={() => handleProductClick(category.id)}
                                >
                                  {sub.name}
                                </div>
                                {sub.items && (
                                  <div className="px-8 py-1 space-y-1">
                                    {sub.items.map((item, itemIndex) => (
                                      <div
                                        key={itemIndex}
                                        className="text-white hover:text-white cursor-pointer text-sm py-1 hover:bg-amber-800 px-2 rounded transition-all duration-200"
                                        onClick={() => handleProductClick(category.id)}
                                      >
                                        • {item}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* WhatsApp Icon Desktop */}
            <a
              href="https://wa.me/9609310373"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600 transition-colors duration-200"
            >
              <FaWhatsapp className="h-6 w-6" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-white p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-amber-700 py-4 bg-gradient-to-r from-amber-900 to-yellow-800">
            {navItems.map((item) => (
              <div key={item.name} className="py-2">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left text-white hover:text-white font-semibold"
                >
                  {item.name}
                </button>
                {item.name === 'PRODUCTS' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {productCategories.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => handleProductClick(category.id)}
                        className="block w-full text-left text-sm text-white hover:text-white py-1"
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;