export interface EngagementModel {
  id: string;
  title: string;
  description: string;
  bestFor: string[];
  typicalDuration: string;
  pricing: string;
  whatYouGet: string[];
}

export const engagementModels: EngagementModel[] = [
  {
    id: "fixed-price-project",
    title: "Fixed Price Project",
    description: "Well-defined scope with predictable outcomes and budget. Ideal for specific initiatives with clear requirements.",
    bestFor: [
      "ERP implementation projects",
      "System migrations with defined scope",
      "Compliance or security initiatives",
      "Platform modernization",
    ],
    typicalDuration: "3-6 months",
    pricing: "Fixed cost based on scope and timeline",
    whatYouGet: [
      "Detailed project plan with milestones",
      "Dedicated project manager",
      "Weekly progress updates",
      "Quality assurance and testing",
      "Knowledge transfer and documentation",
      "30-day post-launch support",
    ],
  },
  {
    id: "retainer-model",
    title: "Retainer / Ongoing Partnership",
    description: "Continuous support and strategic guidance for long-term success. Perfect for ongoing optimization and innovation.",
    bestFor: [
      "Continuous improvement initiatives",
      "Strategic technology consulting",
      "System optimization and maintenance",
      "Multi-phase digital transformation",
    ],
    typicalDuration: "6-12 months (renewable)",
    pricing: "Monthly retainer based on FTE allocation",
    whatYouGet: [
      "Dedicated team (design, dev, consulting)",
      "Quarterly strategic planning sessions",
      "Priority support and rapid response",
      "Continuous optimization and enhancements",
      "Technology roadmap updates",
      "Executive-level reporting",
    ],
  },
  {
    id: "staff-augmentation",
    title: "Staff Augmentation",
    description: "Supplement your team with specialized expertise exactly when you need it. Flexible scaling with no long-term commitment.",
    bestFor: [
      "Filling temporary skill gaps",
      "Managing peak workload periods",
      "Accelerating development timelines",
      "Accessing niche technical expertise",
    ],
    typicalDuration: "3-12 months",
    pricing: "Hourly or monthly rate per resource",
    whatYouGet: [
      "Pre-vetted senior professionals",
      "Rapid onboarding (within 2 weeks)",
      "Flexible scaling up or down",
      "Your tools, your processes",
      "Direct team integration",
      "No long-term contracts required",
    ],
  },
];

export const communicationModel = {
  title: "How We Communicate",
  description: "Transparency and frequent communication are core to our approach",
  channels: [
    {
      method: "Daily Standups",
      frequency: "Daily (for active projects)",
      format: "15-min video call or async update",
    },
    {
      method: "Weekly Status Reports",
      frequency: "Weekly",
      format: "Written summary + metrics dashboard",
    },
    {
      method: "Bi-weekly Sprint Reviews",
      frequency: "Every 2 weeks",
      format: "Demo + retrospective (60 min)",
    },
    {
      method: "Monthly Executive Briefing",
      frequency: "Monthly",
      format: "Strategic review + roadmap update",
    },
    {
      method: "Slack/Teams Channel",
      frequency: "Always on",
      format: "Real-time collaboration and support",
    },
  ],
};

export const typicalTimelines = [
  {
    projectType: "ERP Implementation",
    discovery: "2-3 weeks",
    design: "3-4 weeks",
    implementation: "12-16 weeks",
    optimization: "4-8 weeks",
    total: "5-7 months",
  },
  {
    projectType: "Cloud Migration",
    discovery: "1-2 weeks",
    design: "2-3 weeks",
    implementation: "8-12 weeks",
    optimization: "2-4 weeks",
    total: "3-5 months",
  },
  {
    projectType: "BI Dashboard Development",
    discovery: "1 week",
    design: "2 weeks",
    implementation: "4-6 weeks",
    optimization: "2 weeks",
    total: "2-3 months",
  },
  {
    projectType: "Security Audit & Remediation",
    discovery: "1-2 weeks",
    design: "1 week",
    implementation: "4-8 weeks",
    optimization: "2 weeks",
    total: "2-3 months",
  },
];

export const successMetrics = {
  title: "How We Measure Success",
  metrics: [
    {
      metric: "On-Time Delivery",
      target: "95% of milestones met on schedule",
      current: "97%",
    },
    {
      metric: "Client Satisfaction",
      target: "4.5+ / 5.0 rating",
      current: "4.8 / 5.0",
    },
    {
      metric: "Budget Accuracy",
      target: "Within 10% of estimate",
      current: "Within 8%",
    },
    {
      metric: "ROI Achievement",
      target: "Measurable ROI within 12 months",
      current: "Average 18 months to 2.5x ROI",
    },
  ],
};
