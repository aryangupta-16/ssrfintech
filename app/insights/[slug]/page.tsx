"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTAButtons } from "@/components/ui/CTAButton";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Tag } from "lucide-react";
import { colors, components, typography, spacing } from "@/lib/design-tokens";

export default function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <GradientWrapper className="pt-20">
      {/* Back Button */}
      <section className={`${spacing.section} pb-0`}>
        <div className={spacing.container}>
          <Link href="/insights">
            <Button variant="outline" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Insights
            </Button>
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className={spacing.section}>
        <div className={spacing.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            {/* Category Badge */}
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-2 rounded-full bg-indigo-600/20 text-indigo-400 font-semibold">
                {post.category}
              </span>
              {post.featured && (
                <span className="px-4 py-2 rounded-full bg-purple-600/20 text-purple-400 font-semibold">
                  Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className={`${typography.h1} ${colors.heading} mb-6`}>
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className={`${typography.bodyXl} ${colors.subheading} mb-8`}>
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {post.author}
                  </div>
                  <div className="text-xs text-gray-400">
                    {post.authorRole}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedDate).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>

              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>

              <Button variant="outline" size="sm" className="ml-auto">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Featured Image */}
            {post.image && (
              <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className={spacing.section}>
        <div className={spacing.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Card className={components.card}>
              <CardContent className="p-8 md:p-12">
                <div 
                  className="prose prose-invert prose-lg max-w-none
                    prose-headings:text-white prose-headings:font-bold
                    prose-h1:text-4xl prose-h1:mb-6
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                    prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                    prose-strong:text-indigo-400 prose-strong:font-semibold
                    prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline
                    prose-ul:text-gray-600 prose-ul:my-6
                    prose-li:mb-2
                    prose-code:text-indigo-400 prose-code:bg-indigo-950/50 prose-code:px-2 prose-code:py-1 prose-code:rounded
                  "
                  dangerouslySetInnerHTML={{ __html: post.content?.replace(/\n/g, '<br />') || '' }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="w-4 h-4 text-gray-400" />
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-sm hover:bg-white/10 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Author CTA */}
      <section className={`${spacing.section} relative`}>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10" />
        <div className={`${spacing.container} relative z-10`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className={`${components.card} max-w-3xl mx-auto`}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                    {post.author.charAt(0)}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className={`${typography.h4} ${colors.heading} mb-2`}>
                      {post.author}
                    </h3>
                    <p className={`${typography.body} ${colors.subheading} mb-4`}>
                      {post.authorRole} at SSR Fintech
                    </p>
                    <p className={`${typography.body} ${colors.subheading} mb-4`}>
                      Want to discuss this topic further? Our experts are here to help.
                    </p>
                  </div>
                  <CTAButtons.TalkToExpert />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className={spacing.section}>
          <div className={spacing.container}>
            <h2 className={`${typography.h2} ${colors.heading} mb-8 text-center`}>
              Related Insights
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/insights/${relatedPost.slug}`}>
                    <Card className={`${components.card} h-full hover:scale-105 transition-all duration-300 group overflow-hidden`}>
                      <div className="relative h-48 w-full">
                        <Image
                          src={relatedPost.image || "/ssrfintech_1.jpg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                      </div>

                      <CardContent className="p-6">
                        <h3 className={`${typography.h6} ${colors.heading} mb-2 group-hover:text-indigo-400 transition-colors line-clamp-2`}>
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center text-indigo-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className={spacing.section}>
        <div className={spacing.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className={`${typography.h2} ${colors.heading} mb-4`}>
              Get More Insights Like This
            </h2>
            <p className={`${typography.bodyXl} ${colors.subheading} mb-8`}>
              Subscribe to our newsletter for the latest trends and best practices
            </p>
            <Link href="/insights#newsletter">
              <Button size="lg">
                Subscribe Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </GradientWrapper>
  );
}
