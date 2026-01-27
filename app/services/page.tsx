"use client";

import { motion } from "framer-motion";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { services } from "@/data/services";
import { ArrowRight, CheckCircle2, Code2 } from "lucide-react";
import Link from "next/link";
import styles from "./services.module.css";

export default function ServicesPage() {
  const consultingServices = services.filter(s => 
    s.slug.includes('consulting') || s.slug.includes('erp')
  );
  const technologyServices = services.filter(s => 
    s.slug.includes('cloud') || s.slug.includes('software') || s.slug.includes('data')
  );
  const securityServices = services.filter(s => 
    s.slug.includes('cybersecurity')
  );

  return (
    <GradientWrapper>
      <PageHero
        title="Our Services"
        description="Comprehensive financial technology solutions designed to transform your business"
        backgroundImage="/ssrfintech_3.jpg"
        primaryCTA={{
          text: "Get a Free Assessment",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "View Case Studies",
          href: "/case-studies",
        }}
        icon={<Code2 className="w-10 h-10" />}
      />

      <section className={styles.section}>
        <div className={styles.container}>
          {/* Consulting Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.categorySection}
          >
            <div className={styles.header}>
              <h2 className={styles.categoryTitle}>Consulting Services</h2>
              <p className={styles.categoryDescription}>
                Strategic guidance from experienced financial technology experts
              </p>
            </div>

            <div className={`${styles.grid} ${styles.gridTwoCol}`}>
              {consultingServices.map((service, index) => (
                <motion.div key={service.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Link href={`/services/${service.slug}`}>
                    <div className={styles.card}>
                      <div className={styles.iconContainer}>
                        <Code2 className={styles.icon} />
                      </div>
                      <h3 className={styles.cardTitle}>{service.title}</h3>
                      <p className={styles.cardDescription}>{service.description}</p>
                      <div className={styles.features}>
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className={styles.feature}>
                            <CheckCircle2 className={styles.featureIcon} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className={styles.learnMore}>
                        Learn More <ArrowRight className={styles.arrow} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technology Services */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={styles.categorySection}>
            <div className={styles.header}>
              <h2 className={styles.categoryTitle}>Technology Services</h2>
              <p className={styles.categoryDescription}>
                Cutting-edge technical solutions for modern financial institutions
              </p>
            </div>

            <div className={`${styles.grid} ${styles.gridThreeCol}`}>
              {technologyServices.map((service, index) => (
                <motion.div key={service.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Link href={`/services/${service.slug}`}>
                    <div className={styles.card}>
                      <div className={styles.iconContainer}>
                        <Code2 className={styles.icon} />
                      </div>
                      <h3 className={styles.cardTitle}>{service.title}</h3>
                      <p className={styles.cardDescription}>{service.description}</p>
                      <div className={styles.features}>
                        {service.features.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className={styles.feature}>
                            <CheckCircle2 className={styles.featureIcon} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className={styles.learnMore}>
                        Explore <ArrowRight className={styles.arrow} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Security Services */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={styles.categorySection}>
            <div className={styles.header}>
              <h2 className={styles.categoryTitle}>Security Services</h2>
              <p className={styles.categoryDescription}>Fortress-level protection for your financial data</p>
            </div>

            <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
              {securityServices.map((service) => (
                <Link key={service.id} href={`/services/${service.slug}`}>
                  <div className={styles.card} style={{ marginBottom: 'var(--space-lg)', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'var(--space-xl)', padding: 'var(--space-xl)' }}>
                    <div className={styles.iconContainer} style={{ width: '5rem', height: '5rem', margin: 0 }}>
                      <Code2 className={styles.icon} style={{ width: '2.5rem', height: '2.5rem' }} />
                    </div>
                    <div>
                      <h3 className={styles.cardTitle}>{service.title}</h3>
                      <p className={styles.cardDescription}>{service.description}</p>
                      <div className={styles.features} style={{ marginBottom: 'var(--space-lg)' }}>
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className={styles.feature}>
                            <CheckCircle2 className={styles.featureIcon} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className={styles.learnMore}>
                        Secure Your Business <ArrowRight className={styles.arrow} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </GradientWrapper>
  );
}
