# Sri Padmapriya Hospital Pvt. Ltd. — Official Website

Official modern, responsive, production-oriented healthcare website for **Sri Padmapriya Hospital Pvt. Ltd.**, located at No. 28, 1st Avenue, Indira Nagar, Adyar, Chennai, Tamil Nadu – 600020.

---

## 1. Project Overview & Clinical Compliance

Built strictly in accordance with the **Master Website Development Prompt**, healthcare UI/UX guidelines, accessibility best practices, and verified information rules:
- **Logo & Identity:** Grounded in original signage branding extracted from hospital premise photography (`#68236B` primary plum/magenta, `#2D5A43` deep green accent, `#FAFAFA` clean medical surface).
- **Doctors & Roster Governance:**
  - Original doctor portraits linked to respective consultants without artificial alterations.
  - Candidate records explicitly distinguish verified degrees/registrations from items pending client confirmation.
  - Personal contact details from doctor visiting cards are withheld from public display in compliance with privacy guidelines.
  - Clear distinction between an *Appointment Enquiry* and a *Confirmed Booking*.
- **Facilities & Master Floor Plan:**
  - Grounded directly on the authentic photographed **Hospital Master Floor Plan** signage (Ground, 1st, 2nd, and 3rd floors).
- **Vision & Mission:**
  - Verbatim bilingual text (English & Tamil) transcribed directly from original hospital signage.

---

## 2. Sitemap & Implemented Routes

| Route | Page | Purpose |
|---|---|---|
| `/` | **Home** | Slim info bar, hero section, trust indicators, clinical specialties, featured doctors, facility preview, vision/mission, appointment enquiry, and Google Maps embed. |
| `/about` | **About the Hospital** | Hospital history (est. 2001), authentic bilingual vision & mission, core values, clinical governance. |
| `/doctors` | **Doctor Directory** | Searchable & filterable directory by specialty, verified credentials, registration badges, visiting card references. |
| `/doctors/:slug` | **Doctor Profile** | Dedicated individual profiles with original photo, qualifications, consultation fee, schedule, and direct enquiry form. |
| `/specialities` | **Specialities & Care** | Detailed clinical care departments (Obstetrics, Surgery, Ortho, Neurology, Plastic Surgery, ENT, etc.). |
| `/facilities` | **Hospital Facilities** | Complete multi-floor facility breakdown based on authentic Master Floor Plan signage. |
| `/appointment` | **Appointment Enquiry** | Interactive patient request form with client-side validation, slot selection, and storage logging. |
| `/contact` | **Contact & Location** | Verified landlines (`044-24451252`), mobile (`+91 94442 00270`), address, landmarks, and interactive map. |
| `/privacy` | **Privacy Policy** | Patient data minimization and healthcare privacy practices. |
| `/terms` | **Terms of Use** | Medical disclaimers and enquiry policy. |
| `*` | **Not Found (404)** | Dedicated helpful recovery page. |

---

## 3. Technology Stack

- **Framework:** React 19 + Vite 8
- **Routing:** React Router v7
- **Styling:** Tailwind CSS v4 + custom healthcare color tokens
- **Typography:** Plus Jakarta Sans (body) & Playfair Display (headings)
- **Icons:** Lucide React
- **Build Output:** Production bundle optimized with gzip support (`npm run build`)

---

## 4. How to Run Locally

### Prerequisites
- Node.js (v18 or higher recommended; developed on Node v24)
- npm

### Installation & Startup
```bash
# Navigate to the project root directory:
cd "c:\Users\USER\Documents\Sri Padmapriya hospital web project\Web\Hospital web"

# Start the development server:
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
```
The compiled, ready-to-deploy static assets will be located in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 5. Deployment Guide

The `dist/` folder can be directly hosted on any modern static web hosting service:
- **Cloudflare Pages / Vercel / Netlify:** Connect Git repo or drag-and-drop the `dist/` folder.
- **Firebase Hosting:** Run `firebase deploy` with public directory set to `dist`.
- **Apache / Nginx / Shared Hosting:** Copy contents of `dist/` to `public_html`. Ensure URL rewriting is enabled for client-side routing (fallback to `index.html`).

---

## 6. Asset Inventory & Verification Log

See `ASSET_INVENTORY_AND_QA_REPORT.md` for the full breakdown of supplied assets, verified doctor details, and items awaiting client sign-off.

