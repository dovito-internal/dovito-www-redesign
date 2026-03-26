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

export function AboutCta() {
  return (
    <section className="relative overflow-hidden bg-[#091929]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,hsl(199_100%_62%/0.06),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mx-auto max-w-2xl"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold tracking-tight text-white md:text-5xl"
          >
            Ready to build different?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-white/70"
          >
            Tell us about your operation. We'll tell you if we can help.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-[hsl(var(--secondary))] text-[#091929] hover:bg-[hsl(var(--secondary)/0.9)] font-semibold"
            >
              <Link to="/contact">Get in touch</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
