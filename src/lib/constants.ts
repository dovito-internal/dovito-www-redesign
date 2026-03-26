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
