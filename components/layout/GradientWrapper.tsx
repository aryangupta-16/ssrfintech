"use client";

import { ReactNode } from "react";
import styles from "./GradientWrapper.module.css";

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
    <div className={`${styles.wrapper} ${className}`}>
      {children}
    </div>
  );
}
