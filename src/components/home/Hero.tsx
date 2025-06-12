import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative my-20 h-screen bg-cover bg-center bg-hero-pattern">
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  {/* Content Wrapper */}
  <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start sm:items-center">
    <div className="max-w-3xl text-white text-left sm:text-center">
      <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        Experience Authentic
        <span className="block mt-2 text-accent-400">Indian Cuisine</span>
      </h1>

      <p className="mb-8 text-base sm:text-lg md:text-xl text-gray-200">
        Discover the rich flavors and spices of India in every bite. Our chefs blend traditional recipes with modern techniques to create an unforgettable dining experience.
      </p>

      <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
        <Link
          to="/menu"
          className="btn btn-accent text-center px-6 py-3 text-base font-semibold rounded-md shadow-md hover:scale-105 transition bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700"
        >
          Explore Our Menu
        </Link>
        <Link
          to="/reservation"
          className="btn btn-outline text-white border-white px-6 py-3 text-base font-semibold rounded-md hover:bg-white hover:text-primary-900 hover:scale-105 transition"
        >
          Reserve a Table
        </Link>
      </div>
    </div>
  </div>
</section>

  );
};

export default Hero;