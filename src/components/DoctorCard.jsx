import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function DoctorCard({ doctor }) {
  return (
    <div className="bg-[#FAF9FB] rounded-xl border border-[#E5E1E7] flex flex-col h-full overflow-hidden hover:border-[#78266F] transition-colors shadow-xs">
      
      {/* 4:5 Aspect Ratio Photo Container with Pristine Studio Lighting */}
      <div className="w-full aspect-4/5 bg-white flex items-end justify-center border-b border-[#E5E1E7] overflow-hidden">
        {doctor.photo ? (
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-white text-[#78266F]">
            <div className="w-16 h-16 rounded-full bg-[#FAF9FB] flex items-center justify-center font-bold text-xl mb-1">
              {doctor.name.split(' ').map(n => n[0]).join('').slice(0, 3)}
            </div>
            <span className="text-[11px] text-[#69636E]">Portrait Pending</span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-[#FAF9FB]">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#155943] block">
            {doctor.speciality.split('|')[0].trim()}
          </span>

          <h3 className="text-base font-bold text-[#24212A] mt-0.5 leading-snug">
            <Link to={`/doctors/${doctor.slug}`} className="hover:text-[#78266F] transition-colors">
              {doctor.name}
            </Link>
          </h3>

          <p className="text-xs text-[#69636E] mt-0.5">
            {doctor.qualifications}
          </p>

          <p className="text-xs text-[#24212A] mt-2 font-medium">
            {doctor.schedule}
          </p>
        </div>

        {/* Buttons / Actions */}
        <div className="pt-2 border-t border-[#E5E1E7] flex items-center justify-between gap-2">
          <Link
            to={`/doctors/${doctor.slug}`}
            className="text-xs font-semibold text-[#78266F] hover:underline inline-flex items-center gap-1"
          >
            <span>View Profile</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            to={`/appointment?doctor=${encodeURIComponent(doctor.name)}`}
            className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#78266F] to-[#482047] hover:from-[#651f5e] hover:to-[#3b193a] text-white text-xs font-bold transition-all shadow-xs hover:shadow-sm"
          >
            Enquire
          </Link>
        </div>

      </div>

    </div>
  );
}
