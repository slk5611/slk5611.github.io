import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export function AboutSection() {
  const stats = [
    { value: "9+", label: "Years Experience" },
    { value: "10+", label: "Projects Completed" },
    { value: "10+", label: "Technologies" },
    { value: "15+", label: "Happy Clients" },
  ]

  return (
    <section id="about" className="border-t border-gray-800 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-12 text-4xl font-bold text-white">About Me</h2>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-gray-400 leading-relaxed">
              I'm a Senior Full-Stack Developer with a strong focus on Node.js. I've spent years building end-to-end web
              applications using modern JavaScript stacks.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I enjoy solving real-world problems, learning continuously, and turning ideas into reliable, user-friendly
              products. I care about clean code, scalable architecture, and building systems that work in production.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Based in Surat, India, I've worked with teams across different time zones, delivering high-quality
              solutions that meet business needs and exceed expectations.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Link
                href="https://github.com/slk5611"
                target="_blank"
                className="flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
              >
                <Github className="h-4 w-4" />
                GitHub Profile
              </Link>
              <Link
                href="https://linkedin.com/in/shivlal-kumavat"
                target="_blank"
                className="flex items-center gap-2 rounded-lg border border-blue-600 bg-transparent px-5 py-2.5 text-sm font-medium text-blue-500 transition-colors hover:bg-blue-600/10"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
                <div className="text-3xl font-bold text-blue-500">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
