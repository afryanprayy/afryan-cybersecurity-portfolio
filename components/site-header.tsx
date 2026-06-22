"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { navigation } from "@/data/portfolio";
import { MobileNavigation } from "./mobile-navigation";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", "projects", "experience", "certifications"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-30 h-14 transition ${
        scrolled ? "border-b border-[color:var(--border)] bg-[rgba(7,7,6,0.84)] backdrop-blur-md" : "bg-transparent"
      }`}
      initial={prefersReducedMotion ? false : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="page-shell flex h-full items-center justify-between gap-5">
        <a href="#home" className="text-base font-semibold tracking-normal" aria-label="Back to home">
          Afryan Portfolio
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navigation.map((item) => {
            const key = item.href.replace("#", "");
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`group mono flex min-h-11 items-center gap-1 text-[0.72rem] uppercase tracking-[0.12em] transition ${
                  active === key ? "text-[color:var(--accent)]" : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
                }`}
              >
                <span>{item.label}</span>
                {item.external ? (
                  <ArrowUpRight
                    size={13}
                    className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                ) : null}
              </a>
            );
          })}
        </nav>

        <MobileNavigation items={navigation} open={mobileOpen} onOpenChange={setMobileOpen} />
      </div>
    </motion.header>
  );
}
