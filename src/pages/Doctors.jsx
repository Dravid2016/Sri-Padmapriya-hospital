import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, X, Check, ArrowRight, UserCheck } from 'lucide-react';
import { doctorsData, doctorCategories } from '../data/hospitalData';
import DoctorCard from '../components/DoctorCard';

export default function Doctors() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Approved doctors count by category
  const categoryCounts = useMemo(() => {
    const counts = { All: doctorsData.filter(d => d.rosterApproved).length };
    doctorCategories.forEach(cat => {
      if (cat !== 'All') {
        counts[cat] = doctorsData.filter(d => d.rosterApproved && (d.category === cat || d.speciality.toLowerCase().includes(cat.toLowerCase()))).length;
      }
    });
    return counts;
  }, []);

  const filteredDoctors = useMemo(() => {
    return doctorsData.filter(doc => {
      if (!doc.rosterApproved) return false;

      // Category matching
      const matchesCategory =
        selectedCategory === 'All' ||
        doc.category === selectedCategory ||
        doc.speciality.toLowerCase().includes(selectedCategory.toLowerCase());

      // Search matching
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        doc.name.toLowerCase().includes(query) ||
        doc.speciality.toLowerCase().includes(query) ||
        doc.qualifications.toLowerCase().includes(query) ||
        (doc.category && doc.category.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Header */}
      <div className="border-b border-[#E5E1E7] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#78266F]">
            OUR MEDICAL TEAM
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#24212A] mt-1">
            Consultant Physicians & Surgeons
          </h1>
          <p className="text-xs sm:text-sm text-[#69636E] mt-2 max-w-2xl leading-relaxed">
            Sri Padmapriya Hospital's panel of specialist doctors across Obstetrics, Orthopaedics, Dermatology, General Medicine, Laparoscopic Surgery, ENT, and Neurology.
          </p>
        </div>

        {/* Doctor Count Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF9FB] border border-[#E5E1E7] text-xs font-semibold text-[#78266F] self-start md:self-auto">
          <UserCheck className="w-4 h-4 text-[#155943]" />
          <span>{filteredDoctors.length} Specialists Available</span>
        </div>
      </div>

      {/* Filter and Search Bar Section */}
      <div className="bg-[#FAF9FB] rounded-2xl border border-[#E5E1E7] p-4 sm:p-5 space-y-4">
        
        {/* Top Control Bar: Search Input + Toggle Filter Button */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#69636E] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search doctor name, specialty, or qualifications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-9 py-2 rounded-xl border border-[#E5E1E7] text-xs sm:text-sm outline-none bg-white focus:border-[#78266F] focus:ring-2 focus:ring-[#78266F]/10 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#69636E] hover:text-[#24212A] p-0.5"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Interactive Filter Button (Reveals / Toggles Doctor Categories) */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-xs ${
              isFilterOpen || selectedCategory !== 'All'
                ? 'bg-[#78266F] text-white hover:bg-[#621d5a]'
                : 'bg-white border border-[#E5E1E7] text-[#24212A] hover:bg-white/80 hover:border-[#78266F]'
            }`}
          >
            <Filter className="w-4 h-4" />
            <span>Filter Categories</span>
            {selectedCategory !== 'All' && (
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            )}
          </button>
        </div>

        {/* Doctor Categories: Displayed on Toggle or Always Accessible */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isFilterOpen ? 'max-h-96 opacity-100 pt-2 border-t border-[#E5E1E7]' : 'max-h-0 sm:max-h-96 opacity-100 sm:pt-2 sm:border-t sm:border-[#E5E1E7]'
          }`}
        >
          <div className="flex items-center justify-between pb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#69636E]">
              Select Specialty Category:
            </span>
            {selectedCategory !== 'All' && (
              <button
                onClick={() => setSelectedCategory('All')}
                className="text-[11px] font-semibold text-[#78266F] hover:underline"
              >
                Reset Filter
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {doctorCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count = categoryCounts[cat] || 0;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#78266F] text-white shadow-xs'
                      : 'bg-white border border-[#E5E1E7] text-[#24212A] hover:border-[#78266F] hover:bg-[#FAF9FB]'
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3 text-white" />}
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-[#FAF9FB] text-[#69636E] border border-[#E5E1E7]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Active Filter Notice */}
      {selectedCategory !== 'All' && (
        <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#FAF9FB] border border-[#E5E1E7] text-xs">
          <div className="flex items-center gap-2 text-[#24212A]">
            <span className="text-[#69636E]">Filtering by:</span>
            <span className="font-bold text-[#78266F]">{selectedCategory}</span>
            <span className="text-[#69636E]">({filteredDoctors.length} doctors found)</span>
          </div>
          <button
            onClick={() => setSelectedCategory('All')}
            className="text-xs font-semibold text-[#78266F] hover:underline inline-flex items-center gap-1"
          >
            <span>Show All Doctors</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Doctor Cards Grid */}
      {filteredDoctors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredDoctors.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-white rounded-2xl border border-[#E5E1E7] space-y-3">
          <p className="text-sm font-semibold text-[#24212A]">
            No specialists found matching your search.
          </p>
          <p className="text-xs text-[#69636E]">
            Try choosing a different category or clearing your search term.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#78266F] text-white text-xs font-semibold shadow-xs hover:bg-[#621d5a] transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Visiting Cards Reference Section */}
      <div className="bg-[#FAF9FB] rounded-2xl border border-[#E5E1E7] p-6 sm:p-8 space-y-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#155943]">
            PRIMARY SOURCE VERIFICATION
          </span>
          <h2 className="text-lg font-bold text-[#24212A] mt-0.5">
            Verified Doctor Visiting Cards & Credentials
          </h2>
          <p className="text-xs text-[#69636E] mt-1">
            Doctor degrees, academic appointments, and medical council credentials are confirmed against primary verified client visiting cards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-2">
          {doctorsData.filter(d => d.cardImage).map((doc) => (
            <div key={doc.id} className="bg-white rounded-xl border border-[#E5E1E7] p-3 space-y-2">
              <div className="aspect-16/10 rounded-lg overflow-hidden border border-[#E5E1E7] bg-white flex items-center justify-center p-1">
                <img
                  src={doc.cardImage}
                  alt={`${doc.name} visiting card credential`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-xs">
                <p className="font-bold text-[#24212A]">{doc.name}</p>
                <p className="text-[11px] text-[#69636E]">{doc.qualifications}</p>
                <p className="text-[10px] text-[#155943] font-semibold mt-1">
                  Reg No: {doc.registrationNumber}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
