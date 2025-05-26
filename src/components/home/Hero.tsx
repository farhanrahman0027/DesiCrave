import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen bg-cover bg-center bg-hero-pattern">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative container h-full flex flex-col justify-center">
        <div className="max-w-3xl text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            Experience Authentic
            <span className="block mt-2 text-accent-400">Indian Cuisine</span>
          </h1>
          <p className="mb-8 text-lg text-gray-200 md:text-xl">
            Discover the rich flavors and spices of India in every bite. Our chefs blend traditional recipes with modern techniques to create an unforgettable dining experience.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link to="/menu" className="btn btn-accent">
              Explore Our Menu
            </Link>
            <Link to="/reservation" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary-900">
              Reserve a Table
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;