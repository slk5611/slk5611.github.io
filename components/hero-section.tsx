import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function NodejsIcon({
  className,
}: {
  className?: string
}) {
  return (
    <svg
      viewBox="-13 0 282 282"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Node.js"
      preserveAspectRatio="xMidYMid meet"
    >
      <g fill="#8CC84B">
        <path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z" />
        <path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" />
      </g>
    </svg>
  )
}


export function AngularIcon({
  className,
  color = "#DD0031",
}: {
  className?: string
  color?: string
}) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill={color}
        d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.242L23.32 3.984 11.999.001zm7.064 18.31h-2.638l-1.422-3.503H8.996l-1.422 3.504h-2.64L12 2.65z"
      />
    </svg>
  )
}

export function MongodbIcon({
  className,
  color = "#47A248",
}: {
  className?: string
  color?: string
}) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill={color}
        d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"
      />
    </svg>
  )
}

export function ElasticsearchIcon({
  className,
}: {
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
      className={className}
    >
      <path
        d="M255.96 134.393c0-21.521-13.373-40.117-33.223-47.43a75.239 75.239 0 0 0 1.253-13.791c0-39.909-32.386-72.295-72.295-72.295-23.193 0-44.923 11.074-58.505 30.088-6.686-5.224-14.835-7.94-23.402-7.94-21.104 0-38.446 17.133-38.446 38.446 0 4.597.836 9.194 2.298 13.373C13.582 81.739 0 100.962 0 122.274c0 21.522 13.373 40.327 33.431 47.64-.835 4.388-1.253 8.985-1.253 13.79 0 39.7 32.386 72.087 72.086 72.087 23.402 0 44.924-11.283 58.505-30.088 6.686 5.223 15.044 8.149 23.611 8.149 21.104 0 38.446-17.134 38.446-38.446 0-4.597-.836-9.194-2.298-13.373 19.64-7.104 33.431-26.327 33.431-47.64z"
        fill="#FFFFFF"
      />
      <path
        d="M100.085 110.364l57.043 26.119 57.669-50.565a64.312 64.312 0 0 0 1.253-12.746c0-35.52-28.834-64.355-64.355-64.355-21.313 0-41.162 10.447-53.072 27.998l-9.612 49.73 11.074 23.82z"
        fill="#F4BD19"
      />
      <path
        d="M40.953 170.75c-.835 4.179-1.253 8.567-1.253 12.955 0 35.52 29.043 64.564 64.564 64.564 21.522 0 41.372-10.656 53.49-28.208l9.403-49.729-12.746-24.238-57.251-26.118-56.207 50.774z"
        fill="#3CBEB1"
      />
      <path
        d="M40.536 71.918l39.073 9.194 8.775-44.506c-5.432-4.179-11.91-6.268-18.805-6.268-16.925 0-30.924 13.79-30.924 30.924 0 3.552.627 7.313 1.88 10.656z"
        fill="#E9478C"
      />
      <path
        d="M37.192 81.32c-17.551 5.642-29.67 22.567-29.67 40.954 0 17.97 11.074 34.059 27.79 40.327l54.953-49.73-10.03-21.52-43.043-10.03z"
        fill="#2C458F"
      />
      <path
        d="M167.784 219.852c5.432 4.18 11.91 6.478 18.596 6.478 16.925 0 30.924-13.79 30.924-30.924 0-3.761-.627-7.314-1.88-10.657l-39.073-9.193-8.567 44.296z"
        fill="#95C63D"
      />
      <path
        d="M175.724 165.317l43.043 10.03c17.551-5.85 29.67-22.566 29.67-40.954 0-17.97-11.074-33.849-27.79-40.326l-56.415 49.311 11.492 21.94z"
        fill="#176655"
      />
    </svg>
  )
}

export function AwsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 240" className={className}>
      <path
        fill="#FF9900"
        d="M57 180c80 40 206 40 286 0l-12 14c-88 52-216 52-304 0z"
      />
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        fontSize="120"
        fontWeight="700"
        fill="#FFFFFF"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        aws
      </text>
    </svg>
  )
}


export function HeroSection() {
  const techStack = [
    { name: "Node.js", icon: NodejsIcon, color: "#339933" },
    { name: "Angular", icon: AngularIcon, color: "#DD0031" },
    { name: "MongoDB", icon: MongodbIcon, color: "#47A248" },
    { name: "Elasticsearch", icon: ElasticsearchIcon, color: "#005571" },
    { name: "AWS", icon: AwsIcon, color: "#FF9900" },
  ]

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-20"
    >
      {/* Profile Image */}
      <div className="mb-6 h-32 w-32 overflow-hidden rounded-full ring-4 ring-gray-700 ring-offset-4 ring-offset-[#0a0a0f]">
        <img src="/profile-shivlal.jpeg" alt="Shivlal Kumavat" className="h-full w-full object-cover" />
      </div>

      {/* Name */}
      <p className="mb-4 text-lg text-gray-400">
        {"Hi, I'm"} <span className="text-blue-500">Shivlal Kumavat</span>
      </p>

      {/* Title */}
      <h1 className="mb-2 text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl">
        Senior Full-Stack Developer
      </h1>
      <h2 className="mb-6 text-center text-3xl font-bold text-blue-500 md:text-4xl lg:text-5xl">Node.js Specialist</h2>

      {/* Description */}
      <p className="mb-8 max-w-2xl text-center text-gray-400">
        Crafting scalable, high-performance web applications with modern JavaScript technologies and robust backend
        architectures.
      </p>

      {/* Availability Badge */}
      <div className="mb-8 flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800/50 px-4 py-2">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
        <span className="text-sm text-gray-300">Available for new opportunities</span>
      </div>

      {/* CTA Buttons */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="#projects"
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
        >
          View My Work
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="#contact"
          className="rounded-lg border border-gray-600 bg-transparent px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800"
        >
          Get In Touch
        </Link>
      </div>

      {/* Tech Stack */}
      <div className="flex gap-6">
        {techStack.map(({ name, icon: Icon, color }) => (
          <div key={name} className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center">
              <Icon className="h-10 w-10" color={color} />
            </div>
            <span className="text-sm text-gray-400">{name}</span>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <a
        href="#blog"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer opacity-70 hover:opacity-100 transition"
      >
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-gray-600 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-gray-400"></div>
        </div>
      </a>
    </section>
  )
}
