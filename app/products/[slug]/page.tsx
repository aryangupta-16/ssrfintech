"use client";

import { notFound } from "next/navigation";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { ProductHero } from "@/components/products/product-hero";
import { ProductFeatures } from "@/components/products/product-features";
import { products } from "@/data/products";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { use } from "react";
import { ArrowLeft } from "lucide-react";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
   const { slug } = use(params);
  const product = products.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <GradientWrapper className="pt-20">
      {/* Hero Section with Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/ssrfintech_5.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-indigo-900/80 to-slate-900/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link href="/products">
            <Button variant="ghost" className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>

          {/* Hero Content */}
          <ProductHero 
            title={product.title}
            description={product.description}
            icon={product.icon}
          />
        </div>
      </section>

      {/* Spacer - keeping original hero component but hiding it */}
      <div className="hidden">
        <ProductHero 
          title={product.title}
          description={product.description}
          icon={product.icon}
        />
      </div>

      {/* Features & Benefits */}
      <ProductFeatures 
        features={product.features}
        benefits={product.benefits}
      />

      {/* Use Cases */}
      {product.useCases && product.useCases.length > 0 && (
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                Common Use Cases
              </h2>
              <p className="text-gray-400 text-center mb-12">
                See how organizations leverage {product.title}
              </p>
              <div className="space-y-4">
                {product.useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700 rounded-lg p-6 hover:border-indigo-500/30 transition-all"
                  >
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-4 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{useCase}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/20 rounded-2xl p-12 backdrop-blur-sm"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started with {product.title}?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo and discover how {product.title} can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0">
                  Request Demo
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </GradientWrapper>
  );
}
