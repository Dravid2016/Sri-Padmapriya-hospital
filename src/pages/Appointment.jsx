import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone, Clock, MapPin, Check } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';
import AppointmentForm from '../components/AppointmentForm';

export default function Appointment() {
  const [searchParams] = useSearchParams();
  const defaultDoctor = searchParams.get('doctor') || "";

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header */}
      <div className="border-b border-[#E5E1E7] pb-6">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#78266F]">
          OUTPATIENT CONSULTATION
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#24212A] mt-1">
          Book an Appointment Enquiry
        </h1>
        <p className="text-xs sm:text-sm text-[#69636E] mt-2 max-w-2xl leading-relaxed">
          Submit your consultation request online. Our front desk will verify specialist schedules and confirm your visit timing and consultation token.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Form Container */}
        <div className="lg:col-span-7">
          <AppointmentForm defaultDoctor={defaultDoctor} />
        </div>

        {/* Right Info Box */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="bg-[#482047] text-white rounded-md p-6 space-y-3">
            <h3 className="text-base font-bold text-white">
              Telephone Booking Assistance
            </h3>
            <p className="text-xs text-[#E5D7E4] leading-relaxed">
              If you prefer speaking with our reception team directly to schedule a same-day specialist consultation, call us during hospital hours:
            </p>

            <div className="pt-2 space-y-2">
              <a
                href={`tel:${hospitalInfo.contact.receptionLandline}`}
                className="flex items-center gap-2 p-2.5 rounded-md bg-white/10 hover:bg-white/20 text-xs font-mono font-bold transition-colors"
              >
                <Phone className="w-4 h-4 text-[#87D4B6]" />
                <span>{hospitalInfo.contact.receptionLandline} (Reception)</span>
              </a>

              <a
                href={`tel:${hospitalInfo.contact.enquiryMobile.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 p-2.5 rounded-md bg-white/10 hover:bg-white/20 text-xs font-mono font-bold transition-colors"
              >
                <Phone className="w-4 h-4 text-[#87D4B6]" />
                <span>{hospitalInfo.contact.enquiryMobile} (Enquiries)</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-md border border-[#E5E1E7] p-6 space-y-3 text-xs text-[#69636E]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#24212A]">
              Important Booking Information
            </h4>
            <ul className="space-y-2 text-[#24212A]">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-[#155943] shrink-0 mt-0.5" />
                <span>All appointment requests are verified by phone before final confirmation.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-[#155943] shrink-0 mt-0.5" />
                <span>Doctor consultation fees are settled directly at the hospital billing counter.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-[#155943] shrink-0 mt-0.5" />
                <span>Acute emergencies should visit Casualty directly without online booking.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}
