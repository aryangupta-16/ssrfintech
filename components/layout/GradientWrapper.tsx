"use client";

import { ReactNode } from "react";

interface GradientWrapperProps {
  children: ReactNode;
  className?: string;
}

/**
 * Consistent wrapper for all pages
 * Uses theme background from CSS variables
 */
export function GradientWrapper({ 
  children, 
  className = "",
}: GradientWrapperProps) {
  return (
    <div className={`min-h-screen bg-[var(--bg-main)] ${className}`}>
      {children}
    </div>
  );
}
