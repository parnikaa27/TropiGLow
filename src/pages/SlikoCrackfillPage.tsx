import React from 'react';
import { ArrowLeft, CheckCircle, Palette, Shield, Droplets, Clock, Thermometer, Eye, Star, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SlikoCrackfillPage: React.FC = () => {
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
                <Zap className="h-8 w-8 text-amber-300" />
                <h1 className="text-5xl font-bold">SLIKO CRACKFILL</h1>
              </div>
              <p className="text-emerald-200 text-xl mb-6">Professional Crack Repair & Filling System</p>
              <p className="text-lg leading-relaxed mb-8">
                SLIKO CRACKFILL is a specialized crack repair compound designed to fill and seal cracks in walls, 
                ceilings, and other surfaces. Its flexible formulation prevents crack reappearance while providing 
                a smooth, paintable surface for professional finishing.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Zap className="h-5 w-5 text-emerald-300" />
                  <span>Crack Repair</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-blue-300" />
                  <span>Flexible Formula</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Star className="h-5 w-5 text-cyan-300" />
                  <span>Professional Grade</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="SLIKO CRACKFILL Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">Variable</div>
                  <div className="text-sm opacity-90">coverage by crack size</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Crack Repair Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Professional Crack Repair Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Crack Filling Excellence",
                description: "Specially formulated to fill cracks of various sizes with superior adhesion."
              },
              {
                icon: Shield,
                title: "Flexible Formulation",
                description: "Flexible properties prevent crack reappearance due to structural movement."
              },
              {
                icon: Star,
                title: "Easy Application",
                description: "User-friendly consistency allows for smooth, professional application."
              },
              {
                icon: Eye,
                title: "Smooth Finish",
                description: "Creates perfectly smooth surface ready for painting or further treatment."
              },
              {
                icon: Clock,
                title: "Quick Setting",
                description: "Fast-setting formula allows for efficient crack repair and project completion."
              },
              {
                icon: Droplets,
                title: "Moisture Resistant",
                description: "Excellent moisture resistance prevents crack reopening due to water damage."
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
            Crack Repair Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Crack Width", value: "Up to 5mm", sublabel: "(maximum width)" },
              { label: "Setting Time", value: "30-60 minutes", sublabel: "(initial set)" },
              { label: "Sanding Time", value: "2-4 hours", sublabel: "(ready to sand)" },
              { label: "Overcoating", value: "4-6 hours", sublabel: "(after sanding)" },
              { label: "Shelf Life", value: "12 months", sublabel: "(from manufacture)" },
              { label: "Mixing", value: "Ready to use", sublabel: "(no mixing required)" },
              { label: "Temperature", value: "10°C to 35°C", sublabel: "(application range)" },
              { label: "Humidity", value: "Below 80% RH", sublabel: "(recommended)" }
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
            <h3 className="text-xl font-bold text-slate-800 mb-6">Crack Repair Applications</h3>
            <div className="space-y-4">
              {[
                "Wall Cracks - Interior and exterior wall crack repair",
                "Ceiling Cracks - Hairline and minor ceiling cracks",
                "Concrete Surfaces - Cracks in concrete walls and structures",
                "Plaster Repair - Cracks in plaster and rendered surfaces",
                "Renovation Work - Crack repair in restoration projects"
              ].map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-amber-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Repair Benefits</h3>
            <div className="space-y-4">
              {[
                "Permanent Solution - Prevents crack reappearance with flexible formula",
                "Professional Results - Smooth, invisible repair when painted",
                "Cost Effective - Prevents need for major repair work",
                "Easy Application - Simple application process for quick repairs",
                "Versatile Use - Suitable for various crack types and sizes",
                "Long-Lasting - Durable repair that withstands structural movement"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Instructions 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-amber-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Crack Preparation</h3>
            <div className="space-y-4">
              {[
                "Clean crack thoroughly removing all loose material and debris",
                "Widen crack slightly if necessary to ensure proper filler penetration",
                "Dampen crack area lightly to improve adhesion",
                "Ensure crack is completely dry before applying filler"
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
            <h3 className="text-xl font-bold text-slate-800 mb-6">Application Method</h3>
            <div className="space-y-4">
              {[
                "Apply filler using putty knife pressing firmly into crack",
                "Overfill crack slightly to allow for shrinkage during drying",
                "Smooth surface with putty knife removing excess material",
                "Allow proper setting time before sanding smooth",
                "Prime and paint as required for final finish"
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
              <h3 className="text-xl font-bold mb-4">Crack Types</h3>
              <div className="space-y-2">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Hairline Cracks</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Minor Cracks</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Structural Cracks</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Pack Sizes</h3>
              <div className="space-y-2">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">500g</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">1 Kg</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">5 Kg</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4" />
                  <span className="text-sm">Professional Formula</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm">Flexibility Tested</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Repair Grade</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Professional Crack Repair Solutions</h3>
          <p className="text-slate-700 mb-6 text-lg max-w-2xl mx-auto">
            Achieve permanent crack repair with SLIKO CRACKFILL. Get expert advice on crack assessment, 
            repair techniques, and preventing crack reappearance for long-lasting results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200 shadow-lg"
            >
              Get Crack Repair Consultation
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Repair Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlikoCrackfillPage;