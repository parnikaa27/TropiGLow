import React from 'react';
import { ArrowLeft, CheckCircle, Shield, Clock, Thermometer, Eye, Star, Sun, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AlluraLuxuryExteriorPage: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-indigo-200 hover:text-white mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Crown className="h-8 w-8 text-yellow-300" />
                <h1 className="text-5xl font-bold">ALLURA LUXURY EXTERIOR</h1>
              </div>
              <p className="text-indigo-200 text-xl mb-6">Premium Exterior Paint with Advanced Weather Protection</p>
              <p className="text-lg leading-relaxed mb-8">
                ALLURA LUXURY EXTERIOR represents the pinnacle of exterior paint technology. With enhanced weather resistance, 
                superior color retention, and advanced protective properties, it delivers exceptional performance and luxury 
                aesthetics for premium exterior applications.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Crown className="h-5 w-5 text-yellow-300" />
                  <span>Premium Weather Protection</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Sun className="h-5 w-5 text-indigo-300" />
                  <span>Advanced UV Resistance</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Star className="h-5 w-5 text-purple-300" />
                  <span>Luxury Finish Quality</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="ALLURA LUXURY EXTERIOR Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-4 shadow-xl">
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Premium Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Premium Weather Protection Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Crown,
                title: "Premium Weather Protection",
                description: "Ultimate protection against extreme weather conditions with luxury-grade formulation."
              },
              {
                icon: Sun,
                title: "Advanced UV Resistance",
                description: "Superior UV stabilizers provide maximum protection against color fading and degradation."
              },
              {
                icon: Star,
                title: "Superior Color Retention",
                description: "Advanced pigment technology ensures vibrant colors that last for years."
              },
              {
                icon: Eye,
                title: "Self-Cleaning Properties",
                description: "Innovative surface technology helps maintain a clean appearance with minimal maintenance."
              },
              {
                icon: Shield,
                title: "Crack Bridging Technology",
                description: "Advanced elastomeric properties bridge cracks and prevent water infiltration."
              },
              {
                icon: Clock,
                title: "Luxury Finish Quality",
                description: "Premium formulation delivers an exceptional finish that enhances architectural beauty."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-indigo-200 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications 
        <div className="bg-white rounded-xl p-8 shadow-lg border border-indigo-200 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <Thermometer className="h-6 w-6 text-indigo-600 mr-3" />
            Premium Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Coverage", value: "120-140 sq.ft/ltr", sublabel: "(single coat)" },
              { label: "Drying Time", value: "2-4 hours", sublabel: "(surface dry)" },
              { label: "Recoat Time", value: "6-8 hours", sublabel: "(between coats)" },
              { label: "Finish", value: "Luxury Matt to Semi-Gloss", sublabel: "(premium grade)" },
              { label: "Shelf Life", value: "3 years", sublabel: "(from manufacture)" },
              { label: "Thinning", value: "Up to 10%", sublabel: "(with clean water)" },
              { label: "Temperature", value: "5°C to 40°C", sublabel: "(application range)" },
              { label: "Humidity", value: "Below 90% RH", sublabel: "(recommended)" }
            ].map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-200">
                <div className="font-semibold text-slate-800 mb-1">{spec.label}</div>
                <div className="text-lg font-bold text-indigo-600 mb-1">{spec.value}</div>
                <div className="text-sm text-slate-600">{spec.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Applications 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-indigo-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Premium Applications</h3>
            <div className="space-y-4">
              {[
                "Premium Residential Exteriors - Luxury homes and estates",
                "Luxury Commercial Buildings - High-end office complexes",
                "High-End Architectural Projects - Prestigious developments",
                "Coastal Properties - Marine environment protection",
                "Heritage Buildings - Historic preservation projects"
              ].map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-indigo-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Luxury Benefits</h3>
            <div className="space-y-4">
              {[
                "Maximum Weather Protection - Ultimate defense against elements",
                "Exceptional Durability - Long-lasting premium performance",
                "Premium Aesthetics - Sophisticated, elegant appearance",
                "Low Maintenance - Reduced cleaning and upkeep requirements",
                "Long-Term Value - Investment in lasting quality and beauty",
                "Professional Grade - Contractor-approved luxury formulation"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Application 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-indigo-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Premium Surface Preparation</h3>
            <div className="space-y-4">
              {[
                "Professional surface preparation required for optimal luxury finish",
                "Remove all loose and flaking material using professional techniques",
                "Use premium exterior primer for maximum adhesion and performance",
                "Ensure surface is completely clean and dry before application"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-indigo-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Professional Application</h3>
            <div className="space-y-4">
              {[
                "Apply during optimal weather conditions for best results",
                "Use professional application tools for luxury finish quality",
                "Apply in thin, even coats maintaining consistent technique",
                "Allow proper curing between coats for maximum durability",
                "Apply 2-3 coats for luxury finish and optimal protection"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Premium Options 
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Premium Colors</h3>
              <div className="space-y-2">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">White</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Premium Colors</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">Custom Color Matching</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Available Sizes</h3>
              <div className="space-y-2">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">1 Ltr</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">4 Ltr</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">10 Ltr</span>
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">20 Ltr</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Luxury Assurance</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Crown className="h-4 w-4" />
                  <span className="text-sm">Luxury Grade Manufacturing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm">Premium Weather Testing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4" />
                  <span className="text-sm">Professional Luxury Grade</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-indigo-200 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Experience Luxury Exterior Protection</h3>
          <p className="text-slate-700 mb-6 text-lg max-w-2xl mx-auto">
            Transform your exterior with ALLURA LUXURY EXTERIOR. Get premium consultation on surface preparation, 
            color selection, and professional application techniques for exceptional luxury results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
            >
              Get Luxury Consultation
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Premium Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlluraLuxuryExteriorPage;