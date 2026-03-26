import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

export function AboutPhilosophy() {
  return (
    <section className="py-24">
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
            Our philosophy
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))] md:text-4xl"
          >
            Process first. Systems second.
          </motion.h2>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-[hsl(var(--muted-foreground))]"
            >
              Technology serves people — not the other way around. We start with your process,
              understand what works, and build systems that amplify it. We don't tear down what
              you've built. We strengthen it.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-[hsl(var(--muted-foreground))]"
            >
              Every engagement is scoped to measurable outcomes. No open-ended retainers. No scope
              creep disguised as agile. Clear deliverables, clear timelines, clear accountability.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
