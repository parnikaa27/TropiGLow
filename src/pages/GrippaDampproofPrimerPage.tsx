import React from 'react';
import { ArrowLeft, CheckCircle, Shield, Droplets, Clock, Thermometer, Eye, Star, Zap, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GrippaDampproofPrimerPage: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-800 via-blue-800 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-cyan-200 hover:text-white mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Droplets className="h-8 w-8 text-cyan-300" />
                <h1 className="text-5xl font-bold">GRIPPA DAMPPROOF PRIMER</h1>
              </div>
              <p className="text-cyan-200 text-xl mb-6">Advanced Moisture-Resistant Primer System</p>
              <p className="text-lg leading-relaxed mb-8">
                GRIPPA Dampproof Primer provides exceptional moisture resistance and vapor barrier properties. 
                Specially formulated for damp and moisture-prone areas, it creates an impermeable barrier that 
                prevents moisture-related paint failures and substrate damage.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Droplets className="h-5 w-5 text-cyan-300" />
                  <span>Moisture Resistant</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-blue-300" />
                  <span>Vapor Barrier</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Star className="h-5 w-5 text-indigo-300" />
                  <span>Damp Area Protection</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="GRIPPA Dampproof Primer Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">70-90</div>
                  <div className="text-sm opacity-90">sq.ft/ltr coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Dampproof Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Advanced Dampproof Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Droplets,
                title: "Moisture Resistance",
                description: "Superior resistance to moisture penetration and water vapor transmission."
              },
              {
                icon: Shield,
                title: "Vapor Barrier Properties",
                description: "Creates effective vapor barrier preventing moisture-related paint problems."
              },
              {
                icon: Zap,
                title: "Mold & Mildew Resistant",
                description: "Prevents growth of mold and mildew in damp environments."
              },
              {
                icon: Star,
                title: "Excellent Adhesion",
                description: "Superior bonding to damp and challenging substrates."
              },
              {
                icon: Eye,
                title: "Stain Blocking",
                description: "Prevents water stains and discoloration from bleeding through."
              },
              {
                icon: Clock,
                title: "Long-Term Protection",
                description: "Provides extended protection in high-moisture environments."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-cyan-200 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-cyan-200 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <Thermometer className="h-6 w-6 text-cyan-600 mr-3" />
            Dampproof Primer Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Coverage", value: "70-90 sq.ft/ltr", sublabel: "(single coat)" },
              { label: "Drying Time", value: "4-6 hours", sublabel: "(surface dry)" },
              { label: "Recoat Time", value: "8-12 hours", sublabel: "(topcoat application)" },
              { label: "Finish", value: "Dampproof Matt", sublabel: "(moisture barrier)" },
              { label: "Shelf Life", value: "2 years", sublabel: "(from manufacture)" },
              { label: "Thinning", value: "Not recommended", sublabel: "(use as supplied)" },
              { label: "Temperature", value: "10°C to 30°C", sublabel: "(application range)" },
              { label: "Humidity", value: "Up to 95% RH", sublabel: "(high humidity tolerance)" }
            ].map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-4 border border-cyan-200">
                <div className="font-semibold text-slate-800 mb-1">{spec.label}</div>
                <div className="text-lg font-bold text-cyan-600 mb-1">{spec.value}</div>
                <div className="text-sm text-slate-600">{spec.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Applications & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-cyan-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Damp Area Applications</h3>
            <div className="space-y-4">
              {[
                "Bathrooms - High-humidity areas with constant moisture exposure",
                "Kitchens - Areas exposed to steam and cooking moisture",
                "Basements - Below-grade areas prone to dampness",
                "Laundry Rooms - Utility areas with high moisture levels",
                "Coastal Properties - Buildings in high-humidity coastal environments"
              ].map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-cyan-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Moisture Protection Benefits</h3>
            <div className="space-y-4">
              {[
                "Prevents Paint Failure - Stops moisture-related paint problems",
                "Mold Prevention - Reduces risk of mold and mildew growth",
                "Long-Term Durability - Extends paint system life in damp conditions",
                "Health Benefits - Improves indoor air quality by preventing mold",
                "Cost Effective - Prevents costly remediation and repainting",
                "Professional Results - Ensures consistent performance in challenging areas"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-cyan-200 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Professional Moisture Protection Solutions</h3>
          <p className="text-slate-700 mb-6 text-lg max-w-2xl mx-auto">
            Protect against moisture problems with GRIPPA Dampproof Primer. Get expert consultation on 
            moisture control, vapor barrier systems, and damp area painting solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 shadow-lg"
            >
              Get Moisture Protection Consultation
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Dampproof Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrippaDampproofPrimerPage;