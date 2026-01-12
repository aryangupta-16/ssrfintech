"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import { testimonials } from "@/data/testimonials";

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
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-100 rounded-full blur-3xl opacity-30" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from clients who transformed their business with our solutions
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-premium-lg p-12 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-8 left-8 w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-8 mt-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-2xl text-gray-700 text-center mb-8 leading-relaxed">
                  "{current.content}"
                </p>

                {/* Author */}
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900">
                    {current.name}
                  </div>
                  <div className="text-gray-600">
                    {current.role} at {current.company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={previous}
                className="w-12 h-12 rounded-full gradient-primary text-white flex items-center justify-center shadow-lg hover:shadow-glow transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 gradient-primary"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className="w-12 h-12 rounded-full gradient-primary text-white flex items-center justify-center shadow-lg hover:shadow-glow transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
