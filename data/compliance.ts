export interface ComplianceFramework {
  id: string;
  name: string;
  description: string;
  relevantFor: string[];
}

export interface SecurityPractice {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const complianceFrameworks: ComplianceFramework[] = [
  {
    id: "iso-27001",
    name: "ISO 27001",
    description: "International standard for information security management systems. Our processes and controls are designed to meet ISO 27001 requirements.",
    relevantFor: ["All financial institutions", "Global operations", "Enterprise clients"],
  },
  {
    id: "soc2",
    name: "SOC 2 Type II",
    description: "AICPA framework for managing customer data based on five trust principles: security, availability, processing integrity, confidentiality, and privacy.",
    relevantFor: ["SaaS platforms", "Cloud services", "Fintech startups"],
  },
  {
    id: "gdpr",
    name: "GDPR",
    description: "General Data Protection Regulation compliance for handling EU citizen data with strict consent and privacy requirements.",
    relevantFor: ["European operations", "Global financial services", "Data processors"],
  },
  {
    id: "pci-dss",
    name: "PCI DSS",
    description: "Payment Card Industry Data Security Standard for organizations handling credit card information.",
    relevantFor: ["Payment processors", "E-commerce", "Merchant services"],
  },
  {
    id: "sox",
    name: "SOX Compliance",
    description: "Sarbanes-Oxley Act compliance for financial reporting and internal controls.",
    relevantFor: ["Public companies", "Financial reporting", "Audit requirements"],
  },
  {
    id: "rbi",
    name: "RBI Guidelines",
    description: "Reserve Bank of India cybersecurity and technology risk management guidelines for financial institutions.",
    relevantFor: ["Indian banks", "NBFCs", "Payment systems"],
  },
];

export const securityPractices: SecurityPractice[] = [
  {
    id: "data-encryption",
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Encryption keys are managed using hardware security modules (HSMs) and rotated regularly.",
    icon: "Lock",
  },
  {
    id: "access-control",
    title: "Zero Trust Access Control",
    description: "Role-based access control (RBAC) with principle of least privilege. Multi-factor authentication (MFA) required for all system access. All actions are logged and auditable.",
    icon: "ShieldCheck",
  },
  {
    id: "secure-development",
    title: "Secure Development Lifecycle",
    description: "Security is built into every phase: threat modeling, secure code reviews, automated vulnerability scanning, penetration testing, and secure deployment practices.",
    icon: "Code",
  },
  {
    id: "monitoring",
    title: "24/7 Security Monitoring",
    description: "Real-time security event monitoring with automated threat detection. Incident response team available 24/7 with defined escalation procedures and response playbooks.",
    icon: "Eye",
  },
  {
    id: "vendor-management",
    title: "Third-Party Risk Management",
    description: "All vendors undergo security assessments. Data processing agreements (DPAs) and business associate agreements (BAAs) in place with strict security requirements.",
    icon: "Users",
  },
  {
    id: "training",
    title: "Security Awareness Training",
    description: "Mandatory annual security training for all team members. Regular phishing simulations and security awareness campaigns to maintain high vigilance.",
    icon: "GraduationCap",
  },
];

export const privacyPractices = {
  title: "Data Privacy Commitment",
  principles: [
    {
      principle: "Data Minimization",
      description: "We collect only the data necessary to deliver our services. No excessive or unnecessary data collection.",
    },
    {
      principle: "Purpose Limitation",
      description: "Data is used only for the purposes explicitly stated and agreed upon. No secondary use without consent.",
    },
    {
      principle: "Transparency",
      description: "Clear communication about what data we collect, how it's used, and who has access. No hidden data practices.",
    },
    {
      principle: "Individual Rights",
      description: "You have the right to access, correct, delete, and port your data. We facilitate these rights promptly.",
    },
    {
      principle: "Retention Limits",
      description: "Data is retained only as long as necessary for business or legal purposes, then securely deleted.",
    },
  ],
};

export const ndaCulture = {
  title: "Confidentiality is Sacred",
  description: "Financial services operate on trust. We treat client confidentiality as non-negotiable.",
  practices: [
    {
      title: "Standard NDA Practice",
      description: "Every client engagement begins with a mutual non-disclosure agreement. No exceptions.",
    },
    {
      title: "Need-to-Know Access",
      description: "Team members have access only to the information required for their specific role. Compartmentalization is enforced.",
    },
    {
      title: "Secure Collaboration",
      description: "All client communication happens through encrypted channels. No sensitive information in email or public channels.",
    },
    {
      title: "Clean Exit Procedures",
      description: "At project conclusion, all client data is securely transferred or destroyed per agreed procedures. No data retention beyond agreed terms.",
    },
  ],
};

export const incidentResponse = {
  title: "Security Incident Response",
  description: "Despite best efforts, security incidents can occur. We're prepared to respond swiftly and effectively.",
  process: [
    {
      phase: "Detection",
      timeline: "Real-time",
      description: "Automated monitoring detects anomalies and potential security events immediately.",
    },
    {
      phase: "Assessment",
      timeline: "Within 15 minutes",
      description: "Security team evaluates severity, scope, and potential impact of the incident.",
    },
    {
      phase: "Containment",
      timeline: "Within 1 hour",
      description: "Immediate action to contain the incident and prevent further damage or data exposure.",
    },
    {
      phase: "Notification",
      timeline: "Within 24 hours",
      description: "Affected parties are notified per legal requirements and contractual obligations.",
    },
    {
      phase: "Recovery",
      timeline: "24-72 hours",
      description: "Systems are restored to normal operation with vulnerabilities addressed.",
    },
    {
      phase: "Post-Mortem",
      timeline: "Within 1 week",
      description: "Detailed analysis to understand root cause and implement preventive measures.",
    },
  ],
};
