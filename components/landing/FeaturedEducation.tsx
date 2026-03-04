export default function FeaturedEducation() {
  return (
    <section className="py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-6">
        Education
      </h2>
      <div className="space-y-6">
        {/* SMU */}
        <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="font-semibold text-lg text-neutral-900 dark:text-white">Bachelor of Laws</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Singapore Management University</p>
            </div>
            <span className="text-sm text-neutral-500 dark:text-neutral-500 shrink-0">2024 - Present</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
              GPA: 3.77/4.00
            </span>
            <span className="px-3 py-1 text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 rounded-full">
              Dean&apos;s List AY 2024/2025
            </span>
            <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full">
              Shook Lin & Bok Book Prize
            </span>
          </div>
        </div>

        {/* ACJC */}
        <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="font-semibold text-lg text-neutral-900 dark:text-white">GCE A Levels</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Anglo-Chinese Junior College</p>
            </div>
            <span className="text-sm text-neutral-500 dark:text-neutral-500 shrink-0">2020 - 2021</span>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
            ACJC Hockey - 2019 Plate Tournament Champions, National School Games &apos;A&apos; Division representative
          </p>
        </div>
      </div>
    </section>
  )
}
