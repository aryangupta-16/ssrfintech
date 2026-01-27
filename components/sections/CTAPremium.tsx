"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle, Shield } from "lucide-react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import styles from "./CTAPremium.module.css";

export default function CTAPremium() {
  return (
    <section className={styles.cta}>
      {/* Animated Gradient Background */}
      <div className={styles.background}>
        <div className={styles.backgroundMesh} />
        <div className={`${styles.decorativeCircle} ${styles.circle1}`} />
        <div className={`${styles.decorativeCircle} ${styles.circle2}`} />
      </div>

      <Container className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={styles.badge}
          >
            <Sparkles className={styles.badgeIcon} />
            <span className={styles.badgeText}>
              Ready to Transform Your Business?
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={styles.heading}
          >
            Let's Build Something{" "}
            <span className={styles.headingGradient}>
              Extraordinary
            </span>{" "}
            Together
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className={styles.description}
          >
            Join hundreds of satisfied clients who trust SSR Fintech for their
            digital transformation journey. Get started today and experience the
            difference.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className={styles.buttonContainer}
          >
            <Link href="/contact">
              <Button size="xl" variant="gradient">
                Talk to a Fintech Expert
                <ArrowRight className={styles.arrowIcon} />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button
                size="xl"
                variant="outline"
                className={styles.outlineButton}
              >
                View Success Stories
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className={styles.trustIndicators}
          >
            <div className={styles.trustItem}>
              <CheckCircle className={styles.trustIcon} />
              <span>ISO 27001 Certified</span>
            </div>
            <div className={styles.trustItem}>
              <Shield className={styles.trustIcon} />
              <span>SOC 2 Compliant</span>
            </div>
            <div className={styles.trustItem}>
              <CheckCircle className={styles.trustIcon} />
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
