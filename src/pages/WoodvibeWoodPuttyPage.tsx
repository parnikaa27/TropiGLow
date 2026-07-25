import React from 'react';
import { ArrowLeft, CheckCircle, Palette, Shield, Droplets, Clock, Thermometer, Eye, Star, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WoodvibeWoodPuttyPage: React.FC = () => {
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
                <Palette className="h-8 w-8 text-gray-300" />
                <h1 className="text-5xl font-bold">WOOD VIBE WOOD PUTTY</h1>
              </div>
              <p className="text-emerald-200 text-xl mb-6">Wood Putty for Grain Filling &amp; Repair</p>
              <p className="text-lg leading-relaxed mb-8">
                Wood Vibe Wood Putty is a specialized wood putty that fills grain, nail holes, cracks and imperfections
                in wooden surfaces for a flawless result. It sands smooth easily and accepts wood stains and finishes
                evenly, blending seamlessly with the natural look of your woodwork.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Star className="h-5 w-5 text-emerald-300" />
                  <span>Grain &amp; Hole Filling</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-cyan-300" />
                  <span>Strong Wood Adhesion</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Eye className="h-5 w-5 text-blue-300" />
                  <span>Takes Stain Evenly</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Wood Vibe Wood Putty Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Putty Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Wood Putty Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Grain & Hole Filling",
                description: "Fills wood grain, nail holes, cracks and imperfections for a flawless surface."
              },
              {
                icon: Zap,
                title: "Easy Sanding",
                description: "Sands smooth effortlessly without clogging sandpaper for a fine finish."
              },
              {
                icon: Eye,
                title: "Takes Stain Evenly",
                description: "Accepts wood stains and finishes evenly to blend with natural wood."
              },
              {
                icon: Shield,
                title: "Strong Adhesion to Wood",
                description: "Bonds firmly to wooden surfaces ensuring durable, long-lasting repairs."
              },
              {
                icon: Droplets,
                title: "Minimal Shrinkage",
                description: "Cures with minimal shrinkage to keep repaired areas level and stable."
              },
              {
                icon: CheckCircle,
                title: "Smooth Finish",
                description: "Creates a perfectly smooth surface ready for staining or painting."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
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
        </div> */}

        {/* Applications & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Versatile Applications</h3>
            <div className="space-y-4">
              {[
                "Furniture - Repairing scratches, dents, and worn edges on wooden furniture",
                "Doors & Windows - Filling gaps, joints, and holes in wooden frames",
                "Flooring - Patching cracks and gaps in hardwood and parquet floors",
                "Cabinetry - Smoothing nail holes and seams in cabinets and shelving",
                "Woodcraft Projects - Surface repair and preparation for finishing work"
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
                "Perfect Smoothness - Creates ideal surface for stain and finish application",
                "Grain Filling - Effectively fills open grain, nail holes, and minor cracks",
                "Even Stain Uptake - Accepts stains and finishes uniformly with the wood",
                "Professional Results - Ensures flawless, seamless woodwork repairs",
                "Easy Application - User-friendly consistency for smooth application",
                "Minimal Shrinkage - Keeps repaired areas level for lasting results"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Instructions
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
        </div> */}

        {/* Available Options
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
        </div> */}

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Flawless Wood Repair Solutions</h3>
          <p className="text-slate-700 mb-6 text-lg max-w-2xl mx-auto">
            Achieve professional wood repairs with Wood Vibe Wood Putty. Get expert advice on grain filling,
            sanding, and achieving even stain uptake for a flawless finish on all your woodwork.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-gray-600 to-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-gray-700 hover:to-slate-700 transition-all duration-200 shadow-lg"
            >
              Get Wood Repair Consultation
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

export default WoodvibeWoodPuttyPage;
