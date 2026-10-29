import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Phone } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function NotFound() {
  return (
    <div className="py-20 max-w-xl mx-auto px-4 text-center space-y-6">
      <div className="w-20 h-20 rounded-full bg-purple-50 text-[#68236B] flex items-center justify-center font-display text-3xl font-extrabold mx-auto shadow-xs border border-purple-100">
        404
      </div>
      
      <h1 className="font-display text-3xl font-bold text-slate-900">
        Page Not Found
      </h1>
      
      <p className="text-sm text-slate-600 leading-relaxed">
        The hospital page or clinical resource you were looking for is unavailable or may have been relocated.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#68236B] text-white text-xs font-semibold hover:bg-[#521a55] transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors"
        >
          <Phone className="w-4 h-4 text-emerald-700" />
          <span>Contact Reception</span>
        </Link>
      </div>
    </div>
  );
}

