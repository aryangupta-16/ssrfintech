"use client";

import { motion } from "framer-motion";
import { colors, typography, spacing } from "@/lib/design-tokens";
import { TechStack as TechStackType } from "@/data/certifications";
import Image from "next/image";

interface TechStackProps {
  techStack: TechStackType[];
  title?: string;
  description?: string;
}

/**
 * Technology stack and certifications display
 */
export function TechStack({ techStack, title, description }: TechStackProps) {
  return (
    <section className={`${spacing.section} relative`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-red-600/10 opacity-50" />

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

        {/* Tech Stack Categories */}
        <div className="space-y-12">
          {techStack.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              {/* Category Header */}
              <h3 className={`${typography.h4} ${colors.heading} mb-6 text-center`}>
                {category.category}
              </h3>

              {/* Technologies Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                    className="group"
                  >
                    <div className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 backdrop-blur-sm rounded-lg hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                      {/* Logo Placeholder */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
                          {tech.name.substring(0, 2)}
                        </div>
                        <div className="w-2 h-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50" title="Available" />
                      </div>

                      {/* Name */}
                      <h4 className={`font-semibold ${colors.heading} mb-2`}>
                        {tech.name}
                      </h4>

                      {/* Description */}
                      <p className="text-sm text-gray-400 line-clamp-2">
                        {tech.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 italic">
            * Technology logos and official certifications available upon request
          </p>
        </motion.div>
      </div>
    </section>
  );
}
