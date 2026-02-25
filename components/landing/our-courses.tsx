import Image from "next/image"
import { BookOpen, Star } from "lucide-react"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Course = {
  title: string
  description: string
  price: string
  level: "Beginner" | "Intermediate" | "Advanced"
  tag?: string
  image: string
}

const courses: Course[] = [
  {
    title: "Teach online with confidence",
    description:
      "Plan lessons, structure modules, and keep learners engaged using simple online tools that work for Somali classrooms.",
    price: "$39",
    level: "Beginner",
    tag: "Featured",
    image: "/heroimages/image.png",
  },
  {
    title: "Design engaging digital lessons",
    description:
      "Go from idea to published course: upload content, add quizzes, manage cohorts, and track progress from one clean dashboard.",
    price: "$59",
    level: "Intermediate",
    tag: "Popular",
    image: "/heroimages/image3.png",
  },
  {
    title: "Modern skills for Somali learners",
    description:
      "Blend soft skills and technical topics into step‑by‑step learning paths that work for schools, institutes, and training teams.",
    price: "$79",
    level: "Intermediate",
    tag: "New",
    image: "/heroimages/image6.png",
  },
]

function CourseCard({ course, index }: { course: Course; index: number }) {
  const delay = 80 + index * 80

  return (
    <Card
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-card/70 pb-6 shadow-lg shadow-foreground/5",
        "backdrop-blur supports-[backdrop-filter]:bg-card/60",
        "animate-in fade-in-0 slide-in-from-bottom-4",
        "transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-foreground/10"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* image */}
      <div className="relative mx-4 mt-4 overflow-hidden rounded-2xl bg-muted">
        <div className="aspect-[16/10]">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 320px, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
      </div>

      {/* subtle top glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-24 h-24 rounded-full bg-foreground/5 blur-2xl"
      />

      <div className="mt-6 flex flex-1 flex-col px-8">
        {/* rating + price row */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1 text-foreground">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="size-3 fill-foreground/90 text-foreground/90"
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-foreground">
            {course.price}
          </span>
        </div>

        <h3 className="mt-4 line-clamp-2 text-base font-semibold tracking-tight">
          {course.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {course.description}
        </p>

        <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
          <div className="inline-flex items-center gap-1 rounded-full border bg-background px-3 py-1 text-[11px] font-medium">
            <span className="inline-flex size-4 items-center justify-center rounded-full bg-foreground text-[9px] text-background">
              {course.tag?.[0]}
            </span>
            <span>{course.tag}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <BookOpen className="size-3.5" />
            <span>{course.level}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

export function OurCourses() {
  return (
    <section id="courses" className="scroll-mt-24">
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {/* soft background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-64 max-w-5xl rounded-[3rem] bg-foreground/4 blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground shadow-xs">
            Our Courses
          </div>

          <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Courses crafted by Mubiin for Somali learners
          </h2>

          <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Explore practical, outcome‑focused programs created by Mubiin—so you
            can build real skills for the classroom, workplace, or your next
            career move, not just collect certificates.
          </p>
        </div>

        <div className="relative mt-12 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {courses.map((course, index) => (
            <CourseCard key={course.title} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}


