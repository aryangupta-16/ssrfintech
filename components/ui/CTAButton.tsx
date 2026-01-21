"use client";

import { ReactNode } from "react";
import { ArrowRight, Calendar, Phone, MessageSquare } from "lucide-react";
import { colors } from "@/lib/design-tokens";

interface CTAButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: "arrow" | "calendar" | "phone" | "message";
  className?: string;
}

const iconMap = {
  arrow: ArrowRight,
  calendar: Calendar,
  phone: Phone,
  message: MessageSquare,
};

/**
 * Action-oriented CTA button with professional variants
 */
export function CTAButton({
  variant = "primary",
  size = "md",
  children,
  href,
  onClick,
  icon,
  className = "",
}: CTAButtonProps) {
  const Icon = icon ? iconMap[icon] : null;

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary: "bg-[var(--color-accent)] text-white hover:bg-[var(--link-hover)] shadow-lg",
    secondary: "bg-[var(--color-primary)] text-white hover:bg-[#134E7C] border border-[var(--color-accent)]/30 shadow-md",
    outline: "bg-transparent text-[var(--color-accent)] border-2 border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white",
  };

  const baseClasses = "rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2";
  const hoverClasses = "hover:scale-105 hover:shadow-xl";

  const fullClassName = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${hoverClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={fullClassName}>
        {children}
        {Icon && <Icon className="w-5 h-5" />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={fullClassName}>
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  );
}

/**
 * Pre-configured CTA buttons for common use cases
 */
export const CTAButtons = {
  TalkToExpert: (props: Partial<CTAButtonProps>) => (
    <CTAButton variant="primary" icon="phone" href="/contact" {...props}>
      Talk to a Fintech Expert
    </CTAButton>
  ),
  
  GetAssessment: (props: Partial<CTAButtonProps>) => (
    <CTAButton variant="primary" icon="message" href="/contact" {...props}>
      Get a Free Assessment
    </CTAButton>
  ),
  
  BookStrategyCall: (props: Partial<CTAButtonProps>) => (
    <CTAButton variant="primary" icon="calendar" href="/contact" {...props}>
      Book a Strategy Call
    </CTAButton>
  ),
  
  StartProject: (props: Partial<CTAButtonProps>) => (
    <CTAButton variant="primary" icon="arrow" href="/contact" {...props}>
      Start Your Project
    </CTAButton>
  ),
  
  LearnMore: (props: Partial<CTAButtonProps>) => (
    <CTAButton variant="secondary" icon="arrow" {...props}>
      Learn More
    </CTAButton>
  ),
  
  ViewCaseStudies: (props: Partial<CTAButtonProps>) => (
    <CTAButton variant="secondary" href="/case-studies" {...props}>
      View Case Studies
    </CTAButton>
  ),
};
