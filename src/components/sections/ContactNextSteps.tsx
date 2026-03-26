import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const NEXT_STEPS = [
  {
    number: "01",
    title: "We review your submission",
    description: "Our team reads every inquiry within 24 hours and assesses whether we're the right fit for your needs.",
  },
  {
    number: "02",
    title: "Discovery call",
    description: "If there's a fit, we schedule a 30-minute call to understand your operation and goals in detail.",
  },
  {
    number: "03",
    title: "Clear proposal",
    description: "We scope the engagement and present a detailed proposal with timeline, deliverables, and fixed pricing.",
  },
  {
    number: "04",
    title: "You decide",
    description: "No pressure, no obligation. Take the time you need. We're here when you're ready to move forward.",
  },
]

export function ContactNextSteps() {
  return (
    <section className="bg-[hsl(var(--muted)/0.3)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-medium uppercase tracking-widest text-[hsl(var(--accent))]"
          >
            The process
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))] md:text-4xl"
          >
            What happens next
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {NEXT_STEPS.map((step) => (
              <div key={step.number} className="flex flex-col gap-4">
                <span className="font-mono text-5xl font-bold leading-none text-[hsl(var(--foreground)/0.12)]">
                  {step.number}
                </span>
                <h3 className="text-base font-semibold text-[hsl(var(--foreground))]">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                  {step.description}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
