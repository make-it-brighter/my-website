import React from 'react'
import { CommunityService } from '@/config/Community'

export function CommunityList({ community }: { community: CommunityService[] }) {
  if (community.length === 0) {
    return <p className="text-muted-foreground text-center">Community service entries coming soon.</p>
  }
  return (
    <div className="space-y-4">
      {community.map((item, i) => (
        <div key={i} className="border rounded-lg p-4">
          <h3 className="font-bold">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.organization} · {item.startDate} – {item.endDate}</p>
          <p className="mt-2">{item.description}</p>
        </div>
      ))}
    </div>
  )
}
