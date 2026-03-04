import { Link } from 'next-view-transitions'
import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section className="py-12 sm:py-16 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
        Let&apos;s Connect
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-md mx-auto">
        I&apos;m open to opportunities in corporate law and funds work.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link href="/about">
          <Button>Get in Touch</Button>
        </Link>
        <a href="mailto:rajpreet.ss.2024@law.smu.edu.sg">
          <Button variant="outline">Email Me</Button>
        </a>
      </div>
    </section>
  )
}
