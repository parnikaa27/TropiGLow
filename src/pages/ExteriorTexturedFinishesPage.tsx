import React from 'react';
import { ArrowLeft, CheckCircle, Palette, Shield, Droplets, Clock, Thermometer, Eye, Star, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ExteriorTexturedFinishesPage: React.FC = () => {
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
                <Sun className="h-8 w-8 text-yellow-300" />
                <h1 className="text-5xl font-bold">EXTERIOR TEXTURED FINISHES</h1>
              </div>
              <p className="text-emerald-200 text-xl mb-6">Weather-Resistant Decorative Exterior Coatings</p>
              <p className="text-lg leading-relaxed mb-8">
                Transform exterior facades with our weather-resistant textured finishes. Designed to withstand harsh 
                weather conditions while providing stunning architectural effects, these coatings offer superior 
                protection and aesthetic appeal for exterior applications.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Sun className="h-5 w-5 text-blue-300" />
                  <span>Weather Resistant</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-cyan-300" />
                  <span>UV Protection</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Palette className="h-5 w-5 text-emerald-300" />
                  <span>Architectural Effects</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/et1.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Exterior Textured Finishes Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              {/* <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">70-90</div>
                  <div className="text-sm opacity-90">sq.ft/ltr coverage</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Weather-Resistant Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Weather-Resistant Texture Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sun,
                title: "UV Resistance",
                description: "Advanced UV stabilizers protect against color fading and surface degradation."
              },
              {
                icon: Shield,
                title: "Weather Protection",
                description: "Superior resistance to rain, wind, and extreme temperature variations."
              },
              {
                icon: Droplets,
                title: "Water Repellent",
                description: "Hydrophobic properties prevent water penetration while allowing breathability."
              },
              {
                icon: Star,
                title: "Crack Bridging",
                description: "Flexible formulation bridges minor cracks and prevents water infiltration."
              },
              {
                icon: Eye,
                title: "Self-Cleaning",
                description: "Surface technology helps wash away dirt and pollutants naturally."
              },
              {
                icon: Clock,
                title: "Long Service Life",
                description: "Extended durability reduces maintenance frequency and long-term costs."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-teal-200 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-teal-500 to-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications 
        <div className="bg-white rounded-xl p-8 shadow-lg border border-orange-200 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <Thermometer className="h-6 w-6 text-orange-600 mr-3" />
            Exterior Texture Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Texture Depth", value: "2-8mm", sublabel: "(depending on pattern)" },
              { label: "Coverage", value: "70-90 sq.ft/ltr", sublabel: "(varies by texture)" },
              { label: "Working Time", value: "15-25 minutes", sublabel: "(open time)" },
              { label: "Curing Time", value: "48-72 hours", sublabel: "(full cure)" },
              { label: "Temperature", value: "5°C to 40°C", sublabel: "(application range)" },
              { label: "Humidity", value: "Below 85% RH", sublabel: "(recommended)" },
              { label: "Substrate", value: "Exterior Walls", sublabel: "(prepared surfaces)" },
              { label: "Finish", value: "Textured Matt", sublabel: "(weather resistant)" }
            ].map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-4 border border-orange-200">
                <div className="font-semibold text-slate-800 mb-1">{spec.label}</div>
                <div className="text-lg font-bold text-orange-600 mb-1">{spec.value}</div>
                <div className="text-sm text-slate-600">{spec.sublabel}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Applications & Benefits 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-orange-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Exterior Applications</h3>
            <div className="space-y-4">
              {[
                "Building Facades - Commercial and residential exterior walls",
                "Architectural Features - Columns, parapets, and decorative elements",
                "Boundary Walls - Compound walls and perimeter structures",
                "Industrial Buildings - Warehouses and manufacturing facilities",
                "Coastal Properties - Buildings exposed to marine environments"
              ].map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-orange-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Weather Protection Benefits</h3>
            <div className="space-y-4">
              {[
                "Superior Weather Resistance - Withstands harsh outdoor conditions",
                "Thermal Insulation - Reduces heat transfer through exterior walls",
                "Crack Concealment - Hides minor structural imperfections effectively",
                "Low Maintenance - Self-cleaning properties reduce upkeep requirements",
                "Architectural Enhancement - Creates stunning visual impact and depth",
                "Cost Effective - Long-lasting protection reduces repainting frequency"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>  */}

        {/* Application Instructions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-teal-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Exterior Surface Preparation</h3>
            <div className="space-y-4">
              {[
                "Clean surface thoroughly to remove dirt, dust, and loose material",
                "Repair cracks and holes with suitable exterior filler and allow to cure",
                "Apply weather-resistant primer for optimal adhesion and performance",
                "Ensure surface is completely dry and free from moisture before application"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-teal-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Weather-Conscious Application</h3>
            <div className="space-y-4">
              {[
                "Apply during favorable weather conditions with no rain forecast",
                "Avoid application in direct sunlight or extreme temperatures",
                "Create texture pattern using appropriate tools and techniques",
                "Work systematically maintaining consistent pattern and depth",
                "Allow proper curing time before exposure to harsh weather conditions"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Available Options 
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl p-8 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Texture Patterns</h3>
              <div className="space-y-2">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Stone Texture</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Sand Finish</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Rough Cast</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Custom Patterns</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Pack Sizes</h3>
              <div className="space-y-2">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">10 Kg</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">20 Kg</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">40 Kg</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Weather Assurance</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Sun className="h-4 w-4" />
                  <span className="text-sm">UV Resistant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm">Weather Tested</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Exterior Grade</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Transform Your Exterior with Weather-Resistant Textures</h3>
          <p className="text-slate-700 mb-6 text-lg max-w-2xl mx-auto">
            Create stunning exterior facades with our weather-resistant textured finishes. Get expert consultation on 
            pattern selection, application techniques, and weather protection strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-teal-700 transition-all duration-200 shadow-lg"
            >
              Get Weather Protection Consultation
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Exterior Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExteriorTexturedFinishesPage;