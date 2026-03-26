import { motion } from "framer-motion"
import { Zap, Network, Layers, Heart } from "lucide-react"
import { SOLUTIONS } from "@/lib/constants"

const ICONS = { Zap, Network, Layers, Heart } as Record<
  string,
  React.ComponentType<{ className?: string }>
>

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export function Solution() {
  return (
    <section className="bg-[hsl(var(--background))] py-24">
      {/* Gradient transition from Challenge section */}
      <div className="pointer-events-none absolute -mt-24 h-24 w-full bg-gradient-to-b from-[hsl(var(--muted)/0.5)] to-transparent dark:from-[#0d1f35]" />

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
            What we deliver
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))] md:text-4xl"
          >
            Built for how your business actually runs.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-[hsl(var(--muted-foreground))]"
          >
            We don't sell software. We solve operations problems — and we use technology to do it.
          </motion.p>

          <motion.div
            variants={stagger}
            className="mt-16 grid gap-6 sm:grid-cols-2"
          >
            {SOLUTIONS.map((solution) => {
              const Icon = ICONS[solution.icon]
              return (
                <motion.div
                  key={solution.headline}
                  variants={fadeUp}
                  className="group rounded-xl border border-[hsl(var(--border))] border-l-2 border-l-[hsl(var(--accent))] bg-[hsl(var(--background))] p-6 transition-colors hover:border-[hsl(var(--accent)/0.4)] hover:border-l-[hsl(var(--accent))]"
                >
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-[hsl(var(--secondary)/0.1)] p-2">
                    <Icon className="size-6 text-[hsl(var(--accent))]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[hsl(var(--foreground))]">
                    {solution.headline}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                    {solution.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
