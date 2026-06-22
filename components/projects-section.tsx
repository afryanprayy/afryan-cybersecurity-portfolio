import { projects } from "@/data/projects";
import { ProjectRow } from "./project-row";
import { SectionHeading } from "./section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-[color:var(--border)]" aria-labelledby="projects-heading">
      <div className="page-shell py-16 md:py-20 lg:py-24">
        <SectionHeading
          id="projects-heading"
          label="Selected projects"
          intro="Controlled laboratories and assessments focused on investigation, evidence, and practical security improvement."
          compact
        />
        <div className="line-list border-b border-[color:var(--border)]">
          {projects.map((project) => (
            <ProjectRow project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
