import React from 'react';
import { ArrowLeft, Droplets, Shield, Star, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ZbondEpoxyMasticPage: React.FC = () => {
  const navigate = useNavigate();
  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) {
        window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 via-emerald-800 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <button onClick={() => navigate('/')} className="flex items-center space-x-2 mb-6 hover:text-emerald-300">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Layers className="h-8 w-8 text-emerald-300" />
                <h1 className="text-4xl font-bold">ZBOND Epoxy Mastic Coatings</h1>
              </div>
              <p className="text-lg text-emerald-200 mb-6">
                A versatile high-solids mastic coating offering excellent adhesion to aged surfaces, rusted steel, and old coatings.
              </p>
              <div className="flex flex-wrap gap-4">
                {[Shield, Droplets, Star, Layers].map((Icon, idx) => (
                  <div key={idx} className="flex items-center space-x-2 bg-white bg-opacity-10 rounded-lg px-4 py-2">
                    <Icon className="h-5 w-5 text-emerald-200" />
                    <span>
                      {idx === 0 && 'Rust Tolerant'}
                      {idx === 1 && 'Surface Moisture Tolerant'}
                      {idx === 2 && 'Long-Term Performance'}
                      {idx === 3 && 'High Film Build'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/279964/pexels-photo-279964.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="ZBOND Mastic Coating"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              {/* <div className="absolute -bottom-6 -right-6 bg-cyan-600 rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">1000+ hrs</div>
                  <div className="text-sm opacity-90">Salt Spray Resistance</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Features & Specs */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* Key Features */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Why ZBOND Epoxy Mastic?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Layers,
                title: 'High Solids Content',
                desc: 'Delivers thick protective coating in fewer coats.'
              },
              {
                icon: Shield,
                title: 'Excellent Adhesion',
                desc: 'Bonds to aged, rusted, and previously coated surfaces.'
              },
              {
                icon: Droplets,
                title: 'Surface Tolerant',
                desc: 'Performs well on marginally prepared surfaces.'
              },
              {
                icon: Star,
                title: 'Long-Term Durability',
                desc: 'Extended protection in chemical and coastal environments.'
              }
            ].map((feat, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feat.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{feat.title}</h3>
                <p className="text-slate-700">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Specs 
        <section className="bg-white rounded-xl p-8 shadow-lg border">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Volume Solids', value: '85% ±2%' },
              { label: 'Dry Film Thickness', value: '150–300 µm' },
              { label: 'Service Temp.', value: '−20 °C to 120 °C' },
              { label: 'Adhesion Strength', value: 'Excellent on corroded surfaces' }
            ].map((spec, i) => (
              <div key={i} className="p-4 bg-teal-50 rounded-lg">
                <div className="font-semibold text-slate-800">{spec.label}</div>
                <div className="text-xl font-bold text-cyan-600">{spec.value}</div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Applications & Benefits */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg border">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Typical Applications</h3>
            <ul className="space-y-3 list-disc list-inside text-slate-700">
              {[
                'Marine & offshore platforms',
                'Petrochemical equipment',
                'Bridges and railings',
                'Aged tanks and steelwork'
              ].map((app, i) => (
                <li key={i}>{app}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg border">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Benefits</h3>
            <ul className="space-y-3 list-disc list-inside text-slate-700">
              {[
                'Easy to apply',
                'Low surface preparation required',
                'Cost-effective',
                'Highly durable for aggressive conditions'
              ].map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200 text-center">
          <h3 className="text-2xl font-bold mb-4">Looking for Surface-Tolerant Protection?</h3>
          <p className="mb-6">
            Get in touch to discuss if ZBOND Mastic is the right fit for your industrial or marine coating needs.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-white text-cyan-600 px-8 py-3 rounded-md font-semibold hover:bg-teal-100 transition"
          >
            Contact Us
          </button>
        </section>
      </div>
    </div>
  );
};

export default ZbondEpoxyMasticPage;
