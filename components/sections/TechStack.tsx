"use client";

import { motion } from "framer-motion";
import { TechStack as TechStackType } from "@/data/certifications";
import styles from "./TechStack.module.css";

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
    <section className={styles.techStack}>
      {/* Background */}
      <div className={styles.backgroundGradient} />

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

        {/* Tech Stack Categories */}
        <div className={styles.categories}>
          {techStack.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className={styles.category}
            >
              {/* Category Header */}
              <h3 className={styles.categoryTitle}>
                {category.category}
              </h3>

              {/* Technologies Grid */}
              <div className={styles.techGrid}>
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                  >
                    <div className={styles.techCard}>
                      {/* Logo Placeholder */}
                      <div className={styles.techHeader}>
                        <div className={styles.techLogo}>
                          {tech.name.substring(0, 2)}
                        </div>
                        <div className={styles.statusIndicator} title="Available" />
                      </div>

                      {/* Name */}
                      <h4 className={styles.techName}>
                        {tech.name}
                      </h4>

                      {/* Description */}
                      <p className={styles.techDescription}>
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
          className={styles.note}
        >
          <p>
            * Technology logos and official certifications available upon request
          </p>
        </motion.div>
      </div>
    </section>
  );
}
