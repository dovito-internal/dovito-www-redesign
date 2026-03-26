import { useEffect } from "react"
import { AboutHero } from "@/components/sections/AboutHero"
import { AboutPhilosophy } from "@/components/sections/AboutPhilosophy"
import { AboutValues } from "@/components/sections/AboutValues"
import { AboutBeliefs } from "@/components/sections/AboutBeliefs"
import { AboutCta } from "@/components/sections/AboutCta"

export function About() {
  useEffect(() => {
    document.title = "About — Dovito Business Solutions"
  }, [])

  return (
    <>
      <AboutHero />
      <AboutPhilosophy />
      <AboutValues />
      <AboutBeliefs />
      <AboutCta />
    </>
  )
}
