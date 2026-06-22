import { FadeIn, RevealText } from "./reveal-text";

export function SectionHeading({
  label,
  lines = [],
  intro,
  id,
  compact = false,
}: {
  label: string;
  lines?: string[];
  intro?: string;
  id?: string;
  compact?: boolean;
}) {
  const hasLines = lines.length > 0;
  const headingClass = compact
    ? "max-w-[820px] text-[clamp(2rem,4vw,3.1rem)] font-bold leading-[1.04] tracking-normal"
    : "section-title";

  return (
    <div className={`grid gap-6 md:grid-cols-12 ${compact ? "mb-10 md:mb-12" : "mb-12 md:mb-16"}`}>
      <FadeIn className="label mono md:col-span-3">{label}</FadeIn>
      <div className="md:col-span-9">
        {hasLines ? (
          <h2 className={headingClass} id={id}>
            {compact ? (
              lines.map((line) => (
                <span className="block" key={line}>
                  {line}
                </span>
              ))
            ) : (
              <RevealText lines={lines} />
            )}
          </h2>
        ) : id ? (
          <h2 className="sr-only" id={id}>
            {label}
          </h2>
        ) : null}
        {intro ? (
          <FadeIn className={`section-intro ${hasLines ? "mt-6" : ""}`} delay={0.12}>
            {intro}
          </FadeIn>
        ) : null}
      </div>
    </div>
  );
}
