"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { colors, typography, spacing } from "@/lib/design-tokens";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  icon?: ReactNode;
  gradient?: "indigo" | "purple" | "pink" | "multi";
}

const gradientMap = {
  indigo: "from-indigo-600/20 via-purple-600/20 to-pink-600/20",
  purple: "from-purple-600/20 via-pink-600/20 to-red-600/20",
  pink: "from-pink-600/20 via-red-600/20 to-orange-600/20",
  multi: "from-indigo-600/20 via-purple-600/20 to-pink-600/20",
};

/**
 * Reusable page hero component with consistent styling
 */
export function PageHero({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  icon,
  gradient = "multi",
}: PageHeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/80 to-slate-900/90" />
        </div>
      )}

      {/* Gradient Overlay - Only show if no background image */}
      {!backgroundImage && (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientMap[gradient]}`} />
      )}

      {/* Content */}
      <div className={spacing.container}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          {/* Icon */}
          {icon && (
            <motion.div variants={fadeInUp} className="flex justify-center mb-6">
              <div className={`w-20 h-20 rounded-2xl ${colors.iconBg} flex items-center justify-center text-white shadow-2xl`}>
                {icon}
              </div>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className={`${typography.h1} mb-6 text-[var(--color-accent)] font-bold`}
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className={`${typography.lead} text-white`}
          >
            {description}
          </motion.p>

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-4 mt-8"
            >
              {primaryCTA && (
                <a
                  href={primaryCTA.href}
                  className="bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-[var(--link-hover)] inline-flex items-center gap-2"
                >
                  {primaryCTA.text}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              )}
              {secondaryCTA && (
                <a
                  href={secondaryCTA.href}
                  className="px-8 py-4 bg-[var(--color-primary)] text-white border-2 border-[var(--color-accent)]/30 rounded-lg font-semibold hover:bg-[#134E7C] hover:border-[var(--color-accent)] transition-all duration-300"
                >
                  {secondaryCTA.text}
                </a>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
