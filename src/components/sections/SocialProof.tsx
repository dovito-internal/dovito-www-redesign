import { useEffect, useRef, useState } from "react"
import { motion, useInView, useMotionValue, animate } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const METRICS = [
  { target: 10, suffix: "+", label: "hours saved per week per client" },
  { target: 30, suffix: "%", label: "average revenue increase" },
  { target: 3, suffix: "x", label: "faster project turnaround" },
  { target: 100, suffix: "%", label: "client code ownership" },
]

const TESTIMONIALS = [
  {
    quote:
      "Dovito transformed how we handle project intake. What took 3 hours now takes 20 minutes.",
    name: "Operations Manager",
    company: "Regional Contractor",
  },
  {
    quote:
      "They didn't just build us software — they fixed our process first. That's what made the difference.",
    name: "Owner",
    company: "Mechanical Services Company",
  },
  {
    quote:
      "The ROI was clear within the first month. We stopped losing quotes to slow follow-up.",
    name: "VP of Operations",
    company: "Commercial GC",
  },
  {
    quote:
      "Finally, someone who understands construction. No explaining what a submittal is.",
    name: "Project Manager",
    company: "Electrical Contractor",
  },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" })
  const motionValue = useMotionValue(0)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    return motionValue.on("change", (v) => setDisplay(Math.floor(v)))
  }, [motionValue])

  useEffect(() => {
    if (isInView) {
      animate(motionValue, target, { duration: 1.4, ease: [0.16, 1, 0.3, 1] as const })
    }
  }, [isInView, target, motionValue])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export function SocialProof() {
  return (
    <section className="bg-[hsl(var(--primary))] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-medium uppercase tracking-widest text-[hsl(var(--secondary))]"
          >
            Results
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl"
          >
            What clients see after working with us.
          </motion.h2>

          {/* Metrics */}
          <motion.div
            variants={stagger}
            className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {METRICS.map((metric) => (
              <motion.div key={metric.label} variants={fadeUp} className="text-center">
                <div className="text-5xl font-bold text-[hsl(var(--secondary))] md:text-6xl">
                  <CountUp target={metric.target} suffix={metric.suffix} />
                </div>
                <p className="mt-3 text-sm leading-snug text-white/60">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <motion.div
            variants={stagger}
            className="mt-20 grid gap-6 sm:grid-cols-2"
          >
            {TESTIMONIALS.map((t) => (
              <motion.div
                key={t.quote}
                variants={fadeUp}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-6xl leading-none text-[hsl(var(--secondary)/0.3)] select-none">
                  &ldquo;
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{t.quote}</p>
                <p className="mt-4 text-xs text-white/50">
                  {t.name}, {t.company}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
