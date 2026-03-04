import type { Metadata } from 'next'

const siteConfig = {
  name: 'Rajpreet Singh',
  description: 'Year 2 Law Student at Singapore Management University. Interested in funds work and private credit.',
  url: 'https://rajpreetsingh.com',
}

export function generateMetadata(path: string): Metadata {
  const title = path === '/' ? siteConfig.name : `${getPageTitle(path)} | ${siteConfig.name}`

  return {
    title,
    description: siteConfig.description,
    openGraph: {
      title,
      description: siteConfig.description,
      siteName: siteConfig.name,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: siteConfig.description,
    },
  }
}

function getPageTitle(path: string): string {
  const titles: Record<string, string> = {
    '/about': 'About',
    '/education': 'Education',
    '/competitions': 'Competitions',
    '/achievements': 'Achievements',
  }
  return titles[path] || 'Page'
}
