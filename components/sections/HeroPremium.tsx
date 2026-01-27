"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import styles from "./HeroPremium.module.css";
import { useState, useRef, useEffect } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkDarkMode = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(theme === "dark" || (!theme && prefersDark));
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setMousePosition({ x, y });
  };

  const gradientX = mousePosition.x * 100;
  const gradientY = mousePosition.y * 100;

  const lightGradient = `
    radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(29, 181, 163, 0.35) 0%, rgba(29, 181, 163, 0.1) 30%, transparent 60%),
    linear-gradient(135deg, white 0%, #f8fafc 50%, #f1f5f9 100%)
  `;

  const darkGradient = `
    radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(29, 181, 163, 0.4) 0%, rgba(29, 181, 163, 0.15) 30%, transparent 60%),
    linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)
  `;

  return (
    <section 
      className={styles.hero}
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      style={{
        background: isDark ? darkGradient : lightGradient
      } as any}
    >
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
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{ opacity: 1, y: [0, -10, 0] }}
                  transition={{ 
                    opacity: { duration: 0.6, delay: 0.1 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.1 },
                    scale: { duration: 0.4 }
                  }}
                >
                  <div className={styles.featureIcon}>
                    <Shield size={24} />
                  </div>
                  <div className={styles.featureTitle}>Secure</div>
                  <div className={styles.featureText}>Bank-grade security</div>
                </motion.div>

                <motion.div 
                  className={styles.featureCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{ opacity: 1, y: [0, 10, 0] }}
                  transition={{ 
                    opacity: { duration: 0.6, delay: 0.2 },
                    y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                    scale: { duration: 0.4 }
                  }}
                >
                  <div className={styles.featureIcon}>
                    <Zap size={24} />
                  </div>
                  <div className={styles.featureTitle}>Fast</div>
                  <div className={styles.featureText}>Lightning deployment</div>
                </motion.div>

                <motion.div 
                  className={styles.featureCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{ opacity: 1, y: [0, -10, 0] }}
                  transition={{ 
                    opacity: { duration: 0.6, delay: 0.3 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
                    scale: { duration: 0.4 }
                  }}
                >
                  <div className={styles.featureIcon}>
                    <TrendingUp size={24} />
                  </div>
                  <div className={styles.featureTitle}>Scalable</div>
                  <div className={styles.featureText}>Growth-ready</div>
                </motion.div>

                <motion.div 
                  className={styles.featureCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{ opacity: 1, y: [0, 10, 0] }}
                  transition={{ 
                    opacity: { duration: 0.6, delay: 0.4 },
                    y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
                    scale: { duration: 0.4 }
                  }}
                >
                  <div className={styles.featureIcon}>
                    <Sparkles size={24} />
                  </div>
                  <div className={styles.featureTitle}>Innovative</div>
                  <div className={styles.featureText}>Cutting-edge tech</div>
                </motion.div>
              </div>
            </div>
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
