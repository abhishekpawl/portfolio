import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "Gait Recognition System",
    description: "ML pipeline for reconstructing occluded gait sequences using Forward-Backward LSTM",
    year: "2023",
    tech: ["Python", "TensorFlow", "OpenCV", "LSTM"],
    highlights: [
      "3-layered neural network (encoder, LSTM, decoder)",
      "Optimized for structural similarity and gait-recognition accuracy",
      "Validated on CASIA-B gait dataset",
    ],
    github: "https://github.com/abhishekpawl/forward-backward-gait-recognition"
  },
  {
    title: "Splittr",
    description: "Full-stack expense tracking application with smart settlement algorithm",
    year: "2024",
    tech: ["React", "TypeScript", "Node.js", "Prisma"],
    highlights: [
      "Group expense tracking and management",
      "Greedy algorithm for minimizing settlement transactions",
      "Optimized database interactions with Prisma ORM",
    ],
    github: "https://github.com/abhishekpawl/splittr"
  },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 sm:p-8 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity flex items-center gap-2"
                      >
                        {project.title}
                        <svg
                          className="w-5 h-5 inline-block"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                      </a>
                    </h3>
                    <p className="text-muted-foreground mt-2">{project.description}</p>
                  </div>
                  <span className="text-sm text-primary font-medium mt-2 sm:mt-0">{project.year}</span>
                </div>

                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="text-muted-foreground flex items-start">
                      <span className="text-accent mr-3 mt-1">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:border-primary/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
