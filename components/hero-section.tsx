"use client";

import { ArrowDownRight, Download } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/data/portfolio";
import { SmartImage } from "./smart-image";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const easing = [0.22, 1, 0.36, 1] as const;

  return (
    <section id="home" className="page-shell flex min-h-screen flex-col justify-between pb-12 pt-24 md:pb-16 md:pt-24">
      <div className="grid flex-1 items-center gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <motion.p
            className="label mono"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: easing }}
          >
            Hello, I am
          </motion.p>
          <motion.h1
            className="mt-6 text-[clamp(2.75rem,5.85vw,5.55rem)] font-bold leading-[1.03] tracking-[0.01em] text-[color:var(--foreground)]"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.76, delay: 0.18, ease: easing }}
          >
            Afryan Fanindya
            <br />
            Prayogi
          </motion.h1>
          <motion.p
            className="mt-8 max-w-2xl text-base leading-8 text-[color:var(--foreground)] md:text-lg"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.42, ease: easing }}
          >
            Information Technology graduate from Telkom University with a strong interest in cybersecurity, security
            monitoring, incident response, network security, and vulnerability assessment. I work with tools such as Wazuh
            SIEM and Kali Linux and enjoy turning technical evidence into clear security findings.
          </motion.p>
        </div>

        <motion.div
          className="md:col-span-5 md:col-start-9"
          initial={prefersReducedMotion ? false : { opacity: 0, clipPath: "inset(100% 0 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 0.86, delay: 0.42, ease: easing }}
        >
          <figure className="group relative ml-auto max-w-[420px] border border-[color:var(--border)] bg-[color:var(--surface)]">
            <div className="relative aspect-[4/5] overflow-hidden">
              <SmartImage
                src={profile.photo}
                alt="Professional portrait of Afryan Fanindya Prayogi"
                fill
                sizes="(min-width: 1024px) 360px, (min-width: 768px) 42vw, 100vw"
                priority
                placeholderLabel="AFP"
                className="object-cover object-[50%_58%]"
              />
            </div>
            <figcaption className="mono flex items-center justify-between border-t border-[color:var(--border)] px-3 py-3 text-[0.68rem] uppercase tracking-[0.14em] text-[color:var(--muted)]">
              <span>AFP / 2026</span>
              <span>Telkom University, ID</span>
            </figcaption>
          </figure>
        </motion.div>
      </div>

      <motion.div
        className="mt-10 grid gap-8 border-t border-[color:var(--border)] pt-8 md:grid-cols-12"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.9, ease: easing }}
      >
        {[
          ["Role", profile.role],
          ["Based", profile.location],
          ["Availability", profile.availability],
        ].map(([label, value]) => (
          <div key={label} className="md:col-span-3">
            <p className="mono text-[0.68rem] uppercase tracking-[0.14em] text-[color:var(--subtle)]">{label}</p>
            <p className="mt-2 text-sm text-[color:var(--foreground)]">{value}</p>
          </div>
        ))}
        <div className="flex flex-wrap items-center gap-5 md:col-span-3 md:justify-end">
          <a className="icon-link" href="#projects">
            See my work <ArrowDownRight size={17} aria-hidden="true" />
          </a>
          <a className="icon-link" href={profile.cvUrl} download>
            Download CV <Download size={17} aria-hidden="true" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
