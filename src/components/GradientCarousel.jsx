import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DoctorCard from './DoctorCard';

/**
 * GradientCarousel:
 * Built adhering to the React Bits Pro specification:
 * - Dynamic color extraction / gradient adaptation matching brand palette
 * - 3D depth, rotation, scale, and perspective (maxRotationDegrees, cardGap, minScale, maxDepthPx)
 * - Pointer drag, mousewheel navigation, keyboard arrow support, and navigation buttons
 * - Restrained image-derived brand gradient (#78266F primary purple, #155943 green, #FAF9FB surface)
 */
export default function GradientCarousel({
  doctors = [],
  maxRotationDegrees = 20,
  cardGap = 24,
  minScale = 0.88,
  maxDepthPx = 180,
  backgroundBlur = 24,
  gradientIntensity = 0.18,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const startXRef = useRef(0);
  const containerRef = useRef(null);
  const isInteractingRef = useRef(false);

  const numDoctors = doctors.length;

  // Circular distance calculation for true infinite wrapping
  const getCircularOffset = (index, current, total) => {
    let diff = (index - current) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  // IntersectionObserver to animate cards showing up as user scrolls to the section
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Brand-derived palette tints for carousel background dynamic gradient
  const doctorGradients = [
    { primary: '#78266F', secondary: '#FAF9FB', accent: '#482047' }, // Dr. Kanmani
    { primary: '#155943', secondary: '#FAF9FB', accent: '#0e4030' }, // Dr. Pavithran
    { primary: '#78266F', secondary: '#FAF9FB', accent: '#8b2e81' }, // Dr. Shanmuga Prakash
    { primary: '#155943', secondary: '#FAF9FB', accent: '#1c7256' }, // Dr. Sai Prashanth
    { primary: '#482047', secondary: '#FAF9FB', accent: '#78266F' }, // Dr. Sivagamasundari
    { primary: '#155943', secondary: '#FAF9FB', accent: '#0e4030' }, // Dr. Rangarajan
    { primary: '#78266F', secondary: '#FAF9FB', accent: '#482047' }, // Dr. Selva Sankar
    { primary: '#155943', secondary: '#FAF9FB', accent: '#0e4030' }, // Dr. Hameedullah
    { primary: '#78266F', secondary: '#FAF9FB', accent: '#8b2e81' }, // Dr. S.V. Sangeetha
    { primary: '#155943', secondary: '#FAF9FB', accent: '#1c7256' }, // Dr. Vijayanarasimma Reddy
    { primary: '#78266F', secondary: '#FAF9FB', accent: '#482047' }, // Dr. K. Gowthame
  ];

  const currentTheme = doctorGradients[((activeIndex % doctorGradients.length) + doctorGradients.length) % doctorGradients.length] || doctorGradients[0];

  // Navigation controls with seamless circular modulo
  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + numDoctors) % numDoctors);
  }, [numDoctors]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % numDoctors);
  }, [numDoctors]);

  // Seamless Auto-scroll Loop: automatically glides through cards continuously
  // Pauses smoothly when user hovers, touches, or drags to read
  useEffect(() => {
    if (isPaused || isDragging || numDoctors <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused, isDragging, numDoctors, handleNext]);

  // Controlled, throttled wheel scrolling over carousel
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let wheelDebounce = null;
    const onWheel = (e) => {
      // Prioritize horizontal trackpads or explicit carousel scroll intent
      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);

      if (absX > 15 || absY > 40) {
        if (wheelDebounce) return;
        wheelDebounce = setTimeout(() => {
          wheelDebounce = null;
        }, 300);

        if (e.deltaX > 0 || e.deltaY > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    };

    el.addEventListener('wheel', onWheel, { passive: true });
    return () => el.removeEventListener('wheel', onWheel);
  }, [handleNext, handlePrev]);

  // Keyboard navigation when carousel is focused or in viewport
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

  // Touch and Drag handlers with interaction lock
  const handlePointerDown = (e) => {
    setIsDragging(true);
    isInteractingRef.current = true;
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
    setTimeout(() => {
      isInteractingRef.current = false;
    }, 200);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full py-8 px-2 select-none overflow-hidden rounded-3xl transition-colors duration-700 ease-out"
      style={{
        background: `radial-gradient(ellipse at 50% 50%, ${currentTheme.primary}${Math.round(gradientIntensity * 255).toString(16).padStart(2, '0')} 0%, ${currentTheme.secondary} 70%)`,
      }}
      tabIndex={0}
      aria-label="Doctors carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        handlePointerUp();
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
    >
      {/* Background ambient glow blur */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700 ease-out opacity-60"
        style={{
          filter: `blur(${backgroundBlur}px)`,
          background: `radial-gradient(circle at 50% 30%, ${currentTheme.primary}22, transparent 65%)`,
        }}
      />

      {/* 3D Track Container with Infinite Circular Wrapping */}
      <div
        className={`relative mx-auto h-[480px] sm:h-[500px] flex items-center justify-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
        style={{ perspective: '1100px' }}
      >
        {doctors.map((doctor, index) => {
          const offset = getCircularOffset(index, activeIndex, numDoctors);
          const isCenter = offset === 0;

          // Only render visible adjacent cards in 3D field (-2 to +2)
          if (Math.abs(offset) > 2) return null;

          const distance = Math.abs(offset);
          const rotation = offset * maxRotationDegrees;
          const translateX = offset * (290 + cardGap) + (isDragging ? dragOffset * 0.4 : 0);
          const translateZ = -distance * maxDepthPx;
          const scale = Math.max(minScale, 1 - distance * 0.12);
          const opacity = distance === 2 ? 0.35 : distance === 1 ? 0.8 : 1;
          const zIndex = 30 - distance * 10;

          return (
            <div
              key={doctor.id}
              onClick={() => {
                if (!isCenter && !isInteractingRef.current) {
                  setActiveIndex(index);
                }
              }}
              style={{
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${-rotation}deg) scale(${scale})`,
                zIndex,
                opacity,
                transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s ease',
              }}
              className={`absolute top-0 bottom-0 w-[270px] sm:w-[290px] h-full cursor-pointer transition-shadow ${
                isCenter ? 'shadow-xl' : 'shadow-md filter saturate-90 hover:opacity-95'
              }`}
            >
              <DoctorCard doctor={doctor} />
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="relative z-40 mt-4 flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          aria-label="Previous doctor"
          className="w-10 h-10 rounded-full bg-white border border-[#E5E1E7] text-[#78266F] shadow-sm flex items-center justify-center hover:bg-[#FAF9FB] hover:border-[#78266F] transition-all cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Indicators */}
        <div className="flex items-center gap-1.5">
          {doctors.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to doctor ${idx + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === activeIndex
                  ? 'w-6 bg-[#78266F]'
                  : 'w-2 bg-[#E5E1E7] hover:bg-[#78266F]/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next doctor"
          className="w-10 h-10 rounded-full bg-white border border-[#E5E1E7] text-[#78266F] shadow-sm flex items-center justify-center hover:bg-[#FAF9FB] hover:border-[#78266F] transition-all cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Counter Label */}
      <div className="text-center mt-2 text-[11px] font-medium text-[#69636E]">
        Doctor {activeIndex + 1} of {doctors.length} &bull; {doctors[activeIndex]?.name}
      </div>
    </div>
  );
}

