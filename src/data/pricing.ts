export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: PricingFeature[];
  cta: string;
  href: string;
  popular?: boolean;
}

export const plans: PricingPlan[] = [
  {
    name: "Starter",
    description: "Perfect for individual developers and small projects",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      { text: "1,000 AI generations / month", included: true },
      { text: "Basic code analytics", included: true },
      { text: "Community support", included: true },
      { text: "5 projects", included: true },
      { text: "Team collaboration", included: false },
      { text: "Custom AI models", included: false },
      { text: "Priority support", included: false },
      { text: "SSO & RBAC", included: false },
    ],
    cta: "Get Started Free",
    href: "#",
  },
  {
    name: "Pro",
    description: "For growing teams shipping AI products",
    monthlyPrice: 49,
    annualPrice: 39,
    popular: true,
    features: [
      { text: "Unlimited AI generations", included: true },
      { text: "Advanced analytics dashboard", included: true },
      { text: "Priority email support", included: true },
      { text: "Unlimited projects", included: true },
      { text: "Team collaboration (up to 20)", included: true },
      { text: "Custom AI models", included: false },
      { text: "Dedicated account manager", included: false },
      { text: "SSO & RBAC", included: false },
    ],
    cta: "Start Free Trial",
    href: "#",
  },
  {
    name: "Enterprise",
    description: "For organizations that need full control and compliance",
    monthlyPrice: 199,
    annualPrice: 159,
    features: [
      { text: "Unlimited everything", included: true },
      { text: "Custom analytics & reporting", included: true },
      { text: "Dedicated support & SLA", included: true },
      { text: "Unlimited projects", included: true },
      { text: "Unlimited team members", included: true },
      { text: "Custom AI model fine-tuning", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "SSO, RBAC & audit logs", included: true },
    ],
    cta: "Contact Sales",
    href: "#",
  },
];

export const comparisonFeatures = [
  { category: "AI Features", features: [
    { name: "AI Code Generation", starter: "1K/mo", pro: "Unlimited", enterprise: "Unlimited" },
    { name: "Smart Test Generation", starter: false, pro: true, enterprise: true },
    { name: "Custom Model Fine-tuning", starter: false, pro: false, enterprise: true },
    { name: "AI Code Review", starter: true, pro: true, enterprise: true },
  ]},
  { category: "Collaboration", features: [
    { name: "Team Members", starter: "1", pro: "Up to 20", enterprise: "Unlimited" },
    { name: "Shared Workspaces", starter: false, pro: true, enterprise: true },
    { name: "Real-time Editing", starter: false, pro: true, enterprise: true },
    { name: "Code Review Workflows", starter: false, pro: true, enterprise: true },
  ]},
  { category: "Security & Compliance", features: [
    { name: "SOC 2 Compliance", starter: false, pro: false, enterprise: true },
    { name: "SSO / SAML", starter: false, pro: false, enterprise: true },
    { name: "RBAC", starter: false, pro: false, enterprise: true },
    { name: "Audit Logs", starter: false, pro: false, enterprise: true },
  ]},
  { category: "Support", features: [
    { name: "Community Forum", starter: true, pro: true, enterprise: true },
    { name: "Email Support", starter: false, pro: true, enterprise: true },
    { name: "Priority Support", starter: false, pro: true, enterprise: true },
    { name: "Dedicated Account Manager", starter: false, pro: false, enterprise: true },
  ]},
];
