import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  subcategories: string[];
  description: string;
  image: string;
  detailedDescription: string;
  features: string[];
  applications: string[];
  technicalSpecs: string[];
}

const ProductsCarousel: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 'decorative-paints',
      name: 'Decorative Paints',
      subcategories: [
        'MAPLE INTERIOR',
        'MAPLE LUXURY INTERIOR', 
        'MAPLE ANTI FUNGAL INTERIOR',
        'ALLURA EXTERIOR',
        'ALLURA LUXURY EXTERIOR',
        'ALLURA ANTI FUNGAL EXTERIOR',
        'Premium Enamels'
      ],
      description: 'Premium interior and exterior decorative solutions for residential and commercial spaces',
      image: 'Images/WhatsApp Image 2025-06-19 at 12.09.42 (2).jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
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
      technicalSpecs: [
        'Coverage: 120-140 sq.ft/ltr',
        'Drying Time: 2-4 hours',
        'Recoat Time: 4-6 hours',
        'Finish: Matt to High Gloss',
        'Shelf Life: 3 years'
      ]
    },
    {
      id: 'wood-coatings',
      name: 'Wood Coatings',
      subcategories: [
        'WOODVIBE 2K PU Wood Stains',
        'WOODVIBE Clear Coats',
        'Wood Varnishes',
        'Wood Preservatives'
      ],
      description: 'Professional wood finishing solutions for furniture, flooring, and architectural applications',
      image: 'Images/WhatsApp Image 2025-06-19 at 12.09.42.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
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
      technicalSpecs: [
        'Pot Life: 4-6 hours',
        'Dry to Touch: 30 minutes',
        'Full Cure: 7 days',
        'Hardness: 2H-3H',
        'Temperature Resistance: -20°C to 80°C'
      ]
    },
    {
      id: 'textured-finishes',
      name: 'Textured Finishes',
      subcategories: [
        'Interior Textures',
        'Exterior Textures',
        'Stucco Paint',
        'Decorative Plasters'
      ],
      description: 'Decorative textured coatings for unique architectural finishes and surface treatments',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
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
      technicalSpecs: [
        'Texture Depth: 1-5mm',
        'Coverage: 80-100 sq.ft/ltr',
        'Working Time: 20-30 minutes',
        'Curing Time: 24-48 hours',
        'Temperature Range: 5°C to 35°C'
      ]
    },
    {
      id: 'primer-putty',
      name: 'Primer & Putty',
      subcategories: [
        'Grippa Interior Primer',
        'Grippa Exterior Primer',
        'Grippa Barrier Coating',
        'Sliko Acrylic Putty',
        'Crack Fill Solutions'
      ],
      description: 'Essential surface preparation products for optimal coating adhesion and performance',
      image: 'Images/wall putty .png?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
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
      technicalSpecs: [
        'Coverage: 100-120 sq.ft/ltr',
        'Drying Time: 4-6 hours',
        'Sanding Time: 6-8 hours',
        'Overcoating: 6-24 hours',
        'Film Thickness: 50-100 microns'
      ]
    },
    {
      id: 'protective-coatings',
      name: 'Protective Coatings',
      subcategories: [
        'ZBOND Epoxy Primer',
        'ZBOND Epoxy Mastic',
        'BONDX PU Topcoat',
        'BONDX Clear Coat',
        'WBOND HR 500°C',
        'WBOND HR Clear 250°C'
      ],
      description: 'Industrial-grade epoxy and polyurethane systems for maximum protection and durability',
      image: 'https://i.pinimg.com/736x/30/be/d9/30bed97d1cb83e429bbe7456cfe4519a.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      detailedDescription: 'ZBOND and BONDX series offer uncompromising protection for industrial and marine environments. These high-performance coatings provide exceptional corrosion resistance and durability. WBOND HR series is specifically formulated for high-temperature applications. These coatings maintain their protective properties and appearance even under extreme thermal conditions.',
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
        'Boiler Components',
        'High-temp Pipelines'
      ],
      technicalSpecs: [
        'Dry Film Thickness: 200-500 microns',
        'Pot Life: 2-4 hours',
        'Service Temperature: -40°C to 120°C',
        'Chemical Resistance: Excellent',
        'Salt Spray Resistance: >1000 hours',
        'Max Temperature: 500°C continuous',
        'Thermal Cycling: Excellent',
        'Adhesion: >5 MPa',
      ]
    },
    {
      id: 'marine-coatings',
      name: 'Marine Coatings',
      subcategories: [
        'HAWKY Antifouling',
        'HAWKY Anti-Corrosive',
        'HAWKY Primers',
        'Marine Topcoats'
      ],
      description: 'Marine-grade coatings for vessels, offshore structures, and coastal applications',
      image: 'https://i.pinimg.com/736x/2f/ec/00/2fec0008f37e239de49bb2dc0d75684a.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
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
      technicalSpecs: [
        'Antifouling Life: 36-60 months',
        'Immersion Service: Continuous',
        'Leaching Rate: Controlled',
        'Adhesion: Excellent',
        'Impact Resistance: High'
      ]
    },
    {
      id: 'floor-coatings',
      name: 'Floor Coatings',
      subcategories: [
        'STEPIN Floor System',
        'Epoxy Floor Coatings',
        'PU Floor Finishes',
        'Anti-Slip Coatings'
      ],
      description: 'Durable floor coating systems for industrial, commercial, and residential applications',
      image: 'https://i.pinimg.com/736x/34/c0/96/34c096795ad5bbe1c9ed80d7921c4c3a.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
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
      technicalSpecs: [
        'Compressive Strength: >80 MPa',
        'Abrasion Resistance: <50mg',
        'Chemical Resistance: Excellent',
        'Service Life: 10-15 years',
        'Application Temperature: 10-30°C'
      ]
    }
  ];

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

  return (
    <section id="products" className="py-16 bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Products</h2>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Discover our comprehensive range of premium coatings designed for every application, from decorative finishes to industrial protection.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-2 border-amber-800 hover:border-amber-700 group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
              </div>
              
              <h3 className="text-lg font-bold text-amber-900 mb-2 group-hover:text-yellow-800 transition-colors duration-200">
                {product.name}
              </h3>
              
              <p className="text-amber-800 text-sm mb-3 line-clamp-2">
                {product.description}
              </p>
              
              <div className="text-xs text-amber-700">
                <span className="font-semibold">Products: </span>
                <span>{product.subcategories.length} variants</span>
              </div>
            </div>
          ))}
        </div>

        {/* Product Popup Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-amber-800">
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-amber-800 to-yellow-900 text-white p-6 rounded-t-2xl flex justify-between items-center">
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
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                </div>

                {/* Product Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Product Overview</h3>
                  <p className="text-amber-800 leading-relaxed">
                    {selectedProduct.detailedDescription}
                  </p>
                </div>

                {/* Three Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Features */}
                  <div className="bg-white bg-opacity-60 rounded-xl p-4 border border-amber-800">
                    <h4 className="font-bold text-amber-900 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-2"></div>
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className="text-amber-800 text-sm flex items-start">
                          <span className="text-amber-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications */}
                  <div className="bg-white bg-opacity-60 rounded-xl p-4 border border-amber-800">
                    <h4 className="font-bold text-amber-900 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-amber-700 rounded-full mr-2"></div>
                      Applications
                    </h4>
                    <ul className="space-y-2">
                      {selectedProduct.applications.map((application, index) => (
                        <li key={index} className="text-amber-800 text-sm flex items-start">
                          <span className="text-amber-700 mr-2">•</span>
                          {application}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Specs */}
                  <div className="bg-white bg-opacity-60 rounded-xl p-4 border border-amber-800">
                    <h4 className="font-bold text-amber-900 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-amber-800 rounded-full mr-2"></div>
                      Technical Specs
                    </h4>
                    <ul className="space-y-2">
                      {selectedProduct.technicalSpecs.map((spec, index) => (
                        <li key={index} className="text-amber-800 text-sm flex items-start">
                          <span className="text-amber-800 mr-2">•</span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Product Variants */}
                <div className="mt-6 bg-white bg-opacity-60 rounded-xl p-4 border border-amber-800">
                  <h4 className="font-bold text-amber-900 mb-3">Product Variants</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {selectedProduct.subcategories.map((variant, index) => (
                      <div key={index} className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg p-3 border border-amber-700">
                        <span className="text-amber-800 font-medium text-sm">{variant}</span>
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