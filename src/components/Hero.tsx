import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Award, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Premium Decorative Paints",
      subtitle: "Transform your spaces with our luxury interior and exterior solutions",
      image: "/hero1.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    },
    {
      title: "Industrial Protective Coatings",
      subtitle: "Advanced epoxy and polyurethane systems for maximum protection",
      image: "/hero2.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    },
    {
      title: "Marine & High-Temperature Solutions",
      subtitle: "Specialized coatings engineered for extreme environments",
      image: "/hero3.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

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
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-grey-900/70 to-slate-800/60"></div>
          </div>
        ))}
      </div> 

      {/* Content bg-gradient-to-r from-slate-800 via-emerald-800 to-teal-800 text-white py-16*/}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to <span className="text-emerald-400 font-[cursive]">TropiGlow</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
            <p className="text-lg text-slate-100 mb-12 max-w-2xl leading-relaxed mx-auto">
              At TropiGlow, we provide cutting-edge decorative, industrial, marine, and protective coatings engineered to meet the highest standards of performance and aesthetics. Whether you're transforming a living space or protecting critical infrastructure, our expert team and innovative products are here to serve.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="flex items-center space-x-3 text-white bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-slate-300">
                <Award className="h-8 w-8 text-slate-200" />
                <span className="text-lg font-semibold">Premium Quality Coatings</span>
              </div>
              <div className="flex items-center space-x-3 text-white bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-slate-300">
                <Users className="h-8 w-8 text-slate-200" />
                <span className="text-lg font-semibold">Expert Technical Support</span>
              </div>
              <div className="flex items-center space-x-3 text-white bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-slate-300">
                <Shield className="h-8 w-8 text-slate-200" />
                <span className="text-lg font-semibold">Customised Formulations</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
              <button 
                onClick={() => scrollToSection('products')}
                className="border-2 border-slate-300 bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Explore Products
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-slate-300 bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 z-20 backdrop-blur-sm border border-slate-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 z-20 backdrop-blur-sm border border-slate-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-slate-300 shadow-lg' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;