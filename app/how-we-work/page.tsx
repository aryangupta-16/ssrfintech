"use client";

import { motion } from "framer-motion";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CTAButtons } from "@/components/ui/CTAButton";
import { engagementModels, communicationModel } from "@/data/engagementModels";
import { CheckCircle2, Clock, DollarSign, Target, Users, MessageSquare, Calendar, TrendingUp } from "lucide-react";
import { colors, components, typography, spacing } from "@/lib/design-tokens";

export default function HowWeWorkPage() {
  const modelIcons = [Target, Users, TrendingUp];

  return (
    <GradientWrapper className="pt-20">
      <PageHero
        title="How We Work With You"
        description="Flexible engagement models designed to match your needs, timeline, and budget"
        backgroundImage="/ssrfintech_3.jpg"
        primaryCTA={{
          text: "Discuss Your Project",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "View Our Process",
          href: "/#how-we-work",
        }}
        icon={<Users className="w-10 h-10" />}
      />

      {/* Engagement Models */}
      <section className={spacing.section}>
        <div className={spacing.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`${typography.h2} ${colors.heading} mb-4`}>
              Choose Your Engagement Model
            </h2>
            <p className={`${typography.bodyXl} ${colors.subheading}`}>
              Every organization is unique. We offer flexible engagement options to match your specific needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => {
              const Icon = modelIcons[index];
              return (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`${components.card} h-full hover:scale-105 transition-all duration-300 group`}>
                    <CardHeader>
                      <div className="w-16 h-16 rounded-xl icon-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className={`${typography.h4} ${colors.heading} mb-2`}>
                        {model.title}
                      </CardTitle>
                      <CardDescription className={colors.subheading}>
                        {model.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Pricing */}
                      <div className="p-4 rounded-lg bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20">
                        <div className="flex items-start gap-3">
                          <DollarSign className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="text-sm font-semibold text-[var(--color-accent)] mb-1">
                              Pricing
                            </div>
                            <div className="text-sm text-[var(--text-primary)]">
                              {model.pricing}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Duration */}
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-semibold text-[var(--color-primary)] mb-1">
                            Typical Duration
                          </div>
                          <div className="text-sm text-[var(--text-primary)]">
                            {model.typicalDuration}
                          </div>
                        </div>
                      </div>

                      {/* Best For */}
                      <div>
                        <div className="text-sm font-semibold text-[var(--text-primary)] mb-3">
                          Best For:
                        </div>
                        <div className="space-y-2">
                          {model.bestFor.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                              <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* What You Get */}
                      <div>
                        <div className="text-sm font-semibold text-[var(--text-primary)] mb-3">
                          What You Get:
                        </div>
                        <div className="space-y-2">
                          {model.whatYouGet.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                              <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Communication Model */}
      <section className={`${spacing.section} relative`}>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10" />
        <div className={`${spacing.container} relative z-10`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <MessageSquare className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
            <h2 className={`${typography.h2} ${colors.heading} mb-4`}>
              {communicationModel.title}
            </h2>
            <p className={`${typography.bodyXl} ${colors.subheading}`}>
              {communicationModel.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {communicationModel.channels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={components.card}>
                  <CardContent className="p-6">
                    <Calendar className="w-8 h-8 text-indigo-400 mb-4" />
                    <h3 className={`${typography.h6} ${colors.heading} mb-2`}>
                      {channel.method}
                    </h3>
                    <div className="text-sm text-indigo-400 mb-2">
                      {channel.frequency}
                    </div>
                    <div className="text-xs text-gray-400">
                      {channel.format}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className={spacing.section}>
        <div className={spacing.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`${typography.h2} ${colors.heading} mb-4`}>
              How We Measure Success
            </h2>
            <p className={`${typography.bodyXl} ${colors.subheading}`}>
              Clear metrics and transparent reporting
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: "On-Time Delivery",
                value: "95%",
                description: "Projects delivered on schedule",
              },
              {
                metric: "Client Satisfaction",
                value: "4.8/5",
                description: "Average client rating",
              },
              {
                metric: "Budget Adherence",
                value: "98%",
                description: "Projects within budget",
              },
              {
                metric: "Long-term Partnerships",
                value: "85%",
                description: "Clients return for more projects",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`${typography.h2} bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2`}>
                  {item.value}
                </div>
                <div className={`${typography.h6} ${colors.heading} mb-2`}>
                  {item.metric}
                </div>
                <div className="text-sm text-gray-400">
                  {item.description}
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
              Not Sure Which Model Fits?
            </h2>
            <p className={`${typography.bodyXl} ${colors.subheading} mb-8`}>
              Let's discuss your needs and recommend the best approach
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CTAButtons.BookStrategyCall />
              <CTAButtons.TalkToExpert variant="secondary" />
            </div>
          </motion.div>
        </div>
      </section>
    </GradientWrapper>
  );
}
