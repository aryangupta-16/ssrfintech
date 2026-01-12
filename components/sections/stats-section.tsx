"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Section } from "@/components/ui/section";
import { stats } from "@/data/stats";
import { fadeInUp } from "@/lib/animations";

function Counter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const targetValue = parseInt(value.replace(/\D/g, ""));
          const controls = animate(count, targetValue, { duration: 2 });
          return () => controls.stop();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toString();
      }
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <span>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <Section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our track record speaks for itself
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-lg text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
