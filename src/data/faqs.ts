export interface FAQ {
  id: string;
  title: string;
  content: string;
}

export const faqs: FAQ[] = [
  { id: "free-trial", title: "Is there a free trial?", content: "Yes! Our Starter plan is completely free forever with 1,000 AI generations per month. For Pro and Enterprise plans, we offer a 14-day free trial with full access to all features — no credit card required." },
  { id: "cancel", title: "Can I cancel anytime?", content: "Absolutely. There are no long-term contracts or cancellation fees. You can upgrade, downgrade, or cancel your plan at any time from your account settings. If you cancel, you'll retain access until the end of your billing period." },
  { id: "annual", title: "What's the difference between monthly and annual billing?", content: "Annual billing saves you 20% compared to monthly billing. You'll be charged once per year instead of monthly. Both options include the same features — annual just gives you a better price." },
  { id: "team-size", title: "What happens if my team grows beyond the plan limit?", content: "We'll notify you when you're approaching your team size limit. You can easily upgrade to a higher plan at any time, and we'll prorate the difference. Enterprise plans have no team size limits." },
  { id: "data-security", title: "How do you handle my code and data?", content: "Security is our top priority. Your code is encrypted in transit and at rest. We never use your code to train our AI models. Enterprise customers get additional controls including data residency options, VPC deployment, and complete audit logging." },
  { id: "integrations", title: "Which tools do you integrate with?", content: "NexusAI integrates with 150+ tools including GitHub, GitLab, Bitbucket, Slack, Discord, Jira, Linear, Notion, VS Code, JetBrains IDEs, and all major cloud providers (AWS, GCP, Azure). We also offer a REST API and webhooks for custom integrations." },
  { id: "enterprise", title: "Do you offer custom enterprise plans?", content: "Yes! Our Enterprise plan is fully customizable. We can tailor features, compliance requirements, deployment options, and support SLAs to match your organization's needs. Contact our sales team for a custom quote." },
  { id: "support", title: "What kind of support do you offer?", content: "Starter plan users have access to our community forum and documentation. Pro users get priority email support with 4-hour response times. Enterprise customers receive dedicated account managers, 1-hour SLA, and optional on-call support." },
];
