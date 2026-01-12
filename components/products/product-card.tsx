"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, FileCheck, Building2, TrendingUp, Cloud, Database, ShoppingCart, Users, ArrowRightLeft } from "lucide-react";
import { Product } from "@/data/products";

const iconMap: Record<string, any> = {
  BarChart3,
  FileCheck,
  Building2,
  TrendingUp,
  Cloud,
  Database,
  ShoppingCart,
  Users,
  ArrowRightLeft
};

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const Icon = iconMap[product.icon] || BarChart3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/products/${product.slug}`}>
        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-indigo-500/50 transition-all group h-full cursor-pointer">
          <CardHeader>
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-white group-hover:text-indigo-400 transition-colors">
              {product.title}
            </CardTitle>
            <CardDescription className="text-gray-400">
              {product.shortDescription}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-indigo-400 group-hover:text-indigo-300 transition-colors">
              <span className="text-sm font-medium">Learn more</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
