"use client";

import { notFound } from "next/navigation";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { ProductHero } from "@/components/products/product-hero";
import { ProductFeatures } from "@/components/products/product-features";
import { products } from "@/data/products";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { use } from "react";
import { ArrowLeft } from "lucide-react";
import styles from "./product-detail.module.css";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = products.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <GradientWrapper className="pt-20">
      {/* HERO */}
      <section className={styles.hero}>
        <div
          className={styles.heroBackground}
          style={{ backgroundImage: "url(/ssrfintech_5.jpg)" }}
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <Link href="/products">
            <Button variant="ghost" className={styles.backButton}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>

          <ProductHero
            title={product.title}
            description={product.description}
            icon={product.icon}
          />
        </div>
      </section>

      {/* FEATURES */}
      <ProductFeatures
        features={product.features}
        benefits={product.benefits}
      />

      {/* USE CASES */}
      {product.useCases && product.useCases?.length > 0 && (
        <section className={styles.useCasesSection}>
          <div className={styles.container}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.useCasesInner}
            >
              <h2 className={styles.useCasesTitle}>Common Use Cases</h2>
              <p className={styles.useCasesSubtitle}>
                See how organizations leverage {product.title}
              </p>

              <div className={styles.useCasesList}>
                {product.useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={styles.useCaseCard}
                  >
                    <span className={styles.useCaseBullet} />
                    <span className={styles.useCaseText}>{useCase}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.ctaCard}
          >
            <h2 className={styles.ctaTitle}>
              Ready to get started with {product.title}?
            </h2>
            <p className={styles.ctaSubtitle}>
              Schedule a personalized demo and see how it fits your organization.
            </p>

            <div className={styles.ctaButtons}>
              <Link href="/contact">
                <Button size="lg">Request Demo</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </GradientWrapper>
  );
}
