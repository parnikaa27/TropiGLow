import React from 'react';
import { ArrowLeft, Shield, Sun, Droplets, Star, Paintbrush } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BondxPuTopcoatPage: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
      {/* Hero */}
      <div className="bg-gradient-to-r from-yellow-700 via-orange-700 to-yellow-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <button onClick={() => navigate('/')} className="flex items-center space-x-2 mb-6 hover:text-yellow-200">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Paintbrush className="h-8 w-8 text-yellow-300" />
                <h1 className="text-4xl font-bold">BONDX PU Topcoat</h1>
              </div>
              <p className="text-lg text-yellow-200 mb-6">
                A premium polyurethane topcoat offering superior gloss, weather resistance, and long-lasting color retention.
              </p>

              <div className="flex flex-wrap gap-4">
                {[Shield, Sun, Droplets, Star].map((Icon, idx) => (
                  <div key={idx} className="flex items-center space-x-2 bg-white bg-opacity-10 rounded-lg px-4 py-2">
                    <Icon className="h-5 w-5 text-yellow-300" />
                    <span>
                      {idx === 0 && 'High Durability'}
                      {idx === 1 && 'UV Resistant'}
                      {idx === 2 && 'Weatherproof'}
                      {idx === 3 && 'Gloss & Color Retention'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="BONDX PU Topcoat"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">Gloss Finish</div>
                  <div className="text-sm opacity-90">Premium Polyurethane</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features & Specs */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* Features */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Features & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sun,
                title: 'UV Resistant',
                desc: 'Protects surfaces from harsh sunlight and color fading.'
              },
              {
                icon: Droplets,
                title: 'Weather Resistance',
                desc: 'Stands up to rain, humidity, and coastal conditions.'
              },
              {
                icon: Star,
                title: 'Gloss & Aesthetic',
                desc: 'Retains gloss and sheen for long periods.'
              },
              {
                icon: Shield,
                title: 'Durability',
                desc: 'Resists abrasion, impact, and industrial wear.'
              },
              {
                icon: Paintbrush,
                title: 'Smooth Finish',
                desc: 'Gives a flawless, professional appearance to all surfaces.'
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg border">
                <feature.icon className="h-6 w-6 text-yellow-500 mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Specs 
        <section className="bg-white rounded-xl p-8 shadow-lg border">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Finish', value: 'High Gloss / Semi-Gloss' },
              { label: 'Coverage', value: '90–110 sq.ft/ltr' },
              { label: 'Drying Time', value: '2–3 hrs (touch dry)' },
              { label: 'Curing Time', value: '7 days full cure' }
            ].map((spec, i) => (
              <div key={i} className="p-4 bg-yellow-50 rounded-lg">
                <div className="font-semibold text-slate-800">{spec.label}</div>
                <div className="text-xl font-bold text-yellow-600">{spec.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Applications & Use Cases 
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg border">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Recommended For</h3>
            <ul className="space-y-3 list-disc list-inside text-slate-700">
              {[
                'Industrial steel structures',
                'Machinery and equipment',
                'Automotive and transport',
                'Architectural metalwork'
              ].map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg border">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Key Benefits</h3>
            <ul className="space-y-3 list-disc list-inside text-slate-700">
              {[
                'Exceptional gloss retention',
                'Low maintenance and easy cleaning',
                'Available in a wide range of colors',
                'High resistance to scratches and chemicals'
              ].map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        </section> */}

        {/* CTA */}
        <section className="bg-yellow-500 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Durable & Glossy Finish?</h3>
          <p className="mb-6">
            BONDX PU Topcoat is your go-to solution for aesthetic appeal and long-lasting protection. Let’s get in touch!
          </p>
          <button
            onClick={scrollToContact}
            className="bg-white text-yellow-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Request Consultation
          </button>
        </section>
      </div>
    </div>
  );
};

export default BondxPuTopcoatPage;
