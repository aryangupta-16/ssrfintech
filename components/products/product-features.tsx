"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import styles from "./products-components.module.css";

interface Feature {
  title: string;
  description: string;
}

interface ProductFeaturesProps {
  features: Feature[];
  benefits: string[];
}

export function ProductFeatures({ features, benefits }: ProductFeaturesProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.featuresWrapper}
        >
          <h2 className={styles.sectionTitle}>Key Features</h2>
          <p className={styles.sectionSubtitle}>
            Powerful capabilities designed to transform your business operations
          </p>

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={styles.featureCard}
              >
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.benefitsWrapper}
        >
          <h2 className={styles.sectionTitle}>Business Benefits</h2>
          <p className={styles.sectionSubtitle}>
            Drive measurable value and achieve strategic objectives
          </p>

          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className={styles.benefitItem}
              >
                <CheckCircle2 className={styles.benefitIcon} />
                <span className={styles.benefitText}>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
