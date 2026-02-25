import type { CSSProperties, ReactNode } from "react"
import { CalendarDays, GraduationCap, Users } from "lucide-react"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type OfferStat = {
  icon: ReactNode
  value: string
  label: string
}

const stats: OfferStat[] = [
  {
    icon: <CalendarDays className="size-6" aria-hidden="true" />,
    value: "100+",
    label: "Hours of content",
  },
  {
    icon: <GraduationCap className="size-6" aria-hidden="true" />,
    value: "16+",
    label: "Courses",
  },
  {
    icon: <Users className="size-6" aria-hidden="true" />,
    value: "20k+",
    label: "Students",
  },
]

function StatCard({
  stat,
  className,
  style,
}: {
  stat: OfferStat
  className?: string
  style?: CSSProperties
}) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden rounded-3xl bg-card/60 py-10 shadow-lg shadow-foreground/5",
        "ring-1 ring-foreground/5",
        "backdrop-blur supports-[backdrop-filter]:bg-card/50",
        "animate-in fade-in-0 slide-in-from-bottom-4",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-2 hover:shadow-xl hover:shadow-foreground/10 hover:ring-foreground/15 hover:bg-card",
        className
      )}
      style={style}
    >
      {/* subtle inner highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-foreground/[0.04] to-transparent"
      />

      <div className="relative mx-auto flex max-w-sm flex-col items-center px-8 text-center">
        <div className="grid place-items-center rounded-2xl border bg-background/80 p-6 shadow-md ring-1 ring-foreground/5">
          {stat.icon}
        </div>

        <div className="mt-10 text-5xl font-semibold tracking-tight sm:text-6xl">
          {stat.value}
        </div>
        <div className="mt-3 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
          {stat.label}
        </div>
      </div>
    </Card>
  )
}

export function WeOffer() {
  return (
    <section id="overview" className="scroll-mt-24">
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {/* soft background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-64 max-w-5xl rounded-full bg-foreground/5 blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground shadow-xs">
            We Offer
          </div>

          <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            What Mubiin gives your learning
          </h2>

          <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Hours of curated lessons, clear learning paths, and a calm, focused
            platform—so Somali learners can study at their own pace and still
            feel guided from first module to final quiz.
          </p>
        </div>

        <div className="relative mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3">
          <StatCard
            stat={stats[0]}
            className="lg:translate-y-6 lg:-rotate-1"
            style={{ animationDelay: "80ms" }}
          />
          <StatCard
            stat={stats[1]}
            className="lg:scale-[1.02]"
            style={{ animationDelay: "160ms" }}
          />
          <StatCard
            stat={stats[2]}
            className="lg:translate-y-6 lg:rotate-1"
            style={{ animationDelay: "240ms" }}
          />
        </div>
      </div>
    </section>
  )
}


