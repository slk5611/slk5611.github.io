"use client"

import { useState } from "react"
import { Mail, Github, Linkedin, MapPin, Copy, Check } from "lucide-react"

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("slk.kumavat@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const codeSnippet = `// Let's build something amazing together
const developer = {
  name: "Shivlal Kumavat",
  role: "Senior Full Stack Developer",
  location: "Surat, India",
  expertise: ["Node.js", "Angular", "MongoDB", "ES", "AWS"],

  contact: async () => {
    return {
      email: "slk.kumavat@gmail.com",
      availability: "Open to opportunities",
      responseTime: "24-48 hours"
    };
  },

  collaborate: () => {
    console.log("Ready to discuss your project!");
  }
};

developer.collaborate();`

  return (
    <section id="contact" className="border-t border-gray-800 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-bold text-white">Let's Connect</h2>
        <p className="mb-12 text-center text-gray-400">
          Always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Code Block */}
          <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900">
            {/* Window Header */}
            <div className="flex items-center gap-2 border-b border-gray-800 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-sm text-gray-500">developer.js</span>
            </div>
            {/* Code Content */}
            <pre className="overflow-x-auto p-4 text-sm">
              <code className="text-gray-300 font-mono whitespace-pre">{codeSnippet}</code>
            </pre>
          </div>

          {/* Contact Cards */}
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center justify-between rounded-xl border border-gray-800 bg-gray-900/50 p-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20">
                  <Mail className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium text-white">slk.kumavat@gmail.com</p>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 rounded-lg border border-emerald-500 px-4 py-2 text-sm font-medium text-emerald-400 transition-colors hover:bg-emerald-500/10"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied!" : "Copy Email"}
              </button>
            </div>

            {/* GitHub */}
            <div className="flex items-center justify-between rounded-xl border border-gray-800 bg-gray-900/50 p-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-700">
                  <Github className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <p className="font-medium text-white">@slk5611</p>
                </div>
              </div>
              <a
                href="https://github.com/slk5611"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-emerald-500 px-4 py-2 text-sm font-medium text-emerald-400 transition-colors hover:bg-emerald-500/10"
              >
                Visit Profile
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center justify-between rounded-xl border border-gray-800 bg-gray-900/50 p-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
                  <Linkedin className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <p className="font-medium text-white">Shivlal Kumavat</p>
                </div>
              </div>
              <a
                href="https://linkedin.com/in/shivlal-kumavat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-emerald-500 px-4 py-2 text-sm font-medium text-emerald-400 transition-colors hover:bg-emerald-500/10"
              >
                Connect
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-4 text-center">
                <p className="text-2xl font-bold text-emerald-400">24-48h</p>
                <p className="text-sm text-gray-400">Response Time</p>
              </div>
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-4 text-center">
                <p className="text-2xl font-bold text-emerald-400">100%</p>
                <p className="text-sm text-gray-400">Commitment</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 rounded-xl border border-gray-800 bg-gray-900/50 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20">
                <MapPin className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Based in</p>
                <p className="font-medium text-white">Surat, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
