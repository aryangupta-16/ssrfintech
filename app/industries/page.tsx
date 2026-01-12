"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CTAButtons } from "@/components/ui/CTAButton";
import { industries } from "@/data/industries";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import { colors, components, typography, spacing } from "@/lib/design-tokens";

export default function IndustriesPage() {
  // Industry images mapping
  const industryImages = [
    "/ssrfintech_1.jpg",
    "/ssrfintech_2.jpg", 
    "/ssrfintech_3.jpg",
    "/ssrfintech_1.jpg",
    "/ssrfintech_2.jpg",
    "/ssrfintech_3.jpg"
  ];

  return (
    <GradientWrapper className="pt-20">
      <PageHero
        title="Industries We Serve"
        description="Deep domain expertise across financial services sectors, delivering tailored solutions that address your unique challenges"
        backgroundImage="/ssrfintech_1.jpg"
        primaryCTA={{
          text: "Discuss Your Industry Needs",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "View Case Studies",
          href: "/case-studies",
        }}
        icon={<Building2 className="w-10 h-10" />}
      />

      {/* Industries Grid */}
      <section className={spacing.section}>
        <div className={spacing.container}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/industries/${industry.slug}`}>
                  <Card className={`${components.card} h-full hover:scale-105 transition-all duration-300 group overflow-hidden`}>
                    {/* Image Header */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={industryImages[index]}
                        alt={industry.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600/80 to-purple-600/80 backdrop-blur-sm flex items-center justify-center text-white font-bold text-lg border border-white/20">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className={`${typography.h5} ${colors.heading} mb-2 group-hover:text-indigo-400 transition-colors`}>
                        {industry.title}
                      </CardTitle>
                      <CardDescription className={colors.subheading}>
                        {industry.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      {/* Challenges Preview */}
                      <div className="mb-6">
                        <div className="text-sm font-semibold text-indigo-400 mb-3">
                          Key Challenges We Solve:
                        </div>
                        <div className="space-y-2">
                          {industry.challenges.slice(0, 3).map((challenge, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                              <span className="line-clamp-1">{challenge}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/50 to-indigo-500/0 mb-4" />

                      {/* CTA */}
                      <div className="flex items-center text-indigo-400 font-semibold group-hover:translate-x-2 transition-transform">
                        Explore Solutions
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`${spacing.section} relative`}>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10" />
        <div className={`${spacing.container} relative z-10`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`${typography.h2} ${colors.heading} mb-4`}>
              Proven Track Record
            </h2>
            <p className={`${typography.bodyXl} ${colors.subheading}`}>
              Delivering measurable results across industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Years of Industry Experience" },
              { value: "200+", label: "Financial Institutions Served" },
              { value: "$50B+", label: "Assets Under Management Protected" },
              { value: "99.9%", label: "System Uptime Guaranteed" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`${typography.h2} bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className={`${typography.body} ${colors.subheading}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={spacing.section}>
        <div className={spacing.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className={`${typography.h2} ${colors.heading} mb-4`}>
              Don't See Your Industry?
            </h2>
            <p className={`${typography.bodyXl} ${colors.subheading} mb-8`}>
              We specialize in financial services but serve many adjacent sectors. Let's discuss your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CTAButtons.TalkToExpert />
              <CTAButtons.BookStrategyCall variant="secondary" />
            </div>
          </motion.div>
        </div>
      </section>
    </GradientWrapper>
  );
}
