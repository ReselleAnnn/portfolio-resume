"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
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
    <section
      ref={sectionRef}
      id="about"
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-medium tracking-widest text-primary uppercase">
              About
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="space-y-6">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Results-driven <span className="text-primary font-medium">IT professional</span> with
              experience in web development, workflow automation, and AI-assisted
              content creation.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Skilled in building robust systems, automating workflows using Google
              Workspace tools, and enhancing digital marketing and brand content. I
              combine technical expertise with creative problem-solving to deliver
              solutions that drive efficiency and impact.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              My approach focuses on understanding business needs and translating
              them into elegant, user-friendly digital experiences. Whether it&apos;s
              developing internal systems, creating engaging web content, or
              streamlining complex workflows, I bring dedication and attention to
              detail to every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
