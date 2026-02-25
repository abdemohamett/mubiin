import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

type Testimonial = {
  name: string
  role: string
  quote: string
  avatarInitials: string
  avatarSrc?: string
}

const testimonials: Testimonial[] = [
  {
    name: "Amina Yusuf",
    role: "Student, teaching skills track",
    quote:
      "Before Mubiin I used random YouTube videos. Now every lesson, quiz, and assignment is in one place, so I know exactly what to study each week.",
    avatarInitials: "AY",
  },
  {
    name: "Mohamed Ali",
    role: "Student, web development track",
    quote:
      "The courses feel calm and clear. I can log in after work, continue exactly where I stopped, and see my progress move forward after every module.",
    avatarInitials: "MA",
  },
  {
    name: "Hodan Farah",
    role: "Student, career skills track",
    quote:
      "Mubiin helped me build the confidence to apply for new roles. The projects and quizzes made me practice, not just watch videos.",
    avatarInitials: "HF",
  },
]

function StarsRow() {
  return (
    <div className="flex items-center gap-1 text-foreground">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="size-3.5 fill-foreground/90 text-foreground/90"
        />
      ))}
    </div>
  )
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial
  index: number
}) {
  const delay = 80 + index * 80

  return (
    <Card
      className={cn(
        "relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border bg-card/70 px-8 py-8 shadow-lg shadow-foreground/5",
        "backdrop-blur supports-[backdrop-filter]:bg-card/60",
        "animate-in fade-in-0 slide-in-from-bottom-4",
        "transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-foreground/10",
        index === 0 && "lg:-rotate-1 lg:translate-y-4",
        index === 2 && "lg:rotate-1 lg:translate-y-4"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <StarsRow />
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
        “{testimonial.quote}”
      </p>

      <div className="mt-8 flex items-center gap-3">
        <Avatar size="lg">
          {testimonial.avatarSrc ? (
            <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} />
          ) : null}
          <AvatarFallback>{testimonial.avatarInitials}</AvatarFallback>
        </Avatar>
        <div>
          <div className="text-sm font-semibold text-foreground">
            {testimonial.name}
          </div>
          <div className="text-xs text-muted-foreground">
            {testimonial.role}
          </div>
        </div>
      </div>
    </Card>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24">
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {/* soft background gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-72 max-w-5xl rounded-[3rem] bg-foreground/5 blur-3xl"
        />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground shadow-xs">
              Testimonials
            </div>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              What our students say about learning with Mubiin
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Real feedback from Somali students who use Mubiin courses to stay
              consistent, understand complex topics more easily, and move closer
              to their goals.
            </p>
            <Button
              size="lg"
              className="mt-6 h-11 rounded-xl px-7 text-sm font-semibold"
            >
              Start learning now
            </Button>
          </div>
        </div>

        <div className="relative mt-10 grid gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


