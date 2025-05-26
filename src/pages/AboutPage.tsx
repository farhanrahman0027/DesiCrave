import React from 'react';
import { Award, Users, Utensils } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Story</h1>
            <p className="text-xl">
              Experience the rich culinary heritage of India through our authentic dishes
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <div className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-accent-100 text-accent-800">
                Our Journey
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                From Mumbai to New York: A Culinary Adventure
              </h2>
              <p className="mb-4 text-gray-600">
                Indian Cafe was founded in 2010 by Chef Raj Kumar, who brought his family's 
                treasured recipes from Mumbai to New York. What started as a small 
                family-run establishment has grown into one of the city's most beloved 
                Indian restaurants.
              </p>
              <p className="mb-4 text-gray-600">
                Our philosophy is simple: use the freshest ingredients, authentic spices 
                imported directly from various regions of India, and time-honored cooking 
                techniques to create dishes that capture the essence of Indian cuisine.
              </p>
              <p className="text-gray-600">
                Over the years, we have expanded our menu to include regional specialties 
                from across India, while maintaining the quality and authenticity that our 
                customers have come to expect.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Chef preparing food"
                className="w-full rounded-lg shadow-card"
              />
              <div className="absolute -bottom-6 -left-6 hidden md:block">
                <img
                  src="https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Indian spices"
                  className="w-48 h-48 object-cover rounded-lg shadow-card"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-50">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 text-center bg-white rounded-lg shadow-soft">
              <div className="flex justify-center mb-4">
                <Users size={48} className="text-accent-500" />
              </div>
              <h3 className="mb-2 text-4xl font-bold text-primary-900">25,000+</h3>
              <p className="text-lg text-gray-600">Happy Customers</p>
            </div>
            <div className="p-8 text-center bg-white rounded-lg shadow-soft">
              <div className="flex justify-center mb-4">
                <Utensils size={48} className="text-accent-500" />
              </div>
              <h3 className="mb-2 text-4xl font-bold text-primary-900">50+</h3>
              <p className="text-lg text-gray-600">Authentic Dishes</p>
            </div>
            <div className="p-8 text-center bg-white rounded-lg shadow-soft">
              <div className="flex justify-center mb-4">
                <Award size={48} className="text-accent-500" />
              </div>
              <h3 className="mb-2 text-4xl font-bold text-primary-900">12</h3>
              <p className="text-lg text-gray-600">Culinary Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            The talented individuals behind our delicious food and exceptional service
          </p>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Chef */}
            <div className="overflow-hidden rounded-lg shadow-card group">
              <div className="relative overflow-hidden aspect-square">
                <img
                  src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Chef Raj Kumar"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-semibold">Chef Raj Kumar</h3>
                <p className="mb-4 text-accent-600">Executive Chef & Founder</p>
                <p className="text-gray-600">
                  With over 20 years of culinary experience, Chef Raj brings authentic 
                  flavors from his hometown in Mumbai to every dish he creates.
                </p>
              </div>
            </div>
            
            {/* Manager */}
            <div className="overflow-hidden rounded-lg shadow-card group">
              <div className="relative overflow-hidden aspect-square">
                <img
                  src="https://images.pexels.com/photos/5119214/pexels-photo-5119214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Priya Sharma"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-semibold">Priya Sharma</h3>
                <p className="mb-4 text-accent-600">Restaurant Manager</p>
                <p className="text-gray-600">
                  Priya ensures that every guest receives impeccable service and 
                  leaves with a smile, creating a warm and welcoming atmosphere.
                </p>
              </div>
            </div>
            
            {/* Sous Chef */}
            <div className="overflow-hidden rounded-lg shadow-card group">
              <div className="relative overflow-hidden aspect-square">
                <img
                  src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Arjun Patel"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-semibold">Arjun Patel</h3>
                <p className="mb-4 text-accent-600">Sous Chef</p>
                <p className="text-gray-600">
                  Specializing in regional cuisines from northern India, Arjun 
                  brings creativity and innovation to our traditional menu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;