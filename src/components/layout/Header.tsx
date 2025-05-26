import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" className="nav-link">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/reviews" className="nav-link">
                Reviews
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className="nav-link">
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/reservation" className="btn btn-primary">
                Reserve a Table
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="block p-2 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-primary-900" />
          ) : (
            <Menu className="w-6 h-6 text-primary-900" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="container py-5">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              className="p-2"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-primary-900" />
            </button>
          </div>

          <nav className="mt-10">
            <ul className="space-y-6">
              <li>
                <NavLink
                  to="/"
                  className="block text-xl nav-link"
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block text-xl nav-link"
                  onClick={closeMenu}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  className="block text-xl nav-link"
                  onClick={closeMenu}
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/reviews"
                  className="block text-xl nav-link"
                  onClick={closeMenu}
                >
                  Reviews
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className="block text-xl nav-link"
                  onClick={closeMenu}
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="block text-xl nav-link"
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
              <li className="pt-4">
                <NavLink
                  to="/reservation"
                  className="inline-block btn btn-primary"
                  onClick={closeMenu}
                >
                  Reserve a Table
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;