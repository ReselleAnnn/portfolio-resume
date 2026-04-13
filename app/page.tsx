import { Navbar } from "@/components/portfolio/navbar"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { WorksSection } from "@/components/portfolio/works-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { CertificationsSection } from "@/components/portfolio/certifications-section"
import { EducationSection } from "@/components/portfolio/education-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <WorksSection />
      <SkillsSection />
      <CertificationsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
