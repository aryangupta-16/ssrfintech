"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Landmark,
  Settings,
  Cloud,
  BarChart3,
  Shield,
  Code,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import { Card } from "@/components/ui/card";

const iconMap: Record<string, any> = {
  Landmark,
  Settings,
  Cloud,
  BarChart3,
  Shield,
  Code,
};

const services = [
  {
    id: "1",
    title: "Financial Technology Consulting",
    description:
      "Transform your financial operations with cutting-edge technology solutions.",
    icon: "Landmark",
    gradient: "from-purple-500 to-pink-500",
    link: "/services/financial-technology-consulting",
  },
  {
    id: "2",
    title: "ERP Implementation",
    description:
      "Streamline business processes with enterprise resource planning solutions.",
    icon: "Settings",
    gradient: "from-blue-500 to-cyan-500",
    link: "/services/erp-implementation-support",
  },
  {
    id: "3",
    title: "Cloud Solutions",
    description:
      "Leverage cloud technology to scale your infrastructure securely.",
    icon: "Cloud",
    gradient: "from-green-500 to-teal-500",
    link: "/services/cloud-solutions-migration",
  },
  {
    id: "4",
    title: "Data Analytics & BI",
    description:
      "Unlock actionable insights with advanced analytics and intelligence.",
    icon: "BarChart3",
    gradient: "from-orange-500 to-red-500",
    link: "/services/data-analytics-business-intelligence",
  },
  {
    id: "5",
    title: "Cybersecurity",
    description:
      "Protect your assets with comprehensive security solutions.",
    icon: "Shield",
    gradient: "from-indigo-500 to-purple-500",
    link: "/services/cybersecurity-services",
  },
  {
    id: "6",
    title: "Custom Development",
    description:
      "Build bespoke financial applications for your unique needs.",
    icon: "Code",
    gradient: "from-pink-500 to-rose-500",
    link: "/services/custom-software-development",
  },
];

export default function ServicesPremium() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-pink-600/10 opacity-50" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Premium Services</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive fintech solutions designed to accelerate your digital
            transformation journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.link}>
                  <Card
                    hover
                    className="h-full group cursor-pointer border-2 border-transparent hover:border-purple-200 transition-all duration-300"
                  >
                    {/* Gradient Icon Background */}
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <div className="flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-blue-50/0 group-hover:from-purple-50/50 group-hover:to-blue-50/50 rounded-xl transition-all duration-300 -z-10" />
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-lg font-semibold text-gradient hover:gap-3 transition-all duration-300"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
