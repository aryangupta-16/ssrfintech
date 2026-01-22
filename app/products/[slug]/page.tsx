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
      {/* Hero Section with Background */}
      <section className={styles.hero}>
        {/* Background Image with Overlay */}
        <div 
          className={styles.heroBackground}
          style={{ backgroundImage: 'url(/ssrfintech_5.jpg)' }}
        >
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          {/* Back Button */}
          <Link href="/products">
            <Button variant="ghost" className={styles.backButton}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>

          {/* Hero Content */}
          <ProductHero 
            title={product.title}
            description={product.description}
            icon={product.icon}
          />
        </div>
      </section>

      {/* Spacer - keeping original hero component but hiding it */}
      <div className="hidden">
        <ProductHero 
          title={product.title}
          description={product.description}
          icon={product.icon}
        />
      </div>

      {/* Features & Benefits */}
      <ProductFeatures 
        features={product.features}
        benefits={product.benefits}
      />

      {/* Use Cases */}
      {product.useCases && product.useCases.length > 0 && (
        <section className={styles.useCasesSection}>
          <div className={styles.container}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.useCasesInner}
            >
              <h2 className={styles.useCasesTitle}>
                Common Use Cases
              </h2>
              <p className={styles.useCasesSubtitle}>
                See how organizations leverage {product.title}
              </p>
              <div className={styles.useCasesList}>
                {product.useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={styles.useCaseCard}
                  >
                    <div className={styles.useCaseContent}>
                      <span className={styles.useCaseBullet} />
                      <span className={styles.useCaseText}>{useCase}</span>
                    </div>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.ctaCard}
          >
            <h2 className={styles.ctaTitle}>
              Ready to Get Started with {product.title}?
            </h2>
            <p className={styles.ctaSubtitle}>
              Schedule a personalized demo and discover how {product.title} can transform your business
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact">
                <Button size="lg" className={styles.ctaPrimary}>
                  Request Demo
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className={styles.ctaSecondary}>
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
