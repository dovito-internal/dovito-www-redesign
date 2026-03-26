import { Link } from "react-router-dom"
import { Separator } from "@/components/ui/separator"
import { NAV_LINKS, SITE_NAME } from "@/lib/constants"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t bg-[hsl(var(--muted)/0.3)]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <p className="font-semibold text-[hsl(var(--foreground))]">{SITE_NAME}</p>
            <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
              Operations consulting and systems integration for construction companies.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <Separator className="my-8" />

        <p className="text-sm text-[hsl(var(--muted-foreground))]">
          &copy; {year} Dovito Business Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
