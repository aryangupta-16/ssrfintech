import { CaseStudy } from "@/lib/types";

export interface CaseStudyMetrics {
  metric: string;
  value: string;
  description: string;
}

export const caseStudies: CaseStudy[] = [
  /* ========================= GLOBE ========================= */

  {
    id: "globe-s4-group-reporting",
    title: "S/4HANA Group Reporting – Statutory & Management Consolidation",
    slug: "globe-s4hana-group-reporting",
    client: "GLOBE",
    industry: "Telecommunications",
    summary:
      "Implemented statutory and management consolidation using S/4HANA Group Reporting with full automation and multi-currency support.",
    challengeHighlights: [
      "Multiple ledgers, versions, and currencies",
      "Manual intercompany eliminations",
      "Tight consolidation timelines",
    ],
    solutionHighlights: [
      "Configured multi-ledger, multi-version, multi-currency consolidation",
      "Automated intercompany eliminations",
      "Delivered consolidation in 6 months and planning in 7 months",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/globe-logo.png",
    accentColor: "#2563EB",
    metrics: {
      metric: "Process Automation",
      value: "100%",
      description: "Full end-to-end consolidation automation"
    }
  },

  {
    id: "globe-sac-analytics",
    title: "SAP Analytics Cloud – Financial & Operational Analytics",
    slug: "globe-sac-financial-operational-analytics",
    client: "GLOBE",
    industry: "Telecommunications",
    summary:
      "Delivered enterprise-scale financial and operational analytics with complex allocations and secure multidimensional reporting.",
    challengeHighlights: [
      "Disparate financial and operational data sources",
      "Complex allocation and data mapping logic",
      "Cross-functional reporting requirements",
    ],
    solutionHighlights: [
      "Integrated SAC with SAP S/4HANA (ACDOCA, ACDOCU, COPA)",
      "Custom CDS views and OData integrations",
      "Model-level and multidimensional authorization matrix",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/globe-logo.png",
    accentColor: "#22C55E",
    metrics: {
      metric: "Planning Cycle Reduction",
      value: "-60%",
      description: "Reduced planning cycle from manual processes"
    }
  },

  /* ========================= ABOITIZ ========================= */

  {
    id: "aboitiz-sac-planning",
    title: "SAP Analytics Cloud – Budgeting & Forecasting",
    slug: "aboitiz-sac-budgeting-forecasting",
    client: "Aboitiz InfraCapital",
    industry: "Infrastructure & Utilities",
    summary:
      "Implemented balance sheet, cash flow, and P&L budgeting and forecasting with real-time dashboards.",
    challengeHighlights: [
      "Manual budgeting processes",
      "Lack of real-time visibility",
    ],
    solutionHighlights: [
      "Integrated SAC with SAP S/4HANA",
      "Configured workflows and approvals",
      "Delivered live dashboards in 5 months",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/aboitiz-logo.png",
    accentColor: "#0EA5E9",
    metrics: {
      metric: "Planning Efficiency",
      value: "+75%",
      description: "Improved planning efficiency across 52 entities"
    }
  },

  /* ========================= TAQA ========================= */

  {
    id: "taqa-group-reporting-sac",
    title: "Group Reporting & SAC – Investment Consolidation",
    slug: "taqa-group-reporting-investment-consolidation",
    client: "TAQA",
    industry: "Energy & Utilities",
    summary:
      "Delivered statutory and management consolidation with advanced investment accounting and large-scale budgeting.",
    challengeHighlights: [
      "Complex investment consolidation methods",
      "Budgeting across multiple regions and entities",
    ],
    solutionHighlights: [
      "Purchase, equity, and proportionate consolidation",
      "Automated intercompany eliminations",
      "SAC budgeting for 52 entities across 8 business lines",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/taqa-logo.png",
    accentColor: "#8B5CF6",
    metrics: {
      metric: "Process Automation",
      value: "95%",
      description: "Automated consolidation and budgeting processes"
    }
  },

  /* ========================= MANILA WATER ========================= */

  {
    id: "manila-water-sac-planning",
    title: "SAP Analytics Cloud – Integrated Planning Suite",
    slug: "manila-water-sac-integrated-planning",
    client: "Manila Water",
    industry: "Utilities",
    summary:
      "Delivered integrated financial, operational, and workforce planning using SAP Analytics Cloud.",
    challengeHighlights: [
      "Disconnected HR and financial systems",
      "Manual forecasting processes",
    ],
    solutionHighlights: [
      "Revenue, OPEX, COGS, BS, and cash flow planning",
      "Integrated SAC with SuccessFactors",
      "Delivered across two phases over 12 months",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/manilawater-logo.png",
    accentColor: "#F59E0B",
    metrics: {
      metric: "Planning Cycle",
      value: "-50%",
      description: "Reduced overall planning cycle time"
    }
  },

  /* ========================= UCT ========================= */

  {
    id: "uct-s4-group-reporting",
    title: "S/4HANA Group Reporting – Investment Consolidation",
    slug: "uct-s4hana-group-reporting",
    client: "UCT",
    industry: "Manufacturing",
    summary:
      "Implemented statutory and management consolidation with advanced investment accounting.",
    challengeHighlights: [
      "Multiple group currencies and versions",
      "Manual intercompany eliminations",
    ],
    solutionHighlights: [
      "Multi-version, multi-currency consolidation",
      "Purchase and equity method investment consolidation",
      "Reporting via Group Data Analysis and Analysis for Office",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/uct-logo.png",
    accentColor: "#10B981",
    metrics: {
      metric: "Efficiency Gain",
      value: "+75%",
      description: "Improved operational efficiency"
    }
  },

  /* ========================= NBF ========================= */

  {
    id: "nbf-sac-workforce",
    title: "SAP Analytics Cloud – Workforce Planning",
    slug: "nbf-sac-workforce-planning",
    client: "NBF",
    industry: "Banking & Financial Services",
    summary:
      "Delivered workforce automation planning with complex calculations and security controls.",
    challengeHighlights: [
      "Complex workforce cost calculations",
      "Pay-grade-based authorization requirements",
    ],
    solutionHighlights: [
      "Integrated SAC with SuccessFactors",
      "Custom guided applications",
      "Complex pay-grade-based authorization matrix",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/nbf-logo.webp",
    accentColor: "#6366F1",
    metrics: {
      metric: "Planning Time",
      value: "-70%",
      description: "Reduced planning time significantly"
    }
  },

  /* ========================= ADVANZ PHARMA ========================= */

  {
    id: "advanz-pharma-sac",
    title: "SAP Analytics Cloud – Pharma Budgeting Automation",
    slug: "advanz-pharma-sac-budgeting",
    client: "Advanz Pharma",
    industry: "Pharmaceuticals",
    summary:
      "India’s first SAC-based budgeting automation for a pharmaceutical enterprise.",
    challengeHighlights: [
      "Highly manual budgeting processes",
      "Limited forecast visibility",
    ],
    solutionHighlights: [
      "Revenue, OPEX, and COGS budgeting",
      "Workforce planning and live dashboards",
      "Delivered in 7 months",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/advanzpharma-logo.png",
    accentColor: "#EF4444",
    metrics: {
      metric: "Planning Efficiency",
      value: "+70%",
      description: "Boosted planning efficiency"
    }
  },

  /* ========================= AVERIS ========================= */

  {
    id: "averis-sem-bcs",
    title: "SEM BCS – Consolidation System Replacement",
    slug: "averis-sem-bcs-consolidation",
    client: "Averis",
    industry: "Shared Services / Manufacturing",
    summary:
      "Replaced multiple legacy consolidation systems with a unified SEM BCS platform.",
    challengeHighlights: [
      "Multiple consolidation systems",
      "Manual intercompany and stock eliminations",
    ],
    solutionHighlights: [
      "SEM BCS with multi-ledger and multi-currency support",
      "Automated intercompany and stock transfer eliminations",
      "Investment consolidation using purchase and equity methods",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/averis-logo.png",
    accentColor: "#0F766E",
    metrics: {
      metric: "System Consolidation",
      value: "100%",
      description: "Unified all legacy systems into one"
    }
  },

  /* ========================= CLSA ========================= */

  {
    id: "clsa-sem-bcs",
    title: "SEM BCS – Statutory & Management Consolidation",
    slug: "clsa-sem-bcs",
    client: "CLSA",
    industry: "Financial Services",
    summary:
      "Delivered statutory and management consolidation with segment-based reporting.",
    challengeHighlights: [
      "Complex investment consolidation requirements",
      "Multi-ledger and multi-currency setup",
    ],
    solutionHighlights: [
      "Automated intercompany eliminations",
      "Purchase, equity, and proportionate methods",
      "Delivered within 5 months",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/clsa-logo.png",
    accentColor: "#7C3AED",
    metrics: {
      metric: "Reporting Accuracy",
      value: "99.9%",
      description: "Achieved near-perfect reporting accuracy"
    }
  },

  /* ========================= OTTO ========================= */

  {
    id: "otto-sac-planning-suite",
    title: "SAP Analytics Cloud – Multi-Industry Planning Suite",
    slug: "otto-sac-multi-industry-planning",
    client: "Otto",
    industry: "E-Commerce / FMCG / Manufacturing / Retail",
    summary:
      "Delivered multi-industry planning solutions with advanced simulations and long-term planning.",
    challengeHighlights: [
      "Complex security-driven planning models",
      "Multi-industry planning requirements",
    ],
    solutionHighlights: [
      "Labor, CAPEX, revenue, OPEX, COGS, BS & cash flow planning",
      "3-year detailed and 5-year high-level planning",
      "Scenario simulations and archive-based versioning",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/otto-logo.png",
    accentColor: "#6366F1",
    metrics: {
      metric: "Process Automation",
      value: "90%",
      description: "Automated multi-industry planning"
    }
  },

  /* ========================= MITSUBISHI ELECTRIC ========================= */

  {
    id: "mitsubishi-datasphere-sac",
    title: "SAP Datasphere & SAC – Enterprise Planning & Reporting",
    slug: "mitsubishi-datasphere-sac",
    client: "Mitsubishi Electric",
    industry: "Manufacturing",
    summary:
      "Built a modern planning and reporting platform using SAP Datasphere and SAC.",
    challengeHighlights: [
      "Legacy data warehouse limitations",
      "Complex expense and inventory allocations",
    ],
    solutionHighlights: [
      "Expense, asset, inventory, and cash flow planning",
      "Live SAC reporting on Datasphere models",
      "Delivered in two phases over 10 months",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/mitsubishielectric-logo.png",
    accentColor: "#0F766E",
    metrics: {
      metric: "Data Accuracy",
      value: "+85%",
      description: "Improved data accuracy and visibility"
    }
  },

  /* ========================= STANDARD CHARTERED ========================= */

  {
    id: "standard-chartered-datasphere",
    title: "SAP Datasphere & SAC – Financial Analytics",
    slug: "standard-chartered-datasphere-sac",
    client: "Standard Chartered",
    industry: "Banking & Financial Services",
    summary:
      "Migrated enterprise financial analytics from a third-party warehouse to SAP Datasphere.",
    challengeHighlights: [
      "Legacy data warehouse dependency",
      "Complex treasury and liquidity analytics",
    ],
    solutionHighlights: [
      "Treasury, liquidity, capital, and non-financial analytics",
      "Executive dashboards and management reporting",
      "3-month migration with ongoing enhancements",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/standardchartered.png",
    accentColor: "#2563EB",
    metrics: {
      metric: "Migration Success",
      value: "100%",
      description: "Successful warehouse migration"
    }
  },

  /* ========================= SAUDI ELECTRICITY ========================= */

  {
    id: "saudi-electricity-sac-planning",
    title: "SAP Analytics Cloud – Enterprise Planning",
    slug: "saudi-electricity-sac-planning",
    client: "Saudi Electricity Company",
    industry: "Utilities",
    summary:
      "Implemented enterprise-wide planning aligned with regulatory and compliance requirements.",
    challengeHighlights: [
      "Complex driver-based planning",
      "Regulatory compliance requirements (SERA)",
    ],
    solutionHighlights: [
      "OPEX, CAPEX, P&L, BS, cash flow, labor, and production planning",
      "Driver-based planning across business lines",
      "Phased delivery over 8 months",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/saudielectricitycompany-logo.png",
    accentColor: "#F59E0B",
    metrics: {
      metric: "Planning Time",
      value: "-65%",
      description: "Reduced planning cycle time"
    }
  },

  /* ========================= PRIVATE INFRA GROUP ========================= */

  {
    id: "private-infra-sac-suite",
    title: "SAP Analytics Cloud – Planning & Consolidation Suite",
    slug: "private-infra-sac-planning-consolidation",
    client: "Private Infrastructure Development Group",
    industry: "Infrastructure",
    summary:
      "Delivered integrated planning and consolidation across finance, workforce, and operations.",
    challengeHighlights: [
      "Disconnected planning and consolidation processes",
      "Complex driver-based planning",
    ],
    solutionHighlights: [
      "Travel, spend, revenue, BS, P&L, and workforce planning",
      "Statutory and management consolidation",
      "Delivered in 6 months",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/pidg-logo.png",
    accentColor: "#7C3AED",
    metrics: {
      metric: "Process Automation",
      value: "100%",
      description: "Full planning and consolidation automation"
    }
  },

  /* ========================= PA MEDIA GROUP ========================= */

  {
    id: "pa-media-sac-suite",
    title: "SAP Analytics Cloud – Planning & Consolidation",
    slug: "pa-media-sac-planning-consolidation",
    client: "PA Media Group",
    industry: "Media & Publishing",
    summary:
      "Implemented enterprise-wide planning and consolidation with tailored business logic.",
    challengeHighlights: [
      "Region-specific planning requirements",
      "Complex driver-based planning logic",
    ],
    solutionHighlights: [
      "Travel, OPEX, CAPEX, revenue, BS, cash flow & workforce planning",
      "Management and statutory consolidation",
      "Delivered consolidation and planning in 9 months",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/pamediagroup-logo.png",
    accentColor: "#8B5CF6",
    metrics: {
      metric: "Planning Efficiency",
      value: "+80%",
      description: "Enhanced regional planning efficiency"
    }
  },
];
