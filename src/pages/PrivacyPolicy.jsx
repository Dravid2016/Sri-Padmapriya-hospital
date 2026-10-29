import React from 'react';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function PrivacyPolicy() {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <div>
        <span className="text-xs font-semibold tracking-wider uppercase text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
          Hospital Information Governance
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
          Patient Privacy Policy
        </h1>
        <p className="text-xs text-slate-500 mt-2">
          Effective Date: October 2026 · Sri Padmapriya Hospital Pvt. Ltd., Adyar, Chennai
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 space-y-6 text-sm text-slate-600 leading-relaxed shadow-xs">
        
        <section className="space-y-2">
          <h2 className="font-display text-lg font-bold text-slate-900">1. Commitment to Patient Confidentiality</h2>
          <p>
            Sri Padmapriya Hospital Pvt. Ltd. (“Hospital”, “we”, “our”) respects the privacy of our patients, visitors, and website users. This policy outlines how information submitted through our official website enquiry form is collected, utilized, and safeguarded.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg font-bold text-slate-900">2. Minimal Data Collection Principle</h2>
          <p>
            To protect patient confidentiality, our public web portal requests only the minimum information necessary to initiate an appointment enquiry:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li>Patient full name</li>
            <li>Contact telephone number</li>
            <li>Preferred consulting doctor or department</li>
            <li>Preferred consultation date and timing window</li>
          </ul>
          <p className="text-xs text-slate-500 italic">
            Note: We intentionally do not collect detailed personal medical history, diagnosis files, or identity card copies on this public initial contact form.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg font-bold text-slate-900">3. Purpose and Use of Information</h2>
          <p>
            Information collected via website forms is strictly utilized by our internal reception and administrative staff to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li>Verify specialist doctor schedule availability.</li>
            <li>Call or message you to confirm consultation token details and timing.</li>
            <li>Coordinate outpatient registration upon physical arrival at the hospital.</li>
          </ul>
          <p>
            We do not sell, rent, trade, or share patient contact records with third-party advertising or commercial marketing networks.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg font-bold text-slate-900">4. Medical Records & In-Hospital Privacy</h2>
          <p>
            All physical and digital diagnostic records, doctor prescription charts, inpatient records, and laboratory data maintained within the hospital premises are governed by strict medical ethics standards and Indian healthcare data security practices.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg font-bold text-slate-900">5. Contact Regarding Privacy</h2>
          <p>
            For questions or requests concerning your patient contact information or hospital data governance, please contact our administrative desk at:
          </p>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
            <strong>Sri Padmapriya Hospital Pvt. Ltd.</strong><br />
            No. 28, 1st Avenue, Indira Nagar, Adyar, Chennai – 600020<br />
            Phone: {hospitalInfo.contact.receptionLandline}
          </div>
        </section>

      </div>

    </div>
  );
}

