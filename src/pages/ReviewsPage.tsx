import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonialData';

const ReviewsPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Customer Reviews</h1>
            <p className="text-xl">
              Read what our customers have to say about their dining experience
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Overview */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 bg-primary-50 rounded-lg shadow-soft">
              <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-2 text-5xl font-bold text-primary-900">4.8</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        fill={i < 4 ? "#f59e0b" : (i === 4 ? "#f59e0b80" : "none")}
                        className={i < 4 ? "text-accent-500" : (i === 4 ? "text-accent-500/50" : "text-gray-300")}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">Based on 120 reviews</p>
                </div>
                
                <div className="col-span-2">
                  {/* 5 stars */}
                  <div className="flex items-center mb-2">
                    <span className="w-16 text-sm text-gray-600">5 stars</span>
                    <div className="flex-1 h-4 mx-2 bg-gray-200 rounded-full">
                      <div className="h-4 bg-accent-500 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <span className="w-16 text-sm text-right text-gray-600">75%</span>
                  </div>
                  
                  {/* 4 stars */}
                  <div className="flex items-center mb-2">
                    <span className="w-16 text-sm text-gray-600">4 stars</span>
                    <div className="flex-1 h-4 mx-2 bg-gray-200 rounded-full">
                      <div className="h-4 bg-accent-500 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                    <span className="w-16 text-sm text-right text-gray-600">20%</span>
                  </div>
                  
                  {/* 3 stars */}
                  <div className="flex items-center mb-2">
                    <span className="w-16 text-sm text-gray-600">3 stars</span>
                    <div className="flex-1 h-4 mx-2 bg-gray-200 rounded-full">
                      <div className="h-4 bg-accent-500 rounded-full" style={{ width: '3%' }}></div>
                    </div>
                    <span className="w-16 text-sm text-right text-gray-600">3%</span>
                  </div>
                  
                  {/* 2 stars */}
                  <div className="flex items-center mb-2">
                    <span className="w-16 text-sm text-gray-600">2 stars</span>
                    <div className="flex-1 h-4 mx-2 bg-gray-200 rounded-full">
                      <div className="h-4 bg-accent-500 rounded-full" style={{ width: '1%' }}></div>
                    </div>
                    <span className="w-16 text-sm text-right text-gray-600">1%</span>
                  </div>
                  
                  {/* 1 star */}
                  <div className="flex items-center">
                    <span className="w-16 text-sm text-gray-600">1 star</span>
                    <div className="flex-1 h-4 mx-2 bg-gray-200 rounded-full">
                      <div className="h-4 bg-accent-500 rounded-full" style={{ width: '1%' }}></div>
                    </div>
                    <span className="w-16 text-sm text-right text-gray-600">1%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-primary-50">
        <div className="container">
          <h2 className="mb-12 text-3xl font-semibold text-center md:text-4xl">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Expanded testimonials with additional reviews */}
            {[...testimonials, 
              {
                id: 5,
                name: 'David Thompson',
                location: 'Los Angeles',
                rating: 5,
                text: 'The lamb rogan josh was incredible! Tender meat and rich, complex flavors. The staff was attentive and made excellent recommendations for wine pairings. Will definitely return next time I\'m in town.',
                image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                id: 6,
                name: 'Sophia Garcia',
                location: 'Miami',
                rating: 4,
                text: 'Absolutely loved the vegetarian thali - it gave me a chance to sample multiple dishes in one go. Great value for money and plenty of food. The restaurant has a wonderful ambiance too.',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                id: 7,
                name: 'Robert Kim',
                location: 'Seattle',
                rating: 5,
                text: 'First time trying Indian cuisine and I couldn\'t have picked a better place! The staff patiently explained the menu and recommended dishes based on my preferences. The butter chicken was amazing!',
                image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                id: 8,
                name: 'Olivia Martinez',
                location: 'Denver',
                rating: 5,
                text: 'Celebrated my anniversary here and it was perfect. They even brought out a special dessert with a candle! The food was outstanding - especially the biryani and paneer dishes.',
                image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              }
            ].map((review) => (
              <div key={review.id} className="p-6 bg-white rounded-lg shadow-soft">
                <div className="flex items-start">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 mr-4 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{review.name}</h3>
                    <p className="text-sm text-gray-600">{review.location}</p>
                    <div className="flex my-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < review.rating ? "#f59e0b" : "none"}
                          className={i < review.rating ? "text-accent-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">"{review.text}"</p>
              </div>
            ))}
          </div>
          
          {/* Leave a Review CTA */}
          <div className="mt-16 text-center">
            <h3 className="mb-4 text-2xl font-semibold">Enjoyed Your Meal?</h3>
            <p className="mb-6 text-gray-600">
              We'd love to hear about your experience. Leave a review and help us improve our service.
            </p>
            <button className="btn btn-primary">
              Write a Review
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;