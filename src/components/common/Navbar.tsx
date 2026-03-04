'use client'
import { Link } from 'next-view-transitions'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-neutral-950/80 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="font-semibold text-lg text-neutral-900 dark:text-white">
            Rajpreet Singh
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors">
              About
            </Link>
            <Link href="/education" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors">
              Education
            </Link>
            <Link href="/competitions" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors">
              Competitions
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
