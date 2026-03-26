import { motion } from "framer-motion"
import { Clock, TrendingDown, Users, Unplug } from "lucide-react"
import { PAIN_POINTS } from "@/lib/constants"

const ICONS = { Clock, TrendingDown, Users, Unplug } as Record<
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

export function Challenge() {
  return (
    <section className="bg-[hsl(var(--muted)/0.5)] py-24 dark:bg-[#0d1f35]">
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
            The challenge
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))] md:text-4xl"
          >
            Sound familiar?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-[hsl(var(--muted-foreground))]"
          >
            Most construction businesses aren't struggling because their people are bad — they're
            struggling because their systems are broken.
          </motion.p>

          <motion.div
            variants={stagger}
            className="mt-16 grid gap-6 sm:grid-cols-2"
          >
            {PAIN_POINTS.map((point) => {
              const Icon = ICONS[point.icon]
              return (
                <motion.div
                  key={point.headline}
                  variants={fadeUp}
                  className="group rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-6 transition-colors hover:border-[hsl(var(--accent)/0.4)]"
                >
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-[hsl(var(--muted))] p-2">
                    <Icon className="size-6 text-[hsl(var(--secondary))]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[hsl(var(--foreground))]">
                    {point.headline}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                    {point.description}
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
