import { focusAreas } from "@/data/portfolio";
import { FadeIn } from "./reveal-text";
import { SectionHeading } from "./section-heading";

export function FocusSection() {
  return (
    <section className="border-t border-[color:var(--border)]" aria-labelledby="focus-heading">
      <div className="page-shell py-16 md:py-20 lg:py-24">
        <SectionHeading
          id="focus-heading"
          label="What I work with"
          intro="My work connects security operations, offensive testing, networking, and connected systems."
          compact
        />
        <div className="grid border-t border-l border-[color:var(--border)] md:grid-cols-6">
          {focusAreas.map((area, index) => (
            <FadeIn
              key={area.number}
              delay={index * 0.055}
              className={`group min-h-[220px] border-r border-b border-[color:var(--border)] p-5 transition duration-300 hover:border-[color:var(--border-strong)] hover:bg-white/[0.025] md:p-6 ${
                index < 3 ? "md:col-span-2" : "md:col-span-3"
              }`}
            >
              <p className="mono text-xs text-[color:var(--subtle)] transition group-hover:translate-x-1 group-hover:text-[color:var(--accent)]">
                {area.number}
              </p>
              <h3 className="mt-8 text-2xl font-semibold leading-tight transition duration-300 group-hover:translate-x-1 md:text-3xl">
                {area.title}
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[color:var(--muted)]">{area.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
