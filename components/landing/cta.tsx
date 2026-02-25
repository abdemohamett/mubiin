import { Button } from "@/components/ui/button"

export function FinalCta() {
  return (
    <section id="pricing" className="scroll-mt-24">
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-10">
        {/* background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-64 max-w-5xl rounded-[3rem] bg-foreground/5 blur-3xl"
        />

        <div className="relative overflow-hidden rounded-3xl border bg-card/80 p-8 shadow-lg shadow-foreground/5 backdrop-blur sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Start learning
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Ready to take your next step with Mubiin courses?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Pick a course, reserve your seat, and start learning in a structured,
              distraction‑free space designed for Somali learners at every level.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 lg:mt-0 lg:flex-row lg:items-center">
            <Button
              size="lg"
              className="h-11 rounded-xl px-7 text-sm font-semibold"
              asChild
            >
              <a href="#courses">Browse courses</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-11 rounded-xl px-7 text-sm"
              asChild
            >
              <a href="#how">View how it works</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


