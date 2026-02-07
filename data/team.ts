import { TeamMember } from "@/lib/types";

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Sushil Agrawal (CA)",
    role: "Director - SAP Lead Architect",
    bio: "Leading SSR Fintech's operations across the Asia-Pacific region, Sushil brings extensive expertise in SAP Planning & Consolidation solutions implementation and strategic business development. He specializes in driving digital transformation initiatives for financial institutions across APAC markets.",
    email: "sushil.a@ssrfintech.com",
    phone: "+91 9669 336333",
    linkedin: "https://www.linkedin.com/in/sushilagrawalsap/",
    image: "/team/sushil.jpeg",
  },
  {
    id: "2",
    name: "Pankaj Gupta (IIM)",
    role: "Director - EPM Solutions",
    bio: "With 18+ years at leading IT firms and Big-4 consultancies like Ernst & Young, Pankaj brings wealth of EPM expertise and global best practices. Specialist in enterprise planning solutions recognized for turning technical insights into long-term value and reliable professional relationships.",
    email: "p.gupta@ssrfintech.com",
    phone: "+91 9811 296764",
    linkedin: "https://www.linkedin.com/in/pankaj-gupta-ceo/",
    image: "/team/pankaj.jpeg",
    cofounder: true,
  },
  {
    id: "3",
    name: "Anil Agrawal (CA)",
    role: "Director - Enterprise Support Functions",
    bio: "Spearheading SSR Fintech's growth strategy across Europe, Middle East, and Africa. With deep knowledge of SAP financial solutions and regulatory compliance, he helps organizations navigate complex financial transformation journeys in diverse markets.",
    email: "anil.a@ssrfintech.com",
    linkedin: "https://www.linkedin.com/in/anilagrawal56/",
    image: "/team/anil.jpeg",
  },
  
  {
    id: "4",
    name: "Siddharth Agrawal",
    role: "SAP Solution Lead Architect",
    bio: "Siddharth is Solution Architect with 8+ years of experience in Planning and Consolidation. I have led multiple end-to-end implementations across SAP Analytics Cloud, SAP Datasphere, and SAP Business Data Cloud, delivering scalable analytics and planning solutions.",
    image: "/team/siddharth.png",
    teamMembers: [
      { name: "Rahul Sharma", role: "Senior SAP Consultant" },
      { name: "Priya Mehta", role: "Technical Architect" },
      { name: "Amit Kumar", role: "Solution Designer" },
    ]
  },
  {
    id: "5",
    name: "Yash Vaidya",
    role: "BDC | DSP Solution Architect",
    bio: "Specialist in SAP Analytics Cloud implementations with emphasis on executive-ready storytelling, real-time dashboards, and predictive financial analytics.",
    image: "/team/yash.jpeg",
    teamMembers: [
      { name: "Sneha Patel", role: "Analytics Developer" },
      { name: "Vikram Singh", role: "Data Visualization Expert" },
      { name: "Anjali Reddy", role: "BI Consultant" },
    ]
  },
  {
    id: "6",
    name: "Ankush Choudhary",
    role: "SAC | AFC Solution Architect",
    bio: "Datasphere engineer building resilient data foundations and master data management frameworks for finance transformation and analytics enablement.",
    image: "/team/ankush.png",
    teamMembers: [
      { name: "Neha Gupta", role: "Data Engineer" },
      { name: "Rajesh Verma", role: "ETL Specialist" },
      { name: "Kavita Joshi", role: "Data Quality Analyst" },
      { name: "Suresh Nair", role: "Integration Developer" },
    ]
  },
  {
    id: "7",
    name: "Farry Jain (CA)",
    role: "Group Reporting & Consolidation Solution Architect",
    bio: "As a SAP Group Reporting Consultant and Chartered Accountant, Farry supports organizations in building robust consolidation and reporting frameworks. Her expertise spans SAP Group Reporting configuration, financial close processes, and compliance-driven reporting, enabling finance teams to operate with clarity and control.",
    image: "/team/farry.jpeg",
    teamMembers: [
      { name: "Deepak Agarwal", role: "Consolidation Analyst" },
      { name: "Shalini Kapoor", role: "Financial Controller" },
      { name: "Manoj Tiwari", role: "Compliance Specialist" },
    ]
  },
];
