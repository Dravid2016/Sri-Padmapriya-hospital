import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, FileText, Phone, Check } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function PatientInfo() {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header */}
      <div className="border-b border-[#E5E1E7] pb-6">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#78266F]">
          PATIENT CARE GUIDELINES
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#24212A] mt-1">
          Patient Information & Hospital Guidelines
        </h1>
        <p className="text-xs sm:text-sm text-[#69636E] mt-2 max-w-2xl leading-relaxed">
          Helpful information for outpatient consultations, hospital visits, inpatient admissions, and medical documentation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Outpatient Consultations */}
        <div className="bg-white rounded-md border border-[#E5E1E7] p-6 space-y-3">
          <div className="flex items-center gap-2 text-[#78266F] font-bold text-sm">
            <Clock className="w-4 h-4" />
            <span>OPD Consultation Procedure</span>
          </div>
          <p className="text-xs text-[#69636E] leading-relaxed">
            Outpatient specialist suites are operational between 9:00 AM and 8:00 PM based on individual specialist schedules. Prior appointment enquiry is recommended to minimize waiting times.
          </p>
          <ul className="space-y-1.5 text-xs text-[#24212A] pt-2">
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#155943]" />
              <span>Report to the reception registration desk upon arrival</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#155943]" />
              <span>Carry past medical records, prescriptions, and diagnostic reports</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#155943]" />
              <span>Token numbers are called in order of appointment schedule</span>
            </li>
          </ul>
        </div>

        {/* Inpatient & Admission Assistance */}
        <div className="bg-white rounded-md border border-[#E5E1E7] p-6 space-y-3">
          <div className="flex items-center gap-2 text-[#155943] font-bold text-sm">
            <FileText className="w-4 h-4" />
            <span>Inpatient Admission Guidelines</span>
          </div>
          <p className="text-xs text-[#69636E] leading-relaxed">
            For elective surgical procedures and medical admissions, our admission and billing counter coordinates room allotment and attendant formalities.
          </p>
          <ul className="space-y-1.5 text-xs text-[#24212A] pt-2">
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#155943]" />
              <span>Carry doctor admission advice and government photo identification</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#155943]" />
              <span>TPA Insurance queries coordinated at the Admin Desk</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#155943]" />
              <span>Visiting hours adhere to ward and ICU safety protocols</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Reception Assistance Box */}
      <div className="bg-[#FAF9FB] rounded-md border border-[#E5E1E7] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-[#24212A]">
            Have a Question Regarding Patient Care?
          </h3>
          <p className="text-xs text-[#69636E] mt-0.5">
            Call our reception desk at {hospitalInfo.contact.receptionLandline} or submit an online enquiry.
          </p>
        </div>

        <Link
          to="/appointment"
          className="px-4 py-2 rounded-md bg-[#78266F] hover:bg-[#621d5a] text-white text-xs font-semibold transition-colors"
        >
          Book an Appointment
        </Link>
      </div>

    </div>
  );
}

