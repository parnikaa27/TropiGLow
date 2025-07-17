import React from 'react';
import { ArrowLeft, CheckCircle, Palette, Shield, Droplets, Clock, Thermometer, Eye, Star, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ZbondEpoxyPrimerPage: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-700 via-gray-700 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-slate-200 hover:text-white mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-8 w-8 text-blue-300" />
                <h1 className="text-5xl font-bold">ZBOND HIGH BUILD EPOXY PRIMER</h1>
              </div>
              <p className="text-slate-200 text-xl mb-6">Advanced High-Build Epoxy Primer System</p>
              <p className="text-lg leading-relaxed mb-8">
                ZBOND High Build Epoxy Primer provides exceptional corrosion protection and surface preparation. 
                This advanced primer system offers superior adhesion, excellent build characteristics, and 
                outstanding chemical resistance for demanding industrial applications.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-blue-300" />
                  <span>High-Build Formula</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Zap className="h-5 w-5 text-slate-300" />
                  <span>Corrosion Protection</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Star className="h-5 w-5 text-gray-300" />
                  <span>Superior Adhesion</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="ZBOND High Build Epoxy Primer Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-slate-500 to-gray-600 rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">100-150</div>
                  <div className="text-sm opacity-90">sq.ft/ltr coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Primer Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">High-Build Epoxy Primer Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "High-Build Capability",
                description: "Exceptional film build allows for thick protective coatings in fewer applications."
              },
              {
                icon: Zap,
                title: "Superior Corrosion Protection",
                description: "Outstanding barrier protection against corrosion in harsh environments."
              },
              {
                icon: Star,
                title: "Excellent Adhesion",
                description: "Superior bonding to steel, concrete, and other industrial substrates."
              },
              {
                icon: Eye,
                title: "Chemical Resistance",
                description: "Excellent resistance to acids, alkalis, solvents, and industrial chemicals."
              },
              {
                icon: Droplets,
                title: "Moisture Resistance",
                description: "Outstanding resistance to water, humidity, and immersion conditions."
              },
              {
                icon: Clock,
                title: "Fast Curing",
                description: "Quick curing properties allow for efficient project completion."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-slate-500 to-gray-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <Thermometer className="h-6 w-6 text-slate-600 mr-3" />
            Epoxy Primer Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Coverage", value: "100-150 sq.ft/ltr", sublabel: "(depends on thickness)" },
              { label: "Drying Time", value: "4-6 hours", sublabel: "(surface dry)" },
              { label: "Recoat Time", value: "8-24 hours", sublabel: "(topcoat application)" },
              { label: "Film Thickness", value: "150-300 microns", sublabel: "(per coat)" },
              { label: "Shelf Life", value: "2 years", sublabel: "(from manufacture)" },
              { label: "Pot Life", value: "4-6 hours", sublabel: "(at 25°C)" },
              { label: "Temperature", value: "10°C to 35°C", sublabel: "(application range)" },
              { label: "Humidity", value: "Below 85% RH", sublabel: "(recommended)" }
            ].map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg p-4 border border-slate-200">
                <div className="font-semibold text-slate-800 mb-1">{spec.label}</div>
                <div className="text-lg font-bold text-slate-600 mb-1">{spec.value}</div>
                <div className="text-sm text-slate-600">{spec.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Applications & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Industrial Applications</h3>
            <div className="space-y-4">
              {[
                "Steel Structures - Bridges, towers, and industrial frameworks",
                "Storage Tanks - Chemical and petroleum storage facilities",
                "Marine Structures - Offshore platforms and coastal installations",
                "Chemical Plants - Process equipment and piping systems",
                "Infrastructure - Water treatment plants and industrial facilities"
              ].map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Primer Benefits</h3>
            <div className="space-y-4">
              {[
                "Maximum Corrosion Protection - Superior barrier against corrosion",
                "High-Build Efficiency - Thick protective films in fewer coats",
                "Excellent Adhesion - Superior bonding to various substrates",
                "Chemical Resistance - Outstanding resistance to industrial chemicals",
                "Cost Effective - Reduces overall coating system costs",
                "Professional Grade - Industrial-strength performance standards"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Professional Epoxy Primer Solutions</h3>
          <p className="text-slate-700 mb-6 text-lg max-w-2xl mx-auto">
            Achieve maximum corrosion protection with ZBOND High Build Epoxy Primer. Get expert consultation on 
            application techniques, surface preparation, and coating system design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-slate-700 hover:to-gray-700 transition-all duration-200 shadow-lg"
            >
              Get Primer Consultation
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Primer Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZbondEpoxyPrimerPage;