export interface Product {
  id: string;
  title: string;
  slug: string;
  category: 'financial' | 'enterprise' | 'migration';
  shortDescription: string;
  description: string;
  icon: string;
  features: {
    title: string;
    description: string;
    tags?: string[];
  }[];
  benefits: {
    title: string;
    description: string;
    metrics?: string[];
  }[];
  useCases: {
    title: string;
    description: string;
  }[];
  whyChoose?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    title: "SAP Analytics Cloud (SAC)",
    slug: "sap-analytics-cloud",
    category: "financial",
    shortDescription: "Enterprise planning, analytics, and predictive insights in one unified cloud platform",
    description: "SAP Analytics Cloud delivers powerful analytics and enterprise planning capabilities with real-time dashboards, reporting, budgeting, forecasting, and predictive analytics in a seamless user experience. Trusted by finance teams globally, SAC unifies BI, planning, and predictive analytics on a single platform powered by SAP HANA.",
    icon: "BarChart3",
    features: [
      {
        title: "Real-Time Dashboards & Stories",
        description: "Build interactive, self-service dashboards with drag-and-drop designer tools. Embed live calculations, dynamic charts, and drill-through capabilities for deep analytical exploration of your financial and operational data.",
        tags: ["BI", "Visualization", "Self-Service"]
      },
      {
        title: "Enterprise Financial Planning",
        description: "Comprehensive planning, budgeting, and forecasting with driver-based models, version management, and multi-entity consolidation. Connect operational and financial planning in a single environment to align strategy with execution.",
        tags: ["Budgeting", "Forecasting", "FP&A"]
      },
      {
        title: "Predictive Analytics & Smart Insights",
        description: "Leverage built-in machine learning algorithms to identify trends, anomalies, and forecast drivers automatically. Smart Predict and Smart Insights surface hidden patterns in your data to accelerate decision-making.",
        tags: ["ML", "Predictive", "AI"]
      },
      {
        title: "Collaborative Planning Workflows",
        description: "Streamline the planning cycle with structured workflows, commenting, approval processes, and audit trails. Enable finance and business teams to collaborate in real time within a governed environment.",
        tags: ["Collaboration", "Workflow", "Governance"]
      },
      {
        title: "Seamless SAP & Third-Party Integration",
        description: "Connect directly to SAP S/4HANA, SAP BW/4HANA, SAP Datasphere, and non-SAP sources via live connections or data imports. Maintain a single source of truth across your entire data landscape.",
        tags: ["Integration", "S/4HANA", "Connectivity"]
      },
      {
        title: "Mobile-First Analytics",
        description: "Access dashboards, planning models, and insights from any device. The SAC mobile app provides full analytical capability with offline support, enabling decision-makers to stay informed on the go.",
        tags: ["Mobile", "Offline", "Accessibility"]
      }
    ],
    benefits: [
      {
        title: "Accelerate Decision-Making Cycles",
        description: "Replace fragmented spreadsheets and disconnected tools with a unified analytics and planning platform. Finance teams report up to 60% faster planning cycles and a dramatic reduction in manual consolidation effort.",
        metrics: ["60% faster planning cycles", "Elimination of manual data consolidation", "Real-time access to live ERP data"]
      },
      {
        title: "Improve Forecast Accuracy with AI",
        description: "Machine learning-powered forecasting reduces forecast error by augmenting human judgment with data-driven predictions. Smart Predict models continuously improve as new actuals are incorporated.",
        metrics: ["25-40% improvement in forecast accuracy", "Automated anomaly detection", "Scenario modelling at scale"]
      },
      {
        title: "Unify Planning and Analytics in One Platform",
        description: "Eliminate the data handoff between BI and planning tools. With SAC, the same models that drive your dashboards power your planning process — ensuring full consistency and eliminating version conflicts.",
        metrics: ["Single source of truth", "No dual-maintenance of data", "Seamless BI-to-planning transition"]
      },
      {
        title: "Reduce IT Dependency for Finance Teams",
        description: "Finance users can build their own models, dashboards, and reports without relying on IT. Governed self-service reduces backlog and empowers business users to iterate faster.",
        metrics: ["70% reduction in IT-driven report requests", "Self-service model building", "Business-led analytics creation"]
      },
      {
        title: "Enterprise-Grade Security & Compliance",
        description: "Hosted on SAP's cloud infrastructure with ISO 27001, SOC 2, and GDPR compliance. Fine-grained access controls ensure sensitive financial data is accessible only to authorised users.",
        metrics: ["ISO 27001 certified environment", "GDPR & SOC 2 compliant", "Role-based access controls"]
      },
      {
        title: "Scalability Across the Enterprise",
        description: "SAC grows with your organisation — from departmental use cases to enterprise-wide deployment. Multi-tenancy, API access, and extensibility frameworks support complex enterprise rollouts.",
        metrics: ["Multi-entity support", "API-first extensibility", "Global deployment capability"]
      }
    ],
    useCases: [
      {
        title: "Integrated Financial Planning & Consolidation",
        description: "Connect financial planning, budgeting, and statutory consolidation in a single SAC environment. Streamline the hand-off from planning to actuals reporting with live SAP S/4HANA integration."
      },
      {
        title: "Sales & Revenue Forecasting",
        description: "Build predictive revenue models using ML that incorporate pipeline data, market signals, and historical seasonality. Enable sales leadership to simulate scenarios and commit to realistic targets."
      },
      {
        title: "Operational Performance Management",
        description: "Move beyond financial KPIs to incorporate operational metrics — supply chain, HR, and customer data — in a unified performance dashboard that drives cross-functional accountability."
      },
      {
        title: "Cost Centre & Profitability Analysis",
        description: "Perform granular cost allocation and profitability analysis by product, customer, region, or channel. Identify margin leakage and prioritise corrective actions with drill-down analytics."
      },
      {
        title: "Board & Executive Reporting",
        description: "Deliver polished, branded executive dashboards and board packs directly from SAC. Standardise on a single reporting platform and eliminate offline PowerPoint consolidation."
      },
      {
        title: "Workforce Planning & Headcount Modelling",
        description: "Integrate HR data to plan and forecast headcount, compensation, and skills gaps. Align people strategy with financial plans for a complete view of labour cost drivers."
      }
    ],
    whyChoose: [
      "Deep native integration with SAP S/4HANA and BW ecosystems",
      "Proven implementation methodology with SAP-certified delivery team",
      "Expert-led training and post-go-live hypercare support",
      "Accelerated deployment using pre-built industry content packages"
    ]
  },
  {
    id: "2",
    title: "SAP Advanced Financial Closing (AFC)",
    slug: "sap-advanced-financial-closing",
    category: "financial",
    shortDescription: "Streamline and automate your financial close process with cloud-based task management",
    description: "SAP AFC is a cloud-based solution designed to revolutionise and automate the financial close process, integrating seamlessly with SAP S/4HANA and other ERP systems. It provides a centralised task management framework for period-end close, dramatically reducing close times and increasing process transparency.",
    icon: "FileCheck",
    features: [
      {
        title: "Centralised Task List Management",
        description: "Create, assign, monitor, and execute all closing tasks from a single cockpit. Define templates with dependencies, ownership rules, and escalation paths to standardise the close process across all entities.",
        tags: ["Task Management", "Automation", "Templates"]
      },
      {
        title: "Real-Time Close Status Visibility",
        description: "Live dashboards provide up-to-the-minute visibility into close progress by entity, region, and task owner. Identify bottlenecks before they become delays and proactively manage exceptions.",
        tags: ["Monitoring", "Dashboards", "Transparency"]
      },
      {
        title: "Automation & Standardisation Engine",
        description: "Automate repetitive closing activities including journal entries, allocations, reconciliations, and accruals. Configurable business rules enforce standardised processes across all subsidiaries and legal entities.",
        tags: ["Automation", "Standardisation", "Rules Engine"]
      },
      {
        title: "Compliance & Audit Readiness",
        description: "Maintain comprehensive documentation of all close activities with time-stamped audit trails, approval records, and supporting evidence. Built-in controls and segregation-of-duties support regulatory requirements.",
        tags: ["Audit Trail", "Compliance", "Controls"]
      },
      {
        title: "Multi-Entity & Group Close Coordination",
        description: "Manage the close simultaneously across dozens or hundreds of legal entities. Parent-child task dependencies ensure group close milestones are met only after all subsidiary tasks are complete.",
        tags: ["Multi-Entity", "Group Close", "Consolidation"]
      },
      {
        title: "SAP & Non-SAP Integration",
        description: "Native integration with SAP S/4HANA, SAP Group Reporting, and SAP Analytics Cloud. Open APIs allow connection to non-SAP GL systems, enabling unified close management across a heterogeneous ERP landscape.",
        tags: ["S/4HANA", "Integration", "API"]
      }
    ],
    benefits: [
      {
        title: "Dramatically Shorten the Close Cycle",
        description: "Eliminate manual coordination overhead, handoffs, and status-chasing emails. Automated task dependencies and real-time notifications accelerate progression through the close cycle significantly.",
        metrics: ["30-50% reduction in close cycle time", "Automated task kick-off and escalation", "Parallel processing of non-dependent tasks"]
      },
      {
        title: "Increase Close Process Quality & Accuracy",
        description: "Standardised task templates and automated validation rules prevent errors from entering the financial statements. Mandatory checklists and reviewer sign-offs enforce quality at every step.",
        metrics: ["Reduction in post-close restatements", "Systematic validation at each close step", "Consistent process across all entities"]
      },
      {
        title: "Enhance Cross-Team Collaboration",
        description: "Finance, accounting, tax, and audit teams work in a shared, structured environment. Real-time commenting, document attachments, and review workflows replace fragmented email chains.",
        metrics: ["Unified collaboration workspace", "Structured review and approval flows", "Centralised supporting documentation"]
      },
      {
        title: "Achieve Regulatory Compliance with Confidence",
        description: "Comprehensive audit trails documenting every action, approval, and override provide regulators and auditors with the evidence trail they need. Segregation of duties controls are enforced systematically.",
        metrics: ["Full audit trail for external auditors", "SOX-ready control documentation", "IFRS and local GAAP compliance support"]
      },
      {
        title: "Scale to Any Organisational Complexity",
        description: "Whether managing 5 or 500 legal entities, AFC provides the same visibility and control. Role-based access ensures local teams see only their responsibilities while group controllers maintain full oversight.",
        metrics: ["Supports 500+ entity close programmes", "Hierarchical visibility by region/country", "Configurable for any organisational structure"]
      },
      {
        title: "Eliminate Manual Spreadsheet Tracking",
        description: "Replace fragile Excel-based close tracking with a purpose-built system. Eliminate version conflicts, formula errors, and the risk of overwriting critical close data.",
        metrics: ["Elimination of Excel close tracking", "No data loss from version conflicts", "Centralised single source of close truth"]
      }
    ],
    useCases: [
      {
        title: "Month-End & Year-End Financial Closing",
        description: "Orchestrate all recurring close activities — accruals, reconciliations, provisions, and reporting — through structured, automated task sequences that drive consistency each period."
      },
      {
        title: "Multi-Entity Group Close Management",
        description: "Coordinate close activities across subsidiary, regional, and corporate finance teams simultaneously, with parent tasks gating on completion of dependent subsidiary activities."
      },
      {
        title: "Audit & Regulatory Preparation",
        description: "Use AFC's comprehensive audit log and evidence repository to prepare for external audit engagements. Provide auditors with direct access to documented close activities and supporting files."
      },
      {
        title: "Post-Acquisition Entity Integration",
        description: "Rapidly onboard newly acquired entities into the group close framework by applying standard task templates. Reduce integration timelines for close processes from months to weeks."
      },
      {
        title: "Continuous Close Transformation",
        description: "Use AFC as the foundation for moving from a month-end close to a continuous close model. Automate daily reconciliations and sub-ledger postings to reduce period-end workload progressively."
      }
    ],
    whyChoose: [
      "Delivered by SAP-certified AFC specialists with multi-industry close experience",
      "Pre-built task templates for IFRS, US GAAP, and local statutory close requirements",
      "Rapid deployment with phased rollout methodology minimising business disruption",
      "Ongoing optimisation support including quarterly close health checks"
    ]
  },
  {
    id: "3",
    title: "SAP Group Reporting",
    slug: "sap-group-reporting",
    category: "financial",
    shortDescription: "Financial consolidation excellence integrated directly into SAP S/4HANA",
    description: "SAP Group Reporting integrates financial consolidation directly into SAP S/4HANA, transforming complex manual processes into streamlined, real-time workflows. As the strategic consolidation solution within the SAP ecosystem, it eliminates the need for a separate consolidation system and supports statutory, management, and segment reporting from a single solution.",
    icon: "Building2",
    features: [
      {
        title: "Group Reporting Data Collection (GRDC)",
        description: "Collect financial data from non-SAP entities with a cloud-based submission portal. Validate incoming data against configurable rules, reducing consolidation errors at source before the data enters the group model.",
        tags: ["Data Collection", "Non-SAP", "Validation"]
      },
      {
        title: "Automated Intercompany Matching & Elimination",
        description: "Real-time intercompany matching engine identifies and reconciles IC transactions across all entities automatically. Group controllers gain instant visibility into unreconciled balances before close commences.",
        tags: ["IC Elimination", "Reconciliation", "Automation"]
      },
      {
        title: "Unified Local & Group Close",
        description: "Perform local statutory close and group consolidation in a single integrated environment. Reduce data movement, reconciliation overhead, and the systemic risk of maintaining separate local and group ledgers.",
        tags: ["S/4HANA", "Unified Close", "Integration"]
      },
      {
        title: "IFRS & Multi-GAAP Compliance",
        description: "Support parallel accounting under IFRS, US GAAP, and local GAAP within a single group reporting framework. Manage currency translation, equity pickup, and elimination adjustments with built-in accounting intelligence.",
        tags: ["IFRS", "Multi-GAAP", "Compliance"]
      },
      {
        title: "SAP Analytics Cloud Integration",
        description: "Push consolidated financial data directly into SAC for advanced management reporting, variance analysis, and planning. Maintain full drill-through from group reports to individual entity journal lines.",
        tags: ["SAC", "Reporting", "Drill-Through"]
      },
      {
        title: "Complex Group Structure Support",
        description: "Handle complex ownership structures including minorities, joint ventures, and equity-method investments. Automated ownership percentage-based calculations eliminate manual journal entries.",
        tags: ["Minority Interest", "JV", "Equity Method"]
      }
    ],
    benefits: [
      {
        title: "Real-Time Consolidated Financial Data",
        description: "With Group Reporting embedded in S/4HANA, consolidated figures are available as actuals are posted — eliminating the batch processing delays of legacy consolidation systems.",
        metrics: ["Real-time consolidation as postings occur", "Elimination of overnight batch processing", "Interim consolidated reporting at any time"]
      },
      {
        title: "Significantly Accelerated Financial Close",
        description: "Combining local and group close in a single system eliminates the data extraction, cleansing, and loading cycle that consumes days in a standalone consolidation tool.",
        metrics: ["30-50% reduction in group close time", "Elimination of data extraction and loading", "Parallel local and group close activities"]
      },
      {
        title: "Unified Single Source of Truth",
        description: "A single, reconciled data model for local reporting, segment reporting, and statutory consolidation eliminates the reconciliation effort between systems. All stakeholders work from the same underlying data.",
        metrics: ["Zero reconciliation between local and group", "Single chart of accounts across entities", "Consistent data across all reporting views"]
      },
      {
        title: "Enhanced Precision with Full Audit Trail",
        description: "Drill from any consolidated figure down to the underlying local journal entry. Complete audit traceability satisfies external auditor requirements and accelerates the statutory audit process substantially.",
        metrics: ["Full drill-through to journal level", "Auditor-ready documentation trail", "Reduction in audit queries"]
      },
      {
        title: "Reduced IT Infrastructure & TCO",
        description: "Eliminating a standalone consolidation tool removes licensing, hosting, maintenance, and interface costs. Group Reporting is included in the S/4HANA licence, delivering significant TCO reduction.",
        metrics: ["Elimination of standalone consolidation system", "Reduced licence and maintenance cost", "No interface management overhead"]
      },
      {
        title: "Streamlined Statutory & Management Reporting",
        description: "Generate statutory financial statements and management pack reports from the same underlying data model. End the dual-track reporting process that creates inconsistencies.",
        metrics: ["Single model for statutory and management", "Automated financial statement generation", "Consistency between board and statutory reports"]
      }
    ],
    useCases: [
      {
        title: "Statutory Group Financial Consolidation",
        description: "Produce IFRS or local GAAP-compliant consolidated financial statements including P&L, balance sheet, cash flow statement, and notes automatically from a unified data model."
      },
      {
        title: "Management Reporting & Segment Disclosures",
        description: "Deliver segment reporting under IFRS 8 and management-format P&L structures from the same system, eliminating reconciliation between statutory and management reporting views."
      },
      {
        title: "Intercompany Reconciliation at Scale",
        description: "Automate intercompany balance matching and dispute resolution across 50, 100, or 200 legal entities. Identify unreconciled IC balances days before close rather than hours."
      },
      {
        title: "BPC to Group Reporting Migration",
        description: "Migrate from SAP BPC Consolidation to Group Reporting with a structured migration approach that preserves historical data, business logic, and reporting formats built over years."
      },
      {
        title: "Multi-GAAP Parallel Reporting",
        description: "Support entities that must report simultaneously under local statutory GAAP and IFRS. Maintain separate ledgers with automated parallel accounting for key adjustments."
      }
    ],
    whyChoose: [
      "Specialists in both legacy BPC consolidation and modern Group Reporting",
      "Deep IFRS, US GAAP, and Ind AS technical accounting expertise",
      "Pre-built consolidation accelerators for faster go-live",
      "Strong track record migrating complex multi-entity group structures"
    ]
  },
  {
    id: "4",
    title: "SAP PaPM",
    slug: "sap-papm",
    category: "financial",
    shortDescription: "Profitability and Performance Management for strategic decision-making",
    description: "SAP PaPM (Profitability and Performance Management) is a contemporary analytical solution designed for intricate calculations and simulations, enabling comprehensive profitability and performance insights. Built on SAP HANA's in-memory processing, PaPM delivers real-time cost allocation, transfer pricing, and profitability modelling at enterprise scale.",
    icon: "TrendingUp",
    features: [
      {
        title: "Advanced Profitability Modelling",
        description: "Create multi-dimensional profitability models by product, customer, region, channel, or cost centre. Support activity-based costing, direct and indirect cost allocations, and contribution margin analysis across any organisational structure.",
        tags: ["Cost Allocation", "ABC", "Multi-Dimensional"]
      },
      {
        title: "Real-Time In-Memory Calculations",
        description: "Powered by SAP HANA, PaPM processes millions of allocation and simulation calculations in real time. Instantly recalculate profitability impacts when business rules, volumes, or cost drivers change.",
        tags: ["HANA", "Real-Time", "Performance"]
      },
      {
        title: "What-If Scenario Simulations",
        description: "Model the profitability impact of strategic decisions before implementation — pricing changes, new product launches, outsourcing decisions, or organisational restructuring — with full scenario comparison capabilities.",
        tags: ["Simulation", "Scenarios", "Strategy"]
      },
      {
        title: "Transfer Pricing Automation",
        description: "Define, calculate, and document intercompany transfer prices for services, tangible goods, and financial instruments. Support arm's-length documentation and BEPS compliance with automated TP calculation engines.",
        tags: ["Transfer Pricing", "BEPS", "Intercompany"]
      },
      {
        title: "Regulatory Allocation Compliance",
        description: "Meet regulatory capital allocation requirements for financial services institutions including Basel III/IV, IFRS 17, and risk-adjusted performance measurement frameworks.",
        tags: ["Basel III", "IFRS 17", "Regulatory"]
      },
      {
        title: "Flexible Data Integration",
        description: "Ingest data from SAP S/4HANA, SAP BW, SAP Analytics Cloud, and external sources. A unified allocation model processes all data in a single calculation framework.",
        tags: ["Integration", "S/4HANA", "Data Fabric"]
      }
    ],
    benefits: [
      {
        title: "Strategic Decision-Making with Impactful Models",
        description: "Move from intuition-based decisions to data-driven profitability insights. Finance and strategy teams can quantify the cost and revenue impact of any strategic option before committing resources.",
        metrics: ["Full cost-to-serve visibility by customer", "Margin decomposition by product and channel", "Quantified ROI for strategic initiatives"]
      },
      {
        title: "Amplified Insights Through Advanced Analytics",
        description: "Combine granular allocation results with SAC's analytical capabilities for rich visualisation and drill-through. Empower business unit leaders with self-service access to their own profitability performance.",
        metrics: ["Business-unit self-service profitability", "Integrated with SAC for visualisation", "Drill-through from KPI to transaction"]
      },
      {
        title: "Real-Time Performance Steering",
        description: "With in-memory calculation speeds, business unit finance teams no longer wait days for allocation results. Profitability positions are updated as actuals flow in, enabling intra-period management action.",
        metrics: ["Real-time allocation results", "Intra-period profitability visibility", "Immediate impact of volume changes"]
      },
      {
        title: "Significant Cost Allocation Transparency",
        description: "Eliminate the 'black box' perception of overhead allocation. PaPM's transparent calculation engine shows every allocation step with full documentation, building trust in the numbers.",
        metrics: ["Full allocation chain visibility", "Business partner confidence in results", "Dispute reduction through transparency"]
      },
      {
        title: "Transfer Pricing Risk Reduction",
        description: "Automate TP calculations and documentation to reduce tax risk and compliance burden. Real-time calculations ensure TP prices remain arm's-length as volumes and costs fluctuate.",
        metrics: ["Reduced TP audit risk", "Automated BEPS documentation", "Consistent TP policy enforcement"]
      },
      {
        title: "Integration with Broader SAP Ecosystem",
        description: "PaPM sits at the centre of your SAP analytical landscape, feeding results to SAC for reporting, Group Reporting for statutory allocation, and AFC for period-end close tasks.",
        metrics: ["Native SAC integration for reporting", "Feeds Group Reporting for statutory", "Closed-loop with AFC close management"]
      }
    ],
    useCases: [
      {
        title: "Customer Profitability Analysis",
        description: "Calculate true cost-to-serve and net margin for each customer, customer segment, or distribution channel. Identify low-margin relationships and support pricing renegotiation with data-backed analysis."
      },
      {
        title: "Product Portfolio Profitability",
        description: "Allocate manufacturing, R&D, sales, and overhead costs to individual products or SKUs. Support portfolio rationalisation decisions with granular contribution margin data."
      },
      {
        title: "Transfer Pricing Optimisation",
        description: "Design intercompany pricing structures for services, IP royalties, and tangible goods that optimise the group tax position while meeting OECD arm's-length and BEPS compliance requirements."
      },
      {
        title: "Activity-Based Costing Implementation",
        description: "Replace traditional cost centre accounting with an activity-based costing model that assigns costs to the outputs — products, customers, and processes — that actually drive them."
      },
      {
        title: "Risk-Adjusted Performance Measurement",
        description: "For financial services organisations, calculate RAROC, EVA, and risk-adjusted return metrics at business line and product level for capital allocation and performance incentive purposes."
      }
    ],
    whyChoose: [
      "Extensive PaPM implementation experience across financial services, manufacturing, and retail",
      "Technical expertise in HANA-based calculation frameworks and complex allocation models",
      "Deep knowledge of transfer pricing regulations and BEPS compliance",
      "Integration expertise connecting PaPM with SAC, Group Reporting, and S/4HANA"
    ]
  },
  {
    id: "5",
    title: "SAP Business Data Cloud (BDC)",
    slug: "sap-business-data-cloud",
    category: "financial",
    shortDescription: "Unified data management platform combining SAC, Datasphere, and BTP capabilities",
    description: "SAP Business Data Cloud unifies data management, advanced analytics, and intelligent automation into a comprehensive cloud solution for enterprise transformation. BDC represents SAP's next-generation data strategy, bringing together SAP Analytics Cloud, SAP Datasphere, and the SAP Business Technology Platform in a single, cohesive data experience.",
    icon: "Cloud",
    features: [
      {
        title: "Unified Data Platform Architecture",
        description: "Combines SAP Analytics Cloud for analytics and planning, SAP Datasphere for data management, and SAP BTP for development and integration in a single governed environment. Break down data silos across SAP and non-SAP landscapes.",
        tags: ["SAC", "Datasphere", "BTP"]
      },
      {
        title: "Enterprise AI & Machine Learning",
        description: "Embed AI capabilities directly into business processes with SAP's Joule AI assistant and pre-built ML models. Automate anomaly detection, predictive forecasting, and natural language data exploration.",
        tags: ["AI", "ML", "Joule"]
      },
      {
        title: "Data Governance & Business Semantics",
        description: "Centralised data catalogue with business glossary, lineage tracking, and quality monitoring. Business users discover and consume trusted data through a semantic layer without needing to understand underlying technical structures.",
        tags: ["Governance", "Catalogue", "Lineage"]
      },
      {
        title: "Real-Time Data Streaming & Integration",
        description: "Ingest real-time data streams from IoT, transactional systems, and external sources via event-driven architecture. Support both batch and streaming data patterns in a unified integration framework.",
        tags: ["Streaming", "Real-Time", "Integration"]
      },
      {
        title: "Cloud-Native Scalable Architecture",
        description: "BDC is built cloud-native on SAP's hyperscaler partnerships with AWS, Azure, and Google Cloud. Auto-scaling infrastructure ensures performance as data volumes grow without manual capacity management.",
        tags: ["Cloud-Native", "Scalability", "Hyperscaler"]
      },
      {
        title: "Open Data Ecosystem",
        description: "Support open standards including Delta Lake, Apache Spark, and OData APIs. Connect third-party BI tools, data science environments, and custom applications while maintaining SAP's business semantic layer.",
        tags: ["Open Standards", "Delta Lake", "APIs"]
      }
    ],
    benefits: [
      {
        title: "Unified SAP and Non-SAP Data Foundation",
        description: "BDC creates a coherent data landscape by harmonising SAP ERP data with external sources — eliminating the fragmented integration landscape that creates inconsistencies between departmental reporting.",
        metrics: ["Single semantic layer across all sources", "Elimination of data silo reconciliation", "Consistent KPI definitions enterprise-wide"]
      },
      {
        title: "Dramatically Reduced Data Silos & Costs",
        description: "Consolidating multiple point solutions into a unified BDC architecture reduces licensing costs, maintenance overhead, and the integration complexity of managing disparate data tools.",
        metrics: ["Reduction in point solution sprawl", "Lower data integration maintenance cost", "Simplified vendor management"]
      },
      {
        title: "Accelerated Innovation Through Data Access",
        description: "Business teams can access trusted, governed data without IT tickets. A unified semantic layer accelerates the development of new analytical use cases, dashboards, and planning models.",
        metrics: ["70% faster analytical use case delivery", "Business-led data exploration", "Governed self-service data access"]
      },
      {
        title: "Enhanced Data Governance & Security",
        description: "Centralised governance ensures data policies, access controls, and quality standards are applied consistently across the entire data landscape. Complete audit trails satisfy regulatory and compliance requirements.",
        metrics: ["Centralised access control management", "Policy enforcement at data layer", "Regulatory audit trail coverage"]
      },
      {
        title: "Future-Ready AI Integration",
        description: "BDC's architecture is designed to support emerging AI use cases including natural language querying, generative BI, and autonomous process automation — positioning your organisation at the forefront of enterprise AI.",
        metrics: ["Joule AI assistant integration", "Natural language data querying", "Generative AI-ready architecture"]
      },
      {
        title: "Faster Time-to-Value on Analytics Investments",
        description: "Pre-built content packages, templates, and industry-specific data models accelerate deployment timelines. BDC's unified environment reduces the complexity that typically extends analytics project timelines.",
        metrics: ["Pre-built industry data models", "Accelerated deployment timelines", "Faster realisation of analytics ROI"]
      }
    ],
    useCases: [
      {
        title: "Enterprise Data Management & Governance",
        description: "Implement a governed, enterprise-wide data management programme using BDC's catalogue, lineage, and quality capabilities. Establish a single source of trusted business data."
      },
      {
        title: "Integrated Financial & Operational Planning",
        description: "Connect financial planning in SAC with supply chain, sales, and operational data in Datasphere for a fully integrated business planning cycle driven by a unified data foundation."
      },
      {
        title: "Cross-Functional Business Intelligence",
        description: "Build enterprise-wide BI programmes that connect finance, HR, supply chain, and customer analytics in a single semantic layer — enabling cross-functional performance management."
      },
      {
        title: "AI-Powered Financial Analytics",
        description: "Deploy Joule and pre-built ML models to automate financial anomaly detection, cash flow forecasting, and expense analysis — reducing manual analytical workload."
      },
      {
        title: "Regulatory Data Reporting",
        description: "Centralise regulatory reporting data preparation using BDC's governance and traceability capabilities. Support BCBS 239, GDPR, and other regulatory data requirements."
      }
    ],
    whyChoose: [
      "Early expertise in BDC deployment and SAP's latest cloud data strategy",
      "Certified SAP Datasphere and SAP Analytics Cloud implementation partner",
      "Full-stack capability from data engineering to analytics and AI",
      "Accelerator framework for rapid BDC onboarding and value delivery"
    ]
  },
  {
    id: "6",
    title: "SAP Datasphere",
    slug: "sap-datasphere",
    category: "enterprise",
    shortDescription: "Next-generation unified data experience for modern enterprises",
    description: "SAP Datasphere is a cloud-based data service delivering seamless, scalable, and unified access to mission-critical business data across your organisation. As SAP's strategic data management layer, Datasphere provides data fabric capabilities, semantic modelling, and business context preservation across hybrid and multi-cloud environments.",
    icon: "Database",
    features: [
      {
        title: "Universal Data Connectivity",
        description: "Connect to SAP S/4HANA, SAP BW, Salesforce, Snowflake, Azure, AWS, and hundreds of other sources via pre-built adapters. Maintain live connections for real-time data access or ingest into Datasphere for transformations.",
        tags: ["Connectivity", "Multi-Source", "Live Data"]
      },
      {
        title: "Data Virtualisation & Federated Access",
        description: "Access and analyse data across multiple systems without physically moving it. Data virtualisation enables real-time queries across distributed data stores, preserving the single source of truth principle.",
        tags: ["Virtualisation", "Federation", "Real-Time"]
      },
      {
        title: "Business Semantic Layer",
        description: "Abstract technical data models behind business-friendly entities with intuitive names, relationships, and KPI definitions. Business users interact with familiar concepts without needing to understand the underlying database structures.",
        tags: ["Semantics", "Business Layer", "Self-Service"]
      },
      {
        title: "Data Governance & Quality Management",
        description: "Comprehensive data catalogue with automatic metadata harvesting, business glossary, data lineage, and quality monitoring. Establish clear data ownership, stewardship, and quality standards.",
        tags: ["Governance", "Quality", "Catalogue"]
      },
      {
        title: "Open Analytics Ecosystem",
        description: "Serve any analytics tool from Datasphere's semantic layer — SAP Analytics Cloud, Microsoft Power BI, Tableau, and custom applications. An open, standards-based approach preserves investment in existing analytics tooling.",
        tags: ["Open Standards", "Multi-BI", "Extensibility"]
      },
      {
        title: "Collaboration & Data Sharing",
        description: "Share curated datasets across internal teams and external partners using Datasphere's governed data sharing capabilities. Data Marketplace supports the monetisation and distribution of trusted business data products.",
        tags: ["Data Sharing", "Collaboration", "Marketplace"]
      }
    ],
    benefits: [
      {
        title: "Enhanced Decision-Making with Real-Time Data",
        description: "Business users gain instant access to live, contextualised data from any source system. Decision latency is dramatically reduced when the data required is always current and accessible through familiar business concepts.",
        metrics: ["Real-time access to live ERP data", "Elimination of stale data reports", "Instant KPI updates as transactions occur"]
      },
      {
        title: "Accelerated Innovation Through Unified Access",
        description: "Development teams build new analytical applications faster when a unified semantic layer eliminates the need to re-engineer data access for every new use case. Reusable data entities accelerate time-to-value.",
        metrics: ["60% faster analytical application development", "Reusable semantic entities", "Reduced data engineering overhead"]
      },
      {
        title: "Scalability Without Performance Compromise",
        description: "Datasphere's cloud-native architecture scales to meet enterprise data volumes and query concurrency without manual capacity management. Pay for what you use with elastic compute and storage.",
        metrics: ["Auto-scaling for peak analytical workloads", "No capacity pre-provisioning required", "Consistent performance at scale"]
      },
      {
        title: "Reduced Complexity with Harmonised Data",
        description: "A single semantic layer that harmonises data from dozens of sources eliminates the shadow IT and point-to-point integration sprawl that characterises legacy data architectures.",
        metrics: ["Reduction in point-to-point integrations", "Elimination of shadow IT data models", "Harmonised master data across systems"]
      },
      {
        title: "Strong Data Governance & Compliance",
        description: "Complete data lineage from report to source system, combined with access controls and quality monitoring, ensures data governance requirements are met and compliance audits are straightforward.",
        metrics: ["End-to-end data lineage documentation", "Fine-grained access control", "Automated data quality monitoring"]
      },
      {
        title: "Preservation of SAP Business Semantics",
        description: "Unlike generic data platforms, Datasphere understands SAP's business objects — company codes, cost centres, plants, and business partners — preserving the context that makes SAP data meaningful for analysis.",
        metrics: ["Native SAP business context", "Pre-built SAP content models", "Reduced modelling effort for SAP data"]
      }
    ],
    useCases: [
      {
        title: "Modern Enterprise Data Warehouse",
        description: "Replace or augment legacy SAP BW implementations with a modern, cloud-native data warehouse on Datasphere. Migrate existing BW queries and InfoProviders with SAP's managed transition tools."
      },
      {
        title: "Data Fabric Implementation",
        description: "Build an enterprise data fabric connecting cloud, on-premise, and third-party data sources under a unified governance and semantic layer — eliminating data silos without a costly migration."
      },
      {
        title: "Hybrid and Multi-Cloud Analytics",
        description: "Support organisations with data distributed across on-premise SAP, public cloud (AWS, Azure, GCP), and SaaS applications. Datasphere provides a unified analytical experience regardless of data location."
      },
      {
        title: "Self-Service Analytics Enablement",
        description: "Empower business teams with governed self-service data access. The semantic layer ensures users can explore data independently without risk of misinterpreting technical database structures."
      },
      {
        title: "AI/ML Feature Engineering",
        description: "Provide data science teams with clean, contextualised, governed data for AI and machine learning model development. Datasphere's integration with Python and open ML frameworks accelerates model training."
      }
    ],
    whyChoose: [
      "Certified SAP Datasphere delivery partner with deep data engineering capabilities",
      "Expertise migrating legacy SAP BW landscapes to Datasphere",
      "Full capability from data modelling to semantic layer and analytics consumption",
      "Proven hybrid and multi-cloud data architecture experience"
    ]
  },
  {
    id: "7",
    title: "SAP Ariba",
    slug: "sap-ariba",
    category: "enterprise",
    shortDescription: "Cloud-based procurement and supply chain transformation platform",
    description: "SAP Ariba is the world's leading cloud-based procurement solution, connecting buyers and suppliers on a dynamic network of over 5 million partners worldwide. SSR Fintech delivers end-to-end Ariba implementations that transform procurement from a cost centre into a strategic value driver — reducing costs, improving compliance, and strengthening supplier relationships.",
    icon: "ShoppingCart",
    features: [
      {
        title: "End-to-End Procurement Automation",
        description: "Automate the complete purchase-to-pay lifecycle from requisition to invoice payment. Eliminate manual purchase orders, approval bottlenecks, and paper-based invoice processing with intelligent workflow automation.",
        tags: ["P2P", "Automation", "Invoice Processing"]
      },
      {
        title: "Global Supplier Network",
        description: "Leverage Ariba's network of 5M+ connected suppliers across every industry and geography. Enable electronic trading, onboarding, and collaboration with suppliers of all sizes through a standardised digital platform.",
        tags: ["Supplier Network", "Global", "e-Commerce"]
      },
      {
        title: "Guided Buying Experience",
        description: "Consumer-grade shopping interface routes purchases to preferred suppliers and contracts automatically. Policy compliance is enforced at point of purchase, reducing maverick spend without restricting business users.",
        tags: ["Guided Buying", "Compliance", "UX"]
      },
      {
        title: "Spend Analytics & Category Management",
        description: "Real-time visibility into spend by category, supplier, cost centre, and geography. Advanced analytics identify savings opportunities, consolidation candidates, and compliance gaps.",
        tags: ["Spend Analytics", "Category Mgmt", "Savings"]
      },
      {
        title: "Contract Lifecycle Management",
        description: "Centralise contract creation, negotiation, approval, and compliance monitoring. AI-powered contract analysis identifies clause deviations, renewal risks, and compliance obligations.",
        tags: ["Contracts", "CLM", "AI Analysis"]
      },
      {
        title: "Supplier Risk & Performance Management",
        description: "Continuously monitor supplier financial health, ESG performance, and delivery metrics. Built-in risk scoring and automated alerts enable proactive supply chain risk management.",
        tags: ["Risk Management", "ESG", "Performance"]
      }
    ],
    benefits: [
      {
        title: "Drive Strategic Procurement Value",
        description: "Transform procurement from reactive order processing to strategic sourcing. Category managers gain the data and tools to negotiate better contracts, manage supplier relationships, and drive innovation.",
        metrics: ["8-12% cost reduction on addressable spend", "Strategic sourcing enablement", "Supplier-led innovation programmes"]
      },
      {
        title: "Boost Efficiency Across the P2P Cycle",
        description: "Automation of routine procurement tasks frees procurement professionals to focus on strategic value-adding activities rather than transactional processing.",
        metrics: ["80% reduction in manual PO creation", "3-way match automation for invoices", "Days payable outstanding optimisation"]
      },
      {
        title: "Achieve Significant and Measurable Cost Savings",
        description: "Consolidation of spend to preferred suppliers, elimination of maverick buying, and competitive sourcing events deliver measurable year-one savings that rapidly justify the Ariba investment.",
        metrics: ["10-15% reduction in maverick spend", "Competitive sourcing event value capture", "Early payment discount programme enablement"]
      },
      {
        title: "Strengthen Compliance & Mitigate Supply Chain Risk",
        description: "Automated policy enforcement at the point of purchase, coupled with continuous supplier risk monitoring, significantly reduces procurement compliance failures and supply chain disruption exposure.",
        metrics: ["90%+ policy compliance on managed spend", "Real-time supplier risk scoring", "Automated contract compliance monitoring"]
      },
      {
        title: "Accelerate Supplier Onboarding & Collaboration",
        description: "Digital supplier onboarding through the Ariba network reduces supplier registration from weeks to days. Self-service portals empower suppliers to manage their profiles and submit invoices independently.",
        metrics: ["90% reduction in supplier onboarding time", "Self-service supplier portal", "Dispute resolution cycle acceleration"]
      },
      {
        title: "End-to-End Spend Visibility",
        description: "Capture 100% of enterprise spend including indirect, services, and tail spend in a unified analytics environment. Identify off-contract spend and consolidation opportunities.",
        metrics: ["Full spend capture including tail spend", "Category-level benchmarking", "Real-time budget vs actual tracking"]
      }
    ],
    useCases: [
      {
        title: "Procure-to-Pay Transformation",
        description: "Digitise the complete P2P process from catalogue-driven requisitioning through automated invoice processing and ERP-integrated payment. Achieve touchless invoice processing rates exceeding 70%."
      },
      {
        title: "Source-to-Contract Optimisation",
        description: "Run competitive RFx events, evaluate supplier proposals, and negotiate and execute contracts digitally. Capture value from strategic sourcing events and enforce contracted pricing."
      },
      {
        title: "Supplier Relationship Management",
        description: "Establish formal SRM programmes with key suppliers using Ariba's supplier performance management capabilities. Collaborate on improvement plans and ESG reporting."
      },
      {
        title: "ESG Supply Chain Compliance",
        description: "Monitor and report on supplier sustainability performance, human rights compliance, and carbon footprint data. Meet increasing regulatory requirements for supply chain ESG disclosure."
      },
      {
        title: "Finance & Procurement Integration",
        description: "Integrate Ariba with SAP S/4HANA Finance for real-time budget checking, commitment accounting, and cash flow visibility. Eliminate the disconnect between procurement and financial planning."
      }
    ],
    whyChoose: [
      "SAP Ariba certified delivery partner with global implementation experience",
      "Expertise in complex SAP S/4HANA and Ariba integration landscapes",
      "Procurement transformation methodology combining technology and process redesign",
      "Post-go-live adoption and benefits realisation tracking programme"
    ]
  },
  {
    id: "8",
    title: "SAP SuccessFactors",
    slug: "sap-successfactors",
    category: "enterprise",
    shortDescription: "Comprehensive cloud-based human capital management solution",
    description: "SAP SuccessFactors provides end-to-end HCM capabilities including core HR, talent management, HR analytics, and employee experience management. As the leading cloud HCM solution, SuccessFactors helps organisations attract, develop, and retain the talent required to execute their business strategy in a competitive environment.",
    icon: "Users",
    features: [
      {
        title: "Core HR & Global Payroll",
        description: "Complete employee lifecycle management from hire to retire, with local and global payroll processing, compliance management, and workforce administration. Supports 100+ country localisation requirements.",
        tags: ["Core HR", "Payroll", "Global"]
      },
      {
        title: "Talent Acquisition & Onboarding",
        description: "AI-powered recruiting with job posting automation, candidate matching, interview scheduling, and offer management. Structured digital onboarding programmes increase new hire engagement and time-to-productivity.",
        tags: ["Recruiting", "AI Matching", "Onboarding"]
      },
      {
        title: "Performance & Goals Management",
        description: "Continuous performance management with OKR-based goal setting, real-time feedback, check-ins, and year-end reviews. Calibration tools and compensation linkage ensure fair and consistent performance outcomes.",
        tags: ["Performance", "OKRs", "Feedback"]
      },
      {
        title: "Learning Management & Development",
        description: "Comprehensive LMS with content authoring, external content integration, compliance training management, and learning pathways. AI-powered skill recommendations personalise development for every employee.",
        tags: ["LMS", "E-Learning", "Skills"]
      },
      {
        title: "Succession & Career Development",
        description: "Identify, develop, and retain high-potential talent through structured succession planning and career path frameworks. Ensure leadership continuity and reduce the impact of critical role turnover.",
        tags: ["Succession", "Career Planning", "Retention"]
      },
      {
        title: "People Analytics & Workforce Planning",
        description: "Advanced HR analytics with pre-built dashboards, predictive attrition models, and workforce planning tools. Integrate people data with financial and operational metrics for holistic performance management.",
        tags: ["Analytics", "Predictive", "Planning"]
      }
    ],
    benefits: [
      {
        title: "Unified HR Processes Across Global Workforce",
        description: "Standardise HR processes across all geographies, business units, and entities on a single platform. Eliminate the administrative complexity and inconsistency of managing multiple regional HR systems.",
        metrics: ["Single HR system of record globally", "Consistent employee experience everywhere", "Reduced HR system maintenance cost"]
      },
      {
        title: "Enhanced Employee Experience & Engagement",
        description: "Modern, intuitive HR interfaces accessible via mobile improve employee self-service adoption and satisfaction. Personalised development recommendations and continuous feedback loops drive engagement.",
        metrics: ["Higher employee self-service adoption", "Improved engagement survey scores", "Reduced HR administrative workload"]
      },
      {
        title: "Data-Driven Talent Decision Making",
        description: "Replace gut-feel talent decisions with data-backed insights. Identify flight risks before they leave, optimise talent deployment, and measure the ROI of people development programmes.",
        metrics: ["Predictive attrition identification", "Evidence-based promotion decisions", "Talent programme ROI measurement"]
      },
      {
        title: "Accelerated Talent Acquisition",
        description: "AI-powered candidate matching and streamlined hiring workflows reduce time-to-hire significantly. Consistent candidate experience and faster offer processes improve conversion rates for top talent.",
        metrics: ["30-40% reduction in time-to-hire", "Improved offer acceptance rates", "Consistent candidate experience"]
      },
      {
        title: "Compliance & Risk Management",
        description: "Manage HR compliance requirements across 100+ countries including mandatory reporting, statutory filings, and employment law adherence. Built-in localisation reduces compliance risk in complex multi-country operations.",
        metrics: ["100+ country compliance coverage", "Automated statutory reporting", "Employment law change management"]
      },
      {
        title: "Scalable Cloud-Based HR Platform",
        description: "SuccessFactors scales with organisational growth — from 500 to 500,000 employees — without hardware investment or major platform upgrades. Quarterly feature releases keep the system current with HR best practices.",
        metrics: ["Elastic scaling for organisational growth", "Quarterly innovation release cycle", "No infrastructure management required"]
      }
    ],
    useCases: [
      {
        title: "Global HR Transformation",
        description: "Consolidate fragmented HR systems across multiple geographies onto a single SuccessFactors platform. Standardise people processes while accommodating local statutory and cultural requirements."
      },
      {
        title: "Performance Culture Implementation",
        description: "Shift from annual performance reviews to continuous performance management. Implement OKR frameworks, continuous feedback, and calibration processes that drive a high-performance culture."
      },
      {
        title: "Talent Pipeline & Succession Planning",
        description: "Build structured talent pipelines for critical roles. Identify successors for key positions, create development plans, and track readiness to reduce exposure to leadership capability gaps."
      },
      {
        title: "People Analytics & Strategic Workforce Planning",
        description: "Develop a workforce strategy informed by predictive analytics. Model the impact of attrition, growth, and skills evolution on future workforce capability requirements."
      },
      {
        title: "HR Systems Consolidation Post-Merger",
        description: "Rapidly integrate acquired company HR systems and processes onto the SuccessFactors platform post-acquisition. Standardise policies, reporting, and employee data to accelerate integration value."
      }
    ],
    whyChoose: [
      "SAP SuccessFactors certified implementation partner",
      "Deep expertise in global HR transformation programmes across multiple industries",
      "Change management and adoption support integral to implementation methodology",
      "Experience integrating SuccessFactors with SAP S/4HANA Finance and Payroll"
    ]
  },
  {
    id: "9",
    title: "Migration Services",
    slug: "migration-services",
    category: "migration",
    shortDescription: "Expert-led migration from legacy systems to modern SAP cloud solutions",
    description: "Comprehensive migration services helping organisations transition from legacy systems to modern SAP solutions. SSR Fintech has delivered migrations for dozens of clients globally — from BPC to SAC Planning, EC-CS to Group Reporting, and on-premise ERP to SAP S/4HANA — using a proven methodology that protects business continuity and data integrity throughout.",
    icon: "ArrowRightLeft",
    features: [
      {
        title: "BPC to SAP Analytics Cloud Migration",
        description: "Migrate SAP BPC Standard and Embedded planning environments to SAP Analytics Cloud Planning. Preserve existing business logic, dimension structures, and reporting formats while gaining SAC's cloud-native planning capabilities.",
        tags: ["BPC", "SAC", "Planning"]
      },
      {
        title: "EC-CS / BPC to Group Reporting",
        description: "Migrate legacy SAP EC-CS or BPC Consolidation environments to SAP Group Reporting embedded in S/4HANA. Preserve consolidation rules, elimination logic, and historical consolidated data throughout the transition.",
        tags: ["EC-CS", "Group Reporting", "Consolidation"]
      },
      {
        title: "SAP BW to SAP Datasphere",
        description: "Modernise legacy SAP BW and BW/4HANA environments by migrating data models, InfoProviders, and queries to SAP Datasphere. Leverage SAP's migration tooling and SSR's BW expertise for controlled, phased transition.",
        tags: ["BW", "Datasphere", "Modernisation"]
      },
      {
        title: "ECC to SAP S/4HANA Migration",
        description: "Lead or support the migration from SAP ECC to S/4HANA using greenfield, brownfield, or selective data transition approaches. EPM integration design ensures planning and consolidation tools work seamlessly on S/4HANA.",
        tags: ["ECC", "S/4HANA", "ERP"]
      },
      {
        title: "Data Migration & Reconciliation Framework",
        description: "Structured data migration methodology with automated extraction, transformation, loading, and validation. Multi-layer reconciliation framework ensures data completeness and accuracy before cutover authorisation.",
        tags: ["Data Migration", "ETL", "Reconciliation"]
      },
      {
        title: "Change Management & User Enablement",
        description: "End-user training programmes, super user networks, and hypercare support ensure adoption of new systems. Structured change management reduces productivity dip during and after go-live.",
        tags: ["Change Management", "Training", "Adoption"]
      }
    ],
    benefits: [
      {
        title: "Minimise Business Disruption During Migration",
        description: "Parallel running strategies, phased cutover approaches, and comprehensive fallback plans ensure business continuity throughout the migration. Finance teams continue closing periods while the migration progresses.",
        metrics: ["Zero disruption to financial close cycles", "Phased cutover with rollback capability", "Business continuity throughout programme"]
      },
      {
        title: "Preserve Historical Data and Business Logic",
        description: "SSR's migration framework preserves decades of historical financial data and the embedded business logic in planning models and consolidation rules. Business users find familiar processes in the new system.",
        metrics: ["100% historical data preservation", "Business logic migration with validation", "Familiar process in new system"]
      },
      {
        title: "Accelerate Time-to-Value on New Platforms",
        description: "Pre-built migration accelerators, content templates, and proven methodology significantly reduce migration timelines versus a build-from-scratch approach. Organisations realise the benefits of the new platform faster.",
        metrics: ["30-40% reduction in migration timeline", "Pre-built content reduces build effort", "Faster realisation of cloud benefits"]
      },
      {
        title: "Reduce Migration Risk with Proven Methodology",
        description: "SSR's migration methodology incorporates lessons learned from dozens of global migrations. Structured risk management, testing frameworks, and governance checkpoints reduce the probability and impact of migration issues.",
        metrics: ["Structured risk register and mitigation plan", "Multi-layer UAT and parallel run testing", "Proven cutover playbook"]
      },
      {
        title: "Optimise and Improve During Migration",
        description: "Migration is an opportunity to streamline processes, rationalise data models, and eliminate technical debt. SSR ensures clients migrate to a best-practice target state, not a like-for-like replica of legacy shortcomings.",
        metrics: ["Process optimisation during migration", "Data model rationalisation", "Technical debt elimination"]
      },
      {
        title: "Expert-Led Programme Governance",
        description: "Experienced programme managers, solution architects, and functional consultants provide end-to-end governance from project initiation through to hypercare. Clear accountabilities and escalation paths protect delivery.",
        metrics: ["Dedicated programme management", "Architecture governance throughout", "Weekly steering committee cadence"]
      }
    ],
    useCases: [
      {
        title: "BPC to SAC Planning Migration",
        description: "Migrate SAP BPC Standard or Embedded planning models to SAC Planning. Recreate dimension structures, business rules, data actions, and planning sequences in SAC with improved performance and user experience."
      },
      {
        title: "EC-CS / BPC to Group Reporting",
        description: "Transition consolidation environments from EC-CS or BPC Consolidation to Group Reporting in S/4HANA. Migrate legal entities, consolidation rules, eliminations, and historical consolidated trial balances."
      },
      {
        title: "SAP BW to Datasphere Modernisation",
        description: "Migrate BW InfoCubes, DSOs, and queries to Datasphere spaces, views, and SAC stories. Leverage SAP's migration tooling for automated object conversion where applicable."
      },
      {
        title: "On-Premise to Cloud Transformation",
        description: "Migrate entire SAP landscapes from on-premise infrastructure to SAP's cloud. Design integration, security, and connectivity architectures appropriate for cloud-hosted SAP environments."
      },
      {
        title: "Post-Merger System Consolidation",
        description: "Consolidate multiple SAP instances acquired through M&A activity onto a single SAP cloud landscape. Harmonise master data, chart of accounts, and financial structures across merged entities."
      }
    ],
    whyChoose: [
      "Dozens of successful migrations across the complete SAP EPM and ERP landscape",
      "Deep technical expertise in legacy SAP systems combined with modern cloud platforms",
      "Pre-built migration accelerators that significantly reduce timelines and effort",
      "Strong track record of on-time, on-budget delivery with zero data loss incidents"
    ]
  }
];

export const productCategories = {
  financial: {
    title: "Financial Solutions",
    description: "Comprehensive SAP financial management and analytics solutions",
    products: products.filter(p => p.category === 'financial')
  },
  enterprise: {
    title: "Enterprise Solutions",
    description: "Enterprise-wide SAP solutions for operations and workforce",
    products: products.filter(p => p.category === 'enterprise')
  },
  migration: {
    title: "Migration Services",
    description: "Expert migration from legacy systems to modern SAP platforms",
    products: products.filter(p => p.category === 'migration')
  }
};
