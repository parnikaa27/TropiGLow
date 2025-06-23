import React from 'react';
import { Palette, Beaker, Headphones, Wrench } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Palette,
      title: "Paint & Coating Consultation",
      description: "Expert guidance to select the perfect coating solution for your specific needs, ensuring optimal performance and aesthetics.",
      features: ["Surface analysis", "Product recommendations", "Color matching", "Performance specifications"]
    },
    {
      icon: Beaker,
      title: "Custom Formulation",
      description: "Tailored coating solutions developed in our state-of-the-art laboratory to meet your unique requirements.",
      features: ["R&D capabilities", "Performance testing", "Quality assurance", "Specialized formulations"]
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Comprehensive technical assistance from our experienced team throughout your project lifecycle.",
      features: ["Application guidance", "Troubleshooting", "Training programs", "Documentation support"]
    },
    {
      icon: Wrench,
      title: "On-site Application Services",
      description: "Professional application services ensuring proper coating installation and maximum performance.",
      features: ["Certified applicators", "Surface preparation", "Quality control", "Project management"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64;
      const elementPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-16 bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Comprehensive coating solutions backed by expert knowledge, cutting-edge technology, and unmatched customer support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-amber-800 hover:border-amber-700"
            >
              <div className="mb-6">
                <div className="bg-gradient-to-r from-amber-700 to-yellow-800 w-16 h-16 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-amber-900 mb-4 group-hover:text-yellow-800 transition-colors duration-200">
                {service.title}
              </h3>
              
              <p className="text-amber-800 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-amber-800">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gradient-to-r from-amber-800 to-yellow-900 rounded-2xl p-8 text-white text-center shadow-2xl border-2 border-amber-700">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-amber-100 mb-6 text-lg">
            Contact our experts today for a consultation and discover how our premium coatings can transform your project.
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-amber-600 to-yellow-700 hover:from-amber-700 hover:to-yellow-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Expert Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;