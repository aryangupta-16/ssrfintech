"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Landmark,
  Settings,
  Cloud,
  BarChart3,
  Shield,
  Code,
  ArrowRight,
} from "lucide-react";
import styles from "./ServicesPremium.module.css";

const iconMap: Record<string, any> = {
  Landmark,
  Settings,
  Cloud,
  BarChart3,
  Shield,
  Code,
};

const services = [
  {
    id: "1",
    title: "Financial Technology Consulting",
    description:
      "Transform your financial operations with cutting-edge technology solutions.",
    icon: "Landmark",
    link: "/services/financial-technology-consulting",
  },
  {
    id: "2",
    title: "ERP Implementation",
    description:
      "Streamline business processes with enterprise resource planning solutions.",
    icon: "Settings",
    link: "/services/erp-implementation-support",
  },
  {
    id: "3",
    title: "Cloud Solutions",
    description:
      "Leverage cloud technology to scale your infrastructure securely.",
    icon: "Cloud",
    link: "/services/cloud-solutions-migration",
  },
  {
    id: "4",
    title: "Data Analytics & BI",
    description:
      "Unlock actionable insights with advanced analytics and intelligence.",
    icon: "BarChart3",
    link: "/services/data-analytics-business-intelligence",
  },
  {
    id: "5",
    title: "Cybersecurity",
    description:
      "Protect your assets with comprehensive security solutions.",
    icon: "Shield",
    link: "/services/cybersecurity-services",
  },
  {
    id: "6",
    title: "Custom Development",
    description:
      "Build bespoke financial applications for your unique needs.",
    icon: "Code",
    link: "/services/custom-software-development",
  },
];

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
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.link} className={styles.card}>
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
