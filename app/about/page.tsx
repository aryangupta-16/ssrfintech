"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { team } from "@/data/team";
import { Linkedin, ArrowRight, Target, Eye, Award, Users, Mail } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function AboutPage() {
  return (
    <GradientWrapper className="pt-20">
      <PageHero
        title="Transforming Finance Through Technology"
        description="With over a decade of excellence in financial technology, we empower institutions to innovate, scale, and succeed in the digital age."
        backgroundImage="/ssrfintech_2.jpg"
        primaryCTA={{
          text: "Join Our Team",
          href: "/careers",
        }}
        secondaryCTA={{
          text: "Contact Us",
          href: "/contact",
        }}
        icon={<Users className="w-10 h-10" />}
      />

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-gradient-to-br from-indigo-600/10 to-purple-600/10 border-indigo-500/20 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-3xl text-white">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    To empower financial institutions with cutting-edge technology solutions that drive innovation,
                    enhance efficiency, and create exceptional value for their customers.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 border-purple-500/20 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-3xl text-white">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    To be the most trusted technology partner for financial services globally, recognized for our
                    innovation, expertise, and commitment to client success.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-white mb-4">
              Our Core Values
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-400">
              The principles that guide everything we do
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[{ icon: Award, title: "Excellence", desc: "We strive for excellence in everything we do, delivering quality solutions that exceed expectations." },
              { icon: Users, title: "Innovation", desc: "We embrace cutting-edge technologies and creative solutions to solve complex challenges." },
              { icon: Target, title: "Partnership", desc: "We build long-term relationships based on trust, transparency, and mutual success." }].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-indigo-500/50 transition-all group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white text-center">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-center">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Map */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: 'url(/world-map.jpg)' }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-white mb-4">
              Our Global Presence
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-400">
              Serving clients worldwide with excellence and innovation
            </motion.p>
          </motion.div>

          {/* Map Container with Pins */}
          <div className="relative max-w-6xl mx-auto h-[500px] md:h-[600px]">
            {/* United States Pin - Left side */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute left-[15%] top-[30%] md:left-[20%] md:top-[35%] flex flex-col items-center group"
            >
              <div className="relative flex flex-col items-center">
                {/* Pin - Arrow Shape */}
                <div className="relative group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <svg width="32" height="40" viewBox="0 0 32 40" className="w-6 h-8 md:w-8 md:h-10 drop-shadow-lg">
                    {/* Pin Body */}
                    <path
                      d="M16 0C9.4 0 4 5.4 4 12c0 8 12 28 12 28s12-20 12-28c0-6.6-5.4-12-12-12z"
                      fill="#6366f1"
                      stroke="white"
                      strokeWidth="2"
                    />
                    {/* Inner Circle */}
                    <circle cx="16" cy="12" r="4" fill="white" />
                  </svg>
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-400 rounded-full animate-ping opacity-75"></div>
                </div>
                {/* Label */}
                <div className="mt-1 px-4 py-2 bg-slate-900/90 backdrop-blur-sm border border-indigo-500/30 rounded-lg shadow-xl">
                  <p className="text-white font-semibold text-sm md:text-base whitespace-nowrap">United States</p>
                </div>
              </div>
            </motion.div>

            {/* Middle East Pin - Center */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute left-[50%] top-[35%] md:left-[52%] md:top-[40%] flex flex-col items-center group"
            >
              <div className="relative flex flex-col items-center">
                {/* Pin - Arrow Shape */}
                <div className="relative group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <svg width="32" height="40" viewBox="0 0 32 40" className="w-6 h-8 md:w-8 md:h-10 drop-shadow-lg">
                    {/* Pin Body */}
                    <path
                      d="M16 0C9.4 0 4 5.4 4 12c0 8 12 28 12 28s12-20 12-28c0-6.6-5.4-12-12-12z"
                      fill="#a855f7"
                      stroke="white"
                      strokeWidth="2"
                    />
                    {/* Inner Circle */}
                    <circle cx="16" cy="12" r="4" fill="white" />
                  </svg>
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-75"></div>
                </div>
                {/* Label */}
                <div className="mt-1 px-4 py-2 bg-slate-900/90 backdrop-blur-sm border border-purple-500/30 rounded-lg shadow-xl">
                  <p className="text-white font-semibold text-sm md:text-base whitespace-nowrap">Middle East</p>
                </div>
              </div>
            </motion.div>

            {/* India Pin - Right side */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute right-[20%] top-[40%] md:right-[25%] md:top-[45%] flex flex-col items-center group"
            >
              <div className="relative flex flex-col items-center">
                {/* Pin - Arrow Shape */}
                <div className="relative group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <svg width="32" height="40" viewBox="0 0 32 40" className="w-6 h-8 md:w-8 md:h-10 drop-shadow-lg">
                    {/* Pin Body */}
                    <path
                      d="M16 0C9.4 0 4 5.4 4 12c0 8 12 28 12 28s12-20 12-28c0-6.6-5.4-12-12-12z"
                      fill="#6366f1"
                      stroke="white"
                      strokeWidth="2"
                    />
                    {/* Inner Circle */}
                    <circle cx="16" cy="12" r="4" fill="white" />
                  </svg>
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-400 rounded-full animate-ping opacity-75"></div>
                </div>
                {/* Label */}
                <div className="mt-1 px-4 py-2 bg-slate-900/90 backdrop-blur-sm border border-indigo-500/30 rounded-lg shadow-xl">
                  <p className="text-white font-semibold text-sm md:text-base whitespace-nowrap">India</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-white mb-4">
              Meet Our Leadership Team
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-400">
              Expert professionals driving innovation in fintech
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-indigo-500/50 transition-all group h-full">
                  <CardHeader>
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      {member.image ? (
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-indigo-500/20 group-hover:border-indigo-500/50 transition-all">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback to initials if image fails to load
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold text-white">${member.name.split(" ").map(n => n[0]).join("")}</div>`;
                            }}
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold text-white border-4 border-indigo-500/20 group-hover:border-indigo-500/50 transition-all">
                          {member.name.split(" ").map(n => n[0]).join("")}
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-center text-white">{member.name}</CardTitle>
                    <CardDescription className="text-center text-indigo-400">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-400 text-sm text-center">{member.bio}</p>
                    
                    {member.email && (
                      <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 hover:text-indigo-400 transition-colors">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${member.email}`} className="hover:underline">
                          {member.email}
                        </a>
                      </div>
                    )}
                    
                    {member.linkedin && (
                      <div className="flex justify-center pt-2">
                        <Link
                          href={member.linkedin}
                          className="text-indigo-400 hover:text-indigo-300 transition-colors hover:scale-110 transform duration-200"
                        >
                          <Linkedin className="w-5 h-5" />
                        </Link>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional 4 Team Members */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-16">
            {/* Siddharth Agarwal - Architect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-indigo-500/50 transition-all group h-full">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold text-white border-4 border-indigo-500/20 group-hover:border-indigo-500/50 transition-all">
                      SA
                    </div>
                  </div>
                  <CardTitle className="text-center text-white">Siddharth Agarwal</CardTitle>
                  <CardDescription className="text-center text-indigo-400">Architect</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            {/* Yash Vaidya - SAC */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-indigo-500/50 transition-all group h-full">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold text-white border-4 border-indigo-500/20 group-hover:border-indigo-500/50 transition-all">
                      YV
                    </div>
                  </div>
                  <CardTitle className="text-center text-white">Yash Vaidya</CardTitle>
                  <CardDescription className="text-center text-indigo-400">SAC</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            {/* Ankush Choudhary - DataSphere */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-indigo-500/50 transition-all group h-full">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold text-white border-4 border-indigo-500/20 group-hover:border-indigo-500/50 transition-all">
                      AC
                    </div>
                  </div>
                  <CardTitle className="text-center text-white">Ankush Choudhary</CardTitle>
                  <CardDescription className="text-center text-indigo-400">DataSphere</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            {/* Farry Jain - Consolidation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-indigo-500/50 transition-all group h-full">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold text-white border-4 border-indigo-500/20 group-hover:border-indigo-500/50 transition-all">
                      FJ
                    </div>
                  </div>
                  <CardTitle className="text-center text-white">Farry Jain (CA)</CardTitle>
                  <CardDescription className="text-center text-indigo-400">Consolidation</CardDescription>
                </CardHeader>
              </Card>
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
            className="max-w-4xl mx-auto text-center bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/20 rounded-2xl p-12 backdrop-blur-sm"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with us to leverage cutting-edge technology and expert consulting
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </GradientWrapper>
  );
}
