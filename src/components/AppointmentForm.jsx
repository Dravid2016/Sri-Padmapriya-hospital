import React, { useState } from 'react';
import { Calendar, Phone, CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { doctorsData, hospitalInfo } from '../data/hospitalData';

export default function AppointmentForm({ defaultDoctor = "" }) {
  const [formData, setFormData] = useState({
    patientName: "",
    contactNumber: "",
    preferredDoctor: defaultDoctor,
    preferredDate: "",
    preferredSession: "Morning (9:00 AM – 1:00 PM)",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const activeDoctors = doctorsData.filter(d => d.rosterApproved);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.patientName.trim()) {
      setError("Please enter the patient's full name.");
      return;
    }
    const cleanPhone = formData.contactNumber.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setError("Please enter a valid 10-digit contact telephone number.");
      return;
    }
    if (!formData.preferredDate) {
      setError("Please select a preferred date for the appointment enquiry.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        const existing = JSON.parse(localStorage.getItem('sph_enquiries') || '[]');
        existing.push({
          ...formData,
          submittedAt: new Date().toISOString()
        });
        localStorage.setItem('sph_enquiries', JSON.stringify(existing));
      } catch (err) {
        console.error("Storage error:", err);
      }
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-[#155943] rounded-md p-6 sm:p-8 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-[#E8F3EE] text-[#155943] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        
        <h3 className="text-xl font-bold text-[#24212A]">
          Appointment Enquiry Submitted
        </h3>

        <p className="text-xs sm:text-sm text-[#69636E] max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-[#24212A]">{formData.patientName}</strong>. Your enquiry for{' '}
          <strong className="text-[#24212A]">{formData.preferredDoctor || "Consultant"}</strong> on{' '}
          <strong className="text-[#24212A]">{formData.preferredDate}</strong> ({formData.preferredSession}) has been recorded.
        </p>

        <div className="p-4 rounded-md bg-[#FAF9FB] border border-[#E5E1E7] max-w-md mx-auto text-left text-xs text-[#69636E] space-y-1">
          <div className="font-bold text-[#24212A]">
            Enquiry Confirmation Protocol
          </div>
          <p>
            Please note this enquiry is not a confirmed booking. Our reception desk will contact you at <strong>{formData.contactNumber}</strong> to confirm consultant schedule and issue your consultation token.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`tel:${hospitalInfo.contact.receptionLandline}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[#155943] hover:bg-[#0e4030] text-white font-semibold text-xs transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Reception ({hospitalInfo.contact.receptionLandline})</span>
          </a>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                patientName: "",
                contactNumber: "",
                preferredDoctor: "",
                preferredDate: "",
                preferredSession: "Morning (9:00 AM – 1:00 PM)",
                message: ""
              });
            }}
            className="w-full sm:w-auto px-4 py-2 rounded-md bg-white border border-[#E5E1E7] text-[#24212A] hover:bg-[#FAF9FB] font-semibold text-xs transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-md border border-[#E5E1E7] p-6 sm:p-8">
      
      <div className="mb-5">
        <h3 className="text-xl font-bold text-[#24212A]">
          Request an Appointment Enquiry
        </h3>
        <p className="text-xs text-[#69636E] mt-1">
          Provide your details below. Our hospital front desk will verify specialist availability and reach out to you.
        </p>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-md bg-[#FFF5F5] border border-[#FED7D7] text-[#C53030] text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        
        {/* Patient Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="patientName" className="block text-xs font-semibold text-[#24212A] mb-1">
              Patient Full Name *
            </label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              placeholder="e.g. Ramesh Kumar"
              required
              className="w-full px-3 py-2 rounded-md border border-[#E5E1E7] focus:border-[#78266F] text-xs outline-none bg-white"
            />
          </div>

          <div>
            <label htmlFor="contactNumber" className="block text-xs font-semibold text-[#24212A] mb-1">
              Contact Phone Number *
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="e.g. 98400 12345"
              required
              className="w-full px-3 py-2 rounded-md border border-[#E5E1E7] focus:border-[#78266F] text-xs outline-none bg-white font-mono"
            />
          </div>
        </div>

        {/* Doctor & Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="preferredDoctor" className="block text-xs font-semibold text-[#24212A] mb-1">
              Preferred Doctor or Specialty
            </label>
            <select
              id="preferredDoctor"
              name="preferredDoctor"
              value={formData.preferredDoctor}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-[#E5E1E7] focus:border-[#78266F] text-xs outline-none bg-white"
            >
              <option value="">-- Any Available Specialist --</option>
              {activeDoctors.map((doc) => (
                <option key={doc.id} value={doc.name}>
                  {doc.name} ({doc.speciality.split('|')[0].trim()})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="preferredDate" className="block text-xs font-semibold text-[#24212A] mb-1">
              Preferred Date *
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              required
              className="w-full px-3 py-2 rounded-md border border-[#E5E1E7] focus:border-[#78266F] text-xs outline-none bg-white"
            />
          </div>
        </div>

        {/* Time Window */}
        <div>
          <label htmlFor="preferredSession" className="block text-xs font-semibold text-[#24212A] mb-1">
            Preferred Time Window
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            {["Morning (9:00 AM – 1:00 PM)", "Afternoon (1:00 PM – 4:00 PM)", "Evening (4:00 PM – 8:00 PM)"].map((slot) => (
              <label 
                key={slot}
                className={`flex items-center gap-2 p-2 rounded-md border cursor-pointer ${
                  formData.preferredSession === slot 
                    ? 'border-[#78266F] bg-[#FAF9FB] text-[#78266F] font-semibold' 
                    : 'border-[#E5E1E7] text-[#69636E]'
                }`}
              >
                <input
                  type="radio"
                  name="preferredSession"
                  value={slot}
                  checked={formData.preferredSession === slot}
                  onChange={handleChange}
                  className="accent-[#78266F]"
                />
                <span>{slot.split('(')[0]}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Short Note */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-[#24212A] mb-1">
            Optional Short Message
          </label>
          <input
            type="text"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="e.g. First time consultation / Follow-up"
            maxLength={180}
            className="w-full px-3 py-2 rounded-md border border-[#E5E1E7] focus:border-[#78266F] text-xs outline-none bg-white"
          />
        </div>

        <p className="text-[11px] text-[#69636E]">
          Note: This submission registers an appointment enquiry. Confirmed booking tokens are assigned by the front desk.
        </p>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 px-4 rounded-md bg-[#78266F] hover:bg-[#621d5a] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
        >
          {loading ? (
            <span>Submitting Enquiry...</span>
          ) : (
            <>
              <Send className="w-3.5 h-3.5" />
              <span>Submit Appointment Enquiry</span>
            </>
          )}
        </button>

      </form>

    </div>
  );
}
