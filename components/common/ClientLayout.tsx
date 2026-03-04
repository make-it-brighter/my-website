'use client'
import React from 'react'

interface ClientLayoutProps {
  children: React.ReactNode
  navbar: React.ReactNode
  footer: React.ReactNode
  oneko: React.ReactNode
  keyboardManager: React.ReactNode
}

export default function ClientLayout({ children, navbar, footer, oneko, keyboardManager }: ClientLayoutProps) {
  return (
    <>
      {navbar}
      <main className="min-h-screen">{children}</main>
      {footer}
      {oneko}
      {keyboardManager}
    </>
  )
}
