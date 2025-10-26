import React from 'react';
import { ArrowLeft, Shield, Droplets, Sun, Star, Paintbrush } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BondxPuClearCoatPage: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-yellow-50 to-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <button onClick={() => navigate('/')} className="flex items-center space-x-2 mb-6 hover:text-yellow-200">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Paintbrush className="h-8 w-8 text-yellow-300" />
                <h1 className="text-4xl font-bold">BONDX PU Clear Coat</h1>
              </div>
              <p className="text-lg text-yellow-200 mb-6">
                A high-performance transparent topcoat that offers superior protection and enhances surface aesthetics.
              </p>

              <div className="flex flex-wrap gap-4">
                {[Shield, Droplets, Sun, Star].map((Icon, idx) => (
                  <div key={idx} className="flex items-center space-x-2 bg-white bg-opacity-10 rounded-lg px-4 py-2">
                    <Icon className="h-5 w-5 text-yellow-300" />
                    <span>
                      {idx === 0 && 'Scratch Resistant'}
                      {idx === 1 && 'Water Repellent'}
                      {idx === 2 && 'UV Protection'}
                      {idx === 3 && 'Clear Gloss Finish'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/532563/pexels-photo-532563.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="BONDX PU Clear Coat"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">Crystal Clear</div>
                  <div className="text-sm opacity-90">Long-Lasting Finish</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* Features */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Features & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Paintbrush,
                title: 'Crystal Clear Finish',
                desc: 'Enhances natural beauty of wood, metal, and painted surfaces.'
              },
              {
                icon: Shield,
                title: 'Scratch Resistance',
                desc: 'Protects from abrasion, scuffs, and minor surface damage.'
              },
              {
                icon: Sun,
                title: 'UV Resistant',
                desc: 'Prevents yellowing and degradation over time.'
              },
              {
                icon: Droplets,
                title: 'Water Repellency',
                desc: 'Forms a moisture barrier for long-term protection.'
              },
              {
                icon: Star,
                title: 'Gloss Retention',
                desc: 'Maintains high-gloss look and aesthetic appeal.'
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border">
                <feature.icon className="h-6 w-6 text-yellow-500 mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Specs 
        <section className="bg-white rounded-xl p-8 shadow-lg border">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Finish', value: 'Clear Gloss / Semi-Gloss' },
              { label: 'Coverage', value: '80–100 sq.ft/ltr' },
              { label: 'Drying Time', value: '2–3 hours (touch dry)' },
              { label: 'Recoat Time', value: '6–8 hours' }
            ].map((spec, i) => (
              <div key={i} className="p-4 bg-yellow-50 rounded-lg">
                <div className="font-semibold text-slate-800">{spec.label}</div>
                <div className="text-xl font-bold text-yellow-600">{spec.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Applications 
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg border">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Application Areas</h3>
            <ul className="space-y-3 list-disc list-inside text-slate-700">
              {[
                'Wood furniture and fixtures',
                'Decorative metalwork',
                'Industrial machinery',
                'Interior trim and cabinetry'
              ].map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg border">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Why Choose BONDX PU Clear?</h3>
            <ul className="space-y-3 list-disc list-inside text-slate-700">
              {[
                'Long-lasting protection and durability',
                'Elegant, professional finish',
                'Fast drying and recoating',
                'Excellent adhesion and flow'
              ].map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        </section> */}

        {/* CTA */}
        <section className="bg-yellow-500 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Elevate Your Finishing Standards</h3>
          <p className="mb-6">
            Choose BONDX PU Clear Coat for the ultimate transparent protective finish.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-white text-yellow-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Request a Sample
          </button>
        </section>
      </div>
    </div>
  );
};

export default BondxPuClearCoatPage;
