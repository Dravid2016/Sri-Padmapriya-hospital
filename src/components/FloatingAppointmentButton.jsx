import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plus } from 'lucide-react';

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
      <Link
        to="/appointment"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#78266F] hover:bg-[#621d5a] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/40"
        aria-label="Book an Appointment"
        title="Book an Appointment"
      >
        {/* Pulsing Green Online/Active Indicator Ring */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white"></span>
        </span>

        {/* Clean, centered Medical Plus Icon with smooth hover rotate */}
        <Plus className="w-8 h-8 sm:w-9 sm:h-9 text-white stroke-[2.75] transition-transform duration-300 group-hover:rotate-90" />

        {/* Hover Tooltip on Desktop */}
        <span className="hidden sm:block absolute right-full mr-3.5 px-3 py-1.5 rounded-lg bg-[#24212A] text-white text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-md">
          Book an Appointment
        </span>
      </Link>
    </div>
  );
}

