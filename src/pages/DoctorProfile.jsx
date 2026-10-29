import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Check } from 'lucide-react';
import { doctorsData } from '../data/hospitalData';
import AppointmentForm from '../components/AppointmentForm';

export default function DoctorProfile() {
  const { slug } = useParams();
  const doctor = doctorsData.find(d => d.slug === slug);

  if (!doctor) {
    return <Navigate to="/doctors" replace />;
  }

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Breadcrumb */}
      <div>
        <Link 
          to="/doctors" 
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#69636E] hover:text-[#78266F] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Our Doctors</span>
        </Link>
      </div>

      {/* Main Profile Layout */}
      <div className="bg-white rounded-md border border-[#E5E1E7] p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left: 4:5 White Background Portrait */}
          <div className="md:col-span-4 flex flex-col items-center">
            <div className="w-full max-w-xs aspect-4/5 rounded-md border border-[#E5E1E7] p-3 bg-white flex items-center justify-center">
              {doctor.photo ? (
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  className="w-full h-full object-contain object-bottom"
                />
              ) : (
                <div className="text-center text-[#69636E] text-xs">
                  Portrait Pending
                </div>
              )}
            </div>

            <div className="mt-3 w-full max-w-xs p-3 rounded-md bg-[#FAF9FB] border border-[#E5E1E7] text-center">
              <span className="text-[11px] font-semibold text-[#69636E] uppercase tracking-wider block">
                OPD Consultation Fee
              </span>
              <span className="text-base font-bold text-[#78266F] mt-0.5 block">
                {doctor.opdFee || "Pending Confirmation"}
              </span>
            </div>
          </div>

          {/* Right: Info */}
          <div className="md:col-span-8 space-y-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#155943]">
                {doctor.title}
              </span>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#24212A] mt-0.5">
                {doctor.name}
              </h1>

              <p className="text-xs sm:text-sm font-medium text-[#69636E] mt-0.5">
                {doctor.qualifications}
              </p>

              <div className="text-xs font-bold text-[#78266F] mt-2">
                Specialty: {doctor.speciality}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#24212A] leading-relaxed">
              {doctor.experienceSummary}
            </p>

            {doctor.specialInterests && (
              <div className="pt-2">
                <h3 className="text-xs font-bold text-[#24212A] uppercase tracking-wider mb-2">
                  Key Focus Areas & Clinical Practice
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#24212A]">
                  {doctor.specialInterests.map((interest, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-md bg-[#FAF9FB] border border-[#E5E1E7]">
                      <Check className="w-3.5 h-3.5 text-[#155943] shrink-0" />
                      <span>{interest}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="p-4 rounded-md bg-[#FAF9FB] border border-[#E5E1E7] space-y-1 text-xs">
              <div className="font-bold text-[#24212A] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#78266F]" />
                <span>Consultation Timings</span>
              </div>
              <p className="text-[#24212A] font-semibold">{doctor.schedule}</p>
              <p className="text-[#69636E] text-[11px]">
                Hospital front desk verifies consultation schedules prior to clinical visit.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Embedded Appointment Form for this Doctor */}
      <div className="max-w-2xl mx-auto">
        <AppointmentForm defaultDoctor={doctor.name} />
      </div>

    </div>
  );
}
