import React from 'react';
import { ArrowLeft, CheckCircle, Palette, Shield, Droplets, Clock, Thermometer, Eye, Star, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WbondHrClear250Page: React.FC = () => {
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
                <Eye className="h-8 w-8 text-blue-300" />
                <h1 className="text-5xl font-bold">WBOND HR CLEAR 250°C</h1>
              </div>
              <p className="text-emerald-200 text-xl mb-6">High-Temperature Clear Protective Coating</p>
              <p className="text-lg leading-relaxed mb-8">
                WBOND HR CLEAR 250°C is a specialized clear coating designed for high-temperature applications up to 
                250°C. This transparent protective coating maintains clarity while providing excellent thermal protection, 
                making it ideal for applications where both temperature resistance and visibility are required.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Eye className="h-5 w-5 text-blue-300" />
                  <span>Crystal Clear</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Thermometer className="h-5 w-5 text-emerald-300" />
                  <span>250°C Service</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-cyan-300" />
                  <span>Thermal Protection</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="WBOND HR CLEAR 250°C Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">250°C</div>
                  <div className="text-sm opacity-90">max temperature</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Clear High-Temperature Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Clear High-Temperature Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Crystal Clear Transparency",
                description: "Maintains perfect clarity and transparency even at elevated temperatures."
              },
              {
                icon: Thermometer,
                title: "250°C Service Temperature",
                description: "Continuous service capability up to 250°C without degradation or discoloration."
              },
              {
                icon: Shield,
                title: "Thermal Protection",
                description: "Provides thermal barrier protection while maintaining substrate visibility."
              },
              {
                icon: Star,
                title: "UV Stability",
                description: "Excellent UV resistance prevents yellowing and maintains clarity over time."
              },
              {
                icon: Zap,
                title: "Thermal Shock Resistance",
                description: "Withstands rapid temperature changes without cracking or delamination."
              },
              {
                icon: Clock,
                title: "Long-Term Clarity",
                description: "Maintains transparency and protective properties over extended service periods."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
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
        <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <Thermometer className="h-6 w-6 text-blue-600 mr-3" />
            Clear High-Temperature Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Max Temperature", value: "250°C", sublabel: "(continuous service)" },
              { label: "Coverage", value: "8-12 sq.m/ltr", sublabel: "(per coat)" },
              { label: "Drying Time", value: "2-4 hours", sublabel: "(air dry)" },
              { label: "Clarity", value: "Crystal Clear", sublabel: "(maintains transparency)" },
              { label: "Film Thickness", value: "25-50 microns", sublabel: "(per coat)" },
              { label: "Thermal Cycling", value: "Excellent", sublabel: "(repeated heating/cooling)" },
              { label: "Application Temp", value: "15°C to 35°C", sublabel: "(ambient)" },
              { label: "Shelf Life", value: "2 years", sublabel: "(from manufacture)" }
            ].map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
                <div className="font-semibold text-slate-800 mb-1">{spec.label}</div>
                <div className="text-lg font-bold text-blue-600 mb-1">{spec.value}</div>
                <div className="text-sm text-slate-600">{spec.sublabel}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Applications & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Clear High-Temperature Applications</h3>
            <div className="space-y-4">
              {[
                "Oven Windows - Industrial oven and furnace viewing windows",
                "Heat Exchangers - Transparent protection for heat exchange equipment",
                "Lighting Fixtures - High-temperature lighting and lamp components",
                "Automotive - Engine bay components requiring visibility and protection",
                "Laboratory Equipment - High-temperature laboratory and analytical equipment"
              ].map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Clear Protection Benefits</h3>
            <div className="space-y-4">
              {[
                "Maintains Visibility - Crystal clear protection without obscuring view",
                "Temperature Protection - Protects substrates from thermal damage",
                "UV Resistance - Prevents yellowing and maintains long-term clarity",
                "Easy Inspection - Allows visual monitoring of protected components",
                "Thermal Barrier - Provides insulation while maintaining transparency",
                "Specialized Application - Designed for unique high-temperature visibility needs"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Clear High-Temperature Protection Solutions</h3>
          <p className="text-slate-700 mb-6 text-lg max-w-2xl mx-auto">
            Achieve transparent thermal protection with WBOND HR CLEAR 250°C. Get expert consultation on 
            application techniques, clarity maintenance, and specialized high-temperature clear coating systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg"
            >
              Get Clear Coating Consultation
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Clear Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WbondHrClear250Page;