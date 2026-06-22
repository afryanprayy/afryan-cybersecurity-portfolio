import { ArrowUpRight } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { FadeIn } from "./reveal-text";
import { SectionHeading } from "./section-heading";

export function CertificationSection() {
  return (
    <section id="certifications" className="border-t border-[color:var(--border)]" aria-labelledby="certifications-heading">
      <div className="page-shell py-16 md:py-20 lg:py-24">
        <SectionHeading
          id="certifications-heading"
          label="Certifications and training"
          compact
        />
        <div className="line-list border-b border-[color:var(--border)]">
          {certifications.map((cert, index) => (
            <FadeIn
              key={cert.title}
              delay={index * 0.04}
              className="group grid gap-5 border-t border-[color:var(--border)] py-6 transition hover:bg-white/[0.025] md:grid-cols-12 md:items-center"
            >
              <span className="mono text-xs text-[color:var(--subtle)] md:col-span-1">{cert.number}</span>
              <div className="md:col-span-6">
                <h3 className="text-xl font-semibold leading-tight">{cert.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{cert.issuer}</p>
              </div>
              <div className="flex justify-start md:col-span-5 md:justify-end">
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Show credential for ${cert.title}`}
                    className="inline-flex min-h-11 items-center gap-2 border border-[color:var(--border-strong)] px-4 text-sm font-semibold text-[color:var(--foreground)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                  >
                    Show Credential
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
