# Mithun Mohan — Personal Developer Portfolio

Personal developer portfolio website of **Mithun Mohan**, a B.Tech Computer Science & Engineering student specializing in full-stack mobile and backend development with **Python**, **Flutter**, and **FastAPI**.

---

## About the Project

This repository contains the source code for my personal portfolio website. It is designed to give recruiters, collaborators, and fellow developers a clear, modern overview of my engineering background, hands-on industry experience, technical skills, academic qualifications, and featured software projects.

---

## Key Sections & Features

- **Hero & About:** Introduces my profile, role, summary, social links, and a direct **Download Resume** button (`resume.pdf`).
- **Technical Skills:** Categorizes my core competencies across:
  - **Programming Languages:** `Python`, `Dart`
  - **Frameworks:** `Flutter`, `FastAPI`
  - **Databases & Storage:** `MySQL`, `PostgreSQL`, `MongoDB`, `Firebase`, `MinIO`
  - **Backend & Security:** `RESTful APIs`, `JWT Authentication`, `OAuth2`, `RBAC`, `AES-256 Encryption`
  - **Data & AI:** `Pandas`, `openpyxl`, `PyMuPDF`, `Tesseract OCR`, `Deep Learning (CNN)`
  - **Tools & Version Control:** `Postman`, `Git`, `GitHub`
- **Work Experience:** Highlights my internship as a **Python Developer Intern** at *Quadance Technologies Pvt. Ltd.*, detailing my work on data/OCR pipelines, FastAPI endpoints, authentication, and encrypted object storage.
- **Featured Projects:**
  - **Road Buddy:** Cross-platform emergency roadside assistance mobile app (`Flutter`, `FastAPI`).
  - **Medi Track:** IoT-based smart healthcare and medication adherence system (`Flutter`, `Firebase`, `IoT`, `ESP32`).
  - **Smart Scan:** Mobile frontend for an AI-powered MRI/CT/X-ray medical imaging analysis system (`Flutter`, `Python`, `Deep Learning`, `CNN`).
- **Certifications & Achievements:** Displays verified certifications (*NPTEL — Programming in Python*, *Internship Completion Certificate*) and key engineering achievements (*Google Cloud Study Jams / GDGC*, *MediTrack System hardware deployment*).
- **Education Timeline:** Outlines my B.Tech CSE degree at St. Thomas College of Engineering & Technology (KTU) along with ISC and ICSE academic records.
- **Contact Section:** Provides direct links to reach out via email, phone, or social platforms.
- **Data-Driven Architecture:** All portfolio content is centralized in [`src/data/portfolioData.js`](./src/data/portfolioData.js) for quick updates without modifying UI components.

---

## Tech Stack

| Category | Technology |
| :--- | :--- |
| **Frontend Library** | [React 18](https://react.dev/) |
| **Build Tool** | [Vite 5](https://vitejs.dev/) |
| **Styling** | Custom CSS3 (Dark theme, CSS variables, glassmorphism, responsive Grid/Flexbox) |
| **Typography** | Google Fonts (`Inter`) |
| **Deployment** | [GitHub Pages](https://pages.github.com/) (`gh-pages`) |

---

## Project Structure

```text
Portfolio/
├── public/
│   ├── favicon.svg          # Custom site icon
│   ├── profile.jpg          # Profile photograph
│   └── resume.pdf           # Downloadable resume PDF
├── src/
│   ├── components/          # Modular React UI sections
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js # Single source of truth for all personal data
│   ├── App.jsx
│   ├── index.css            # Global theme & design tokens
│   └── main.jsx
├── index.html               # SEO & Open Graph metadata
├── package.json
└── vite.config.js
```

---

## Getting Started Locally

### Prerequisites

- **Node.js** (v18+ recommended) and **npm**

### Installation & Development

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mithun15-codes/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Build for production:**

   ```bash
   npm run build
   ```

5. **Deploy to GitHub Pages:**

   ```bash
   npm run deploy
   ```