export interface TestScore {
  name: string
  score?: string
  icon: string
}

export const testScores: TestScore[] = [
  {
    name: 'GCE A Levels',
    icon: '/assets/tests/alevels.png',
  },
]

export const courses = {
  ap: [] as string[],
  clep: [] as string[],
}
