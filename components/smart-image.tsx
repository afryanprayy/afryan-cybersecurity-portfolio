"use client";

import Image from "next/image";
import { useState } from "react";

export function SmartImage({
  src,
  alt,
  className,
  sizes,
  fill = false,
  width,
  height,
  placeholderLabel = "AFP",
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  placeholderLabel?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`grid h-full min-h-64 place-items-center border border-[color:var(--border)] bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px] text-center ${className ?? ""}`}
        role="img"
        aria-label={`${alt} placeholder`}
      >
        <div>
          <div className="mono text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">Preview pending</div>
          <div className="mt-4 text-5xl font-semibold">{placeholderLabel}</div>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      sizes={sizes}
      fill={fill}
      width={width}
      height={height}
      priority={priority}
      onError={() => setFailed(true)}
    />
  );
}
