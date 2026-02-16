"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";
import styles from "./products-components.module.css";

interface Feature {
  title: string;
  description: string;
  tags?: string[];
}

interface Benefit {
  title: string;
  description: string;
  metrics?: string[];
}

interface ProductFeaturesProps {
  features: Feature[];
  benefits: Benefit[];
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
          <div className={styles.sectionBadge}>
            <Zap className={styles.badgeIcon} />
            <span>Platform Capabilities</span>
          </div>
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
                {feature.tags && feature.tags.length > 0 && (
                  <div className={styles.featureTags}>
                    {feature.tags.map((tag, i) => (
                      <span key={i} className={styles.featureTag}>{tag}</span>
                    ))}
                  </div>
                )}
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
          <div className={styles.sectionBadge}>
            <CheckCircle2 className={styles.badgeIcon} />
            <span>Business Value</span>
          </div>
          <h2 className={styles.sectionTitle}>Business Benefits</h2>
          <p className={styles.sectionSubtitle}>
            Drive measurable value and achieve strategic objectives
          </p>

          <div className={styles.benefitsDetailGrid}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className={styles.benefitDetailCard}
              >
                <div className={styles.benefitNumber}>{index + 1}</div>
                <div className={styles.benefitDetailContent}>
                  <h3 className={styles.benefitDetailTitle}>{benefit.title}</h3>
                  <p className={styles.benefitDetailDescription}>{benefit.description}</p>
                  {benefit.metrics && benefit.metrics.length > 0 && (
                    <ul className={styles.benefitMetrics}>
                      {benefit.metrics.map((metric, i) => (
                        <li key={i} className={styles.benefitMetric}>
                          <CheckCircle2 className={styles.metricIcon} />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
