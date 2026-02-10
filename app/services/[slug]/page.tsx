"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { services } from "@/data/services";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
  Shield
} from "lucide-react";
import Link from "next/link";
import styles from "./service-detail.module.css";

const iconMap: Record<string, any> = {
  Landmark: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  TrendingUp: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  Layers: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3" />
    </svg>
  ),
  Settings: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Cloud: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  Zap: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Rocket: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  ),
  BarChart3: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Shield: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Code: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
};

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon];

  return (
    <GradientWrapper className="pt-20">
      {/* Hero Section */}
      <section className={styles.hero}>
        <div
          className={styles.heroBackground}
          style={{ backgroundImage: 'url(/ssrfintech_3.jpg)' }}
        >
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroInner}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={styles.iconWrapper}
            >
              {Icon && <Icon />}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={styles.heroTitle}
            >
              {service.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={styles.heroDescription}
            >
              {service.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={styles.ctaButtons}
            >
              <Link href="/contact" className={styles.primaryButton}>
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/case-studies" className={styles.secondaryButton}>
                View Case Studies
                <Sparkles className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.sectionHeader}
          >
            <div className={styles.badge}>
              <Target className="w-4 h-4" />
              <span>Key Capabilities</span>
            </div>
            <h2 className={styles.sectionTitle}>Comprehensive Solutions</h2>
            <p className={styles.sectionSubtitle}>
              Enterprise-grade features designed to transform your financial operations
            </p>
          </motion.div>

          <div className={styles.featuresGrid}>
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={styles.featureCard}
              >
                <div className={styles.featureHeader}>
                  <CheckCircle2 className={styles.featureIcon} />
                  <h3 className={styles.featureTitle}>{feature}</h3>
                </div>
                <p className={styles.featureDescription}>
                  {getFeatureDescription(feature)}
                </p>
                <div className={styles.featureTags}>
                  {getFeatureTags(feature).map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.sectionHeader}
          >
            <div className={styles.badge}>
              <TrendingUp className="w-4 h-4" />
              <span>Business Impact</span>
            </div>
            <h2 className={styles.sectionTitle}>Measurable Business Value</h2>
            <p className={styles.sectionSubtitle}>
              Drive tangible outcomes and ROI for your organization
            </p>
          </motion.div>

          <div className={styles.benefitsGrid}>
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={styles.benefitCard}
              >
                <div className={styles.benefitHeader}>
                  <div className={styles.benefitNumber}>{index + 1}</div>
                  <h3 className={styles.benefitTitle}>{benefit}</h3>
                </div>
                <p className={styles.benefitDescription}>
                  {getBenefitDescription(benefit)}
                </p>
                <div className={styles.benefitMetrics}>
                  {getBenefitMetrics(benefit).map((metric, i) => (
                    <div key={i} className={styles.metric}>
                      <Zap className="w-4 h-4" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.whyChooseGrid}
          >
            <div className={styles.whyChooseContent}>
              <div className={styles.badge}>
                <Shield className="w-4 h-4" />
                <span>Why SSR Fintech</span>
              </div>
              <h2 className={styles.whyChooseTitle}>
                Your Trusted Partner in {service.title}
              </h2>
              <p className={styles.whyChooseText}>
                With over a decade of expertise in financial technology and enterprise solutions,
                we bring unparalleled domain knowledge and technical excellence to every engagement.
              </p>
              <div className={styles.whyChooseList}>
                <div className={styles.whyChooseItem}>
                  <Users className="w-5 h-5" />
                  <div>
                    <h4>Expert Team</h4>
                    <p>Certified consultants with 10+ years of industry experience</p>
                  </div>
                </div>
                <div className={styles.whyChooseItem}>
                  <Target className="w-5 h-5" />
                  <div>
                    <h4>Proven Methodology</h4>
                    <p>Battle-tested processes delivering consistent results</p>
                  </div>
                </div>
                <div className={styles.whyChooseItem}>
                  <Shield className="w-5 h-5" />
                  <div>
                    <h4>Enterprise-Grade Security</h4>
                    <p>ISO 27001 certified with SOC 2 compliance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.whyChooseStats}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>150+</div>
                <div className={styles.statLabel}>Projects Delivered</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>98%</div>
                <div className={styles.statLabel}>Client Satisfaction</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>40%</div>
                <div className={styles.statLabel}>Average Cost Reduction</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>24/7</div>
                <div className={styles.statLabel}>Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBackground} />
        <div className={styles.ctaContent}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.ctaTitle}>
              Ready to Transform Your Business?
            </h2>
            <p className={styles.ctaDescription}>
              Let's discuss how {service.title.toLowerCase()} can drive your success.
              Schedule a consultation with our experts today.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </GradientWrapper>
  );
}

// Helper functions to generate detailed content
function getFeatureDescription(feature: string): string {
  const descriptions: Record<string, string> = {
    "Strategic and operational planning": "Develop comprehensive financial strategies aligned with your business objectives. Our planning solutions enable scenario modeling, what-if analysis, and long-term strategic roadmaps.",
    "Workforce planning capabilities": "Optimize your human capital with integrated workforce planning that aligns headcount, compensation, and resource allocation with business goals and financial targets.",
    "Budgeting and rolling forecasts": "Implement dynamic budgeting processes with continuous rolling forecasts that adapt to market changes and business conditions in real-time.",
    "Scenario modeling and analysis": "Evaluate multiple business scenarios with advanced modeling capabilities, enabling data-driven decision making and risk assessment across various market conditions.",
    "Integration across SAP ecosystem": "Seamlessly integrate with SAP BPC, SAC, S/4HANA, and other SAP modules for unified data flows and consolidated financial insights across your organization.",
    // Add more descriptions for all features
    "Legal consolidation": "Ensure regulatory compliance with automated legal consolidation processes that meet IFRS, US GAAP, and local statutory requirements across multiple jurisdictions.",
    "Management consolidation": "Create management reports with flexible organizational hierarchies and custom consolidation rules tailored to your business structure.",
    "Intercompany eliminations": "Automate complex intercompany transactions and eliminations with full audit trails and reconciliation capabilities.",
    "Multi-currency translation": "Handle foreign currency translation automatically with real-time exchange rates and support for multiple translation methods.",
    "Automated close processes": "Accelerate financial close with automated workflows, validation rules, and electronic sign-offs that reduce manual effort by up to 60%.",
  };
  return descriptions[feature] || "Enterprise-grade capability designed to streamline your financial operations and drive business value through automated processes and intelligent insights.";
}

function getFeatureTags(feature: string): string[] {
  const tags: Record<string, string[]> = {
    "Strategic and operational planning": ["SAP BPC", "SAC", "Strategic"],
    "Workforce planning capabilities": ["HR Integration", "Headcount", "Planning"],
    "Budgeting and rolling forecasts": ["Dynamic", "Real-time", "Forecasting"],
    "Scenario modeling and analysis": ["What-If", "Risk Analysis", "Modeling"],
    "Integration across SAP ecosystem": ["S/4HANA", "BW", "Integration"],
    "Legal consolidation": ["IFRS", "US GAAP", "Compliance"],
    "Management consolidation": ["Reporting", "Custom Rules", "Hierarchies"],
    "Intercompany eliminations": ["Automated", "Reconciliation", "Audit Trail"],
    "Multi-currency translation": ["FX Rates", "Multi-Currency", "Global"],
    "Automated close processes": ["Workflow", "Fast Close", "Automation"],
  };
  return tags[feature] || ["Enterprise", "SAP", "Automation"];
}

function getBenefitDescription(benefit: string): string {
  const descriptions: Record<string, string> = {
    "Improved forecast accuracy": "Achieve forecast accuracy improvements of 25-40% through AI-powered predictive analytics, real-time data integration, and advanced statistical models that identify trends and patterns in your financial data.",
    "Better scenario planning": "Evaluate hundreds of business scenarios in minutes instead of days. Model complex market conditions, competitive responses, and internal initiatives to make informed strategic decisions with confidence.",
    "Faster budget cycles": "Reduce budget cycle time from months to weeks with automated workflows, collaborative planning tools, and real-time consolidation that eliminate bottlenecks and manual processes.",
    "Enhanced financial visibility": "Gain real-time visibility into financial performance across all business units, geographies, and product lines with interactive dashboards and self-service analytics accessible to stakeholders at all levels.",
    "Agile business planning": "Respond rapidly to market changes with continuous planning cycles, rolling forecasts, and driver-based models that adapt to changing business conditions and emerging opportunities.",
    // Add more
    "Faster month-end closing": "Reduce month-end close time by 40-60% through automation, parallel processing, and elimination of manual reconciliations. Meet reporting deadlines consistently while improving data accuracy.",
    "Improved consolidation accuracy": "Achieve near-perfect consolidation accuracy with automated validation rules, intelligent error detection, and comprehensive audit trails that ensure regulatory compliance.",
    "Executive visibility": "Provide executives with real-time access to critical KPIs, performance metrics, and board-ready reports that enable faster, data-driven decision making.",
  };
  return descriptions[benefit] || "Drive measurable business outcomes through optimized processes, reduced operational costs, and improved decision-making capabilities that directly impact your bottom line.";
}

function getBenefitMetrics(benefit: string): string[] {
  const metrics: Record<string, string[]> = {
    "Improved forecast accuracy": ["25-40% accuracy improvement", "Real-time data integration"],
    "Better scenario planning": ["100+ scenarios analyzed", "Minutes vs. days"],
    "Faster budget cycles": ["60% faster planning", "Weeks not months"],
    "Enhanced financial visibility": ["Real-time dashboards", "Self-service analytics"],
    "Agile business planning": ["Continuous planning", "Rapid response"],
    "Faster month-end closing": ["40-60% time reduction", "Consistent deadlines"],
    "Improved consolidation accuracy": ["99.9% accuracy", "Full audit trail"],
    "Executive visibility": ["Real-time KPIs", "Board-ready reports"],
  };
  return metrics[benefit] || ["Measurable ROI", "Proven results"];
}
