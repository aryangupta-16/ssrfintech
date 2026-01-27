"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
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
import { Product } from "@/data/products";
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

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const Icon = iconMap[product.icon] || BarChart3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link href={`/products/${product.slug}`} className={styles.cardLink}>
        <div className={styles.productCard}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrapper}>
              <Icon className={styles.productIcon} />
            </div>

            <h3 className={styles.cardTitle}>{product.title}</h3>
            <p className={styles.cardDescription}>
              {product.shortDescription}
            </p>
          </div>

          <div className={styles.cardFooter}>
            <span className={styles.learnMore}>
              Learn more
              <ArrowRight className={styles.learnMoreArrow} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
