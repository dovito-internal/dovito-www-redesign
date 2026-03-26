import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Hero } from "@/components/sections/Hero"
import { Challenge } from "@/components/sections/Challenge"
import { Solution } from "@/components/sections/Solution"
import { Methodology } from "@/components/sections/Methodology"
import { SocialProof } from "@/components/sections/SocialProof"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function Home() {
  return (
    <>
      <Hero />

      <Challenge />

      <Solution />

      <Methodology />

      <SocialProof />

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
