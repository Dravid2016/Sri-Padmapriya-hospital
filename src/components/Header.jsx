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
        
        {/* DESKTOP HEADER (xl and above): Nav in Center/Left, Book Appointment on Right */}
        <div className="hidden xl:flex items-center justify-between h-20">
          {/* Navigation Links */}
          <nav className="flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-1.5 text-[14px] font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-[#78266F] border-b-2 border-[#78266F] font-semibold'
                    : 'text-[#24212A] hover:text-[#78266F]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Book Appointment Button on the Right */}
          <div className="flex items-center">
            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#78266F] hover:bg-[#621d5a] text-white text-xs sm:text-sm font-semibold transition-colors active:scale-95 shadow-xs"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book an Appointment</span>
            </Link>
          </div>
        </div>

        {/* MOBILE & TABLET HEADER (< xl): Menu + Book Appointment */}
        <div className="flex xl:hidden items-center justify-between h-16 sm:h-20">
          {/* Left: Menu Toggle + Book Appointment Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-[#24212A] hover:bg-[#FAF9FB] focus:outline-none border border-[#E5E1E7]"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <Link
              to="/appointment"
              className="inline-flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-md bg-[#78266F] hover:bg-[#621d5a] text-white text-xs sm:text-sm font-semibold transition-colors active:scale-95 shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              <span>Book an Appointment</span>
            </Link>
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
