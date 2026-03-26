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
      "Operational audit to map your current workflows, identify bottlenecks, and quantify the cost of inefficiency.",
  },
  {
    number: "02",
    label: "VI",
    title: "Validate",
    description:
      "Prioritize the highest-impact solutions and build a phased roadmap with clear milestones and ROI targets.",
  },
  {
    number: "03",
    label: "TO",
    title: "Transform",
    description:
      "Implement, measure, and iterate. Systems go live, teams get trained, and results get tracked.",
  },
] as const
