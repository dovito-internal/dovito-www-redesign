import { useEffect } from "react"
import { ContactHero } from "@/components/sections/ContactHero"
import { ContactForm } from "@/components/sections/ContactForm"
import { ContactNextSteps } from "@/components/sections/ContactNextSteps"

export function Contact() {
  useEffect(() => {
    document.title = "Contact — Dovito Business Solutions"
  }, [])

  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactNextSteps />
    </>
  )
}
