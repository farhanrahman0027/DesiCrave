import React from 'react';
import ReservationForm from '../components/reservation/ReservationForm';

const ReservationPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Make a Reservation</h1>
            <p className="text-xl">
              Reserve your table and enjoy an authentic Indian dining experience
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <ReservationForm />
        </div>
      </section>

      {/* Private Events */}
      <section className="py-16 bg-primary-50">
        <div className="container">
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <img
                src="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Private dining area"
                className="w-full rounded-lg shadow-card"
              />
            </div>
            <div>
              <div className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-accent-100 text-accent-800">
                Private Events
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Host Your Special Occasion With Us
              </h2>
              <p className="mb-6 text-gray-600">
                Looking for a venue for your next corporate event, birthday celebration, 
                or family gathering? Indian Cafe offers private dining spaces that can 
                accommodate groups of various sizes.
              </p>
              <p className="mb-6 text-gray-600">
                Our dedicated events team will work with you to create a customized menu 
                and experience tailored to your specific needs and preferences.
              </p>
              <p className="mb-8 text-gray-600">
                Contact us at events@indiancafe.com or call (555) 987-6543 to inquire 
                about availability and pricing.
              </p>
              <button className="btn btn-primary">
                Inquire About Private Events
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReservationPage;