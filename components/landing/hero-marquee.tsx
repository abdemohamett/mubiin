import Image from "next/image"

import { cn } from "@/lib/utils"

const heroImages = [
  { src: "/heroimages/image.png", alt: "Mubiin LMS interface preview" },
  { src: "/heroimages/image1.png", alt: "Course experience preview" },
  { src: "/heroimages/image3.png", alt: "Learner progress preview" },
  { src: "/heroimages/image4.png", alt: "Assignments and grading preview" },
  { src: "/heroimages/image5.png", alt: "Analytics dashboard preview" },
  { src: "/heroimages/image6.png", alt: "Mobile-friendly learning preview" },
]

function MarqueeRow({
  reverse = false,
  durationSeconds = 60,
}: {
  reverse?: boolean
  durationSeconds?: number
}) {
  // Duplicate to create a seamless loop; the animation moves by 50% (one set).
  const items = [...heroImages, ...heroImages]

  return (
    <div className="relative overflow-hidden">
      <div
        className={cn(
          "mubiin-marquee-track flex w-max items-stretch gap-4 py-2",
          reverse && "mubiin-marquee-reverse"
        )}
        style={{ ["--mubiin-marquee-duration" as never]: `${durationSeconds}s` }}
      >
        {items.map((img, idx) => (
          <div
            key={`${img.src}-${idx}`}
            className="relative h-36 w-[260px] shrink-0 overflow-hidden rounded-3xl border bg-card shadow-sm sm:h-44 sm:w-[320px]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 640px) 320px, 260px"
              className="object-cover"
              priority={idx < heroImages.length}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function HeroMarquee() {
  return (
    <div className="relative overflow-hidden rounded-3xl border bg-background p-5 shadow-sm sm:p-6">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-18 bg-gradient-to-r from-background to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-18 bg-gradient-to-l from-background to-transparent sm:w-24" />

      <div className="grid gap-4">
        <MarqueeRow durationSeconds={64} />
        <MarqueeRow reverse durationSeconds={72} />
      </div>
    </div>
  )
}


