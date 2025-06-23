import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductsCarousel from './components/ProductsCarousel';
import ProjectGallery from './components/ProjectGallery';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductsCarousel />
      <ProjectGallery />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;