"use client";

import { motion } from "framer-motion";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CTAButtons } from "@/components/ui/CTAButton";
import { complianceFrameworks, securityPractices, privacyPractices, incidentResponse } from "@/data/compliance";
import { Shield, Lock, ShieldCheck, Code, Eye, Users, GraduationCap, FileCheck, AlertTriangle } from "lucide-react";
import styles from "./trust.module.css";

export default function TrustPage() {
  const iconMap: Record<string, any> = {
    Lock,
    ShieldCheck,
    Code,
    Eye,
    Users,
    GraduationCap,
  };

  return (
    <GradientWrapper className={styles.pageWrapper}>
      <PageHero
        title="Trust & Compliance"
        description="Security and compliance are not checkboxes—they're the foundation of everything we do"
        backgroundImage="/ssrfintech_1.jpg"
        primaryCTA={{
          text: "Request Security Documentation",
          href: "/contact",
        }}
        icon={<Shield className={styles.sectionIconLarge} />}
      />

      {/* Security Practices */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.headerCenter}
          >
            <h2 className={styles.sectionTitle}>Our Security Practices</h2>
            <p className={styles.sectionSubtitle}>
              Enterprise-grade security measures protecting your most sensitive data
            </p>
          </motion.div>

          <div className={`${styles.grid} ${styles.gridThree}`}>
            {securityPractices.map((practice, index) => {
              const Icon = iconMap[practice.icon] || Shield;
              return (
                <motion.div
                  key={practice.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={styles.card}>
                    <CardHeader className={styles.cardHeader}>
                      <div className={styles.iconBadge}>
                        <Icon className={styles.sectionIconLarge} />
                      </div>
                      <CardTitle className={styles.cardTitle}>{practice.title}</CardTitle>
                      <CardDescription className={styles.cardDescription}>
                        {practice.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionOverlay} />
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.headerCenter}
          >
            <FileCheck className={styles.sectionIconLarge} />
            <h2 className={styles.sectionTitle}>Compliance Frameworks</h2>
            <p className={styles.sectionSubtitle}>
              We align with international standards and regulatory requirements
            </p>
          </motion.div>

          <div className={`${styles.grid} ${styles.gridThree}`}>
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={styles.card}>
                  <CardContent className={styles.cardBody}>
                    <div className={styles.iconBadge}>
                      <FileCheck className={styles.cardTitle} />
                    </div>
                    <h3 className={styles.cardTitle}>{framework.name}</h3>
                    <p className={styles.cardDescription}>{framework.description}</p>
                    <div className={styles.tagLabel}>Relevant For</div>
                    <div className={styles.listItem}>
                      {framework.relevantFor.map((item, idx) => (
                        <div key={idx} className={styles.listItem}>
                          • {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Practices */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.headerCenter}
          >
            <h2 className={styles.sectionTitle}>{privacyPractices.title}</h2>
            <p className={styles.sectionSubtitle}>
              Your data privacy is our top priority
            </p>
          </motion.div>

          <div className={`${styles.grid} ${styles.gridTwo}`}>
            {privacyPractices.principles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={styles.card}>
                  <CardContent className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{item.principle}</h3>
                    <p className={styles.cardDescription}>{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className={styles.sectionAlt}>
        <div
          className={styles.sectionOverlay}
          style={{ background: "linear-gradient(135deg, rgba(239,68,68,0.12), rgba(249,115,22,0.12))" }}
        />
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.narrow}
          >
            <Card className={styles.card}>
              <CardHeader className={styles.cardHeader}>
                <div className={styles.rowLg}>
                  <div className={styles.iconBadge}>
                    <AlertTriangle className={styles.sectionIconLarge} />
                  </div>
                  <div>
                    <CardTitle className={styles.sectionTitle}>{incidentResponse.title}</CardTitle>
                    <CardDescription className={styles.cardDescription}>
                      {incidentResponse.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className={styles.cardBody}>
                <div className={`${styles.grid} ${styles.gridTwo}`}>
                  {incidentResponse.process.map((phase, index) => (
                    <div key={index}>
                      <div className={styles.rowStart}>
                        <div className={styles.miniBadge}>
                          <span>{index + 1}</span>
                        </div>
                        <div>
                          <h4 className={styles.cardTitle}>{phase.phase}</h4>
                          <p className={styles.cardDescription}>{phase.description}</p>
                          <div className={styles.tagLabel}>{phase.timeline}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.alertBox}>
                  <div className={styles.rowStart}>
                    <AlertTriangle className={styles.sectionIconLarge} />
                    <div>
                      <div className={styles.alertTitle}>24/7 Security Hotline</div>
                      <div className={styles.alertText}>
                        In case of security concerns, contact our dedicated security team immediately. Response within 15 minutes for critical incidents.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* NDA Culture */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.headerCenter}
          >
            <Lock className={styles.sectionIconLarge} />
            <h2 className={styles.sectionTitle}>NDA & Confidentiality Culture</h2>
            <p className={styles.sectionSubtitle}>
              Every team member signs comprehensive NDAs before accessing client data. We maintain strict information barriers between clients and projects.
            </p>
            <p className={styles.cardDescription}>
              Your intellectual property, business strategies, and sensitive data remain strictly confidential. We can provide custom NDAs tailored to your specific requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.headerCenter}
          >
            <h2 className={styles.sectionTitle}>Need More Information?</h2>
            <p className={styles.sectionSubtitle}>
              Request our comprehensive security documentation or speak with our compliance team
            </p>
            <div className={styles.ctaButtons}>
              <CTAButtons.TalkToExpert />
              <CTAButtons.GetAssessment variant="secondary" />
            </div>
          </motion.div>
        </div>
      </section>
    </GradientWrapper>
  );
}
