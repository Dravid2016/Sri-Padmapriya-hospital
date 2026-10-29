import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Check } from 'lucide-react';
import { hospitalFacilitiesList } from '../data/hospitalData';

export default function Facilities() {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header */}
      <div className="border-b border-[#E5E1E7] pb-6">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#78266F]">
          INFRASTRUCTURE
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#24212A] mt-1">
          Hospital Facilities & Services
        </h1>
        <p className="text-xs sm:text-sm text-[#69636E] mt-2 max-w-2xl leading-relaxed">
          Sri Padmapriya Hospital provides dedicated clinical rooms, modern diagnostic imaging suites, laboratory testing, and inpatient facilities.
        </p>
      </div>

      {/* Facilities Categories Grid (Clean Typographic Layout Without Floor Plan Image) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hospitalFacilitiesList.map((fac, idx) => (
          <div 
            key={idx}
            className="bg-white rounded-md border border-[#E5E1E7] p-6 space-y-4 hover:border-[#78266F] transition-colors"
          >
            <h2 className="text-base font-bold text-[#24212A] border-b border-[#E5E1E7] pb-3">
              {fac.category}
            </h2>

            <ul className="space-y-2 text-xs text-[#24212A]">
              {fac.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#155943] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom CTA Card */}
      <div className="bg-[#FAF9FB] rounded-md border border-[#E5E1E7] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-[#24212A]">
            Need More Information on Facility Availability?
          </h3>
          <p className="text-xs text-[#69636E] mt-1">
            Our hospital reception desk can assist you with bed availability, diagnostic schedules, and specialist appointments.
          </p>
        </div>

        <Link
          to="/appointment"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[#78266F] hover:bg-[#621d5a] text-white text-xs font-semibold shrink-0 transition-colors"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book an Appointment</span>
        </Link>
      </div>

    </div>
  );
}
