import { ArrowRight } from "lucide-react"

export function ExperienceSection() {
 const experiences = [
  {
    title: "E-Commerce Platform (Web & Mobile)",
    tech: ["Angular", "Node.js", "MongoDB"],
    points: [
      "Implemented Node.js APIs for product, order, and user workflows",
      "Delivered an Angular frontend focused on performance and usability",
      "Exposed dedicated APIs for mobile application integration",
      "Stored assets and uploads using AWS S3",
      "Managed configuration and secrets via AWS Secrets Manager",
    ],
  },
  {
    title: "On-Demand Service Provider Platform (Maid / Home Services)",
    tech: ["Node.js", "MongoDB"],
    points: [
      "Created backend and mobile APIs using Node.js and MongoDB",
      "Allowed service providers to register, manage profiles, and accept jobs",
      "Enabled customers to create service requests and find available providers",
      "Added role-based access with basic authentication and input validation",
    ],
  },
  {
    title: "Healthcare Analytics & Data Platform",
    tech: ["Node.js", "Angular", "MongoDB", "Kibana"],
    points: [
      "Delivered Node.js APIs for batch data processing and analytics",
      "Built Angular dashboards for enterprise search and reporting",
      "Integrated Elasticsearch for search and Kibana for system monitoring",
      "Enabled SSO authentication using OAuth, SAML, and JWT",
    ],
  },
  {
    title: "Desktop Time Tracking Application",
    tech: ["Node.js", "TypeScript", "Electron"],
    points: [
      "Implemented backend logic using Node.js and TypeScript",
      "Built a cross-platform desktop application using Electron.js",
      "Implemented time tracking logic including periodic screenshots",
      "Handled screenshot uploads and time data sync with backend APIs",
      "Added timezone handling to support users across different regions",
      "Supported background tracking and offline functionality",
    ],
  },
  {
    title: "Automotive Service Management System",
    tech: ["Node.js", "Angular", "AWS"],
    points: [
      "Created backend services to handle car washing, repair, and maintenance work",
      "Built Angular screens to show service status and payment progress to users",
      "Allowed users to see the current stage of their car service and payments",
      "Kept service data accurate and backend processing reliable",
    ],
  },
  {
    title: "High-Volume Batch Processing & Middleware",
    tech: ["Node.js", "Redis", "AWS", "MongoDB"],
    points: [
      "Built middleware in Node.js and TypeScript for large CSV and Excel uploads",
      "Processed files using streaming to handle high data volumes efficiently",
      "Controlled batch execution to prevent system overload",
      "Used Redis to retry failed jobs and improve reliability",
      "Returned batch results through webhooks for success and error cases",
      "Added structured logging and monitoring using Kibana",
      "Stored files and intermediate data in AWS S3",
      "Managed secrets securely using AWS Secrets Manager",
    ],
  },
  {
    title: "Core Platform & API Development",
    tech: ["Node.js", "Redis", "AWS", "ES", "SQS"],
    points: [
      "Maintained TypeScript-based Node.js APIs handling critical business logic",
      "Implemented batch pipelines for high-volume workloads",
      "Integrated Elasticsearch for fast data retrieval",
      "Used Kibana for diagnostics and operational insights",
      "Leveraged Databricks for analytical queries and large-scale data analysis",
      "Improved system stability through logging, monitoring, and error isolation",
    ],
  },
  {
  title: "AI Tooling & MCP Server Work",
  tech: ["Node.js", "TypeScript", "MCP SDK", "REST API", "Zod"],
  points: [
    "Extended an existing MCP server by adding custom tools",
    "Built a reverse geocode tool using latitude and longitude inputs",
    "Added strict input validation for safe and correct requests",
    "Connected to external APIs to fetch address details",
    "Handled errors such as invalid input, rate limits, and service failures",
  ],
},
]


  return (
    <section id="experience" className="border-t border-gray-800 px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-2 text-4xl font-bold text-white">Experience</h2>
        <div className="mb-12 h-1 w-24 bg-emerald-500"></div>
        <div className="relative">
          <div className="absolute left-3 top-0 h-full w-0.5 bg-gray-700 md:left-6"></div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.title} className="relative pl-10 md:pl-16">
                <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border-4 border-[#0d1117] bg-emerald-500 md:left-3"></div>
                <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      {exp.tech && (
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-xs text-emerald-400"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                  </div>
                  <ul className="space-y-3">
                    {exp.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2 text-gray-400">
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-gray-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
