import { useEffect, useRef, useState } from "react"

const contactLinks = [
  {
    label: "Email",
    value: "abhishekpaul512.2@gmail.com",
    href: "mailto:abhishekpaul512.2@gmail.com",
    icon: "✉",
  },
  {
    label: "Phone",
    value: "+91-8167398312",
    href: "tel:+918167398312",
    icon: "☎",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abhishekpauler",
    href: "https://linkedin.com/in/abhishekpauler",
    icon: "🔗",
  },
  {
    label: "GitHub",
    value: "github.com/abhishekpawl",
    href: "https://github.com/abhishekpawl",
    icon: "⚙",
  },
]

export default function Contact() {
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
    <section id="contact" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Let's Connect
        </h2>

        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 sm:p-12">
            <p className="text-lg text-muted-foreground text-center mb-12">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out through any
              of the channels below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group p-6 bg-background/50 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{link.icon}</span>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {link.label}
                      </h3>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">© 2025 Abhishek Paul | Crafted with code and p5.js</p>
        </div>
      </div>
    </section>
  )
}
