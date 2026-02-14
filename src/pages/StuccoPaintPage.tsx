import React from 'react';
import { ArrowLeft, CheckCircle, Palette, Shield, Droplets, Clock, Thermometer, Eye, Star, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StuccoPaintPage: React.FC = () => {
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
                <Palette className="h-8 w-8 text-stone-300" />
                <h1 className="text-5xl font-bold">STUCCO PAINT</h1>
              </div>
              <p className="text-emerald-200 text-xl mb-6">Traditional Stucco Finish for Authentic Textures</p>
              <p className="text-lg leading-relaxed mb-8">
                Create authentic Mediterranean and traditional architectural finishes with our premium stucco paint. 
                This specialized coating provides the classic stucco appearance with modern durability and weather 
                resistance, perfect for both restoration and new construction projects.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Star className="h-5 w-5 text-blue-300" />
                  <span>Authentic Stucco Finish</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-cyan-300" />
                  <span>Weather Resistant</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Eye className="h-5 w-5 text-emerald-300" />
                  <span>Traditional Appeal</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/es1.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Stucco Paint Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              {/* <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-stone-500 to-neutral-600 rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">60-80</div>
                  <div className="text-sm opacity-90">sq.ft/ltr coverage</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stucco Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Authentic Stucco Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Authentic Stucco Appearance",
                description: "Traditional Mediterranean and European stucco finish with authentic texture and depth."
              },
              {
                icon: Shield,
                title: "Weather Durability",
                description: "Modern formulation provides excellent weather resistance while maintaining traditional look."
              },
              {
                icon: Droplets,
                title: "Breathable Formulation",
                description: "Allows moisture vapor transmission preventing trapped moisture and related issues."
              },
              {
                icon: Zap,
                title: "Crack Resistance",
                description: "Flexible properties help prevent cracking and maintain surface integrity over time."
              },
              {
                icon: Eye,
                title: "Natural Mineral Finish",
                description: "Contains natural minerals for authentic appearance and superior performance."
              },
              {
                icon: Clock,
                title: "Long-Lasting Beauty",
                description: "Maintains its traditional appearance and protective properties for years."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-300">
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
        <div className="bg-white rounded-xl p-8 shadow-lg border border-stone-200 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <Thermometer className="h-6 w-6 text-stone-600 mr-3" />
            Stucco Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Texture Depth", value: "3-10mm", sublabel: "(traditional stucco)" },
              { label: "Coverage", value: "60-80 sq.ft/ltr", sublabel: "(depends on texture)" },
              { label: "Working Time", value: "10-20 minutes", sublabel: "(open time)" },
              { label: "Curing Time", value: "7-14 days", sublabel: "(full cure)" },
              { label: "Temperature", value: "5°C to 35°C", sublabel: "(application range)" },
              { label: "Humidity", value: "Below 80% RH", sublabel: "(recommended)" },
              { label: "Substrate", value: "Masonry/Concrete", sublabel: "(prepared surfaces)" },
              { label: "Finish", value: "Traditional Stucco", sublabel: "(authentic texture)" }
            ].map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-stone-50 to-neutral-50 rounded-lg p-4 border border-stone-200">
                <div className="font-semibold text-slate-800 mb-1">{spec.label}</div>
                <div className="text-lg font-bold text-stone-600 mb-1">{spec.value}</div>
                <div className="text-sm text-slate-600">{spec.sublabel}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Applications & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-stone-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Traditional Applications</h3>
            <div className="space-y-4">
              {[
                "Heritage Buildings - Restoration of historic stucco facades",
                "Mediterranean Style - Villas and traditional architecture",
                "Residential Exteriors - Authentic stucco finish for homes",
                "Commercial Buildings - Hotels, restaurants, and retail spaces",
                "Architectural Features - Columns, arches, and decorative elements"
              ].map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-stone-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-stone-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Traditional Benefits</h3>
            <div className="space-y-4">
              {[
                "Authentic Appearance - True traditional stucco look and feel",
                "Thermal Mass - Natural insulation properties improve energy efficiency",
                "Fire Resistance - Excellent fire-resistant properties for safety",
                "Breathable Surface - Prevents moisture problems and mold growth",
                "Timeless Appeal - Classic finish that never goes out of style",
                "Restoration Compatible - Perfect for heritage and restoration projects"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-stone-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Instructions 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-stone-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Traditional Surface Preparation</h3>
            <div className="space-y-4">
              {[
                "Ensure substrate is sound masonry or concrete with proper curing",
                "Clean surface thoroughly removing all loose material and contaminants",
                "Apply traditional lime-based primer for optimal adhesion",
                "Dampen surface lightly before application to prevent rapid moisture loss"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-stone-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-stone-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Traditional Application Method</h3>
            <div className="space-y-4">
              {[
                "Apply base coat evenly using traditional stucco trowel techniques",
                "Create texture using appropriate tools following traditional methods",
                "Work in small sections maintaining consistent pattern and depth",
                "Mist cure for several days to achieve proper strength development",
                "Apply final protective coating if required for enhanced durability"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-stone-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Available Options 
        <div className="bg-gradient-to-r from-stone-600 to-neutral-600 rounded-xl p-8 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Traditional Finishes</h3>
              <div className="space-y-2">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Smooth Stucco</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Sand Finish</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Float Finish</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Dash Finish</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Pack Sizes</h3>
              <div className="space-y-2">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">25 Kg</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">50 Kg</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Traditional Assurance</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4" />
                  <span className="text-sm">Authentic Formula</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm">Traditional Grade</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Heritage Compatible</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Create Authentic Traditional Stucco Finishes</h3>
          <p className="text-slate-700 mb-6 text-lg max-w-2xl mx-auto">
            Achieve authentic traditional stucco finishes with our specialized stucco paint. Get expert consultation on 
            traditional application techniques, surface preparation, and heritage restoration methods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-teal-700 transition-all duration-200 shadow-lg"
            >
              Get Traditional Consultation
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-teal-600 text-stone-600 hover:bg-teal-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Stucco Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StuccoPaintPage;