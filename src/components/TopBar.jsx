import React from 'react';
import { Phone, MapPin, Clock, AlertCircle } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { hospitalInfo } from '../data/hospitalData';

export default function TopBar() {
  return (
    <div className="bg-[#4F1852] text-white text-xs sm:text-sm py-2 px-4 border-b border-purple-900/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        {/* Contact numbers */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <div className="flex items-center gap-1.5 text-purple-100">
            <Phone className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
            <span className="text-xs text-purple-200">Reception:</span>
            <a href={`tel:${hospitalInfo.contact.receptionLandline}`} className="font-semibold hover:text-white transition-colors">
              {hospitalInfo.contact.receptionLandline}
            </a>
            <span className="text-purple-400">|</span>
            <a href={`tel:${hospitalInfo.contact.enquiryMobile.replace(/\s+/g, '')}`} className="font-semibold hover:text-white transition-colors">
              {hospitalInfo.contact.enquiryMobile}
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-purple-200 border-l border-purple-700/50 pl-4">
            <Clock className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
            <span>OPD: 9:00 AM – 8:00 PM (By Appt)</span>
          </div>
        </div>

        {/* Location & Social */}
        <div className="flex items-center justify-between md:justify-end gap-4 text-xs">
          <a 
            href={hospitalInfo.address.googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1 text-purple-200 hover:text-white transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
            <span>No. 28, 1st Ave, Indira Nagar, Adyar</span>
          </a>

          <a 
            href={hospitalInfo.contact.instagram.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1 text-purple-200 hover:text-pink-300 transition-colors"
            title="Sri Padmapriya Hospital on Instagram"
          >
            <InstagramIcon className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
}
