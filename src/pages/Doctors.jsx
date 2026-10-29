import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { doctorsData } from '../data/hospitalData';
import DoctorCard from '../components/DoctorCard';

export default function Doctors() {
  const [selectedSpeciality, setSelectedSpeciality] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const specialities = ['All', ...new Set(doctorsData.filter(d => d.rosterApproved).map(d => d.speciality.split('|')[0].trim()))];

  const filteredDoctors = doctorsData.filter(doc => {
    if (!doc.rosterApproved) return false;
    const matchesSpec = selectedSpeciality === 'All' || doc.speciality.includes(selectedSpeciality);
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          doc.speciality.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doc.qualifications.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSpec && matchesSearch;
  });

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Header */}
      <div className="border-b border-[#E5E1E7] pb-6">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#78266F]">
          OUR MEDICAL TEAM
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#24212A] mt-1">
          Consultant Physicians & Surgeons
        </h1>
        <p className="text-xs sm:text-sm text-[#69636E] mt-2 max-w-2xl leading-relaxed">
          Our verified panel of specialists across Obstetrics, Gynaecology, Surgery, Orthopaedics, Neurology, ENT, and Plastic Surgery.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#FAF9FB] rounded-md border border-[#E5E1E7] p-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        
        <div className="relative w-full sm:w-80">
          <Search className="w-3.5 h-3.5 text-[#69636E] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by doctor name or specialty..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 rounded-md border border-[#E5E1E7] text-xs outline-none bg-white focus:border-[#78266F]"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
          {specialities.map((spec) => (
            <button
              key={spec}
              onClick={() => setSelectedSpeciality(spec)}
              className={`px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedSpeciality === spec
                  ? 'bg-[#78266F] text-white'
                  : 'bg-white border border-[#E5E1E7] text-[#24212A] hover:bg-[#FAF9FB]'
              }`}
            >
              {spec}
            </button>
          ))}
        </div>

      </div>

      {/* Doctor Cards Grid */}
      {filteredDoctors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredDoctors.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} />
          ))}
        </div>
      ) : (
        <div className="p-8 text-center bg-white rounded-md border border-[#E5E1E7] text-xs text-[#69636E]">
          No matching doctors found for your criteria.
        </div>
      )}

      {/* Visiting Cards Reference Section */}
      <div className="bg-[#FAF9FB] rounded-md border border-[#E5E1E7] p-6 sm:p-8 space-y-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#155943]">
            PRIMARY SOURCE VERIFICATION
          </span>
          <h2 className="text-lg font-bold text-[#24212A] mt-0.5">
            Verified Doctor Visiting Cards
          </h2>
          <p className="text-xs text-[#69636E] mt-1">
            Doctor degrees and council registrations are matched against verified client-provided visiting cards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {doctorsData.filter(d => d.cardImage).map((doc) => (
            <div key={doc.id} className="bg-white rounded-md border border-[#E5E1E7] p-3 space-y-2">
              <div className="aspect-16/10 rounded-sm overflow-hidden border border-[#E5E1E7] bg-white flex items-center justify-center p-1">
                <img
                  src={doc.cardImage}
                  alt={`Visiting card for ${doc.name}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-xs">
                <h4 className="font-bold text-[#24212A]">{doc.name}</h4>
                <p className="text-[11px] text-[#69636E]">{doc.qualifications}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
