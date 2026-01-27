"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { caseStudies } from "@/data/caseStudies";
import { AlertTriangle, Award, ArrowRight, Lightbulb } from "lucide-react";
import styles from "./case-studies.module.css";

export default function CaseStudiesPage() {
  return (
    <GradientWrapper>
      <PageHero
        title="Case Studies"
        description="Real results for real clients — see how we've transformed businesses"
        backgroundImage="/ssrfintech_1.jpg"
        primaryCTA={{ text: "Start Your Project", href: "/contact" }}
        icon={<Award className="w-10 h-10" />}
      />

      <section className={styles.caseStudies}>
        <div className={styles.container}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.header}
          >
            <span className={styles.badge}>Case Study Gallery</span>
            <h2 className={styles.headerTitle}>
              Signature Projects Across Industries
            </h2>
            <p className={styles.headerDescription}>
              A snapshot of how we elevate workforce planning and analytics with SAP Analytics Cloud for global pioneers.
            </p>
          </motion.div>

          {/* Cards */}
          <div className={styles.caseList}>
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={styles.caseCard}
              >
                {/* Accent Bar */}
                <span className={styles.cardAccent} />

                {/* Client */}
                <div className={styles.clientBlock}>
                  <div className={styles.logoWrapper}>
                    <Image
                      src={caseStudy.logo ?? "/placeholders/nbf-logo.webp"}
                      alt={`${caseStudy.client} logo`}
                      width={80}
                      height={80}
                    />
                  </div>

                  <div>
                    <p className={styles.clientIndustry}>
                      {caseStudy.industry}
                    </p>
                    <h3 className={styles.clientName}>
                      {caseStudy.client}
                    </h3>
                    <p className={styles.caseTitle}>
                      {caseStudy.title}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className={styles.detailsGrid}>
                  <div className={styles.detailSection}>
                    <div className={styles.sectionHeader}>
                      <AlertTriangle />
                      <span>Challenges</span>
                    </div>
                    <ul>
                      {caseStudy.challengeHighlights.slice(0, 3).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.detailSection}>
                    <div className={styles.sectionHeader}>
                      <Lightbulb />
                      <span>Solution</span>
                    </div>
                    <ul>
                      {caseStudy.solutionHighlights.slice(0, 3).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <Link href="/contact" className={styles.cardCTA}>
                  Talk to us
                  <ArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.ctaCard}
          >
            <h2 className={styles.ctaTitle}>
              Ready to Write Your Success Story?
            </h2>
            <p className={styles.ctaDescription}>
              Share your challenge and we'll craft a tailored solution playbook.
            </p>
            <Link href="/contact" className={styles.ctaPrimaryButton}>
              Start Your Project
              <ArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </GradientWrapper>
  );
}
