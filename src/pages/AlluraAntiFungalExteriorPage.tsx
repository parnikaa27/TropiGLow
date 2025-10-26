import React from 'react';
import { ArrowLeft, CheckCircle, Shield, Droplets, Clock, Thermometer, Eye, Star, Sun, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AlluraAntiFungalExteriorPage: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-green-50 to-emerald-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-800 via-green-800 to-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-teal-200 hover:text-white mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-8 w-8 text-green-300" />
                <h1 className="text-5xl font-bold">ALLURA ANTI FUNGAL EXTERIOR</h1>
              </div>
              <p className="text-teal-200 text-xl mb-6">Advanced Anti-Fungal Exterior Protection</p>
              <p className="text-lg leading-relaxed mb-8">
                ALLURA ANTI FUNGAL EXTERIOR combines superior weather resistance with advanced anti-fungal protection. 
                Specially formulated for humid climates and coastal environments, it prevents mold, mildew, and algae growth 
                while providing exceptional exterior protection and color retention.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-green-300" />
                  <span>Anti-Fungal Protection</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Sun className="h-5 w-5 text-yellow-300" />
                  <span>Weather Resistant</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Droplets className="h-5 w-5 text-teal-300" />
                  <span>Moisture Protection</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="ALLURA ANTI FUNGAL EXTERIOR Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-teal-500 to-green-600 rounded-xl p-4 shadow-xl">
               {/* <div className="text-center">
                  <div className="text-2xl font-bold">110-130</div>
                  <div className="text-sm opacity-90">sq.ft/ltr coverage</div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Anti-Fungal Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Advanced Anti-Fungal & Weather Protection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Anti-Fungal Protection",
                description: "Advanced biocides prevent mold, mildew, and algae growth on exterior surfaces."
              },
              {
                icon: Sun,
                title: "Weather Resistance",
                description: "Superior protection against rain, UV rays, and extreme weather conditions."
              },
              {
                icon: Droplets,
                title: "Moisture Management",
                description: "Breathable formulation allows moisture vapor transmission while blocking liquid water."
              },
              {
                icon: Zap,
                title: "Algae Resistance",
                description: "Special additives prevent algae and moss growth in humid environments."
              },
              {
                icon: Star,
                title: "Color Retention",
                description: "UV stabilizers maintain vibrant colors despite fungal and weather challenges."
              },
              {
                icon: Eye,
                title: "Self-Cleaning Action",
                description: "Surface technology helps wash away dirt and organic matter naturally."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-teal-200 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-teal-500 to-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications 
        <div className="bg-white rounded-xl p-8 shadow-lg border border-teal-200 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <Thermometer className="h-6 w-6 text-teal-600 mr-3" />
            Anti-Fungal Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Coverage", value: "110-130 sq.ft/ltr", sublabel: "(single coat)" },
              { label: "Drying Time", value: "2-4 hours", sublabel: "(surface dry)" },
              { label: "Recoat Time", value: "6-8 hours", sublabel: "(between coats)" },
              { label: "Finish", value: "Anti-Fungal Matt", sublabel: "(protective grade)" },
              { label: "Shelf Life", value: "3 years", sublabel: "(from manufacture)" },
              { label: "Thinning", value: "Up to 15%", sublabel: "(with clean water)" },
              { label: "Temperature", value: "5°C to 40°C", sublabel: "(application range)" },
              { label: "Humidity", value: "Below 95% RH", sublabel: "(high humidity tolerance)" }
            ].map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg p-4 border border-teal-200">
                <div className="font-semibold text-slate-800 mb-1">{spec.label}</div>
                <div className="text-lg font-bold text-teal-600 mb-1">{spec.value}</div>
                <div className="text-sm text-slate-600">{spec.sublabel}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Specialized Applications 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-teal-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Specialized Applications</h3>
            <div className="space-y-4">
              {[
                "Coastal Properties - High humidity and salt air environments",
                "Tropical Climates - Areas with high moisture and temperature",
                "Shaded Exteriors - North-facing walls prone to moisture retention",
                "Industrial Areas - Environments with high pollution and moisture",
                "Heritage Buildings - Historic structures requiring protection"
              ].map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-teal-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Protection Benefits</h3>
            <div className="space-y-4">
              {[
                "Prevents Fungal Growth - Stops mold, mildew, and algae before they start",
                "Healthy Environment - Reduces allergens and improves air quality",
                "Long-Term Protection - Extended service life in challenging conditions",
                "Easy Maintenance - Self-cleaning properties reduce upkeep",
                "Cost Effective - Prevents costly cleaning and remediation",
                "Professional Grade - Trusted by contractors in humid climates"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specialized Application Process 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-teal-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Anti-Fungal Surface Preparation</h3>
            <div className="space-y-4">
              {[
                "Remove all existing mold, mildew, and algae with appropriate biocide treatment",
                "Power wash surface thoroughly and allow to dry completely",
                "Treat problem areas with anti-fungal primer for maximum protection",
                "Ensure proper drainage and ventilation around application area"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-teal-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Professional Application</h3>
            <div className="space-y-4">
              {[
                "Apply during dry weather conditions with low humidity if possible",
                "Use brush, roller or spray ensuring complete coverage of all surfaces",
                "Pay special attention to joints, cracks, and moisture-prone areas",
                "Apply 2-3 coats for maximum anti-fungal protection and durability",
                "Allow proper curing time before exposure to moisture or rain"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
*/}
        {/* Product Options 
        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-xl p-8 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Available Colors</h3>
              <div className="space-y-2">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">White</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Light Colors</span>
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
              <h3 className="text-xl font-bold mb-4">Protection Assurance</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm">Anti-Fungal Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4" />
                  <span className="text-sm">Biocide Protection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4" />
                  <span className="text-sm">Professional Exterior Grade</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-teal-200 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Protect Your Exterior from Fungal Growth</h3>
          <p className="text-slate-700 mb-6 text-lg max-w-2xl mx-auto">
            Shield your building from mold, mildew, and algae with ALLURA ANTI FUNGAL EXTERIOR. Get expert consultation 
            on surface preparation, application techniques, and maintenance for maximum anti-fungal protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-teal-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-teal-700 hover:to-green-700 transition-all duration-200 shadow-lg"
            >
              Get Anti-Fungal Consultation
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Protection Sample
            </button>
          </div>
        {/* Downloadable Data Sheet link */}
<div className="mt-6">
{/* Place the PDF file in your public/assets folder at: /public/assets/Allura-AntiFungal-DataSheet.pdf */}
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


export default AlluraAntiFungalExteriorPage;