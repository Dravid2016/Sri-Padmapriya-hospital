import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Clock, 
  GraduationCap, 
  Stethoscope, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import DoctorCard from './DoctorCard';

/**
 * DoctorShowcase:
 * Split interactive layout:
 * - Left side: 3D interactive Doctor Card Carousel with touch/swipe, keyboard, & arrow controls.
 * - Right side: Synchronized, rich doctor profile information panel that dynamically updates
 *   with qualifications, clinical focus, timings, and direct appointment CTA.
 */
export default function DoctorShowcase({
  doctors = [],
  maxRotationDegrees = 18,
  cardGap = 20,
  minScale = 0.88,
  maxDepthPx = 140,
  backgroundBlur = 24,
  gradientIntensity = 0.16,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next'); // 'next' | 'prev'
  const [isAnimating, setIsAnimating] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const containerRef = useRef(null);

  // Dynamic brand-derived theme accents
  const doctorGradients = [
    { primary: '#78266F', light: '#F9F1F8', border: '#E7D1E4', badge: '#78266F' },
    { primary: '#155943', light: '#EEF7F3', border: '#CDE5DA', badge: '#155943' },
    { primary: '#78266F', light: '#F9F1F8', border: '#E7D1E4', badge: '#78266F' },
    { primary: '#155943', light: '#EEF7F3', border: '#CDE5DA', badge: '#155943' },
    { primary: '#482047', light: '#F6F0F6', border: '#E1D3E0', badge: '#482047' },
    { primary: '#155943', light: '#EEF7F3', border: '#CDE5DA', badge: '#155943' },
    { primary: '#78266F', light: '#F9F1F8', border: '#E7D1E4', badge: '#78266F' },
  ];

  const currentDoctor = doctors[activeIndex] || doctors[0];
  const currentTheme = doctorGradients[activeIndex % doctorGradients.length] || doctorGradients[0];

  const triggerSlide = useCallback((newIndex, direction) => {
    setSlideDirection(direction);
    setIsAnimating(true);
    setActiveIndex(newIndex);
    setTimeout(() => {
      setIsAnimating(false);
    }, 450);
  }, []);

  const handlePrev = useCallback(() => {
    const newIdx = activeIndex > 0 ? activeIndex - 1 : doctors.length - 1;
    triggerSlide(newIdx, 'prev');
  }, [activeIndex, doctors.length, triggerSlide]);

  const handleNext = useCallback(() => {
    const newIdx = activeIndex < doctors.length - 1 ? activeIndex + 1 : 0;
    triggerSlide(newIdx, 'next');
  }, [activeIndex, doctors.length, triggerSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch & Drag Handling for the carousel
  const handlePointerDown = (e) => {
    setIsDragging(true);
    startXRef.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const delta = clientX - startXRef.current;
    setDragOffset(delta);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset > 50) {
      handlePrev();
    } else if (dragOffset < -50) {
      handleNext();
    }
    setDragOffset(0);
  };

  if (!doctors.length) return null;

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-3xl border border-[#482047] bg-[#482047] text-white p-4 sm:p-6 lg:p-8 overflow-hidden shadow-md transition-colors duration-500"
    >
      {/* Ambient background brand tint */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none rounded-full transition-all duration-700 ease-out opacity-25"
        style={{
          filter: `blur(${backgroundBlur * 3}px)`,
          background: `radial-gradient(circle, #78266F 0%, transparent 70%)`,
        }}
      />

      {/* Main 2-Column Split: Left = Interactive Carousel Cards, Right = Synchronized Profile Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* ================= LEFT SIDE: CAROUSEL WITH 3D CARDS ================= */}
        <div className="lg:col-span-5 flex flex-col items-center w-full">
          
          <div
            className="relative w-full h-[460px] sm:h-[480px] flex items-center justify-center select-none overflow-hidden"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
          >
            {doctors.map((doctor, index) => {
              const offset = index - activeIndex;
              const isCenter = offset === 0;

              // Keep non-active cards completely hidden/invisible until user navigates
              if (!isCenter) return null;

              return (
                <div
                  key={doctor.id}
                  style={{
                    transform: isDragging 
                      ? `translateX(${dragOffset * 0.5}px)` 
                      : 'translateX(0px)',
                    animation: isDragging 
                      ? 'none' 
                      : slideDirection === 'next' 
                        ? 'slideInFromRight 0.4s cubic-bezier(0.2, 0.9, 0.3, 1)' 
                        : 'slideInFromLeft 0.4s cubic-bezier(0.2, 0.9, 0.3, 1)',
                  }}
                  className="w-full max-w-[280px] sm:max-w-[300px] h-[450px] shadow-2xl ring-2 ring-white/20 rounded-xl will-change-transform"
                >
                  <DoctorCard doctor={doctor} />
                </div>
              );
            })}
          </div>

          {/* Carousel Navigation Bar */}
          <div className="mt-4 flex items-center justify-between w-full max-w-[280px] px-2">
            <button
              onClick={handlePrev}
              aria-label="Previous specialist"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white shadow-xs flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-1.5">
              {doctors.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Select doctor ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    idx === activeIndex
                      ? 'w-5 bg-white'
                      : 'w-1.5 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next specialist"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white shadow-xs flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <span className="text-[11px] text-white/70 mt-2 font-medium">
            Doctor {activeIndex + 1} of {doctors.length} &bull; Click arrows or swipe to browse
          </span>
        </div>

        {/* ================= RIGHT SIDE: DYNAMIC PROFILE INFORMATION PANEL ================= */}
        <div className="lg:col-span-7 bg-[#78266F]/30 backdrop-blur-sm rounded-2xl border border-white/15 p-6 sm:p-8 space-y-6">
          
          {/* Header Row */}
          <div className="space-y-1.5 border-b border-white/15 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span 
                className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border bg-gradient-to-r from-white/20 to-white/10 text-white border-white/25 shadow-xs inline-flex items-center gap-1.5 backdrop-blur-md"
              >
                <Stethoscope className="w-3.5 h-3.5 text-emerald-300" />
                <span>{currentDoctor.speciality}</span>
              </span>

              {/* Roster Confirmed Gradient Badge Pill matching the design */}
              <span className="text-[11px] font-semibold text-emerald-200 bg-gradient-to-r from-emerald-950/70 via-[#155943]/60 to-emerald-900/70 border border-emerald-400/40 px-3 py-1 rounded-full inline-flex items-center gap-1.5 shadow-sm backdrop-blur-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                <span className="font-bold tracking-wide">Roster Confirmed</span>
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white pt-1">
              {currentDoctor.name}
            </h3>

            <p className="text-sm font-medium text-emerald-300">
              {currentDoctor.title}
            </p>
          </div>

          {/* Quick Qualifications & Schedule Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Qualification */}
            <div className="bg-white/10 rounded-xl p-3.5 border border-white/15 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0 text-white">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-medium text-white/70 uppercase block">
                  Qualifications
                </span>
                <span className="text-xs font-semibold text-white block mt-0.5">
                  {currentDoctor.qualifications}
                </span>
              </div>
            </div>

            {/* Timings */}
            <div className="bg-white/10 rounded-xl p-3.5 border border-white/15 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0 text-emerald-300">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-medium text-white/70 uppercase block">
                  Consultation Timings
                </span>
                <span className="text-xs font-semibold text-white block mt-0.5">
                  {currentDoctor.schedule}
                </span>
              </div>
            </div>

          </div>

          {/* Experience Summary */}
          {currentDoctor.experienceSummary && (
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold text-white/70 uppercase tracking-wider block">
                Professional Overview
              </span>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                {currentDoctor.experienceSummary}
              </p>
            </div>
          )}

          {/* Special Clinical Focus Areas */}
          {currentDoctor.specialInterests && currentDoctor.specialInterests.length > 0 && (
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-white/70 uppercase tracking-wider block">
                Key Clinical Focus & Services
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentDoctor.specialInterests.map((interest, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-white/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action CTAs with Gradient Buttons */}
          <div className="pt-2 border-t border-white/15 flex flex-wrap items-center gap-3">
            <Link
              to={`/appointment?doctor=${encodeURIComponent(currentDoctor.name)}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-white via-slate-100 to-white hover:from-slate-100 hover:to-slate-200 text-[#482047] text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-[#78266F]" />
              <span>Book Appointment with {currentDoctor.name.split(' ')[1] || 'Doctor'}</span>
            </Link>

            <Link
              to={`/doctors/${currentDoctor.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-white/15 to-white/5 border border-white/25 text-white hover:bg-white/20 text-xs sm:text-sm font-semibold transition-all backdrop-blur-sm shadow-xs"
            >
              <span>View Full Clinical Profile</span>
              <ArrowRight className="w-4 h-4 text-white/80" />
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

