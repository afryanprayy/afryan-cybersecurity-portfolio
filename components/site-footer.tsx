import { ArrowUp, Mail } from "lucide-react";
import { socialLinks } from "@/data/portfolio";

function FooterIcon({ icon }: { icon: "linkedin" | "email" | "instagram" | "tryhackme" }) {
  if (icon === "linkedin") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
        <path d="M6.94 8.98H3.73V20h3.21V8.98ZM5.33 4a1.86 1.86 0 1 0 0 3.72A1.86 1.86 0 0 0 5.33 4Zm14.94 9.68c0-2.96-1.58-4.34-3.68-4.34-1.7 0-2.46.94-2.88 1.6V8.98h-3.08V20h3.21v-5.45c0-1.44.27-2.83 2.05-2.83 1.76 0 1.78 1.64 1.78 2.92V20h3.21v-6.32h-.61Z" />
      </svg>
    );
  }

  if (icon === "email") {
    return <Mail size={18} aria-hidden="true" />;
  }

  if (icon === "instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.4" />
        <path d="M17.5 6.8h.01" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="h-[18px] w-[18px] bg-current [mask:url('/images/tryhackme-logo.svg')_center/contain_no-repeat] [-webkit-mask:url('/images/tryhackme-logo.svg')_center/contain_no-repeat]"
    />
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--border)]">
      <div className="page-shell flex flex-col gap-8 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm font-medium">Afryan Fanindya Prayogi</p>
        <p className="mono text-[0.72rem] uppercase tracking-[0.12em] text-[color:var(--subtle)]">
          (c) {year}. All rights reserved.
        </p>
        <nav className="flex flex-wrap items-center gap-3" aria-label="Footer navigation">
          {socialLinks
            .filter((link) => link.visible)
            .map((link) => (
              <a
                className="group grid min-h-11 min-w-11 place-items-center border border-[color:var(--border)] text-[color:var(--muted)] transition hover:border-[color:var(--border-strong)] hover:text-[color:var(--foreground)]"
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                key={link.label}
                aria-label={link.label}
                title={link.label}
              >
                <FooterIcon icon={link.icon} />
              </a>
            ))}
          <a
            className="grid min-h-11 min-w-11 place-items-center border border-[color:var(--border)] text-[color:var(--muted)] transition hover:border-[color:var(--border-strong)] hover:text-[color:var(--foreground)]"
            href="#home"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp size={18} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
