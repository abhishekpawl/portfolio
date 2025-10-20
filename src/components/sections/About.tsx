import { useEffect, useRef, useState } from "react"

export default function About() {
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
    <section id="about" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About Me
        </h2>

        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 sm:p-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a Software Engineer at Wells Fargo with a passion for building intelligent systems that solve
              real-world problems. My expertise spans full-stack development, machine learning, and enterprise-grade
              GenAI implementations.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Currently, I'm contributing to pioneering GenAI-powered control solutions that reduce manual intervention. I believe in writing clean, maintainable code and
              creating seamless user experiences.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me listening to the Beatles or any classic rock music, playing football, playing my playstation or lifting in the gym.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
