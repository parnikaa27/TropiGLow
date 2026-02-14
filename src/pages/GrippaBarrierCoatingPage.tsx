import React from 'react';
import { ArrowLeft, CheckCircle, Shield, Droplets, Clock, Thermometer, Eye, Star, Zap, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GrippaBarrierCoatingPage: React.FC = () => {
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
                <Shield className="h-8 w-8 text-red-300" />
                <h1 className="text-5xl font-bold">GRIPPA BARRIER COATING</h1>
              </div>
              <p className="text-emerald-200 text-xl mb-6">Advanced Moisture & Alkali Barrier System</p>
              <p className="text-lg leading-relaxed mb-8">
                GRIPPA Barrier Coating provides superior protection against moisture, alkali, and efflorescence. 
                This specialized coating creates an impermeable barrier that prevents substrate problems from 
                affecting topcoats, ensuring long-lasting paint system performance.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-blue-300" />
                  <span>Moisture Barrier</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Zap className="h-5 w-5 text-cyan-300" />
                  <span>Alkali Resistant</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Star className="h-5 w-5 text-emerald-300" />
                  <span>Efflorescence Control</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="GRIPPA Barrier Coating Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              {/* <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl p-4 shadow-xl">
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
        {/* Barrier Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Advanced Barrier Protection Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Moisture Barrier",
                description: "Creates impermeable barrier preventing moisture penetration and related problems."
              },
              {
                icon: Zap,
                title: "Alkali Resistance",
                description: "Superior resistance to alkaline conditions from fresh concrete and masonry."
              },
              {
                icon: Star,
                title: "Efflorescence Control",
                description: "Prevents salt deposits and white staining on painted surfaces."
              },
              {
                icon: Droplets,
                title: "Vapor Permeable",
                description: "Allows moisture vapor to escape while blocking liquid water penetration."
              },
              {
                icon: Eye,
                title: "Stain Blocking",
                description: "Prevents substrate stains and discoloration from bleeding through topcoats."
              },
              {
                icon: Clock,
                title: "Long-Term Protection",
                description: "Provides extended protection ensuring paint system longevity."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-red-200 hover:shadow-xl transition-all duration-300">
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
        <div className="bg-white rounded-xl p-8 shadow-lg border border-red-200 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <Thermometer className="h-6 w-6 text-red-600 mr-3" />
            Barrier Coating Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Coverage", value: "80-100 sq.ft/ltr", sublabel: "(single coat)" },
              { label: "Drying Time", value: "4-6 hours", sublabel: "(surface dry)" },
              { label: "Recoat Time", value: "8-12 hours", sublabel: "(topcoat application)" },
              { label: "Finish", value: "Barrier Matt", sublabel: "(protective base)" },
              { label: "Shelf Life", value: "2 years", sublabel: "(from manufacture)" },
              { label: "Thinning", value: "Up to 5%", sublabel: "(with clean water)" },
              { label: "Temperature", value: "10°C to 35°C", sublabel: "(application range)" },
              { label: "Humidity", value: "Below 85% RH", sublabel: "(recommended)" }
            ].map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-4 border border-red-200">
                <div className="font-semibold text-slate-800 mb-1">{spec.label}</div>
                <div className="text-lg font-bold text-red-600 mb-1">{spec.value}</div>
                <div className="text-sm text-slate-600">{spec.sublabel}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Applications & Benefits 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-red-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Specialized Applications</h3>
            <div className="space-y-4">
              {[
                "Fresh Concrete - New concrete surfaces with high alkalinity",
                "Masonry Walls - Brick, block, and stone surfaces prone to efflorescence",
                "Basement Walls - Below-grade surfaces with moisture issues",
                "Coastal Buildings - Structures exposed to salt and moisture",
                "Problem Substrates - Surfaces with history of paint failure"
              ].map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-red-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Barrier Protection Benefits</h3>
            <div className="space-y-4">
              {[
                "Prevents Paint Failure - Stops substrate problems from affecting topcoats",
                "Long-Term Durability - Extends paint system life significantly",
                "Cost Effective - Prevents costly repainting due to substrate issues",
                "Professional Results - Ensures consistent, high-quality finish",
                "Problem Solver - Addresses difficult substrate conditions",
                "Warranty Protection - Provides foundation for paint system warranties"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Advanced Substrate Protection Solutions</h3>
          <p className="text-slate-700 mb-6 text-lg max-w-2xl mx-auto">
            Solve challenging substrate problems with GRIPPA Barrier Coating. Get expert consultation on 
            moisture control, alkali resistance, and long-term paint system protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-teal-700 transition-all duration-200 shadow-lg"
            >
              Get Barrier Protection Consultation
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Barrier Coating Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrippaBarrierCoatingPage;