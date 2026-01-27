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
import styles from "./about.module.css";
import { useState } from "react";

const globalLocations = [
  {
    id: "us",
    country: "United States",
    color: "primary",
    position: { top: "45%", left: "20%" },
    cities: ["New York", "San Francisco", "Chicago"]
  },
  {
    id: "mena",
    country: "MENA",
    color: "accent",
    position: { top: "35%", left: "50%" },
    cities: ["Dubai, UAE", "Abu Dhabi, UAE", "Riyadh, KSA", "Dammam, KSA"]
  },
  {
    id: "india",
    country: "India",
    color: "primary",
    position: { top: "40%", right: "22%" },
    cities: ["Bangalore", "Mumbai", "Delhi", "Pune"]
  },
  {
    id: "uk",
    country: "United Kingdom",
    color: "accent",
    position: { top: "15%", left: "45%" },
    cities: ["London", "Manchester"]
  },
  {
    id: "sg",
    country: "Singapore",
    color: "primary",
    position: { top: "50%", right: "10%" },
    cities: ["Singapore"]
  }
];

export default function AboutPage() {
  const [expandedLocation, setExpandedLocation] = useState<string | null>(null);
  return (
    <GradientWrapper>
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
      <section className={styles.missionVision}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className={`${styles.card} ${styles.cardPrimary}`}>
                <CardHeader>
                  <div className={styles.iconContainer}>
                    <Target className={styles.icon} />
                  </div>
                  <CardTitle className={styles.cardTitle}>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={styles.cardContent}>
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
              <Card className={`${styles.card} ${styles.cardAccent}`}>
                <CardHeader>
                  <div className={styles.iconContainer}>
                    <Eye className={styles.icon} />
                  </div>
                  <CardTitle className={styles.cardTitle}>Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={styles.cardContent}>
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
      <section className={styles.values}>
        <div className={styles.container}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className={styles.header}
          >
            <motion.h2 variants={fadeInUp} className={styles.title}>
              Our Core Values
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.description}>
              The principles that guide everything we do
            </motion.p>
          </motion.div>

          <div className={styles.valuesGrid}>
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
                <Card className={styles.valueCard}>
                  <CardHeader>
                    <div className={styles.valueIconContainer}>
                      <value.icon className={styles.icon} />
                    </div>
                    <CardTitle className={styles.valueTitle}>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={styles.valueDescription}>{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className={styles.globalPresence}>
        {/* Background Map */}
        <div 
          className={styles.backgroundMap}
          style={{ backgroundImage: 'url(/world-map.jpg)' }}
        />
        
        <div className={styles.container}>
          {/* Section Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className={styles.header}
          >
            <motion.h2 variants={fadeInUp} className={styles.title}>
              Our Global Presence
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.description}>
              Serving clients worldwide with excellence and innovation
            </motion.p>
          </motion.div>

          {/* Map Container with Pins */}
          <div className={styles.mapContainer}>
            {globalLocations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={styles.pin}
                style={{
                  top: location.position.top,
                  left: location.position.left,
                  right: location.position.right,
                }}
                onMouseEnter={() => setExpandedLocation(location.id)}
                onMouseLeave={() => setExpandedLocation(null)}
              >
                <div className={styles.pinWrapper}>
                  {/* Pin - Arrow Shape */}
                  <div>
                    <svg width="32" height="40" viewBox="0 0 32 40" className={styles.pinSvg}>
                      {/* Pin Body */}
                      <path
                        d="M16 0C9.4 0 4 5.4 4 12c0 8 12 28 12 28s12-20 12-28c0-6.6-5.4-12-12-12z"
                        fill={location.color === "primary" ? "var(--color-primary)" : "var(--color-accent)"}
                        stroke="white"
                        strokeWidth="2"
                      />
                      {/* Inner Circle */}
                      <circle cx="16" cy="12" r="4" fill="white" />
                    </svg>
                    <div className={`${styles.pinPulse} ${location.color === "primary" ? styles.pinPulsePrimary : styles.pinPulseAccent}`}></div>
                  </div>
                  
                  {/* Label */}
                  <motion.div
                    className={styles.pinLabel}
                    animate={expandedLocation === location.id ? { opacity: 1, scale: 1 } : { opacity: 0.7, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className={styles.pinLabelText}>{location.country}</p>
                    {expandedLocation === location.id && (
                      <motion.div
                        className={styles.citiesList}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                      >
                        {location.cities.map((city, idx) => (
                          <p key={idx} className={styles.cityName}>{city}</p>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={styles.team}>
        <div className={styles.container}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className={styles.header}
          >
            <motion.h2 variants={fadeInUp} className={styles.title}>
              Meet Our Leadership Team
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.description}>
              Expert professionals driving innovation in fintech
            </motion.p>
          </motion.div>

          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={styles.teamCard}>
                  <CardHeader>
                    <div className={styles.teamMemberImage}>
                      {member.image ? (
                        <div className={styles.memberImage}>
                          <img
                            src={member.image}
                            alt={member.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            onError={(e) => {
                              // Fallback to initials if image fails to load
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.parentElement!.innerHTML = `<div class="${styles.memberImageFallback}">${member.name.split(" ").map(n => n[0]).join("")}</div>`;
                            }}
                          />
                        </div>
                      ) : (
                        <div className={styles.memberImageFallback}>
                          {member.name.split(" ").map(n => n[0]).join("")}
                        </div>
                      )}
                    </div>
                    <CardTitle className={styles.memberName}>{member.name}</CardTitle>
                    <CardDescription className={styles.memberRole}>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className={styles.memberBio}>{member.bio}</p>
                    
                    {member.email && (
                      <div className={styles.memberLinkedIn} style={{ marginBottom: '0.5rem' }}>
                        <Mail className={styles.linkedInIcon} />
                        <a href={`mailto:${member.email}`}>
                          {member.email}
                        </a>
                      </div>
                    )}
                    
                    {member.linkedin && (
                      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '0.5rem' }}>
                        <Link
                          href={member.linkedin}
                          className={styles.memberLinkedIn}
                        >
                          <Linkedin className={styles.linkedInIcon} />
                        </Link>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className={styles.values}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.valueCard}
            style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center', padding: 'var(--space-2xl)' }}
          >
            <h2 className={styles.title}>
              Ready to Transform Your Business?
            </h2>
            <p className={styles.description}>
              Partner with us to leverage cutting-edge technology and expert consulting
            </p>
            <Link href="/contact">
              <Button size="lg" variant="gradient" style={{ marginTop: 'var(--space-xl)' }}>
                Get in Touch
                <ArrowRight style={{ marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem' }} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </GradientWrapper>
  );
}
