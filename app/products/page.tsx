"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { products, productCategories } from "@/data/products";
import { ArrowRight, Award, Package } from "lucide-react";
import styles from "./products.module.css";



export default function ProductsPage() {
  return (
    <GradientWrapper className="pt-20">
      <PageHero
        title="Enterprise SAP Solutions Portfolio"
        description="Comprehensive SAP solutions for digital transformation, financial management, and enterprise optimization"
        backgroundImage="/3d-graph-computer-illustration.jpg"
        primaryCTA={{
          text: "Schedule a Demo",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "View All Products",
          href: "#products",
        }}
        icon={<Package className="w-10 h-10" />}
      />

     {/* ===============================
   PRODUCT CATEGORIES
   =============================== */}
<section className={styles.section}>
  <div className={styles.container}>

    {/* Financial Solutions */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={styles.categoryBlock}
    >
      <div className={styles.categoryHeader}>
        <span className={styles.categoryAccent} />
        <div>
          <h2 className={styles.categoryTitle}>
            {productCategories.financial.title}
          </h2>
          <p className={styles.categoryDescription}>
            {productCategories.financial.description}
          </p>
        </div>
      </div>

      <div className={styles.productsGrid}>
        {productCategories.financial.products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </motion.div>

    {/* Enterprise Solutions */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={styles.categoryBlock}
    >
      <div className={styles.categoryHeader}>
        <span className={styles.categoryAccent} />
        <div>
          <h2 className={styles.categoryTitle}>
            {productCategories.enterprise.title}
          </h2>
          <p className={styles.categoryDescription}>
            {productCategories.enterprise.description}
          </p>
        </div>
      </div>

      <div className={styles.productsGrid}>
        {productCategories.enterprise.products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </motion.div>

    {/* Migration Services */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={styles.categoryBlock}
    >
      <div className={styles.categoryHeader}>
        <span className={styles.categoryAccent} />
        <div>
          <h2 className={styles.categoryTitle}>
            {productCategories.migration.title}
          </h2>
          <p className={styles.categoryDescription}>
            {productCategories.migration.description}
          </p>
        </div>
      </div>

      <div className={styles.productsGrid}>
        {productCategories.migration.products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </motion.div>

  </div>
</section>

{/* ===============================
   ACHIEVEMENTS
   =============================== */}
<section className={styles.achievementsSection}>
  <div className={styles.container}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={styles.achievementsCard}
    >
      <Award className={styles.achievementsIcon} />
      <h2 className={styles.achievementsTitle}>Our Achievements</h2>

      <div className={styles.achievementGrid}>
        <div className={styles.achievementItem}>
          <div className={styles.achievementValue}>30+</div>
          <p className={styles.achievementLabel}>
            Planning, Budgeting & Reporting Solutions Implemented
          </p>
        </div>

        <div className={styles.achievementItem}>
          <div className={styles.achievementValue}>20+</div>
          <p className={styles.achievementLabel}>
            Consolidation Solutions Delivered
          </p>
        </div>

        <div className={styles.achievementItem}>
          <div className={styles.achievementValue}>7+</div>
          <p className={styles.achievementLabel}>
            Migration Projects (BPC to SAC & GR)
          </p>
        </div>
      </div>
    </motion.div>
  </div>
</section>

{/* ===============================
   CTA
   =============================== */}
<section className={styles.ctaSection}>
  <div className={styles.container}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={styles.ctaCard}
    >
      <h2 className={styles.ctaTitle}>
        Ready to Transform Your Enterprise?
      </h2>
      <p className={styles.ctaDescription}>
        Let’s discuss how our SAP solutions can drive your digital transformation.
      </p>

      <div className={styles.ctaButtons}>
        <Link href="/contact">
          <Button size="lg">Contact Us</Button>
        </Link>
        <Link href="/case-studies">
          <Button size="lg" variant="outline">
            View Case Studies
          </Button>
        </Link>
      </div>
    </motion.div>
  </div>
</section>

    </GradientWrapper>
  );
}
