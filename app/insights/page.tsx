"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight, BookOpen, Calendar, Clock, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import styles from "./insights.module.css";

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [showNewsletterSuccess, setShowNewsletterSuccess] = useState(false);

  const categories = Array.from(new Set(blogPosts.map(p => p.category)));

  const filteredPosts = selectedCategory
    ? blogPosts.filter(p => p.category === selectedCategory)
    : blogPosts;

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

      {/* Category Filters */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.categoryFilters}>
            <button
              onClick={() => setSelectedCategory(null)}
              className={`${styles.categoryButton} ${!selectedCategory ? styles.active : ""}`}
            >
              All Articles
            </button>

            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ""}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.header}
          >
            <div className={styles.sectionTitle}>
              {selectedCategory ? `${selectedCategory} Articles` : "All Articles"}
            </div>
            <div className={styles.sectionDescription}>
              Insights, trends, and expert perspectives from our team
            </div>
          </motion.div>

          <div className={styles.postGrid}>
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Link href={`/insights/${post.slug}`}>
                  <div
                    className={`${styles.postCard} ${
                      post.featured ? styles.featuredCard : ""
                    }`}
                  >
                    {post.featured && (
                      <div className={styles.featuredBadge}>Featured</div>
                    )}

                    <div className={styles.postImage} />

                    <div className={styles.postContent}>
                      <div className={styles.postCategory}>{post.category}</div>

                      <div className={styles.postTitle}>{post.title}</div>

                      <div className={styles.postExcerpt}>{post.excerpt}</div>

                      <div className={styles.postFooter}>
                        <div className={styles.metaItem}>
                          <Calendar size={14} />
                          {new Date(post.publishedDate).toDateString()}
                        </div>
                        <div className={styles.metaItem}>
                          <Clock size={14} />
                          {post.readTime}
                        </div>
                        <div className={styles.readMore}>
                          Read →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.section} id="newsletter">
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.newsletterSection}
          >
            <div className={styles.newsletterTitle}>
              Get Insights in Your Inbox
            </div>
            <div className={styles.newsletterDescription}>
              Monthly fintech, analytics, and transformation insights — no spam.
            </div>

            {showNewsletterSuccess ? (
              <div className={styles.successMessage}>
                <CheckCircle2 />
                You’re subscribed!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Your work email"
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  required
                />
                <button type="submit">
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
