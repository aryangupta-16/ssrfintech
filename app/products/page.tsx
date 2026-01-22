"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { products, productCategories } from "@/data/products";
import { ArrowRight, Award, Package } from "lucide-react";

export default function ProductsPage() {
  return (
    <GradientWrapper className="pt-20">
      <PageHero
        title="Enterprise SAP Solutions Portfolio"
        description="Comprehensive SAP solutions for digital transformation, financial management, and enterprise optimization"
        backgroundImage="/ssrfintech_3.jpg"
        primaryCTA={{
          text: "Schedule a Demo",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "View All Products",
          href: "#products",
        }}
        icon={<Package className="w-10 h-10" />}
      />

      {/* Financial Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {productCategories.financial.title}
              </h2>
            </div>
            <p className="text-gray-400 text-lg">
              {productCategories.financial.description}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.financial.products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {productCategories.enterprise.title}
              </h2>
            </div>
            <p className="text-gray-400 text-lg">
              {productCategories.enterprise.description}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.enterprise.products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Migration Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {productCategories.migration.title}
              </h2>
            </div>
            <p className="text-gray-400 text-lg">
              {productCategories.migration.description}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.migration.products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/20 rounded-2xl p-12 backdrop-blur-sm text-center"
          >
            <div className="flex justify-center mb-6">
              <Award className="w-16 h-16 text-indigo-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-8">Our Achievements</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-indigo-400 mb-2">30+</div>
                <p className="text-gray-600">Planning, Budgeting & Reporting Solutions Implemented</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">20+</div>
                <p className="text-gray-600">Consolidation Solutions Delivered</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-400 mb-2">7+</div>
                <p className="text-gray-600">Migration Projects (BPC to SAC & GR)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-12 backdrop-blur-sm"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our SAP solutions can drive your digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0">
                  Contact Us
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </GradientWrapper>
  );
}
