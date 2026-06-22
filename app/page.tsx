import Script from "next/script";
import { CertificationSection } from "@/components/certification-section";
import { EducationSection } from "@/components/education-section";
import { ExperienceSection } from "@/components/experience-section";
import { FocusSection } from "@/components/focus-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/data/portfolio";
import { projects } from "@/data/projects";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    email: profile.email,
    jobTitle: profile.role,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Malang",
      addressRegion: "East Java",
      addressCountry: "Indonesia",
    },
    url: "https://example.com",
    sameAs: [profile.linkedin],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Telkom University",
    },
  };

  const creativeWorks = projects.map((project) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    dateCreated: project.year,
    creator: {
      "@type": "Person",
      name: profile.name,
    },
    url: project.reportUrl,
    encodingFormat: "application/pdf",
  }));

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="project-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorks) }}
      />
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <FocusSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationSection />
        <EducationSection />
      </main>
      <SiteFooter />
    </>
  );
}
