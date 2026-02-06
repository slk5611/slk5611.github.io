import Link from "next/link"

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#181717">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#0A66C2">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="#3B82F6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function DevToIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#0A0A0A">
      <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.37 0 .70-.08.98-.35.28-.26.42-.63.42-1.08V11.3c0-.35-.12-.64-.37-.84zm11.21-9.02c-7.06 0-12.63 5.57-12.63 12.63s5.57 12.63 12.63 12.63S19.84 19.06 19.84 12 14.27 0 7.2 0h11.43zm-6.23 7.13c-.04-.01-.11-.02-.2-.02h-.44l-.52 5.35-.52-5.35h-.37c-.15 0-.3.01-.44.04-.26 1.57-1.04 5.02-1.27 6.26-.02.11-.04.22-.07.32-.1.5-.35 1.05-.73 1.37-.37.31-.8.44-1.26.44H4.6c-.35 0-.64.03-.88.1.09.27.2.48.3.64.21.16.46.24.75.24h.56c.4 0 .72-.04.95-.12.23-.09.38-.21.53-.39.17-.22.30-.52.39-.82l.52-5.12zM17.4 10.28h-.91v5.11c0 .47-.19.721-.57.721-.38 0-.58-.26-.58-.72v-5.11h-.91c.01.91.13 1.95.2 2.28.1.39.29.71.58.94.29.23.63.34 1.01.34.38 0 .72-.1 1.01-.34.29-.23.48-.55.58-.94.07-.33.19-1.37.2-2.28z" />
    </svg>
  )
}

function StackOverflowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#F48024">
      <path d="M20.565 2a1.978 1.978 0 0 0-1.974 1.974v9.887h3.948V3.974A1.978 1.978 0 0 0 20.565 2zm-13.565.5h-3v18h3v-18zm10 3h-3v15h3v-15z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900/50 px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <p className="text-gray-400">
              Built with care by <span className="text-blue-500">Shivlal Kumavat</span>
            </p>
            <p className="text-sm text-gray-500">
              © 2017–{new Date().getFullYear()} All rights reserved
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/slk5611"
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition-colors hover:border-gray-500"
              aria-label="GitHub"
            >
              <GithubIcon />
            </Link>
            <Link
              href="https://linkedin.com/in/shivlal-kumavat"
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition-colors hover:border-gray-500"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </Link>
            <Link
              href="https://dev.to/slk5611"
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition-colors hover:border-gray-500"
              aria-label="Dev.to"
            >
              <DevToIcon />
            </Link>
            <Link
              href="https://stackoverflow.com/users/5870711/shivlal-kumavat"
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition-colors hover:border-gray-500"
              aria-label="Stack Overflow"
            >
              <StackOverflowIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
