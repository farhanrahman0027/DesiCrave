import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail, User } from 'lucide-react';

const ReservationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const validateForm = () => {
    const newErrors = {
      name: formData.name ? '' : 'Name is required',
      email: formData.email ? (
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) 
          ? '' 
          : 'Please enter a valid email'
      ) : 'Email is required',
      phone: formData.phone ? '' : 'Phone number is required',
      date: formData.date ? '' : 'Date is required',
      time: formData.time ? '' : 'Time is required',
    };
    
    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would submit the form data to a server here
      console.log('Form submitted:', formData);
      setSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        specialRequests: '',
      });
    }
  };
  
  // Generate time slots from 11 AM to 10 PM
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 11; hour <= 22; hour++) {
      const hourFormatted = hour <= 12 ? hour : hour - 12;
      const period = hour < 12 ? 'AM' : 'PM';
      
      slots.push(`${hourFormatted}:00 ${period}`);
      slots.push(`${hourFormatted}:30 ${period}`);
    }
    return slots;
  };
  
  const timeSlots = generateTimeSlots();

  return (
    <div className="max-w-2xl mx-auto">
      {submitted ? (
        <div className="p-8 text-center bg-green-50 rounded-lg">
          <h3 className="mb-4 text-2xl font-semibold text-green-800">Reservation Successful!</h3>
          <p className="mb-6 text-green-700">
            Thank you for your reservation request. We've sent a confirmation to your email.
            We look forward to serving you!
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn btn-primary"
          >
            Make Another Reservation
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-8 bg-white rounded-lg shadow-card">
          <h3 className="mb-6 text-2xl font-semibold text-center">Reserve Your Table</h3>
          
          <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input pl-10 ${errors.name ? 'border-red-500' : ''}`}
                  placeholder="John Doe"
                />
              </div>
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input pl-10 ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="john@example.com"
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
            
            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                  <Phone size={18} />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`form-input pl-10 ${errors.phone ? 'border-red-500' : ''}`}
                  placeholder="(555) 123-4567"
                />
              </div>
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>
            
            {/* Date Field */}
            <div>
              <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-700">
                Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                  <Calendar size={18} />
                </div>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={`form-input pl-10 ${errors.date ? 'border-red-500' : ''}`}
                />
              </div>
              {errors.date && <p className="mt-1 text-sm text-red-500">{errors.date}</p>}
            </div>
            
            {/* Time Field */}
            <div>
              <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-700">
                Time
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                  <Clock size={18} />
                </div>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`form-input pl-10 ${errors.time ? 'border-red-500' : ''}`}
                >
                  <option value="">Select a time</option>
                  {timeSlots.map((slot, index) => (
                    <option key={index} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
              {errors.time && <p className="mt-1 text-sm text-red-500">{errors.time}</p>}
            </div>
            
            {/* Number of Guests */}
            <div>
              <label htmlFor="guests" className="block mb-2 text-sm font-medium text-gray-700">
                Number of Guests
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                  <Users size={18} />
                </div>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="form-input pl-10"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'person' : 'people'}
                    </option>
                  ))}
                  <option value="more">More than 10</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Special Requests */}
          <div className="mb-6">
            <label htmlFor="specialRequests" className="block mb-2 text-sm font-medium text-gray-700">
              Special Requests (Optional)
            </label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              rows={4}
              value={formData.specialRequests}
              onChange={handleChange}
              className="form-input"
              placeholder="Please let us know if you have any special requests or dietary restrictions..."
            />
          </div>
          
          <button type="submit" className="w-full btn btn-primary">
            Reserve Now
          </button>
        </form>
      )}
    </div>
  );
};

export default ReservationForm;