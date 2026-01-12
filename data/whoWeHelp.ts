export interface TargetAudience {
  id: string;
  icon: string;
  title: string;
  description: string;
  painPoint: string;
  howWeHelp: string;
}

export const targetAudiences: TargetAudience[] = [
  {
    id: "bfsi-enterprises",
    icon: "Building2",
    title: "BFSI Enterprises",
    description: "Banks, Financial Institutions, and Insurance Companies",
    painPoint: "Legacy systems, regulatory compliance, and digital transformation challenges",
    howWeHelp: "We modernize your infrastructure while ensuring compliance, security, and zero disruption to operations",
  },
  {
    id: "fintech-startups",
    icon: "Rocket",
    title: "Fintech Startups",
    description: "Fast-growing financial technology companies",
    painPoint: "Scaling challenges, security vulnerabilities, and time-to-market pressure",
    howWeHelp: "We build scalable, secure solutions that grow with you, from MVP to enterprise-grade platforms",
  },
  {
    id: "cfo-finance-teams",
    icon: "TrendingUp",
    title: "CFO / Finance Teams",
    description: "Financial decision-makers and operations leaders",
    painPoint: "Manual processes, data silos, slow reporting, and decision-making bottlenecks",
    howWeHelp: "We automate workflows, unify data sources, and provide real-time insights for faster, smarter decisions",
  },
  {
    id: "cto-engineering-teams",
    icon: "Code2",
    title: "CTO / Engineering Teams",
    description: "Technology leaders and development teams",
    painPoint: "Technical debt, integration complexity, talent gaps, and security concerns",
    howWeHelp: "We provide expert consulting, hands-on development, and architectural guidance to accelerate delivery",
  },
];
