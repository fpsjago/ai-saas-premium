export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  rating?: number;
}

export const testimonials: Testimonial[] = [
  { quote: "NexusAI transformed how our team builds AI products. We shipped 3x faster in the first month and haven't looked back.", name: "Sarah Chen", role: "CTO, Acme Corp", initials: "SC", rating: 5 },
  { quote: "The AI code generation is incredibly accurate. It understands our codebase patterns and generates code that feels like a senior engineer wrote it.", name: "Marcus Johnson", role: "Lead Engineer, TechFlow", initials: "MJ", rating: 5 },
  { quote: "Best developer tool investment we've made this year. The ROI was immediate and our entire engineering team loves it.", name: "Priya Patel", role: "VP Engineering, DataStack", initials: "PP", rating: 5 },
  { quote: "Incredibly intuitive. It feels like having a senior engineer pair-programming with you around the clock.", name: "Alex Kim", role: "Fullstack Developer", initials: "AK", rating: 5 },
  { quote: "We reduced our deployment time from hours to minutes. The CI/CD integration is completely seamless.", name: "Jordan Lee", role: "DevOps Lead, CloudNine", initials: "JL", rating: 5 },
  { quote: "The smart testing feature alone is worth the subscription. It caught critical bugs we never would have found manually.", name: "Emma Wilson", role: "QA Manager, FinTech Inc", initials: "EW", rating: 5 },
  { quote: "Outstanding support team. Every question answered within the hour, and the documentation is world-class.", name: "David Park", role: "Indie Developer", initials: "DP", rating: 4 },
  { quote: "Finally, an AI tool that actually understands context. Not just autocomplete — real intelligence that knows my project.", name: "Lisa Zhang", role: "ML Engineer, DeepAI", initials: "LZ", rating: 5 },
  { quote: "Switched from 3 separate tools to NexusAI. Simpler workflow, faster output, and actually cheaper.", name: "Tom Brown", role: "Startup Founder", initials: "TB", rating: 5 },
  { quote: "The analytics dashboard gives us visibility into our entire development pipeline. Game-changer for our sprint planning.", name: "Nina Rodriguez", role: "Engineering Manager, Scale AI", initials: "NR", rating: 5 },
  { quote: "Our open-source project went from 2 contributors to 40 after integrating NexusAI. The onboarding experience is magical.", name: "Kai Tanaka", role: "OSS Maintainer", initials: "KT", rating: 5 },
  { quote: "Enterprise security without enterprise complexity. NexusAI passed our SOC 2 audit with flying colors.", name: "Rachel Foster", role: "CISO, MedTech Solutions", initials: "RF", rating: 5 },
];

export const carouselTestimonials = testimonials.slice(0, 5);
export const gridTestimonials = testimonials.slice(2, 8);
export const featureTestimonials = testimonials.slice(3, 9);
export const pricingTestimonials = testimonials.slice(5, 11);
