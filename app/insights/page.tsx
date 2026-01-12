"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight, BookOpen, Calendar, Clock, Tag, TrendingUp, CheckCircle2 } from "lucide-react";
import { colors, components, typography, spacing } from "@/lib/design-tokens";
import { useState } from "react";

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [showNewsletterSuccess, setShowNewsletterSuccess] = useState(false);

  // Get all unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  // Filter posts by category
  const filteredPosts = selectedCategory
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  // Featured post
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || selectedCategory !== null);

  return (
    <GradientWrapper className="pt-20">
      <PageHero
        title="Insights & Thought Leadership"
        description="Expert perspectives on financial technology, industry trends, and best practices from our team"
        backgroundImage="/ssrfintech_2.jpg"
        primaryCTA={{
          text: "Subscribe to Newsletter",
          href: "#newsletter",
        }}
        icon={<BookOpen className="w-10 h-10" />}
      />

      {/* Category Filter */}
      <section className={`${spacing.section} pt-0`}>
        <div className={spacing.container}>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              onClick={() => setSelectedCategory(null)}
              variant={selectedCategory === null ? "default" : "outline"}
              className="rounded-full"
            >
              All Articles
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {!selectedCategory && featuredPost && (
        <section className={`${spacing.section} pt-0`}>
          <div className={spacing.container}>
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-indigo-400" />
              <span className={`${typography.bodyLg} font-semibold text-indigo-400`}>
                Featured Article
              </span>
            </div>

            <Link href={`/insights/${featuredPost.slug}`}>
              <Card className={`${components.card} overflow-hidden hover:scale-[1.02] transition-all duration-300 group`}>
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={featuredPost.image || "/ssrfintech_1.jpg"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-indigo-600 text-white text-sm font-semibold">
                      Featured
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      <span className="px-3 py-1 rounded-full bg-indigo-600/20 text-indigo-400">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.publishedDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>

                    <h3 className={`${typography.h3} ${colors.heading} mb-3 group-hover:text-indigo-400 transition-colors`}>
                      {featuredPost.title}
                    </h3>

                    <p className={`${typography.bodyLg} ${colors.subheading} mb-6`}>
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-white">
                          {featuredPost.author}
                        </div>
                        <div className="text-xs text-gray-400">
                          {featuredPost.authorRole}
                        </div>
                      </div>

                      <div className="flex items-center text-indigo-400 font-semibold group-hover:translate-x-2 transition-transform">
                        Read More
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      )}

      {/* Regular Articles Grid */}
      <section className={spacing.section}>
        <div className={spacing.container}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/insights/${post.slug}`}>
                  <Card className={`${components.card} h-full hover:scale-105 transition-all duration-300 group overflow-hidden`}>
                    {/* Image */}
                    <div className="relative h-48 w-full">
                      <Image
                        src={post.image || "/ssrfintech_1.jpg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-indigo-600/80 backdrop-blur-sm text-white text-sm font-semibold border border-white/20">
                        {post.category}
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.publishedDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>

                      <CardTitle className={`${typography.h5} ${colors.heading} mb-2 group-hover:text-indigo-400 transition-colors line-clamp-2`}>
                        {post.title}
                      </CardTitle>
                      <CardDescription className={`${colors.subheading} line-clamp-3`}>
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div>
                          <div className="text-sm font-semibold text-white">
                            {post.author}
                          </div>
                          <div className="text-xs text-gray-400">
                            {post.authorRole}
                          </div>
                        </div>

                        <ArrowRight className="w-5 h-5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className={`${spacing.section} relative`}>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10" />
        <div className={`${spacing.container} relative z-10`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <BookOpen className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
            <h2 className={`${typography.h2} ${colors.heading} mb-4`}>
              Subscribe to Our Newsletter
            </h2>
            <p className={`${typography.bodyXl} ${colors.subheading} mb-8`}>
              Get the latest insights, industry trends, and best practices delivered to your inbox
            </p>
            {showNewsletterSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center justify-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <p className="text-green-400 font-medium">Thank you for subscribing!</p>
              </motion.div>
            )}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (newsletterEmail) {
                  console.log("Newsletter subscription:", newsletterEmail);
                  setShowNewsletterSuccess(true);
                  setNewsletterEmail("");
                  setTimeout(() => setShowNewsletterSuccess(false), 5000);
                }
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500 text-white placeholder:text-gray-500"
              />
              <Button type="submit" className="px-8 py-3">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </GradientWrapper>
  );
}
