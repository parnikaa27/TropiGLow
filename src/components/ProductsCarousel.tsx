import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  subcategories: ProductCategory[];
  description: string;
  cardImage: string;
  popupImage: string;
  detailedDescription: string;
  features: string[];
  applications: string[];
  //technicalSpecs: string[];
}

interface ProductCategory {
  name: string;
  id: string;
  items: string[];
}

const ProductsCarousel: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const products: Product[] = [
    {
      id: 'decorative-paints',
      name: 'Decorative Paints',
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
            'ENAMELS'
          ]
        }
      ],
      description: 'Premium interior and exterior decorative solutions for residential and commercial spaces',
      cardImage: '/mi2.jpeg',
      popupImage: '/mi1.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      detailedDescription: 'Our decorative paint range offers superior coverage, durability, and aesthetic appeal. From luxurious interior finishes to weather-resistant exterior coatings, each product is formulated with advanced technology to deliver exceptional performance and long-lasting beauty.',
      features: [
        'Superior Coverage & Opacity',
        'Anti-Fungal Protection',
        'Washable & Stain Resistant',
        'Low VOC Formulation',
        'Fade Resistant Colors',
        'Easy Application'
      ],
      applications: [
        'Residential Interiors',
        'Commercial Buildings',
        'Exterior Walls',
        'Ceiling Applications',
        'Decorative Finishes'
      ],
      // technicalSpecs: [
      //   'Coverage: 120-140 sq.ft/ltr',
      //   'Drying Time: 2-4 hours',
      //   'Recoat Time: 4-6 hours',
      //   'Finish: Matt to High Gloss',
      //   'Shelf Life: 3 years'
      // ]
    },
    {
      id: 'wood-coatings',
      name: 'Wood Coatings',
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
      ],
      description: 'Professional wood finishing solutions for furniture, flooring, and architectural applications',
      cardImage: '/wc1.jpeg',
      popupImage: '/ws1.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      detailedDescription: 'WOODVIBE series represents the pinnacle of wood coating technology. Our 2K PU systems provide exceptional durability, chemical resistance, and aesthetic enhancement for all wood surfaces.',
      features: [
        '2K Polyurethane Technology',
        'Superior Scratch Resistance',
        'UV Protection',
        'Water & Chemical Resistant',
        'Available in Matt to High Gloss',
        'Professional Grade Quality'
      ],
      applications: [
        'Furniture Manufacturing',
        'Wooden Flooring',
        'Interior Woodwork',
        'Architectural Millwork',
        'Marine Wood Applications'
      ],
      // technicalSpecs: [
      //   'Pot Life: 4-6 hours',
      //   'Dry to Touch: 30 minutes',
      //   'Full Cure: 7 days',
      //   'Hardness: 2H-3H',
      //   'Temperature Resistance: -20°C to 80°C'
      // ]
    },
    {
      id: 'textured-finishes',
      name: 'Textured Finishes',
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
      ],
      description: 'Decorative textured coatings for unique architectural finishes and surface treatments',
      cardImage: '/it1.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      popupImage: '/et1.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      detailedDescription: 'Create stunning visual effects with our range of textured finishes. From subtle textures to bold architectural statements, our products offer unlimited creative possibilities.',
      features: [
        'Multiple Texture Patterns',
        'Weather Resistant',
        'Crack Bridging Properties',
        'Breathable Formulation',
        'Easy Maintenance',
        'Customizable Effects'
      ],
      applications: [
        'Feature Walls',
        'Exterior Facades',
        'Commercial Interiors',
        'Residential Decorating',
        'Architectural Accents'
      ],
      // technicalSpecs: [
      //   'Texture Depth: 1-5mm',
      //   'Coverage: 80-100 sq.ft/ltr',
      //   'Working Time: 20-30 minutes',
      //   'Curing Time: 24-48 hours',
      //   'Temperature Range: 5°C to 35°C'
      // ]
    },
    {
      id: 'primer-putty',
      name: 'Primer & Putty',
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
      ],
      description: 'Essential surface preparation products for optimal coating adhesion and performance',
      cardImage: '/wall putty .png',
      popupImage: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      detailedDescription: 'Proper surface preparation is crucial for coating success. Our Grippa and Sliko range ensures excellent adhesion, surface smoothness, and long-term performance.',
      features: [
        'Excellent Adhesion',
        'Alkali Resistant',
        'Crack Filling Properties',
        'Easy Sanding',
        'Quick Drying',
        'Moisture Resistant'
      ],
      applications: [
        'New Construction',
        'Renovation Projects',
        'Surface Preparation',
        'Crack Repair',
        'Substrate Sealing'
      ],
      // technicalSpecs: [
      //   'Coverage: 100-120 sq.ft/ltr',
      //   'Drying Time: 4-6 hours',
      //   'Sanding Time: 6-8 hours',
      //   'Overcoating: 6-24 hours',
      //   'Film Thickness: 50-100 microns'
      // ]
    },
    {
      id: 'protective-coatings',
      name: 'Protective Coatings',
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
      ],
      description: 'Industrial-grade epoxy and polyurethane systems for maximum protection and durability',
      cardImage: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      popupImage: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      detailedDescription: 'ZBOND and BONDX series offer uncompromising protection for industrial and marine environments. These high-performance coatings provide exceptional corrosion resistance and durability. WBOND HR series is specifically formulated for high-temperature applications.',
      features: [
        'Superior Corrosion Protection',
        'Chemical Resistance',
        'High Build Capability',
        'Excellent Adhesion',
        'Long Service Life',
        'Professional Application',
        'Temperature Resistance up to 500°C',
        'Thermal Shock Resistance'
      ],
      applications: [
        'Industrial Structures',
        'Storage Tanks',
        'Pipelines',
        'Marine Equipment',
        'Chemical Plants',
        'Exhaust Systems',
        'Industrial Furnaces',
        'Boiler Components'
      ],
      // technicalSpecs: [
      //   'Dry Film Thickness: 200-500 microns',
      //   'Pot Life: 2-4 hours',
      //   'Service Temperature: -40°C to 500°C',
      //   'Chemical Resistance: Excellent',
      //   'Salt Spray Resistance: >1000 hours',
      //   'Max Temperature: 500°C continuous',
      //   'Thermal Cycling: Excellent'
      // ]
    },
    {
      id: 'marine-coatings',
      name: 'Marine Coatings',
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
      ],
      description: 'Marine-grade coatings for vessels, offshore structures, and coastal applications',
      cardImage: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      popupImage: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      detailedDescription: 'HAWKY marine coatings provide comprehensive protection against the harsh marine environment. From antifouling to anti-corrosive systems, we ensure your marine assets stay protected.',
      features: [
        'Superior Antifouling Performance',
        'Corrosion Protection',
        'Seawater Resistance',
        'Self-Polishing Action',
        'Extended Service Life',
        'Environmental Compliance'
      ],
      applications: [
        'Ship Hulls',
        'Offshore Platforms',
        'Marine Structures',
        'Coastal Infrastructure',
        'Underwater Equipment'
      ],
      // technicalSpecs: [
      //   'Antifouling Life: 36-60 months',
      //   'Immersion Service: Continuous',
      //   'Leaching Rate: Controlled',
      //   'Adhesion: Excellent',
      //   'Impact Resistance: High'
      // ]
    },
    {
      id: 'floor-coatings',
      name: 'Floor Coatings',
      subcategories: [
        {
          name: 'Floor Systems',
          id: 'floor-systems',
          items: ['STEPIN Floor Coating System']
        }
      ],
      description: 'Durable floor coating systems for industrial, commercial, and residential applications',
      cardImage: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      popupImage: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      detailedDescription: 'STEPIN floor coating system provides exceptional durability and performance for high-traffic areas. Our floor coatings offer chemical resistance, easy maintenance, and long-lasting protection.',
      features: [
        'High Traffic Durability',
        'Chemical Resistance',
        'Easy to Clean',
        'Anti-Slip Options',
        'Seamless Finish',
        'Quick Installation'
      ],
      applications: [
        'Industrial Floors',
        'Commercial Spaces',
        'Warehouses',
        'Parking Garages',
        'Food Processing Areas'
      ],
      // technicalSpecs: [
      //   'Compressive Strength: >80 MPa',
      //   'Abrasion Resistance: <50mg',
      //   'Chemical Resistance: Excellent',
      //   'Service Life: 10-15 years',
      //   'Application Temperature: 10-30°C'
      // ]
    }
  ];

  useEffect(() => {
  const handleProductNavigation = (event: CustomEvent) => {
    const product = products.find(
      (p) => p.id === event.detail.productId
    );

    if (product) {
      setSelectedProduct(product);
    }
  };

  window.addEventListener(
    'navigateToProduct',
    handleProductNavigation as EventListener
  );

  return () => {
    window.removeEventListener(
      'navigateToProduct',
      handleProductNavigation as EventListener
    );
  };
}, [products]);


  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000); // Auto-advance every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const navigateToProduct = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setSelectedProduct(product);
    }
  };

  useEffect(() => {
    const handleProductNavigation = (event: CustomEvent) => {
      navigateToProduct(event.detail.productId);
    };

    window.addEventListener('navigateToProduct', handleProductNavigation as EventListener);
    return () => {
      window.removeEventListener('navigateToProduct', handleProductNavigation as EventListener);
    };
  }, []);

  const closePopup = () => {
    setSelectedProduct(null);
  };

  const handleProductItemClick = (item: string) => {
    navigate(getProductId(item));
  };

  const getProductId = (productName: string): string => {
    const productMap: Record<string, string> = {
      'MAPLE INTERIOR': '/products/maple-interior',
      'MAPLE LUXURY INTERIOR': '/products/maple-luxury-interior',
      'MAPLE ANTI FUNGAL INTERIOR': '/products/maple-anti-fungal-interior',
      'ALLURA EXTERIOR': '/products/allura-exterior',
      'ALLURA LUXURY EXTERIOR': '/products/allura-luxury-exterior',
      'ALLURA ANTI FUNGAL EXTERIOR': '/products/allura-anti-fungal-exterior',
      'ENAMELS': '/products/enamels',
      'WOODVIBE 2K PU Wood Stains - Matte-Glossy': '/products/woodvibe-stains',
      'WOODVIBE 2K PU Clear Coats/Varnishes': '/products/woodvibe-clear-coats',
      'Interior Textured Finishes': '/products/interior-textured-finishes',
      'Exterior Textured Finishes': '/products/exterior-textured-finishes',
      'Stucco Paint': '/products/stucco-paint',
      'Grippa Interior Primer': '/products/grippa-interior-primer',
      'Grippa Exterior Primer': '/products/grippa-exterior-primer',
      'Grippa Barrier Coating': '/products/grippa-barrier-coating',
      'Grippa Dampproof Primer': '/products/grippa-dampproof-primer',
      'Sliko ACRYLIC INT/EXT PUTTY': '/products/sliko-acrylic-putty',
      'Sliko CRACKFILL': '/products/sliko-crackfill',
      'ZBOND High Build Epoxy Primer': '/products/zbond-epoxy-primer',
      'ZBOND Epoxy Mastic Coatings': '/products/zbond-epoxy-mastic',
      'BONDX PU Topcoat': '/products/bondx-pu-topcoat',
      'BONDX PU Clear Coat': '/products/bondx-pu-clear-coat',
      'WBOND HR 500°C': '/products/wbond-hr500',
      'WBOND HR CLEAR 250°C': '/products/wbond-hr-clear250',
      'HAWKY Antifouling': '/products/hawky-antifouling',
      'HAWKY Anti-Corrosive Paint': '/products/hawky-anti-corrosive-paint',
      'HAWKY Primers & Topcoats': '/products/hawky-primers-topcoats',
      'STEPIN Floor Coating System': '/products/stepin-floor-coating-system'
    };
    
    return productMap[productName] || '/products/maple-interior';
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % products.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Get visible products (current + next 2 for desktop, current + next 1 for tablet, current only for mobile)
  const getVisibleProducts = () => {
    const visibleProducts = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % products.length;
      visibleProducts.push({ ...products[index], displayIndex: i });
    }
    return visibleProducts;
  };

  return (
    <section id="products" className="py-16 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Products</h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Discover our comprehensive range of premium coatings designed for every application, from decorative finishes to industrial protection.
          </p>
        </div>

        {/* Infinite Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center">
            {/* Navigation Arrow - Left */}
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="absolute left-0 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full shadow-xl transition-all duration-200 border border-slate-200 disabled:opacity-50"
            >
              <ChevronLeft className="h-6 w-6 text-slate-600" />
            </button>

            {/* Products Container */}
            <div className="w-full max-w-6xl mx-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getVisibleProducts().map((product, index) => (
                  <div
                    key={`${product.id}-${currentIndex}-${index}`}
                    onClick={() => setSelectedProduct(product)}
                    className={`group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-slate-200 hover:border-slate-400 ${
                      isTransitioning ? 'opacity-70' : 'opacity-100'
                    } ${
                      index === 0 ? 'lg:scale-105 lg:z-10' : index === 1 ? 'hidden md:block' : 'hidden lg:block'
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={product.cardImage}
                        alt={product.name}
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                      {index === 0 && (
                        <div className="absolute top-2 right-2 bg-slate-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-slate-600 transition-colors duration-200">
                      {product.name}
                    </h3>
                    
                    <p className="text-slate-700 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="text-xs text-slate-600">
                      <span className="font-semibold">Categories: </span>
                      <span>{product.subcategories.length} variants</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrow - Right */}
            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="absolute right-0 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full shadow-xl transition-all duration-200 border border-slate-200 disabled:opacity-50"
            >
              <ChevronRight className="h-6 w-6 text-slate-600" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-slate-500 shadow-lg' : 'bg-slate-300'
                } disabled:opacity-50`}
              />
            ))}
          </div>
        </div>

        {/* Product Popup Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-slate-600 to-gray-600 text-white p-6 rounded-t-2xl flex justify-between items-center">
                <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
                <button
                  onClick={closePopup}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="p-6">
                {/* Product Image */}
                <div className="mb-6">
                  <img
                    src={selectedProduct.popupImage}
                    alt={selectedProduct.name}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>

                {/* Product Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Product Overview</h3>
                  <p className="text-slate-700 leading-relaxed">
                    {selectedProduct.detailedDescription}
                  </p>
                </div>

                {/* Three Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {/* Features */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-slate-500 rounded-full mr-2"></div>
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className="text-slate-700 text-sm flex items-start">
                          <span className="text-slate-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <h4 className="font-bold text-slate-800 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mr-2"></div>
                      Applications
                    </h4>
                    <ul className="space-y-2">
                      {selectedProduct.applications.map((application, index) => (
                        <li key={index} className="text-slate-700 text-sm flex items-start">
                          <span className="text-gray-600 mr-2">•</span>
                          {application}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Specs */}
                  {/* <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <h4 className="font-bold text-slate-800 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      Technical Specs
                    </h4>
                    <ul className="space-y-2">
                      {selectedProduct.technicalSpecs.map((spec, index) => (
                        <li key={index} className="text-slate-700 text-sm flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </div>

                {/* Product Categories with Items */}
                <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-6 border border-slate-200">
                  <h4 className="font-bold text-slate-800 mb-4 text-lg">Product Categories</h4>
                  <div className="space-y-4">
                    {selectedProduct.subcategories.map((category, index) => (
                      <div key={index} className="border-l-4 border-slate-500 pl-4">
                        <h5 className="font-semibold text-slate-800 mb-2 text-base">{category.name}</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                          {category.items.map((item, itemIndex) => (
                            <div 
                              key={itemIndex} 
                              onClick={() => handleProductItemClick(item)}
                              className="bg-white rounded-lg p-3 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-400 cursor-pointer transition-all duration-200 group"
                            >
                              <span className="text-slate-800 font-medium text-sm group-hover:text-slate-600">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsCarousel;