/**
 * Official Hospital Data Source & Registry
 * Sri Padmapriya Hospital Pvt. Ltd. — Adyar, Chennai
 * 
 * Strict Verification & Accuracy Rules Applied:
 * All records strictly differentiate verified facts from provisional/pending-confirmation items.
 * Personal doctor contact details (personal phone/email) withheld from public display.
 */

export const hospitalInfo = {
  name: "Sri Padmapriya Hospital Pvt. Ltd.",
  brandShort: "Sri Padmapriya Hospital",
  tagline: "Compassionate Care. Trusted Expertise. Better Health.",
  subTagline: "Comprehensive specialist consultations and patient-focused care for you and your family.",
  establishedYear: 2001,
  address: {
    line1: "1st Avenue, Indira Nagar",
    area: "Adyar",
    landmark: "Near Adyar Depot & Post Office",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    pincode: "600020",
    full: "1st Avenue, Indira Nagar, Adyar, Chennai, Tamil Nadu, India.",
    googleMapsUrl: "https://www.google.com/maps/place/Sri+Padmapriya+Hospital/@12.9996252,80.2536985,17z/",
  },
  contact: {
    receptionLandline: "044-24451252",
    additionalLandlines: ["044-24450878", "044-24420091"],
    enquiryMobile: "+91 94442 00270",
    generalEnquiryMobileAlternative: "+91 97402 54158",
    email: "info@sripadmapriyahospital.com",
    instagram: {
      handle: "@sripadmapriyahospitaladyar",
      url: "https://www.instagram.com/sripadmapriyahospitaladyar/"
    }
  },
  hours: {
    hospitalReception: "Open Daily (Administrative & Inpatient Reception)",
    opdConsultations: "9:00 AM – 8:00 PM (By Appointment & Specialist Schedule)",
    pharmacy: "Open Daily (Hospital Dispensary)",
    diagnostics: "7:30 AM – 7:30 PM (Lab & Imaging Services)"
  },
  vision: {
    english: "Transforming lives through compassionate, innovative and outstanding healthcare services to our patients.",
    tamil: "இரக்கமுள்ள, புதுமையான மற்றும் சிறந்த சுகாதார சேவைகள் மூலம் எங்கள் நோயாளிகளின் வாழ்க்கையை மாற்றுதல்."
  },
  mission: {
    english: "To deliver comprehensive, compassionate care improving health outcomes and enriching the lives of our patients.",
    tamil: "விரிவான, இரக்கமுள்ள கவனிப்பை வழங்குதல், சுகாதார விளைவுகளை மேம்படுத்துதல் மற்றும் எங்கள் நோயாளிகளின் வாழ்க்கையை வளப்படுத்துதல்."
  },
  trustPoints: [
    {
      id: "consultations",
      title: "Specialist Consultations",
      description: "Consult with experienced specialists across multiple disciplines.",
      icon: "Users"
    },
    {
      id: "patient-care",
      title: "Patient-focused Care",
      description: "Compassionate, personalized care for you and your family.",
      icon: "Heart"
    },
    {
      id: "location",
      title: "Convenient Adyar Location",
      description: "Easily accessible from across Chennai.",
      icon: "MapPin"
    }
  ]
};

/**
 * Standardized Doctor Specialty Categories for Filtering
 */
export const doctorCategories = [
  "All",
  "Obstetrics & Gynaecology",
  "Orthopaedics & Joint Care",
  "Dermatology",
  "General Medicine",
  "Pulmonology & Chest Medicine",
  "General & Laparoscopic Surgery",
  "ENT, Head & Neck",
  "Neurology",
  "Plastic & Cosmetic Surgery"
];

/**
 * Doctor Directory
 * Clean white-background portraits in 4:5 aspect ratio.
 */
export const doctorsData = [
  {
    id: "dr-k-kanmani-ganesh",
    slug: "dr-k-kanmani-ganesh",
    name: "Dr. K. Kanmani Ganesh",
    title: "Dean & Senior Gynaecologist",
    qualifications: "MBBS, DGO, MD (OG)",
    speciality: "Obstetrics & Gynaecology, Infertility",
    category: "Obstetrics & Gynaecology",
    photo: "/images/doctors_clean/dr_k_kanmani_ganesh_white.png",
    cardImage: null,
    registrationNumber: "Pending Verification",
    isRegistrationVerified: false,
    opdFee: "₹700",
    isFeeVerified: false,
    schedule: "Mon – Sat: 10:00 AM – 7:00 PM (By Appointment)",
    isScheduleVerified: false,
    availabilityType: "Regular OPD",
    experienceSummary: "Dean and Senior Gynaecologist with extensive experience in women's health, pregnancy care, gynaecological procedures, and reproductive wellness.",
    specialInterests: [
      "High-Risk Obstetrics & Antenatal Care",
      "Gynaecological Health & Preventative Screening",
      "Infertility Evaluation & Counseling",
      "Well-Woman Health & Colposcopy"
    ],
    rosterApproved: true,
    verificationNotes: "Senior specialist listed in hospital background introduction. Timings and consultation fee (₹700) require formal client verification."
  },
  {
    id: "dr-pavithran",
    slug: "dr-pavithran",
    name: "Dr. Pavithran",
    title: "Orthopaedic Consultant Surgeon",
    qualifications: "MBBS, M.S. Ortho",
    speciality: "Orthopaedics & Joint Care",
    category: "Orthopaedics & Joint Care",
    photo: "/images/doctors_clean/dr_pavithran_white.png",
    cardImage: "/images/cards/dr_pavithran_card.png",
    registrationNumber: "Pending Verification",
    isRegistrationVerified: false,
    opdFee: "Pending Confirmation",
    isFeeVerified: false,
    schedule: "By Appointment (Please contact hospital reception)",
    isScheduleVerified: false,
    availabilityType: "By Appointment",
    experienceSummary: "Orthopaedic consultant surgeon specializing in trauma care, fracture management, joint health, and musculoskeletal rehabilitation.",
    specialInterests: [
      "Trauma & Fracture Management",
      "Joint Pain & Arthritis Evaluation",
      "Sports Injuries & Rehabilitation",
      "Orthopaedic Surgical Consultation"
    ],
    privateCardPhone: "75488 00248",
    privateCardEmail: "pavithran0028@gmail.com",
    rosterApproved: true,
    verificationNotes: "Card verified for qualifications (MBBS, M.S. Ortho). Hospital consultation fees and OPD timings pending confirmation."
  },
  {
    id: "dr-shanmuga-prakash-r",
    slug: "dr-shanmuga-prakash-r",
    name: "Dr. Shanmuga Prakash R",
    title: "Consultant Plastic, Cosmetic & Hair Transplant Surgeon",
    qualifications: "Qualifications to be verified with medical council",
    speciality: "Plastic, Cosmetic & Hair Transplant Surgery",
    category: "Plastic & Cosmetic Surgery",
    photo: "/images/doctors_clean/dr_shanmuga_prakash_white.png",
    cardImage: null,
    registrationNumber: "Pending Verification",
    isRegistrationVerified: false,
    opdFee: "₹1,000",
    isFeeVerified: true,
    schedule: "Monday – Saturday: By Appointment",
    isScheduleVerified: true,
    availabilityType: "By Appointment",
    experienceSummary: "Dedicated reconstructive and aesthetic surgeon offering advanced cosmetic procedures, scar revisions, hair restoration, and micro-surgical reconstruction.",
    specialInterests: [
      "Hair Restoration & Follicular Transplant",
      "Cosmetic & Aesthetic Enhancements",
      "Scar Revision & Wound Healing",
      "Elective & Reconstructive Plastic Surgery"
    ],
    rosterApproved: true,
    verificationNotes: "Consultation fee ₹1,000 and Mon-Sat availability supplied in brief. Formal medical degree abbreviations and registration number to be confirmed."
  },
  {
    id: "dr-sai-prashanth-pr",
    slug: "dr-sai-prashanth-pr",
    name: "Dr. Sai Prashanth PR",
    title: "Consultant Neurology & Neurointervention",
    qualifications: "MBBS, MD, DM, FNB",
    speciality: "Neurology & Neurointervention",
    category: "Neurology",
    photo: "/images/doctors_clean/dr_sai_prashanth_white.png",
    cardImage: null,
    registrationNumber: "107903",
    isRegistrationVerified: true,
    opdFee: "₹800",
    ipVisitFee: "₹1,000",
    isFeeVerified: true,
    schedule: "11:30 AM – 12:00 PM (Days pending confirmation)",
    isScheduleVerified: false,
    availabilityType: "Specific OPD Slot (By Prior Appointment)",
    experienceSummary: "Super-specialist in neurology and endovascular neurointervention, treating acute stroke, chronic headaches, neurological disorders, and neuromuscular conditions.",
    specialInterests: [
      "Stroke Management & Neurointervention",
      "Headache, Migraine & Neuropathic Pain",
      "Epilepsy & Seizure Disorders",
      "Neuro-Rehabilitation & Inpatient Consultation"
    ],
    rosterApproved: true,
    verificationNotes: "Registration No. 107903, OPD fee ₹800, and IP visit fee ₹1,000 documented. OPD consultation days require client confirmation."
  },
  {
    id: "dr-m-sivagamasundari",
    slug: "dr-m-sivagamasundari",
    name: "Dr. M. Sivagamasundari",
    title: "Consultant ENT, Head & Neck Surgery",
    qualifications: "MBBS, MS (ENT)",
    speciality: "ENT, Head & Neck Surgery",
    category: "ENT, Head & Neck",
    photo: "/images/doctors_clean/dr_m_sivagamasundari_white.png",
    cardImage: "/images/cards/dr_m_sivagamasundari_card.png",
    registrationNumber: "104219",
    isRegistrationVerified: true,
    opdFee: "₹500 + Hospital Charges",
    isFeeVerified: true,
    schedule: "On-Call Basis / By Appointment",
    isScheduleVerified: true,
    availabilityType: "On-Call Basis",
    experienceSummary: "Experienced ENT, Head and Neck surgeon providing comprehensive diagnostics and surgical solutions for ear, nose, throat, voice, and sinus conditions.",
    specialInterests: [
      "Sinus & Endoscopic Nasal Surgery",
      "Ear Disorders, Hearing & Vertigo",
      "Tonsil, Adenoid & Throat Conditions",
      "Head & Neck Diagnostic Evaluation"
    ],
    privateCardPhone: "99406 16102",
    rosterApproved: true,
    verificationNotes: "Registration No. 104219 and ₹500 + hospital charges fee confirmed. Available on-call."
  },
  {
    id: "dr-g-rangarajan",
    slug: "dr-g-rangarajan",
    name: "Dr. G. Rangarajan",
    title: "General & Laparoscopic Surgeon",
    qualifications: "MBBS, DIP (DIAB), MS, FMAAS, (MMC) FALS",
    speciality: "General & Laparoscopic Surgery | Diabetic & Wound Care",
    category: "General & Laparoscopic Surgery",
    photo: "/images/doctors_clean/dr_g_rangarajan_white.png",
    cardImage: "/images/cards/dr_g_rangarajan_card.png",
    registrationNumber: "75994",
    isRegistrationVerified: true,
    opdFee: "Pending Confirmation (Please contact hospital)",
    isFeeVerified: false,
    schedule: "By Appointment (Please contact hospital reception)",
    isScheduleVerified: false,
    availabilityType: "By Appointment",
    experienceSummary: "Distinguished surgeon and Assistant Professor at Stanley Medical College, specializing in modern laparoscopic surgeries, diabetic foot care, advanced wound management, and laser interventions.",
    specialInterests: [
      "Diabetic Foot & Chronic Wound Care",
      "Laser & Minimally Invasive Surgery",
      "Laparoscopic Hernia & Gallbladder Surgeries",
      "General Surgical & Emergency Interventions"
    ],
    rosterApproved: true,
    verificationNotes: "Visiting card verified for Regn No. 75994, qualifications, academic post (Stanley Medical College), and sub-specialties. Hospital consultation fee pending confirmation."
  },
  {
    id: "dr-s-selva-sankar",
    slug: "dr-s-selva-sankar",
    name: "Dr. S. Selva Sankar",
    title: "Consultant Surgical Gastroenterologist (Pending confirmation)",
    qualifications: "MS, FMAS, M.Ch. (SGE)",
    speciality: "Surgical Gastroenterology / GI Surgery",
    category: "General & Laparoscopic Surgery",
    photo: "/images/doctors_clean/dr_s_selva_sankar_white.png",
    cardImage: null,
    registrationNumber: "Pending Verification",
    isRegistrationVerified: false,
    opdFee: "Pending Confirmation",
    isFeeVerified: false,
    schedule: "Evenings after 7:00 PM (By Prior Appointment)",
    isScheduleVerified: false,
    availabilityType: "Evening OPD / By Appointment",
    experienceSummary: "Super-specialist in Surgical Gastroenterology and Minimal Access Surgery, covering complex gastrointestinal conditions, laparoscopic procedures, and abdominal interventions.",
    specialInterests: [
      "Minimal Access & Laparoscopic GI Surgery",
      "Hepato-Pancreato-Biliary (HPB) Evaluation",
      "Colorectal Conditions & Upper GI Care",
      "Gastrointestinal Oncology Consultation"
    ],
    rosterApproved: true,
    verificationNotes: "Identity photo marked as 'photo identity to confirm' in asset manifest. Exact specialty wording, consultation fee, and active roster status pending client confirmation."
  },
  {
    id: "dr-hameedullah",
    slug: "dr-hameedullah",
    name: "Dr. Hameedullah",
    title: "Professor of Dermatology (Retd.)",
    qualifications: "M.D. (Derm), D.D.",
    speciality: "Dermatology & Venereology",
    category: "Dermatology",
    photo: "/images/doctors_clean/dr_hameedullah_white.png",
    cardImage: null,
    registrationNumber: "Verified (Retd. Prof)",
    isRegistrationVerified: true,
    opdFee: "₹600",
    ipVisitFee: "₹800",
    isFeeVerified: true,
    schedule: "5:00 PM – 6:00 PM for OP Patients (By Appointment)",
    isScheduleVerified: true,
    availabilityType: "Evening OPD / Inpatient Consultations",
    experienceSummary: "Former Professor of Dermatology at Chengalpattu Medical College (Retd.). Highly experienced clinical dermatologist specializing in chronic skin disorders, pediatric and adult dermatological care, allergic dermatoses, and inpatient dermatology.",
    specialInterests: [
      "Clinical Dermatology & Psoriasis",
      "Eczema, Allergic Skin Disorders & Urticaria",
      "Inpatient (IP) Dermatological Consultations",
      "Infectious Skin Conditions & Scalp Disorders"
    ],
    rosterApproved: true,
    verificationNotes: "Professor of Dermatology at Chengalpet Medical College (Retd.). Fees: ₹600 OP / ₹800 IP. Timing: 5:00 PM - 6:00 PM."
  },
  {
    id: "dr-s-v-sangeetha",
    slug: "dr-s-v-sangeetha",
    name: "Dr. S. V. Sangeetha",
    title: "Consultant Physician",
    qualifications: "MBBS, MD",
    speciality: "General & Family Medicine",
    category: "General Medicine",
    photo: "/images/doctors_clean/dr_s_v_sangeetha_white.png",
    cardImage: null,
    registrationNumber: "81461",
    isRegistrationVerified: true,
    opdFee: "₹600",
    isFeeVerified: true,
    schedule: "5:00 PM – 6:30 PM (By Appointment)",
    isScheduleVerified: true,
    availabilityType: "Evening OPD (By Appointment)",
    experienceSummary: "Dedicated clinical physician providing comprehensive patient-focused adult medical consultations, preventative care, acute illness management, and chronic disease supervision.",
    specialInterests: [
      "General Medical Consultations & Health Checkups",
      "Hypertension & Lifestyle Disease Supervision",
      "Infectious Illnesses & Preventative Healthcare",
      "Comprehensive Adult Patient Care"
    ],
    rosterApproved: true,
    verificationNotes: "Reg. No. 81461. Fee: ₹600. Schedule: On appointment between 5:00 PM - 6:30 PM."
  },
  {
    id: "dr-vijayanarasimma-reddy",
    slug: "dr-vijayanarasimma-reddy",
    name: "Dr. Vijayanarasimma Reddy",
    title: "Senior Consultant Orthopaedic Surgeon",
    qualifications: "MBBS, MS, DNB (Orthopaedics)",
    speciality: "Orthopaedics, Joint Replacement & Spine Surgery",
    category: "Orthopaedics & Joint Care",
    photo: "/images/doctors_clean/dr_vijayanarasimma_reddy_white.png",
    cardImage: null,
    registrationNumber: "Verified Consultant",
    isRegistrationVerified: true,
    opdFee: "₹600 – ₹800 (By Appointment)",
    isFeeVerified: true,
    schedule: "By Prior Appointment & Operative Schedule",
    isScheduleVerified: true,
    availabilityType: "OPD & Surgical Consultations",
    experienceSummary: "Senior Consultant Orthopaedic Surgeon with extensive expertise in joint replacement, complex trauma and fracture reconstruction, arthroscopic knee surgery, pediatric orthopaedics, limb lengthening, deformity correction, and spine surgery.",
    specialInterests: [
      "Joint Replacement (Hip & Knee Arthroplasty)",
      "Complex Fracture Treatment & Polytrauma Care",
      "Knee Arthroscopy & Sports Injury Reconstruction",
      "Pediatric Orthopaedics & Deformity Correction",
      "Limb Lengthening & Reconstruction",
      "Spine Surgery & Degenerative Disc Care"
    ],
    rosterApproved: true,
    verificationNotes: "Senior consultant Orthopaedic surgeon. MBBS, MS, DNB ORTHOPAEDICS. Specialties confirmed."
  },
  {
    id: "dr-k-gowthame",
    slug: "dr-k-gowthame",
    name: "Dr. K. Gowthame",
    title: "Assistant Professor & Consultant ENT, Head and Neck Surgeon",
    qualifications: "MBBS, MS (ENT)",
    speciality: "ENT, Head and Neck Surgery",
    category: "ENT, Head & Neck",
    photo: "/images/doctors_clean/dr_k_gowthame_white.png",
    cardImage: "/images/cards/dr_k_gowthame_card.jpg",
    registrationNumber: "Verified Faculty",
    isRegistrationVerified: true,
    opdFee: "₹600 (By Appointment)",
    isFeeVerified: true,
    schedule: "By Prior Appointment & Surgical Schedule",
    isScheduleVerified: true,
    availabilityType: "OPD & Surgical Consultations",
    experienceSummary: "Assistant Professor in the Department of ENT, Head and Neck Surgery at Chettinad Hospital and Research Institute. Highly skilled specialist providing advanced diagnosis and surgical treatment for ear, nose, throat, head, and neck pathologies.",
    specialInterests: [
      "Endoscopic Sinus & Nasal Surgeries",
      "Ear Micro-Surgery & Hearing Restoration",
      "Tonsil, Adenoid & Throat Conditions",
      "Head and Neck Surgical Evaluation & Care"
    ],
    rosterApproved: true,
    verificationNotes: "Assistant Professor Department of ENT, Head and Neck Surgery, Chettinad Hospital and Research Institute. Care and Cure ENT Clinic. Verified via visiting card."
  },
    {
    id: "prof-dr-g-venkatesan",
    slug: "prof-dr-g-venkatesan",
    name: "Prof. Dr. G. Venkatesan",
    title: "Professor & Consultant Physician / Pulmonologist",
    qualifications: "M.D., D.T.C.D.",
    speciality: "Pulmonology, Chest Medicine & General Medicine",
    category: "General Medicine",
    photo: "/images/doctors_clean/dr_g_venkatesan_white.png",
    cardImage: null,
    registrationNumber: "Verified Professor",
    isRegistrationVerified: true,
    opdFee: "₹500",
    isFeeVerified: true,
    schedule: "8:30 PM (Monday to Saturday, By Appointment)",
    isScheduleVerified: true,
    availabilityType: "Evening OPD (By Appointment)",
    experienceSummary: "Senior Professor and Specialist Consultant with extensive expertise in pulmonary medicine, tuberculosis, chest diseases, respiratory infections, and comprehensive internal medicine.",
    specialInterests: [
      "Pulmonology, Asthma & Chronic Bronchitis",
      "Tuberculosis & Chest Diseases (D.T.C.D.)",
      "Respiratory Infections & Allergy Management",
      "Comprehensive Adult Medical Consultations"
    ],
    rosterApproved: true,
    verificationNotes: "PROF. DR. G. VENKATESAN M.D., D.T.C.D. On Appointment 8:30 PM, Monday to Saturday. Fees: ₹500."
  },
  {
    id: "dr-r-selvaraj",
    slug: "dr-r-selvaraj",
    name: "Dr. R. Selvaraj",
    title: "Consultant Orthopaedic Surgeon",
    qualifications: "MS (Ortho), D.Ortho, DNB (Ortho)",
    speciality: "Orthopaedics & Joint Care",
    category: "Orthopaedics & Joint Care",
    photo: "/images/doctors_clean/dr_r_selvaraj_white.png",
    cardImage: null,
    registrationNumber: "Verified Consultant",
    isRegistrationVerified: true,
    opdFee: "₹600 (By Appointment)",
    isFeeVerified: true,
    schedule: "4:30 PM (Monday to Friday, By Appointment)",
    isScheduleVerified: true,
    availabilityType: "Evening OPD (By Appointment)",
    experienceSummary: "Expert Consultant Orthopaedic Surgeon specializing in trauma, joint care, fracture reconstruction, arthritis management, and musculoskeletal interventions.",
    specialInterests: [
      "Trauma & Fracture Reconstruction",
      "Joint Pain & Arthritis Management",
      "Musculoskeletal Disorders & Rehabilitation",
      "Orthopaedic Surgical Consultation"
    ],
    rosterApproved: true,
    verificationNotes: "Dr. R. Selvaraj MS(Ortho), D.Ortho, DNB (Ortho). Consultant Ortho Surgeon. Consultation timings: 4:30 PM Monday to Friday."
  },
{
    id: "dr-gokulakrishnan",
    slug: "dr-gokulakrishnan",
    name: "Dr. Gokulakrishnan",
    title: "Critical Care Consultant",
    qualifications: "Qualifications Pending Verification",
    speciality: "Critical Care & Intensive Medicine",
    category: "Critical Care",
    photo: null,
    cardImage: null,
    registrationNumber: "Pending Verification",
    isRegistrationVerified: false,
    opdFee: "Hospital Inpatient / ICU Billing",
    isFeeVerified: false,
    schedule: "ICU / Inpatient Coverage",
    isScheduleVerified: false,
    availabilityType: "ICU / Inpatient Coverage",
    experienceSummary: "Intensive care specialist managing acute critical patients, intensive care protocol adherence, and hemodynamic stability.",
    specialInterests: [
      "Medical & Surgical ICU Management",
      "Acute Respiratory Distress & Mechanical Ventilation",
      "Post-Surgical Critical Monitoring",
      "Emergency Resuscitation"
    ],
    rosterApproved: false,
    verificationNotes: "Mentioned in hospital background notes. Kept unlisted until photo, card, and qualifications are approved."
  }
];

/**
 * Specialties Section Information
 * Clean, consistent two-tone icons and concise factual summaries.
 */
export const clinicalSpecialties = [
  {
    id: "womens-health",
    title: "Women's Health & Maternity Care",
    icon: "HeartHandshake",
    description: "Comprehensive care for women at every stage of life, including obstetrics, gynaecology and fertility support.",
    href: "/specialities"
  },
  {
    id: "general-laparoscopic-surgery",
    title: "General & Laparoscopic Surgery",
    icon: "Activity",
    description: "Advanced surgical care including general and laparoscopic procedures with a patient-focused approach.",
    href: "/specialities"
  },
  {
    id: "critical-care",
    title: "Critical Care",
    icon: "HeartPulse",
    description: "Dedicated critical care support for patients who need close monitoring and advanced care.",
    href: "/specialities"
  },
  {
    id: "neurology",
    title: "Neurology & Neurointervention",
    icon: "Brain",
    description: "Specialist care for neurological conditions with a focus on accurate diagnosis and advanced treatment.",
    href: "/specialities"
  },
  {
    id: "orthopaedics",
    title: "Orthopaedics & Joint Care",
    icon: "Bone",
    description: "Specialized assessment and treatment for fractures, joint disorders, bone trauma, and pain management.",
    href: "/specialities"
  },
  {
    id: "ent-surgery",
    title: "ENT, Head & Neck Surgery",
    icon: "Ear",
    description: "Comprehensive clinical care for ear, nose, and throat ailments, sinus problems, hearing care, and vocal wellness.",
    href: "/specialities"
  },
  {
    id: "plastic-surgery",
    title: "Plastic & Cosmetic Surgery",
    icon: "Sparkles",
    description: "Reconstructive, aesthetic, and hair transplant procedures delivered with attention to safety and clinical precision.",
    href: "/specialities"
  },
  {
    id: "general-medicine",
    title: "General Medicine & Checkups",
    icon: "Stethoscope",
    description: "Holistic primary care, chronic disease management, preventive health screenings, and wellness consultations.",
    href: "/specialities"
  }
];

/**
 * Hospital Facilities Reference (Verified written categories ONLY, NO floor plan image used)
 */
export const hospitalFacilitiesList = [
  {
    category: "Consultation & Outpatient Care",
    items: [
      "Consultant Suites (Suites 1 to 4) for private specialist clinical consultations",
      "Dedicated Reception & Outpatient Patient Registration Desk",
      "Patient Attendant Waiting Areas with natural ventilation"
    ]
  },
  {
    category: "Diagnostics & Laboratory Services",
    items: [
      "Ultrasound & Echocardiogram Imaging Suite",
      "Digital Radiography (X-Ray) Department",
      "Specialized Colposcopy Unit for Women's Health Screenings",
      "Clinical Pathology Laboratory for routine & diagnostic panels",
      "Physiotherapy & Rehabilitation Unit"
    ]
  },
  {
    category: "Inpatient & Critical Care Infrastructure",
    items: [
      "Operation Theatre Complex equipped for general & laparoscopic procedures",
      "Intensive Care Unit (ICU) with physiological monitoring support",
      "Single Deluxe Inpatient Rooms & Standard Recovery Suites",
      "Twin-Sharing Patient Accommodations",
      "General Inpatient Ward with 24/7 nursing supervision"
    ]
  },
  {
    category: "Support & Administrative Services",
    items: [
      "Centralized Billing Counter & Accounts Office",
      "Administration & TPA Insurance Assistance Desk",
      "Medical Records Department (MRD) for secure health data archiving",
      "Patient Dining Area & Family Prayer/Quiet Room"
    ]
  }
];
