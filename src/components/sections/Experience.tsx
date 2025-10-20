import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    title: "Software Engineer",
    company: "Wells Fargo",
    location: "Bangalore, India",
    period: "July 2023 – Present",
    highlights: [
      "GenAI-Powered SDLC Control Validation System",
      "End-to-End Patching Oversight Automation (100% efficiency improvement)",
      "Automated Compliance Reporting (80% manual intervention reduction)",
      "Predictive Maintenance Model POC",
    ],
  },
  {
    title: "Program Associate Intern",
    company: "Wells Fargo",
    location: "Remote",
    period: "May 2022 – July 2022",
    highlights: ["Subscriber-Based Chatbot SaaS Platform", "Custom chatbot creation with knowledge base integration"],
  },
  {
    title: "Summer Research Intern",
    company: "Indian Institute of Technology (BHU) Varanasi",
    location: "Remote",
    period: "May 2021 – July 2021",
    highlights: [
      "Gait Recognition Through Reconstructing Occluded Frames",
      "Forward-Backward LSTM Model Development",
      "Machine Learning Pipeline Implementation",
    ],
  },
]

export default function Experience() {
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
    <section id="experience" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 sm:p-8 hover:border-primary/50 hover:bg-card/80 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right mt-2 sm:mt-0">
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight} className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-3 mt-1">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
