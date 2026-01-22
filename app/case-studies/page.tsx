"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { caseStudies } from "@/data/caseStudies";
import { AlertTriangle, Award, ArrowRight, Lightbulb } from "lucide-react";

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
      <section className="relative py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--color-accent)]/20 blur-3xl" />
          <div className="absolute -left-10 bottom-10 h-72 w-72 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <span className="inline-flex items-center rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-5 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">
                Case Study Gallery
              </span>
              <h2 className="text-4xl font-bold text-white sm:text-5xl">
                Signature Projects Across Industries
              </h2>
              <p className="text-xl text-white/80">
                A snapshot of how we elevate workforce planning and analytics with SAP Analytics Cloud for global pioneers.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mt-16 space-y-10"
          >
            {caseStudies.map((caseStudy, index) => {
              const accent = caseStudy.accentColor ?? "#6366F1";
              return (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm hover:border-[var(--color-accent)]/50 transition-all p-8 shadow-lg"
                >
                  <div className="relative flex flex-col gap-8 lg:flex-row lg:items-stretch">
                    <div
                      className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full opacity-50 blur-3xl transition duration-500 group-hover:opacity-70"
                      style={{ background: `radial-gradient(circle at center, ${accent}55 0%, transparent 60%)` }}
                    />
                    <div
                      className="pointer-events-none absolute -left-24 bottom-[-40px] h-64 w-64 rounded-full opacity-40 blur-3xl transition duration-500 group-hover:opacity-60"
                      style={{ background: `radial-gradient(circle at center, ${accent}33 0%, transparent 60%)` }}
                    />

                    <div className="relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-br from-[var(--color-primary)]/80 to-slate-900/80 p-6 lg:w-2/5">
                      <div
                        className="pointer-events-none absolute inset-0 opacity-40"
                        style={{ background: `linear-gradient(135deg, ${accent}20 0%, transparent 70%)` }}
                      />
                      <div className="relative z-10 space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="flex h-24 w-24 items-center justify-center rounded-2xl p-2">
                            <Image
                              src={caseStudy.logo ?? "/placeholders/logo-placeholder.svg"}
                              alt={`${caseStudy.client} logo`}
                              width={96}
                              height={96}
                              className="h-full w-full object-contain"
                            />
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70 !text-white/70">
                              {caseStudy.industry}
                            </p>
                            <h3 className="text-xl font-semibold text-white !text-white">
                              {caseStudy.client}
                            </h3>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-[var(--color-accent)] !text-[var(--color-accent)]">
                            Case Focus
                          </span>
                          <h4 className="text-2xl font-semibold text-white !text-white lg:text-3xl">
                            {caseStudy.title}
                          </h4>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex flex-1 flex-col gap-6 rounded-2xl border border-slate-700 bg-slate-800/30 p-6 text-white/80 backdrop-blur transition duration-300 group-hover:border-[var(--color-accent)]/50 lg:flex-row lg:items-start lg:gap-12">
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-2 text-white">
                          <AlertTriangle className="h-5 w-5 text-[var(--color-accent)]" />
                          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Challenges</span>
                        </div>
                        <ul className="space-y-2 text-sm text-white/90">
                          {caseStudy.challengeHighlights.slice(0, 3).map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                              <span className="text-white/90">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-2 text-white">
                          <Lightbulb className="h-5 w-5 text-[var(--color-accent)]" />
                          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Solution</span>
                        </div>
                        <ul className="space-y-2 text-sm text-white/90">
                          {caseStudy.solutionHighlights.slice(0, 3).map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                              <span className="text-white/90">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 self-start rounded-full bg-[var(--color-accent)] hover:bg-[var(--link-hover)] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 shadow-lg"
                      >
                        Talk to us
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto rounded-2xl border border-[var(--color-accent)]/20 bg-gradient-to-br from-[var(--color-primary)]/90 to-slate-900/90 p-12 text-center backdrop-blur-sm"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Share your challenge and we'll craft a tailored solution playbook.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] hover:bg-[var(--link-hover)] px-8 py-3 text-base font-semibold text-white transition-all duration-300 shadow-lg"
            >
              Start Your Project
              <ArrowRight className="h-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </GradientWrapper>
  );
}
