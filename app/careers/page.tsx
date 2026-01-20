"use client";

import { motion } from "framer-motion";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { PageHero } from "@/components/sections/PageHero";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { jobs } from "@/data/jobs";
import { MapPin, Briefcase, Clock, ArrowRight, Users } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function CareersPage() {
  return (
    <GradientWrapper className="pt-20">
      <PageHero
        title="Join Our Team"
        description="Be part of a team that's transforming the future of financial technology"
        backgroundImage="/ssrfintech_3.jpg"
        primaryCTA={{
          text: "View Open Positions",
          href: "#jobs",
        }}
        secondaryCTA={{
          text: "Learn About Us",
          href: "/about",
        }}
        icon={<Users className="w-10 h-10" />}
      />

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-white mb-12"
          >
            Why Work at SSR Fintech?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-indigo-500/50 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <CardTitle className="text-white">Innovation First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Work with cutting-edge technologies and contribute to innovative solutions
                    that shape the fintech industry.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-indigo-500/50 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <CardTitle className="text-white">Growth Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Continuous learning, skill development, and clear career progression paths
                    to help you reach your potential.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-indigo-500/50 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <CardTitle className="text-white">Collaborative Culture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Join a supportive team that values collaboration, diversity, and work-life
                    balance.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-white mb-4"
          >
            Open Positions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 text-center mb-12"
          >
            Find your next opportunity with us
          </motion.p>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-indigo-500/50 transition-all">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2 text-white">{job.title}</CardTitle>
                        <CardDescription className="text-base text-gray-300">
                          {job.description}
                        </CardDescription>
                      </div>
                      <Link href={`/careers/apply/${job.id}`}>
                        <Button className="self-start bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">Apply Now</Button>
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-sm text-gray-300">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {job.department}
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <Clock className="w-4 h-4 mr-2" />
                        {job.type}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-white mb-2">
                          Requirements:
                        </h4>
                        <ul className="space-y-1">
                          {job.requirements.slice(0, 3).map((req, idx) => (
                            <li key={idx} className="text-sm text-gray-300 flex items-start">
                              <span className="text-indigo-400 mr-2">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-white mb-2">
                          Responsibilities:
                        </h4>
                        <ul className="space-y-1">
                          {job.responsibilities.slice(0, 3).map((resp, idx) => (
                            <li key={idx} className="text-sm text-gray-300 flex items-start">
                              <span className="text-indigo-400 mr-2">•</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-white mb-12"
          >
            Benefits & Perks
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="font-semibold text-white mb-2">
                Competitive Salary
              </h3>
              <p className="text-sm text-gray-300">
                Industry-leading compensation packages
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏥</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Health Insurance</h3>
              <p className="text-sm text-gray-300">
                Comprehensive medical coverage for you and family
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏖️</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Flexible Time Off</h3>
              <p className="text-sm text-gray-300">
                Generous vacation and personal time policies
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="font-semibold text-white mb-2">
                Learning Budget
              </h3>
              <p className="text-sm text-gray-300">
                Annual budget for courses and certifications
              </p>
            </motion.div>
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
            className="max-w-4xl mx-auto text-center bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/20 rounded-2xl p-12 backdrop-blur-sm"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Don't See the Right Role?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Send us your resume anyway. We're always looking for talented individuals
              to join our team.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </GradientWrapper>
  );
}
