import { experiences } from "@/data/portfolio";
import { FadeIn } from "./reveal-text";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  const hardwareOrganization = "Hardware and Embedded System Laboratory";
  const hardwareRoles = experiences
    .filter((item) => item.organization === hardwareOrganization)
    .map((item) => item.role);

  return (
    <section id="experience" className="border-t border-[color:var(--border)]" aria-labelledby="experience-heading">
      <div className="page-shell py-16 md:py-20 lg:py-24">
        <SectionHeading
          id="experience-heading"
          label="Experience"
          compact
        />
        <div>
          <div className="line-list border-b border-[color:var(--border)]">
            {experiences.map((item, index) => (
              <ExperienceItem
                item={item}
                index={index}
                key={`${item.organization}-${item.role}`}
                hardwareIndex={hardwareRoles.indexOf(item.role)}
                hardwareTotal={hardwareRoles.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  item,
  index,
  hardwareIndex,
  hardwareTotal,
}: {
  item: (typeof experiences)[number];
  index: number;
  hardwareIndex: number;
  hardwareTotal: number;
}) {
  const isHardware = hardwareIndex >= 0;
  const isFirstHardware = hardwareIndex === 0;
  const isLastHardware = hardwareIndex === hardwareTotal - 1;
  const startsGroup = !isHardware || isFirstHardware;

  return (
    <FadeIn
      delay={index * 0.05}
      className={`group grid gap-6 py-6 transition hover:bg-white/[0.025] md:grid-cols-12 md:gap-8 ${
        startsGroup ? "border-t border-[color:var(--border)]" : ""
      }`}
    >
      <div className={`relative md:col-span-3 ${isHardware ? "md:pl-8" : ""}`}>
        {isHardware ? (
          <span aria-hidden="true" className="absolute left-0 top-0 hidden h-full w-4 md:block">
            <span
              className={`absolute left-2 w-px -translate-x-1/2 bg-[color:var(--accent)] ${
                isFirstHardware ? "top-1/2 -bottom-6" : isLastHardware ? "-top-10 bottom-1/2" : "-top-6 -bottom-6"
              }`}
            />
            <span className="absolute left-2 top-1/2 z-10 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color:var(--accent)] bg-[color:var(--background)]" />
          </span>
        ) : null}
        <span className="mono text-xs text-[color:var(--subtle)]">{item.number}</span>
        <p className="mono mt-5 max-w-48 text-[0.7rem] uppercase leading-5 tracking-[0.12em] text-[color:var(--muted)]">
          {item.period}
        </p>
      </div>
      <div className="md:col-span-4">
        <h3 className="text-2xl font-semibold leading-tight">{item.role}</h3>
        <p className="mt-2 text-sm text-[color:var(--muted)]">{item.organization}</p>
      </div>
      <div className="md:col-span-5">
        <p className="text-sm leading-7 text-[color:var(--muted)]">{item.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
