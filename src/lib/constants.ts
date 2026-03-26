export const SITE_NAME = "Dovito Business Solutions"

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const

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
