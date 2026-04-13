"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const categories = ["All", "Web Design", "Video", "Photography", "Graphics"]

const works = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Design",
    description: "Modern shopping experience with seamless checkout flow",
    image: "/works/web-1.jpg",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    id: 2,
    title: "Corporate Website",
    category: "Web Design",
    description: "Professional business website with CMS integration",
    image: "/works/web-2.jpg",
    tags: ["WordPress", "PHP", "CSS"],
  },
  {
    id: 3,
    title: "Product Showcase Video",
    category: "Video",
    description: "High-quality product demonstration video",
    image: "/works/video-1.jpg",
    tags: ["Premiere Pro", "After Effects"],
  },
  {
    id: 4,
    title: "Brand Story Documentary",
    category: "Video",
    description: "Compelling brand narrative through visual storytelling",
    image: "/works/video-2.jpg",
    tags: ["DaVinci Resolve", "Motion Graphics"],
  },
  {
    id: 5,
    title: "Product Photography",
    category: "Photography",
    description: "Clean product shots for e-commerce catalog",
    image: "/works/photo-1.jpg",
    tags: ["Lightroom", "Studio Lighting"],
  },
  {
    id: 6,
    title: "Event Coverage",
    category: "Photography",
    description: "Corporate event documentation and highlights",
    image: "/works/photo-2.jpg",
    tags: ["Photoshop", "Color Grading"],
  },
  {
    id: 7,
    title: "Dashboard UI Design",
    category: "Web Design",
    description: "Analytics dashboard with data visualization",
    image: "/works/web-3.jpg",
    tags: ["Figma", "React", "Charts"],
  },
  {
    id: 8,
    title: "Social Media Graphics",
    category: "Graphics",
    description: "Branded content for social media campaigns",
    image: "/works/graphics-1.jpg",
    tags: ["Canva", "Illustrator"],
  },
  {
    id: 9,
    title: "Logo & Branding",
    category: "Graphics",
    description: "Complete brand identity package design",
    image: "/works/graphics-2.jpg",
    tags: ["Illustrator", "Brand Design"],
  },
]

export function WorksSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter((work) => work.category === activeCategory)

  return (
    <section id="works" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my creative projects spanning web design, video production, photography, and graphic design.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work) => (
            <Card
              key={work.id}
              className="group bg-card border-border overflow-hidden cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              onMouseEnter={() => setHoveredId(work.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-video overflow-hidden bg-secondary">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-background/80 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredId === work.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="text-center p-4">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>
                    <p className="text-sm font-medium text-foreground">View Project</p>
                  </div>
                </div>
                {/* Category Badge */}
                <Badge className="absolute top-3 left-3 bg-background/90 text-foreground border-0">
                  {work.category}
                </Badge>
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {work.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {work.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
