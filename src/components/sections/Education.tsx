import { useEffect, useRef, useState } from "react"

const education = [
  {
    degree: "B.Tech in Electronics and Communication Engineering",
    institution: "National Institute of Technology, Durgapur",
    period: "2019 – 2023",
    cgpa: "9.06/10",
  },
]

const certifications = [
  {
    name: "Microsoft Certified: Azure Fundamentals",
    url: "https://learn.microsoft.com/en-us/users/abhishekpaul-7379/credentials/9e8dab55ccad5a93",
  },
  {
    name: "Microsoft Certified: Azure AI Fundamentals",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/AbhishekPaul-4196/708A1183CE46B0AA?sharingId=3BA8C8BA3FC23D43",
  },
]

const publications = [
  {
    title: "Fusion of Forward and Backward LSTMs for Effective Occlusion Reconstruction in Gait Sequences",
    authors: "Manav Jain, Pratik Chattopadhyay, Abhishek Paul, and Jinesh Jain",
    journal: "SN Computer Science",
    status: "Accepted in 2025",
    url: "https://trebuchet.public.springernature.app/get_content/a2cdda12-eae0-4544-93d5-443cca3ccc3a?utm_source=rct_congratemailt&utm_medium=email&utm_campaign=nonoa_20250220&utm_content=10.1007/s42979-025-03755-2https://trebuchet.public.springernature.app/get_content/a2cdda12-eae0-4544-93d5-443cca3ccc3a?utm_source=rct_congratemailt&utm_medium=email&utm_campaign=nonoa_20250220&utm_content=10.1007/s42979-025-03755-2"
  },
]

export default function Education() {
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
    <section id="education" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Education & Achievements
        </h2>

        <div className="space-y-8">
          {/* Education */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-4">Education</h3>
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 sm:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-primary font-medium">{edu.institution}</p>
                  </div>
                  <div className="text-right mt-2 sm:mt-0">
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                    <p className="text-sm text-accent font-medium">CGPA: {edu.cgpa}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-4">Certifications</h3>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 sm:p-8">
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert.name} className="text-muted-foreground flex items-start">
                    <span className="text-primary mr-3 mt-1">★</span>
                    <a 
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors duration-200"
                    >
                      {cert.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Publications */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-4">Publications</h3>
            {publications.map((pub) => (
              <div key={pub.title} className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 sm:p-8">
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                    {pub.title}
                  </h4>
                </a>
                <p className="text-muted-foreground mb-2">{pub.authors}</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-primary">{pub.journal}</p>
                  <p className="text-sm text-accent font-medium mt-2 sm:mt-0">{pub.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
