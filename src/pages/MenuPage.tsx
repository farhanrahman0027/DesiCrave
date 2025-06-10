import React, { useState } from 'react';
import { Flame, Heart, Star, Plus, Clock, Award } from 'lucide-react';
import { menuCategories } from '../data/menuData';

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('popular');
  const [favorites, setFavorites] = useState<number[]>([]);
  
  // Get items for the active category
  const activeItems = menuCategories.find(category => category.id === activeCategory)?.items || [];

  const toggleFavorite = (itemId: number) => {
    setFavorites(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Menu</h1>
            <p className="text-xl">
              Explore our wide selection of authentic Indian dishes
            </p>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex flex-wrap justify-center mb-12 space-x-2">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-3 mb-2 text-sm font-medium rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-800 text-white'
                    : 'bg-primary-50 text-primary-800 hover:bg-primary-100'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Enhanced Menu Items Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {activeItems.map((item) => (
              <div key={item.id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100">
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <div className="flex flex-col gap-2">
                      {item.vegetarian && (
                        <div className="bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm bg-opacity-90 flex items-center gap-1">
                          <span className="text-xs">🌿</span>
                          VEG
                        </div>
                      )}
                      {item.spiceLevel > 0 && (
                        <div className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm bg-opacity-90 flex items-center gap-1">
                          {[...Array(item.spiceLevel)].map((_, i) => (
                            <Flame key={i} size={10} className="text-yellow-300" />
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* Favorite Button */}
                    <button
                      onClick={() => toggleFavorite(item.id)}
                      className="p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-110"
                    >
                      <Heart 
                        className={`w-4 h-4 transition-colors ${
                          favorites.includes(item.id) 
                            ? 'text-red-500 fill-red-500' 
                            : 'text-gray-600 hover:text-red-500'
                        }`} 
                      />
                    </button>
                  </div>

                  {/* Bottom Info on Image */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span className="text-xs font-semibold text-gray-800">
                          4.{Math.floor(Math.random() * 5) + 5}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <Clock className="w-3 h-3 text-gray-600" />
                        <span className="text-xs font-semibold text-gray-800">
                          {15 + Math.floor(Math.random() * 20)} min
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Popular Badge */}
                  {Math.random() > 0.7 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        Popular
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Card Content */}
                <div className="p-6 relative">
                  {/* Title and Description */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-800 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Additional Info */}
                  <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Fresh ingredients
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Chef's special
                    </span>
                  </div>
                  
                  {/* Price and Action */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-primary-800">
                        ${item.price.toFixed(2)}
                      </span>
                      <span className="text-xs text-gray-500">
                        per serving
                      </span>
                    </div>
                    
                    <button className="group/btn relative overflow-hidden bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
                      <span className="relative z-10 flex items-center gap-2">
                        <Plus className="w-4 h-4 transition-transform group-hover/btn:rotate-90" />
                        Add to Order
                      </span>
                      
                      {/* Button shine effect */}
                      <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                      
                      {/* Button slide effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    </button>
                  </div>

                  {/* Hover overlay content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-50/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none rounded-2xl"></div>
                </div>

                {/* Card border glow effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-200 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Diets Section */}
      <section className="py-16 bg-primary-50">
        <div className="container">
          <h2 className="mb-12 text-3xl font-semibold text-center md:text-4xl">Special Dietary Options</h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-8 text-center bg-white rounded-lg shadow-soft">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-green-600">
                <span className="text-2xl font-bold">V</span>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Vegetarian</h3>
              <p className="text-gray-600">
                We offer a wide selection of delicious vegetarian dishes, crafted with fresh vegetables and aromatic spices.
              </p>
            </div>
            
            <div className="p-8 text-center bg-white rounded-lg shadow-soft">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-blue-600">
                <span className="text-2xl font-bold">GF</span>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Gluten-Free</h3>
              <p className="text-gray-600">
                Many of our dishes are naturally gluten-free. We can adapt most other dishes to accommodate gluten sensitivities.
              </p>
            </div>
            
            <div className="p-8 text-center bg-white rounded-lg shadow-soft">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-primary-600">
                <span className="text-2xl font-bold">DF</span>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Dairy-Free</h3>
              <p className="text-gray-600">
                We can prepare many of our dishes without dairy products. Just inform your server of your dietary preferences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;