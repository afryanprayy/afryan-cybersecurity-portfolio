import { skillGroups } from "@/data/portfolio";
import { FadeIn } from "./reveal-text";
import { SectionHeading } from "./section-heading";

export function SkillsSection() {
  return (
    <section className="border-t border-[color:var(--border)]" aria-labelledby="skills-heading">
      <div className="page-shell section-pad">
        <SectionHeading
          id="skills-heading"
          label="Capabilities"
          lines={["Tools and knowledge", "I continue to develop."]}
        />
        <div className="grid border-t border-l border-[color:var(--border)] md:grid-cols-4">
          {skillGroups.map((group, index) => (
            <FadeIn
              key={group.title}
              delay={index * 0.055}
              className="border-r border-b border-[color:var(--border)] p-6"
            >
              <h3 className="text-xl font-semibold leading-tight">{group.title}</h3>
              <ul className="mt-8 space-y-3">
                {group.skills.map((skill) => (
                  <li className="flex items-center gap-3 text-sm text-[color:var(--muted)]" key={skill}>
                    <span className="h-px w-4 bg-[color:var(--border-strong)]" aria-hidden="true" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
