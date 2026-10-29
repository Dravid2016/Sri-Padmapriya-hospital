import React from 'react';
import { AlertCircle, ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function TermsOfUse() {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <div>
        <span className="text-xs font-semibold tracking-wider uppercase text-[#68236B] bg-purple-50 px-2.5 py-1 rounded-md">
          Website & Clinical Terms
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
          Terms of Use & Medical Disclaimer
        </h1>
        <p className="text-xs text-slate-500 mt-2">
          Effective Date: October 2026 · Sri Padmapriya Hospital Pvt. Ltd., Adyar, Chennai
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 space-y-6 text-sm text-slate-600 leading-relaxed shadow-xs">
        
        {/* Critical Medical Disclaimer Alert */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong>Critical Medical Disclaimer:</strong> The information provided on this website is for general informational and appointment orientation purposes only. It does not constitute individual clinical advice, medical diagnosis, or treatment. Always consult a qualified medical doctor in person for clinical evaluation.
          </div>
        </div>

        <section className="space-y-2">
          <h2 className="font-display text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By accessing or using this website, you agree to comply with and be bound by these Terms of Use. If you do not agree, please refrain from using our online portal.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg font-bold text-slate-900">2. Distinction Between Enquiry and Confirmed Booking</h2>
          <p>
            Submission of an appointment form on this website constitutes an <strong>enquiry request</strong>, not a confirmed reservation. Appointment allocations, consulting doctor availability, and reporting token numbers are confirmed only after direct telephone interaction with our reception personnel.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg font-bold text-slate-900">3. Emergency Care Notice</h2>
          <p>
            This website is not monitored for real-time acute emergency triage. In cases of acute chest pain, severe breathlessness, uncontrolled bleeding, sudden neurological deficits, or severe trauma, please visit our Casualty desk directly or summon immediate ambulance support.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg font-bold text-slate-900">4. Doctor Schedules and Consultation Charges</h2>
          <p>
            Physician schedules, consulting timings, and fees are subject to operational changes depending on emergency surgeries, on-call commitments, and hospital admissions. All fees published on this website are transparent baseline indications and should be confirmed upon physical arrival at reception.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg font-bold text-slate-900">5. Intellectual Property & Branding</h2>
          <p>
            All original hospital photographs, doctor portrait images, visiting card scans, hospital signage graphics, and written content are the proprietary property of Sri Padmapriya Hospital Pvt. Ltd. and may not be reproduced or utilized without prior written consent.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg font-bold text-slate-900">6. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of Tamil Nadu, India, subject to the jurisdiction of courts in Chennai.
          </p>
        </section>

      </div>

    </div>
  );
}

