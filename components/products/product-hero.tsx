"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BarChart3,
  FileCheck,
  Building2,
  TrendingUp,
  Cloud,
  Database,
  ShoppingCart,
  Users,
  ArrowRightLeft,
} from "lucide-react";
import styles from "./products-components.module.css";

const iconMap: Record<string, any> = {
  BarChart3,
  FileCheck,
  Building2,
  TrendingUp,
  Cloud,
  Database,
  ShoppingCart,
  Users,
  ArrowRightLeft,
};

interface ProductHeroProps {
  title: string;
  description: string;
  icon: string;
}

export function ProductHero({ title, description, icon }: ProductHeroProps) {
  const Icon = iconMap[icon] || BarChart3;

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.heroContent}
        >
          <div className={styles.heroIconWrapper}>
            <Icon className={styles.heroIcon} />
          </div>

          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroDescription}>{description}</p>

          <div className={styles.heroCta}>
            <Link href="/contact" className={styles.heroPrimaryButton}>
              Request Demo
            </Link>
            <Link href="/contact" className={styles.heroSecondaryButton}>
              Contact Sales
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
