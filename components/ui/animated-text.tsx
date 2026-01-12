"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedText({ children, className = "", delay = 0 }: AnimatedTextProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}
