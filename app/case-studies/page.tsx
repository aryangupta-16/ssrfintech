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
        description="Real results for real clients - see how we've transformed businesses"
        backgroundImage="/ssrfintech_1.jpg"
        primaryCTA={{
          text: "Start Your Project",
          href: "/contact",
        }}
        icon={<Award className="w-10 h-10" />}
      />

      {/* Case Studies Grid */}
      <section className={styles.caseStudies}>
        <div className={styles.backgroundDecor}>
          <div className={styles.decorTop} />
          <div className={styles.decorLeft} />
          <div className={styles.decorRight} />
        </div>

        <div className={styles.container}>
          <div className={styles.header}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className={styles.badge}>
                Case Study Gallery
              </span>
              <h2 className={styles.headerTitle}>
                Signature Projects Across Industries
              </h2>
              <p className={styles.headerDescription}>
                A snapshot of how we elevate workforce planning and analytics with SAP Analytics Cloud for global pioneers.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className={styles.caseList}
          >
            {caseStudies.map((caseStudy, index) => {
              const accent = caseStudy.accentColor ?? "#1DB5A3";
              return (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className={styles.caseItem}
                >
                  <div className={styles.caseContent}>
                    <div
                      className={styles.decorOrb1}
                      style={{ background: `radial-gradient(circle at center, ${accent}55 0%, transparent 60%)` }}
                    />
                    <div
                      className={styles.decorOrb2}
                      style={{ background: `radial-gradient(circle at center, ${accent}33 0%, transparent 60%)` }}
                    />

                    <div className={styles.clientInfo}>
                      <div className={styles.clientHeader}>
                        <div className={styles.clientLogoRow}>
                          <div className={styles.clientLogo}>
                            <Image
                              src={caseStudy.logo ?? "/placeholders/logo-placeholder.svg"}
                              alt={`${caseStudy.client} logo`}
                              width={96}
                              height={96}
                              className={styles.logoImage}
                            />
                          </div>
                          <div>
                            <p className={styles.clientIndustry}>
                              {caseStudy.industry}
                            </p>
                            <h3 className={styles.clientName}>
                              {caseStudy.client}
                            </h3>
                          </div>
                        </div>

                        <div className={styles.caseFocus}>
                          <span className={styles.focusBadge}>
                            Case Focus
                          </span>
                          <h4 className={styles.caseTitle}>
                            {caseStudy.title}
                          </h4>
                        </div>
                      </div>
                    </div>

                    <div className={styles.caseDetails}>
                      <div className={styles.detailSection}>
                        <div className={styles.sectionHeader}>
                          <AlertTriangle className={styles.sectionIcon} />
                          <span className={styles.sectionTitle}>Challenges</span>
                        </div>
                        <ul className={styles.detailList}>
                          {caseStudy.challengeHighlights.slice(0, 3).map((item) => (
                            <li key={item} className={styles.detailItem}>
                              <span className={styles.bullet} />
                              <span className={styles.detailText}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.detailSection}>
                        <div className={styles.sectionHeader}>
                          <Lightbulb className={styles.sectionIcon} />
                          <span className={styles.sectionTitle}>Solution</span>
                        </div>
                        <ul className={styles.detailList}>
                          {caseStudy.solutionHighlights.slice(0, 3).map((item) => (
                            <li key={item} className={styles.detailItem}>
                              <span className={styles.bullet} />
                              <span className={styles.detailText}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href="/contact"
                        className={styles.ctaButton}
                      >
                        Talk to us
                        <ArrowRight className={styles.ctaIcon} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
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
            <Link
              href="/contact"
              className={styles.ctaPrimaryButton}
            >
              Start Your Project
              <ArrowRight className={styles.ctaIcon} />
            </Link>
          </motion.div>
        </div>
      </section>
    </GradientWrapper>
  );
}
