import { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "s4-group-reporting-consolidation",
    title: "S/4HANA Group Reporting – Statutory & Management Consolidation",
    slug: "s4hana-group-reporting-consolidation",
    client: "Large Enterprise Group",
    industry: "Manufacturing / Conglomerate",
    summary:
      "Implemented centralized statutory and management consolidation using S/4HANA Group Reporting with multi-currency and intercompany automation.",
    challengeHighlights: [
      "Multiple ledgers, versions, and currencies across entities",
      "Manual intercompany eliminations causing delays",
      "Lack of standardized consolidation process",
    ],
    solutionHighlights: [
      "Configured multi-ledger, multi-version, multi-currency consolidation",
      "Automated intercompany eliminations",
      "Delivered statutory and management consolidation within timelines",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/client-logo.png",
    accentColor: "#2563EB",
  },

  {
    id: "sac-financial-analytics",
    title: "SAP Analytics Cloud – Financial & Operational Analytics",
    slug: "sap-analytics-cloud-financial-analytics",
    client: "Global Enterprise",
    industry: "Enterprise Services",
    summary:
      "Built end-to-end financial and operational analytics covering P&L, COPA, Revenue, HR, CAPEX, and cross-functional reporting.",
    challengeHighlights: [
      "Disparate financial and operational data sources",
      "Complex allocation and data mapping requirements",
      "Need for secure, role-based multidimensional reporting",
    ],
    solutionHighlights: [
      "Integrated SAC with SAP S/4HANA (ACDOCA, ACDOCU, COPA)",
      "Developed custom CDS views and OData-based integrations",
      "Implemented complex allocation logic and authorization matrix",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/client-logo.png",
    accentColor: "#22C55E",
  },

  {
    id: "sac-planning-budgeting",
    title: "SAP Analytics Cloud – Budgeting & Forecasting",
    slug: "sap-analytics-cloud-budgeting-forecasting",
    client: "Mid to Large Enterprise",
    industry: "Financial Services / Manufacturing",
    summary:
      "Delivered enterprise-wide budgeting and forecasting for Balance Sheet, Cash Flow, and P&L using SAP Analytics Cloud Planning.",
    challengeHighlights: [
      "Manual budgeting processes across departments",
      "No real-time integration with S/4HANA",
      "Limited workflow and approval controls",
    ],
    solutionHighlights: [
      "Implemented SAC Planning integrated with SAP S/4HANA",
      "Configured workflows, approvals, and version control",
      "Delivered live dashboards and management reports",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/client-logo.png",
    accentColor: "#0EA5E9",
  },

  {
    id: "group-reporting-investment-consolidation",
    title: "Group Reporting with Investment Consolidation",
    slug: "group-reporting-investment-consolidation",
    client: "Multi-Entity Corporate Group",
    industry: "Holding Company / Enterprise Group",
    summary:
      "Enabled advanced consolidation including investment accounting with SAP S/4HANA Group Reporting and SAC Planning.",
    challengeHighlights: [
      "Complex investment consolidation requirements",
      "Multiple consolidation methods across entities",
      "Large-scale budgeting across regions and business lines",
    ],
    solutionHighlights: [
      "Configured purchase, equity, and proportionate consolidation methods",
      "Automated intercompany eliminations",
      "Implemented SAC budgeting for 52 entities across 8 business lines",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/client-logo.png",
    accentColor: "#8B5CF6",
  },

  {
    id: "sac-workforce-planning",
    title: "SAP Analytics Cloud – Workforce & Labor Cost Planning",
    slug: "sap-analytics-cloud-workforce-planning",
    client: "Global Enterprise",
    industry: "IT Services / Manufacturing",
    summary:
      "Delivered workforce automation and labor cost planning integrated with SAP SuccessFactors.",
    challengeHighlights: [
      "Disconnected HR and financial planning systems",
      "Complex pay-grade-based authorization requirements",
      "Manual workforce cost simulations",
    ],
    solutionHighlights: [
      "Integrated SAC with SAP SuccessFactors",
      "Built workforce automation models with complex calculations",
      "Configured pay-grade-based authorization matrix",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/client-logo.png",
    accentColor: "#F59E0B",
  },

  {
    id: "pharma-budgeting-automation",
    title: "Pharma Industry Budgeting Automation (India First)",
    slug: "pharma-budgeting-automation-india",
    client: "Leading Pharma Company",
    industry: "Pharmaceuticals",
    summary:
      "First-of-its-kind SAP Analytics Cloud budgeting automation for a pharma client in India.",
    challengeHighlights: [
      "Highly manual revenue and cost budgeting",
      "Lack of real-time visibility into forecasts",
    ],
    solutionHighlights: [
      "Implemented SAC-based budgeting for Revenue, OPEX, COGS",
      "Enabled workforce planning and live dashboards",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/client-logo.png",
    accentColor: "#EF4444",
  },

  {
    id: "sem-bcs-migration",
    title: "SEM BCS – Consolidation System Replacement",
    slug: "sem-bcs-consolidation-replacement",
    client: "Large Enterprise Group",
    industry: "Manufacturing / FMCG",
    summary:
      "Replaced multiple legacy consolidation systems with a unified SEM BCS solution.",
    challengeHighlights: [
      "Multiple consolidation systems across entities",
      "Manual intercompany and stock transfer eliminations",
    ],
    solutionHighlights: [
      "Implemented SEM BCS with multi-ledger and multi-currency support",
      "Automated intercompany eliminations and stock transfers",
      "Enabled purchase and equity method investment consolidation",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/client-logo.png",
    accentColor: "#10B981",
  },

  {
    id: "sac-industry-planning-suite",
    title: "SAP Analytics Cloud – Multi-Industry Planning Suite",
    slug: "sap-analytics-cloud-multi-industry-planning",
    client: "Multiple Enterprises",
    industry: "E-Commerce, FMCG, Manufacturing, Retail",
    summary:
      "Delivered industry-specific planning solutions across multiple domains using SAP Analytics Cloud.",
    challengeHighlights: [
      "Industry-specific planning requirements",
      "Security-driven multi-model design",
    ],
    solutionHighlights: [
      "Implemented labor, CAPEX, revenue, OPEX, COGS, and cash flow planning",
      "Designed multi-model SAC architecture aligned with security matrix",
      "Delivered long-term planning, simulations, and scenario analysis",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/client-logo.png",
    accentColor: "#6366F1",
  },

  {
    id: "datasphere-sac-financial-reporting",
    title: "SAP Datasphere & SAC – Enterprise Financial Reporting",
    slug: "sap-datasphere-sac-financial-reporting",
    client: "Global Enterprise",
    industry: "Finance / Enterprise Services",
    summary:
      "Built a modern financial analytics platform using SAP Datasphere and SAP Analytics Cloud.",
    challengeHighlights: [
      "Legacy data warehouse limitations",
      "Complex expense and inventory allocations",
    ],
    solutionHighlights: [
      "Migrated from third-party data warehouse to SAP Datasphere",
      "Enabled live SAC reporting on Datasphere models",
      "Delivered executive dashboards and allocation logic",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/client-logo.png",
    accentColor: "#0F766E",
  },

  {
    id: "sac-planning-consolidation-suite",
    title: "SAP Analytics Cloud – Planning & Consolidation Suite",
    slug: "sap-analytics-cloud-planning-consolidation-suite",
    client: "Multi-Entity Enterprise",
    industry: "Travel / Services / Manufacturing",
    summary:
      "Implemented integrated planning and consolidation covering finance, workforce, and operational domains.",
    challengeHighlights: [
      "Disconnected planning and consolidation processes",
      "Complex driver-based planning across regions",
    ],
    solutionHighlights: [
      "Delivered SAC-based budgeting, forecasting, and long-term planning",
      "Enabled management and statutory consolidation",
      "Built executive dashboards with driver-based planning logic",
    ],
    image: "/placeholders/case-study-placeholder.svg",
    logo: "/placeholders/client-logo.png",
    accentColor: "#7C3AED",
  },
]
;
