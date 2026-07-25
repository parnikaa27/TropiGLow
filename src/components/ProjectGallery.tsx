import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const ProjectGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Luxury Resort Interior",
      category: "Luxury Resort",
      image: "https://i.pinimg.com/736x/4d/d9/5d/4dd95da0f74e6e6cae68c69c5a56f2d2.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Premium EVERLUX LUXURY INTERIOR application"
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
      category: "Luxury Resort",
      image: "https://i.pinimg.com/736x/7e/19/92/7e19920beb34feaa79a4f56dc9bcf128.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "EVERCOAT LUXURY EXTERIOR coating"
    },
    {
      id: 7,
      title: "Resort Lobby Interior",
      category: "Luxury Resort",
      image: "/DECORATIVE/DECORATIVE%201.jpg",
      description: "EVERLUX premium decorative interior finish"
    },
    {
      id: 8,
      title: "Luxury Suite Walls",
      category: "Luxury Resort",
      image: "/DECORATIVE/DECORATIVE%202.jpg",
      description: "EVERLUX luxury interior application"
    },
    {
      id: 9,
      title: "Resort Lounge Accent",
      category: "Luxury Resort",
      image: "/DECORATIVE/DECORATIVE%203.jpg",
      description: "EVERLUX designer decorative finish"
    },
    {
      id: 10,
      title: "Boutique Resort Interior",
      category: "Luxury Resort",
      image: "/DECORATIVE/DECORATIVE%204.jpg",
      description: "EVERLUX premium wall finish"
    },
    {
      id: 11,
      title: "Resort Villa Facade",
      category: "Luxury Resort",
      image: "/DECORATIVE/DECORATIVE%205.jpg",
      description: "EVERCOAT decorative exterior coating"
    },
    {
      id: 12,
      title: "Poolside Facade Finish",
      category: "Luxury Resort",
      image: "/DECORATIVE/DECORATIVE%206.jpg",
      description: "EVERCOAT luxury exterior application"
    },
    {
      id: 13,
      title: "Resort Lobby Flooring",
      category: "Floor",
      image: "/FLOOR%20COATING/FLOOR%20COATING.jpg",
      description: "STEPIN floor coating system"
    },
    {
      id: 14,
      title: "Commercial Floor Finish",
      category: "Floor",
      image: "/FLOOR%20COATING/FLOOR%20COATING%20.jpg",
      description: "STEPIN durable floor coating"
    },
    {
      id: 15,
      title: "Seamless Floor Coating",
      category: "Floor",
      image: "/FLOOR%20COATING/FLOOR%20COATING%201.jpg",
      description: "STEPIN seamless floor system"
    },
    {
      id: 16,
      title: "High-Traffic Floor Finish",
      category: "Floor",
      image: "/FLOOR%20COATING/FLOOR%20COATING%203.jpg",
      description: "STEPIN anti-slip floor coating"
    },
    {
      id: 17,
      title: "Marine Hull Protection",
      category: "Marine",
      image: "/MARINE%20&%20PROTECTIVE/MARINE%20&%20PROTECTIVE.jpg",
      description: "HAWKY marine coating system"
    },
    {
      id: 18,
      title: "Vessel Antifouling",
      category: "Marine",
      image: "/MARINE%20&%20PROTECTIVE/MARINE%20&%20PROTECTIVE%201.jpg",
      description: "HAWKY antifouling protection"
    },
    {
      id: 19,
      title: "Anti-Corrosive Marine Coat",
      category: "Marine",
      image: "/MARINE%20&%20PROTECTIVE/MARINE%20&%20PROTECTIVE%202.jpg",
      description: "HAWKY anti-corrosive paint"
    },
    {
      id: 20,
      title: "Offshore Structure Coating",
      category: "Marine",
      image: "/MARINE%20&%20PROTECTIVE/MARINE%20&%20PROTECTIVE%203.jpg",
      description: "HAWKY marine protective system"
    },
    {
      id: 21,
      title: "Coastal Steel Protection",
      category: "Marine",
      image: "/MARINE%20&%20PROTECTIVE/MARINE%20&%20PROTECTIVE%204.jpg",
      description: "HAWKY marine primer & topcoat"
    },
    {
      id: 22,
      title: "Wood Furniture Finish",
      category: "Wood",
      image: "/WOOD%20COATINGS/WOOD%20COATING.jpg",
      description: "WOODVIBE 2K PU wood coating"
    },
    {
      id: 23,
      title: "Wooden Flooring Coat",
      category: "Wood",
      image: "/WOOD%20COATINGS/WOOD%20COATING%201.jpg",
      description: "WOODVIBE 2K PU wood stain finish"
    },
    {
      id: 24,
      title: "Architectural Woodwork",
      category: "Wood",
      image: "/WOOD%20COATINGS/WOOD%20COATING%202.jpg",
      description: "WOODVIBE 2K PU clear coat"
    }
  ];

  const categories = ['All', 'Luxury Resort', 'Industrial', 'Marine', 'Floor', 'Wood'];

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
    <section id="gallery" className="py-16 bg-gradient-to-r from-slate-50 via-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Project Gallery</h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Discover our expertise through a showcase of successful projects across luxury resort, industrial, marine, and specialized coating applications.
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
                  ? 'bg-gradient-to-r from-slate-800 via-emerald-800 to-teal-800 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-300'
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
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <Eye className="text-white opacity-0 group-hover:opacity-100 h-12 w-12 transition-opacity duration-300" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-slate-800 via-emerald-800 to-teal-800 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-slate-700">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {totalPages > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full shadow-xl transition-all duration-200 border border-slate-200"
              >
                <ChevronLeft className="h-6 w-6 text-slate-600" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full shadow-xl transition-all duration-200 border border-slate-200"
              >
                <ChevronRight className="h-6 w-6 text-slate-600" />
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
                  index === currentIndex ? 'bg-emerald-500 shadow-lg' : 'bg-slate-300'
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