"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/button";
import { jobs } from "@/data/jobs";
import { ArrowRight, Briefcase, MapPin, Users, Heart, TrendingUp, Award } from "lucide-react";
import styles from "./careers.module.css";

export default function CareersPage() {
  const values = [
    { id: 1, title: "Innovation First", description: "We embrace new ideas and technologies to stay ahead" },
    { id: 2, title: "Customer Focus", description: "Our clients' success is our top priority" },
    { id: 3, title: "Continuous Growth", description: "We invest in learning and personal development" },
    { id: 4, title: "Excellence", description: "We deliver nothing but the highest quality work" }
  ];

  const benefits = [
    { id: 1, title: "Health & Wellness", description: "Comprehensive health coverage" },
    { id: 2, title: "Flexible Work", description: "Remote and hybrid options" },
    { id: 3, title: "Learning Budget", description: "Annual education allowance" },
    { id: 4, title: "Paid Time Off", description: "Generous vacation policy" }
  ];

  const valueIcons = [Users, Heart, TrendingUp, Award];

  return (
    <GradientWrapper>
      <PageHero
        title="Join Our Team"
        description="Build the future of financial technology with a team of passionate innovators"
        backgroundImage="/ssrfintech_1.jpg"
        primaryCTA={{
          text: "View Open Positions",
          href: "#positions",
        }}
        icon={<Briefcase className="w-10 h-10" />}
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.header}
          >
            <h2 className={styles.sectionTitle}>Our Values</h2>
            <p className={styles.sectionDescription}>
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className={`${styles.grid} ${styles.gridTwoCol}`}>
            {values.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.valueCard}>
                    <div className={styles.valueIcon}>
                      <Icon />
                    </div>
                    <h3 className={styles.valueTitle}>{value.title}</h3>
                    <p className={styles.valueDescription}>{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.section} id="positions">
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.header}
          >
            <h2 className={styles.sectionTitle}>Open Positions</h2>
            <p className={styles.sectionDescription}>
              Explore opportunities to make an impact
            </p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            {jobs.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.positionCard}>
                  <div className={styles.positionHeader}>
                    <div>
                      <h3 className={styles.positionTitle}>{position.title}</h3>
                      <p className={styles.positionDepartment}>{position.department}</p>
                    </div>
                  </div>

                  <div className={styles.positionDetails}>
                    <div className={styles.detailItem}>
                      <MapPin className={styles.detailIcon} />
                      <span>{position.location}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <Briefcase className={styles.detailIcon} />
                      <span>{position.type}</span>
                    </div>
                  </div>

                  <p className={styles.positionDescription}>
                    {position.description}
                  </p>

                  <Link href={`/careers/apply/${position.id}`}>
                    <div className={styles.applyButton}>
                      Apply Now <ArrowRight className={styles.arrow} />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.header}
          >
            <h2 className={styles.sectionTitle} style={{ color: 'white' }}>
              Benefits & Perks
            </h2>
            <p className={styles.sectionDescription} style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              We invest in our team's success and well-being
            </p>
          </motion.div>

          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>
                    <Heart />
                  </div>
                  <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              maxWidth: '56rem',
              margin: '0 auto',
              textAlign: 'center',
              padding: 'var(--space-3xl)',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)'
            }}
          >
            <h2 className={styles.sectionTitle}>Don't See the Right Role?</h2>
            <p className={styles.sectionDescription}>
              We're always looking for talented individuals. Send us your resume and tell us how you can contribute.
            </p>
            <Link href="/contact" style={{ marginTop: 'var(--space-xl)', display: 'inline-block' }}>
              <Button>Get in Touch</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </GradientWrapper>
  );
}
