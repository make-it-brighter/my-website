interface ExperienceProps {
  limit?: number
}

const activities = [
  { title: 'SMUX Biking', role: 'President', type: 'Leadership' },
  { title: 'Corporate and Commercial Law Club', role: 'Publications Director', type: 'Law' },
  { title: 'Legal Innovation and Technology Club', role: 'Publications Director', type: 'Law' },
  { title: 'The Bar (SMU Law Student Body)', role: 'Finance Associate', type: 'Law' },
  { title: 'Project Obscura (SMU Wing)', role: 'Vice-President', type: 'Volunteering' },
  { title: 'OSLAS @ State Courts', role: 'Student Volunteer', type: 'Volunteering' },
  { title: 'YPHSOL Mentorship Programme', role: 'Mentor', type: 'Mentorship' },
]

export default function Experience({ limit }: ExperienceProps) {
  const items = limit ? activities.slice(0, limit) : activities

  return (
    <section className="py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-6">
        Activities & Leadership
      </h2>
      <div className="grid gap-4">
        {items.map((item, i) => (
          <div key={i} className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.role}</p>
              </div>
              <span className="px-2 py-1 text-xs font-medium bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400 rounded-md shrink-0">
                {item.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
