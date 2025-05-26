import React, { useState } from 'react';
import { X } from 'lucide-react';
import { galleryImages } from '../data/galleryData';

const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Gallery</h1>
            <p className="text-xl">
              Take a visual tour of our restaurant, dishes, and happy moments
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-wrap justify-center mb-12 space-x-2">
            <button
              className={`px-6 py-3 mb-2 text-sm font-medium rounded-full transition-colors ${
                activeFilter === 'all'
                  ? 'bg-primary-800 text-white'
                  : 'bg-primary-50 text-primary-800 hover:bg-primary-100'
              }`}
              onClick={() => setActiveFilter('all')}
            >
              All Photos
            </button>
            <button
              className={`px-6 py-3 mb-2 text-sm font-medium rounded-full transition-colors ${
                activeFilter === 'food'
                  ? 'bg-primary-800 text-white'
                  : 'bg-primary-50 text-primary-800 hover:bg-primary-100'
              }`}
              onClick={() => setActiveFilter('food')}
            >
              Food
            </button>
            <button
              className={`px-6 py-3 mb-2 text-sm font-medium rounded-full transition-colors ${
                activeFilter === 'restaurant'
                  ? 'bg-primary-800 text-white'
                  : 'bg-primary-50 text-primary-800 hover:bg-primary-100'
              }`}
              onClick={() => setActiveFilter('restaurant')}
            >
              Restaurant
            </button>
            <button
              className={`px-6 py-3 mb-2 text-sm font-medium rounded-full transition-colors ${
                activeFilter === 'people'
                  ? 'bg-primary-800 text-white'
                  : 'bg-primary-50 text-primary-800 hover:bg-primary-100'
              }`}
              onClick={() => setActiveFilter('people')}
            >
              People
            </button>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => openLightbox(image.src)}
              >
                <div className="relative aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-0 opacity-0 group-hover:bg-opacity-40 group-hover:opacity-100">
                    <div className="p-2 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-sm font-medium">{image.alt}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90" onClick={closeLightbox}>
          <button 
            className="absolute p-2 bg-white rounded-full top-4 right-4"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-90vh object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;