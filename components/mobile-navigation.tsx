"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import type { NavigationItem } from "@/data/portfolio";

export function MobileNavigation({
  items,
  open,
  onOpenChange,
}: {
  items: NavigationItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => panelRef.current?.querySelector<HTMLElement>("a,button")?.focus(), 40);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }

      if (event.key === "Tab") {
        const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
          'a,button,[tabindex]:not([tabindex="-1"])',
        );
        if (!focusable?.length) {
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onOpenChange, open]);

  return (
    <>
      <button
        className="grid min-h-11 min-w-11 place-items-center border border-[color:var(--border)] md:hidden"
        type="button"
        onClick={() => onOpenChange(true)}
        aria-label="Open navigation"
        aria-expanded={open}
      >
        <Menu size={18} aria-hidden="true" />
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 bg-[color:var(--background)] px-5 py-5 md:hidden"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div ref={panelRef} className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-[color:var(--border)] pb-4">
                <span className="text-lg font-semibold">Afryan Portfolio</span>
                <button
                  className="grid min-h-11 min-w-11 place-items-center border border-[color:var(--border)]"
                  type="button"
                  onClick={() => onOpenChange(false)}
                  aria-label="Close navigation"
                >
                  <X size={18} aria-hidden="true" />
                </button>
              </div>
              <nav className="mt-12 flex flex-col" aria-label="Mobile navigation">
                {items.map((item, index) => (
                  <motion.a
                    href={item.href}
                    key={item.label}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group flex min-h-16 items-center justify-between border-b border-[color:var(--border)] text-3xl font-semibold"
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.055, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => onOpenChange(false)}
                  >
                    <span>{item.label}</span>
                    {item.external ? (
                      <ArrowUpRight
                        size={22}
                        className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                        aria-hidden="true"
                      />
                    ) : null}
                  </motion.a>
                ))}
              </nav>
              <p className="mono mt-auto max-w-xs text-xs uppercase tracking-[0.14em] text-[color:var(--muted)]">
                Open to cybersecurity, SOC, security engineering, and IT security opportunities.
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
