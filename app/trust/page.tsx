"use client";

import { motion } from "framer-motion";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CTAButtons } from "@/components/ui/CTAButton";
import { complianceFrameworks, securityPractices, privacyPractices, incidentResponse } from "@/data/compliance";
import { Shield, Lock, ShieldCheck, Code, Eye, Users, GraduationCap, FileCheck, AlertTriangle } from "lucide-react";

export default function TrustPage() {
  const iconMap: Record<string, any> = {
    Lock,
    ShieldCheck,
    Code,
    Eye,
    Users,
    GraduationCap,
  };

  return (
    <GradientWrapper className="pt-20">
      <PageHero
        title="Trust & Compliance"
        description="Security and compliance are not checkboxes—they're the foundation of everything we do"
        backgroundImage="/ssrfintech_1.jpg"
        primaryCTA={{
          text: "Request Security Documentation",
          href: "/contact",
        }}
        icon={<Shield className="w-10 h-10" />}
      />

      {/* Security Practices */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Security Practices
            </h2>
            <p className="text-xl text-slate-300">
              Enterprise-grade security measures protecting your most sensitive data
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityPractices.map((practice, index) => {
              const Icon = iconMap[practice.icon] || Shield;
              return (
                <motion.div
                  key={practice.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:scale-105 transition-all duration-300 group">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-white mb-2">
                        {practice.title}
                      </CardTitle>
                      <CardDescription className="text-slate-300">
                        {practice.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <FileCheck className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Compliance Frameworks
            </h2>
            <p className="text-xl text-slate-300">
              We align with international standards and regulatory requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600/20 to-purple-600/20 flex items-center justify-center mb-4 border border-indigo-500/20">
                      <FileCheck className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {framework.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">
                      {framework.description}
                    </p>
                    <div className="text-xs text-indigo-400 font-semibold mb-2">
                      Relevant For:
                    </div>
                    <div className="space-y-1">
                      {framework.relevantFor.map((item, idx) => (
                        <div key={idx} className="text-xs text-gray-400">
                          • {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Practices */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              {privacyPractices.title}
            </h2>
            <p className="text-xl text-slate-300">
              Your data privacy is our top priority
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {privacyPractices.principles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.principle}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-orange-600/10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center">
                    <AlertTriangle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-bold text-white">
                      {incidentResponse.title}
                    </CardTitle>
                    <CardDescription className="text-slate-300">
                      {incidentResponse.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {incidentResponse.process.map((phase, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600/20 to-orange-600/20 flex items-center justify-center flex-shrink-0 border border-red-500/20">
                          <span className="text-red-400 font-bold text-sm">
                            {index + 1}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">
                            {phase.phase}
                          </h4>
                          <p className="text-sm text-gray-400 mb-3">
                            {phase.description}
                          </p>
                          <div className="text-xs text-red-400">
                            {phase.timeline}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 rounded-lg bg-red-600/10 border border-red-500/20">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-red-400 mb-1">
                        24/7 Security Hotline
                      </div>
                      <div className="text-sm text-gray-400">
                        In case of security concerns, contact our dedicated security team immediately. 
                        Response within 15 minutes for critical incidents.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* NDA Culture */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Lock className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">
              NDA & Confidentiality Culture
            </h2>
            <p className="text-lg text-slate-300 mb-6">
              Every team member signs comprehensive NDAs before accessing client data. 
              We maintain strict information barriers between clients and projects.
            </p>
            <p className="text-base text-slate-300">
              Your intellectual property, business strategies, and sensitive data remain strictly confidential. 
              We can provide custom NDAs tailored to your specific requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Need More Information?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Request our comprehensive security documentation or speak with our compliance team
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CTAButtons.TalkToExpert />
              <CTAButtons.GetAssessment variant="secondary" />
            </div>
          </motion.div>
        </div>
      </section>
    </GradientWrapper>
  );
}
