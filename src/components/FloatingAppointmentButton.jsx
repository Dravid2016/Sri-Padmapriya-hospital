import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar } from 'lucide-react';

export default function FloatingAppointmentButton() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  // If already on the appointment page, hide floating CTA to avoid redundancy
  const isAppointmentPage = location.pathname === '/appointment';

  useEffect(() => {
    // Optional: Hide button if user is at the very bottom near the footer on desktop, or keep persistently accessible
    const handleScroll = () => {
      // Keep visible across the entire browsing journey
      setIsVisible(true);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isAppointmentPage || !isVisible) return null;

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 pointer-events-auto">
      <Link
        to="/appointment"
        className="group flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#78266F] hover:bg-[#621d5a] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 border border-white/20"
        aria-label="Book an Appointment"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
        </span>
        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform group-hover:scale-110" />
        <span className="text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
          Book an Appointment
        </span>
      </Link>
    </div>
  );
}
