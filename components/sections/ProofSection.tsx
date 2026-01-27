"use client";

import { motion } from "framer-motion";
import { Testimonial } from "@/lib/types";
import { Star, Building2, TrendingUp } from "lucide-react";
import styles from "./ProofSection.module.css";

interface ProofSectionProps {
  testimonials: Testimonial[];
  title?: string;
  description?: string;
}

/**
 * Enhanced testimonials with metrics and company context
 */
export function ProofSection({ testimonials, title, description }: ProofSectionProps) {
  return (
    <section className={styles.proofSection}>
      <div className={styles.container}>
        {/* Header */}
        {(title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.header}
          >
            {title && (
              <h2 className={styles.title}>
                {title}
              </h2>
            )}
            {description && (
              <p className={styles.description}>
                {description}
              </p>
            )}
          </motion.div>
        )}

        {/* Testimonials Grid */}
        <div className={styles.grid}>
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.testimonialCard}>
                {/* Rating */}
                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`${styles.star} ${
                        i < testimonial.rating ? styles.starFilled : styles.starEmpty
                      }`}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className={styles.content}>
                  "{testimonial.content}"
                </p>

                {/* Outcome Badge */}
                {testimonial.outcome && (
                  <div className={styles.outcome}>
                    <div className={styles.outcomeBadge}>
                      <TrendingUp className={styles.outcomeIcon} />
                      <div>
                        <div className={styles.outcomeLabel}>
                          Outcome
                        </div>
                        <p className={styles.outcomeText}>
                          {testimonial.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Author Info */}
                <div className={styles.author}>
                  <div className={styles.authorAvatar}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>
                      {testimonial.name}
                    </div>
                    <div className={styles.authorRole}>
                      {testimonial.role}
                    </div>
                    <div className={styles.authorCompany}>
                      <Building2 className={styles.companyIcon} />
                      <span className={styles.companyName}>{testimonial.company}</span>
                      {testimonial.companySize && (
                        <>
                          <span>•</span>
                          <span>{testimonial.companySize}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
