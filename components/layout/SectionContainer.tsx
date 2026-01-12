"use client";

import { ReactNode } from "react";
import { spacing } from "@/lib/design-tokens";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "narrow" | "wide";
  spacing?: "default" | "sm" | "lg";
}

/**
 * Consistent section container with proper spacing
 */
export function SectionContainer({ 
  children, 
  className = "",
  variant = "default",
  spacing: spacingVariant = "default"
}: SectionContainerProps) {
  const containerClass = variant === "narrow" 
    ? spacing.containerNarrow 
    : variant === "wide"
    ? spacing.containerWide
    : spacing.container;
    
  const spacingClass = spacingVariant === "sm"
    ? spacing.sectionSm
    : spacingVariant === "lg"
    ? spacing.sectionLg
    : spacing.section;
  
  return (
    <section className={`${spacingClass} ${className}`}>
      <div className={containerClass}>
        {children}
      </div>
    </section>
  );
}
