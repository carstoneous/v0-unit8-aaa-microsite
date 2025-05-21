import Hero from "@/components/hero"
import Opportunities from "@/components/opportunities"
import CaseStudies from "@/components/case-studies"
import CompetitiveEdge from "@/components/competitive-edge"
import AboutUs from "@/components/about-us"
import ContactSection from "@/components/contact-section"
import ExpertiseSection from "@/components/expertise-section"
import TestimonialsSection from "@/components/testimonials-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Opportunities />
      <ExpertiseSection />
      <CaseStudies />
      <TestimonialsSection />
      <CompetitiveEdge />
      <AboutUs />
      <ContactSection />
    </div>
  )
}
