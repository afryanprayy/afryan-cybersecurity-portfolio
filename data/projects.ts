export interface Project {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  category: string;
  year: string;
  tags: string[];
  coverImage: string;
  coverWidth: number;
  coverHeight: number;
  reportUrl: string;
}

export const projects: Project[] = [
  {
    id: "ptes-security-assessment",
    number: "01",
    title: "Security Weakness Analysis of the XYZ Municipal Government Website Using PTES Method",
    shortTitle: "Paper - PTES Website Security Assessment",
    description:
      "A controlled external black-box security assessment conducted with permission using the PTES methodology. The project covered reconnaissance, vulnerability analysis, controlled validation, risk interpretation, and remediation recommendations.",
    category: "Vulnerability Assessment",
    year: "2026",
    tags: ["PTES", "Government", "Black-box", "Vulnerability"],
    coverImage: "/images/project-ptes-cover.jpg",
    coverWidth: 589,
    coverHeight: 796,
    reportUrl: "/documents/ptes-security-assessment-project.pdf",
  },
  {
    id: "ssh-account-compromise",
    number: "02",
    title:
      "Investigation of SSH Account Compromise and Post-Compromise File Manipulation Using Wazuh SIEM",
    shortTitle: "Incident Report - Wazuh SIEM",
    description:
      "A controlled incident response laboratory using an Ubuntu virtual machine as the target. Wazuh SIEM was used to investigate suspicious SSH authentication activity, identify the affected account, correlate endpoint events, and examine post-compromise creation of a hacked.txt file.",
    category: "Incident Response",
    year: "2026",
    tags: ["Wazuh", "Ubuntu", "SSH", "Linux", "SIEM", "Incident Investigation"],
    coverImage: "/images/project-wazuh-cover.jpg",
    coverWidth: 565,
    coverHeight: 735,
    reportUrl: "/documents/wazuh-incident-response-project.pdf",
  },
];
