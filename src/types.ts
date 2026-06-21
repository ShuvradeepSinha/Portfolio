export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  grade?: string;
  description?: string;
  location: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  detailedDescription: string;
  challenges: string;
  solutions: string;
  techStack: string[];
  imageUrl: string;
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  category: string;
  skills: { name: string; level: number }[]; // Level out of 100 for interactive circular or linear bar display
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
}
