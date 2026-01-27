"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import styles from "./insightDetail.module.css";

export default function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const renderContent = (content?: string) => {
    if (!content) return null;

    return content.split('\n').map((line, index) => {
      const trimmed = line.trim();
      if (!trimmed) return null;
      if (trimmed.startsWith('### ')) {
        return <h3 key={`h3-${index}`}>{trimmed.slice(4)}</h3>;
      }
      if (trimmed.startsWith('## ')) {
        return <h2 key={`h2-${index}`}>{trimmed.slice(3)}</h2>;
      }
      if (trimmed.startsWith('# ')) {
        return <h2 key={`h2-main-${index}`}>{trimmed.slice(2)}</h2>;
      }
      return <p key={`p-${index}`}>{trimmed}</p>;
    });
  };

  return (
    <GradientWrapper>
      <article className={styles.article}>
        <div className={styles.container}>
          {/* Back Button */}
          <Link href="/insights">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Insights
            </Button>
          </Link>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.header}
          >
            <div className={styles.category}>{post.category}</div>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.meta}>
              <span className={styles.metaItem}>
                <Calendar className={styles.metaIcon} />
                {new Date(post.publishedDate).toLocaleDateString('en-US', {
                  month: 'long', day: 'numeric', year: 'numeric'
                })}
              </span>
              <span className={styles.metaItem}>
                <Clock className={styles.metaIcon} />
                {post.readTime}
              </span>
            </p>
          </motion.div>

          {/* Featured Image */}
          {post.image && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={styles.featuredImage}
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className={styles.image}
              />
            </motion.div>
          )}

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={styles.content}
          >
            {renderContent(post.content)}
            {post.excerpt && !post.content && (
              <p>{post.excerpt}</p>
            )}
          </motion.div>

          {/* Author Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.authorSection}
          >
            <div className={styles.authorCard}>
              <div className={styles.authorImage}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}>
                  {post.author.charAt(0)}
                </div>
              </div>
              <div className={styles.authorInfo}>
                <h4>{post.author}</h4>
                <p>{post.authorRole}</p>
              </div>
            </div>
          </motion.div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.relatedSection}
            >
              <h2 className={styles.relatedTitle}>Related Articles</h2>
              <div className={styles.relatedGrid}>
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/insights/${relatedPost.slug}`}>
                    <div style={{
                      padding: 'var(--space-lg)',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-lg)',
                      transition: 'all var(--transition-normal)',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}>
                      {relatedPost.image && (
                        <div style={{
                          position: 'relative',
                          width: '100%',
                          height: '12rem',
                          borderRadius: 'var(--radius-md)',
                          overflow: 'hidden',
                          marginBottom: 'var(--space-md)'
                        }}>
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                      )}
                      <div style={{
                        fontSize: 'var(--font-sm)',
                        color: 'var(--color-accent)',
                        fontWeight: '600',
                        marginBottom: 'var(--space-xs)'
                      }}>
                        {relatedPost.category}
                      </div>
                      <h3 style={{
                        fontSize: 'var(--font-lg)',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: 'var(--space-sm)'
                      }}>
                        {relatedPost.title}
                      </h3>
                      <p style={{
                        fontSize: 'var(--font-sm)',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6'
                      }}>
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </article>
    </GradientWrapper>
  );
}
