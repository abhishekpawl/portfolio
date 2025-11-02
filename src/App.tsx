import { useEffect, useRef, useState } from "react"
import P5Sketch from "./components/P5Sketch"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Skills from "./components/sections/Skills"
import Experience from "./components/sections/Experience"
import Projects from "./components/sections/Projects"
import Education from "./components/sections/Education"
import Contact from "./components/sections/Contact"
import Navigation from "./components/Navigation"
import KnowledgeVault from "./pages/KnowledgeVault"

export default function App() {
  const [activeSection, setActiveSection] = useState("hero")
  const [route, setRoute] = useState<string>(window.location.hash)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "experience", "projects", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash)
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  return (
    <div ref={containerRef} className="relative w-full overflow-x-hidden">
      {/* Background p5.js animation */}
      <div className="fixed inset-0 -z-10">
        <P5Sketch />
      </div>

      {/* Navigation */}
      <Navigation activeSection={activeSection} />

      {/* Main content */}
      <main className="relative z-10">
        {route === "#vault" ? (
          <KnowledgeVault />
          ) : (
            <>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Education />
              <Contact />
            </>
          )}
      </main>
    </div>
  )
}
