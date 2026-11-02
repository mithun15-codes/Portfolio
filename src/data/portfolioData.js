// =====================================================
// PORTFOLIO DATA - SOURCED FROM RESUME (Mithun Mohan)
// =====================================================

export const portfolioData = {
    // ===================
    // PERSONAL INFORMATION
    // ===================
    personal: {
        name: "Mithun Mohan",
        title: "B.Tech Computer Science Student & Python / Flutter Developer",
        status: "Open to Internships & Entry-Level Software Roles",
        tagline: "Full-stack mobile and backend development with Flutter, Python, and FastAPI",

        // Contact Details
        email: "mithunmohan1504@gmail.com",
        phone: "+91 8281700242",
        location: "Kollam, Kerala, India",

        // Profile Image
        profileImage: import.meta.env.BASE_URL + "profile.jpg",

        // Resume PDF
        resumeLink: import.meta.env.BASE_URL + "resume.pdf",

        // Social Links
        social: {
            github: "https://github.com/mithun15-codes",
            linkedin: "https://linkedin.com/in/mithun-mohan15",
            website: "https://mithunmohan.in/",
        }
    },

    // ===================
    // ABOUT ME SECTION
    // ===================
    aboutMe: `
    I am a motivated B.Tech Computer Science and Engineering student at St. Thomas College of Engineering & Technology, Chengannur, with hands-on experience in full-stack mobile and backend development.

    I work with Python, Flutter, and FastAPI, with exposure to RESTful API design, database integration, and AI-based application development. During my Python Developer internship at Quadance Technologies, I built data and OCR pipelines, secured APIs with JWT, OAuth2, and RBAC, and integrated MinIO object storage.

    I am eager to contribute to real-world engineering challenges and grow within a technology-driven organization.
  `,

    // ===================
    // SKILLS SECTION
    // ===================
    skillCategories: [
        {
            title: "Programming Languages",
            icon: "💻",
            items: ["Python", "Dart"]
        },
        {
            title: "Frameworks",
            icon: "🚀",
            items: ["Flutter", "FastAPI"]
        },
        {
            title: "Databases & Storage",
            icon: "🗄️",
            items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "MinIO"]
        },
        {
            title: "Backend & Security",
            icon: "🔐",
            items: ["RESTful APIs", "JWT Authentication", "OAuth2", "RBAC", "AES-256 Encryption"]
        },
        {
            title: "Data & AI",
            icon: "🧠",
            items: ["Pandas", "openpyxl", "PyMuPDF", "Tesseract OCR", "Deep Learning (CNN)"]
        },
        {
            title: "Tools & Version Control",
            icon: "🛠️",
            items: ["Postman", "Git", "GitHub"]
        }
    ],

    // Backward compatibility for existing skill structure
    skills: {
        languages: ["Python", "Dart"],
        frameworks: ["Flutter", "FastAPI"],
        tools: ["Postman", "Git", "GitHub", "MySQL"],
        other: ["RESTful APIs", "JWT", "OAuth2", "RBAC"]
    },

    // ===================
    // EXPERIENCE SECTION
    // ===================
    experience: [
        {
            role: "Python Developer Intern",
            company: "Quadance Technologies Pvt. Ltd.",
            location: "Thiruvananthapuram, Kerala",
            duration: "Jun 3 – Jun 26, 2026",
            highlights: [
                "Built a Text-to-JSON data pipeline in Python using Pandas for data manipulation and openpyxl for Excel export.",
                "Developed an OCR pipeline using PyMuPDF and Tesseract to extract and structure text from PDF documents.",
                "Designed RESTful API endpoints using FastAPI with PostgreSQL and MongoDB integration; tested all APIs with Postman.",
                "Implemented JWT-based authentication with OAuth2 and Role-Based Access Control (RBAC) for secure backend access.",
                "Integrated MinIO object storage with AES-256 encryption for secure media upload and retrieval.",
                "Managed codebase using Git and GitHub with a consistent version-controlled workflow."
            ],
            techStack: ["Python", "FastAPI", "PostgreSQL", "MongoDB", "Pandas", "Tesseract", "MinIO", "Postman", "Git"]
        }
    ],

    // ===================
    // PROJECTS SECTION
    // ===================
    projects: [
        {
            title: "Road Buddy",
            type: "Individual Project",
            description: "A cross-platform mobile app for emergency roadside vehicle assistance. Users can request help and share live location when their vehicle breaks down. The app identifies the nearest mechanic based on vehicle type and location, with admin management for users and service requests.",
            techStack: ["Flutter", "FastAPI"],
            liveLink: "",
            githubLink: "",
            image: ""
        },
        {
            title: "Medi Track",
            type: "Group Project",
            description: "Built the mobile application for an IoT-based healthcare system to improve medication adherence. Integrated Firebase for real-time database sync, authentication, and cloud data management, supporting smart medication tracking, health monitoring, and emergency alerts.",
            techStack: ["Flutter", "Firebase", "IoT", "ESP32"],
            liveLink: "",
            githubLink: "",
            image: ""
        },
        {
            title: "Smart Scan",
            type: "Group Project",
            description: "Developed the mobile frontend for an AI-powered medical imaging analysis system. Enables users to securely upload MRI, CT, and X-ray scans, view AI-generated predictions, and access results across healthcare workflows via backend API integration.",
            techStack: ["Flutter", "Python", "Deep Learning", "CNN"],
            liveLink: "",
            githubLink: "",
            image: ""
        }
    ],

    // ===================
    // CERTIFICATIONS SECTION
    // ===================
    certifications: [
        {
            name: "NPTEL Online Certification — Programming in Python",
            issuer: "NPTEL",
            date: "Score: 86/100 (Elite + Silver equivalent)",
            description: "12-week course covering Python fundamentals, data structures, functions, modules, file handling, and exception handling.",
            credentialLink: ""
        },
        {
            name: "Internship Completion Certificate — Python Developer Intern",
            issuer: "Quadance Technologies Pvt. Ltd.",
            date: "June 2026",
            description: "Issued by Quadance Technologies Pvt. Ltd., Thiruvananthapuram, on completion of the Python Developer internship.",
            credentialLink: ""
        }
    ],

    // ===================
    // ACHIEVEMENTS SECTION
    // ===================
    achievements: [
        "Completed Google Cloud Study Jams as a dedicated member of Google Developer Groups on Campus (GDGC).",
        "Developed and deployed the MediTrack System — an IoT-based healthcare solution using Flutter and ESP32 hardware for automated medication dispensing, biometric security, real-time heart rate tracking, and fall detection."
    ],

    // ===================
    // EDUCATION SECTION
    // ===================
    education: [
        {
            institution: "St. Thomas College of Engineering & Technology, Chengannur",
            degree: "B.Tech Computer Science & Engineering (KTU)",
            duration: "2023 - 2027",
            location: "Chengannur, Alappuzha, Kerala",
            gpa: "CGPA: 6.81"
        },
        {
            institution: "St. Mary's Residential School, Pathanapuram, Kollam",
            degree: "Higher Secondary School (ISC)",
            duration: "2022 - 2023",
            location: "Pathanapuram, Kollam, Kerala",
            gpa: "76%"
        },
        {
            institution: "St. Mary's Residential School, Pathanapuram, Kollam",
            degree: "Secondary School (ICSE)",
            duration: "2020 - 2021",
            location: "Pathanapuram, Kollam, Kerala",
            gpa: "86.2%"
        }
    ]
};
