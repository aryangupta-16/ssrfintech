export interface ProcessStep {
  id: number;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    phase: "Discover & Assess",
    title: "Understanding Your Needs",
    description: "We dive deep into your business challenges, existing systems, and growth objectives through collaborative workshops and technical assessments.",
    deliverables: [
      "Current state analysis",
      "Pain points documentation",
      "Technical audit report",
      "Preliminary roadmap",
    ],
    duration: "1-2 weeks",
  },
  {
    id: 2,
    phase: "Design Solution",
    title: "Architecting Your Success",
    description: "Our experts design a tailored solution that addresses your specific needs while ensuring scalability, security, and compliance.",
    deliverables: [
      "Solution architecture",
      "Technology stack recommendations",
      "Implementation plan",
      "Budget & timeline estimates",
    ],
    duration: "2-3 weeks",
  },
  {
    id: 3,
    phase: "Implement & Integrate",
    title: "Building With Precision",
    description: "We execute the implementation with agile methodology, ensuring continuous communication, testing, and refinement throughout the process.",
    deliverables: [
      "Developed solution",
      "Integration with existing systems",
      "Comprehensive testing",
      "User training materials",
    ],
    duration: "6-16 weeks",
  },
  {
    id: 4,
    phase: "Optimize & Scale",
    title: "Ensuring Long-Term Success",
    description: "Post-launch, we monitor performance, gather feedback, and continuously optimize to ensure your solution delivers maximum value.",
    deliverables: [
      "Performance monitoring",
      "Ongoing support",
      "Enhancement recommendations",
      "Knowledge transfer",
    ],
    duration: "Ongoing",
  },
];
