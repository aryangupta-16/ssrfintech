export interface Office {
  id: string;
  country: string;
  city: string;
  type: "development" | "office" | "delivery";
  address?: string;
  contact?: string;
  email?: string;
  highlights: string[];
}

export const offices: Office[] = [
  {
    id: "1",
    country: "India",
    city: "Bangalore",
    type: "development",
    highlights: [
      "40+ Planning & Consolidation Specialists",
      "Development Center",
      "Headquarters",
      "Primary Delivery Hub",
    ],
  },
  {
    id: "2",
    country: "Singapore",
    city: "Singapore",
    type: "delivery",
    highlights: [
      "Asia-Pacific Regional Hub",
      "24x7 Support Center",
      "APAC Client Solutions",
    ],
  },
  {
    id: "3",
    country: "Philippines",
    city: "Manila",
    type: "development",
    highlights: [
      "30+ SAC & BPC Consultants",
      "Group Reporting Expertise",
      "Extended Development Team",
    ],
  },
  {
    id: "4",
    country: "United Arab Emirates",
    city: "Dubai",
    type: "office",
    highlights: [
      "MENA Region Office",
      "Regional Delivery",
      "Local Support Center",
    ],
  },
  {
    id: "5",
    country: "United Kingdom",
    city: "London",
    type: "office",
    highlights: [
      "Europe & UK Regional Hub",
      "EMEA Client Solutions",
      "Local Support",
    ],
  },
  {
    id: "6",
    country: "United States",
    city: "New York",
    type: "office",
    highlights: [
      "Americas Expansion Center (In Progress)",
      "US Client Support",
      "Growing US Presence",
    ],
  },
];

export const globalMetrics = {
  totalOffices: 6,
  developmentCenters: 2,
  supportCenters: 3,
  totalTeamMembers: "70+",
  planningSpecialists: "40+",
  solutionConsultants: "30+",
  yearsInBusiness: "20+",
  projectsDelivered: "150+",
};
