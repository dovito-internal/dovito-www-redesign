import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { METHODOLOGY_STEPS } from "@/lib/constants"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export function Methodology() {
  const [activeTab, setActiveTab] = useState(0)
  const active = METHODOLOGY_STEPS[activeTab]

  return (
    <section className="bg-[hsl(var(--muted)/0.3)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {/* Header */}
          <motion.p
            variants={fadeUp}
            className="text-sm font-medium uppercase tracking-widest text-[hsl(var(--accent))]"
          >
            Our methodology
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))] md:text-4xl"
          >
            Discover. Validate. Transform.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-[hsl(var(--muted-foreground))]"
          >
            Process first, technology second. Every engagement starts with
            understanding your operation before recommending a single tool.
          </motion.p>

          {/* Tab layout */}
          <motion.div
            variants={fadeUp}
            className="mt-16 flex flex-col gap-8 md:grid md:grid-cols-[280px_1fr] md:gap-0"
          >
            {/* Tab selectors */}
            <nav className="flex flex-row gap-2 overflow-x-auto md:flex-col md:gap-0 md:border-r md:border-[hsl(var(--border))]">
              {METHODOLOGY_STEPS.map((step, i) => {
                const isActive = i === activeTab
                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveTab(i)}
                    className={[
                      "group flex min-w-[120px] flex-col items-start gap-1 px-4 py-4 text-left transition-colors md:min-w-0 md:border-r-2 md:-mr-px md:pr-8",
                      isActive
                        ? "border-b-2 border-[hsl(var(--accent))] md:border-b-0 md:border-r-[hsl(var(--accent))]"
                        : "border-b-2 border-transparent md:border-b-0 md:border-r-transparent",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "font-mono text-5xl font-bold leading-none transition-colors",
                        isActive
                          ? "text-[hsl(var(--accent))]"
                          : "text-[hsl(var(--foreground)/0.12)] group-hover:text-[hsl(var(--foreground)/0.25)]",
                      ].join(" ")}
                    >
                      {step.number}
                    </span>
                    <span
                      className={[
                        "text-xs font-semibold uppercase tracking-widest transition-colors",
                        isActive
                          ? "text-[hsl(var(--accent))]"
                          : "text-[hsl(var(--muted-foreground))]",
                      ].join(" ")}
                    >
                      {step.label}
                    </span>
                    <span
                      className={[
                        "text-sm font-medium transition-colors",
                        isActive
                          ? "text-[hsl(var(--foreground))]"
                          : "text-[hsl(var(--muted-foreground))]",
                      ].join(" ")}
                    >
                      {step.title}
                    </span>
                  </button>
                )
              })}
            </nav>

            {/* Content panel */}
            <div className="relative md:pl-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
                    {active.label} — {active.number}
                  </p>
                  <h3 className="mt-3 text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] md:text-5xl">
                    {active.title}
                  </h3>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
                    {active.description}
                  </p>
                  {active.detail && (
                    <div className="mt-8 inline-flex items-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-2 text-sm font-medium text-[hsl(var(--foreground))]">
                      {active.detail}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
