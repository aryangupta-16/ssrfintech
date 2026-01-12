"use client";

import { motion } from "framer-motion";
import { colors, typography, spacing, components } from "@/lib/design-tokens";
import { TargetAudience } from "@/data/whoWeHelp";
import * as LucideIcons from "lucide-react";

interface WhoWeHelpProps {
  audiences: TargetAudience[];
  title?: string;
  description?: string;
}

/**
 * Target audience section showing who we serve
 */
export function WhoWeHelp({ audiences, title, description }: WhoWeHelpProps) {
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

        {/* Audience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => {
            // Get icon component dynamically
            const IconComponent = (LucideIcons as any)[audience.icon] || LucideIcons.Users;

            return (
              <motion.div
                key={audience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`${components.card} p-8 h-full hover:scale-105 transition-transform duration-300`}>
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`${typography.h5} ${colors.heading} mb-3`}>
                    {audience.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm ${colors.subheading} mb-4`}>
                    {audience.description}
                  </p>

                  {/* Pain Point */}
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-red-400 mb-2">
                      Common Challenge:
                    </div>
                    <p className="text-sm text-gray-400">
                      {audience.painPoint}
                    </p>
                  </div>

                  {/* How We Help */}
                  <div className="border-t border-slate-700 pt-4">
                    <div className="text-xs font-semibold text-green-400 mb-2">
                      How We Help:
                    </div>
                    <p className="text-sm text-gray-300">
                      {audience.howWeHelp}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
