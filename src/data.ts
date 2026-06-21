import { EducationItem, ExperienceItem, ProjectItem, SkillCategory, ContactInfo } from "./types";

export const BIO = {
  name: "Shuvradeep Sinha",
  title: "Computer Science Engineer & Frontend Developer",
  shortAbout: "A computer science student and frontend developer bridging low-end technical foundations in AI/ML and Cybersecurity with clean, high-performance web development. I focus on creating visually striking, intuitive user interfaces paired with robust, logical engineering.",
  fullAbout: "I am Shuvradeep Sinha, a Computer Science and Engineering student with a deep passion for modern frontend artistry and rigorous technical disciplines. Recently, I served as a Frontend Developer Intern at XOPUN Tech, where I specialized in building complex responsive interfaces and financial trading UI experiences. \n\nMy profile is a unique intersection: I love the aesthetic precision of modern CSS and interactive UI animations, but I am equally at home writing C++, modeling machine learning algorithms, solving advanced calculus problems, and exploring cybersecurity sandboxes. I believe web interfaces are the canvases where complex back-end operations and data are humanized. I aim to create highly performant, visually refined web experiences that respect user attention and leave a lasting cinematic impression.",
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu-1",
    institution: "University of Science & Technology Meghalaya (USTM)",
    degree: "B.Tech in Computer Science and Engineering",
    duration: "2022 - Present",
    location: "Meghalaya, India",
    description: "Specializing in software engineering paradigms, artificial intelligence, and database design. Actively involved in campus technical hackathons and research presentations.",
  },
  {
    id: "edu-2",
    institution: "Kendriya Vidyalaya NIT Silchar",
    degree: "Senior Secondary Education (Class XII)",
    duration: "2020 - 2022",
    location: "Silchar, Assam, India",
    description: "Focus on Physics, Chemistry, Mathematics, and Computer Science.",
  },
  {
    id: "edu-3",
    institution: "Kendriya Vidyalaya Kumbhirgram",
    degree: "Secondary Education (Class X)",
    duration: "2018 - 2020",
    location: "Cachar, Assam, India",
    description: "Core curriculum focusing on science, mathematics, and introductory languages.",
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Frontend Developer Intern",
    company: "XOPUN Tech",
    duration: "Jan 2026 - Apr 2026",
    location: "Remote",
    description: [
      "Developed a fully responsive and highly interactive financial desktop/mobile frontend for a trading platform utilizing HTML, CSS, and JavaScript.",
      "Crafted performance-optimized charting interfaces, asset tickers, and transaction logs, reducing UI rendering lag by 25%.",
      "Collaborated with production designers to translate complex wireframes into polished, micro-interaction-rich styled user journeys."
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX Optimization", "Financial Charting"]
  },
  {
    id: "exp-2",
    role: "Academic Researcher & Presenter",
    company: "USTM Dept. of Computer Science",
    duration: "2023 - Present",
    location: "Meghalaya, India",
    description: [
      "Spearheaded collaborative academic group research on algorithm performance modeling and advanced mathematical principles.",
      "Developed and delivered comprehensive curriculum presentations on topics including Machine Learning models and network security safeguards.",
      "Facilitated peer-led study cohorts on advanced C++ paradigms and relational SQL database normalization."
    ],
    skills: ["C++", "Python", "Cybersecurity", "Research & Analysis", "Public Speaking"]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Frontend Trading Website",
    category: "Web Engineering / Fintech UI",
    description: "A luxury fintech dashboard developed during the XOPUN Tech Internship, featuring active market tracking, candlestick mock assets, and trade ledger screens.",
    detailedDescription: "This project serves as a showcase of premium user interfaces for high-frequency financial platforms. Created during my internship at XOPUN Tech, it mimics real-time trading engines with clean chart modules, asset trackers, and history ledgers. Built with absolute modern standards to support massive viewport scalability.",
    challenges: "Handling real-time visual feel without standard React overhead while keeping render loops lightweight, fluid layout scaling across standard mobile devices and ultrawide desktop screens.",
    solutions: "Leveraged highly modularized layout hierarchies, custom CSS variable transitions, and optimized linear SVG charting components to enable low-overhead, silky-smooth visual performance.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    featured: true
  },
  {
    id: "proj-3",
    title: "Autonomous Plant Care Robot",
    category: "IoT Automation & Robotics",
    description: "A collaborative smart agriculture project combining remote sensor arrays and mechanical actuators to automate crop and soil nourishment.",
    detailedDescription: "Developed alongside a team of talented engineers, this project integrates soil health diagnostics (moisture, pH) with smart actuators. The web dashboard provides beautiful telemetry monitoring, real-time trigger overrides, and automated irrigation control logs.",
    challenges: "Consolidating highly fragmented sensor data packets into a cohesive, user-friendly live telemetry dashboard designed for non-technical farmers.",
    solutions: "Built a sleek, high-contrast dashboard with bold data cards, responsive gauge bars, and a clean alert feed styled for premium solar glare visibility.",
    techStack: ["IoT Integration", "Python Core", "Microcontroller APIs", "Tailwind CSS", "Data Visualizer"],
    imageUrl: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=800&auto=format&fit=crop",
    featured: true
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: "skills-lang",
    category: "Languages & Tools",
    skills: [
      { name: "C++", level: 90 },
      { name: "Python", level: 30 },
      { name: "SQL", level: 22 },
      { name: "JavaScript (ES6+)", level: 25 }
    ]
  },
  {
    id: "skills-web",
    category: "Web Frontend Architecture",
    skills: [
      { name: "HTML5", level: 80 },
      { name: "CSS3 & Tailwind CSS", level: 50 },
      { name: "Vite & React Development", level: 0 },
      { name: "Responsive UI/UX Eng", level: 50 }
    ]
  },
  {
    id: "skills-domains",
    category: "Advanced Technical Domains",
    skills: [
      { name: "Artificial Intelligence & ML", level: 10 },
      { name: "Cybersecurity Principles", level: 90 },
      { name: "Scientific Research", level: 0 }
    ]
  },
  {
    id: "skills-soft",
    category: "Professional Strengths",
    skills: [
      { name: "Technical Presentation", level: 95 },
      { name: "Collaborative Teamwork", level: 90 },
      { name: "Analytical Problem Solving", level: 92 },
      { name: "Written & Oral Communication", level: 88 }
    ]
  }
];

export const CONTACT_DATA: ContactInfo = {
  address: "Kanwachal Road, Silpukhuri, Guwahati, Assam, India - 781003",
  phone: "+91 8638644814",
  email: "shuvradeepsinha@gmail.com",
  github: "https://github.com/ShuvradeepSinha",
  linkedin: "https://www.linkedin.com/in/shuvradeep-sinha-265466399?utm_source=share_via&utm_content=profile&utm_medium=member_android"
};
