import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#091929] via-[#0d2545] to-[#001529]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_20%,hsl(199_100%_62%/0.06),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-medium uppercase tracking-widest text-[hsl(var(--secondary))]"
          >
            What we offer
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-4 text-5xl font-bold tracking-tight text-white md:text-6xl"
          >
            Services built for how you work
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-xl text-white/70"
          >
            Every engagement is scoped, measured, and tied to outcomes. Process first, then systems.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
