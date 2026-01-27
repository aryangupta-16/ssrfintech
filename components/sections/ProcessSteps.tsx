"use client";

import { motion } from "framer-motion";
import { ProcessStep } from "@/data/howWeWork";
import { CheckCircle2 } from "lucide-react";
import styles from "./ProcessSteps.module.css";

interface ProcessStepsProps {
  steps: ProcessStep[];
  title?: string;
  description?: string;
}

/**
 * Process timeline component showing how we work
 */
export function ProcessSteps({ steps, title, description }: ProcessStepsProps) {
  return (
    <section className={styles.processSteps}>
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

        {/* Process Steps */}
        <div className={styles.stepsWrapper}>
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={styles.stepItem}
            >
              {/* Timeline Line */}
              {index < steps.length - 1 && (
                <div className={styles.timelineLine} />
              )}

              {/* Step Card */}
              <div className={styles.stepGrid}>
                {/* Step Number */}
                <div className={styles.stepNumber}>
                  <div className={styles.numberBadge}>
                    {step.id}
                  </div>
                  <div className={styles.durationBadgeHidden}>
                    {step.duration}
                  </div>
                </div>

                {/* Step Content */}
                <div className={styles.stepCard}>
                  <div className={styles.stepHeader}>
                    <div>
                      <div className={styles.stepPhase}>
                        {step.phase}
                      </div>
                      <h3 className={styles.stepTitle}>
                        {step.title}
                      </h3>
                    </div>
                    <div className={styles.durationBadgeMobile}>
                      {step.duration}
                    </div>
                  </div>

                  <p className={styles.stepDescription}>
                    {step.description}
                  </p>

                  {/* Deliverables */}
                  <div className={styles.deliverables}>
                    <div className={styles.deliverablesTitle}>Key Deliverables:</div>
                    <div className={styles.deliverablesGrid}>
                      {step.deliverables.map((deliverable, idx) => (
                        <div
                          key={idx}
                          className={styles.deliverableItem}
                        >
                          <CheckCircle2 className={styles.checkIcon} />
                          <span className={styles.deliverableText}>{deliverable}</span>
                        </div>
                      ))}
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
