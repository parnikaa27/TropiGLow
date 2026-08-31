import React from 'react';
import { ArrowLeft, CheckCircle, Paintbrush, Shield, Droplets, Clock, Sun, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BondxPuClearCoatPage: React.FC = () => {
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
                <Paintbrush className="h-8 w-8 text-emerald-300" />
                <h1 className="text-5xl font-bold">BONDX PU CLEAR COAT</h1>
              </div>
              <p className="text-emerald-200 text-xl mb-6">High-Performance Transparent Topcoat System</p>
              <p className="text-lg leading-relaxed mb-8">
                BONDX PU Clear Coat is a high-performance transparent topcoat that offers superior protection
                while enhancing surface aesthetics. This crystal clear finish protects wood, metal, and painted
                surfaces from scratches, moisture, and UV degradation without hiding their natural beauty.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-emerald-300" />
                  <span>Scratch Resistant</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Sun className="h-5 w-5 text-cyan-300" />
                  <span>UV Protection</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Star className="h-5 w-5 text-teal-300" />
                  <span>Clear Gloss Finish</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/MARINE%20&%20PROTECTIVE/MARINE%20&%20PROTECTIVE%204.jpg"
                alt="BONDX PU Clear Coat Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              {/* <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-4 shadow-xl">
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
        {/* Clear Coat Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Transparent Protection Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Paintbrush,
                title: "Crystal Clear Finish",
                description: "Enhances the natural beauty of wood, metal, and painted surfaces."
              },
              {
                icon: Shield,
                title: "Scratch Resistance",
                description: "Protects from abrasion, scuffs, and minor surface damage."
              },
              {
                icon: Sun,
                title: "UV Resistance",
                description: "Prevents yellowing and degradation from sunlight over time."
              },
              {
                icon: Droplets,
                title: "Water Repellency",
                description: "Forms a moisture barrier for long-term surface protection."
              },
              {
                icon: Star,
                title: "Gloss Retention",
                description: "Maintains a high-gloss look and lasting aesthetic appeal."
              },
              {
                icon: Clock,
                title: "Fast Recoating",
                description: "Quick drying and recoat times keep projects moving efficiently."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
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
        <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Clear Coat Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Finish", value: "Clear Gloss / Semi-Gloss", sublabel: "(available options)" },
              { label: "Coverage", value: "80-100 sq.ft/ltr", sublabel: "(per coat)" },
              { label: "Drying Time", value: "2-3 hours", sublabel: "(touch dry)" },
              { label: "Recoat Time", value: "6-8 hours", sublabel: "(between coats)" }
            ].map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 border border-emerald-200">
                <div className="font-semibold text-slate-800 mb-1">{spec.label}</div>
                <div className="text-lg font-bold text-emerald-600 mb-1">{spec.value}</div>
                <div className="text-sm text-slate-600">{spec.sublabel}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Applications & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Clear Coat Applications</h3>
            <div className="space-y-4">
              {[
                "Wood Furniture & Fixtures - Tables, doors, and crafted woodwork",
                "Decorative Metalwork - Railings, grilles, and ornamental features",
                "Industrial Machinery - Protective clear finish over painted equipment",
                "Interior Trim & Cabinetry - Skirtings, panels, and kitchen cabinets",
                "Painted Surfaces - Transparent protection over decorative coatings"
              ].map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Clear Coat Benefits</h3>
            <div className="space-y-4">
              {[
                "Long-Lasting Protection - Durable finish that guards against daily wear",
                "Elegant Finish - Professional, transparent look that showcases surfaces",
                "Fast Drying - Quick drying and recoating for efficient application",
                "Excellent Adhesion - Superior bonding and smooth flow on all substrates",
                "Non-Yellowing Formula - Stays crystal clear without discoloration",
                "Professional Grade - Industrial-strength performance standards"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Professional Clear Coat Solutions</h3>
          <p className="text-slate-700 mb-6 text-lg max-w-2xl mx-auto">
            Elevate your finishing standards with BONDX PU Clear Coat. Get expert consultation on application
            techniques, surface preparation, and transparent protection systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-lg"
            >
              Get Clear Coat Consultation
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Clear Coat Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BondxPuClearCoatPage;
