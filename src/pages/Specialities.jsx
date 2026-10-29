import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Check } from 'lucide-react';
import { clinicalSpecialties } from '../data/hospitalData';
import { SpecialtyIcon } from '../components/SpecialtyIcon';

export default function Specialities() {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header */}
      <div className="border-b border-[#E5E1E7] pb-6">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#78266F]">
          CLINICAL SERVICES
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#24212A] mt-1">
          Specialties & Medical Care
        </h1>
        <p className="text-xs sm:text-sm text-[#69636E] mt-2 max-w-2xl leading-relaxed">
          Comprehensive healthcare departments supported by qualified consultant surgeons, outpatient suites, and modern medical technology.
        </p>
      </div>

      {/* Specialties Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clinicalSpecialties.map((spec) => (
          <div
            key={spec.id}
            className="bg-white rounded-md border border-[#E5E1E7] p-6 space-y-4 hover:border-[#78266F] transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded-md bg-[#FAF9FB] border border-[#E5E1E7] flex items-center justify-center mb-3">
                <SpecialtyIcon name={spec.icon} className="w-5 h-5 text-[#78266F]" />
              </div>

              <h2 className="text-lg font-bold text-[#24212A] mb-1">
                {spec.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#69636E] leading-relaxed">
                {spec.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E5E1E7] flex items-center justify-between">
              <Link
                to="/appointment"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#78266F] hover:bg-[#621d5a] text-white text-xs font-semibold transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Enquire For This Specialty</span>
              </Link>

              <Link
                to="/doctors"
                className="text-xs font-semibold text-[#155943] hover:underline inline-flex items-center gap-1"
              >
                <span>View Doctors</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
