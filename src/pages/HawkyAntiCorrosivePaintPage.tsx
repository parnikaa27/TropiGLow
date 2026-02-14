import React from 'react';
import { ArrowLeft, CheckCircle, Palette, Shield, Droplets, Clock, Thermometer, Eye, Star, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HawkyAntiCorrosivePaintPage: React.FC = () => {
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
      <div className="bg-gradient-to-r from-cyan-800 via-emerald-800 to-teal-800 text-white py-16">
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
                <Shield className="h-8 w-8 text-blue-300" />
                <h1 className="text-5xl font-bold">HAWKY ANTI-CORROSIVE PAINT</h1>
              </div>
              <p className="text-emerald-200 text-xl mb-6">Marine Anti-Corrosive Protection System</p>
              <p className="text-lg leading-relaxed mb-8">
                HAWKY Anti-Corrosive Paint provides exceptional protection against corrosion in marine environments. 
                This advanced coating system offers superior barrier protection, excellent adhesion, and long-term 
                durability for marine structures and vessels exposed to saltwater conditions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-blue-300" />
                  <span>Corrosion Protection</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Droplets className="h-5 w-5 text-emerald-300" />
                  <span>Saltwater Resistant</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Star className="h-5 w-5 text-cyan-300" />
                  <span>Marine Grade</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="HAWKY Anti-Corrosive Paint Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              {/* <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-xl p-4 shadow-xl">
               <div className="text-center">
                  <div className="text-2xl font-bold">10-14</div>
                  <div className="text-sm opacity-90">sq.m/ltr coverage</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Anti-Corrosive Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-800 mb-8 text-center">Marine Anti-Corrosive Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Superior Corrosion Protection",
                description: "Outstanding barrier protection against saltwater corrosion and marine environments."
              },
              {
                icon: Droplets,
                title: "Saltwater Resistance",
                description: "Excellent resistance to saltwater immersion and marine atmospheric conditions."
              },
              {
                icon: Star,
                title: "Marine Grade Durability",
                description: "Formulated specifically for harsh marine environments and extended service life."
              },
              {
                icon: Zap,
                title: "Excellent Adhesion",
                description: "Superior bonding to steel and marine substrates in wet conditions."
              },
              {
                icon: Eye,
                title: "Chemical Resistance",
                description: "Outstanding resistance to marine chemicals and fuel contamination."
              },
              {
                icon: Clock,
                title: "Long Service Life",
                description: "Extended protection reduces maintenance frequency and operational costs."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-cyan-200 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-cyan-800 mb-2">{feature.title}</h3>
                <p className="text-cyan-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications 
        <div className="bg-white rounded-xl p-8 shadow-lg border border-cyan-200 mb-16">
          <h3 className="text-2xl font-bold text-cyan-800 mb-8 flex items-center">
            <Thermometer className="h-6 w-6 text-cyan-600 mr-3" />
            Anti-Corrosive Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Coverage", value: "10-14 sq.m/ltr", sublabel: "(per coat)" },
              { label: "Drying Time", value: "4-6 hours", sublabel: "(surface dry)" },
              { label: "Recoat Time", value: "8-16 hours", sublabel: "(between coats)" },
              { label: "Film Thickness", value: "75-125 microns", sublabel: "(dry film)" },
              { label: "Service Life", value: "5-8 years", sublabel: "(marine environment)" },
              { label: "Salt Spray", value: ">1000 hours", sublabel: "(ASTM B117)" },
              { label: "Temperature", value: "5°C to 40°C", sublabel: "(application range)" },
              { label: "Humidity", value: "Below 85% RH", sublabel: "(recommended)" }
            ].map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-lg p-4 border border-cyan-200">
                <div className="font-semibold text-cyan-800 mb-1">{spec.label}</div>
                <div className="text-lg font-bold text-cyan-600 mb-1">{spec.value}</div>
                <div className="text-sm text-cyan-600">{spec.sublabel}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Applications & Benefits 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-cyan-200">
            <h3 className="text-xl font-bold text-cyan-800 mb-6">Marine Applications</h3>
            <div className="space-y-4">
              {[
                "Ship Hulls - Above waterline protection for all vessel types",
                "Marine Structures - Piers, docks, and harbor installations",
                "Offshore Platforms - Oil rigs and marine drilling equipment",
                "Coastal Infrastructure - Bridges, seawalls, and marine facilities",
                "Naval Equipment - Military vessels and marine defense systems"
              ].map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-cyan-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-cyan-200">
            <h3 className="text-xl font-bold text-cyan-800 mb-6">Marine Protection Benefits</h3>
            <div className="space-y-4">
              {[
                "Maximum Corrosion Protection - Superior defense against marine corrosion",
                "Extended Asset Life - Significantly extends marine equipment lifespan",
                "Reduced Maintenance - Lower maintenance frequency and costs",
                "Environmental Resistance - Withstands harsh marine conditions",
                "Cost Effective - Reduces total cost of ownership for marine assets",
                "Professional Marine Grade - Approved for commercial marine use"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-cyan-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200 text-center">
          <h3 className="text-2xl font-bold text-cyan-800 mb-4">Professional Marine Anti-Corrosive Solutions</h3>
          <p className="text-cyan-700 mb-6 text-lg max-w-2xl mx-auto">
            Protect your marine assets with HAWKY Anti-Corrosive Paint. Get expert consultation on application 
            techniques, surface preparation, and marine coating system design for maximum protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-teal-700 transition-all duration-200 shadow-lg"
            >
              Get Marine Protection Consultation
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Anti-Corrosive Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HawkyAntiCorrosivePaintPage;