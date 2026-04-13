"use client"

import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    title: "WEB & DIGITAL CONTENT ASSOCIATE",
    company: "Most Holy Rosary Multi-Purpose Cooperative - Philippines | Rizal",
    period: "Jan 2025 - Jan 2026",
    description:
      "Managed website updates and ensured mobile responsivenes, Automated internal reports and email notifications using Google Apps Scrip ,Leveraged AI tools to generate visual concepts, enhance photos, and streamline content production ,Designed graphics and multimedia materials to strengthen digital presence",
    technologies: ["Web Development", "Content Creation", "Digital Marketing"],
  },
  {
    title: "IT JUNIOR DEVELOPER (PROJECT-BASED; ABSORBED AS INTERNAL STAFF)",
    company: "Most Holy Rosary Multi-Purpose Cooperative - Philippines | Rizal",
    period: "Feb 2024 - Jan 2025",
    description:
      "Developed and maintained web-based administrative systems, Created structured System Analysis and Design documentation, Improved internal workflows through system enhancementts.Tech stack: PHP (Laravel), HTML, CSS (Bootstrap Framework), JavaScript, MSSQL",
    technologies: ["Laravel", "Bootstrap", "MSSQL", "PHP"],
  },
  {
    title: "FREELANCE WEB DEVELOEPR AND DESIGNER/ GRAPHIC DESIGNER(REMOTE PROJECTS) ",
    company: "International & Local (Philippines) - USA | California| Open to Remote Work",
    period: "Jan 2024 - Present",
    description:
      "Led development of two U.S.-based websites, a Medical Billing Services platform and a Virtual Assistant productivity site, Designed responsive UI/UX layouts using Figma, Utilized AI-assisted tools for layout concepts, visual ideation, and content optimization, Collaborated with developers to deliver functional, user-centered web solutions",
    technologies: ["UI/UX Design", "Web Design", "AI Tools", "Responsive Design"],
  },
  {
    title: "TRADE MARKETING SPECIALIST",
    company: "Brew Master International Inc. - Philippines | Pasig City",
    period: "Oct 2023 - Feb 2024",
    description:
      "Spearheaded merchandising strategies and promotions as Distributor of Asia Brewery Inc. (Cobra, Summit, Absolute, Vitamilk & others),Ensured proper implementation of marketing collaterals and promotions across all supervised stores, Monitored and guided sales agents to execute correct promotional activities, Executed trade and consumer promotions to boost customer engagement, Managed and organized events to create a positive brand experience",
    technologies: ["UI/UX Design", "Web Design", "AI Tools", "Responsive Design"],
  },
]

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-medium tracking-widest text-primary uppercase">
              Experience
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-sm text-primary font-medium shrink-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
