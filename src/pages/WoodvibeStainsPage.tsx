import React from 'react';
import { ArrowLeft, CheckCircle, Palette, Shield, Droplets, Clock, Thermometer, Eye, Star, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WoodvibeStainsPage: React.FC = () => {
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
                <Palette className="h-8 w-8 text-emerald-300" />
                <h1 className="text-5xl font-bold">WOODVIBE 2K PU WOOD STAINS</h1>
              </div>
              <p className="text-emerald-200 text-xl mb-6">Professional 2-Component Polyurethane Wood Stains</p>
              <p className="text-lg leading-relaxed mb-8">
                WOODVIBE 2K PU Wood Stains represent the ultimate in wood finishing technology. These two-component 
                polyurethane stains penetrate deep into wood fibers while providing a protective surface coating. 
                Available in matt to high gloss finishes, they enhance natural wood grain while providing exceptional 
                durability and chemical resistance.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Zap className="h-5 w-5 text-cyan-300" />
                  <span>2K PU Technology</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-blue-300" />
                  <span>Superior Durability</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Eye className="h-5 w-5 text-emerald-300" />
                  <span>Wood Enhancement</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/WOOD%20COATINGS/WOOD%20COATING%201.jpg"
                alt="WOODVIBE 2K PU Wood Stains Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              {/* <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-4 shadow-xl">
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
        {/* Professional Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Professional Wood Finishing Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "2K Polyurethane Technology",
                description: "Advanced two-component system provides superior hardness and chemical resistance."
              },
              {
                icon: Eye,
                title: "Deep Wood Penetration",
                description: "Penetrates deep into wood fibers while providing surface protection and enhancement."
              },
              {
                icon: Shield,
                title: "Superior Scratch Resistance",
                description: "Exceptional hardness and durability protect against scratches and daily wear."
              },
              {
                icon: Droplets,
                title: "Chemical Resistance",
                description: "Outstanding resistance to household chemicals, solvents, and cleaning agents."
              },
              {
                icon: Star,
                title: "UV Protection",
                description: "Advanced UV stabilizers prevent color fading and wood degradation."
              },
              {
                icon: Palette,
                title: "Multiple Finish Options",
                description: "Available in matt, satin, semi-gloss, and high-gloss finishes for any application."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-amber-200 hover:shadow-xl transition-all duration-300">
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
        <div className="bg-white rounded-xl p-8 shadow-lg border border-amber-200 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <Thermometer className="h-6 w-6 text-amber-600 mr-3" />
            Professional Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Coverage", value: "150-200 sq.ft/ltr", sublabel: "(depending on wood type)" },
              { label: "Drying Time", value: "30-45 minutes", sublabel: "(touch dry)" },
              { label: "Recoat Time", value: "2-4 hours", sublabel: "(between coats)" },
              { label: "Finish", value: "Matt to High Gloss", sublabel: "(multiple options)" },
              { label: "Shelf Life", value: "2 years", sublabel: "(unmixed components)" },
              { label: "Thinning", value: "Use recommended thinner", sublabel: "(only if required)" },
              { label: "Temperature", value: "15°C to 30°C", sublabel: "(application range)" },
              { label: "Humidity", value: "Below 75% RH", sublabel: "(recommended)" }
            ].map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-4 border border-amber-200">
                <div className="font-semibold text-slate-800 mb-1">{spec.label}</div>
                <div className="text-lg font-bold text-amber-600 mb-1">{spec.value}</div>
                <div className="text-sm text-slate-600">{spec.sublabel}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Applications & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-amber-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Professional Applications</h3>
            <div className="space-y-4">
              {[
                "Furniture Manufacturing - High-end furniture and cabinetry",
                "Interior Woodwork - Doors, windows, and architectural elements",
                "Wooden Flooring - Parquet and hardwood floor finishing",
                "Architectural Millwork - Custom woodwork and trim",
                "High-End Joinery - Premium joinery and carpentry projects"
              ].map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-amber-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Professional Benefits</h3>
            <div className="space-y-4">
              {[
                "Professional Grade Quality - Contractor and manufacturer approved",
                "Exceptional Durability - Long-lasting performance in demanding applications",
                "Enhanced Wood Beauty - Brings out natural wood grain and character",
                "Long Service Life - Reduces maintenance and refinishing frequency",
                "Easy Maintenance - Simple cleaning and care procedures",
                "Versatile Application - Suitable for various wood types and projects"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Instructions 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-amber-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Professional Surface Preparation</h3>
            <div className="space-y-4">
              {[
                "Sand wood surface progressively from 120 to 220 grit for optimal finish",
                "Remove all dust and debris completely using tack cloth or vacuum",
                "Ensure wood moisture content is below 12% before application",
                "Apply wood conditioner if required for even stain penetration"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-amber-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Professional Application</h3>
            <div className="space-y-4">
              {[
                "Mix components as per recommended ratio immediately before use",
                "Apply thin, even coats using brush, roller, or spray equipment",
                "Sand lightly between coats with 320 grit sandpaper for smoothness",
                "Use within pot life period to ensure proper curing and performance",
                "Apply in dust-free environment with proper ventilation"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Available Options 
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-8 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Available Colors</h3>
              <div className="space-y-2">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Clear</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Natural Wood Tones</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Custom Colors Available</span>
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
                  <Zap className="h-4 w-4" />
                  <span className="text-sm">2K PU Technology</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm">Professional Grade</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Quality Tested</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Professional Wood Finishing Solutions</h3>
          <p className="text-slate-700 mb-6 text-lg max-w-2xl mx-auto">
            Transform your wood projects with WOODVIBE 2K PU Wood Stains. Get expert consultation on application 
            techniques, color selection, and professional finishing methods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200 shadow-lg"
            >
              Get Professional Consultation
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Wood Stain Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WoodvibeStainsPage;