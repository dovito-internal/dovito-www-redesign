import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle2, Mail, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

type Fields = {
  name: string
  company: string
  email: string
  phone: string
  message: string
}

type Errors = Partial<Record<keyof Fields, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(fields: Fields): Errors {
  const errors: Errors = {}
  if (!fields.name.trim()) errors.name = "Full name is required."
  if (!fields.company.trim()) errors.company = "Company name is required."
  if (!fields.email.trim()) {
    errors.email = "Email is required."
  } else if (!EMAIL_RE.test(fields.email)) {
    errors.email = "Enter a valid email address."
  }
  if (!fields.message.trim()) errors.message = "Please tell us how we can help."
  return errors
}

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "X", href: "#" },
]

export function ContactForm() {
  const [fields, setFields] = useState<Fields>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Set<keyof Fields>>(new Set())
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(key: keyof Fields, value: string) {
    const next = { ...fields, [key]: value }
    setFields(next)
    if (touched.has(key)) {
      setErrors(validate(next))
    }
  }

  function handleBlur(key: keyof Fields) {
    setTouched((prev) => new Set(prev).add(key))
    setErrors(validate(fields))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const allTouched = new Set(Object.keys(fields) as Array<keyof Fields>)
    setTouched(allTouched)
    const errs = validate(fields)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 800))
    setSubmitting(false)
    setSubmitted(true)
  }

  function fieldProps(key: keyof Fields) {
    const hasError = touched.has(key) && !!errors[key]
    return {
      id: key,
      "aria-invalid": hasError || undefined,
      "aria-describedby": hasError ? `${key}-error` : undefined,
    }
  }

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 gap-16 lg:grid-cols-5"
        >
          {/* Form column */}
          <motion.div variants={fadeUp} className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-6"
                  aria-label="Contact form"
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        {...fieldProps("name")}
                        type="text"
                        placeholder="Jane Smith"
                        value={fields.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        onBlur={() => handleBlur("name")}
                        autoComplete="name"
                      />
                      {touched.has("name") && errors.name && (
                        <p id="name-error" className="text-sm text-destructive" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        {...fieldProps("company")}
                        type="text"
                        placeholder="Acme Construction"
                        value={fields.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        onBlur={() => handleBlur("company")}
                        autoComplete="organization"
                      />
                      {touched.has("company") && errors.company && (
                        <p id="company-error" className="text-sm text-destructive" role="alert">
                          {errors.company}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        {...fieldProps("email")}
                        type="email"
                        placeholder="jane@acme.com"
                        value={fields.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        autoComplete="email"
                      />
                      {touched.has("email") && errors.email && (
                        <p id="email-error" className="text-sm text-destructive" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone">
                        Phone{" "}
                        <span className="text-[hsl(var(--muted-foreground))] font-normal">
                          (optional)
                        </span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={fields.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">How can we help? *</Label>
                    <Textarea
                      {...fieldProps("message")}
                      placeholder="Tell us about your business, your biggest operational challenge, and what you're hoping to achieve."
                      value={fields.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      className="min-h-[160px]"
                    />
                    {touched.has("message") && errors.message && (
                      <p id="message-error" className="text-sm text-destructive" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitting}
                      className={cn("min-w-[160px]", submitting && "opacity-70")}
                    >
                      {submitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                  className="flex flex-col items-start gap-6 py-12"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle2 className="size-12 text-[hsl(var(--accent))]" />
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-[hsl(var(--foreground))]">
                      Message received
                    </h2>
                    <p className="mt-2 text-[hsl(var(--muted-foreground))]">
                      We'll be in touch within 48 hours.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Company info column */}
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:info@dovito.com"
                  className="group flex items-center gap-3 text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] transition-colors"
                >
                  <Mail className="size-5 shrink-0 text-[hsl(var(--accent))]" />
                  <span className="text-sm font-medium">info@dovito.com</span>
                </a>

                <div className="flex items-center gap-3 text-[hsl(var(--muted-foreground))]">
                  <MapPin className="size-5 shrink-0 text-[hsl(var(--accent))]" />
                  <span className="text-sm">Serving construction companies nationwide</span>
                </div>
              </div>

              <div className="h-px bg-[hsl(var(--border))]" />

              <div className="flex flex-col gap-3">
                <p className="text-sm font-medium text-[hsl(var(--foreground))]">Follow us</p>
                <div className="flex flex-wrap items-center gap-2">
                  {SOCIAL_LINKS.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="inline-flex items-center gap-1.5 rounded-md border border-[hsl(var(--border))] px-3 py-1.5 text-xs font-medium text-[hsl(var(--muted-foreground))] transition-colors hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))]"
                    >
                      {label}
                      <ExternalLink className="size-3" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
