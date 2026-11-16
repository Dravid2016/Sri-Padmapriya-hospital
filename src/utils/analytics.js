/**
 * Google Analytics 4 (GA4) Event Dispatcher
 * Safely tracks healthcare patient enquiry events without logging PII or medical data.
 */

export const GA_MEASUREMENT_ID = 'G-MEASUREMENT_ID_PENDING'; // Can be populated with actual Measurement ID or env variable

export const trackGAEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  } else {
    // Development console audit log
    if (process.env.NODE_ENV === 'development') {
      console.log(`[GA4 Event Audit] ${eventName}:`, eventParams);
    }
  }
};

// Healthcare-specific event handlers
export const trackCallClick = (phoneNumber, locationLabel = 'global_header') => {
  trackGAEvent('click_to_call', {
    phone_number: phoneNumber,
    source_location: locationLabel
  });
};

export const trackWhatsAppClick = (sourceLocation = 'floating_button') => {
  trackGAEvent('whatsapp_enquiry_click', {
    source_location: sourceLocation
  });
};

export const trackAppointmentSubmit = (doctorSpecialty = 'General') => {
  trackGAEvent('appointment_form_submission', {
    specialty_selected: doctorSpecialty
  });
};

export const trackDoctorProfileView = (doctorName, doctorSlug, specialty) => {
  trackGAEvent('doctor_profile_view', {
    doctor_name: doctorName,
    doctor_slug: doctorSlug,
    specialty: specialty
  });
};

export const trackDirectionsClick = () => {
  trackGAEvent('directions_click', {
    destination: '1st Avenue, Indira Nagar, Adyar, Chennai'
  });
};
