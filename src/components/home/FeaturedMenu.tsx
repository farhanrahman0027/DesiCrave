import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuCategories, MenuItem } from '../../data/menuData';

const FeaturedMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('popular');
  
  // Get featured items for the active category
  const featuredItems = menuCategories
    .find(category => category.id === activeCategory)?.items
    .filter(item => item.featured)
    .slice(0, 3);

  return (
    <section className="section bg-primary-50">
      <div className="container">
        <h2 className="section-title">Our Signature Dishes</h2>
        <p className="section-subtitle">
          Explore our most beloved dishes, carefully crafted with authentic spices and fresh ingredients
        </p>
        
        <div className="flex flex-wrap justify-center mb-12 space-x-2">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              className={`px-5 py-2 mb-2 text-sm font-medium rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary-800 text-white'
                  : 'bg-white text-primary-800 hover:bg-primary-100'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredItems?.map((item: MenuItem) => (
            <div key={item.id} className="menu-item group">
              <div className="relative overflow-hidden mb-4 rounded-lg aspect-square">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                {item.vegetarian && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    VEG
                  </div>
                )}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{item.name}</h3>
              <p className="mb-4 text-sm text-gray-600 line-clamp-2">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-primary-800">${item.price.toFixed(2)}</span>
                <button className="px-4 py-2 text-sm text-white transition-colors rounded-md bg-accent-600 hover:bg-accent-700">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/menu" className="btn btn-outline">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;