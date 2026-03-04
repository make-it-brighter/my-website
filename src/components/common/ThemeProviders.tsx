'use client'
import React, { useEffect, useState } from 'react'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>
  }

  const { ThemeProvider: NextThemesProvider } = require('next-themes')

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  )
}
