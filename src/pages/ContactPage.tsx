import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
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
      message: formData.message ? '' : 'Message is required',
    };

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        subject: '',
        message: '',
      });
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Us</h1>
            <p className="text-xl">
              Get in touch with us for reservations, feedback, or inquiries
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-3xl font-semibold">Get In Touch</h2>
              <p className="mb-8 text-gray-600">
                Have questions or feedback? We'd love to hear from you. Fill out the form
                or contact us directly using the information below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 mr-4 text-white rounded-full bg-primary-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-medium">Our Location</h3>
                    <p className="text-gray-600">123 Restaurant Street, Foodville, IND 500032</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 mr-4 text-white rounded-full bg-primary-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-medium">Phone Number</h3>
                    <p className="text-gray-600">+91 (975) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 mr-4 text-white rounded-full bg-primary-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-medium">Email Address</h3>
                    <p className="text-gray-600">info@DesiCrave.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 mr-4 text-white rounded-full bg-primary-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-medium">Opening Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 11:00 AM - 10:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              {/* Map */}
              <div className="mt-8 rounded-lg overflow-hidden h-64 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24131787.126362424!2d68.1766456327027!3d20.59368405374996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff91a8c5a4b%3A0x236d3b818f23b73!2sIndia!5e0!3m2!1sen!2sin!4v1718275902811!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="India Map"
                ></iframe>
              </div>

            </div>

            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="p-8 text-center bg-green-50 rounded-lg">
                  <h3 className="mb-4 text-2xl font-semibold text-green-800">Message Sent!</h3>
                  <p className="mb-6 text-green-700">
                    Thank you for contacting us. We've received your message and will respond shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 bg-primary-50 rounded-lg">
                  <h2 className="mb-6 text-3xl font-semibold">Send Us a Message</h2>

                  <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Reservation Inquiry"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`form-input ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="How can we help you?"
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>

                  <button type="submit" className="w-full flex items-center justify-center btn btn-primary">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;