export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  image?: string;
}

export interface Industry {
  id: string;
  title: string;
  slug: string;
  description: string;
  challenges: string[];
  solutions: string[];
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  companySize?: string; // NEW: Company size context
  content: string;
  outcome?: string; // NEW: Measurable outcome
  image?: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  email?: string;
  phone?: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
  cofounder?: boolean;
  teamMembers?: { name: string; role: string; }[]; // Sub-team members
}

export interface CaseStudyMetrics {
  metric: string;
  value: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  summary?: string;
  challengeHighlights: string[];
  solutionHighlights: string[];
  image?: string;
  logo?: string;
  accentColor?: string;
  metrics?: CaseStudyMetrics;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image?: string;
  readTime: string;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  suffix?: string;
}
