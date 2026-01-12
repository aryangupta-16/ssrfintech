"use client";

import { ReactNode } from "react";
import { colors } from "@/lib/design-tokens";

interface GradientWrapperProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "radial";
}

/**
 * Consistent gradient wrapper for all pages
 * Ensures uniform background across the entire website
 */
export function GradientWrapper({ 
  children, 
  className = "",
  variant = "default" 
}: GradientWrapperProps) {
  const gradientClass = variant === "radial" 
    ? colors.bgGradientRadial 
    : colors.bgGradient;
  
  return (
    <div className={`min-h-screen ${gradientClass} ${className}`}>
      {children}
    </div>
  );
}
