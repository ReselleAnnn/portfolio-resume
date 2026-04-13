"use client"

import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    title: "Web & Digital Content Associate",
    company: "Most Holy Rosary Multi-Purpose Cooperative",
    period: "Present",
    description:
      "Managing web content and digital marketing initiatives. Developing and maintaining the cooperative's digital presence while creating engaging content for members and stakeholders.",
    technologies: ["Web Development", "Content Creation", "Digital Marketing"],
  },
  {
    title: "IT Junior Developer",
    company: "Internal Systems Development",
    period: "Previous Role",
    description:
      "Developed and maintained internal business systems using Laravel and Bootstrap. Worked with MSSQL databases to build efficient data-driven applications that streamlined business operations.",
    technologies: ["Laravel", "Bootstrap", "MSSQL", "PHP"],
  },
  {
    title: "Freelance Web Designer",
    company: "US-Based Projects",
    period: "Ongoing",
    description:
      "Providing UI/UX design and web development services for international clients. Leveraging AI tools to enhance productivity and deliver modern, responsive designs that meet client needs.",
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
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
                className={`group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 ${
                  isVisible
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
