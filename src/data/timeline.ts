export interface Milestone {
  date: string;
  title: string;
  description: string;
}

export const timeline: Milestone[] = [
  { date: "January 2022", title: "Founded in San Francisco", description: "Alex and Maya left their roles to build the developer productivity platform they always wished existed." },
  { date: "August 2022", title: "Seed Round — $4.2M", description: "Raised seed funding led by Andreessen Horowitz with participation from Y Combinator and 20 angel investors." },
  { date: "March 2023", title: "Public Beta Launch", description: "Opened the platform to 1,000 beta users. Hit 95% weekly retention in the first month." },
  { date: "November 2023", title: "Series A — $28M", description: "Raised Series A led by Sequoia Capital. Team grew to 45 employees across 12 countries." },
  { date: "June 2024", title: "10,000 Teams Milestone", description: "Crossed 10,000 active teams including Fortune 500 companies and Y Combinator startups." },
  { date: "January 2025", title: "Enterprise Launch & SOC 2", description: "Launched enterprise tier with SSO, RBAC, and dedicated support. Achieved SOC 2 Type II certification." },
];
