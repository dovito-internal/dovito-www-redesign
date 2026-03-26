import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SERVICE_PACKAGES } from "@/lib/constants"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export function ServicePackages() {
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
            Packages
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))] md:text-4xl"
          >
            Choose your engagement
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-[hsl(var(--muted-foreground))]"
          >
            Most clients start with an Assessment, then move into Implementation. Retained Support keeps momentum after launch.
          </motion.p>

          <motion.div
            variants={stagger}
            className="mt-16 grid gap-6 md:grid-cols-3 md:items-start"
          >
            {SERVICE_PACKAGES.map((pkg) => {
              const isFeatured = pkg.badge !== null
              return (
                <motion.div
                  key={pkg.id}
                  variants={fadeUp}
                  className={[
                    "flex flex-col rounded-xl border bg-[hsl(var(--background))] p-8 transition-shadow",
                    isFeatured
                      ? "border-[hsl(var(--secondary))] ring-2 ring-[hsl(var(--secondary)/0.4)] shadow-lg md:scale-[1.02]"
                      : "border-[hsl(var(--border))]",
                  ].join(" ")}
                >
                  {/* Top */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">
                      {pkg.name}
                    </h3>
                    {pkg.badge && (
                      <Badge variant="secondary" className="shrink-0">
                        {pkg.badge}
                      </Badge>
                    )}
                  </div>

                  {/* Price */}
                  <p className="mt-4 text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))]">
                    {pkg.price}
                  </p>
                  <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
                    {pkg.timeline}
                  </p>

                  <Separator className="my-6" />

                  {/* Included */}
                  <ul className="flex flex-col gap-3 flex-1">
                    {pkg.included.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="mt-0.5 size-4 shrink-0 text-[hsl(var(--accent))]" />
                        <span className="text-sm text-[hsl(var(--foreground))]">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    asChild
                    variant={isFeatured ? "default" : "outline"}
                    className="mt-8 w-full"
                  >
                    <Link to="/contact">{pkg.cta}</Link>
                  </Button>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
