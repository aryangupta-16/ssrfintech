"use client";

import { motion } from "framer-motion";
import { TargetAudience } from "@/data/whoWeHelp";
import * as LucideIcons from "lucide-react";
import styles from "./WhoWeHelp.module.css";

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
    <section className={styles.whoWeHelp}>
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

        {/* Audience Grid */}
        <div className={styles.grid}>
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
              >
                <div className={styles.audienceCard}>
                  {/* Icon */}
                  <div className={styles.iconWrapper}>
                    <div className={styles.iconContainer}>
                      <IconComponent className={styles.icon} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={styles.audienceTitle}>
                    {audience.title}
                  </h3>

                  {/* Description */}
                  <p className={styles.audienceDescription}>
                    {audience.description}
                  </p>

                  {/* Pain Point */}
                  <div className={styles.painPoint}>
                    <div className={styles.painPointLabel}>
                      Common Challenge:
                    </div>
                    <p className={styles.painPointText}>
                      {audience.painPoint}
                    </p>
                  </div>

                  {/* How We Help */}
                  <div className={styles.howWeHelp}>
                    <div className={styles.howWeHelpLabel}>
                      How We Help:
                    </div>
                    <p className={styles.howWeHelpText}>
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
