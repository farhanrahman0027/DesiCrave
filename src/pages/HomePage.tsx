import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import FeaturedMenu from '../components/home/FeaturedMenu';
import Testimonials from '../components/home/Testimonials';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedMenu />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-16 text-white bg-primary-800">
        <div className="container">
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Ready to Experience Authentic Indian Flavors?
              </h2>
              <p className="mb-6 text-lg text-gray-200">
                Reserve your table now and embark on a culinary journey through India without leaving town.
              </p>
              <Link to="/reservation" className="btn btn-accent">
                Book a Table
              </Link>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-lg text-primary-900">
              <h3 className="mb-4 text-2xl font-semibold">Visit Us</h3>
              <div className="flex items-start mb-4 space-x-2">
                <MapPin className="mt-1 text-accent-600" />
                <div>
                  <p className="font-medium">123 Restaurant Street</p>
                  <p className="text-gray-600">Foodville, NY 10001</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="font-medium">Opening Hours:</p>
                <p className="text-gray-600">Monday - Friday: 11:00 AM - 10:00 PM</p>
                <p className="text-gray-600">Saturday - Sunday: 10:00 AM - 11:00 PM</p>
              </div>
              <Link to="/contact" className="text-accent-600 hover:underline">
                View on Map →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;