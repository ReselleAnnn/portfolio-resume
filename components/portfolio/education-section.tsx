"use client"

import { useEffect, useRef, useState } from "react"

export function EducationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-medium tracking-widest text-primary uppercase">
              Education
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="hidden sm:flex shrink-0 w-16 h-16 rounded-xl bg-primary/10 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  BS Information Technology
                </h3>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/20 text-primary">
                    Cum Laude
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Graduated with Latin honors, demonstrating exceptional academic
                  performance and dedication to the field of Information Technology.
                  Developed a strong foundation in software development, database
                  management, and system analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
