"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Container from "@/components/ui/Container";

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
    <section className="py-24 gradient-dark relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse-glow animation-delay-2000" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Delivering exceptional results that drive business transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl" />
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
