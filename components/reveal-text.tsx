"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const easing = [0.22, 1, 0.36, 1] as const;

export function FadeIn({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "p" | "span" | "li";
}) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: easing, delay }}
    >
      {children}
    </Component>
  );
}

export function RevealText({
  lines,
  className,
  delay = 0,
}: {
  lines: string[];
  className?: string;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <span className={className}>
      {lines.map((line, index) => (
        <span className="block overflow-hidden" key={line}>
          <motion.span
            className="block"
            initial={prefersReducedMotion ? false : { y: "110%" }}
            whileInView={prefersReducedMotion ? undefined : { y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.82,
              delay: delay + index * 0.08,
              ease: easing,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
