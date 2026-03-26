import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { VALUES } from "@/lib/constants"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export function AboutValues() {
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
            Core values
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))] md:text-4xl"
          >
            How we operate
          </motion.h2>

          <motion.div
            variants={stagger}
            className="mt-12 grid gap-6 sm:grid-cols-2"
          >
            {VALUES.map((value) => (
              <motion.div key={value.title} variants={fadeUp}>
                <Card className="h-full border-[hsl(var(--border))] bg-[hsl(var(--background))] p-8 transition-colors hover:border-[hsl(var(--accent)/0.4)]">
                  <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">
                    {value.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-[hsl(var(--muted-foreground))]">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
