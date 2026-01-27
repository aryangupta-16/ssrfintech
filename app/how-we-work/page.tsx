"use client";

import { motion } from "framer-motion";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/button";
import { engagementModels, communicationModel } from "@/data/engagementModels";
import { CheckCircle2, Clock, DollarSign, Target, Users, TrendingUp, MessageSquare, Calendar } from "lucide-react";
import Link from "next/link";
import styles from "./howWeWork.module.css";

export default function HowWeWorkPage() {
  const modelIcons = [Target, Users, TrendingUp];

  const successMetrics = [
    {
      metric: "On-Time Delivery",
      value: "95%",
      description: "Projects delivered on schedule",
    },
    {
      metric: "Client Satisfaction",
      value: "4.8/5",
      description: "Average client rating",
    },
    {
      metric: "Budget Adherence",
      value: "98%",
      description: "Projects within budget",
    },
    {
      metric: "Long-term Partnerships",
      value: "85%",
      description: "Clients return for more projects",
    },
  ];

  return (
    <GradientWrapper>
      <PageHero
        title="How We Work With You"
        description="Flexible engagement models designed to match your needs, timeline, and budget"
        backgroundImage="/ssrfintech_3.jpg"
        primaryCTA={{
          text: "Discuss Your Project",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "View Our Process",
          href: "/#how-we-work",
        }}
        icon={<Users className="w-10 h-10" />}
      />

      {/* Engagement Models */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.header}
          >
            <h2 className={styles.sectionTitle}>Choose Your Engagement Model</h2>
            <p className={styles.sectionDescription}>
              Every organization is unique. We offer flexible engagement options to match your specific needs.
            </p>
          </motion.div>

          <div className={`${styles.grid} ${styles.gridThreeCol}`}>
            {engagementModels.map((model, index) => {
              const Icon = modelIcons[index];
              return (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.modelCard}>
                    <div className={styles.modelIconContainer}>
                      <Icon className={styles.modelIcon} />
                    </div>
                    <h3 className={styles.modelTitle}>{model.title}</h3>
                    <p className={styles.modelDescription}>{model.description}</p>

                    {/* Pricing */}
                    <div className={styles.infoBox}>
                      <div className={styles.infoBoxHeader}>
                        <DollarSign className={styles.infoBoxIcon} />
                        <span>Pricing</span>
                      </div>
                      <p className={styles.infoBoxContent}>{model.pricing}</p>
                    </div>

                    {/* Duration */}
                    <div className={styles.infoBox}>
                      <div className={styles.infoBoxHeader}>
                        <Clock className={styles.infoBoxIcon} />
                        <span>Typical Duration</span>
                      </div>
                      <p className={styles.infoBoxContent}>{model.typicalDuration}</p>
                    </div>

                    {/* Best For */}
                    <div>
                      <h4 className={styles.checklistTitle}>Best For:</h4>
                      <div className={styles.checklist}>
                        {model.bestFor.map((item, idx) => (
                          <div key={idx} className={styles.checklistItem}>
                            <CheckCircle2 className={styles.checklistIcon} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* What You Get */}
                    <div>
                      <h4 className={styles.checklistTitle}>What You Get:</h4>
                      <div className={styles.checklist}>
                        {model.whatYouGet.map((item, idx) => (
                          <div key={idx} className={styles.checklistItem}>
                            <CheckCircle2 className={styles.checklistIcon} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Communication Model */}
      <section className={styles.communicationSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.header}
          >
            <MessageSquare className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>{communicationModel.title}</h2>
            <p className={styles.sectionDescription}>{communicationModel.description}</p>
          </motion.div>

          <div className={`${styles.grid} ${styles.gridFourCol}`}>
            {communicationModel.channels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.channelCard}>
                  <Calendar className={styles.channelIcon} />
                  <h3 className={styles.channelTitle}>{channel.method}</h3>
                  <p className={styles.channelFrequency}>{channel.frequency}</p>
                  <p className={styles.channelFormat}>{channel.format}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.header}
          >
            <h2 className={styles.sectionTitle}>How We Measure Success</h2>
            <p className={styles.sectionDescription}>Clear metrics and transparent reporting</p>
          </motion.div>

          <div className={`${styles.grid} ${styles.gridFourCol}`}>
            {successMetrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.metricCard}>
                  <div className={styles.metricValue}>{item.value}</div>
                  <h4 className={styles.metricTitle}>{item.metric}</h4>
                  <p className={styles.metricDescription}>{item.description}</p>
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
            className={styles.ctaSection}
          >
            <h2 className={styles.sectionTitle}>Not Sure Which Model Fits?</h2>
            <p className={styles.sectionDescription}>
              Let's discuss your needs and recommend the best approach
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact"><Button>Schedule a Call</Button></Link>
              <Link href="/contact"><Button variant="secondary">Talk to Expert</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </GradientWrapper>
  );
}
