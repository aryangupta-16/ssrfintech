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
          style={{ backgroundImage: "url(/payment-solutions-financial-technology-with-businessman-using-tablet-background.jpg)" }}
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
                See how organisations leverage {product.title}
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
                    <div className={styles.useCaseNumber}>{index + 1}</div>
                    <div className={styles.useCaseContent}>
                      <span className={styles.useCaseTitle}>{useCase.title}</span>
                      {useCase.description && (
                        <p className={styles.useCaseDescription}>{useCase.description}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* WHY CHOOSE SSR */}
      {product.whyChoose && product.whyChoose.length > 0 && (
        <section className={styles.whyChooseSection}>
          <div className={styles.container}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.whyChooseInner}
            >
              <h2 className={styles.useCasesTitle}>Why Choose SSR Fintech?</h2>
              <p className={styles.useCasesSubtitle}>
                Our proven expertise and delivery methodology sets us apart
              </p>
              <div className={styles.whyChooseList}>
                {product.whyChoose.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className={styles.whyChooseItem}
                  >
                    <ArrowLeft className={styles.whyChooseIcon} style={{ transform: 'rotate(180deg)' }} />
                    <span>{point}</span>
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
