import React from 'react';
import { ArrowLeft, CheckCircle, Palette, Shield, Droplets, Clock, Thermometer, Eye, Star, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WbondHr500Page: React.FC = () => {
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
                <Thermometer className="h-8 w-8 text-red-400" />
                <h1 className="text-5xl font-bold">WBOND HR 500°C</h1>
              </div>
              <p className="text-slate-200 text-xl mb-6">High-Temperature Resistant Coating</p>
              <p className="text-lg leading-relaxed mb-8">
                WBOND HR 500°C is an advanced high-temperature resistant coating designed to withstand continuous 
                exposure to temperatures up to 500°C. This specialized coating provides exceptional thermal protection, 
                oxidation resistance, and long-term durability for extreme temperature applications.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Thermometer className="h-5 w-5 text-red-400" />
                  <span>500°C Continuous</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-slate-300" />
                  <span>Thermal Protection</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Star className="h-5 w-5 text-gray-300" />
                  <span>Oxidation Resistant</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="WBOND HR 500°C Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">500°C</div>
                  <div className="text-sm opacity-90">max temperature</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* High-Temperature Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">High-Temperature Protection Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Thermometer,
                title: "500°C Continuous Service",
                description: "Withstands continuous exposure to temperatures up to 500°C without degradation."
              },
              {
                icon: Shield,
                title: "Thermal Shock Resistance",
                description: "Excellent resistance to rapid temperature changes and thermal cycling."
              },
              {
                icon: Star,
                title: "Oxidation Protection",
                description: "Superior protection against oxidation and high-temperature corrosion."
              },
              {
                icon: Zap,
                title: "Excellent Adhesion",
                description: "Maintains strong adhesion to substrates even at extreme temperatures."
              },
              {
                icon: Eye,
                title: "Thermal Barrier Properties",
                description: "Provides thermal insulation and heat reflection capabilities."
              },
              {
                icon: Clock,
                title: "Long Service Life",
                description: "Extended durability reduces maintenance frequency in high-temperature environments."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-red-500 to-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
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
            <Thermometer className="h-6 w-6 text-red-600 mr-3" />
            High-Temperature Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Max Temperature", value: "500°C", sublabel: "(continuous service)" },
              { label: "Coverage", value: "6-8 sq.m/ltr", sublabel: "(per coat)" },
              { label: "Drying Time", value: "2-4 hours", sublabel: "(air dry)" },
              { label: "Curing", value: "Heat cure required", sublabel: "(for full performance)" },
              { label: "Film Thickness", value: "50-100 microns", sublabel: "(per coat)" },
              { label: "Thermal Cycling", value: "Excellent", sublabel: "(repeated heating/cooling)" },
              { label: "Application Temp", value: "15°C to 35°C", sublabel: "(ambient)" },
              { label: "Shelf Life", value: "2 years", sublabel: "(from manufacture)" }
            ].map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-4 border border-red-200">
                <div className="font-semibold text-slate-800 mb-1">{spec.label}</div>
                <div className="text-lg font-bold text-red-600 mb-1">{spec.value}</div>
                <div className="text-sm text-slate-600">{spec.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Applications & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">High-Temperature Applications</h3>
            <div className="space-y-4">
              {[
                "Exhaust Systems - Automotive and industrial exhaust components",
                "Industrial Furnaces - Furnace components and heat exchangers",
                "Boiler Components - Steam boilers and high-temperature piping",
                "Engine Parts - High-temperature engine components and manifolds",
                "Thermal Equipment - Heat treatment equipment and thermal processing"
              ].map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Thermal Protection Benefits</h3>
            <div className="space-y-4">
              {[
                "Extreme Temperature Protection - Withstands up to 500°C continuously",
                "Thermal Shock Resistance - Handles rapid temperature changes",
                "Oxidation Prevention - Protects against high-temperature oxidation",
                "Energy Efficiency - Thermal barrier properties improve efficiency",
                "Extended Equipment Life - Protects components from thermal damage",
                "Specialized Application - Designed for extreme temperature environments"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Extreme Temperature Protection Solutions</h3>
          <p className="text-slate-700 mb-6 text-lg max-w-2xl mx-auto">
            Protect your high-temperature equipment with WBOND HR 500°C. Get expert consultation on application 
            techniques, curing procedures, and thermal protection system design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-700 hover:to-orange-700 transition-all duration-200 shadow-lg"
            >
              Get High-Temperature Consultation
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Thermal Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WbondHr500Page;