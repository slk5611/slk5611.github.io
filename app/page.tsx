import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TechnicalExpertise } from "@/components/technical-expertise"
import { ExperienceSection } from "@/components/experience-section"
import { BlogSection } from "@/components/blog-section"
import { OpenSourceSection } from "@/components/open-source-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white">
      <Navbar />
      <HeroSection />
      <BlogSection />
      <TechnicalExpertise />
      <ExperienceSection />
      <AboutSection />
      <OpenSourceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
