import React from 'react';
import { ArrowLeft, CheckCircle, Shield, Droplets, Clock, Thermometer, Eye, Star, Zap, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GrippaExteriorPrimerPage: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-800 via-emerald-800 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-green-200 hover:text-white mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Layers className="h-8 w-8 text-green-300" />
                <h1 className="text-5xl font-bold">GRIPPA EXTERIOR PRIMER</h1>
              </div>
              <p className="text-green-200 text-xl mb-6">Weather-Resistant Exterior Wall Primer</p>
              <p className="text-lg leading-relaxed mb-8">
                GRIPPA Exterior Primer provides superior adhesion and weather protection for exterior surfaces. 
                Formulated to withstand harsh weather conditions while ensuring optimal topcoat performance, 
                it's the essential foundation for all exterior painting projects.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-green-300" />
                  <span>Weather Resistant</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Droplets className="h-5 w-5 text-emerald-300" />
                  <span>Moisture Protection</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Star className="h-5 w-5 text-teal-300" />
                  <span>Superior Adhesion</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="GRIPPA Exterior Primer Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">90-110</div>
                  <div className="text-sm opacity-90">sq.ft/ltr coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Exterior Primer Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Exterior Primer Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Weather Resistance",
                description: "Superior protection against rain, UV rays, and extreme weather conditions."
              },
              {
                icon: Droplets,
                title: "Moisture Barrier",
                description: "Prevents moisture penetration while allowing vapor transmission for breathability."
              },
              {
                icon: Star,
                title: "Excellent Adhesion",
                description: "Superior bonding to various exterior substrates for long-lasting performance."
              },
              {
                icon: Zap,
                title: "Alkali Resistant",
                description: "Resists alkaline conditions from fresh concrete and masonry surfaces."
              },
              {
                icon: Eye,
                title: "Stain Blocking",
                description: "Prevents bleed-through of stains and discoloration from substrate."
              },
              {
                icon: Clock,
                title: "Quick Drying",
                description: "Fast-drying formula allows for efficient project completion."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-green-200 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <Thermometer className="h-6 w-6 text-green-600 mr-3" />
            Exterior Primer Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Coverage", value: "90-110 sq.ft/ltr", sublabel: "(single coat)" },
              { label: "Drying Time", value: "3-4 hours", sublabel: "(surface dry)" },
              { label: "Recoat Time", value: "6-8 hours", sublabel: "(topcoat application)" },
              { label: "Finish", value: "Matt", sublabel: "(primer base)" },
              { label: "Shelf Life", value: "2 years", sublabel: "(from manufacture)" },
              { label: "Thinning", value: "Up to 15%", sublabel: "(with clean water)" },
              { label: "Temperature", value: "5°C to 40°C", sublabel: "(application range)" },
              { label: "Humidity", value: "Below 90% RH", sublabel: "(recommended)" }
            ].map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                <div className="font-semibold text-slate-800 mb-1">{spec.label}</div>
                <div className="text-lg font-bold text-green-600 mb-1">{spec.value}</div>
                <div className="text-sm text-slate-600">{spec.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Applications & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-green-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Exterior Applications</h3>
            <div className="space-y-4">
              {[
                "Exterior Walls - Concrete, masonry, and rendered surfaces",
                "New Construction - Fresh concrete and masonry substrates",
                "Renovation Projects - Previously painted exterior surfaces",
                "Coastal Areas - Buildings exposed to marine environments",
                "Industrial Exteriors - Commercial and industrial buildings"
              ].map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-green-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Weather Protection Benefits</h3>
            <div className="space-y-4">
              {[
                "Enhanced Durability - Improves topcoat weather resistance",
                "Moisture Protection - Prevents water damage and infiltration",
                "UV Stability - Protects against sun damage and fading",
                "Alkali Resistance - Prevents efflorescence and substrate issues",
                "Professional Results - Foundation for high-quality exterior systems",
                "Cost Effective - Extends topcoat life and reduces maintenance"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-green-200 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Professional Exterior Surface Preparation</h3>
          <p className="text-slate-700 mb-6 text-lg max-w-2xl mx-auto">
            Ensure maximum weather protection with GRIPPA Exterior Primer. Get expert advice on surface preparation, 
            application techniques, and exterior paint system compatibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg"
            >
              Get Weather Protection Consultation
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Exterior Primer Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrippaExteriorPrimerPage;