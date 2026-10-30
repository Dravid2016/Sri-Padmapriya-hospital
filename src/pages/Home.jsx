import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, Phone, Building2, Check, Clock, ShieldCheck, LayoutGrid, Sliders } from 'lucide-react';
import { hospitalInfo, doctorsData, clinicalSpecialties } from '../data/hospitalData';
import DoctorCard from '../components/DoctorCard';
import GradientCarousel from '../components/GradientCarousel';
import { SpecialtyIcon } from '../components/SpecialtyIcon';

export default function Home() {
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' | 'grid'
  const approvedDoctors = doctorsData.filter(d => d.rosterApproved);
  const featuredDoctors = approvedDoctors.slice(0, 4);

  return (
    <div className="space-y-12 sm:space-y-16">
      
      {/* 1. HERO SECTION WITH PURPLE DOCTOR ARTWORK BACKGROUND & CRISP SPLIT VIEW */}
      <section className="relative overflow-hidden border-b border-[#E5E1E7] bg-[#FAF8FB] min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] flex items-center">
        
        {/* Purple Doctor Artwork Background moved further to the right */}
        <div className="absolute inset-y-0 right-0 w-[80%] sm:w-[50%] lg:w-[44%] xl:w-[40%] z-0 pointer-events-none flex items-center justify-end overflow-hidden">
          <img
            src="/images/hospital/doctor_illustration_purple.png"
            alt="Sri Padmapriya Hospital Medical Specialist Care"
            className="w-full h-full object-cover object-[right_center] translate-x-4 sm:translate-x-8 lg:translate-x-12 opacity-90 sm:opacity-100"
          />
          {/* Subtle smooth gradient fade on left of the artwork to blend naturally with the text area */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#FAF8FB] via-[#FAF8FB]/80 to-transparent hidden sm:block" />
          {/* Mobile soft white/lavender tint overlay so left text remains 100% legible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8FB] via-[#FAF8FB]/85 to-transparent sm:hidden" />
        </div>

        {/* Hero Content on the Left */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
          <div className="max-w-md sm:max-w-lg text-left space-y-4">
            
            {/* Hospital Logo: Visible on mobile screens */}
            <div className="flex items-center sm:hidden pb-1">
              <img 
                src="/images/brand/official_hospital_logo.png" 
                alt="Sri Padmapriya Hospital Pvt. Ltd." 
                className="h-10 xs:h-12 w-auto object-contain filter drop-shadow-xs"
              />
            </div>

            <div className="text-[11px] font-bold tracking-wider uppercase text-[#78266F]">
              PATIENT-FOCUSED HEALTHCARE IN ADYAR, CHENNAI
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#24212A] tracking-tight leading-[1.14]">
              Compassionate Care. <br />
              Trusted Expertise. <br />
              <span className="text-[#78266F]">Better Health.</span>
            </h1>

            <p className="text-xs sm:text-sm text-[#69636E] leading-relaxed max-w-md">
              Comprehensive specialist consultations and patient-focused care for you and your family.
            </p>

            {/* CTAs on Left */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-1">
              <Link
                to="/appointment"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#78266F] hover:bg-[#621d5a] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book an Appointment</span>
              </Link>

              <Link
                to="/doctors"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#155943] hover:text-[#0e4030] transition-colors py-1"
              >
                <span>Explore Our Doctors</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST AND HOSPITAL INFORMATION BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF9FB] rounded-md border border-[#E5E1E7] p-5 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {hospitalInfo.trustPoints.map((point) => (
              <div key={point.id} className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-md bg-white border border-[#E5E1E7] flex items-center justify-center shrink-0">
                  <SpecialtyIcon name={point.icon} className="w-4 h-4 text-[#78266F]" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#24212A]">
                    {point.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#69636E] mt-0.5 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 3. SPECIALTIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 mb-6 border-b border-[#E5E1E7] gap-2">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#78266F]">
              OUR SPECIALTIES
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#24212A] mt-0.5">
              Comprehensive Care for a Healthier Tomorrow
            </h2>
          </div>

          <Link
            to="/specialities"
            className="text-xs font-semibold text-[#155943] hover:underline inline-flex items-center gap-1 self-start sm:self-auto"
          >
            <span>View All Specialties</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {clinicalSpecialties.slice(0, 4).map((spec) => (
            <div 
              key={spec.id}
              className="bg-white rounded-md border border-[#E5E1E7] p-4 flex flex-col justify-between hover:border-[#78266F] transition-colors"
            >
              <div>
                <div className="w-8 h-8 rounded-md bg-[#FAF9FB] border border-[#E5E1E7] flex items-center justify-center mb-3">
                  <SpecialtyIcon name={spec.icon} className="w-4 h-4 text-[#78266F]" />
                </div>
                <h3 className="text-sm font-bold text-[#24212A] mb-1">
                  {spec.title}
                </h3>
                <p className="text-xs text-[#69636E] leading-relaxed mb-4">
                  {spec.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#E5E1E7] flex items-center justify-between text-xs">
                <Link to={spec.href} className="text-xs font-semibold text-[#78266F] hover:underline flex items-center gap-1">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ABOUT HOSPITAL & BUILDING PREMISE SECTION (Placed above Specialists) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF9FB] rounded-3xl border border-[#E5E1E7] p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#78266F]">
                ABOUT SRI PADMAPRIYA HOSPITAL
              </span>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#24212A] leading-tight">
                Dedicated Community Healthcare in Adyar Since 2001
              </h2>

              <p className="text-xs sm:text-sm text-[#69636E] leading-relaxed">
                Sri Padmapriya Hospital Pvt. Ltd. is a modern multi-speciality medical facility located in Indira Nagar, Adyar. Equipped with private consultant suites, an on-site dispensary (S.P. Medicals), pathology diagnostics, ultrasound imaging, and complete inpatient recovery wards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#24212A]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#155943] shrink-0" />
                  <span>24/7 Inpatient & Reception Desk</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#155943] shrink-0" />
                  <span>On-site Pharmacy (S.P. Medicals)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#155943] shrink-0" />
                  <span>Laparoscopic & General OT Complex</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#155943] shrink-0" />
                  <span>Dedicated Specialist Consultant Suites</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#78266F] hover:bg-[#621d5a] text-white text-xs font-semibold transition-colors"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/facilities"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-[#E5E1E7] text-[#24212A] hover:bg-[#FAF9FB] text-xs font-semibold transition-colors"
                >
                  <span>View Hospital Facilities</span>
                </Link>
              </div>

            </div>

            {/* Right Hospital Building Facade Photograph */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-[#E5E1E7] shadow-sm bg-white">
                <img
                  src="/images/hospital/sri_padmapriya_hospital_building_facade.jpg"
                  alt="Sri Padmapriya Hospital Main Facade and S.P. Medicals in Adyar, Chennai"
                  className="w-full h-auto object-cover max-h-[360px]"
                />
                <div className="p-3 bg-white text-[#69636E] text-[11px] flex items-center justify-between border-t border-[#E5E1E7]">
                  <span className="font-semibold text-[#24212A]">Hospital Campus Facade</span>
                  <span>1st Avenue, Indira Nagar, Adyar</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. DOCTORS SECTION (FEATURING REACT BITS PRO GRADIENT CAROUSEL) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 mb-6 border-b border-[#E5E1E7] gap-3">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#78266F]">
              MEET OUR DOCTORS
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#24212A] mt-0.5">
              Our Specialist Team
            </h2>
            <p className="text-xs text-[#69636E] mt-1">
              Meet the doctors dedicated to your care.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            {/* View Switcher: Interactive Gradient Carousel / Grid */}
            <div className="inline-flex items-center p-0.5 rounded-lg bg-[#FAF9FB] border border-[#E5E1E7] text-xs">
              <button
                onClick={() => setViewMode('carousel')}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                  viewMode === 'carousel'
                    ? 'bg-[#78266F] text-white shadow-2xs'
                    : 'text-[#69636E] hover:text-[#24212A]'
                }`}
                title="Interactive 3D Carousel"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Interactive</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                  viewMode === 'grid'
                    ? 'bg-[#78266F] text-white shadow-2xs'
                    : 'text-[#69636E] hover:text-[#24212A]'
                }`}
                title="Full Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
            </div>

            <Link
              to="/doctors"
              className="text-xs font-semibold text-[#155943] hover:underline inline-flex items-center gap-1"
            >
              <span>View All Doctors</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Carousel Showcase View vs Grid View */}
        {viewMode === 'carousel' ? (
          <GradientCarousel
            doctors={approvedDoctors}
            maxRotationDegrees={20}
            cardGap={24}
            minScale={0.88}
            maxDepthPx={180}
            backgroundBlur={24}
            gradientIntensity={0.16}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredDoctors.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} />
            ))}
          </div>
        )}
      </section>

      {/* 6. VISIT US & ADYAR LOCATION (Curved card with curved inner map frame) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#FAF9FB] rounded-3xl border border-[#E5E1E7] p-4 sm:p-6 lg:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Address & Direction CTA */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#78266F]">
                VISIT US
              </span>
              <h3 className="text-2xl font-bold text-[#24212A]">
                Find Us in Adyar, Chennai
              </h3>

              <div className="space-y-2 text-xs text-[#24212A]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#78266F] shrink-0 mt-0.5" />
                  <span>
                    {hospitalInfo.address.full}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#78266F] shrink-0" />
                  <span>Reception: {hospitalInfo.contact.receptionLandline}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={hospitalInfo.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#155943] hover:bg-[#0e4030] text-white text-xs font-semibold transition-colors shadow-2xs"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Familiar Google Map View with Curved Corners */}
            <div className="lg:col-span-7 h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden border border-[#E5E1E7] relative shadow-2xs bg-slate-100">
              <iframe
                title="Sri Padmapriya Hospital Map Location in Adyar"
                src="https://maps.google.com/maps?q=Sri%20Padmapriya%20Hospital,%201st%20Avenue,%20Indira%20Nagar,%20Adyar,%20Chennai&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 rounded-2xl"
                loading="lazy"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
