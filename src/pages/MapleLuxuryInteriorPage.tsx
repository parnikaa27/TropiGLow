import React from 'react';
import { ArrowLeft, CheckCircle, Palette, Shield, Droplets, Clock, Thermometer, Eye, Star, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MapleLuxuryInteriorPage: React.FC = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        const navHeight = 64;
        const elementPosition = element.offsetTop - navHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-800 via-emerald-800 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-emerald-200 hover:text-white mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Crown className="h-8 w-8 text-emerald-300" />
                <h1 className="text-5xl font-bold">MAPLE LUXURY INTERIOR</h1>
              </div>
              <p className="text-emerald-200 text-xl mb-6">Ultra-Premium Interior Emulsion Paint</p>
              <p className="text-lg leading-relaxed mb-8">
                Experience the pinnacle of interior paint technology with MAPLE LUXURY INTERIOR. 
                Formulated with premium acrylic resins and advanced additives for exceptional performance, 
                superior stain resistance, and a luxurious finish that transforms any space.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Crown className="h-5 w-5 text-emerald-300" />
                  <span>Ultra-Premium Quality</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-cyan-300" />
                  <span>Advanced Stain Resistance</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Star className="h-5 w-5 text-blue-300" />
                  <span>Luxury Finish</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/mi2.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="MAPLE LUXURY INTERIOR Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              {/* <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">130-150</div>
                  <div className="text-sm opacity-90">sq.ft/ltr coverage</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Luxury Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Luxury Features & Premium Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Crown,
                title: "Ultra-Premium Quality",
                description: "Formulated with the finest ingredients for uncompromising quality and performance."
              },
              {
                icon: Shield,
                title: "Advanced Stain Resistance",
                description: "Superior protection against stains, marks, and everyday wear for lasting beauty."
              },
              {
                icon: Droplets,
                title: "Superior Washability",
                description: "Enhanced washability allows for easy cleaning without affecting the finish quality."
              },
              {
                icon: Star,
                title: "Luxury Smooth Finish",
                description: "Exceptional smoothness and uniformity that creates an elegant, sophisticated appearance."
              },
              {
                icon: Clock,
                title: "Enhanced Durability",
                description: "Long-lasting performance that maintains its beauty and protection for years."
              },
              {
                icon: Eye,
                title: "Anti-Bacterial Properties",
                description: "Advanced formulation with anti-bacterial agents for a healthier living environment."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications 
        <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-200 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <Thermometer className="h-6 w-6 text-purple-600 mr-3" />
            Premium Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Coverage", value: "130-150 sq.ft/ltr", sublabel: "(single coat)" },
              { label: "Drying Time", value: "1-2 hours", sublabel: "(surface dry)" },
              { label: "Recoat Time", value: "3-4 hours", sublabel: "(between coats)" },
              { label: "Finish", value: "Luxury Smooth Matt", sublabel: "(premium grade)" },
              { label: "Shelf Life", value: "3 years", sublabel: "(from manufacture)" },
              { label: "Thinning", value: "Up to 5%", sublabel: "(with clean water)" },
              { label: "Temperature", value: "10°C to 35°C", sublabel: "(application range)" },
              { label: "Humidity", value: "Below 85% RH", sublabel: "(recommended)" }
            ].map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-4 border border-purple-200">
                <div className="font-semibold text-slate-800 mb-1">{spec.label}</div>
                <div className="text-lg font-bold text-purple-600 mb-1">{spec.value}</div>
                <div className="text-sm text-slate-600">{spec.sublabel}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Premium Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Premium Applications</h3>
            <div className="space-y-4">
              {[
                "Premium Interior Walls - Luxury residential spaces",
                "Luxury Residential Projects - High-end homes and apartments",
                "High-End Commercial Spaces - Boutiques, hotels, offices",
                "Hotels & Restaurants - Premium hospitality environments",
                "Office Buildings - Executive and corporate spaces"
              ].map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Luxury Benefits</h3>
            <div className="space-y-4">
              {[
                "Exceptional Durability - Long-lasting premium performance",
                "Easy Maintenance - Effortless cleaning and upkeep",
                "Luxury Appearance - Sophisticated, elegant finish",
                "Health Conscious Formula - Safe for family environments",
                "Professional Grade Quality - Contractor-approved performance",
                "Long-Term Value - Investment in lasting quality"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Application
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Premium Surface Preparation</h3>
            <div className="space-y-4">
              {[
                "Surface must be perfectly clean and smooth for optimal luxury finish",
                "Use high-quality primer for best results and maximum performance",
                "Fill all imperfections with premium filler and sand to perfection",
                "Sand to smooth finish and remove all dust with professional techniques"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Professional Application</h3>
            <div className="space-y-4">
              {[
                "Use high-quality brushes or rollers for professional results",
                "Apply in thin, even coats maintaining consistent technique",
                "Maintain wet edge during application for seamless finish",
                "Allow full curing time between coats for optimal performance",
                "Apply 2-3 coats for luxury finish and maximum durability"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>  */}

        {/* Premium Options 
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Premium Colors</h3>
              <div className="space-y-2">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Pure White</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Brilliant White</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Tintable to premium shades</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Available Sizes</h3>
              <div className="space-y-2">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">1 Ltr</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">4 Ltr</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">10 Ltr</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">20 Ltr</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Premium Assurance</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Crown className="h-4 w-4" />
                  <span className="text-sm">Luxury Grade Manufacturing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Premium Quality Testing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4" />
                  <span className="text-sm">Professional Grade Formula</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Experience Luxury Interior Painting</h3>
          <p className="text-slate-700 mb-6 text-lg max-w-2xl mx-auto">
            Elevate your space with MAPLE LUXURY INTERIOR. Get professional consultation on premium color selection, 
            surface preparation, and application techniques for exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg"
            >
              Get Premium Consultation
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Luxury Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapleLuxuryInteriorPage;