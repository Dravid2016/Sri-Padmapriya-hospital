import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function About() {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="border-b border-[#E5E1E7] pb-6">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#78266F]">
          HOSPITAL BACKGROUND
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#24212A] mt-1">
          About Sri Padmapriya Hospital Pvt. Ltd.
        </h1>
        <p className="text-xs sm:text-sm text-[#69636E] mt-2 max-w-2xl leading-relaxed">
          Established in 2001 in Indira Nagar, Adyar, Chennai, Sri Padmapriya Hospital provides dedicated outpatient specialist consultations, diagnostic infrastructure, and inpatient medical care.
        </p>
      </div>

      {/* Vision & Mission Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-[#FAF9FB] p-6 rounded-md border border-[#E5E1E7] space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#78266F]">
            Our Vision (நோக்கம்)
          </span>
          <p className="text-base font-bold text-[#24212A] leading-snug">
            "{hospitalInfo.vision.english}"
          </p>
          <p className="text-xs text-[#69636E] pt-2 border-t border-[#E5E1E7]">
            {hospitalInfo.vision.tamil}
          </p>
        </div>

        <div className="bg-[#FAF9FB] p-6 rounded-md border border-[#E5E1E7] space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#155943]">
            Our Mission (குறிக்கோள்)
          </span>
          <p className="text-base font-bold text-[#24212A] leading-snug">
            "{hospitalInfo.mission.english}"
          </p>
          <p className="text-xs text-[#69636E] pt-2 border-t border-[#E5E1E7]">
            {hospitalInfo.mission.tamil}
          </p>
        </div>

      </div>

      {/* Clinical Approach & Leadership */}
      <div className="bg-white rounded-md border border-[#E5E1E7] p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-bold text-[#24212A]">
          Clinical Principles & Patient Care
        </h2>
        <p className="text-xs sm:text-sm text-[#69636E] leading-relaxed">
          The hospital operates with a patient-first focus. We ensure that every patient receives individual medical attention from qualified, certified medical specialists.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#24212A]">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#155943] shrink-0" />
            <span>Consultant outpatient suites for dedicated clinical consultations</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#155943] shrink-0" />
            <span>In-house diagnostic services including ultrasound and clinical lab</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#155943] shrink-0" />
            <span>Operation theatre complex for general and laparoscopic surgeries</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#155943] shrink-0" />
            <span>Convenient central location in Indira Nagar, Adyar</span>
          </div>
        </div>

        <div className="pt-4 border-t border-[#E5E1E7]">
          <Link
            to="/doctors"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#78266F] hover:underline"
          >
            <span>Meet Our Consulting Doctors</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

    </div>
  );
}
