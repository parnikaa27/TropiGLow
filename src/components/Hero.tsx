import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Award, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Premium Decorative Paints",
      subtitle: "Transform your spaces with our luxury interior and exterior solutions",
      image: "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    },
    {
      title: "Industrial Protective Coatings",
      subtitle: "Advanced epoxy and polyurethane systems for maximum protection",
      image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    },
    {
      title: "Marine & High-Temperature Solutions",
      subtitle: "Specialized coatings engineered for extreme environments",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
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
              index === currentSlide ? 'opacity-600' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 via-yellow-900/80 to-amber-800/70"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to <span className="text-amber-300">TropiGlow</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
            <p className="text-lg text-amber-100 mb-12 max-w-2xl leading-relaxed">
              At TropiGlow, we provide cutting-edge decorative, industrial, marine, and protective coatings engineered to meet the highest standards of performance and aesthetics. Whether you're transforming a living space or protecting critical infrastructure, our expert team and innovative products are here to serve.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="flex items-center space-x-3 text-white bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-amber-700">
                <Award className="h-8 w-8 text-amber-300" />
                <span className="text-lg font-semibold">Premium Quality Coatings</span>
              </div>
              <div className="flex items-center space-x-3 text-white bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-amber-700">
                <Users className="h-8 w-8 text-amber-300" />
                <span className="text-lg font-semibold">Expert Technical Support</span>
              </div>
              <div className="flex items-center space-x-3 text-white bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-amber-700">
                <Shield className="h-8 w-8 text-amber-300" />
                <span className="text-lg font-semibold">Custom Formulations</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => scrollToSection('products')}
                className="bg-gradient-to-r from-amber-700 to-yellow-800 hover:from-amber-800 hover:to-yellow-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Explore Products
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-amber-700 text-white hover:bg-amber-700 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 backdrop-blur-sm"
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
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 z-20 backdrop-blur-sm border border-amber-700"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 z-20 backdrop-blur-sm border border-amber-700"
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
              index === currentSlide ? 'bg-amber-400 shadow-lg' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;