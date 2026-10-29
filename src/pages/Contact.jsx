import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import { hospitalInfo } from '../data/hospitalData';

export default function Contact() {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header */}
      <div className="border-b border-[#E5E1E7] pb-6">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#78266F]">
          GET IN TOUCH
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#24212A] mt-1">
          Contact Us & Location Directions
        </h1>
        <p className="text-xs sm:text-sm text-[#69636E] mt-2 max-w-2xl leading-relaxed">
          Conveniently located on 1st Avenue, Indira Nagar, Adyar, Chennai. Connect with our reception, administrative team, or clinical suites.
        </p>
      </div>

      {/* Contact Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-white rounded-md border border-[#E5E1E7] p-5 space-y-2">
          <div className="w-8 h-8 rounded-md bg-[#FAF9FB] border border-[#E5E1E7] flex items-center justify-center text-[#78266F]">
            <Phone className="w-4 h-4" />
          </div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#24212A]">Hospital Reception</h3>
          <p className="text-xs text-[#69636E]">General enquiries & appointments</p>
          <a href={`tel:${hospitalInfo.contact.receptionLandline}`} className="block text-sm font-bold text-[#78266F] font-mono hover:underline">
            {hospitalInfo.contact.receptionLandline}
          </a>
        </div>

        <div className="bg-white rounded-md border border-[#E5E1E7] p-5 space-y-2">
          <div className="w-8 h-8 rounded-md bg-[#FAF9FB] border border-[#E5E1E7] flex items-center justify-center text-[#155943]">
            <Phone className="w-4 h-4" />
          </div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#24212A]">Mobile Enquiries</h3>
          <p className="text-xs text-[#69636E]">Specialist appointment desk</p>
          <a href={`tel:${hospitalInfo.contact.enquiryMobile.replace(/\s+/g, '')}`} className="block text-sm font-bold text-[#155943] font-mono hover:underline">
            {hospitalInfo.contact.enquiryMobile}
          </a>
        </div>

        <div className="bg-white rounded-md border border-[#E5E1E7] p-5 space-y-2">
          <div className="w-8 h-8 rounded-md bg-[#FAF9FB] border border-[#E5E1E7] flex items-center justify-center text-[#24212A]">
            <Clock className="w-4 h-4" />
          </div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#24212A]">Hours of Operation</h3>
          <p className="text-xs text-[#69636E]">Reception: Open Daily</p>
          <span className="block text-xs font-semibold text-[#24212A]">
            OPD: 9:00 AM – 8:00 PM
          </span>
        </div>

        <div className="bg-white rounded-md border border-[#E5E1E7] p-5 space-y-2">
          <div className="w-8 h-8 rounded-md bg-[#FAF9FB] border border-[#E5E1E7] flex items-center justify-center text-[#78266F]">
            <InstagramIcon className="w-4 h-4" />
          </div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#24212A]">Official Instagram</h3>
          <p className="text-xs text-[#69636E]">Hospital updates & wellness</p>
          <a 
            href={hospitalInfo.contact.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs font-bold text-[#78266F] hover:underline"
          >
            @sripadmapriyahospitaladyar
          </a>
        </div>

      </div>

      {/* Address & Map Container */}
      <div className="bg-white rounded-md border border-[#E5E1E7] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          <div className="lg:col-span-5 p-6 sm:p-8 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#78266F]">
              CAMPUS ADDRESS
            </span>
            <h2 className="text-xl font-bold text-[#24212A]">
              Sri Padmapriya Hospital Pvt. Ltd.
            </h2>

            <div className="text-xs text-[#69636E] space-y-2 leading-relaxed">
              <p>
                <strong>Address:</strong><br />
                {hospitalInfo.address.full}
              </p>
              <p>
                <strong>Landmarks:</strong><br />
                Near Adyar Depot and Indira Nagar Post Office, Adyar, Chennai – 600020.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={hospitalInfo.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#155943] hover:bg-[#0e4030] text-white text-xs font-semibold transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-100 min-h-[350px] border-t lg:border-t-0 lg:border-l border-[#E5E1E7]">
            <iframe
              title="Sri Padmapriya Hospital Map Location"
              src="https://maps.google.com/maps?q=Sri%20Padmapriya%20Hospital,%201st%20Avenue,%20Indira%20Nagar,%20Adyar,%20Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[350px] border-0"
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>

    </div>
  );
}
