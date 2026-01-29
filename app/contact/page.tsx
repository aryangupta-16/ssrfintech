"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
    setShowSuccess(true);
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <GradientWrapper className="pt-20">
      <PageHero
        title="Contact Us"
        description="Get in touch with our team to discuss your financial technology needs"
        backgroundImage="/ssrfintech_1.jpg"
        icon={<Mail className="w-10 h-10" />}
      />

      {/* Contact Form & Info */}
      <section className={styles.contactForm}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={styles.formTitle}>
                Send us a message
              </h2>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={styles.successMessage}
                >
                  <CheckCircle2 className={styles.successIcon} />
                  <p className={styles.successText}>Thank you for your message! We'll get back to you soon.</p>
                </motion.div>
              )}
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div>
                    <label htmlFor="name" className={styles.label}>
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={styles.input}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={styles.label}>
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div>
                    <label htmlFor="company" className={styles.label}>
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className={styles.input}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={styles.label}>
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 123 456 7890"
                      className={styles.input}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={styles.label}>
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={6}
                    className={styles.textarea}
                  />
                </div>

                <Button type="submit" size="lg" variant="gradient" style={{ width: '100%' }}>
                  Send Message
                  <Send className={styles.submitIcon} style={{ marginLeft: '0.5rem' }} />
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.infoCards}
            >
              <h2 className={styles.infoTitle}>
                Get in touch
              </h2>

              {/* <div className={styles.infoCard}>
                <div className={styles.infoCardHeader}>
                  <div className={styles.infoCardIconWrapper}>
                    <MapPin className={styles.infoCardIcon} />
                  </div>
                  <div className={styles.infoCardContent}>
                    <div className={styles.infoCardTitle}>Our Headquarters</div>
                    <div className={styles.addressList}>
                      <div className={styles.addressItem}>
                        <span className={styles.locationBadge}>🇮🇳</span>
                        <div className={styles.addressDetails}>
                          <div className={styles.addressCountry}>Bhopal, India</div>
                          <p className={styles.addressText}>13B Kasturba Nagar</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className={styles.infoCard}>
                <div className={styles.infoCardHeader}>
                  <div className={styles.infoCardIconWrapper}>
                    <Phone className={styles.infoCardIcon} />
                  </div>
                  <div className={styles.infoCardContent}>
                    <div className={styles.infoCardTitle}>Call Us</div>
                    <div className={styles.phoneList}>
                      <div className={styles.phoneItem}>
                        <span className={styles.countryFlag}>🇮🇳</span>
                        <div className={styles.phoneDetails}>
                          <span className={styles.countryLabel}>India</span>
                          <a href="tel:+919669336333" className={styles.phoneLink}>
                            +91 96693 36333
                          </a>
                        </div>
                      </div>
                      <div className={styles.phoneItem}>
                        <span className={styles.countryFlag}>🇦🇪</span>
                        <div className={styles.phoneDetails}>
                          <span className={styles.countryLabel}>UAE</span>
                          <a href="tel:+971581637510" className={styles.phoneLink}>
                            +971 581 637 510
                          </a>
                        </div>
                      </div>
                      <div className={styles.phoneItem}>
                        <span className={styles.countryFlag}>🇸🇬</span>
                        <div className={styles.phoneDetails}>
                          <span className={styles.countryLabel}>Singapore</span>
                          <a href="tel:+6580867644" className={styles.phoneLink}>
                            +65 8086 7644
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <p className={styles.availability}>
                      📅 Mon-Fri 9:00 AM - 6:00 PM IST
                    </p> */}
                  </div>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoCardHeader}>
                  <div className={styles.infoCardIconWrapper}>
                    <Mail className={styles.infoCardIcon} />
                  </div>
                  <div className={styles.infoCardContent}>
                    <div className={styles.infoCardTitle}>Email Us</div>
                    <p className={styles.infoCardText}>
                      <a href="mailto:info@ssrfintech.com" style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>
                        contact@ssrfintech.com
                      </a>
                    </p>
                    <p style={{ fontSize: 'var(--font-sm)', color: 'var(--text-tertiary)', marginTop: '0.25rem' }}>
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* <Card className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border-indigo-500/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-2">Office Hours</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card> */}
            </motion.div>
          </div>
        </div>
      </section>
    </GradientWrapper>
  );
}
