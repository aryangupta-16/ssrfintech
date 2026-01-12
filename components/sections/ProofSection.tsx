"use client";

import { motion } from "framer-motion";
import { colors, typography, spacing, components } from "@/lib/design-tokens";
import { Testimonial } from "@/lib/types";
import { Star, Building2, TrendingUp } from "lucide-react";

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
    <section className={`${spacing.section} relative`}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-purple-600/5 to-pink-600/5" />
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`${components.card} p-8 h-full flex flex-col`}>
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className={`${colors.subheading} mb-6 flex-grow italic`}>
                  "{testimonial.content}"
                </p>

                {/* Outcome Badge */}
                {testimonial.outcome && (
                  <div className="mb-6">
                    <div className="flex items-start gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                      <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-green-400 mb-1">
                          Outcome
                        </div>
                        <p className="text-sm text-green-300/90">
                          {testimonial.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Author Info */}
                <div className="border-t border-slate-700 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className={`font-semibold ${colors.heading} mb-1`}>
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-indigo-400 mb-1">
                        {testimonial.role}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Building2 className="w-3 h-3" />
                        {testimonial.company}
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
