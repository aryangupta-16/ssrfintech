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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Send us a message
              </h2>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <p className="text-green-400 font-medium">Thank you for your message! We'll get back to you soon.</p>
                </motion.div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
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
                      className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 123 456 7890"
                      className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
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
                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Get in touch
              </h2>

              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-indigo-500/50 transition-all">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2 text-white">Visit Us</CardTitle>
                      <p className="text-gray-300">
                        13B Kasturba Nagar, Bhopal
                        <br />
                        {/* Singapore 409015 */}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-indigo-500/50 transition-all">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2 text-white">Call Us</CardTitle>
                      <div className="space-y-1 text-sm text-gray-300">
                        <p>
                          <a href="tel:+919669336333" className="hover:text-indigo-400">
                            +91 9669336333
                          </a>
                        </p>
                        <p>
                          <a href="tel:+971581637510" className="hover:text-indigo-400">
                            +971 581637510
                          </a>
                        </p>
                        <p>
                          <a href="tel:+6580867644" className="hover:text-indigo-400">
                            +65 80867644
                          </a>
                        </p>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">
                        Mon-Fri 9:00 AM - 6:00 PM IST
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-indigo-500/50 transition-all">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2 text-white">Email Us</CardTitle>
                      <p className="text-gray-300">
                        <a href="mailto:info@ssrfintech.com" className="hover:text-indigo-400">
                          contact@ssrfintech.com
                        </a>
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* <Card className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border-indigo-500/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-2">Office Hours</h3>
                  <div className="space-y-1 text-sm text-gray-300">
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
