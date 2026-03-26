import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#091929] via-[#0d2545] to-[#001529]" />
      {/* Radial glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_20%,hsl(199_100%_62%/0.06),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-3xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-6xl font-bold tracking-tight text-white md:text-8xl"
          >
            Build different.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-xl text-white/75 md:text-2xl"
          >
            Custom web applications. Systems integration. Operational efficiency.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-base text-white/70"
          >
            For established construction companies seeking operational efficiency.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Apply Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/25 text-white hover:bg-white/10 hover:text-white hover:border-white/40"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
