import { Moon, Sun, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/lib/theme"
import { NAV_LINKS } from "@/lib/constants"

export function Nav() {
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 100)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "relative text-sm transition-colors duration-200",
      "after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-secondary after:transition-transform after:duration-200",
      isActive
        ? "text-foreground after:scale-x-100"
        : "text-muted-foreground hover:text-foreground after:scale-x-0",
    ].join(" ")

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-lg py-2 transition-colors duration-200 ${
      isActive ? "text-foreground font-medium" : "text-muted-foreground"
    }`

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 shadow-sm"
          : "bg-transparent border-transparent shadow-none",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="font-bold text-xl tracking-tight text-foreground"
        >
          dovito
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/"}
              className={desktopLinkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>

          <Button asChild variant="secondary" size="sm" className="hidden md:inline-flex">
            <Link to="/contact">Apply Now</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 flex flex-col bg-background/95 backdrop-blur-md md:hidden px-6 py-8"
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === "/"}
                  onClick={() => setMobileOpen(false)}
                  className={mobileLinkClass}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-8">
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="w-full"
              >
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  Apply Now
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
