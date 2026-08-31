import React from 'react';
import { ArrowLeft, CheckCircle, Paintbrush, Shield, Droplets, Clock, Sun, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BondxPuTopcoatPage: React.FC = () => {
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
                <h1 className="text-5xl font-bold">BONDX PU TOPCOAT</h1>
              </div>
              <p className="text-emerald-200 text-xl mb-6">Premium Polyurethane Topcoat System</p>
              <p className="text-lg leading-relaxed mb-8">
                BONDX PU Topcoat is a premium polyurethane topcoat offering superior gloss, weather resistance,
                and long-lasting color retention. This advanced topcoat system delivers a flawless, durable finish
                that stands up to harsh sunlight, coastal conditions, and industrial wear.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-emerald-300" />
                  <span>High Durability</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Sun className="h-5 w-5 text-cyan-300" />
                  <span>UV Resistant</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Star className="h-5 w-5 text-teal-300" />
                  <span>Gloss & Color Retention</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/MARINE%20&%20PROTECTIVE/MARINE%20&%20PROTECTIVE%203.jpg"
                alt="BONDX PU Topcoat Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              {/* <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">90-110</div>
                  <div className="text-sm opacity-90">sq.ft/ltr coverage</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* PU Topcoat Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Premium PU Topcoat Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sun,
                title: "UV Resistance",
                description: "Protects surfaces from harsh sunlight and prevents color fading over time."
              },
              {
                icon: Droplets,
                title: "Weather Resistance",
                description: "Stands up to rain, humidity, and demanding coastal conditions."
              },
              {
                icon: Star,
                title: "Gloss & Aesthetic",
                description: "Retains gloss and sheen for long periods with lasting visual appeal."
              },
              {
                icon: Shield,
                title: "High Durability",
                description: "Resists abrasion, impact, and industrial wear in demanding environments."
              },
              {
                icon: Paintbrush,
                title: "Smooth Finish",
                description: "Gives a flawless, professional appearance to all coated surfaces."
              },
              {
                icon: Clock,
                title: "Fast Drying",
                description: "Quick touch-dry and recoat times allow for efficient project completion."
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
          <h3 className="text-2xl font-bold text-slate-800 mb-8">PU Topcoat Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Finish", value: "High Gloss / Semi-Gloss", sublabel: "(available options)" },
              { label: "Coverage", value: "90-110 sq.ft/ltr", sublabel: "(per coat)" },
              { label: "Drying Time", value: "2-3 hours", sublabel: "(touch dry)" },
              { label: "Curing Time", value: "7 days", sublabel: "(full cure)" }
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
            <h3 className="text-xl font-bold text-slate-800 mb-6">PU Topcoat Applications</h3>
            <div className="space-y-4">
              {[
                "Industrial Steel Structures - Frameworks, towers, and fabricated steelwork",
                "Machinery & Equipment - Plant machinery and industrial equipment finishes",
                "Automotive & Transport - Vehicle bodies, trailers, and transport fleets",
                "Architectural Metalwork - Railings, gates, facades, and decorative steel",
                "Marine & Coastal Assets - Surfaces exposed to salt air and humidity"
              ].map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">PU Topcoat Benefits</h3>
            <div className="space-y-4">
              {[
                "Exceptional Gloss Retention - Maintains a rich, glossy finish for years",
                "Low Maintenance - Easy cleaning keeps surfaces looking new",
                "Wide Color Range - Available in an extensive palette of colors",
                "Scratch & Chemical Resistance - Protects against everyday wear and spills",
                "Weatherproof Performance - Reliable protection in all climates",
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
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Professional PU Topcoat Solutions</h3>
          <p className="text-slate-700 mb-6 text-lg max-w-2xl mx-auto">
            Achieve a durable, glossy finish with BONDX PU Topcoat. Get expert consultation on application
            techniques, surface preparation, and coating system design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-lg"
            >
              Get Topcoat Consultation
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Topcoat Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BondxPuTopcoatPage;
