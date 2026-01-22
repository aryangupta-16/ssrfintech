"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import styles from "./HeroPremium.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Animated Background */}
      <div className={styles.backgroundBlobs}>
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />
      </div>

      <Container className={styles.content}>
        <div className={styles.grid}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.textContent}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className={styles.badge}
            >
              <Sparkles className={styles.badgeIcon} />
              <span className={styles.badgeText}>
                Leading Fintech Solutions Provider
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className={styles.title}
            >
              Transform Your{" "}
              <span className={styles.titleAccent}>Financial Future</span> with
              Technology
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={styles.description}
            >
              Empowering financial institutions with innovative technology
              solutions, cutting-edge security, and seamless digital
              transformation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className={styles.buttonContainer}
            >
              <Link href="/contact">
                <Button size="xl" variant="gradient">
                  Get Started
                  <ArrowRight className={styles.arrowIcon} />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="xl" variant="outline">
                  Explore Services
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className={styles.stats}
            >
              {[
                { value: "15+", label: "Years" },
                { value: "200+", label: "Projects" },
                { value: "99.3%", label: "Satisfaction" },
              ].map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.visualContent}
          >
            <div className={styles.heroImage}>
              <div className={styles.imageGrid}>
                <motion.div 
                  className={styles.featureCard}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.featureIcon}>
                    <Shield size={24} />
                  </div>
                  <div className={styles.featureTitle}>Secure</div>
                  <div className={styles.featureText}>Bank-grade security</div>
                </motion.div>

                <motion.div 
                  className={styles.featureCard}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.featureIcon}>
                    <Zap size={24} />
                  </div>
                  <div className={styles.featureTitle}>Fast</div>
                  <div className={styles.featureText}>Lightning deployment</div>
                </motion.div>

                <motion.div 
                  className={styles.featureCard}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.featureIcon}>
                    <TrendingUp size={24} />
                  </div>
                  <div className={styles.featureTitle}>Scalable</div>
                  <div className={styles.featureText}>Growth-ready</div>
                </motion.div>

                <motion.div 
                  className={styles.featureCard}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.featureIcon}>
                    <Sparkles size={24} />
                  </div>
                  <div className={styles.featureTitle}>Innovative</div>
                  <div className={styles.featureText}>Cutting-edge tech</div>
                </motion.div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={`${styles.floatingElement} ${styles.floatingElement1}`}
            >
              <div className={styles.floatingCard}>
                <div className={styles.floatingIcon}>
                  $
                </div>
                <div className={styles.floatingContent}>
                  <h4>Cost Savings</h4>
                  <p>Up to 40% reduction</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className={`${styles.floatingElement} ${styles.floatingElement2}`}
            >
              <div className={styles.floatingCard}>
                <div className={styles.floatingIcon}>
                  %
                </div>
                <div className={styles.floatingContent}>
                  <h4>Success Rate</h4>
                  <p>99.3% satisfaction</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            width: '24px',
            height: '40px',
            border: '2px solid rgba(11, 37, 69, 0.5)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '8px',
          }}
        >
          <motion.div
            style={{
              width: '4px',
              height: '8px',
              backgroundColor: 'var(--color-primary)',
              borderRadius: '2px',
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
