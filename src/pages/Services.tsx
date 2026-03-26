import { useEffect } from "react"
import { ServicesHero } from "@/components/sections/ServicesHero"
import { ServicePackages } from "@/components/sections/ServicePackages"
import { ServicesFaq } from "@/components/sections/ServicesFaq"

export function Services() {
  useEffect(() => {
    document.title = "Services — Dovito Business Solutions"
  }, [])

  return (
    <>
      <ServicesHero />
      <ServicePackages />
      <ServicesFaq />
    </>
  )
}
