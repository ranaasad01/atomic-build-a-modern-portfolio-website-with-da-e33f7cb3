export interface NavLink {
  label: string;
  href: string;
  key: string;
}

export const navLinks: NavLink[] = [
  { label: "About", href: "#about", key: "about" },
  { label: "Skills", href: "#skills", key: "skills" },
  { label: "Experience", href: "#experience", key: "experience" },
  { label: "Projects", href: "#projects", key: "projects" },
  { label: "Education", href: "#education", key: "education" },
  { label: "Certifications", href: "#certifications", key: "certifications" },
  { label: "Awards", href: "#awards", key: "awards" },
  { label: "Contact", href: "#contact", key: "contact" },
];

export const brand = {
  name: "Rao Muhammad Ali",
  title: "SDET",
  tagline: "Automating Quality. Ensuring Excellence. Shipping Confidence.",
  email: "raomuhammadali.sdet@gmail.com",
  phone: "+92 300 0000000",
  linkedin: "https://www.linkedin.com/in/raomuhammadali-sdet",
  location: "Islamabad, Pakistan",
};

export type Experience = {
  role: string;
  company: string;
  date: string;
  description: string;
};

export type Project = {
  title: string;
  tech: string;
  description: string;
  impact: string;
};

export type Skill = {
  name: string;
  description: string;
};

export type EducationItem = {
  institution: string;
  degree: string;
  year: string;
  details: string;
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  description: string;
};

export type Award = {
  title: string;
  organization: string;
  year: string;
  description: string;
};