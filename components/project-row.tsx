"use client";

import { ArrowUpRight, FileText } from "lucide-react";
import type { Project } from "@/data/projects";
import { SmartImage } from "./smart-image";

export function ProjectRow({ project }: { project: Project }) {
  return (
    <a
      href={project.reportUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open the full PDF report for ${project.shortTitle}`}
      className="group block border-t border-[color:var(--border)] py-6 outline-none transition duration-300 hover:bg-white/[0.025] focus-visible:bg-white/[0.04] md:py-8"
    >
      <div className="grid gap-6 transition duration-300 ease-[var(--ease)] group-hover:translate-x-1 md:grid-cols-12 md:items-start md:gap-7">
        <span className="mono text-sm text-[color:var(--subtle)] transition group-hover:text-[color:var(--accent)] md:col-span-1 md:pt-2">
          {project.number}
        </span>
        <div className="border border-[color:var(--border)] bg-[color:var(--surface)] p-2 md:col-span-3">
          <SmartImage
            src={project.coverImage}
            alt={`Cover preview for ${project.shortTitle}`}
            width={project.coverWidth}
            height={project.coverHeight}
            sizes="(min-width: 768px) 300px, 100vw"
            placeholderLabel={project.number}
            className="h-auto w-full bg-white object-contain"
          />
        </div>
        <div className="md:col-span-3">
          <h3 className="text-2xl font-semibold leading-tight md:text-3xl">{project.shortTitle}</h3>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{project.description}</p>
        </div>
        <div className="md:col-span-3 md:pt-1">
          <p className="mono text-[0.7rem] uppercase tracking-[0.13em] text-[color:var(--subtle)]">{project.category}</p>
          <p className="mono mt-2 text-[0.7rem] uppercase tracking-[0.13em] text-[color:var(--muted)]">{project.year}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 md:col-span-2 md:flex-col md:items-end md:pt-1">
          <span className="mono inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.12em] text-[color:var(--muted)] md:text-right">
            <FileText size={14} aria-hidden="true" />
            Open full report - PDF
          </span>
          <ArrowUpRight
            className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[color:var(--accent)]"
            aria-hidden="true"
          />
        </div>
      </div>
    </a>
  );
}
