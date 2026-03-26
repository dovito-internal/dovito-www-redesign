import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { SERVICES_FAQ } from "@/lib/constants"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export function ServicesFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[hsl(var(--muted)/0.3)] py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-center text-sm font-medium uppercase tracking-widest text-[hsl(var(--accent))]"
          >
            Common questions
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-center text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))] md:text-4xl"
          >
            Before you reach out
          </motion.h2>

          <motion.div variants={stagger} className="mt-12">
            {SERVICES_FAQ.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <motion.div
                  key={item.question}
                  variants={fadeUp}
                  className="border-b border-[hsl(var(--border))]"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--accent))]"
                  >
                    {item.question}
                    <ChevronDown
                      className={[
                        "size-5 shrink-0 text-[hsl(var(--muted-foreground))] transition-transform duration-200",
                        isOpen ? "rotate-180" : "",
                      ].join(" ")}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
