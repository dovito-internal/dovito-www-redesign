import { Moon, Sun, Menu, X } from "lucide-react"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/lib/theme"
import { NAV_LINKS, SITE_NAME } from "@/lib/constants"

export function Nav() {
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[hsl(var(--background)/0.95)] backdrop-blur supports-[backdrop-filter]:bg-[hsl(var(--background)/0.6)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-semibold text-[hsl(var(--foreground))] tracking-tight">
          {SITE_NAME}
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-sm transition-colors hover:text-[hsl(var(--foreground))] ${
                  isActive
                    ? "text-[hsl(var(--foreground))]"
                    : "text-[hsl(var(--muted-foreground))]"
                }`
              }
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

          <Button asChild className="hidden md:inline-flex" size="sm">
            <Link to="/contact">Get Started</Link>
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

      {mobileOpen && (
        <div className="border-t md:hidden px-6 pb-4 pt-2 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `text-sm py-1 transition-colors ${
                  isActive
                    ? "text-[hsl(var(--foreground))]"
                    : "text-[hsl(var(--muted-foreground))]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button asChild size="sm" className="mt-2 w-full">
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              Get Started
            </Link>
          </Button>
        </div>
      )}
    </header>
  )
}
