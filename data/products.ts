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
  }[];
  benefits: string[];
  useCases?: string[];
}

export const products: Product[] = [
  // Financial Solutions
  {
    id: "1",
    title: "SAP Analytics Cloud (SAC)",
    slug: "sap-analytics-cloud",
    category: "financial",
    shortDescription: "Enterprise planning, analytics, and predictive insights in one unified cloud platform",
    description: "SAP Analytics Cloud delivers powerful analytics and enterprise planning capabilities with real-time dashboards, reporting, budgeting, forecasting, and predictive analytics in a seamless user experience.",
    icon: "BarChart3",
    features: [
      {
        title: "Real-Time Dashboards",
        description: "Interactive dashboards with live data visualization and insights"
      },
      {
        title: "Enterprise Planning",
        description: "Comprehensive planning, budgeting, and forecasting capabilities"
      },
      {
        title: "Predictive Analytics",
        description: "Machine learning-powered forecasting and scenario modeling"
      },
      {
        title: "Collaborative Workflows",
        description: "Team collaboration tools for shared planning and analysis"
      }
    ],
    benefits: [
      "Unified analytics and planning in one platform",
      "Real-time insights for faster decision-making",
      "Machine learning integration for predictive insights",
      "Seamless SAP ecosystem integration"
    ],
    useCases: [
      "Financial planning and consolidation",
      "Sales forecasting and analysis",
      "Operational performance management"
    ]
  },
  {
    id: "2",
    title: "SAP Advanced Financial Closing (AFC)",
    slug: "sap-advanced-financial-closing",
    category: "financial",
    shortDescription: "Streamline and automate your financial close process with cloud-based task management",
    description: "SAP AFC is a cloud-based solution designed to revolutionize and automate the financial close process, integrating seamlessly with SAP S/4HANA and other ERP systems.",
    icon: "FileCheck",
    features: [
      {
        title: "Task List Management",
        description: "Create, monitor, and execute closing tasks efficiently with automated workflows"
      },
      {
        title: "Real-Time Insights",
        description: "Up-to-the-minute visibility into financial close status across entities"
      },
      {
        title: "Automation & Standardization",
        description: "Automate reconciliations, journal entries, and financial reporting"
      },
      {
        title: "Compliance & Audit Readiness",
        description: "Centralized documentation and robust security controls for compliance"
      }
    ],
    benefits: [
      "Accelerate close cycles and reduce manual effort",
      "Increase accuracy and transparency",
      "Enhanced collaboration across finance teams",
      "Meet regulatory requirements with audit trails"
    ],
    useCases: [
      "Month-end and year-end financial closing",
      "Multi-entity consolidation processes",
      "Regulatory compliance and audit preparation"
    ]
  },
  {
    id: "3",
    title: "SAP Group Reporting",
    slug: "sap-group-reporting",
    category: "financial",
    shortDescription: "Financial consolidation excellence integrated directly into SAP S/4HANA",
    description: "SAP Group Reporting integrates financial consolidation directly into SAP S/4HANA, transforming complex manual processes into streamlined, real-time workflows.",
    icon: "Building2",
    features: [
      {
        title: "Group Reporting Data Collection (GRDC)",
        description: "Streamlined data collection from non-SAP entities with validations"
      },
      {
        title: "Intercompany Matching & Reconciliation",
        description: "Automated intercompany matching with real-time visibility"
      },
      {
        title: "Unified Consolidation",
        description: "Single source of truth for local, group close, and consolidation"
      },
      {
        title: "SAC Integration",
        description: "Seamless integration with SAP Analytics Cloud for advanced reporting"
      }
    ],
    benefits: [
      "Real-time data access and consolidation",
      "Accelerated financial close process",
      "Unified environment reducing data movements",
      "Enhanced precision with drill-down capabilities"
    ],
    useCases: [
      "Group financial consolidation",
      "Statutory and management reporting",
      "Intercompany reconciliation"
    ]
  },
  {
    id: "4",
    title: "SAP PaPM",
    slug: "sap-papm",
    category: "financial",
    shortDescription: "Profitability and Performance Management for strategic decision-making",
    description: "SAP PaPM represents a contemporary analytical solution designed for intricate calculations and simulations, enabling comprehensive profitability and performance insights.",
    icon: "TrendingUp",
    features: [
      {
        title: "Advanced Modeling",
        description: "Create sophisticated business-centric profitability and cost models"
      },
      {
        title: "Real-Time Analysis",
        description: "Instant insights using SAP HANA's in-memory capabilities"
      },
      {
        title: "What-If Simulations",
        description: "Execute scenarios for strategic decision-making and planning"
      },
      {
        title: "Transfer Pricing",
        description: "Automate intercompany services and tangible goods transactions"
      }
    ],
    benefits: [
      "Strategic decision-making with impactful models",
      "Amplified insights through advanced analytics",
      "Real-time performance steering",
      "Integration with SAP and non-SAP systems"
    ],
    useCases: [
      "Profitability analysis by product/customer",
      "Transfer pricing optimization",
      "Activity-based costing"
    ]
  },
  {
    id: "5",
    title: "SAP Business Data Cloud (BDC)",
    slug: "sap-business-data-cloud",
    category: "financial",
    shortDescription: "Unified data management platform combining SAC, Datasphere, and BTP capabilities",
    description: "SAP Business Data Cloud unifies data management, advanced analytics, and intelligent automation into a comprehensive cloud solution for enterprise transformation.",
    icon: "Cloud",
    features: [
      {
        title: "Unified Data Platform",
        description: "Combines SAP Analytics Cloud, Datasphere, and BTP for seamless integration"
      },
      {
        title: "Advanced Analytics",
        description: "Enterprise planning with AI/ML capabilities and predictive insights"
      },
      {
        title: "Data Governance",
        description: "Centralized data management with built-in monitoring and controls"
      },
      {
        title: "Scalable Architecture",
        description: "Cloud-native platform supporting growing data volumes"
      }
    ],
    benefits: [
      "Unified SAP and non-SAP data foundation",
      "Reduced data silos and operational costs",
      "Accelerated decision-making capabilities",
      "Enhanced governance and security"
    ],
    useCases: [
      "Enterprise data management",
      "Integrated planning and analytics",
      "Cross-functional business intelligence"
    ]
  },
  
  // Enterprise Solutions
  {
    id: "6",
    title: "SAP Datasphere",
    slug: "sap-datasphere",
    category: "enterprise",
    shortDescription: "Next-generation unified data experience for modern enterprises",
    description: "SAP Datasphere is a cloud-based data service delivering seamless, scalable, and unified access to mission-critical business data across your organization.",
    icon: "Database",
    features: [
      {
        title: "Universal Data Connectivity",
        description: "Connect to SAP and non-SAP sources across on-premise and cloud"
      },
      {
        title: "Data Virtualization",
        description: "Real-time access and analysis without duplicating data"
      },
      {
        title: "Semantic Modeling",
        description: "Business layer decoupling logic from data for business users"
      },
      {
        title: "Data Governance",
        description: "Comprehensive catalog with fine-grained access control"
      }
    ],
    benefits: [
      "Enhanced decision-making with real-time data",
      "Accelerated innovation through unified access",
      "Scalability without compromising performance",
      "Reduced complexity with harmonized data"
    ],
    useCases: [
      "Modern data warehousing",
      "Data fabric implementation",
      "Hybrid and multi-cloud analytics"
    ]
  },
  {
    id: "7",
    title: "SAP Ariba",
    slug: "sap-ariba",
    category: "enterprise",
    shortDescription: "Cloud-based procurement and supply chain transformation platform",
    description: "SAP Ariba is the world's leading cloud-based procurement solution, connecting buyers and suppliers on a dynamic network of over 5 million partners worldwide.",
    icon: "ShoppingCart",
    features: [
      {
        title: "Procurement Automation",
        description: "End-to-end P2P lifecycle automation eliminating manual bottlenecks"
      },
      {
        title: "Global Supplier Network",
        description: "Access to 5M+ suppliers worldwide for diverse partnerships"
      },
      {
        title: "Guided Buying",
        description: "User-friendly shopping experience ensuring policy compliance"
      },
      {
        title: "Spend Analysis",
        description: "Real-time visibility into spend patterns and supplier performance"
      }
    ],
    benefits: [
      "Drive strategic procurement value",
      "Boost efficiency and productivity",
      "Achieve significant cost savings",
      "Strengthen compliance and mitigate risk"
    ],
    useCases: [
      "Procure-to-pay automation",
      "Supplier relationship management",
      "Contract lifecycle management"
    ]
  },
  {
    id: "8",
    title: "SAP SuccessFactors",
    slug: "sap-successfactors",
    category: "enterprise",
    shortDescription: "Comprehensive cloud-based human capital management solution",
    description: "SAP SuccessFactors provides end-to-end HCM capabilities including core HR, talent management, HR analytics, and employee experience management.",
    icon: "Users",
    features: [
      {
        title: "Core HR & Payroll",
        description: "Complete employee data management and global payroll processing"
      },
      {
        title: "Talent Management",
        description: "Recruiting, onboarding, performance, and succession planning"
      },
      {
        title: "Learning & Development",
        description: "Comprehensive learning management and skill development"
      },
      {
        title: "HR Analytics",
        description: "People analytics and workforce planning insights"
      }
    ],
    benefits: [
      "Unified HR processes across global workforce",
      "Enhanced employee experience and engagement",
      "Data-driven talent decisions",
      "Scalable cloud-based HR platform"
    ],
    useCases: [
      "Talent acquisition and onboarding",
      "Performance and goals management",
      "Workforce planning and analytics"
    ]
  },
  
  // Migration Services
  {
    id: "9",
    title: "Migration Services",
    slug: "migration-services",
    category: "migration",
    shortDescription: "Expert-led migration from legacy systems to modern SAP cloud solutions",
    description: "Comprehensive migration services helping organizations transition from legacy systems like BPC to modern SAP solutions including SAC and Group Reporting.",
    icon: "ArrowRightLeft",
    features: [
      {
        title: "BPC to SAC Migration",
        description: "Seamless migration from BPC to SAP Analytics Cloud"
      },
      {
        title: "Legacy Modernization",
        description: "Transform legacy ERP systems to S/4HANA and cloud platforms"
      },
      {
        title: "Data Migration",
        description: "Secure data migration with validation and reconciliation"
      },
      {
        title: "Change Management",
        description: "Training and support for smooth user adoption"
      }
    ],
    benefits: [
      "Minimize business disruption during migration",
      "Preserve historical data and processes",
      "Accelerate time-to-value on new platforms",
      "Expert-led implementation methodology"
    ],
    useCases: [
      "BPC to SAC Planning migration",
      "EC-CS to Group Reporting migration",
      "On-premise to cloud transformation"
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
