import React from 'react';
import { ArrowLeft, CheckCircle, Shield, Droplets, Clock, Thermometer, Eye, Star, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AlluraExteriorPage: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 via-sky-800 to-cyan-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-blue-200 hover:text-white mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Sun className="h-8 w-8 text-yellow-300" />
                <h1 className="text-5xl font-bold">ALLURA EXTERIOR</h1>
              </div>
              <p className="text-blue-200 text-xl mb-6">Weather-Resistant Exterior Protection</p>
              <p className="text-lg leading-relaxed mb-8">
                ALLURA EXTERIOR is a high-performance exterior emulsion paint designed to withstand extreme weather conditions. 
                Formulated with advanced weather-resistant polymers and UV stabilizers, it provides long-lasting protection 
                and maintains color integrity even under harsh tropical conditions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-blue-300" />
                  <span>Weather Resistant</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Sun className="h-5 w-5 text-yellow-300" />
                  <span>UV Protection</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Star className="h-5 w-5 text-cyan-300" />
                  <span>Fade Resistant</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="ALLURA EXTERIOR Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">110-130</div>
                  <div className="text-sm opacity-90">sq.ft/ltr coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Weather Protection Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Advanced Weather Protection Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Weather Resistant Formula",
                description: "Advanced polymers provide superior protection against rain, wind, and extreme temperatures."
              },
              {
                icon: Sun,
                title: "UV Protection",
                description: "UV stabilizers prevent color fading and maintain paint integrity under intense sunlight."
              },
              {
                icon: Star,
                title: "Fade Resistant Colors",
                description: "Long-lasting color retention ensures your exterior looks fresh for years to come."
              },
              {
                icon: Droplets,
                title: "Crack Bridging Properties",
                description: "Flexible formulation bridges minor cracks and prevents water penetration."
              },
              {
                icon: Eye,
                title: "Algae & Fungus Resistant",
                description: "Special additives prevent algae and fungal growth on exterior surfaces."
              },
              {
                icon: Clock,
                title: "Excellent Adhesion",
                description: "Superior bonding to various substrates ensures long-lasting performance."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-200 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <Thermometer className="h-6 w-6 text-blue-600 mr-3" />
            Exterior Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Coverage", value: "110-130 sq.ft/ltr", sublabel: "(single coat)" },
              { label: "Drying Time", value: "2-4 hours", sublabel: "(surface dry)" },
              { label: "Recoat Time", value: "6-8 hours", sublabel: "(between coats)" },
              { label: "Finish", value: "Matt to Semi-Gloss", sublabel: "(weather resistant)" },
              { label: "Shelf Life", value: "3 years", sublabel: "(from manufacture)" },
              { label: "Thinning", value: "Up to 15%", sublabel: "(with clean water)" },
              { label: "Temperature", value: "5°C to 40°C", sublabel: "(application range)" },
              { label: "Humidity", value: "Below 90% RH", sublabel: "(recommended)" }
            ].map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
                <div className="font-semibold text-slate-800 mb-1">{spec.label}</div>
                <div className="text-lg font-bold text-blue-600 mb-1">{spec.value}</div>
                <div className="text-sm text-slate-600">{spec.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Exterior Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Exterior Applications</h3>
            <div className="space-y-4">
              {[
                "Exterior Walls - Residential and commercial buildings",
                "Concrete Surfaces - Properly prepared concrete structures",
                "Masonry - Brick, block, and stone surfaces",
                "Rendered Surfaces - Cement and lime-based renders",
                "Previously Painted Exteriors - Over compatible coatings"
              ].map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Weather Protection Benefits</h3>
            <div className="space-y-4">
              {[
                "Long-Term Protection - Withstands harsh weather conditions",
                "Color Retention - Maintains vibrant colors for years",
                "Weather Durability - Resists cracking, peeling, and fading",
                "Easy Maintenance - Simple cleaning and touch-up procedures",
                "Cost Effective - Reduces frequency of repainting",
                "Professional Results - Contractor-grade performance"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Exterior Application Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Exterior Surface Preparation</h3>
            <div className="space-y-4">
              {[
                "Remove all loose and flaking paint using appropriate tools",
                "Clean surface thoroughly to remove dirt, dust, and contaminants",
                "Fill cracks and holes with exterior grade filler and allow to cure",
                "Apply suitable exterior primer for optimal adhesion and performance"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Weather-Conscious Application</h3>
            <div className="space-y-4">
              {[
                "Apply during favorable weather conditions with no rain forecast",
                "Avoid application in direct sunlight or extreme temperatures",
                "Use brush, roller or spray application as per surface requirements",
                "Apply 2-3 coats for optimal protection and weather resistance",
                "Allow proper curing time before exposure to harsh weather"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Options */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Weather-Resistant Colors</h3>
              <div className="space-y-2">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">White</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Light Colors</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Tintable to weather-resistant shades</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Pack Sizes</h3>
              <div className="space-y-2">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">1 Ltr</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">4 Ltr</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">10 Ltr</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">20 Ltr</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Weather Assurance</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm">Weather-Tested Formula</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sun className="h-4 w-4" />
                  <span className="text-sm">UV Resistance Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4" />
                  <span className="text-sm">Professional Exterior Grade</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-200 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Protect Your Exterior with ALLURA</h3>
          <p className="text-slate-700 mb-6 text-lg max-w-2xl mx-auto">
            Shield your building from harsh weather conditions with ALLURA EXTERIOR. Get professional consultation 
            on surface preparation, color selection, and application techniques for maximum weather protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg"
            >
              Get Weather Protection Consultation
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Exterior Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlluraExteriorPage;