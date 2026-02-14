import React from 'react';
import { ArrowLeft, CheckCircle, Palette, Shield, Droplets, Clock, Thermometer, Eye, Star, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WoodvibeClearCoatsPage: React.FC = () => {
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
                <Eye className="h-8 w-8 text-emerald-300" />
                <h1 className="text-5xl font-bold">WOODVIBE 2K PU CLEAR COATS</h1>
              </div>
              <p className="text-emerald-200 text-xl mb-6">Professional 2-Component Polyurethane Clear Coats</p>
              <p className="text-lg leading-relaxed mb-8">
                WOODVIBE 2K PU Clear Coats provide the ultimate protection for wood surfaces without altering the 
                natural wood appearance. These crystal-clear coatings offer exceptional durability, chemical resistance, 
                and UV protection while maintaining the natural beauty of wood grain.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Eye className="h-5 w-5 text-cyan-300" />
                  <span>Crystal Clear Finish</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Zap className="h-5 w-5 text-blue-300" />
                  <span>2K PU Technology</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-emerald-300" />
                  <span>Maximum Protection</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/wc1.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="WOODVIBE 2K PU Clear Coats Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              {/* <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">150-200</div>
                  <div className="text-sm opacity-90">sq.ft/ltr coverage</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Clear Coat Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Professional Clear Coat Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Crystal Clear Finish",
                description: "Maintains natural wood appearance while providing superior protection and enhancement."
              },
              {
                icon: Zap,
                title: "2K Polyurethane Technology",
                description: "Advanced two-component system delivers exceptional hardness and chemical resistance."
              },
              {
                icon: Star,
                title: "UV Protection",
                description: "Advanced UV stabilizers prevent yellowing and wood degradation from sunlight."
              },
              {
                icon: Shield,
                title: "Superior Durability",
                description: "Outstanding resistance to scratches, impacts, and daily wear and tear."
              },
              {
                icon: Droplets,
                title: "Chemical Resistance",
                description: "Excellent resistance to household chemicals, solvents, and cleaning agents."
              },
              {
                icon: Palette,
                title: "Multiple Gloss Levels",
                description: "Available in matt, satin, semi-gloss, and high-gloss finishes for any application."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-cyan-200 hover:shadow-xl transition-all duration-300">
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
        <div className="bg-white rounded-xl p-8 shadow-lg border border-cyan-200 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <Thermometer className="h-6 w-6 text-cyan-600 mr-3" />
            Clear Coat Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Coverage", value: "150-200 sq.ft/ltr", sublabel: "(depending on application)" },
              { label: "Drying Time", value: "30-45 minutes", sublabel: "(touch dry)" },
              { label: "Recoat Time", value: "2-4 hours", sublabel: "(between coats)" },
              { label: "Finish", value: "Matt to High Gloss", sublabel: "(crystal clear)" },
              { label: "Shelf Life", value: "2 years", sublabel: "(unmixed components)" },
              { label: "Thinning", value: "Use recommended thinner", sublabel: "(only if required)" },
              { label: "Temperature", value: "15°C to 30°C", sublabel: "(application range)" },
              { label: "Humidity", value: "Below 75% RH", sublabel: "(recommended)" }
            ].map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-4 border border-cyan-200">
                <div className="font-semibold text-slate-800 mb-1">{spec.label}</div>
                <div className="text-lg font-bold text-cyan-600 mb-1">{spec.value}</div>
                <div className="text-sm text-slate-600">{spec.sublabel}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Applications & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-cyan-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Professional Applications</h3>
            <div className="space-y-4">
              {[
                "Furniture Protection - High-end furniture and cabinetry finishing",
                "Wooden Flooring - Parquet and hardwood floor protection",
                "Interior Woodwork - Doors, windows, and architectural elements",
                "Architectural Elements - Custom millwork and decorative features",
                "Marine Wood Applications - Yacht and boat interior woodwork"
              ].map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-cyan-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Clear Coat Benefits</h3>
            <div className="space-y-4">
              {[
                "Natural Wood Appearance - Preserves and enhances natural wood beauty",
                "Maximum Protection - Superior defense against wear and environmental factors",
                "Professional Quality - Contractor and manufacturer approved performance",
                "Long Service Life - Extended durability reduces maintenance frequency",
                "Easy Maintenance - Simple cleaning and care procedures",
                "Versatile Application - Suitable for various wood types and projects"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Instructions 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-cyan-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Professional Surface Preparation</h3>
            <div className="space-y-4">
              {[
                "Sand wood surface to 220 grit for optimal smoothness and adhesion",
                "Remove all dust completely using tack cloth or compressed air",
                "Ensure wood moisture content is below 12% before application",
                "Apply wood conditioner if needed for uniform clear coat penetration"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-cyan-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-cyan-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Professional Application</h3>
            <div className="space-y-4">
              {[
                "Mix components as per recommended ratio immediately before use",
                "Apply thin, even coats using brush, roller, or spray equipment",
                "Sand lightly between coats with 320 grit sandpaper for smoothness",
                "Use within pot life period to ensure proper curing and clarity",
                "Apply in controlled environment with proper dust control and ventilation"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-cyan-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Available Options 
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-8 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Available Options</h3>
              <div className="space-y-2">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Crystal Clear</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Slight Amber Tint</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Kit Sizes</h3>
              <div className="space-y-2">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">1 Ltr Kit</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">4 Ltr Kit</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">10 Ltr Kit</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Professional Assurance</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span className="text-sm">Crystal Clear Technology</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm">Maximum Protection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Professional Grade</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Professional Wood Protection Solutions</h3>
          <p className="text-slate-700 mb-6 text-lg max-w-2xl mx-auto">
            Protect your wood surfaces with WOODVIBE 2K PU Clear Coats. Get expert consultation on application 
            techniques, finish selection, and professional wood protection methods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 shadow-lg"
            >
              Get Professional Consultation
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Clear Coat Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WoodvibeClearCoatsPage;