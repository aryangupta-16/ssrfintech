"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Resource } from "@/data/resources";
import styles from "./resources-section.module.css";

interface ResourcesSectionProps {
  resources: Resource[];
  title?: string;
  description?: string;
}

export default function ResourcesSection({
  resources,
  title = "Resources & Documentation",
  description = "Access everything you need to succeed with SAP solutions",
}: ResourcesSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className={styles.resourcesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {resources.map((resource) => (
            <motion.div key={resource.id} variants={itemVariants}>
              <Link href={resource.link} target="_blank" rel="noopener noreferrer">
                <div className={styles.card}>
                  <div className={styles.iconWrapper}>
                    <span className={styles.icon}>{resource.icon}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{resource.title}</h3>
                  <p className={styles.cardDescription}>
                    {resource.description}
                  </p>

                  <div className={styles.footer}>
                    <span className={styles.cta}>
                      {resource.cta}
                      <span className={styles.arrowIcon}>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
