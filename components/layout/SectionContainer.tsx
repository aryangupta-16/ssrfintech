"use client";

import { ReactNode } from "react";
import styles from "./SectionContainer.module.css";

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
    ? styles.containerNarrow 
    : variant === "wide"
    ? styles.containerWide
    : styles.container;
    
  const spacingClass = spacingVariant === "sm"
    ? styles.sectionSm
    : spacingVariant === "lg"
    ? styles.sectionLg
    : styles.section;
  
  return (
    <section className={`${spacingClass} ${className}`}>
      <div className={containerClass}>
        {children}
      </div>
    </section>
  );
}
