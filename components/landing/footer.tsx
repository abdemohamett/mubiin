import Link from "next/link"

const footerLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Courses", href: "#courses" },
  { label: "Topics", href: "#topics" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
]

export function SiteFooter() {
  return (
    <footer id="about" className="border-t bg-background/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex size-7 items-center justify-center rounded-lg bg-foreground text-background text-sm">
              M
            </span>
            <span>Mubiin</span>
          </div>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Mubiin creates clear, Somali‑first online courses across skills,
            careers, and personal growth—so learners can study at their own pace
            and still feel guided.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="text-xs text-muted-foreground/80">
          © {new Date().getFullYear()} Mubiin. All rights reserved.
        </p>
      </div>
    </footer>
  )
}


