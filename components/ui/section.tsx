"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface SectionProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}

export function Section({ children, className = "", stagger = false }: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={stagger ? staggerContainer : fadeInUp}
      className={className}
    >
      {children}
    </motion.section>
  );
}
