export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface FocusArea {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Experience {
  number: string;
  organization: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
}

export interface Certification {
  number: string;
  title: string;
  issuer: string;
  year?: string;
  abbreviation?: string;
  status?: string;
  url?: string;
}

export interface Education {
  institution: string;
  program: string;
  period: string;
  gpa: string;
  description: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "linkedin" | "email" | "instagram" | "tryhackme";
  external?: boolean;
  visible: boolean;
}

export const profile = {
  name: "Afryan Fanindya Prayogi",
  shortName: "Afryan",
  email: "afryanwork@gmail.com",
  location: "Malang, East Java, Indonesia",
  role: "Cybersecurity-Focused IT Graduate",
  availability: "Open to Cybersecurity Opportunities",
  linkedin: "https://www.linkedin.com/in/afryanprayy",
  instagram: "https://www.instagram.com/afryanprayy/",
  tryHackMe: "https://tryhackme.com/p/afryanprayy",
  github: "TODO_ADD_GITHUB_URL",
  cvUrl: "/documents/afryan-fanindya-prayogi-cv.pdf",
  photo: "/images/afryan-graduation-hero-close.jpeg",
};

export const navigation: NavigationItem[] = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "LinkedIn", href: profile.linkedin, external: true },
];

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin", external: true, visible: true },
  { label: "Email", href: `mailto:${profile.email}`, icon: "email", visible: true },
  { label: "Instagram", href: profile.instagram, icon: "instagram", external: true, visible: true },
  { label: "TryHackMe", href: profile.tryHackMe, icon: "tryhackme", external: true, visible: true },
];

export const focusAreas: FocusArea[] = [
  {
    number: "01",
    title: "Security Monitoring",
    description:
      "Monitoring and interpreting security events through SIEM platforms, with a focus on Wazuh alerts, authentication activity, endpoint visibility, and clear incident documentation.",
    tags: ["Wazuh", "SIEM", "Log Analysis", "Alert Triage"],
  },
  {
    number: "02",
    title: "Incident Response",
    description:
      "Investigating suspicious activity by correlating evidence, reconstructing event timelines, identifying affected accounts or systems, and documenting practical containment steps.",
    tags: ["Investigation", "Timeline Analysis", "Linux", "Documentation"],
  },
  {
    number: "03",
    title: "Vulnerability Assessment",
    description:
      "Assessing publicly exposed systems using a controlled methodology, validating findings, separating confirmed vulnerabilities from false positives, and producing prioritized recommendations.",
    tags: ["PTES", "OWASP ZAP", "Nmap", "Nikto", "SQLMap"],
  },
  {
    number: "04",
    title: "Network Security",
    description:
      "Applying networking fundamentals to security analysis, including service discovery, traffic understanding, access control concepts, and secure infrastructure design.",
    tags: ["MTCNA", "TCP/IP", "Network Analysis", "Linux"],
  },
  {
    number: "05",
    title: "IoT and Embedded Systems",
    description:
      "Building practical knowledge of ESP32, Arduino, sensors, MQTT, and connected device communication through laboratory learning and teaching activities.",
    tags: ["ESP32", "Arduino", "MQTT", "Sensors"],
  },
];

export const experiences: Experience[] = [
  {
    number: "01",
    organization: "Telkom Indonesia, Wholesale Service Division",
    role: "Data Management Intern",
    period: "June 2025 to August 2025",
    description:
      "Learned and explored data management practices within Telkom's Wholesale Service division. Worked with ETL concepts and Pentaho Data Integration to transform raw data into structured datasets while studying data flow, storage, and transformation for data-driven decision making.",
    tags: ["Pentaho Data Integration", "ETL", "Data Flow", "Data Management"],
  },
  {
    number: "02",
    organization: "Hardware and Embedded System Laboratory",
    role: "Head of Curriculum",
    period: "May 2025 to April 2026",
    description:
      "Designed and updated study group curricula and learning modules. Regularly reviewed learning materials to improve their relevance, clarity, and effectiveness.",
    tags: ["Curriculum Design", "Technical Documentation", "Leadership"],
  },
  {
    number: "03",
    organization: "Hardware and Embedded System Laboratory",
    role: "Head of IoT Division",
    period: "June 2024 to May 2025",
    description:
      "Organized learning activities, taught IoT concepts, and developed technical learning materials. Guided members in using ESP32, integrating sensors, and implementing MQTT communication.",
    tags: ["IoT", "ESP32", "MQTT", "Teaching"],
  },
  {
    number: "04",
    organization: "Hardware and Embedded System Laboratory",
    role: "Study Group Member",
    period: "November 2023 to June 2024",
    description:
      "Explored embedded systems and IoT through Arduino, ESP32, sensors, hardware integration, and connected-device communication.",
    tags: ["Arduino", "Embedded Systems", "Sensors"],
  },
  {
    number: "05",
    organization: "GDGoC Telkom University Bandung",
    role: "Machine Learning Division Member",
    period: "January 2025 to May 2025",
    description:
      "Explored data preprocessing, model development, deployment concepts, and collaborative AI-driven projects with other division members.",
    tags: ["Machine Learning", "Data Preprocessing", "Collaboration"],
  },
];

export const certifications: Certification[] = [
  {
    number: "01",
    title: "CompTIA Security+ Training Completion",
    issuer: "ID-Networkers",
    year: "2026",
    status: "Training completed, official CompTIA certification exam not yet taken",
    url: "https://drive.google.com/file/d/1220FYQgZawWiCEree6U2K1ALncFumlFI/view?usp=sharing",
  },
  {
    number: "02",
    title: "MikroTik Certified Network Associate",
    issuer: "MikroTik",
    abbreviation: "MTCNA",
    url: "https://mikrotik.com/training/certificates/c360986c4406dc3b44fe",
  },
  {
    number: "03",
    title: "Cybersecurity, L1 SOC Analyst",
    issuer: "Jadi Hacker",
    url: "https://drive.google.com/file/d/1MbEJE8REBPMd7V23WyW7DMMiqLzyzrBK/view",
  },
  {
    number: "04",
    title: "Internet of Things, Mastered",
    issuer: "SanberCode",
    url: "https://drive.google.com/file/d/1Fi0u0k1IPpJKorefUFefBDwhDPOO_KYk/view",
  },
  {
    number: "05",
    title: "Foundations of Cybersecurity",
    issuer: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/certificate/VRSQA7SE6K9J",
  },
  {
    number: "06",
    title: "Mastering Smart Contract",
    issuer: "Indonesia On-Chain",
    url: "https://drive.google.com/file/d/1P4vsdHlDhMJAwI_mFtHmkfTVKOo-5KEc/view",
  },
];

export const education: Education = {
  institution: "Telkom University",
  program: "Bachelor of Information Technology",
  period: "September 2022 to April 2026",
  gpa: "3.75 / 4.00",
  description:
    "Developed a strong interest in cybersecurity, particularly vulnerability assessment, security monitoring, penetration testing, networking, and secure digital systems. Also participated actively in the Hardware and Embedded System Laboratory and GDGoC Telkom University.",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Security Operations",
    skills: ["Wazuh SIEM", "Security Monitoring", "Log Analysis", "Alert Triage", "Incident Documentation"],
  },
  {
    title: "Security Assessment",
    skills: [
      "Vulnerability Assessment",
      "Penetration Testing Fundamentals",
      "Nmap",
      "OWASP ZAP",
      "Nikto",
      "SQLMap",
      "Kali Linux",
    ],
  },
  {
    title: "Infrastructure",
    skills: ["Network Fundamentals", "Linux", "MikroTik", "TCP/IP", "Virtualization", "SSH"],
  },
  {
    title: "Additional Technical Skills",
    skills: ["IoT", "ESP32", "Arduino", "MQTT", "Pentaho Data Integration", "Python", "Golang", "C++", "HTML"],
  },
];
