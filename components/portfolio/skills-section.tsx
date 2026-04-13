"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Web Development",
    skills: ["HTML/CSS", "JavaScript", "React", "Vite", "Next.js", "Laravel", "PHP", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Automation",
    skills: ["Google Apps Script", "Google Workspace", "Workflow Automation", "API Integration", "Process Optimization"],
  },
  {
    title: "AI Tools",
    skills: ["ChatGPT", "AI Content Generation", "AI-Assisted Design", "Prompt Engineering", "AI Workflow Integration"],
  },
  {
    title: "Design",
    skills: ["UI/UX Design", "Figma", "Canva", "Responsive Design", "Brand Design"],
  },
  {
    title: "Business Tools",
    skills: ["Microsoft Office", "Google Workspace", "MSSQL", "Project Management", "Digital Marketing"],
  },
]

export function SkillsSection() {
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
    <section ref={sectionRef} id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-medium tracking-widest text-primary uppercase">
              Skills
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold text-primary mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
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
