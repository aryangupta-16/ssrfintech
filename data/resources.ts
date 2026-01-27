export interface Resource {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
  cta: string;
}

export const resources: Resource[] = [
  {
    id: "sap-help-portal",
    title: "SAP Help Portal",
    description: "Official documentation and guides for all SAP products and solutions",
    icon: "📚",
    link: "https://help.sap.com/",
    cta: "Browse Documentation"
  },
  {
    id: "sap-grdc",
    title: "SAP GRDC",
    description: "Group Reporting Data Collection tool for enterprise consolidation and reporting",
    icon: "📊",
    link: "https://www.sap.com/products/financial-management/group-reporting.html",
    cta: "Learn More"
  },
  {
    id: "sap-community",
    title: "SAP Community",
    description: "Connect with SAP experts, share knowledge, and access resources from the community",
    icon: "👥",
    link: "https://community.sap.com/",
    cta: "Join Community"
  },
  {
    id: "sap-whats-new",
    title: "What's New in SAP",
    description: "Stay updated with the latest features, updates, and innovations from SAP",
    icon: "⭐",
    link: "https://community.sap.com/topics/sap-news",
    cta: "View Updates"
  }
];
