import { motion } from "framer-motion"
import { BELIEFS } from "@/lib/constants"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export function AboutBeliefs() {
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
            Core beliefs
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))] md:text-4xl"
          >
            What we stand for
          </motion.h2>

          <motion.div variants={stagger} className="mt-12 space-y-0 divide-y divide-[hsl(var(--border))]">
            {BELIEFS.map((belief) => (
              <motion.div
                key={belief.number}
                variants={fadeUp}
                className="flex gap-8 py-8"
              >
                <span className="font-mono text-4xl font-bold leading-none text-[hsl(var(--foreground)/0.1)] shrink-0 md:text-5xl">
                  {belief.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[hsl(var(--foreground))]">
                    {belief.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-[hsl(var(--muted-foreground))]">
                    {belief.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
