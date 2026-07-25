import React from 'react';
import { ArrowLeft, CheckCircle, Palette, Shield, Droplets, Clock, Thermometer, Eye, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EverluxInteriorPage: React.FC = () => {
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
              <h1 className="text-5xl font-bold mb-4">EVERLUX INTERIOR</h1>
              <p className="text-emerald-200 text-xl mb-6">Premium Interior Emulsion Paint</p>
              <p className="text-lg leading-relaxed mb-8">
                Experience the perfect blend of superior coverage, exceptional washability, and long-lasting beauty with EVERLUX INTERIOR. 
                Formulated with advanced acrylic polymers for professional results every time.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Star className="h-5 w-5 text-cyan-300" />
                  <span>Premium Quality</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-emerald-300" />
                  <span>Superior Coverage</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Droplets className="h-5 w-5 text-blue-300" />
                  <span>Washable Finish</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/DECORATIVE/DECORATIVE%201.jpg"
                alt="EVERLUX INTERIOR Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
             {/* <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">120-140</div>
                  <div className="text-sm opacity-90">sq.ft/ltr coverage</div>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Key Features & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Superior Coverage & Opacity",
                description: "Excellent hiding power ensures uniform coverage with fewer coats, saving time and money."
              },
              {
                icon: Droplets,
                title: "Excellent Washability",
                description: "Easy to clean and maintain, perfect for high-traffic areas and family homes."
              },
              {
                icon: Palette,
                title: "Smooth & Even Finish",
                description: "Professional-grade formulation delivers a flawless, smooth finish every time."
              },
              {
                icon: Eye,
                title: "Low Odor Formula",
                description: "Environmentally friendly with minimal odor for comfortable application and living."
              },
              {
                icon: Clock,
                title: "Quick Drying",
                description: "Fast drying time allows for quicker project completion and recoating."
              },
              {
                icon: Star,
                title: "Stain Resistant",
                description: "Advanced formulation resists common household stains and marks."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-emerald-200 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <Thermometer className="h-6 w-6 text-emerald-600 mr-3" />
            Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Coverage", value: "120-140 sq.ft/ltr", sublabel: "(single coat)" },
              { label: "Drying Time", value: "2-3 hours", sublabel: "(surface dry)" },
              { label: "Recoat Time", value: "4-6 hours", sublabel: "(between coats)" },
              { label: "Finish", value: "Smooth Matt", sublabel: "(premium quality)" },
              { label: "Shelf Life", value: "3 years", sublabel: "(from manufacture)" },
              { label: "Thinning", value: "Up to 10%", sublabel: "(with clean water)" },
              { label: "Temperature", value: "10°C to 35°C", sublabel: "(application range)" },
              { label: "Humidity", value: "Below 85% RH", sublabel: "(recommended)" }
            ].map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 border border-emerald-200">
                <div className="font-semibold text-slate-800 mb-1">{spec.label}</div>
                <div className="text-lg font-bold text-emerald-600 mb-1">{spec.value}</div>
                <div className="text-sm text-slate-600">{spec.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Applications & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Ideal Applications</h3>
            <div className="space-y-4">
              {[
                "Interior Walls - Living rooms, bedrooms, hallways",
                "Ceilings - All interior ceiling applications",
                "Plaster Surfaces - New and existing plasterwork",
                "Concrete Surfaces - Properly prepared concrete walls",
                "Previously Painted Surfaces - Over compatible coatings"
              ].map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Key Benefits</h3>
            <div className="space-y-4">
              {[
                "Easy Application - Smooth, effortless application",
                "Excellent Hiding Power - Superior opacity and coverage",
                "Fade Resistant - Long-lasting color retention",
                "Eco-Friendly - Low VOC, environmentally conscious",
                "Cost Effective - Excellent value for money",
                "Professional Finish - Consistent, high-quality results"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Instructions 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Surface Preparation</h3>
            <div className="space-y-4">
              {[
                "Ensure surface is clean, dry and free from dust, grease and loose particles",
                "Fill cracks and holes with suitable filler and allow to dry completely",
                "Sand smooth and remove all dust with a clean, dry cloth",
                "Apply suitable primer if required, especially on new or porous surfaces"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Application Method</h3>
            <div className="space-y-4">
              {[
                "Stir contents thoroughly before use to ensure uniform consistency",
                "Apply by brush, roller or spray using professional techniques",
                "Apply thin, even coats maintaining a wet edge throughout",
                "Allow proper drying time between coats as specified",
                "Apply minimum 2 coats for best results and optimal coverage"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Available Options */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-8 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Available Colors</h3>
              <div className="space-y-2">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">White</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Off-White</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Tintable to desired shades</span>
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
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">ISO Certified Manufacturing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Rigorous Quality Testing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Professional Grade Formula</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Transform Your Space?</h3>
          <p className="text-slate-700 mb-6 text-lg max-w-2xl mx-auto">
            Get expert advice on color selection, surface preparation, and application techniques. 
            Our technical team is here to ensure your project's success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-lg"
            >
              Get Expert Consultation
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Sample
            </button>
          </div>
          
       {/* Downloadable Data Sheet link */}
<div className="mt-6">
{/* Place the PDF file in your public/assets folder at: /public/assets/Evercoat-AntiFungal-DataSheet.pdf */}
<a
href="/anti_fungal.pdf"
download="Data Sheet.pdf"
target="_blank"
rel="noopener noreferrer"
className="inline-block mt-3 text-sm underline font-medium text-teal-600 hover:text-teal-800"
aria-label="Download Data Sheet"
>
Download Data Sheet
</a>
</div>
</div>
</div>
</div>
);
};

export default EverluxInteriorPage;