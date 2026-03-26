import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found — Dovito Business Solutions"
  }, [])
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-6">
      <p className="font-mono text-sm text-[hsl(var(--muted-foreground))]">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))]">
        Page not found
      </h1>
      <p className="mt-3 text-[hsl(var(--muted-foreground))]">
        The page you are looking for does not exist.
      </p>
      <Button asChild className="mt-8">
        <Link to="/">Back to home</Link>
      </Button>
    </div>
  )
}
