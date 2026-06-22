import { education } from "@/data/portfolio";
import { FadeIn } from "./reveal-text";
import { SectionHeading } from "./section-heading";

export function EducationSection() {
  return (
    <section id="education" className="border-t border-[color:var(--border)]" aria-labelledby="education-heading">
      <div className="page-shell section-pad">
        <SectionHeading
          id="education-heading"
          label="Education"
          lines={["Information Technology,", "Telkom University."]}
        />
        <FadeIn className="rule-bleed grid border-y border-[color:var(--border)] py-10 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <p className="mono text-[0.72rem] uppercase tracking-[0.12em] text-[color:var(--subtle)]">{education.period}</p>
            <h3 className="mt-5 text-3xl font-semibold leading-tight">{education.institution}</h3>
          </div>
          <div className="mt-8 md:col-span-4 md:mt-0">
            <p className="text-xl font-medium">{education.program}</p>
            <p className="mono mt-3 text-[0.76rem] uppercase tracking-[0.12em] text-[color:var(--accent)]">
              GPA {education.gpa}
            </p>
          </div>
          <p className="mt-8 text-sm leading-7 text-[color:var(--muted)] md:col-span-4 md:mt-0">{education.description}</p>
        </FadeIn>
      </div>
    </section>
  );
}
