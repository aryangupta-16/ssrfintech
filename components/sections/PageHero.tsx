"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import styles from "./PageHero.module.css";

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
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

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
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className={styles.pageHero}>
      {/* Background Image */}
      {backgroundImage && (
        <div className={styles.backgroundImage}>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className={styles.overlay} />
        </div>
      )}

      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon */}
          {icon && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={styles.iconContainer}
            >
              <div className={styles.icon}>
                {icon}
              </div>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={styles.title}
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className={styles.description}
          >
            {description}
          </motion.p>

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className={styles.buttonContainer}
            >
              {primaryCTA && (
                <Link href={primaryCTA.href}>
                  <Button size="xl" variant="gradient">
                    {primaryCTA.text}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              )}
              {secondaryCTA && (
                <Link href={secondaryCTA.href}>
                  <Button size="xl" variant="secondary">
                    {secondaryCTA.text}
                  </Button>
                </Link>
              )}
            </motion.div>
          )}

          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className={styles.breadcrumb}
            >
              <div className={styles.breadcrumbList}>
                {breadcrumbs.map((crumb, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {crumb.href ? (
                      <Link href={crumb.href} className={styles.breadcrumbItem}>
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={styles.breadcrumbItem}>{crumb.label}</span>
                    )}
                    {index < breadcrumbs.length - 1 && (
                      <ChevronRight className={styles.breadcrumbSeparator} size={16} />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
