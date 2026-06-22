"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

export function MagneticLink({
  children,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
}) {
  return (
    <a className={className} {...props}>
      {children}
    </a>
  );
}
