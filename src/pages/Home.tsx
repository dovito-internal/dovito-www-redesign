import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { METHODOLOGY_STEPS } from "@/lib/constants"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(var(--background))] py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp}>
              <Badge variant="outline" className="mb-6">
                For construction companies. $1M–$10M revenue.
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl font-semibold tracking-tight text-[hsl(var(--foreground))] md:text-7xl"
            >
              Build different.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg text-[hsl(var(--muted-foreground))] md:text-xl max-w-2xl"
            >
              Custom web applications. Systems integration. Operational efficiency.
              We fix how your business runs.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Start your assessment <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to="/services">View services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-[hsl(var(--muted)/0.3)] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
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

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {METHODOLOGY_STEPS.map((step) => (
                <motion.div key={step.number} variants={fadeUp}>
                  <Card className="h-full">
                    <CardHeader>
                      <p className="font-mono text-4xl font-bold text-[hsl(var(--accent)/0.3)]">
                        {step.number}
                      </p>
                      <div className="mt-2">
                        <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
                          {step.label}
                        </span>
                        <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">
                          {step.title}
                        </h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-[hsl(var(--muted-foreground))]">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))] md:text-4xl"
            >
              Ready to fix how your business runs?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-[hsl(var(--muted-foreground))]"
            >
              Start with a $1,500 operational assessment. No fluff, no obligation.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <Button asChild size="lg">
                <Link to="/contact">
                  Get your assessment <ArrowRight className="size-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
