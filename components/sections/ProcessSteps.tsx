"use client";

import { useState } from "react";
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
  const [activeStepId, setActiveStepId] = useState<number | null>(steps[0]?.id ?? null);
  const activeStep = steps.find((step) => step.id === activeStepId) ?? steps[0];

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
        <div className={styles.stepsLayout}>
          <div className={styles.stepsList}>
            {steps.map((step) => (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveStepId(step.id)}
                className={`${styles.stepTab} ${activeStep?.id === step.id ? styles.stepTabActive : ""}`}
              >
                <span className={styles.stepTabIndex}>{step.id}</span>
                <span className={styles.stepTabContent}>
                  <span className={styles.stepTabPhase}>{step.phase}</span>
                  <span className={styles.stepTabTitle}>{step.title}</span>
                </span>
                <span className={styles.stepTabDuration}>{step.duration}</span>
              </button>
            ))}
          </div>

          {activeStep && (
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className={styles.stepDetail}
            >
              <div className={styles.stepDetailHeader}>
                <div>
                  <div className={styles.stepPhase}>{activeStep.phase}</div>
                  <h3 className={styles.stepTitle}>{activeStep.title}</h3>
                </div>
                <span className={styles.durationBadge}>{activeStep.duration}</span>
              </div>

              <p className={styles.stepDescription}>{activeStep.description}</p>

              <div className={styles.deliverables}>
                <div className={styles.deliverablesTitle}>Key Deliverables:</div>
                <div className={styles.deliverablesGrid}>
                  {activeStep.deliverables.map((deliverable, idx) => (
                    <div key={idx} className={styles.deliverableItem}>
                      <CheckCircle2 className={styles.checkIcon} />
                      <span className={styles.deliverableText}>{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
