import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export function BlogSection() {
const posts = [
  // 1️⃣ NODE.JS / BACKEND
  {
    title: "Batch APIs in Node.js: Where Most Systems Fail",
    description:
      "Real-world lessons from building batch processing systems in Node.js and how to avoid silent failures.",
    category: "Node.js",
    date: "Jul 2024",
    readTime: "8 min read",
    image: "/blog/batch-api-node.jpg",
    url: "https://www.linkedin.com/posts/shivlal-kumavat_nodejs-apidesign-batchprocessing-activity-7412708642828939265-DE2k",
  },
  {
    title: "Building a Simple REST API using Node.js & Express",
    description:
      "A beginner-friendly yet production-ready guide to building REST APIs with Node.js and MongoDB.",
    category: "Node.js",
    date: "Apr 2024",
    readTime: "9 min read",
    image: "/blog/rest-api-node.png",
    url: "https://dev.to/slk5611/building-a-simple-rest-api-using-node-js-and-express-with-mongodb-2aik",
  },

  // 2️⃣ DATABASE / QUEUES
  {
    title: "Redis Queue: Optimising Workflows with Message Queues",
    description:
      "How Redis-based queues can significantly improve async processing and background job handling.",
    category: "Backend",
    date: "Jun 2024",
    readTime: "7 min read",
    image: "/blog/redis-queue.png",
    url: "https://dev.to/slk5611/redis-queue-optimising-workflows-with-message-queues-2341",
  },
  {
    title: "Avoid a Malicious Attack in MongoDB",
    description:
      "A real production incident: how a MongoDB attack happened and the concrete steps taken to fix it.",
    category: "Database",
    date: "May 2024",
    readTime: "6 min read",
    image: "/blog/mongodb-security.png",
    url: "https://dev.to/slk5611/avoid-a-malicious-attack-mongodb-how-it-happened-and-what-we-did-about-it-51hg",
  },

  // 3️⃣ ANGULAR
  {
    title: "How to Access the Previous Route in Angular",
    description:
      "Practical techniques to track navigation history and access previous routes in Angular apps.",
    category: "Angular",
    date: "Mar 2024",
    readTime: "5 min read",
    image: "/blog/angular-routing.png",
    url: "https://dev.to/slk5611/how-to-access-the-previous-route-in-your-angular-app-5db0",
  },
  {
    title: "Why Ivy in Angular is a Game Changer",
    description:
      "Understanding Angular Ivy and why it significantly improves build size and performance.",
    category: "Angular",
    date: "Dec 2023",
    readTime: "6 min read",
    image: "/blog/angular-ivy.webp",
    url: "http://dev.to/slk5611/why-ivy-in-angular-3k5h",
  },
 {
    title: "Add Meta Tags and Title Dynamically for SEO using Angular Component",
    description:
      "How meta tags are used for search engine optimization to describe the page content",
    category: "Angular",
    date: "Jan 2021",
    readTime: "5 min read",
    image: "/blog/meta-tags.png",
    url: "https://dev.to/slk5611/add-meta-tags-and-title-dynamically-for-seo-using-angular-component-145b",
  },
  // 4️⃣ OTHER (LEADERSHIP / CAREER)
  {
    title: "How to Lead Your Remote Team to Improve Productivity",
    description:
      "Lessons learned from leading remote engineering teams and improving delivery outcomes.",
    category: "Leadership",
    date: "Feb 2024",
    readTime: "6 min read",
    image: "/blog/remote-team.png",
    url: "https://dev.to/slk5611/how-to-lead-your-remote-team-to-improve-productivity-4k5n",
  },
  {
    title: "5 Most Important Skills for Software Developers",
    description:
      "Beyond coding: the essential skills every modern software developer must build.",
    category: "Career",
    date: "Jan 2024",
    readTime: "5 min read",
    image: "/blog/developer-skills.png",
    url: "https://dev.to/slk5611/5-most-important-skills-for-software-developers-i54",
  },
]

  return (
    <section id="blog" className="border-t border-gray-800 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-bold text-white">
          Blog & Articles
        </h2>
        <p className="mb-12 text-center text-gray-400">
          Real-world engineering insights from production systems, backend APIs,
          and team leadership
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 transition-all hover:border-gray-700"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-md bg-blue-600 px-2 py-1 text-xs font-medium text-white">
                  {post.category}
                </span>
              </div>

              <div className="p-5">
                <div className="mb-3 flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-semibold text-white line-clamp-2">
                  {post.title}
                </h3>

                <p className="mb-4 text-sm text-gray-400 line-clamp-3">
                  {post.description}
                </p>

                <Link
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
