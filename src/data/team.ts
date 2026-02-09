export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  bio: string;
}

export const team: TeamMember[] = [
  { name: "Alex Rivera", role: "Co-founder & CEO", initials: "AR", bio: "Former engineering lead at Stripe. Building developer tools for 12 years." },
  { name: "Maya Patel", role: "Co-founder & CTO", initials: "MP", bio: "PhD in Machine Learning from Stanford. Previously at Google DeepMind." },
  { name: "James Chen", role: "VP of Engineering", initials: "JC", bio: "Scaled engineering teams from 5 to 200 at two unicorn startups." },
  { name: "Sofia Andersen", role: "Head of Product", initials: "SA", bio: "Product leader with 10 years at GitHub and Figma." },
  { name: "Marcus Williams", role: "Head of AI Research", initials: "MW", bio: "Published 30+ papers on code generation and program synthesis." },
  { name: "Yuki Tanaka", role: "Head of Design", initials: "YT", bio: "Design systems expert. Previously led design at Linear and Vercel." },
  { name: "Olivia Santos", role: "VP of Sales", initials: "OS", bio: "Grew enterprise revenue from $0 to $50M at two dev tool companies." },
  { name: "Daniel Kim", role: "Head of Developer Relations", initials: "DK", bio: "Open source advocate with 100K+ community followers." },
];
