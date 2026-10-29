import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Doctors from './pages/Doctors';
import DoctorProfile from './pages/DoctorProfile';
import Specialities from './pages/Specialities';
import Facilities from './pages/Facilities';
import PatientInfo from './pages/PatientInfo';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen flex flex-col bg-white text-[#24212A] font-sans selection:bg-[#78266F]/15 selection:text-[#78266F]">
        {/* Subtle, non-intrusive Purple Caduceus Medical Watermark in background */}
        <div 
          aria-hidden="true" 
          className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden select-none"
        >
          <img
            src="/images/caduceus_purple_watermark.png"
            alt=""
            className="w-[520px] max-w-[85vw] h-auto object-contain opacity-[0.055]"
          />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/doctors/:slug" element={<DoctorProfile />} />
              <Route path="/specialities" element={<Specialities />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/patient-info" element={<PatientInfo />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfUse />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
