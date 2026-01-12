"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, slideInFromLeft, slideInFromRight } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Trusted by Leading Financial Institutions</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                Financial Future
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Empowering financial institutions with cutting-edge technology solutions,
              expert consulting, and innovation-driven strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/contact">
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline">
                  View Case Studies
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto lg:mx-0"
            >
              <div>
                <div className="text-3xl font-bold text-gray-900">12+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">200+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromRight}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* Floating Cards Animation */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-64 h-40 bg-white rounded-2xl shadow-2xl p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-green-600 rounded-full border-t-transparent animate-spin" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Real-time Processing
                    </div>
                    <div className="text-xs text-gray-500">Active</div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">99.99%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute bottom-0 left-0 w-64 h-40 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-2xl p-6 text-white"
              >
                <div className="text-sm font-medium mb-2">Total Transactions</div>
                <div className="text-4xl font-bold mb-1">$2.5M</div>
                <div className="text-sm opacity-90">+125% from last month</div>
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
