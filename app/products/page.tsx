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
        backgroundImage="/ssrfintech_3.jpg"
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

      {/* Financial Solutions */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.categoryHeader}
          >
            <div className={styles.categoryTitleWrapper}>
              <span className={styles.categoryAccent} />
              <h2 className={styles.categoryTitle}>
                {productCategories.financial.title}
              </h2>
            </div>
            <p className={styles.categoryDescription}>
              {productCategories.financial.description}
            </p>
          </motion.div>
          <div className={styles.productsGrid}>
            {productCategories.financial.products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.categoryHeader}
          >
            <div className={styles.categoryTitleWrapper}>
              <span className={styles.categoryAccent} />
              <h2 className={styles.categoryTitle}>
                {productCategories.enterprise.title}
              </h2>
            </div>
            <p className={styles.categoryDescription}>
              {productCategories.enterprise.description}
            </p>
          </motion.div>
          <div className={styles.productsGrid}>
            {productCategories.enterprise.products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Migration Services */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.categoryHeader}
          >
            <div className={styles.categoryTitleWrapper}>
              <span className={styles.categoryAccent} />
              <h2 className={styles.categoryTitle}>
                {productCategories.migration.title}
              </h2>
            </div>
            <p className={styles.categoryDescription}>
              {productCategories.migration.description}
            </p>
          </motion.div>
          <div className={styles.productsGrid}>
            {productCategories.migration.products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className={styles.achievementsSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.achievementsCard}
          >
            <div className={styles.achievementsIconWrapper}>
              <Award className={styles.achievementsIcon} />
            </div>
            <h2 className={styles.achievementsTitle}>Our Achievements</h2>
            <div className={styles.achievementGrid}>
              <div>
                <div className={styles.achievementValue}>30+</div>
                <p className={styles.achievementLabel}>Planning, Budgeting & Reporting Solutions Implemented</p>
              </div>
              <div>
                <div className={styles.achievementValuePurple}>20+</div>
                <p className={styles.achievementLabel}>Consolidation Solutions Delivered</p>
              </div>
              <div>
                <div className={styles.achievementValue}>7+</div>
                <p className={styles.achievementLabel}>Migration Projects (BPC to SAC & GR)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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
              Let's discuss how our SAP solutions can drive your digital transformation
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact">
                <Button size="lg" className={styles.ctaPrimaryButton}>
                  Contact Us
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className={styles.ctaSecondaryButton}>
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
