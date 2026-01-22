"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import styles from "./StatsPremium.module.css";

const stats = [
  { value: 15, label: "Years of Excellence", suffix: "+" },
  { value: 200, label: "Projects Delivered", suffix: "+" },
  { value: 120, label: "Expert Consultants", suffix: "+" },
  { value: 99.3, label: "Client Satisfaction", suffix: "%" },
];

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsPremium() {
  return (
    <section className={styles.stats}>
      {/* Animated Background Elements */}
      <div className={styles.background}>
        <div className={`${styles.glowOrb} ${styles.orb1}`} />
        <div className={`${styles.glowOrb} ${styles.orb2}`} />
      </div>

      <Container className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            Trusted by Industry Leaders
          </h2>
          <p className={styles.subtitle}>
            Delivering exceptional results that drive business transformation
          </p>
        </motion.div>

        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.statItem}
            >
              <div className={styles.cardGlow} />
              <div className={styles.card}>
                <span className={styles.statValue}>
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </span>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
