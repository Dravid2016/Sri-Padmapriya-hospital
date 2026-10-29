# Sri Padmapriya Hospital Pvt. Ltd. — Asset Inventory & QA Report

**Client:** Sri Padmapriya Hospital Pvt. Ltd.  
**Location:** No. 28, 1st Avenue, Indira Nagar, Adyar, Chennai, Tamil Nadu – 600020  
**Project:** Official Hospital Website Implementation  
**Date:** 29 October 2026  

---

## 1. Asset Inventory & Verification Status

| Asset Filename | Category | Intended Use | Associated Entity | Verification & Production Status |
|---|---|---|---|---|
| `Dr_K_Kanmani_Ganesh_Senior_Gynaecologist.png` | Doctor Photograph | Doctor Directory & Profile | Dr. K. Kanmani Ganesh | **Verified**: Original portrait assigned. Fees/schedule marked provisional pending client sign-off. |
| `Dr_Pavithran_Orthopaedics.png` | Doctor Photograph | Doctor Directory & Profile | Dr. Pavithran | **Verified**: Original portrait assigned. Matched to visiting card. |
| `Dr_Shanmuga_Prakash_R_Plastic_Surgery.png` | Doctor Photograph | Doctor Directory & Profile | Dr. Shanmuga Prakash R | **Verified**: Original portrait assigned. ₹1,000 OPD fee supplied in brief. |
| `Dr_Sai_Prashanth_PR_Neurology.png` | Doctor Photograph | Doctor Directory & Profile | Dr. Sai Prashanth PR | **Verified**: Original portrait assigned. Reg No. 107903, OPD ₹800, IP ₹1,000 recorded. |
| `Dr_M_Sivagamasundari_ENT.png` | Doctor Photograph | Doctor Directory & Profile | Dr. M. Sivagamasundari | **Verified**: Original portrait assigned. Reg No. 104219, Fee ₹500 + charges verified against card. |
| `Dr_S_Selva_Sankar_photo_identity_to_confirm.jpeg` | Doctor Photograph | Doctor Directory & Profile | Dr. S. Selva Sankar | **Pending Client Confirmation**: Photographed doctor identity noted in manifest as candidate to confirm. |
| `Dr_G_Rangarajan_General_Laparoscopic_Surgery.png` | Doctor Photograph | Doctor Directory & Profile | Dr. G. Rangarajan | **Verified**: Original portrait assigned. Reg No. 75994 verified against card. |
| `Dr_Pavithran_Professional_Card.png` | Visiting Card | Verification Reference | Dr. Pavithran | **Verified**: MBBS, M.S. Ortho, Orthopaedic Consultant Surgeon. |
| `Dr_M_Sivagamasundari_Professional_Card.png` | Visiting Card | Verification Reference | Dr. M. Sivagamasundari | **Verified**: Regn. No. 104219. Consultant ENT, Head & Neck Surgery. |
| `Dr_G_Rangarajan_Professional_Card.png` | Visiting Card | Verification Reference | Dr. G. Rangarajan | **Verified**: Regn. No. 75994. General & Laparoscopic Surgeon, Asst. Prof. Stanley Medical College. |
| `hospital_vision_mission_signage.jpg` | Hospital Signage | Brand & About Reference | Hospital Premise | **Verified**: Original signage photograph at Indira Nagar premise. Transcribed verbatim in English and Tamil. |
| `hospital_master_floor_plan_signage.jpg` | Floor Plan Signage | Facilities Reference | Hospital Premise | **Verified**: Multi-floor directory (Ground, 1st, 2nd, 3rd) transcribed verbatim for Facilities page. |
| `hospital_signage_header_logo.png` | Brand Signage Crop | Header & Favicon Identity | Hospital Brand | **Provisional Crop**: High-resolution extract from signage board. Vector logo SVG/AI requested from client. |

---

## 2. Doctor Directory Status & Client Confirmations Needed

| Doctor | Qualifications | Stated Speciality | Registration No. | Public Fee Display | Client Approval Needed |
|---|---|---|---|---|---|
| **Dr. K. Kanmani Ganesh** | MBBS, DGO, MD (OG) | Obstetrics, Gynaecology & Infertility | Pending | ₹700 (Provisional) | Confirm consultation fee & council registration number. |
| **Dr. Pavithran** | MBBS, M.S. Ortho | Orthopaedics & Joint Care | Pending | Pending | Confirm official hospital consultation fee and OPD days. |
| **Dr. Shanmuga Prakash R** | Degrees to verify | Plastic, Cosmetic & Hair Transplant Surgery | Pending | ₹1,000 (Supplied) | Provide exact medical degree abbreviations & registration number. |
| **Dr. Sai Prashanth PR** | MBBS, MD, DM, FNB | Neurology & Neurointervention | **107903** (Verified) | OPD ₹800 / IP ₹1,000 | Confirm specific days of the week for 11:30 AM–12:00 PM slot. |
| **Dr. M. Sivagamasundari** | MBBS, MS (ENT) | ENT, Head & Neck Surgery | **104219** (Verified) | ₹500 + Hospital Charges | Confirm on-call emergency arrival protocol. |
| **Dr. S. Selva Sankar** | MS, FMAS, M.Ch. (SGE) | Surgical Gastroenterology / GI | Pending | Pending | Confirm identity mapping of portrait image and consultation fee. |
| **Dr. G. Rangarajan** | MBBS, DIP (DIAB), MS, FMAAS, (MMC) FALS | General & Laparoscopic Surgery | **75994** (Verified) | Pending | Confirm hospital consultation fee and OPD consulting days. |
| **Dr. Gokulakrishnan** | Critical Care Consultant | Critical Care & ICU | Pending | Inpatient Billing | Photo and visiting card not supplied; kept unlisted until approved. |

---

## 3. Medical Accuracy & Hospital Claims Compliance

1. **NABH Accreditation:** Withheld from public declaration pending receipt of official validity certificate from client.
2. **Bed Capacity Claims:** 30-bed registered capacity is noted in background notes but excluded from unsupported promotional claims until validated.
3. **Emergency Care:** Reception and Inpatient admissions are clearly noted; acute casualty triage disclaimer instructs emergency cases to contact desk directly or visit casualty.
4. **Physician Privacy:** Personal mobile numbers and private email addresses printed on doctors' personal visiting cards have been intentionally withheld from public display.
5. **No Unsupported Claims:** No claims of "best hospital in Chennai", "guaranteed surgical cures", or fabricated patient testimonials have been included.

---

## 4. Quality Assurance (QA) Checklist

- [x] **Responsive Layout:** Verified on mobile (375px), tablet (768px), and desktop (1280px+).
- [x] **Navigation & Links:** All internal links (`/about`, `/doctors`, `/doctors/:slug`, `/specialities`, `/facilities`, `/appointment`, `/contact`, `/privacy`, `/terms`) are fully functional with seamless client-side routing.
- [x] **Image Loading & Sizing:** All 7 doctor portraits, 3 visiting cards, and 2 premise signage images are served locally with aspect-ratio containers and object-fit rules.
- [x] **Telephone & Directions Links:** Click-to-call configured for `044-24451252` and `+91 94442 00270`; Google Maps links configured with verified Adyar pin.
- [x] **Appointment Workflow:** Complete form with validation, slot selection, and storage logging without misleading patient that booking is instantly confirmed without reception call.
- [x] **SEO & Metadata:** Page title, Open Graph image, robots.txt, and sitemap.xml prepared.
- [x] **Accessibility:** Semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`), visible focus indicators, descriptive alt tags, and high-contrast color tokens.
- [x] **Build Integrity:** `vite build` passes with zero errors and zero warnings.

