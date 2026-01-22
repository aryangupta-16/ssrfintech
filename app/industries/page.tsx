"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CTAButtons } from "@/components/ui/CTAButton";
import { industries } from "@/data/industries";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import styles from "./industries.module.css";

export default function IndustriesPage() {
  // Industry images mapping
  const industryImages = [
    "/ssrfintech_1.jpg",
    "/ssrfintech_2.jpg", 
    "/ssrfintech_3.jpg",
    "/ssrfintech_1.jpg",
    "/ssrfintech_2.jpg",
    "/ssrfintech_3.jpg"
  ];

  return (
    <GradientWrapper className="pt-20">
      <PageHero
        title="Industries We Serve"
        description="Deep domain expertise across financial services sectors, delivering tailored solutions that address your unique challenges"
        backgroundImage="/ssrfintech_1.jpg"
        primaryCTA={{
          text: "Discuss Your Industry Needs",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "View Case Studies",
          href: "/case-studies",
        }}
        icon={<Building2 className="w-10 h-10" />}
      />

      {/* Industries Grid */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.industriesGrid}>
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/industries/${industry.slug}`}>
                  <Card className={styles.industryCard}>
                    {/* Image Header */}
                    <div className={styles.industryImageWrapper}>
                      <Image
                        src={industryImages[index]}
                        alt={industry.title}
                        fill
                        className={styles.industryImage}
                      />
                      <div className={styles.industryImageOverlay} />
                      <div className={styles.industryNumberBadge}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className={styles.industryTitle}>
                        {industry.title}
                      </CardTitle>
                      <CardDescription className={styles.industryDescription}>
                        {industry.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      {/* Challenges Preview */}
                      <div className={styles.challengesSection}>
                        <div className={styles.challengesTitle}>
                          Key Challenges We Solve:
                        </div>
                        <div className={styles.challengesList}>
                          {industry.challenges.slice(0, 3).map((challenge, idx) => (
                            <div key={idx} className={styles.challengeItem}>
                              <div className={styles.challengeBullet} />
                              <span className={styles.challengeText}>{challenge}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Divider */}
                      <div className={styles.gradientDivider} />

                      {/* CTA */}
                      <div className={styles.industryCTA}>
                        Explore Solutions
                        <ArrowRight className={styles.ctaArrow} />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsBackground} />
        <div className={styles.statsContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.statsHeader}
          >
            <h2 className={styles.statsTitle}>
              Proven Track Record
            </h2>
            <p className={styles.statsSubtitle}>
              Delivering measurable results across industries
            </p>
          </motion.div>

          <div className={styles.statsGrid}>
            {[
              { value: "15+", label: "Years of Industry Experience" },
              { value: "200+", label: "Financial Institutions Served" },
              { value: "$50B+", label: "Assets Under Management Protected" },
              { value: "99.9%", label: "System Uptime Guaranteed" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={styles.statItem}
              >
                <div className={styles.statValue}>
                  {stat.value}
                </div>
                <div className={styles.statLabel}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.finalCTA}
          >
            <h2 className={styles.finalCTATitle}>
              Don't See Your Industry?
            </h2>
            <p className={styles.finalCTADescription}>
              We specialize in financial services but serve many adjacent sectors. Let's discuss your needs.
            </p>
            <div className={styles.finalCTAButtons}>
              <CTAButtons.TalkToExpert />
              <CTAButtons.BookStrategyCall variant="secondary" />
            </div>
          </motion.div>
        </div>
      </section>
    </GradientWrapper>
  );
}
