"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import styles from "./TestimonialsPremium.module.css";

export default function TestimonialsPremium() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className={styles.testimonials}>
      {/* Background Decoration */}
      <div className={styles.decorTop} />
      <div className={styles.decorBottom} />

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            Client <span className={styles.titleAccent}>Success Stories</span>
          </h2>
          <p className={styles.description}>
            Hear from clients who transformed their business with our solutions
          </p>
        </motion.div>

        <div className={styles.carouselWrapper}>
          <div className={styles.carousel}>
            {/* Testimonial Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className={styles.testimonialCard}
              >
                {/* Quote Icon */}
                <div className={styles.quoteIcon}>
                  <Quote className={styles.quote} />
                </div>

                {/* Rating */}
                <div className={styles.rating}>
                  {[...Array(current.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className={styles.star}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className={styles.content}>
                  "{current.content}"
                </p>

                {/* Author */}
                <div className={styles.author}>
                  <div className={styles.authorName}>
                    {current.name}
                  </div>
                  <div className={styles.authorRole}>
                    {current.role} at {current.company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className={styles.navigation}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={previous}
                className={styles.navButton}
              >
                <ChevronLeft className={styles.navIcon} />
              </motion.button>

              {/* Dots Indicator */}
              <div className={styles.dots}>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={index === currentIndex ? styles.dotActive : styles.dot}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className={styles.navButton}
              >
                <ChevronRight className={styles.navIcon} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
