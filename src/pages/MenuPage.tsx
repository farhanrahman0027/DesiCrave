import React, { useState } from 'react';
import { Flame } from 'lucide-react';
import { menuCategories } from '../data/menuData';

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('popular');
  
  // Get items for the active category
  const activeItems = menuCategories.find(category => category.id === activeCategory)?.items || [];

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

          {/* Menu Items */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {activeItems.map((item) => (
              <div key={item.id} className="menu-item group">
                <div className="relative overflow-hidden mb-4 rounded-lg aspect-square">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 flex space-x-2">
                    {item.vegetarian && (
                      <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                        VEG
                      </div>
                    )}
                    {item.spiceLevel > 0 && (
                      <div className={`flex items-center bg-red-${100 + item.spiceLevel * 200} text-red-${500 + item.spiceLevel * 100} text-xs font-bold px-2 py-1 rounded`}>
                        {[...Array(item.spiceLevel)].map((_, i) => (
                          <Flame key={i} size={12} className="mr-0.5" />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{item.name}</h3>
                <p className="mb-4 text-sm text-gray-600">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-primary-800">${item.price.toFixed(2)}</span>
                  <button className="px-4 py-2 text-sm text-white transition-colors rounded-md bg-accent-600 hover:bg-accent-700">
                    Add to Order
                  </button>
                </div>
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