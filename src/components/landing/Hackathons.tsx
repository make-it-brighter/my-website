interface HackathonsProps {
  limit?: number
  showChess?: boolean
  showTitle?: boolean
}

const competitions = [
  {
    name: 'Singapore Introductory Mooting Programme 2024',
    result: 'Semi-Finalist',
    type: 'Moot Court'
  },
  {
    name: "Attorney-General's Cup 2025",
    result: 'Round of 16',
    type: 'Moot Court'
  },
  {
    name: 'Blackoak Transactional Negotiation Competition 2025',
    result: 'Participant',
    type: 'Negotiation'
  },
]

export default function Hackathons({ limit, showChess, showTitle = true }: HackathonsProps) {
  const items = limit ? competitions.slice(0, limit) : competitions

  return (
    <section className="py-8 sm:py-12">
      {showTitle && (
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-6">
          Competitions
        </h2>
      )}
      <div className="grid gap-4">
        {items.map((comp, i) => (
          <div key={i} className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-white">{comp.name}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{comp.type}</p>
              </div>
              <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded-md shrink-0">
                {comp.result}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
