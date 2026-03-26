export const SITE_NAME = "Dovito Business Solutions"

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const

export const PAIN_POINTS = [
  {
    icon: "Clock",
    headline: "Hours lost to manual work",
    description:
      "You spend hours on repetitive work that could be automated — data entry, invoicing, scheduling, follow-ups.",
  },
  {
    icon: "TrendingDown",
    headline: "Revenue left on the table",
    description:
      "Missed quotes, delayed billing, and slow turnarounds cost you jobs. Your systems should close the gap, not widen it.",
  },
  {
    icon: "Users",
    headline: "Team at capacity",
    description:
      "Your people are maxed out on admin instead of doing the work that grows the business.",
  },
  {
    icon: "Unplug",
    headline: "Disconnected tools",
    description:
      "QuickBooks doesn't talk to your CRM. Your CRM doesn't talk to your project tracker. Nothing talks to anything.",
  },
] satisfies { icon: string; headline: string; description: string }[]

export const SOLUTIONS = [
  {
    icon: "Zap",
    headline: "Automate the repetitive",
    description:
      "Invoice generation, scheduling, follow-ups, data sync — automated so your team can focus on real work.",
  },
  {
    icon: "Network",
    headline: "Connect your systems",
    description:
      "One source of truth. Your tools integrated, your data flowing, your team aligned.",
  },
  {
    icon: "Layers",
    headline: "Build for scale",
    description:
      "Custom applications designed for how your business actually works — not how some vendor thinks it should.",
  },
  {
    icon: "Heart",
    headline: "Family-first approach",
    description:
      "We build systems that give you time back. For your business, your team, and the people waiting at home.",
  },
] satisfies { icon: string; headline: string; description: string }[]

export const METHODOLOGY_STEPS = [
  {
    number: "01",
    label: "DO",
    title: "Discover",
    description:
      "We start with a deep operational audit. Map your workflows, identify bottlenecks, and quantify the cost of manual processes. No assumptions — just data.",
    detail: "Assessment package — $1,500–$2,500 / 1–2 weeks",
  },
  {
    number: "02",
    label: "VI",
    title: "Validate",
    description:
      "Prioritize solutions by impact and feasibility. Build a roadmap with clear milestones, measurable outcomes, and realistic timelines. Every dollar tied to ROI.",
    detail: null,
  },
  {
    number: "03",
    label: "TO",
    title: "Transform",
    description:
      "Implement process improvements, integrate disconnected systems, and build custom tools where needed. Train your team. Measure results. Iterate.",
    detail: "Implementation package — $8k–$30k / 4–12 weeks",
  },
] satisfies {
  number: string
  label: string
  title: string
  description: string
  detail: string | null
}[]

export const SERVICE_PACKAGES = [
  {
    id: "assessment",
    name: "Assessment",
    price: "$1,500 – $2,500",
    timeline: "1–2 weeks",
    badge: null,
    included: [
      "Full operational audit",
      "Workflow mapping and bottleneck analysis",
      "Prioritized action plan with ROI projections",
      "Executive summary presentation",
    ],
    cta: "Start with an Assessment",
  },
  {
    id: "implementation",
    name: "Implementation",
    price: "$8,000 – $30,000",
    timeline: "4–12 weeks",
    badge: "Most Popular",
    included: [
      "Process improvement and documentation",
      "Systems integration (connect existing tools)",
      "Custom application development (where needed)",
      "Team training and change management",
      "Post-launch support period",
    ],
    cta: "Plan Your Implementation",
  },
  {
    id: "retained",
    name: "Retained Support",
    price: "$2,500 – $5,000/mo",
    timeline: "20–40 hours/month",
    badge: null,
    included: [
      "Ongoing consulting and strategy sessions",
      "Continuous development and improvements",
      "System maintenance and monitoring",
      "Priority support and issue resolution",
    ],
    cta: "Get Ongoing Support",
  },
] satisfies {
  id: string
  name: string
  price: string
  timeline: string
  badge: string | null
  included: string[]
  cta: string
}[]

export const SERVICES_FAQ = [
  {
    question: "What if the scope changes mid-project?",
    answer:
      "We scope tightly upfront, but we're not rigid. Changes are documented, re-estimated, and approved before work continues.",
  },
  {
    question: "Do we own the code?",
    answer:
      "Yes, 100%. Everything we build is yours. No vendor lock-in, no licensing fees.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "Primarily construction and skilled trades, but our methodology applies to any operations-heavy business.",
  },
  {
    question: "How do we get started?",
    answer:
      "Apply through our form. We'll review and schedule a discovery call within 48 hours.",
  },
] satisfies { question: string; answer: string }[]

export const VALUES = [
  {
    title: "Direct",
    description:
      "No jargon, no runaround. We tell you what we see, what it costs, and what to expect.",
  },
  {
    title: "Reliable",
    description:
      "We show up, we deliver, we follow through. Every time.",
  },
  {
    title: "Transparent",
    description:
      "You see our work, our reasoning, and our numbers. No black boxes.",
  },
  {
    title: "Results-Driven",
    description:
      "Every dollar spent is tied to a measurable outcome. If we can't measure it, we don't propose it.",
  },
] satisfies { title: string; description: string }[]

export const BELIEFS = [
  {
    number: "01",
    title: "Technology Serves People",
    description:
      "Technology exists to remove tedious tasks and expand human capacity — not to replace judgment or impose complexity.",
  },
  {
    number: "02",
    title: "Honoring Legacy",
    description:
      "What you've built has value. We support and strengthen existing systems, not tear them down.",
  },
  {
    number: "03",
    title: "Excellence and Accountability",
    description:
      "High standards, clear scopes, honest communication. We hold ourselves to the same bar we set for your operation.",
  },
  {
    number: "04",
    title: "Collaboration",
    description:
      "We work alongside you — same objectives, same accountability. Your success is the only metric that matters.",
  },
  {
    number: "05",
    title: "Let's Roll",
    description:
      "When it matters, we act. Inspired by the passengers of Flight 93 — decisive, calm, and committed to the right outcome.",
  },
] satisfies { number: string; title: string; description: string }[]

export const SOCIAL_LINKS = [
  { label: "LinkedIn",  href: "#", icon: "Linkedin"  },
  { label: "Facebook",  href: "#", icon: "Facebook"  },
  { label: "Instagram", href: "#", icon: "Instagram" },
  { label: "X",         href: "#", icon: "Twitter"   },
] satisfies { label: string; href: string; icon: string }[]

export const LEGAL_LINKS = [
  { label: "Privacy Policy",   href: "#" },
  { label: "Terms of Service", href: "#" },
] satisfies { label: string; href: string }[]
