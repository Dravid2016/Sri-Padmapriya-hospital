import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight, ArrowRight } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { hospitalInfo, clinicalSpecialties } from '../data/hospitalData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#482047] text-white pt-14 pb-8 border-t border-[#371636]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[#5e2b5d]">
          
          {/* Col 1: Identity */}
          <div className="space-y-4">
            <div className="bg-white p-2 rounded-md inline-block">
              <img 
                src="/images/brand/official_hospital_logo.png" 
                alt="Sri Padmapriya Hospital"
                className="h-9 w-auto object-contain"
              />
            </div>
            
            <p className="text-xs text-[#E5D7E4] leading-relaxed">
              {hospitalInfo.subTagline}
            </p>

            <div className="pt-2">
              <a 
                href={hospitalInfo.contact.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#5d2b5c] hover:bg-[#6c326b] text-xs text-white transition-colors border border-[#723671]"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Follow on Instagram</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#E5D7E4]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/specialities" className="hover:text-white transition-colors">Specialties</Link>
              </li>
              <li>
                <Link to="/doctors" className="hover:text-white transition-colors">Our Doctors</Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-white transition-colors">Facilities</Link>
              </li>
              <li>
                <Link to="/patient-info" className="hover:text-white transition-colors">Patient Information</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Specialties */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">
              Our Specialties
            </h4>
            <ul className="space-y-2 text-xs text-[#E5D7E4]">
              {clinicalSpecialties.slice(0, 5).map((spec) => (
                <li key={spec.id}>
                  <Link to="/specialities" className="hover:text-white transition-colors">
                    {spec.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/specialities" className="text-[#87D4B6] font-medium hover:underline inline-flex items-center gap-1">
                  <span>View All Specialties</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">
              Contact & Address
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#E5D7E4]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#87D4B6] shrink-0 mt-0.5" />
                <span>
                  {hospitalInfo.address.full}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#87D4B6] shrink-0" />
                <a href={`tel:${hospitalInfo.contact.receptionLandline}`} className="hover:text-white font-mono">
                  {hospitalInfo.contact.receptionLandline}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#87D4B6] shrink-0" />
                <a href={`tel:${hospitalInfo.contact.enquiryMobile.replace(/\s+/g, '')}`} className="hover:text-white font-mono">
                  {hospitalInfo.contact.enquiryMobile}
                </a>
              </div>

              <div className="pt-2">
                <a 
                  href={hospitalInfo.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#87D4B6] hover:underline font-semibold"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#CBBAC9] gap-3">
          <div>
            © {currentYear} Sri Padmapriya Hospital Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-white transition-colors">Medical Disclaimer</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
