import { CourseTopics } from "@/components/landing/course-topics";
import { FinalCta } from "@/components/landing/cta";
import { Hero } from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";
import { OurCourses } from "@/components/landing/our-courses";
import { SiteFooter } from "@/components/landing/footer";
import { Testimonials } from "@/components/landing/testimonials";
import { WeOffer } from "@/components/landing/we-offer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WeOffer />
        <OurCourses />
        <Testimonials />
        <CourseTopics />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
