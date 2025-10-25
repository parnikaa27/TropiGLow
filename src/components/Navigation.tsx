import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface DropdownItem {
  name: string;
  id: string;
  subcategories?: DropdownSubcategory[];
}

interface DropdownSubcategory {
  name: string;
  id: string;
  items?: { label: string; route: string }[];
}

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const navigate = useNavigate();

  const productCategories: DropdownItem[] = [
    {
      name: 'Decorative Paints',
      id: 'decorative-paints',
      subcategories: [
        {
          name: 'Interior',
          id: 'interior',
          items: [
            { label: 'MAPLE INTERIOR', route: '/products/maple-interior' },
            { label: 'MAPLE LUXURY INTERIOR', route: '/products/maple-luxury-interior' },
            { label: 'MAPLE ANTI FUNGAL INTERIOR', route: '/products/maple-anti-fungal-interior' }
          ]
        },
        {
          name: 'Exterior',
          id: 'exterior',
          items: [
            { label: 'ALLURA EXTERIOR', route: '/products/allura-exterior' },
            { label: 'ALLURA LUXURY EXTERIOR', route: '/products/allura-luxury-exterior' },
            { label: 'ALLURA ANTI FUNGAL EXTERIOR', route: '/products/allura-anti-fungal-exterior' }
          ]
        },
        {
          name: 'Enamel',
          id: 'enamel',
          items: [{ label: 'ENAMELS', route: '/products/enamels' }]
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
          items: [{ label: 'WOODVIBE 2K PU Wood Stains - Matte-Glossy', route: '/products/woodvibe-stains' }]
        },
        {
          name: 'Clear Coats',
          id: 'clear-coats',
          items: [{ label: 'WOODVIBE 2K PU Clear Coats', route: '/products/woodvibe-clear-coats' }]
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
          items: [{ label: 'Interior Textured Finishes', route: '/products/interior-textured-finishes' }]
        },
        {
          name: 'Exterior Textures',
          id: 'exterior-textures',
          items: [
            { label: 'Exterior Textured Finishes', route: '/products/exterior-textured-finishes' },
            { label: 'Stucco Paint', route: '/products/stucco-paint' }
          ]
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
            { label: 'Grippa Interior Primer', route: '/products/grippa-interior-primer' },
            { label: 'Grippa Exterior Primer', route: '/products/grippa-exterior-primer' },
            { label: 'Grippa Barrier Coating', route: '/products/grippa-barrier-coating' },
            { label: 'Grippa Dampproof Primer', route: '/products/grippa-dampproof-primer' }
          ]
        },
        {
          name: 'Putty & Fillers',
          id: 'putty-fillers',
          items: [
            { label: 'Sliko ACRYLIC INT/EXT PUTTY', route: '/products/sliko-acrylic-putty' },
            { label: 'Sliko CRACKFILL', route: '/products/sliko-crackfill' }
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
            { label: 'ZBOND High Build Epoxy Primer', route: '/products/zbond-epoxy-primer' },
            { label: 'ZBOND Epoxy Mastic Coatings', route: '/products/zbond-epoxy-mastic' }
          ]
        },
        {
          name: 'PU Coatings',
          id: 'pu-coatings',
          items: [
            { label: 'BONDX PU Topcoat', route: '/products/bondx-pu-topcoat' },
            { label: 'BONDX PU Clear Coat', route: '/products/bondx-pu-clear-coat' }
          ]
        },
        {
          name: 'High-Temperature Coatings',
          id: 'high-temperature-coatings',
          items: [
            { label: 'WBOND HR 500°C', route: '/products/wbond-hr500' },
            { label: 'WBOND HR CLEAR 250°C', route: '/products/wbond-hr-clear250' }
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
            { label: 'HAWKY Antifouling', route: '/products/hawky-antifouling' },
            { label: 'HAWKY Anti-Corrosive Paint', route: '/products/hawky-anti-corrosive-paint' },
            { label: 'HAWKY Primers & Topcoats', route: '/products/hawky-primers-topcoats' }
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
          items: [{ label: 'STEPIN Floor Coating System', route: '/products/stepin-floor-coating-system' }]
        }
      ]
    }
  ];

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
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

  const handleProductClick = (route: string) => {
    navigate(route);
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  const scrollToSection = (sectionId: string) => {
  if (location.pathname !== '/') {
    navigate(`/?scrollTo=${sectionId}`);
  } else {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = 64;
        const elementPosition = element.offsetTop - navHeight;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    }, 100); 
  }
  setIsMenuOpen(false);
};


  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const navItems = [
    { name: 'HOME', id: 'home' },
    { name: 'PRODUCTS', id: 'products' },
    { name: 'OUR SERVICES', id: 'services' },
    { name: 'PROJECT GALLERY', id: 'gallery' },
    { name: 'CONTACT US', id: 'contact' }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img src="/logo.jpg" alt="Logo" className="h-10 w-10 object-contain rounded-lg" />
          </div>

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
                  className="flex items-center space-x-1 text-slate-600 hover:text-blue-600 font-semibold text-sm"
                >
                  <span>{item.name}</span>
                  {item.name === 'PRODUCTS' && <ChevronDown className="h-4 w-4" />}
                </button>

                {item.name === 'PRODUCTS' && activeDropdown === 'products' && (
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border py-3 z-50">
                    {productCategories.map((category, index) => (
                      <div key={index} className="group relative">
                        <div
                          className="px-5 py-3 text-slate-700 hover:bg-blue-50 cursor-pointer flex items-center justify-between"
                          onMouseEnter={() => handleSubMouseEnter(category.id)}
                        >
                          <span className="font-semibold">{category.name}</span>
                          <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                        </div>

                        {activeSubDropdown === category.id && (
                          <div className="absolute left-full top-0 ml-2 w-80 bg-white rounded-xl shadow-xl border py-3 z-50">
                            {category.subcategories?.map((sub, subIndex) => (
                              <div key={subIndex} className="group/sub relative">
                                <div className="px-5 py-2 font-medium text-slate-700 border-b last:border-0">
                                  {sub.name}
                                </div>
                                {sub.items && (
                                  <div className="px-6 py-1 space-y-1">
                                    {sub.items.map((item, itemIndex) => (
                                      <div
                                        key={itemIndex}
                                        className="text-sm text-slate-600 hover:text-blue-600 cursor-pointer hover:bg-blue-50 px-2 py-1 rounded"
                                        onClick={() => handleProductClick(item.route)}
                                      >
                                        • {item.label}
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
            <a
              href="https://wa.me/9609310373"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600"
            >
              <FaWhatsapp className="h-6 w-6" />
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t">
            {navItems.map((item) => (
              <div key={item.name} className="py-2">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left text-slate-600 hover:text-blue-600 font-semibold"
                >
                  {item.name}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
