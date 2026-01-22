"use client";

import { motion } from "framer-motion";
import { colors, typography, spacing, components } from "@/lib/design-tokens";
import { fadeInUp } from "@/lib/animations";
import { ProcessStep } from "@/data/howWeWork";
import { CheckCircle2 } from "lucide-react";

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
    <section className={`${spacing.section} relative`}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-[var(--bg-section)]" />
      <div className={`${spacing.container} relative z-10`}>
        {/* Header */}
        {(title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {title && (
              <h2 className={`${typography.h2} ${colors.heading} mb-4`}>
                {title}
              </h2>
            )}
            {description && (
              <p className={`${typography.bodyXl} ${colors.subheading}`}>
                {description}
              </p>
            )}
          </motion.div>
        )}

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)] opacity-30 hidden md:block" />
              )}

              {/* Step Card */}
              <div className="grid md:grid-cols-[auto,1fr] gap-8 mb-12">
                {/* Step Number */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-16 h-16 rounded-2xl icon-bg flex items-center justify-center text-white font-bold text-2xl shadow-xl mb-4">
                    {step.id}
                  </div>
                  <div className="hidden md:block">
                    <div className={`${components.badge} ${colors.cardBg} ${colors.cardBorder}`}>
                      {step.duration}
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <div className={`${components.card} p-8`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-sm font-semibold text-[var(--color-accent)] mb-2">
                        {step.phase}
                      </div>
                      <h3 className={`${typography.h4} ${colors.heading} mb-3`}>
                        {step.title}
                      </h3>
                    </div>
                    <div className="md:hidden">
                      <div className={`${components.badge} ${colors.cardBg} ${colors.cardBorder}`}>
                        {step.duration}
                      </div>
                    </div>
                  </div>

                  <p className={`${colors.body} mb-6`}>
                    {step.description}
                  </p>

                  {/* Deliverables */}
                  <div>
                    <div className="font-semibold text-[var(--text-primary)] mb-3">Key Deliverables:</div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {step.deliverables.map((deliverable, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-gray-600"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{deliverable}</span>
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
