export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8 mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
        <p>&copy; {new Date().getFullYear()} Rajpreet Singh. All rights reserved.</p>
      </div>
    </footer>
  )
}
