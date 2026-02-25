import { cn } from "@/lib/utils"
import { Sparkles } from "lucide-react"

const topics = [
  "Web Development",
  "JavaScript",
  "UI/UX Design",
  "Productivity",
  "Soft Skills",
  "Assessment & Quizzes",
  "Teacher Training",
  "Student Success",
]

function TopicPill({ label, index }: { label: string; index: number }) {
  const delay = 60 + index * 40

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border bg-background px-5 py-2.5 text-sm text-foreground shadow-sm",
        "ring-1 ring-foreground/5 backdrop-blur supports-[backdrop-filter]:bg-background/80",
        "animate-in fade-in-0 slide-in-from-bottom-3",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-foreground/15"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="inline-flex size-5 items-center justify-center rounded-full border bg-card text-[11px] text-muted-foreground">
        ✶
      </span>
      <span>{label}</span>
    </button>
  )
}

export function CourseTopics() {
  return (
    <section id="topics" className="scroll-mt-24">
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {/* soft background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-64 max-w-5xl rounded-[3rem] bg-foreground/4 blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground shadow-xs">
            <Sparkles className="size-3.5" />
            <span>Featured topics</span>
          </div>

          <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Topics that meet you where you are
          </h2>

          <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Explore the core areas covered across Mubiin courses—from web
            development to teaching skills—so you can pick a path that matches
            your goals and the opportunities you’re aiming for.
          </p>
        </div>

        <div className="relative mt-10 flex flex-wrap justify-center gap-4 lg:mt-12">
          {topics.map((topic, index) => (
            <TopicPill key={topic} label={topic} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}


