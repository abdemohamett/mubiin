import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroMarquee } from "@/components/landing/hero-marquee"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-foreground/5 to-transparent blur-2xl"
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-12">
        {/* Left: copy + CTA (smaller, bolder) */}
        <div className="order-1 lg:col-span-5">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground shadow-xs">
            Somali‑first online learning
          </div>

          <h1 className="mt-6 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Learn modern skills with clear, structured courses from Mubiin.
          </h1>

          <p className="mt-5 max-w-lg text-pretty text-base leading-7 text-muted-foreground">
            Mubiin designs focused online programs for Somali learners—from
            teaching skills to digital careers—so you always know what to study
            next and how it connects to real opportunities.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="h-12 rounded-xl px-8 text-base shadow-sm"
              asChild
            >
              <a href="#courses">
                Browse courses <ArrowRight className="ml-1 size-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 rounded-xl px-8 text-base"
              asChild
            >
              <a href="#overview">What you’ll get</a>
            </Button>
          </div>
        </div>

        {/* Right: moving previews (bigger) */}
        <div className="order-2 lg:col-span-7">
          <div className="animate-in fade-in-0 slide-in-from-bottom-3 duration-700">
            <HeroMarquee />
          </div>
        </div>
      </div>
    </section>
  )
}


