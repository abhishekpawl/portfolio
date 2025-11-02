import React, { useEffect, useMemo, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

const markdownComponents: Record<string, any> = {
  h1: ({ node, ...props }: any) => <h1 className="text-3xl font-bold mt-4 mb-3" {...props} />,
  h2: ({ node, ...props }: any) => <h2 className="text-2xl font-semibold mt-4 mb-2" {...props} />,
  h3: ({ node, ...props }: any) => <h3 className="text-xl font-semibold mt-3 mb-2" {...props} />,
  p: ({ node, ...props }: any) => <p className="my-3" {...props} />,
  ul: ({ node, ...props }: any) => <ul className="list-disc ml-6 space-y-2" {...props} />,
  ol: ({ node, ...props }: any) => <ol className="list-decimal ml-6 space-y-2" {...props} />,
  li: ({ node, ...props }: any) => <li className="mb-1" {...props} />,
  a: ({ node, ...props }: any) => <a className="text-primary hover:underline" {...props} />,
  // Wrap long words and ensure code blocks wrap
  code: ({ node, inline, className, children, ...props }: any) => {
    if (inline) {
      return (
        <code
          className={`bg-muted/10 px-1 rounded text-sm break-words ${className ?? ""}`}
          {...props}
        >
          {children}
        </code>
      )
    }

    return (
      <pre className="whitespace-pre-wrap break-words bg-[rgba(0,0,0,0.04)] dark:bg-[rgba(255,255,255,0.04)] p-4 rounded-md overflow-auto">
        <code className={className} {...props}>
          {children}
        </code>
      </pre>
    )
  },
  pre: ({ node, ...props }: any) => (
    <div className="whitespace-pre-wrap break-words" {...props} />
  ),
}

type MDModuleMap = Record<string, () => Promise<string>>

export default function KnowledgeVault() {
  // load all markdown files under src/knowledge/** (place your folder at src/knowledge)
  const modules = (import.meta as any).glob("../knowledge/**/*.md", { as: "raw" }) as MDModuleMap

  const fileList = useMemo(() => {
    // Normalize keys to readable labels and build a flat list
    return Object.keys(modules).map((p) => {
      const normalized = p.replace(/^(\.\.\/)+/, "")
      const label = normalized.replace(/^knowledge\//, "").replace(/\.md$/i, "")
      return { key: p, path: normalized, label }
    })
  }, [modules])

  const [selected, setSelected] = useState<string | null>(fileList[0]?.key ?? null)
  const [content, setContent] = useState<string>("")
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (!selected) return
    let cancelled = false
    modules[selected]().then((raw: string) => {
      if (cancelled) return
      // Remove YAML frontmatter if present (--- ... ---)
      const withoutFrontmatter = raw.replace(/^---[\s\S]*?---\s*/, "")
      // Normalize CRLF -> LF
      const normalized = withoutFrontmatter.replace(/\r\n/g, "\n")
      setContent(normalized)
    })
    return () => {
      cancelled = true
    }
  }, [selected, modules])

  // Prevent copy
  const onCopy = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    <section
      id="vault"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => (window.location.hash = "")}
              className="px-4 py-2 border border-border rounded-md text-foreground hover:border-primary/50 transition-all duration-200 cursor-pointer"
            >
              ← Back
            </button>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Knowledge Vault
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode((d) => !d)}
              className="p-2 border border-border rounded-md text-foreground hover:border-primary/50 transition-all duration-200 cursor-pointer flex items-center justify-center"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              title={darkMode ? "Light mode" : "Dark mode"}
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`flex gap-6 h-[70vh] transition-all duration-300 rounded-lg overflow-hidden shadow-lg ${
            darkMode ? "bg-[#0f1720] text-white" : "bg-white text-black"
          }`}
          onCopy={onCopy}
          style={{ userSelect: "none" }}
        >
          {/* Sidebar */}
          <aside className="w-72 border-r border-border overflow-auto p-4">
            <div className="space-y-2">
              {fileList.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setSelected(f.key)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${
                    selected === f.key
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-background/5 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </aside>

          {/* Content */}
          <article className="flex-1 overflow-auto p-8">
            <div
              className="prose max-w-none space-y-6 leading-relaxed break-words whitespace-pre-wrap"
              style={{ lineHeight: 1.8 }}
            >
              {content ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                  {content}
                </ReactMarkdown>
              ) : (
                <p className="text-muted-foreground">Select a file to preview.</p>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}