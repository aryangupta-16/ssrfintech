"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  TrendingUp,
  Layers,
  BarChart3,
  Zap,
  Rocket,
  Settings,
  Shield,
  ArrowRight,
} from "lucide-react";
import { services as servicesData } from "@/data/services";
import styles from "./ServicesPremium.module.css";

const iconMap: Record<string, any> = {
  TrendingUp,
  Layers,
  BarChart3,
  Zap,
  Rocket,
  Settings,
  Shield,
};

export default function ServicesPremium() {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            Our <span className={styles.titleAccent}>Premium Services</span>
          </h2>
          <p className={styles.description}>
            Comprehensive fintech solutions designed to accelerate your digital
            transformation journey
          </p>
        </motion.div>

        <div className={styles.grid}>
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Settings;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/services/${service.slug}`} className={styles.card}>
                  <div className={styles.iconContainer}>
                    <Icon className={styles.icon} />
                  </div>

                  <h3 className={styles.cardTitle}>
                    {service.title}
                  </h3>
                  <p className={styles.cardDescription}>{service.description}</p>

                  <div className={styles.learnMore}>
                    Learn More
                    <ArrowRight className={styles.arrow} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className={styles.footer}
        >
          <Link href="/services" className={styles.viewAll}>
            View All Services
            <ArrowRight className={styles.arrow} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
