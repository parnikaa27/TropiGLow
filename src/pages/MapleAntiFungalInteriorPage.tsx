import React from 'react';
import { ArrowLeft, CheckCircle, Shield, Droplets, Clock, Thermometer, Eye, Star, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MapleAntiFungalInteriorPage: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-800 via-teal-800 to-cyan-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-green-200 hover:text-white mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-8 w-8 text-green-300" />
                <h1 className="text-5xl font-bold">MAPLE ANTI FUNGAL INTERIOR</h1>
              </div>
              <p className="text-green-200 text-xl mb-6">Advanced Anti-Fungal Interior Protection</p>
              <p className="text-lg leading-relaxed mb-8">
                Specially formulated with advanced anti-fungal agents to prevent mold and mildew growth. 
                Perfect for humid environments, bathrooms, and areas prone to moisture issues while 
                maintaining excellent coverage and superior finish quality.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-green-300" />
                  <span>Anti-Fungal Protection</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Droplets className="h-5 w-5 text-teal-300" />
                  <span>Moisture Resistant</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Eye className="h-5 w-5 text-cyan-300" />
                  <span>Healthy Environment</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="MAPLE ANTI FUNGAL INTERIOR Application"
                className="rounded-xl shadow-2xl border-4 border-white border-opacity-20"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">120-140</div>
                  <div className="text-sm opacity-90">sq.ft/ltr coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Anti-Fungal Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Advanced Anti-Fungal Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Anti-Fungal Protection",
                description: "Advanced anti-fungal agents prevent mold and mildew growth for healthier indoor environments."
              },
              {
                icon: Zap,
                title: "Mold & Mildew Resistant",
                description: "Specially formulated to resist common household fungi and maintain surface integrity."
              },
              {
                icon: Star,
                title: "Superior Coverage",
                description: "Excellent hiding power and opacity ensure uniform coverage with fewer coats required."
              },
              {
                icon: Droplets,
                title: "Moisture Resistant",
                description: "Enhanced moisture resistance makes it ideal for humid environments and wet areas."
              },
              {
                icon: Clock,
                title: "Easy Application",
                description: "User-friendly formulation allows for smooth, effortless application by professionals and DIY users."
              },
              {
                icon: Eye,
                title: "Long-Lasting Protection",
                description: "Provides extended protection against fungal growth while maintaining aesthetic appeal."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-green-500 to-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-green-200 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <Thermometer className="h-6 w-6 text-green-600 mr-3" />
            Anti-Fungal Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Coverage", value: "120-140 sq.ft/ltr", sublabel: "(single coat)" },
              { label: "Drying Time", value: "2-3 hours", sublabel: "(surface dry)" },
              { label: "Recoat Time", value: "4-6 hours", sublabel: "(between coats)" },
              { label: "Finish", value: "Smooth Matt", sublabel: "(anti-fungal grade)" },
              { label: "Shelf Life", value: "3 years", sublabel: "(from manufacture)" },
              { label: "Thinning", value: "Up to 10%", sublabel: "(with clean water)" },
              { label: "Temperature", value: "10°C to 35°C", sublabel: "(application range)" },
              { label: "Humidity", value: "Below 85% RH", sublabel: "(recommended)" }
            ].map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-4 border border-green-200">
                <div className="font-semibold text-slate-800 mb-1">{spec.label}</div>
                <div className="text-lg font-bold text-green-600 mb-1">{spec.value}</div>
                <div className="text-sm text-slate-600">{spec.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-green-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Specialized Applications</h3>
            <div className="space-y-4">
              {[
                "Bathrooms - High humidity and moisture-prone areas",
                "Kitchens - Areas exposed to steam and cooking moisture",
                "Humid Areas - Basements, laundry rooms, and utility spaces",
                "Basements - Below-grade areas prone to dampness",
                "Coastal Properties - Homes in high-humidity coastal environments"
              ].map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-green-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Health & Protection Benefits</h3>
            <div className="space-y-4">
              {[
                "Prevents Fungal Growth - Stops mold and mildew before they start",
                "Healthy Indoor Environment - Improves air quality and reduces allergens",
                "Easy Maintenance - Simple cleaning without compromising protection",
                "Durable Finish - Long-lasting performance in challenging conditions",
                "Cost Effective - Prevents costly remediation and repainting",
                "Professional Quality - Trusted by contractors and homeowners"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specialized Application Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-green-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Anti-Fungal Surface Preparation</h3>
            <div className="space-y-4">
              {[
                "Remove any existing mold or mildew with appropriate fungicide treatment",
                "Clean surface thoroughly with anti-fungal cleaning solution",
                "Ensure surface is completely dry before application to prevent trapped moisture",
                "Apply suitable anti-fungal primer if required for maximum protection"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-green-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Professional Application</h3>
            <div className="space-y-4">
              {[
                "Stir contents thoroughly before use to ensure even distribution of anti-fungal agents",
                "Apply by brush, roller or spray using proper ventilation techniques",
                "Apply thin, even coats maintaining consistent coverage for optimal protection",
                "Ensure proper ventilation during application to aid drying and curing",
                "Apply minimum 2 coats for best protection and maximum anti-fungal effectiveness"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Options */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-8 text-white mb-16">
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
              <h3 className="text-xl font-bold mb-4">Health Assurance</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm">Anti-Fungal Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Health-Safe Formula</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span className="text-sm">Professional Grade Protection</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-green-200 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Protect Your Home from Mold & Mildew</h3>
          <p className="text-slate-700 mb-6 text-lg max-w-2xl mx-auto">
            Create a healthier living environment with MAPLE ANTI FUNGAL INTERIOR. Get expert advice on 
            application techniques and surface preparation for maximum anti-fungal protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-teal-700 transition-all duration-200 shadow-lg"
            >
              Get Anti-Fungal Consultation
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Protection Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapleAntiFungalInteriorPage;