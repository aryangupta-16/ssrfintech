"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight, BookOpen, Calendar, Clock, TrendingUp, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import styles from "./insights.module.css";

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [showNewsletterSuccess, setShowNewsletterSuccess] = useState(false);

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  const filteredPosts = selectedCategory
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || selectedCategory !== null);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowNewsletterSuccess(true);
    setTimeout(() => setShowNewsletterSuccess(false), 3000);
    setNewsletterEmail("");
  };

  return (
    <GradientWrapper>
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
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.categoryFilters}>
            <button
              onClick={() => setSelectedCategory(null)}
              className={`${styles.categoryButton} ${selectedCategory === null ? styles.active : ''}`}
            >
              All Articles
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {!selectedCategory && featuredPost && (
        <section className={styles.section}>
          <div className={styles.container}>
            <Link href={`/insights/${featuredPost.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={styles.featuredPost}
              >
                <span className={styles.featuredBadge}>Featured Article</span>
                <div className={styles.featuredContent}>
                  <span className={styles.featuredCategory}>{featuredPost.category}</span>
                  <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
                  <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
                  <div className={styles.featuredMeta}>
                    <div className={styles.featuredMetaItem}>
                      <Calendar size={16} />
                      {new Date(featuredPost.publishedDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className={styles.featuredMetaItem}>
                      <Clock size={16} />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <div className={styles.featuredLink}>
                    Read More <ArrowRight size={20} />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>
      )}

      {/* Regular Articles Grid */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.header}
          >
            <h2 className={styles.sectionTitle}>
              {selectedCategory ? `${selectedCategory} Articles` : 'Latest Insights'}
            </h2>
            <p className={styles.sectionDescription}>
              Stay ahead with insights from fintech experts
            </p>
          </motion.div>

          <div className={styles.postGrid}>
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/insights/${post.slug}`}>
                  <div className={styles.postCard}>
                    <div className={styles.postImage} />
                    <div className={styles.postContent}>
                      <span className={styles.postCategory}>{post.category}</span>
                      <h3 className={styles.postTitle}>{post.title}</h3>
                      <p className={styles.postExcerpt}>{post.excerpt}</p>
                      <div className={styles.postMeta}>
                        <div className={styles.postMetaItem}>
                          <Calendar size={14} />
                          {new Date(post.publishedDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </div>
                        <div className={styles.postMetaItem}>
                          <Clock size={14} />
                          {post.readTime}
                        </div>
                      </div>
                      <div className={styles.postLink}>
                        Read More <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.section} id="newsletter">
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.newsletterSection}
          >
            <BookOpen className="w-16 h-16 text-white mx-auto mb-4" />
            <h2 className={styles.newsletterTitle}>Subscribe to Our Newsletter</h2>
            <p className={styles.newsletterDescription}>
              Get the latest insights, trends, and best practices delivered to your inbox monthly
            </p>

            {showNewsletterSuccess ? (
              <div className={styles.successMessage}>
                <CheckCircle2 size={24} />
                Thanks for subscribing! Check your inbox for confirmation.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className={styles.newsletterInput}
                />
                <button type="submit" className={styles.newsletterButton}>
                  Subscribe
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </GradientWrapper>
  );
}
