"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { services } from "@/data/services";
import { fadeInUp } from "@/lib/animations";

export function ServicesSection() {
  return (
    <Section className="py-20 bg-white" stagger>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive fintech solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.Box;
            
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover gradient className="h-full">
                  <CardHeader>
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-7 h-7 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={`/services/${service.slug}`}>
                      <Button variant="ghost" className="group p-0 h-auto">
                        Learn more
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div variants={fadeInUp} className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" variant="outline">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
