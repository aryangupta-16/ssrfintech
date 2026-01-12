import { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Digital Banking Transformation for Leading Bank",
    slug: "digital-banking-transformation",
    client: "Major National Bank",
    industry: "Banking",
    challenge:
      "A leading national bank needed to modernize their 30-year-old core banking system to meet customer expectations for digital services while maintaining 99.99% uptime.",
    solution:
      "We implemented a phased migration strategy, moving to a cloud-native microservices architecture with zero downtime. The new system integrated mobile banking, real-time payments, and AI-powered customer service.",
    results: [
      "40% reduction in transaction processing time",
      "60% increase in digital customer adoption",
      "99.99% system uptime maintained",
      "$5M annual cost savings",
      "Reduced time-to-market for new features by 70%",
    ],
    tags: ["Cloud Migration", "Core Banking", "Microservices"],
  },
  {
    id: "2",
    title: "AI-Powered Fraud Detection System",
    slug: "ai-fraud-detection",
    client: "Payment Processing Company",
    industry: "Payment Processing",
    challenge:
      "Processing millions of daily transactions with increasing fraud attempts, the client needed an intelligent system to detect and prevent fraud in real-time without impacting legitimate transactions.",
    solution:
      "Developed a machine learning-based fraud detection system using advanced algorithms to analyze transaction patterns, behavioral biometrics, and risk scoring in real-time.",
    results: [
      "85% reduction in fraud incidents",
      "0.1% false positive rate",
      "Real-time fraud detection under 100ms",
      "95% improvement in fraud recovery",
      "$10M prevented fraud losses annually",
    ],
    tags: ["AI/ML", "Fraud Detection", "Real-time Processing"],
  },
  {
    id: "3",
    title: "Wealth Management Platform Overhaul",
    slug: "wealth-management-platform",
    client: "Investment Advisory Firm",
    industry: "Wealth Management",
    challenge:
      "An investment firm managing $50B in assets needed a modern platform to provide advisors with real-time portfolio insights and automated compliance reporting.",
    solution:
      "Built a comprehensive wealth management platform with advanced analytics, automated rebalancing, tax optimization, and integrated compliance monitoring.",
    results: [
      "50% improvement in advisor productivity",
      "Real-time portfolio analytics",
      "100% automated compliance reporting",
      "30% increase in client satisfaction",
      "25% reduction in operational costs",
    ],
    tags: ["Wealth Management", "Analytics", "Compliance"],
  },
  {
    id: "4",
    title: "InsurTech Platform Launch",
    slug: "insurtech-platform-launch",
    client: "Digital Insurance Startup",
    industry: "Insurance",
    challenge:
      "A new insurance startup needed to launch a complete digital insurance platform within 6 months to meet their market entry deadline and investor expectations.",
    solution:
      "Delivered an end-to-end InsurTech platform with policy management, claims processing, customer portal, and third-party integrations using agile methodology.",
    results: [
      "Launched in 5 months (ahead of schedule)",
      "Processing 10,000+ policies monthly",
      "90% straight-through claims processing",
      "4.8/5 customer satisfaction rating",
      "Secured Series A funding",
    ],
    tags: ["InsurTech", "MVP Development", "Agile"],
  },
];
