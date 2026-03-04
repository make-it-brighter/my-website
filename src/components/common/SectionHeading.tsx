import React from 'react'

interface SectionHeadingProps {
  heading: string
  subHeading?: string
}

export default function SectionHeading({ heading, subHeading }: SectionHeadingProps) {
  return (
    <div className="space-y-2">
      {subHeading && <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{subHeading}</p>}
      <h2 className="text-3xl font-bold tracking-tight">{heading}</h2>
    </div>
  )
}
