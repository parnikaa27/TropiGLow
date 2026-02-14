import React from 'react';
import { ArrowLeft, CheckCircle, Palette, Shield, Droplets, Clock, Thermometer, Eye, Star, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const InteriorTexturedFinishesPage: React.FC = () => {
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
                <Palette className="h-8 w-8 text-purple-300" />
                <h1 className="text-5xl font-bold">INTERIOR TEXTURED FINISHES</h1>
              </div>
              <p className="text-emerald-200 text-xl mb-6">Decorative Textured Coatings for Interior Spaces</p>
              <p className="text-lg leading-relaxed mb-8">
                Create stunning visual effects with our range of interior textured finishes. From subtle textures 
                to bold architectural statements, our products offer unlimited creative possibilities for interior 
                walls and decorative applications.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Palette className="h-5 w-5 text-emerald-300" />
                  <span>Multiple Texture Patterns</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Star className="h-5 w-5 text-cyan-300" />
                  <span>Decorative Effects</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Eye className="h-5 w-5 text-blue-300" />
                  <span>Easy Maintenance</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/it1.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Interior Textured Finishes Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              {/* <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">80-100</div>
                  <div className="text-sm opacity-90">sq.ft/ltr coverage</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Texture Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Interior Texture Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: "Multiple Texture Patterns",
                description: "Wide variety of texture patterns from fine to coarse for any design requirement."
              },
              {
                icon: Shield,
                title: "Durable Formulation",
                description: "High-quality binders ensure long-lasting texture integrity and performance."
              },
              {
                icon: Droplets,
                title: "Breathable Formulation",
                description: "Allows moisture vapor transmission while maintaining decorative appearance."
              },
              {
                icon: Eye,
                title: "Easy Maintenance",
                description: "Simple cleaning procedures maintain texture appearance and performance."
              },
              {
                icon: Star,
                title: "Customizable Effects",
                description: "Various application techniques create unique decorative effects and patterns."
              },
              {
                icon: Clock,
                title: "Quick Application",
                description: "Efficient application process allows for faster project completion."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-300">
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
        <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-200 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <Thermometer className="h-6 w-6 text-purple-600 mr-3" />
            Texture Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Texture Depth", value: "1-5mm", sublabel: "(depending on pattern)" },
              { label: "Coverage", value: "80-100 sq.ft/ltr", sublabel: "(varies by texture)" },
              { label: "Working Time", value: "20-30 minutes", sublabel: "(open time)" },
              { label: "Curing Time", value: "24-48 hours", sublabel: "(full cure)" },
              { label: "Temperature", value: "10°C to 35°C", sublabel: "(application range)" },
              { label: "Humidity", value: "Below 80% RH", sublabel: "(recommended)" },
              { label: "Substrate", value: "Interior Walls", sublabel: "(prepared surfaces)" },
              { label: "Finish", value: "Textured Matt", sublabel: "(decorative)" }
            ].map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
                <div className="font-semibold text-slate-800 mb-1">{spec.label}</div>
                <div className="text-lg font-bold text-purple-600 mb-1">{spec.value}</div>
                <div className="text-sm text-slate-600">{spec.sublabel}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Applications & Benefits 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Interior Applications</h3>
            <div className="space-y-4">
              {[
                "Feature Walls - Accent walls and focal points in living spaces",
                "Commercial Interiors - Hotels, restaurants, and retail spaces",
                "Residential Decorating - Living rooms, bedrooms, and dining areas",
                "Architectural Accents - Columns, alcoves, and decorative elements",
                "Designer Interiors - High-end residential and commercial projects"
              ].map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Decorative Benefits</h3>
            <div className="space-y-4">
              {[
                "Visual Interest - Creates depth and dimension in interior spaces",
                "Design Flexibility - Unlimited creative possibilities for designers",
                "Hide Imperfections - Conceals minor wall imperfections effectively",
                "Acoustic Properties - Textured surfaces can improve room acoustics",
                "Easy Touch-ups - Simple repair and maintenance procedures",
                "Cost Effective - Affordable way to create premium decorative effects"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Application Instructions 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Surface Preparation</h3>
            <div className="space-y-4">
              {[
                "Ensure surface is clean, dry, and free from loose material",
                "Fill cracks and holes with suitable filler and sand smooth",
                "Apply primer if required for optimal adhesion and performance",
                "Mask adjacent surfaces to protect from texture overspray"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Texture Application</h3>
            <div className="space-y-4">
              {[
                "Mix texture material thoroughly to ensure uniform consistency",
                "Apply base coat evenly using roller or brush as required",
                "Create texture pattern using appropriate tools and techniques",
                "Work in manageable sections maintaining wet edge throughout",
                "Allow proper curing time before applying topcoat if required"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Available Options 
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Texture Patterns</h3>
              <div className="space-y-2">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Fine Texture</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Medium Texture</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Coarse Texture</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Custom Patterns</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Pack Sizes</h3>
              <div className="space-y-2">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">5 Kg</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">10 Kg</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">20 Kg</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Palette className="h-4 w-4" />
                  <span className="text-sm">Decorative Grade</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm">Durable Formulation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Professional Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Create Stunning Interior Textures</h3>
          <p className="text-slate-700 mb-6 text-lg max-w-2xl mx-auto">
            Transform your interior spaces with our decorative textured finishes. Get expert consultation on 
            pattern selection, application techniques, and design possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-teal-700 transition-all duration-200 shadow-lg"
            >
              Get Design Consultation
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Texture Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteriorTexturedFinishesPage;