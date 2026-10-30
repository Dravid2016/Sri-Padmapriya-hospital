import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Specialties', path: '/specialities' },
    { name: 'Our Doctors', path: '/doctors' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Patient Information', path: '/patient-info' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E1E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Side: Mobile Menu Toggle, Desktop Navigation & Left Appointment Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Mobile Menu Button on the Left */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-md text-[#24212A] hover:bg-[#FAF9FB] focus:outline-none border border-[#E5E1E7]"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Book Appointment Button on Left */}
            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-md bg-[#78266F] hover:bg-[#621d5a] text-white text-xs sm:text-sm font-semibold transition-colors active:scale-95 shadow-xs"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span className="hidden xs:inline">Book an Appointment</span>
              <span className="xs:hidden">Book</span>
            </Link>

            {/* Desktop Navigation on Left */}
            <nav className="hidden xl:flex items-center gap-1 ml-2" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 text-[13px] font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-[#78266F] border-b-2 border-[#78266F] font-semibold'
                      : 'text-[#24212A] hover:text-[#78266F]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Side: Hospital Logo (Removed on the Home Screen, shown on all other pages) */}
          <div className="flex items-center">
            {!isHomePage && (
              <Link to="/" className="flex items-center gap-3 focus:outline-none">
                <img 
                  src="/images/brand/official_hospital_logo.png" 
                  alt="Sri Padmapriya Hospital Pvt. Ltd. Adyar Chennai" 
                  className="h-9 sm:h-11 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </Link>
            )}
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="xl:hidden bg-white border-b border-[#E5E1E7] px-4 pt-2 pb-6 space-y-1 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 rounded-md text-sm font-medium ${
                isActive(link.path)
                  ? 'text-[#78266F] bg-[#FAF9FB] font-semibold'
                  : 'text-[#24212A] hover:bg-[#FAF9FB]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-[#E5E1E7]">
            <Link
              to="/appointment"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#78266F] text-white text-sm font-semibold text-center"
            >
              <Calendar className="w-4 h-4" />
              Book an Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
