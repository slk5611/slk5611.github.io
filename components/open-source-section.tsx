import Link from "next/link"
import { Star, Moon, Lightbulb, Clock, Code, Github, FileCode } from "lucide-react"

export function OpenSourceSection() {
  const repos = [
    {
      name: "itjugadu",
      description: "Angular 10 Visitor site for IT community",
      stars: 0,
      language: "HTML",
      langColor: "#E34C26",
      url: "https://github.com/slk5611/itjugadu",
    },
    {
      name: "itjugadu-admin",
      description: "Admin dashboard built with Angular 10",
      stars: 0,
      language: "JavaScript",
      langColor: "#F7DF1E",
      url: "https://github.com/slk5611/itjugadu-admin",
    },
    {
      name: "itjugadu-api",
      description: "Node.js API backend for itjugadu platform",
      stars: 0,
      language: "JavaScript",
      langColor: "#F7DF1E",
      url: "https://github.com/slk5611/itjugadu-api",
    },
    {
      name: "corona-case-count-angular",
      description: "Real-time corona case tracking application",
      stars: 0,
      language: "TypeScript",
      langColor: "#3178C6",
      url: "https://github.com/slk5611/corona-case-count-angular",
    },
  ]

  const traits = [
    { icon: Moon, label: "Night-owl problem solver" },
    { icon: Lightbulb, label: "Curious learner" },
    { icon: Clock, label: "Systems that last" },
    { icon: Code, label: "Clean architecture advocate" },
  ]

  return (
    <section id="projects" className="border-t border-gray-800 px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <span className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
            <Github className="h-4 w-4" />
            Open Source
          </span>
        </div>

        {/* Title */}
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
          Contributing to the community through <span className="text-emerald-400">thoughtful code</span> and{" "}
          <span className="text-blue-500">collaborative problem-solving</span>
        </h2>

        <div className="mb-16 grid gap-4 md:grid-cols-2">
          {repos.map((repo) => (
            <Link
              key={repo.name}
              href={repo.url}
              target="_blank"
              className="block rounded-xl border border-gray-800 bg-gray-900/50 p-5 transition-all hover:border-gray-700 hover:bg-gray-900/80"
            >
              <div className="mb-2 flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <FileCode className="h-4 w-4 text-gray-400" />
                  <span className="font-medium text-white">{repo.name}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-400">
                  <Star className="h-4 w-4" />
                  <span className="text-sm">{repo.stars}</span>
                </div>
              </div>
              <p className="mb-3 text-sm text-gray-400">{repo.description}</p>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: repo.langColor }}></span>
                <span className="text-xs text-gray-500">{repo.language}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="mb-16 text-center">
          <p className="text-2xl italic text-gray-300 md:text-3xl">
            {'"Good code is simple, thoughtful, and built to last"'}
          </p>
        </blockquote>

        {/* Traits */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {traits.map((trait) => (
            <div key={trait.label} className="flex flex-col items-center gap-3 text-center">
              <trait.icon className="h-8 w-8 text-emerald-400" />
              <span className="text-sm text-gray-400">{trait.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
