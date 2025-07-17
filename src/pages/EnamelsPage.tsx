import React from 'react';
import { ArrowLeft, CheckCircle, Palette, Shield, Droplets, Clock, Thermometer, Eye, Star, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EnamelsPage: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-800 via-red-800 to-pink-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-orange-200 hover:text-white mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Palette className="h-8 w-8 text-orange-300" />
                <h1 className="text-5xl font-bold">ENAMELS</h1>
              </div>
              <p className="text-orange-200 text-xl mb-6">Premium Enamel Paints for Superior Finish</p>
              <p className="text-lg leading-relaxed mb-8">
                Our premium enamel paint collection offers exceptional durability, high-gloss finish, and superior 
                protection for both interior and exterior applications. Formulated with advanced alkyd resins for 
                long-lasting beauty and performance.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Star className="h-5 w-5 text-orange-300" />
                  <span>High-Gloss Finish</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-red-300" />
                  <span>Superior Durability</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Droplets className="h-5 w-5 text-pink-300" />
                  <span>Weather Resistant</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="ENAMELS Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">100-120</div>
                  <div className="text-sm opacity-90">sq.ft/ltr coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Enamel Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Premium Enamel Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "High-Gloss Finish",
                description: "Exceptional gloss retention and mirror-like finish that enhances surface beauty."
              },
              {
                icon: Shield,
                title: "Superior Durability",
                description: "Advanced alkyd formulation provides long-lasting protection against wear and tear."
              },
              {
                icon: Droplets,
                title: "Weather Resistant",
                description: "Excellent resistance to moisture, UV rays, and extreme weather conditions."
              },
              {
                icon: Zap,
                title: "Quick Drying",
                description: "Fast-drying formula allows for efficient application and quick project completion."
              },
              {
                icon: Eye,
                title: "Excellent Flow",
                description: "Superior leveling properties ensure smooth, brush-mark-free finish."
              },
              {
                icon: Clock,
                title: "Long Service Life",
                description: "Extended durability reduces maintenance frequency and long-term costs."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-orange-200 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <Thermometer className="h-6 w-6 text-orange-600 mr-3" />
            Enamel Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Coverage", value: "100-120 sq.ft/ltr", sublabel: "(single coat)" },
              { label: "Drying Time", value: "4-6 hours", sublabel: "(surface dry)" },
              { label: "Recoat Time", value: "12-16 hours", sublabel: "(between coats)" },
              { label: "Finish", value: "High Gloss", sublabel: "(mirror finish)" },
              { label: "Shelf Life", value: "3 years", sublabel: "(from manufacture)" },
              { label: "Thinning", value: "Up to 10%", sublabel: "(with turpentine)" },
              { label: "Temperature", value: "10°C to 35°C", sublabel: "(application range)" },
              { label: "Humidity", value: "Below 80% RH", sublabel: "(recommended)" }
            ].map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-200">
                <div className="font-semibold text-slate-800 mb-1">{spec.label}</div>
                <div className="text-lg font-bold text-orange-600 mb-1">{spec.value}</div>
                <div className="text-sm text-slate-600">{spec.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Applications & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-orange-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Ideal Applications</h3>
            <div className="space-y-4">
              {[
                "Metal Surfaces - Gates, railings, and structural steel",
                "Wood Surfaces - Doors, windows, and furniture",
                "Interior Trim - Baseboards, moldings, and cabinetry",
                "Exterior Elements - Shutters, outdoor furniture",
                "Industrial Equipment - Machinery and equipment protection"
              ].map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-orange-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Key Benefits</h3>
            <div className="space-y-4">
              {[
                "Mirror-Like Finish - Exceptional gloss and smoothness",
                "Corrosion Protection - Excellent rust and corrosion resistance",
                "Easy Maintenance - Simple cleaning and touch-up procedures",
                "Versatile Application - Suitable for multiple substrates",
                "Professional Results - Contractor-grade performance",
                "Cost Effective - Long-lasting protection reduces repainting"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Instructions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-orange-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Surface Preparation</h3>
            <div className="space-y-4">
              {[
                "Clean surface thoroughly to remove dirt, grease, and loose material",
                "Sand glossy surfaces lightly to ensure proper adhesion",
                "Apply suitable primer on bare metal or wood surfaces",
                "Ensure surface is completely dry before enamel application"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-orange-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Application Method</h3>
            <div className="space-y-4">
              {[
                "Stir contents thoroughly and thin if necessary with turpentine",
                "Apply by brush or roller using long, smooth strokes",
                "Maintain wet edge during application to avoid lap marks",
                "Apply thin, even coats for best finish quality",
                "Allow proper drying time between coats for optimal results"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Available Options */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Available Colors</h3>
              <div className="space-y-2">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">White</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Black</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Red</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Blue</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Green</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Custom Colors</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Pack Sizes</h3>
              <div className="space-y-2">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">500ml</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">1 Ltr</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">4 Ltr</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">10 Ltr</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4" />
                  <span className="text-sm">Premium Grade Formula</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm">Durability Tested</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Professional Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-orange-200 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Get Professional Enamel Solutions</h3>
          <p className="text-slate-700 mb-6 text-lg max-w-2xl mx-auto">
            Achieve superior finish quality with our premium enamel paints. Get expert advice on surface preparation, 
            application techniques, and color selection for exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-700 hover:to-red-700 transition-all duration-200 shadow-lg"
            >
              Get Expert Consultation
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Enamel Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnamelsPage;