export interface TechStack {
  category: string;
  technologies: Technology[];
}

export interface Technology {
  name: string;
  logo?: string; // Will use placeholder initially
  description: string;
}

export interface Certification {
  name: string;
  logo?: string;
  issuer: string;
  description: string;
}

export const techStack: TechStack[] = [
  {
    category: "ERP & Financial Systems",
    technologies: [
      {
        name: "SAP",
        description: "S/4HANA, Financial Consolidation, Business Planning & Consolidation",
      },
      {
        name: "Oracle",
        description: "Oracle Financials Cloud, ERP Cloud, NetSuite",
      },
      {
        name: "Microsoft Dynamics",
        description: "Dynamics 365 Finance, Business Central",
      },
    ],
  },
  {
    category: "Cloud Platforms",
    technologies: [
      {
        name: "AWS",
        description: "EC2, RDS, Lambda, S3, CloudFormation, Financial Services Competency",
      },
      {
        name: "Microsoft Azure",
        description: "Azure SQL, App Services, Functions, Financial Services Compliance",
      },
      {
        name: "Google Cloud",
        description: "GCP Compute, BigQuery, Cloud Functions",
      },
    ],
  },
  {
    category: "Data & Analytics",
    technologies: [
      {
        name: "Tableau",
        description: "Advanced data visualization and business intelligence",
      },
      {
        name: "Power BI",
        description: "Microsoft data analytics and reporting platform",
      },
      {
        name: "Snowflake",
        description: "Cloud data warehouse and analytics",
      },
    ],
  },
  {
    category: "Security & Compliance",
    technologies: [
      {
        name: "HashiCorp Vault",
        description: "Secrets management and data protection",
      },
      {
        name: "Okta",
        description: "Identity and access management",
      },
      {
        name: "CyberArk",
        description: "Privileged access security",
      },
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "ISO 27001",
    issuer: "International Organization for Standardization",
    description: "Information security management certification",
  },
  {
    name: "SOC 2 Type II",
    issuer: "AICPA",
    description: "Security, availability, and confidentiality compliance",
  },
  {
    name: "AWS Financial Services Competency",
    issuer: "Amazon Web Services",
    description: "Proven expertise in delivering AWS solutions for financial services",
  },
  {
    name: "Microsoft Gold Partner",
    issuer: "Microsoft",
    description: "Highest level of Microsoft partnership and technical capability",
  },
  {
    name: "SAP Certified",
    issuer: "SAP",
    description: "Certified consultants for SAP implementation and integration",
  },
];
