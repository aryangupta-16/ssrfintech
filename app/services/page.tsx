"use client";

import { motion } from "framer-motion";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CTAButtons } from "@/components/ui/CTAButton";
import { services } from "@/data/services";
import { ArrowRight, CheckCircle2, Code2 } from "lucide-react";
import Link from "next/link";
import { colors, components, typography, spacing } from "@/lib/design-tokens";

export default function ServicesPage() {
  // Categorize services
  const consultingServices = services.filter(s => 
    s.slug.includes('consulting') || s.slug.includes('erp')
  );
  const technologyServices = services.filter(s => 
    s.slug.includes('cloud') || s.slug.includes('software') || s.slug.includes('data')
  );
  const securityServices = services.filter(s => 
    s.slug.includes('cybersecurity')
  );

  return (
    <GradientWrapper className="pt-20">
      <PageHero
        title="Our Services"
        description="Comprehensive financial technology solutions designed to transform your business"
        backgroundImage="/ssrfintech_3.jpg"
        primaryCTA={{
          text: "Get a Free Assessment",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "View Case Studies",
          href: "/case-studies",
        }}
        icon={<Code2 className="w-10 h-10" />}
      />

      {/* Service Categories */}
      <section className={spacing.section}>
        <div className={spacing.container}>
          {/* Consulting Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className={`${typography.h2} ${colors.heading} mb-4`}>
                Consulting Services
              </h2>
              <p className={`${typography.bodyXl} ${colors.subheading}`}>
                Strategic guidance from experienced financial technology experts
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {consultingServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/services/${service.slug}`}>
                    <Card className={`${components.card} h-full hover:scale-105 transition-all duration-300 group`}>
                      <CardHeader>
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Code2 className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className={`${typography.h4} ${colors.heading} mb-2`}>
                          {service.title}
                        </CardTitle>
                        <CardDescription className={colors.subheading}>
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 mb-6">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center text-indigo-400 font-semibold group-hover:translate-x-2 transition-transform">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technology Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className={`${typography.h2} ${colors.heading} mb-4`}>
                Technology Services
              </h2>
              <p className={`${typography.bodyXl} ${colors.subheading}`}>
                Cutting-edge technical solutions for modern financial institutions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {technologyServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/services/${service.slug}`}>
                    <Card className={`${components.card} h-full hover:scale-105 transition-all duration-300 group`}>
                      <CardHeader>
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Code2 className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className={`${typography.h5} ${colors.heading} mb-2`}>
                          {service.title}
                        </CardTitle>
                        <CardDescription className={colors.subheading}>
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 mb-6">
                          {service.features.slice(0, 2).map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center text-indigo-400 font-semibold group-hover:translate-x-2 transition-transform">
                          Explore
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Security Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className={`${typography.h2} ${colors.heading} mb-4`}>
                Security Services
              </h2>
              <p className={`${typography.bodyXl} ${colors.subheading}`}>
                Fortress-level protection for your financial data
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              {securityServices.map((service) => (
                <Link key={service.id} href={`/services/${service.slug}`}>
                  <Card className={`${components.card} hover:scale-105 transition-all duration-300 group`}>
                    <div className="grid md:grid-cols-[auto,1fr] gap-8 p-8">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Code2 className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className={`${typography.h4} ${colors.heading} mb-3`}>
                          {service.title}
                        </h3>
                        <p className={`${colors.subheading} mb-6`}>
                          {service.description}
                        </p>
                        <div className="space-y-2 mb-6">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center text-indigo-400 font-semibold group-hover:translate-x-2 transition-transform">
                          Secure Your Business
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${spacing.section} relative`}>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10" />
        <div className={`${spacing.container} relative z-10`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className={`${typography.h2} ${colors.heading} mb-4`}>
              Not Sure What You Need?
            </h2>
            <p className={`${typography.bodyXl} ${colors.subheading} mb-8`}>
              Let our experts guide you to the right solution
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CTAButtons.GetAssessment />
              <CTAButtons.TalkToExpert variant="secondary" />
            </div>
          </motion.div>
        </div>
      </section>
    </GradientWrapper>
  );
}
