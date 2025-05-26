import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Restaurant interior"
              className="w-full h-full object-cover rounded-lg shadow-card"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <img
                src="https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Indian spices"
                className="w-48 h-48 object-cover rounded-lg shadow-card"
              />
            </div>
          </div>
          
          <div>
            <div className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-accent-100 text-accent-800">
              About Us
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              A Culinary Journey Through India
            </h2>
            <p className="mb-6 text-gray-600">
              Welcome to Indian Cafe, where we bring the diverse and rich culinary traditions of India to your table. Our restaurant is a celebration of authentic flavors, aromatic spices, and time-honored recipes that have been passed down through generations.
            </p>
            <p className="mb-6 text-gray-600">
              Our team of expert chefs, led by Master Chef Raj Kumar, craft each dish with passion and precision, ensuring an unforgettable dining experience that transports you straight to the heart of India.
            </p>
            <Link to="/about" className="btn btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;