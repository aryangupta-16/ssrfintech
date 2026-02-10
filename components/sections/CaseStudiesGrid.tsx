"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CaseStudy } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import styles from "./case-studies-grid.module.css";

interface CaseStudiesGridProps {
  caseStudies: CaseStudy[];
  showCount?: number;
}

export default function CaseStudiesGrid({
  caseStudies,
  showCount,
}: CaseStudiesGridProps) {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(
    null
  );

  const displayedCases = showCount
    ? caseStudies.slice(0, showCount)
    : caseStudies;

  const handleOpenModal = (caseStudy: CaseStudy) => {
    setSelectedCaseStudy(caseStudy);
  };

  const handleCloseModal = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <>
      <div className={styles.grid}>
        {displayedCases.map((caseStudy, index) => (
          <motion.div
            key={caseStudy.id}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => handleOpenModal(caseStudy)}
            whileHover={{ y: -8 }}
          >
            <div className={styles.cardContent}>
              {/* Logo */}
              {caseStudy.logo && (
                // <div className={styles.logoWrapper}>
                  <Image
                    src={caseStudy.logo}
                    alt={caseStudy.client}
                    width={200}
                    height={100}
                    className={styles.logo}
                  />
                // </div>
              )}

              {/* Industry Badge */}
              <div className={styles.industryBadge}>{caseStudy.industry}</div>

              {/* Company Name */}
              <h3 className={styles.companyName}>{caseStudy.client}</h3>

              {/* Short Summary */}
              <p className={styles.summary}>
                {caseStudy.summary && caseStudy.summary.length > 120
                  ? caseStudy.summary.substring(0, 120) + "..."
                  : caseStudy.summary}
              </p>

              {/* Read More Button */}
              <button className={styles.readMoreButton}>
                Read Full Story
                <ArrowRight size={16} />
              </button>

              {/* Metric at Bottom Left */}
              {caseStudy.metrics && (
                <div className={styles.metricBadge}>
                  <span className={styles.metricValue}>
                    {caseStudy.metrics.value}
                  </span>
                  <span className={styles.metricLabel}>
                    {caseStudy.metrics.metric}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={handleCloseModal}
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className={styles.modalHeader}>
                {selectedCaseStudy.logo && (
                  <Image
                    src={selectedCaseStudy.logo}
                    alt={selectedCaseStudy.client}
                    width={150}
                    height={80}
                    className={styles.modalLogo}
                  />
                )}
                <div className={styles.modalTitleSection}>
                  <h2 className={styles.modalTitle}>
                    {selectedCaseStudy.client}
                  </h2>
                  <p className={styles.modalSubtitle}>
                    {selectedCaseStudy.industry}
                  </p>
                </div>
              </div>

              <div className={styles.modalBody}>
                <div className={styles.modalSection}>
                  <h3 className={styles.sectionTitle}>Solution</h3>
                  <p className={styles.sectionContent}>
                    {selectedCaseStudy.title}
                  </p>
                </div>

                {selectedCaseStudy.metrics && (
                  <div className={styles.metricHighlight}>
                    <div className={styles.metricValueLarge}>
                      {selectedCaseStudy.metrics.value}
                    </div>
                    <div className={styles.metricLabelLarge}>
                      {selectedCaseStudy.metrics.metric}
                    </div>
                    <p className={styles.metricDescription}>
                      {selectedCaseStudy.metrics.description}
                    </p>
                  </div>
                )}

                {selectedCaseStudy.challengeHighlights &&
                  selectedCaseStudy.challengeHighlights.length > 0 && (
                    <div className={styles.modalSection}>
                      <h3 className={styles.sectionTitle}>Challenges</h3>
                      <ul className={styles.highlightsList}>
                        {selectedCaseStudy.challengeHighlights.map(
                          (highlight, index) => (
                            <li key={index}>{highlight}</li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                {selectedCaseStudy.solutionHighlights &&
                  selectedCaseStudy.solutionHighlights.length > 0 && (
                    <div className={styles.modalSection}>
                      <h3 className={styles.sectionTitle}>Key Solutions</h3>
                      <ul className={styles.highlightsList}>
                        {selectedCaseStudy.solutionHighlights.map(
                          (highlight, index) => (
                            <li key={index}>{highlight}</li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                {selectedCaseStudy.summary && (
                  <div className={styles.modalSection}>
                    <h3 className={styles.sectionTitle}>Overview</h3>
                    <p className={styles.sectionContent}>
                      {selectedCaseStudy.summary}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
