"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { industries } from "@/data/industries";
import { ArrowRight, AlertCircle, Lightbulb, TrendingUp } from "lucide-react";
import Link from "next/link";
import styles from "./industry-detail.module.css";

export default function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <GradientWrapper className="pt-20">
      {/* Hero Section */}
      <section className={styles.hero}>
        {/* Background Image with Overlay */}
        <div
          className={styles.heroBackground}
          style={{ backgroundImage: 'url(/close-up-hand-holding-smartphone.jpg)' }}
        >
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroInner}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={styles.badge}
            >
              <TrendingUp className="w-4 h-4" />
              Industry Expertise
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={styles.heroTitle}
            >
              {industry.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={styles.heroDescription}
            >
              {industry.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={styles.buttonGroup}
            >
              <Link
                href="/contact"
                className={styles.primaryButton}
              >
                Discuss Your Needs
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className={styles.secondaryButton}
              >
                View Success Stories
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.sectionHeader}
          >
            <div className={styles.challengeBadge}>
              <AlertCircle className="w-5 h-5" />
              Industry Challenges
            </div>
            <h2 className={styles.sectionTitle}>
              Common Challenges We Solve
            </h2>
            <p className={styles.sectionSubtitle}>
              Understanding the pain points unique to {industry.title.toLowerCase()}
            </p>
          </motion.div>

          <div className={styles.grid}>
            {industry.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.challengeCard}>
                  <div className={styles.challengeContent}>
                    <div className={styles.challengeIcon}>
                      <AlertCircle className="w-6 h-6 text-red-400" />
                    </div>
                    <p className={styles.challengeText}>{challenge}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className={styles.solutionsSection}>
        <div className={styles.solutionsBackground} />

        <div className={`${styles.container} relative z-10`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.sectionHeader}
          >
            <div className={styles.solutionBadge}>
              <Lightbulb className="w-5 h-5" />
              Our Solutions
            </div>
            <h2 className={styles.sectionTitle}>
              How We Drive Success
            </h2>
            <p className={styles.sectionSubtitle}>
              Innovative solutions designed specifically for {industry.title.toLowerCase()}
            </p>
          </motion.div>

          <div className={styles.solutionsGrid}>
            {industry.solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.solutionCard}>
                  <div className={styles.solutionContent}>
                    <div className={styles.solutionNumber}>
                      {index + 1}
                    </div>
                    <div className={styles.solutionTextWrapper}>
                      <p className={styles.solutionText}>{solution}</p>
                      <div className={styles.solutionBar} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={styles.statCard}
              >
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.ctaCard}
          >
            <h2 className={styles.ctaTitle}>
              Let’s Build Your Success Story
            </h2>
            <p className={styles.ctaSubtitle}>
              Partner with experts who understand {industry.title.toLowerCase()}
            </p>

            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaPrimary}>
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link href="/services" className={styles.ctaSecondary}>
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>




    </GradientWrapper>
  );
}
