import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo and About */}
          <div>
            <div className="mb-4">
              <Logo variant="light" />
            </div>
            <p className="mb-6 text-gray-300">
              Experience authentic Indian cuisine in a warm and inviting atmosphere. We serve traditional dishes with a modern twist.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 transition-colors rounded-full hover:bg-primary-800">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 transition-colors rounded-full hover:bg-primary-800">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 transition-colors rounded-full hover:bg-primary-800">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="transition-colors hover:text-accent-400">Home</Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-accent-400">About Us</Link>
              </li>
              <li>
                <Link to="/menu" className="transition-colors hover:text-accent-400">Menu</Link>
              </li>
              <li>
                <Link to="/reviews" className="transition-colors hover:text-accent-400">Reviews</Link>
              </li>
              <li>
                <Link to="/gallery" className="transition-colors hover:text-accent-400">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-accent-400">Contact</Link>
              </li>
              <li>
                <Link to="/reservation" className="transition-colors hover:text-accent-400">Reservations</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Opening Hours */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 text-accent-400" />
                <div>
                  <p>Monday - Friday</p>
                  <p className="text-gray-300">11:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 text-accent-400" />
                <div>
                  <p>Saturday - Sunday</p>
                  <p className="text-gray-300">10:00 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-accent-400" />
                <span>123 Restaurant Street, Foodville, IND 500032</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-accent-400" />
                <span>+91 (975) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-accent-400" />
                <span>info@DesiCrave.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6 text-center bg-primary-800">
        <p className="text-gray-300">
          © {currentYear} DesiCrave. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;