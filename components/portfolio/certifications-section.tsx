"use client"

import { useEffect, useRef, useState } from "react"

const certifications = [
  {
    title: "Data Privacy Awareness for Academic Setting",
    issuer: "Integrated Southern Tagalog Association of Information Technology Education",
    date: "January 2021",
    // credentialId: "AWS-CP-XXXXX",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M19 2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 16H8V4h11v14z" />
        <path d="M6 6H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-1h-2v1H5V8h1V6z" />
        <path d="M10.5 8.5l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4 1.2-2.4z" />
      </svg>
    ),
  },
  {
    title: "TESDA Installing and Configuring Computer Systems",
    issuer: "TESDA",
    date: "July 2023",
    // credentialId: "GUXD-XXXXX",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M19 2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 16H8V4h11v14z" />
        <path d="M6 6H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-1h-2v1H5V8h1V6z" />
        <path d="M10.5 8.5l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4 1.2-2.4z" />
      </svg>
    ),
  },
  {
    title: "TESDA Setting Up Computer Networks",
    issuer: "TESDA",
    date: "July 2023",
    // credentialId: "META-FE-XXXXX",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M19 2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 16H8V4h11v14z" />
        <path d="M6 6H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-1h-2v1H5V8h1V6z" />
        <path d="M10.5 8.5l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4 1.2-2.4z" />
      </svg>
    ),
  },
  {
    title: "TESDA Setting Up Computer Servers",
    issuer: "TESDA",
    date: "July 2023",
    // credentialId: "HS-CM-XXXXX",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M19 2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 16H8V4h11v14z" />
        <path d="M6 6H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-1h-2v1H5V8h1V6z" />
        <path d="M10.5 8.5l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4 1.2-2.4z" />
      </svg>
    ),
  },
  {
    title: "TESDA Maintaining Computer Systems and Networks",
    issuer: "TESDA",
    date: "July 2023",
    // credentialId: "FIG-UX-XXXXX",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M19 2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 16H8V4h11v14z" />
        <path d="M6 6H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-1h-2v1H5V8h1V6z" />
        <path d="M10.5 8.5l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4 1.2-2.4z" />
      </svg>
    ),
  },
  {
    title: "TESDA Computer System Servicing NC II",
    issuer: "TESDA",
    date: "July 2023",
    // credentialId: "FCC-JS-XXXXX",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M19 2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 16H8V4h11v14z" />
        <path d="M6 6H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-1h-2v1H5V8h1V6z" />
        <path d="M10.5 8.5l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4 1.2-2.4z" />
      </svg>
    ),
  },
  {
    title: "Unlock the Power of Data Privacy: Cybersecurity in the Workplace and Data Privacy",
    issuer: "Society of Information Technology (PLMar-SITS) ",
    date: "April 2023",
    credentialId: "FCC-JS-XXXXX",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M19 2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 16H8V4h11v14z" />
        <path d="M6 6H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-1h-2v1H5V8h1V6z" />
        <path d="M10.5 8.5l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4 1.2-2.4z" />
      </svg>
    ),
  },
  {
    title: "Cybersecurity Seminar",
    issuer: "Most Holy Rosary Multi-Purpose Cooperative",
    date: "September 2024",
    credentialId: "FCC-JS-XXXXX",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M19 2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 16H8V4h11v14z" />
        <path d="M6 6H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-1h-2v1H5V8h1V6z" />
        <path d="M10.5 8.5l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4 1.2-2.4z" />
      </svg>
    ),
  },
  {
    title: "Digital Content Creator Workshop",
    issuer: "Most Holy Rosary Multi-Purpose Cooperative",
    date: "August 2025",
    // credentialId: "FCC-JS-XXXXX",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M19 2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 16H8V4h11v14z" />
        <path d="M6 6H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-1h-2v1H5V8h1V6z" />
        <path d="M10.5 8.5l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4 1.2-2.4z" />
      </svg>
    ),
  },
]

export function CertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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
    <section
      id="certifications"
      ref={sectionRef}
      className="py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certifications
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Professional certifications and credentials that validate my expertise in web development, design, and digital technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className={`group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-secondary rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1 text-balance">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-3.5 h-3.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                          />
                        </svg>
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
