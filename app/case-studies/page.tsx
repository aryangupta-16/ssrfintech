"use client";

import { motion } from "framer-motion";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { PageHero } from "@/components/sections/PageHero";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/data/caseStudies";
import { ArrowRight, CheckCircle2, Award } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function CaseStudiesPage() {
  return (
    <GradientWrapper className="pt-20">
      <PageHero
        title="Case Studies"
        description="Real results for real clients - see how we've transformed businesses"
        backgroundImage="/ssrfintech_1.jpg"
        primaryCTA={{
          text: "Start Your Project",
          href: "/contact",
        }}
        icon={<Award className="w-10 h-10" />}
      />

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 max-w-6xl mx-auto">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-purple-500/50 transition-all">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="lg:order-1 bg-gradient-to-br from-purple-600 to-pink-600 p-8 lg:p-12 text-white flex items-center">
                      <div>
                        <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                          {caseStudy.industry}
                        </div>
                        <h2 className="text-3xl font-bold mb-4">{caseStudy.title}</h2>
                        <p className="text-pink-100 mb-6">
                          Client: {caseStudy.client}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-white/10 rounded-full text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:order-2 p-8 lg:p-12">
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-white mb-3">
                          The Challenge
                        </h3>
                        <p className="text-gray-300">{caseStudy.challenge}</p>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-white mb-3">
                          Our Solution
                        </h3>
                        <p className="text-gray-300">{caseStudy.solution}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                          Key Results
                        </h3>
                        <ul className="space-y-2">
                          {caseStudy.results.map((result, idx) => (
                            <li key={idx} className="flex items-start text-gray-300">
                              <CheckCircle2 className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/20 rounded-2xl p-12 backdrop-blur-sm"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help you achieve similar results
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </GradientWrapper>
  );
}
