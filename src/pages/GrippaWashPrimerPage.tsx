import React from 'react';
import { ArrowLeft, CheckCircle, Shield, Droplets, Clock, Thermometer, Eye, Star, Zap, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GrippaWashPrimerPage: React.FC = () => {
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
                <Layers className="h-8 w-8 text-blue-300" />
                <h1 className="text-5xl font-bold">GRIPPA 2K WASH PRIMER</h1>
              </div>
              <p className="text-emerald-200 text-xl mb-6">Two-Component Etch/Wash Primer for Metal</p>
              <p className="text-lg leading-relaxed mb-8">
                GRIPPA 2K Wash Primer is a two-component wash/etch primer that promotes outstanding adhesion on
                ferrous and non-ferrous metal substrates. It provides an ideal anchor coat and dependable corrosion
                resistance before topcoating, ensuring a durable foundation for demanding metal finishing systems.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-blue-300" />
                  <span>Superior Metal Adhesion</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Droplets className="h-5 w-5 text-emerald-300" />
                  <span>Corrosion Resistance</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Star className="h-5 w-5 text-cyan-300" />
                  <span>Excellent Anchor Coat</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="GRIPPA 2K Wash Primer Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              {/* <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">100-120</div>
                  <div className="text-sm opacity-90">sq.ft/ltr coverage</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Primer Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">2K Wash Primer Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Superior Metal Adhesion",
                description: "Etches into ferrous and non-ferrous metals to deliver outstanding, long-lasting adhesion."
              },
              {
                icon: Droplets,
                title: "Corrosion Resistance",
                description: "Protects metal substrates against rust and corrosion for extended coating durability."
              },
              {
                icon: Layers,
                title: "Two-Component System",
                description: "Reactive 2K formulation cures to a tough, chemically resistant primer film."
              },
              {
                icon: Zap,
                title: "Fast Drying",
                description: "Quick-drying formula speeds up recoating and improves overall workflow efficiency."
              },
              {
                icon: Star,
                title: "Excellent Anchor Coat",
                description: "Creates an ideal anchor layer that maximizes bonding of subsequent topcoats."
              },
              {
                icon: Clock,
                title: "Easy Application",
                description: "Applies smoothly by spray for uniform coverage on a wide range of metal surfaces."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300">
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
        <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-200 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <Thermometer className="h-6 w-6 text-blue-600 mr-3" />
            Interior Primer Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Coverage", value: "100-120 sq.ft/ltr", sublabel: "(single coat)" },
              { label: "Drying Time", value: "2-3 hours", sublabel: "(surface dry)" },
              { label: "Recoat Time", value: "4-6 hours", sublabel: "(topcoat application)" },
              { label: "Finish", value: "Matt", sublabel: "(primer base)" },
              { label: "Shelf Life", value: "2 years", sublabel: "(from manufacture)" },
              { label: "Thinning", value: "Up to 10%", sublabel: "(with clean water)" },
              { label: "Temperature", value: "10°C to 35°C", sublabel: "(application range)" },
              { label: "Humidity", value: "Below 85% RH", sublabel: "(recommended)" }
            ].map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                <div className="font-semibold text-slate-800 mb-1">{spec.label}</div>
                <div className="text-lg font-bold text-blue-600 mb-1">{spec.value}</div>
                <div className="text-sm text-slate-600">{spec.sublabel}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Applications & Benefits
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Interior Applications</h3>
            <div className="space-y-4">
              {[
                "New Plaster - Fresh plaster and masonry surfaces",
                "Concrete Walls - Interior concrete and cement surfaces",
                "Drywall/Gypsum - Gypsum board and drywall applications",
                "Previously Painted Surfaces - Over compatible existing coatings",
                "Porous Substrates - High-absorption surfaces requiring sealing"
              ].map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Primer Benefits</h3>
            <div className="space-y-4">
              {[
                "Enhanced Adhesion - Improves topcoat bonding and durability",
                "Uniform Appearance - Ensures consistent color and finish",
                "Cost Effective - Reduces topcoat consumption and improves coverage",
                "Stain Prevention - Blocks stains and discoloration from showing through",
                "Professional Results - Foundation for high-quality paint systems",
                "Easy Maintenance - Simplifies future repainting and touch-ups"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Application Instructions
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Surface Preparation</h3>
            <div className="space-y-4">
              {[
                "Ensure surface is clean, dry, and free from dust, grease, and loose material",
                "Fill cracks and holes with suitable filler and sand smooth when dry",
                "Remove any loose or flaking paint from previously painted surfaces",
                "Allow new plaster to cure for minimum 28 days before primer application"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Application Method</h3>
            <div className="space-y-4">
              {[
                "Stir contents thoroughly before use to ensure uniform consistency",
                "Apply by brush, roller, or spray in thin, even coats",
                "Maintain wet edge during application to avoid lap marks",
                "Allow proper drying time before applying topcoat as specified",
                "Clean tools immediately after use with soap and water"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Available Options
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Available Colors</h3>
              <div className="space-y-2">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">White</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Tinted Options Available</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Pack Sizes</h3>
              <div className="space-y-2">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">1 Ltr</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">4 Ltr</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">10 Ltr</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">20 Ltr</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm">Adhesion Tested</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Professional Grade</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4" />
                  <span className="text-sm">Quality Assured</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Reliable Metal Surface Preparation</h3>
          <p className="text-slate-700 mb-6 text-lg max-w-2xl mx-auto">
            Achieve outstanding adhesion and corrosion protection with GRIPPA 2K Wash Primer. Get expert advice on
            metal surface preparation, mixing ratios, and topcoat compatibility for optimal performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 shadow-lg"
            >
              Get Primer Consultation
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Primer Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrippaWashPrimerPage;