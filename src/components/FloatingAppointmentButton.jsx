import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar } from 'lucide-react';

export default function FloatingAppointmentButton() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  // If already on the appointment page, hide floating CTA to avoid redundancy
  const isAppointmentPage = location.pathname === '/appointment';

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isAppointmentPage || !isVisible) return null;

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 pointer-events-auto">
      {/* On Mobile Screens: Circular Floating Action Button with Calendar */}
      <div className="sm:hidden">
        <Link
          to="/appointment"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#78266F] hover:bg-[#621d5a] text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/30"
          aria-label="Book an Appointment"
        >
          {/* Green Status Dot Badge */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white"></span>
          </span>

          <Calendar className="w-7 h-7 text-white transition-transform group-hover:scale-110" />
        </Link>
      </div>

      {/* On Desktop & Tablet Screens: Circular Rounded-Pill Button with Green Status Dot */}
      <div className="hidden sm:block">
        <Link
          to="/appointment"
          className="group flex items-center gap-3 px-5 py-3 rounded-full bg-[#78266F] hover:bg-[#621d5a] text-white shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 border border-white/20"
          aria-label="Book an Appointment"
        >
          {/* Circular green indicator dot with glowing ring */}
          <span className="relative flex h-3.5 w-3.5 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
          </span>

          <Calendar className="w-4 h-4 text-white transition-transform group-hover:scale-110" />

          <span className="text-sm font-semibold tracking-wide whitespace-nowrap">
            Book an Appointment
          </span>
        </Link>
      </div>
    </div>
  );
}

