import React from 'react';
import { ArrowLeft, CheckCircle, Palette, Shield, Droplets, Clock, Thermometer, Eye, Star, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SlikoAcrylicPuttyPage: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-800 via-slate-800 to-zinc-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-200 hover:text-white mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Palette className="h-8 w-8 text-gray-300" />
                <h1 className="text-5xl font-bold">SLIKO ACRYLIC INT/EXT PUTTY</h1>
              </div>
              <p className="text-gray-200 text-xl mb-6">Premium Acrylic Wall Putty for Interior & Exterior</p>
              <p className="text-lg leading-relaxed mb-8">
                SLIKO Acrylic Putty is a high-performance wall putty suitable for both interior and exterior applications. 
                Formulated with premium acrylic polymers, it provides excellent adhesion, smooth finish, and superior 
                durability for perfect surface preparation.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Star className="h-5 w-5 text-gray-300" />
                  <span>Interior & Exterior</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-slate-300" />
                  <span>Superior Adhesion</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Eye className="h-5 w-5 text-zinc-300" />
                  <span>Smooth Finish</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="SLIKO Acrylic Putty Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-gray-500 to-slate-600 rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">15-20</div>
                  <div className="text-sm opacity-90">sq.ft/kg coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Putty Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Premium Acrylic Putty Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Dual Application",
                description: "Suitable for both interior and exterior surfaces with consistent performance."
              },
              {
                icon: Shield,
                title: "Superior Adhesion",
                description: "Excellent bonding to various substrates ensuring long-lasting performance."
              },
              {
                icon: Eye,
                title: "Smooth Finish",
                description: "Creates perfectly smooth surface ready for premium paint application."
              },
              {
                icon: Droplets,
                title: "Water Resistant",
                description: "Excellent water resistance makes it suitable for exterior applications."
              },
              {
                icon: Zap,
                title: "Easy Sanding",
                description: "Sands easily to achieve desired smoothness without clogging sandpaper."
              },
              {
                icon: Clock,
                title: "Quick Drying",
                description: "Fast-drying formula allows for efficient project completion."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-gray-500 to-slate-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <Thermometer className="h-6 w-6 text-gray-600 mr-3" />
            Acrylic Putty Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Coverage", value: "15-20 sq.ft/kg", sublabel: "(depends on surface)" },
              { label: "Drying Time", value: "4-6 hours", sublabel: "(surface dry)" },
              { label: "Sanding Time", value: "6-8 hours", sublabel: "(ready to sand)" },
              { label: "Overcoating", value: "6-24 hours", sublabel: "(after sanding)" },
              { label: "Shelf Life", value: "12 months", sublabel: "(from manufacture)" },
              { label: "Mixing", value: "Ready to use", sublabel: "(no mixing required)" },
              { label: "Temperature", value: "10°C to 35°C", sublabel: "(application range)" },
              { label: "Humidity", value: "Below 85% RH", sublabel: "(recommended)" }
            ].map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-lg p-4 border border-gray-200">
                <div className="font-semibold text-slate-800 mb-1">{spec.label}</div>
                <div className="text-lg font-bold text-gray-600 mb-1">{spec.value}</div>
                <div className="text-sm text-slate-600">{spec.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Applications & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Versatile Applications</h3>
            <div className="space-y-4">
              {[
                "Interior Walls - Living rooms, bedrooms, and office spaces",
                "Exterior Walls - Building facades and outdoor surfaces",
                "Concrete Surfaces - New and existing concrete substrates",
                "Masonry Walls - Brick, block, and stone surfaces",
                "Renovation Projects - Surface repair and preparation work"
              ].map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Surface Preparation Benefits</h3>
            <div className="space-y-4">
              {[
                "Perfect Smoothness - Creates ideal surface for premium paint finishes",
                "Crack Filling - Effectively fills minor cracks and imperfections",
                "Cost Effective - Reduces paint consumption with better surface preparation",
                "Professional Results - Ensures high-quality paint system performance",
                "Easy Application - User-friendly consistency for smooth application",
                "Versatile Use - Single product for both interior and exterior needs"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Instructions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Surface Preparation</h3>
            <div className="space-y-4">
              {[
                "Ensure surface is clean, dry, and free from dust and loose material",
                "Remove any loose or flaking paint from previously painted surfaces",
                "Fill large cracks and holes with suitable filler before putty application",
                "Prime porous surfaces if required for optimal adhesion"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Application Method</h3>
            <div className="space-y-4">
              {[
                "Apply putty using putty knife or trowel in thin, even coats",
                "Work in manageable sections ensuring consistent thickness",
                "Allow proper drying time before applying subsequent coats",
                "Sand smooth with appropriate grit sandpaper when fully dry",
                "Remove all dust before applying primer or paint"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Available Options */}
        <div className="bg-gradient-to-r from-gray-600 to-slate-600 rounded-xl p-8 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Available Types</h3>
              <div className="space-y-2">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Interior Grade</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Exterior Grade</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Universal Grade</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Pack Sizes</h3>
              <div className="space-y-2">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">1 Kg</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">5 Kg</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">20 Kg</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">40 Kg</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4" />
                  <span className="text-sm">Premium Acrylic Formula</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm">Adhesion Tested</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Professional Grade</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Perfect Surface Preparation Solutions</h3>
          <p className="text-slate-700 mb-6 text-lg max-w-2xl mx-auto">
            Achieve professional surface preparation with SLIKO Acrylic Putty. Get expert advice on application 
            techniques, surface preparation, and achieving perfect smoothness for premium paint finishes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-gray-600 to-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-gray-700 hover:to-slate-700 transition-all duration-200 shadow-lg"
            >
              Get Surface Preparation Consultation
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Putty Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlikoAcrylicPuttyPage;