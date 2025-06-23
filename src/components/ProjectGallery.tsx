import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const ProjectGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Luxury Residential Interior",
      category: "Residential",
      image: "https://i.pinimg.com/736x/4d/d9/5d/4dd95da0f74e6e6cae68c69c5a56f2d2.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Premium MAPLE LUXURY INTERIOR application"
    },
    {
      id: 2,
      title: "Industrial Facility Protection",
      category: "Industrial",
      image: "https://i.pinimg.com/736x/30/be/d9/30bed97d1cb83e429bbe7456cfe4519a.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "ZBOND Epoxy Mastic coating system"
    },
    {
      id: 3,
      title: "Marine Vessel Coating",
      category: "Marine",
      image: "https://i.pinimg.com/736x/2f/ec/00/2fec0008f37e239de49bb2dc0d75684a.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "HAWKY Antifouling protection system"
    },
    {
      id: 4,
      title: "Commercial Floor Finish",
      category: "Floor",
      image: "https://i.pinimg.com/736x/34/c0/96/34c096795ad5bbe1c9ed80d7921c4c3a.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "STEPIN floor coating application"
    },
    {
      id: 5,
      title: "Wood Furniture Coating",
      category: "Wood",
      image: "https://i.pinimg.com/736x/25/9b/43/259b43e75e3ecfee410a07d5252ae57b.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "WOODVIBE 2K PU wood stain finish"
    },
    {
      id: 6,
      title: "Exterior Building Protection",
      category: "Residential",
      image: "https://i.pinimg.com/736x/7e/19/92/7e19920beb34feaa79a4f56dc9bcf128.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "ALLURA LUXURY EXTERIOR coating"
    }
  ];

  const categories = ['All', 'Residential', 'Industrial', 'Marine', 'Floor', 'Wood'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const getCurrentProjects = () => {
    const startIndex = currentIndex * itemsPerPage;
    return filteredProjects.slice(startIndex, startIndex + itemsPerPage);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="gallery" className="py-16 bg-gradient-to-br from-amber-800 via-yellow-800 to-amber-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Project Gallery</h2>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Discover our expertise through a showcase of successful projects across residential, industrial, marine, and specialized coating applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentIndex(0);
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-amber-700 to-yellow-800 text-white shadow-lg'
                  : 'bg-white bg-opacity-80 text-amber-800 hover:bg-amber-100 border-2 border-amber-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentProjects().map((project) => (
              <div
                key={project.id}
                className="group bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-amber-800"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-amber-900 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <Eye className="text-white opacity-0 group-hover:opacity-100 h-12 w-12 transition-opacity duration-300" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-amber-700 to-yellow-800 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{project.title}</h3>
                  <p className="text-amber-800">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {totalPages > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full shadow-xl transition-all duration-200 border-2 border-amber-800"
              >
                <ChevronLeft className="h-6 w-6 text-amber-800" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full shadow-xl transition-all duration-200 border-2 border-amber-800"
              >
                <ChevronRight className="h-6 w-6 text-amber-800" />
              </button>
            </>
          )}
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-amber-400 shadow-lg' : 'bg-amber-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGallery;