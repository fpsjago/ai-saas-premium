export interface Feature {
  icon: string;
  title: string;
  description: string;
  stat?: string;
}

export const homeFeatures: Feature[] = [
  { icon: "🧠", title: "AI Code Generation", description: "Generate production-ready code with context-aware AI that understands your codebase patterns and conventions.", stat: "10x" },
  { icon: "⚡", title: "Lightning Deploys", description: "Deploy to any cloud provider in under 100ms with our optimized edge network and zero-downtime releases.", stat: "94ms" },
  { icon: "👥", title: "Real-time Collaboration", description: "Work together with your team in real-time with multiplayer editing, live cursors, and instant sync." },
  { icon: "📊", title: "Advanced Analytics", description: "Track performance metrics, user behavior, and AI model accuracy with our comprehensive analytics dashboard." },
  { icon: "🛡️", title: "Enterprise Security", description: "SOC 2 Type II certified with end-to-end encryption, SSO, RBAC, and full audit logging." },
  { icon: "🔌", title: "150+ Integrations", description: "Connect seamlessly with GitHub, GitLab, Slack, Jira, Linear, and 140+ other tools your team already uses." },
];

export const detailedFeatures: Feature[] = [
  { icon: "🧠", title: "AI Code Generation", description: "Context-aware code generation that understands your entire codebase, coding patterns, and team conventions.", stat: "10x faster" },
  { icon: "🧪", title: "Smart Test Generation", description: "Automatically generate comprehensive test suites with edge case detection and visual regression testing.", stat: "95% coverage" },
  { icon: "⚡", title: "Instant Deployments", description: "One-click deploys to 50+ edge locations worldwide with automatic rollbacks and canary releases.", stat: "94ms avg" },
  { icon: "📊", title: "Real-time Analytics", description: "Monitor performance, usage patterns, and AI model accuracy with customizable dashboards and alerts.", stat: "Live data" },
  { icon: "👥", title: "Team Collaboration", description: "Multiplayer code editing, shared workspaces, code reviews, and asynchronous collaboration tools.", stat: "Real-time" },
  { icon: "🔒", title: "Enterprise Security", description: "SOC 2 Type II, GDPR, HIPAA compliant with SSO, RBAC, encryption at rest, and complete audit trails.", stat: "SOC 2" },
  { icon: "🔌", title: "Deep Integrations", description: "Native integrations with 150+ tools including GitHub, Slack, Jira, Linear, Figma, and all major cloud providers.", stat: "150+" },
  { icon: "🎯", title: "Custom AI Models", description: "Fine-tune AI models on your domain data for precision code generation tailored to your specific industry.", stat: "99.2% accuracy" },
];

export const featureShowcases = [
  {
    label: "AI Code Generation",
    title: "Write production code 10x faster",
    description: "Our AI understands your codebase context, coding standards, and team patterns. It generates clean, tested, production-ready code that fits naturally into your existing architecture.",
    bullets: ["Context-aware suggestions across your entire codebase", "Multi-language support for 40+ programming languages", "Automatic refactoring and code optimization", "Built-in code review and quality checks"],
  },
  {
    label: "Smart Testing",
    title: "Automated test coverage on autopilot",
    description: "Stop writing tests manually. NexusAI analyzes your code changes and automatically generates comprehensive test suites, including edge cases humans typically miss.",
    bullets: ["Edge case detection and boundary testing", "Visual regression testing for UI components", "Performance benchmarks and load testing", "Integration test generation from API specs"],
    reversed: true,
  },
  {
    label: "Team Analytics",
    title: "Insights that drive better decisions",
    description: "Understand how your team builds software with real-time analytics on code quality, deployment frequency, recovery time, and AI-assisted productivity gains.",
    bullets: ["DORA metrics tracking out of the box", "Custom dashboard builder with 50+ widgets", "Automated weekly team performance reports", "AI-powered anomaly detection and alerts"],
  },
];

export const featureListItems: Feature[] = [
  { icon: "⚡", title: "Lightning Fast", description: "Sub-second response times for all AI operations across our global edge network." },
  { icon: "🔄", title: "Real-time Sync", description: "Collaborate with your team in real-time across projects with zero latency." },
  { icon: "🎯", title: "Precision AI", description: "Fine-tuned models that understand your specific domain and coding patterns." },
  { icon: "📦", title: "Zero Config Setup", description: "Get started in under 2 minutes with automatic project detection and configuration." },
  { icon: "🌍", title: "Global Edge Network", description: "Deployed across 50+ edge locations worldwide for blazing fast performance." },
  { icon: "🔒", title: "Enterprise Ready", description: "SOC 2, GDPR, and HIPAA compliant with full audit logging out of the box." },
];
