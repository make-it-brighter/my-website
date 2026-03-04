'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 py-8 sm:py-12">
      <div className="relative shrink-0">
        <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 rounded-full scale-110" />
        <Image
          src="/profile/rajpreet.jpeg"
          alt="Rajpreet Singh"
          width={160}
          height={160}
          className="relative size-28 sm:size-40 rounded-full object-cover ring-1 ring-neutral-200/50 dark:ring-white/10 shadow-xl"
          priority
        />
      </div>
      <div className="text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-3">
          Rajpreet Singh
        </h1>
        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 mb-4">
          Year 2 Law Student at Singapore Management University
        </p>
        <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-xl">
          SMU law student focused on corporate and commercial law, with an interest in how good structures and clean reasoning turn messy realities into workable decisions. 
Builds projects around writing, community work, and systems that make execution smoother across school, leadership roles, and creative work. 
This site is a snapshot of what&apos;s being learned, built, and refined.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 justify-center sm:justify-start">
          <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">GPA: 3.77/4.00</span>
          <span className="px-3 py-1 text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 rounded-full">Dean&apos;s List</span>
        </div>
      </div>
    </section>
  )
}
