import React from 'react';
import { ArrowLeft, CheckCircle, Palette, Shield, Droplets, Clock, Thermometer, Eye, Star, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StepinFloorCoatingSystemPage: React.FC = () => {
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
                <h1 className="text-5xl font-bold">STEPIN FLOOR COATING SYSTEM</h1>
              </div>
              <p className="text-slate-200 text-xl mb-6">Industrial Floor Coating Solution</p>
              <p className="text-lg leading-relaxed mb-8">
                STEPIN Floor Coating System provides comprehensive protection for industrial and commercial floors. 
                This advanced epoxy-based system offers exceptional durability, chemical resistance, and easy 
                maintenance for high-traffic areas and demanding industrial environments.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-blue-300" />
                  <span>Industrial Strength</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Zap className="h-5 w-5 text-slate-300" />
                  <span>Chemical Resistant</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Star className="h-5 w-5 text-gray-300" />
                  <span>Easy Maintenance</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="STEPIN Floor Coating System Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-slate-500 to-gray-600 rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">4-6</div>
                  <div className="text-sm opacity-90">sq.m/ltr coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Floor System Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Industrial Floor System Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Industrial Strength Durability",
                description: "Exceptional resistance to heavy traffic, impact, and industrial wear."
              },
              {
                icon: Zap,
                title: "Chemical Resistance",
                description: "Outstanding resistance to acids, alkalis, solvents, and industrial chemicals."
              },
              {
                icon: Star,
                title: "Easy Maintenance",
                description: "Seamless surface allows for easy cleaning and maintenance procedures."
              },
              {
                icon: Eye,
                title: "Anti-Slip Options",
                description: "Available with anti-slip additives for enhanced safety in wet conditions."
              },
              {
                icon: Droplets,
                title: "Moisture Resistance",
                description: "Excellent resistance to water, humidity, and moisture penetration."
              },
              {
                icon: Clock,
                title: "Fast Installation",
                description: "Quick application and curing allows for minimal downtime."
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
            Floor System Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Coverage", value: "4-6 sq.m/ltr", sublabel: "(per coat)" },
              { label: "Drying Time", value: "8-12 hours", sublabel: "(surface dry)" },
              { label: "Curing Time", value: "7 days", sublabel: "(full cure)" },
              { label: "Film Thickness", value: "300-500 microns", sublabel: "(total system)" },
              { label: "Service Life", value: "10-15 years", sublabel: "(industrial use)" },
              { label: "Compressive Strength", value: ">80 MPa", sublabel: "(after cure)" },
              { label: "Temperature", value: "10°C to 30°C", sublabel: "(application range)" },
              { label: "Humidity", value: "Below 75% RH", sublabel: "(recommended)" }
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
                "Manufacturing Facilities - Production floors and assembly areas",
                "Warehouses - Storage and distribution center floors",
                "Chemical Plants - Areas exposed to chemical spills and contamination",
                "Food Processing - Hygienic floors for food production facilities",
                "Automotive - Service centers and manufacturing floors"
              ].map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Floor System Benefits</h3>
            <div className="space-y-4">
              {[
                "Maximum Durability - Withstands heavy industrial traffic and abuse",
                "Chemical Protection - Excellent resistance to industrial chemicals",
                "Easy Cleaning - Seamless surface simplifies maintenance procedures",
                "Safety Features - Anti-slip options enhance workplace safety",
                "Cost Effective - Long service life reduces replacement costs",
                "Professional Installation - Expert application ensures optimal performance"
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
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Professional Industrial Floor Solutions</h3>
          <p className="text-slate-700 mb-6 text-lg max-w-2xl mx-auto">
            Transform your industrial floors with STEPIN Floor Coating System. Get expert consultation on 
            system design, surface preparation, and application for maximum performance and durability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-slate-700 hover:to-gray-700 transition-all duration-200 shadow-lg"
            >
              Get Floor System Consultation
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Floor Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepinFloorCoatingSystemPage;